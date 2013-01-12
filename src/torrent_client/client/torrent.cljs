(ns torrent-client.client.torrent
  (:require 
    [torrent-client.client.core.dispatch :as dispatch]
    [torrent-client.client.core.db :as db]
    [torrent-client.client.bitfield :as bitfield]
    [filesystem.filesystem :as filesystem]
    [filesystem.entry :as entry]
    [goog.crypt :as crypt]
    [waltz.state :as state])
  (:use 
    [jayq.util :only [clj->js]]
    [torrent-client.client.waltz :only [machine]]
    [torrent-client.client.core.string :only [partition-string pad-string-left]]
    [torrent-client.client.core.url :only [http-scheme?]]
    [torrent-client.client.core.reader :only [push-back-reader]]
    [torrent-client.client.core.bencode :only [encode decode uint8-array]]
    [torrent-client.client.core.crypt :only [sha1 str->byte-array]]
    [torrent-client.client.storage :only [connection]]
    [torrent-client.client.pieces :only [files]]
    )
  (:use-macros 
    [waltz.macros :only [in out defstate defevent]]
    [async.macros :only [async let-async]]))


;************************************************
; Functions for processing the .torrent file
; and the associated files
;************************************************

(defn- set-file-data
  "Given files in a set order, calculate start and stop indexes"
  ([files] (set-file-data files 0 []))
  ([elements total new-elements]
    (if (empty? elements)
      new-elements
      (let [new-total (+ total (get (first elements) :length))
            pos {:pos-start total :pos-end new-total}
            new-element (merge (first elements) pos)]
        (recur (rest elements) new-total (conj new-elements new-element))
      ))))

(defn read-metainfo-byte-array 
  "Given a byte array of a torrent file, decode it then
   extract the important bits of information"
  [byte-array]
  (let [reader (push-back-reader (uint8-array byte-array 0))
      metadata (decode reader)
      info (metadata "info")
      info-hash (sha1 (encode info))
      ; Used as a key to refer to the torrent
      pretty-info-hash (pad-string-left (crypt/byteArrayToHex info-hash) "0" 40)
      
      ; The blocks in the file
      ; each 20 byte hash represents a block
      pieces-hash (partition-string 20 (info "pieces"))
      pieces-length (count pieces-hash)
      ; number of bytes in each block (integer)
      piece-length (info "piece length")
      ; A bitfield representing the blocks
      ; each bit represents a block
      bitfield (bitfield/bitfield pieces-length)

      ; Build an array of the announce list
      ; metadata announce-list may not exist
      announce [(metadata "announce")]
      announce-list (reduce conj announce (flatten (metadata "announce-list")))

      ; NOTE: the actual torrent files are not referred to in
      ; the torrent, they are managed seperately in pieces.cljs
      files-list (js->clj (info "files") :keywordize true)
      files (or files-list [{:path (info "name") :length (info "length")}])
      files (set-file-data files)

      total-length (reduce + (map :length files))
      
      last-piece-length (rem total-length piece-length)
      ; If the remainder is 0 then the last piece must be a complete block
      last-piece-length (if (zero? last-piece-length) 
                          piece-length last-piece-length)]
  (.info js/console "adding torrent" pretty-info-hash)
  {:info-hash info-hash
   :pretty-info-hash pretty-info-hash
   :encoding (metadata "encoding")
   :pieces-hash pieces-hash
   :pieces-length pieces-length
   :piece-length piece-length
   :bitfield bitfield
   :announce-list (filter http-scheme? announce-list)
   :comment (info "comment")
   :name (info "name")
   :files files
   :current-length 0
   :total-length total-length
   :last-piece-length last-piece-length
  }))

(defn read-metainfo-file 
  "Given a metainfo file read, read it as an byte-array then process it"
  [torrent-file]
  (async [success-callback _]
    (let-async [torrent-file (filesystem/filereader torrent-file)]
      (success-callback (read-metainfo-byte-array torrent-file)))))

