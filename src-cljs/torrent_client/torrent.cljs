(ns torrent-client.torrent
  (:require 
    [torrent-client.core.dispatch :as dispatch]
    [torrent-client.core.db :as db]
    [torrent-client.bitfield :as bitfield]
    [filesystem.filesystem :as filesystem]
    [filesystem.entry :as entry]
    [cljconsole.main :as console]
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

(defn has-full-metadata? [torrent]
  (if-not (coll? torrent)
    (has-full-metadata? @torrent)
    (boolean (and (torrent :pretty-info-hash)
                  (torrent :pieces-hash)
                  (torrent :files)))))

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
        info-byte-array (uint8-array info-bencode)
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
        ; the torrent, they are managed seperately in files.cljs
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
   :info-byte-array info-byte-array
   :info-length (count info-byte-array)
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

(defn- with-blank-bitfield [metadata]
  (let [; Create an empty bitfield of the correct length
        bitfield (bitfield/bitfield (metadata :pieces-length))
        metadata (assoc metadata :bitfield bitfield
                                 :pieces-written 0)]
    metadata))

(defn read-metainfo-byte-array [byte-array]
  "Given a byte array of a torrent file, decode it then
   extract the important bits of information"
  (let [reader (push-back-reader (uint8-array byte-array 0))
        metadata (process-metadata (decode reader))]
    (with-blank-bitfield metadata)))

(defn read-info-byte-array [torrent byte-array]
  "Given just the info section of a torrent, decode and process it"
  (let [reader (push-back-reader (uint8-array byte-array 0))
        ; Add data provided by the magnet link
        metadata {:info (decode reader)
                  :announce-list (@torrent :announce-list)
                  :name (@torrent :name)}
        metadata (process-metadata metadata)]
    (with-blank-bitfield metadata)))

(defn read-metainfo-db
  "Given torrent data saved in the db process it"
  [db-entry]
  ; If the entry doesn't have all it's metadata it won't have a bitfield
  (if (has-full-metadata? db-entry)
    (let [bitfield (bitfield/bitfield (db-entry :bitfield))
          db-entry (assoc db-entry :bitfield bitfield)]
      db-entry)
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
    "If not given any file data just use nil (empty file)"
    (let [files (take (count (metainfo :files)) (repeat nil))]
      (write-torrent-files metainfo files)))
  ([metainfo files]
    (async [success-callback _]
      (let-async [:let requested-bytes (metainfo :total-length)
                  ; TODO: check usage across every file in use
                  :let requested-bytes (* 1024 1024 1024)
                  ; Request the space to store the complete files
                  granted-bytes (filesystem/request-quota :PERSISTENT requested-bytes)
                  fs (filesystem/request-file-system :PERSISTENT granted-bytes)
                  ; write every file to disk
                  :let writer #(write-file fs %1 %2)
                  files (map-async writer (metainfo :files) files)]
        (success-callback files)))))

;************************************************
; Creating a torrent from user supplied files
;************************************************

(defn hashes
  "Break stream of files into pieces and hash the pieces"
  ([files piece-length] (hashes files piece-length 0 []))
  ([files piece-length i output]
    (async [success-callback _]
      (hashes files piece-length i output success-callback)))
  ([files piece-length i output success-callback]
    ; (console/time (str "get-file-piece" i))
    (let-async [piece (get-file-piece files piece-length i)]
      ; (console/time-end (str "get-file-piece" i))
      (if piece
        (do 
          (console/time (str "hash" i))
          (let [hashed (hash piece)]
            (console/time-end (str "hash" i))
            (hashes files piece-length (inc i) (conj output hashed) success-callback)))
        (success-callback output)))))

(defn file-metainfo [file]
  "Given a raw file return its name and length"
  {:path (aget file "name") :length (aget file "size")})

(defn piece-length [total-length]
  "Given the total size of the torrent work out an appropriate size
   for each of its component pieces"
  (let [exp (cond
              (> total-length (* 2048 1024 1024)) 20 ; > 2gb
              (> total-length (* 512 1024 1024)) 19 ; > 512mb
              (> total-length (* 64 1024 1024)) 18 ; > 64mb
              (> total-length (* 16 1024 1024)) 17 ; > 16mb
              (> total-length (* 4 1024 1024)) 16 ; > 4mb
              :else 15)]
    (Math/pow 2 exp)))

(defn files-metainfo [files]
  "Given files create all the meta needed to write them"
  (let [files-metainfo (map file-metainfo files)
        total-length (reduce + (map :length files-metainfo))]
    {:files files-metainfo
     :total-length total-length
     :piece-length (piece-length total-length)}))

(defn generate-files [data files]
  "Given files generate piece-files for each of them"
  (let [; build file data from the provided files
        file-boundaries (file-boundaries (data :files))
        ; compute the file boundaries then add them to the file data
        files-data (map merge (data :files) file-boundaries)]
    (map #(generate-file % %2 (data :piece-length)) files files-data)))

(defn create-torrent [form {:keys [total-length piece-length files]} piece-files]
  (async [success-callback _]
    ; (console/time "hasher")
    (let-async [hashes (hashes piece-files piece-length)]
      ; (console/time-end "hasher")
      (let [metainfo {:info 
                       {:pieces (apply str hashes)
                        (keyword "piece length") piece-length
                        :name (form :name)
                        :length total-length
                        :files files}
                      :announce (form :tracker)}
            metadata (process-metadata metainfo)
            bitfield (bitfield/bitfield (metadata :pieces-length))
            bitfield (bitfield/fill-bitfield! bitfield (metadata :pieces-length))
            metadata (assoc metadata :bitfield bitfield
                                     :pieces-written (metadata :pieces-length)
                                     :announce (form :tracker))]
        (success-callback metadata)))))

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
    (dispatch/fire :processed-metadata metadata))))

(defn- add-byte-array [metadata]
  "General method to handle adding torrents from byte-arrays"
  (let-async [files (write-torrent-files metadata)]
    (torrent-files (atom metadata) files)
    (dispatch/fire :processed-metadata metadata)))

; Given an byte-array of metadata (metadata from url)
(dispatch/react-to #{:add-metainfo-byte-array} (fn [_ byte-array]
  (add-byte-array (read-metainfo-byte-array byte-array))))

; Given a byte-array of the info section of a torrent
; (e.g: from a peer)
(dispatch/react-to #{:add-info-byte-array} (fn [_ [torrent byte-array]]
  (add-byte-array (read-info-byte-array torrent byte-array))))

; When the user submits a form with details for a torrent
(dispatch/react-to #{:create-torrent} (fn [_ form]
  ; Write the provided files to fs before continuing
  (let-async [:let files-metainfo (files-metainfo (form :files))
              files (write-torrent-files files-metainfo (form :files))
              ; Turn the form files into piece-files that can be sliced
              :let piece-files (generate-files files-metainfo files)
              metadata (create-torrent form files-metainfo piece-files)]
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