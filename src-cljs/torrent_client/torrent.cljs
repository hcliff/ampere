(ns torrent-client.torrent
  (:require 
    [torrent-client.core.dispatch :as dispatch]
    [torrent-client.core.db :as db]
    [torrent-client.bitfield :as bitfield]
    [filesystem.filesystem :as filesystem]
    [filesystem.entry :as entry]
    [goog.crypt :as crypt])
  (:use
    [torrent-client.core.string :only [partition-string pad-string-left]]
    [torrent-client.core.url :only [http-scheme?]]
    [torrent-client.core.reader :only [push-back-reader]]
    [torrent-client.core.bencode :only [encode decode]]
    [torrent-client.core.byte-array :only [uint8-array]]
    [torrent-client.core.crypt :only [sha1]]
    [torrent-client.storage :only [connection]]
    [torrent-client.pieces :only [get-file-piece]]
    [torrent-client.files :only [files generate-file file-boundaries read-file write-file]]
    [async.helpers :only [map-async]])
  (:use-macros 
    [async.macros :only [async let-async]]))

;;************************************************
;; Torrent state
;;************************************************

(defn active? [torrent]
  "Take either a collection or atom and return it's active status"
  (if-not (coll? torrent)
    (active? @torrent)
    true
    ; (= :processed (torrent :status))
    ))

(def paused? (complement active?))

(defn completed? [torrent]
  "Take a collection or atom and determin if the torrent has finished"
  (if-not (coll? torrent)
    (completed? @torrent)
    (and (has-full-metadata? torrent)
         (>= (torrent :pieces-written) (torrent :pieces-length)))))

(def downloading? (complement completed?))

(defn has-full-metadata? [torrent]
  (if-not (coll? torrent)
    (has-full-metadata? @torrent)
    (boolean (and (torrent :pretty-info-hash)
                  (torrent :pieces-hash)
                  (torrent :files)))))

;************************************************
; Functions for processing torrent data into
; all the information we need to download it
;************************************************

(defn pretty-info-hash [info-hash]
  (pad-string-left (crypt/byteArrayToHex info-hash) "0" 40))

(defn info-hash [pretty-info-hash]
  (crypt/hexToByteArray pretty-info-hash))

(defn process-metadata [metadata]
  (let [info (metadata :info)
        info-bencode (encode info)
        info-hash (sha1 info-bencode)
        ; Used as a key to refer to the torrent
        pretty-info-hash (pretty-info-hash info-hash)
        
        ; The blocks in the file
        ; each 20 byte hash represents a block
        pieces-hash (partition-string 20 (info :pieces))
        pieces-length (count pieces-hash)
        ; number of bytes in each block (integer)
        piece-length (info (keyword "piece length"))

        ; Build an array of the announce list
        ; metadata announce-list may not exist
        announce [(metadata :announce)]
        announce-list (reduce conj announce (flatten (metadata :announce-list)))

        ; NOTE: the actual torrent files are not referred to in
        ; the torrent, they are managed seperately in pieces.cljs
        files-list (info :files)
        files (or files-list [{:path (info :name) :length (info :length)}])
        file-boundaries (file-boundaries files)
        ; compute the file boundaries then add them to the file data
        files (map merge files file-boundaries)

        total-length (reduce + (map :length files))
        
        last-piece-length (rem total-length piece-length)
        ; If the remainder is 0 then the last piece must be a complete block
        last-piece-length (if (zero? last-piece-length) 
                            piece-length last-piece-length)]
  {:info-hash info-hash
   :info-byte-array (uint8-array info-bencode)
   :pretty-info-hash pretty-info-hash
   :encoding (metadata :encoding)
   :pieces-hash pieces-hash
   :pieces-length pieces-length
   :piece-length piece-length
   :announce-list (filter http-scheme? announce-list)
   :comment (info :comment)
   :name (info :name)
   :files files
   :total-length total-length
   :last-piece-length last-piece-length}))

(defn read-metainfo-byte-array 
  "Given a byte array of a torrent file, decode it then
   extract the important bits of information"
  [byte-array]
  (let [reader (push-back-reader (uint8-array byte-array 0))
        metadata (process-metadata (decode reader))
        ; Create an empty bitfield of the correct length
        bitfield (bitfield/bitfield (metadata :pieces-length))
        metadata (assoc metadata :bitfield bitfield
                                 :pieces-written 0)]
    metadata))

(defn read-metainfo-db
  "Given torrent data saved in the db process it"
  [db-entry]
  (let [bitfield (bitfield/bitfield (db-entry :bitfield))
        db-entry (assoc db-entry :bitfield bitfield)]
    db-entry))

(defn read-metadata-file 
  "Given a metainfo file, read it as an byte-array then process it"
  [torrent-file]
  (async [success-callback _]
    (let-async [torrent-file (filesystem/filereader torrent-file)]
      (success-callback (read-metainfo-byte-array torrent-file)))))

(defn read-magnet-link
  "Given a magnet link grab as much data as we can"
  [x]
   {:announce-list (filter http-scheme? (x :announce-list))
    :name (x :name "")
    :info-hash (info-hash (x :info-hash))
    :pretty-info-hash (x :info-hash)})

;************************************************
; When a torrent is initialized create
; filesystem entries
;************************************************

(defn read-torrent-files [torrent]
  (async [success-callback _]
    (let-async [fs (filesystem/request-file-system :PERSISTENT 0)
                :let reader #(read-file fs %1)
                :let files (map :path (torrent :files))
                files (map-async reader files)]
      (success-callback files))))