(defn- write-input-to-file 
  "Write data to file"
  [fs path data]
  (.log js/console "write-input-to-file" path data)
  (async [success-callback error-callback]
    (let-async [entry (entry/get-entry fs path {:create true})
                writer (entry/create-writer entry)]
      (set! (.-onerror writer) error-callback)
      (set! (.-onwriteend writer) #(success-callback entry))
      ; If we have no data for this file immidiately write it
      (if (nil? data)
        (success-callback entry)
        (.write writer data)))))

(defn- write-metainfo-to-db [metainfo]
  (let [transaction (db/create-transaction @connection ["metainfo"] "readwrite")
        object-store (.objectStore transaction "metainfo")]
    (assoc! object-store (metainfo :pretty-info-hash) metainfo)))

; Torrent is a hash-map of information on the torrent
; fs is the filesystem access
; torrent-file is the actual .torrent
; files are the actual files for distribution
(defn build-files [torrent files success-callback]
  ; First build out the file system access
  (let-async [:let requested-bytes (@torrent :total-length)
              granted-bytes (filesystem/request-quota :PERSISTENT requested-bytes)
              fs (filesystem/request-file-system :PERSISTENT granted-bytes)]
          ; folder (.createPath directory-entry (torrent :name))
    
    ; The *loop* is run sequentially, everything within said loop is async
    ; so this is non-blocking
    ; Read (and potentially write) the files associated with the torrent
    ; and return a handler to them
    (doseq [file (@torrent :files)
            ; If given the actual file, provide the contents
            :let [entry (first (filter #(= (.-name %) (:path file)) files))]]
      (let-async [file-entry (write-input-to-file fs (:path file) entry)]
        (dispatch/fire :add-file [torrent file-entry file])
        (success-callback file-entry)))
  ))

(defn torrent-machine
  ; A hash of torrent information
  ; File object
  ; Collection of file objects
  [torrent-data file-entries]
  (let [; If passed torrent data then start from has-torrent-data
        current :has-metainfo
        me (machine {:label :torrent-machine :current :init})
        torrent (atom torrent-data)]

    ; When the torrent atom changes update the database reference
    ; (add-watch torrent :update-db (fn [_ _ _ new-metainfo]
    ;   (write-metainfo-to-db new-metainfo)))

    (defevent me :add-files [files]
      "Given torrent information and the files it pertains to 
      access them on the filesystem and add the entry to the torrent"
      (.log js/console ":add-files")
      (build-files torrent files #(state/trigger me :file %)))

    (defevent me :file [file]
      "Called when one of the associated files is ready for use"
      ; If the files are all in the file atom we're ready to proceed
      (if (= (count (@torrent :files)) 
             (count (@files (@torrent :pretty-info-hash))))
        (state/set me :has-files)))

    (defstate me :init)

    (defstate me :has-metainfo
      "Once the metainfo is generated check the files"
      (in []
        (state/trigger me :add-files file-entries)))

    (defstate me :has-files
      "Once the files are checked/created move to ready"
      (in []
        (when-not (zero? (count file-entries))
          (bitfield/fill-bitfield (@torrent :bitfield) (@torrent :pieces-length))
          (swap! torrent assoc :pieces-written (@torrent :pieces-length))
          (dispatch/fire :completed-torrent torrent))
        (state/set me :ready)))

    (defstate me :ready
      (in []
        (do
          (swap! torrent assoc :status :processed)
          (.log js/console "about to :add-torrent")
          (dispatch/fire :processed-torrent torrent))))

    ; Trigger the (in) on the requested state
    (state/set me current)

))

; H.C NOTES
; so you start the torrent machine
; then either say, here are files from the user - copy them in
; or you say, here is an existing torrent hashmap, use it.
; ergo: file restore doesn't do read-torrent-file
; file create *does*

; When a torrent is loaded from the db
(dispatch/react-to #{:add-metainfo-object} (fn [_ metainfo]
  (torrent-machine metainfo [])))

; When the add-torrent form is submitted generate a new torrent-machine
(dispatch/react-to #{:add-metainfo-file} (fn [_ metainfo-file]
  (let-async [metainfo (read-metainfo-file metainfo-file)]
    (torrent-machine metainfo []))))

; Given an byte-array of metainfo (metainfo from url)
(dispatch/react-to #{:add-metainfo-byte-array} (fn [_ byte-array]
  (let [metainfo (read-metainfo-byte-array byte-array)]
    (torrent-machine metainfo []))))

; When a torrent is built from some files
; NOTES: not yet implimented
(dispatch/react-to #{:add-metainfo-and-files} (fn [_ [metainfo files]]
  (torrent-machine metainfo files)))

; When I'm testing...
(dispatch/react-to #{:add-metainfo-file-and-files} (fn [_ [metainfo-file files]]
  (let-async [metainfo (read-metainfo-file metainfo-file)]
    (torrent-machine metainfo files))))