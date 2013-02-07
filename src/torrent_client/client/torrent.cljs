(ns torrent-client.client.torrent
  (:require 
    [torrent-client.client.core.dispatch :as dispatch]
    [torrent-client.client.core.db :as db]
    [torrent-client.client.bitfield :as bitfield]
    [filesystem.filesystem :as filesystem]
    [filesystem.entry :as entry]
    [goog.crypt :as crypt])
  (:use
    [torrent-client.client.core.string :only [partition-string pad-string-left]]
    [torrent-client.client.core.url :only [http-scheme?]]
    [torrent-client.client.core.reader :only [push-back-reader]]
    [torrent-client.client.core.bencode :only [encode decode uint8-array]]
    [torrent-client.client.core.crypt :only [sha1]]
    [torrent-client.client.storage :only [connection]]
    [torrent-client.client.pieces :only [get-file-piece]]
    [torrent-client.client.files :only [files generate-file file-boundaries read-file write-file]]
    [async.helpers :only [map-async]])
  (:use-macros 
    [async.macros :only [async let-async]]))

;************************************************
; Functions for processing torrent data into
; all the information we need to download it
;************************************************

(defn process-metadata [metadata]
  (let [info (metadata :info)
        info-hash (sha1 (encode info))
        ; Used as a key to refer to the torrent
        pretty-info-hash (pad-string-left (crypt/byteArrayToHex info-hash) "0" 40)
        
        ; The blocks in the file
        ; each 20 byte hash represents a block
        pieces-hash (partition-string 20 (info :pieces))
        pieces-length (count pieces-hash)
        ; number of bytes in each block (integer)
        piece-length (info :piece-length)

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
        bitfield (bitfield/bitfield pieces-length)]
    (assoc metadata :bitfield bitfield)
    (assoc metadata :pieces-written 0)
    metadata))

(defn read-metainfo-db
  "Given torrent data saved in the db process it"
  [db-entry]
  (let [bitfield (bitfield/bitfield (db-entry :bitfield))]
    (assoc db-entry :bitfield bitfield)
    db-entry))

(defn read-metainfo-file 
  "Given a metainfo file, read it as an byte-array then process it"
  [torrent-file]
  (async [success-callback _]
    (let-async [torrent-file (filesystem/filereader torrent-file)]
      (success-callback (read-metainfo-byte-array torrent-file)))))

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
    (let [files (take (count (metinfo :files)) (repeat nil))]
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
  ([files] (hashes files 0 []))
  ([files i output]
    (async [success-callback _]
      (hashes files i output success-callback)))
  ([files i output success-callback]
    (let-async [piece (get-file-piece files 16384 i)]
      (if piece
        (hashes files (inc i) (conj output (hash piece)) success-callback)
        (success-callback output)))))

(defn file-metainfo
  "Given a list of files return their name and length"
  [file]
  {:path (.-name file) :length (.-size file)})

(defn create-torrent [{:keys [tracker files] :as form}]
  (async [success-callback _]
    (let [piece-length 16384
          ; generate-file typically expects a torrent atom
          metainfo (atom {:piece-length piece-length})

          ; build file data from the provided files
          files-metainfo (map file-metainfo files)
          file-boundaries (file-boundaries files-metainfo)
          ; compute the file boundaries then add them to the file data
          files-data (map merge files-metainfo file-boundaries)

          files (map #(generate-file metainfo % %2) files files-data)]
      (let-async [hashes (hashes files)]
        (let [metainfo {
                :info {
                  :pieces (apply str hashes)
                  :piece-length piece-length
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
  (let [torrent-file-metainfo (create-torrent-file-metainfo @torrent)
        torrent-file (encode torrent-file-metainfo)]
    [torrent-file-metainfo torrent-file]))

;************************************************
; Maintain torrent state
;************************************************

(defn- write-metainfo-to-db [metainfo]
  (let [transaction (db/create-transaction @connection ["metainfo"] "readwrite")
        object-store (.objectStore transaction "metainfo")]
    (assoc! object-store (metainfo :pretty-info-hash) metainfo)))

(defn torrent [metainfo files]
  (let [torrent (atom metainfo)
        dispatcher #(dispatch/fire :add-file [torrent % %2])]
    ; Any changes to the torrent should be saved in the db
    (add-watch torrent :update-db (fn [_ _ _ new-metainfo]
      (write-metainfo-to-db new-metainfo)))
    ; Track all the file entires
    (doall (map dispatcher files (metainfo :files)))
    ; Notify that a torrent has been started
    (dispatch/fire :processed-torrent torrent)
    torrent))

;************************************************
; Create torrents from various client events
;************************************************

; When a torrent is loaded from the db
(dispatch/react-to #{:add-metainfo-db} (fn [_ metainfo]
  (let-async [:let metainfo (read-metainfo-db metainfo)
              ; The files allready exist on the filesystem
              ; generate file handlers
              files (read-torrent-files metainfo)]
    (torrent metainfo files))))

; When the add-torrent form is submitted
(dispatch/react-to #{:add-metainfo-file} (fn [_ metainfo-file]
  (let-async [metainfo (read-metainfo-file metainfo-file)
              files (write-torrent-files metainfo)]
    (torrent metainfo files))))

; Given an byte-array of metainfo (metainfo from url)
(dispatch/react-to #{:add-metainfo-byte-array} (fn [_ byte-array]
  (let-async [:let metainfo (read-metainfo-byte-array byte-array)
              files (write-torrent-files metainfo)]
    (torrent metainfo files))))

; When the user submits a form with details for a torrent
(dispatch/react-to #{:create-torrent} (fn [_ form]
  ; Write the provided files to fs before continuing
  (let-async [metainfo (create-torrent form)
              files (write-torrent-files metainfo (form :files))
              :let torrent (torrent metainfo files)]
    ; This happens automatically on updates, not on creation
    (write-metainfo-to-db @torrent)
    ; Inform the UI the torrent has been built
    (dispatch/fire :share-torrent (share-torrent torrent)))))