(defn write-torrent-files 
  ([metainfo]
    "If not given any file data just use nil"
    (let [files (take (count (metainfo :files)) (repeat nil))]
      (write-torrent-files metainfo files)))
  ([metainfo files]
    (async [success-callback _]
      (let-async [:let requested-bytes (metainfo :total-length)
                  ; Request the space to store the complete files
                  granted-bytes (filesystem/request-quota :PERSISTENT requested-bytes)
                  fs (filesystem/request-file-system :PERSISTENT granted-bytes)
                  ; write every file to disk
                  :let writer #(write-file fs %1 %2)
                  :let file-paths (map :path (metainfo :files))
                  files (map-async writer file-paths files)]
        (success-callback files)))))

;************************************************
; Creating a torrent from user supplied files
;************************************************

(defn hashes
  ([torrent files] (hashes torrent files 0 []))
  ([torrent files i output]
    (async [success-callback _]
      (hashes torrent files i output success-callback)))
  ([torrent files i output success-callback]
    (.time js/console (str "get-file-piece" i))
    (let-async [piece (get-file-piece files (@torrent :piece-length) i)]
      (.timeEnd js/console (str "get-file-piece" i))
      (if piece
        (do 
          (.time js/console (str "hash" i))
          (let [hashed (hash piece)]
            (.timeEnd js/console (str "hash" i))
            (hashes torrent files (inc i) (conj output hashed) success-callback)))
        (success-callback output)))))

(defn file-metainfo
  "Given a list of files return their name and length"
  [file]
  {:path (.-name file) :length (.-size file)})

(defn piece-length [length]
  (let [exp (cond
              (> length (* 2048 1024 1024)) 20 ; > 2gb
              (> length (* 512 1024 1024)) 19 ; > 512mb
              (> length (* 64 1024 1024)) 18 ; > 64mb
              (> length (* 16 1024 1024)) 17 ; > 16mb
              (> length (* 4 1024 1024)) 16 ; > 4mb
              :else 15)]
    (Math/pow 2 exp)))

(defn create-torrent [{:keys [tracker files] :as form}]
  (async [success-callback _]
    ; (js* "debugger;")
    (let [files-metainfo (map file-metainfo files)
          total-length (reduce + (map :length files-metainfo))
          piece-length (piece-length total-length)
          ; generate-file typically expects a torrent atom
          metainfo (atom {:piece-length piece-length})

          ; build file data from the provided files
          file-boundaries (file-boundaries files-metainfo)
          ; compute the file boundaries then add them to the file data
          files-data (map merge files-metainfo file-boundaries)

          files (map #(generate-file metainfo % %2) files files-data)]
      ; (.time js/console "hasher")
      (let-async [hashes (hashes metainfo files)]
        ; (.log js/console (vec hashes))
        ; (.timeEnd js/console "hasher")
        (let [metainfo {
                :info {
                  :pieces (apply str hashes)
                  (keyword "piece length") piece-length
                  :name (form :name)
                  :files files-metainfo
                  :length (reduce + (map :length files-metainfo))}
                :announce tracker}
              metadata (process-metadata metainfo)
              bitfield (bitfield/bitfield (metadata :pieces-length))
              metadata (assoc metadata :bitfield bitfield
                                       :pieces-written (metadata :pieces-length)
                                       :announce tracker)]
          (success-callback metadata))))))

(defn create-torrent-file-metainfo [metainfo]
  ".torrents have a subset of the metainfo we track"
  (let [metainfo (assoc metainfo "piece length" (metainfo :piece-length))
        metainfo (dissoc metainfo :bitfield :pieces-written :piece-length)]
    metainfo))

(defn share-torrent [torrent]
  "Given a torrent return itself and the data for a .torrent file"
  (let [torrent-file-metainfo (create-torrent-file-metainfo @torrent)
        torrent-file (encode torrent-file-metainfo)]
    [torrent torrent-file]))

;************************************************
; Create torrents from various client events
;************************************************

(defn torrent-files [torrent files]
  "Dispatch helper"
  (let [dispatcher #(dispatch/fire :add-file [torrent % %2])]
    ; Track all the file entires
    (doall (map dispatcher files (@torrent :files)))))

; When a torrent is loaded from the db
(dispatch/react-to #{:add-metainfo-db} (fn [_ metadata]
  (let-async [:let metadata (read-metainfo-db metadata)
              ; The files allready exist on the filesystem
              ; generate file handlers
              files (read-torrent-files metadata)]
    (torrent-files (atom metadata) files)
    (dispatch/fire :processed-metadata metadata))))

; When the add-torrent form is submitted
(dispatch/react-to #{:add-metainfo-file} (fn [_ metadata-file]
  (let-async [metadata (read-metadata-file metadata-file)
              files (write-torrent-files metadata)]
    (torrent-files (atom metadata) files)
    (dispatch/fire :processed-metadata torrent))))

; Given an byte-array of metadata (metadata from url)
(dispatch/react-to #{:add-metainfo-byte-array} (fn [_ byte-array]
  (let-async [:let metadata (read-metainfo-byte-array byte-array)
              files (write-torrent-files metadata)]
    (torrent-files (atom metadata) files)
    (dispatch/fire :processed-metadata metadata))))

; When the user submits a form with details for a torrent
(dispatch/react-to #{:create-torrent} (fn [_ form]
  ; Write the provided files to fs before continuing
  (let-async [metadata (create-torrent form)
              files (write-torrent-files metadata (form :files))]
    (torrent-files (atom metadata) files)
    (dispatch/fire :processed-metadata metadata)
    ; Inform the UI the torrent has been built
    ; (dispatch/fire :share-torrent torrent)
    )))

; When given some basic metadata via the magnet link
(dispatch/react-to #{:add-magnet-link} (fn [_ metadata]
  (let [metadata (read-magnet-link metadata)]
    ; Set up the torrent and grab the rest of the metadata from peers
    (dispatch/fire :processed-metadata metadata))))