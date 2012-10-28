(ns torrent-client.client.torrent
  (:require 
    [torrent-client.client.core.dispatch :as dispatch]
    [filesystem.filesystem :as filesystem]
    [filesystem.entry :as entry]
    [goog.crypt :as crypt]
    [waltz.state :as state])
  (:use 
    [jayq.util :only [clj->js]]
    [torrent-client.client.waltz :only [machine]]
    [torrent-client.client.core.string :only [partition-string pad-string-left]]
    [torrent-client.client.core.url :only [http-scheme?]]
    [torrent-client.client.core.bencode :only [encode decode uint8-array push-back-reader]]
    [torrent-client.client.core.crypt :only [sha1]]
    [torrent-client.client.bitfield :only [bitfield]])
  (:use-macros 
    [waltz.macros :only [in out defstate defevent]]
    [async.macros :only [async let-async]]))


;************************************************
; Functions for processing the .torrent file
; and the associated files
;************************************************

(defn- filereader [file]
  (async [success-callback]
    (let [reader (js/FileReader.)
          ; onloadend actually triggers a progress event
          ; we want the actual file contents
          success-callback #(success-callback (.-result (.-currentTarget %)))]
      (set! (.-onloadend reader) success-callback)
      (.readAsArrayBuffer reader file))))

(defn- set-file-data
  "Given files in a set order, calculate start and stop indexes"
  ([files] (set-file-data files 0 []))
  ([elements total new-elements]
    (if (empty? elements)
      new-elements
      (let [new-total (+ total ("length" (first elements)))
            pos {:pos-start total :pos-end new-total}
            new-element (merge (first elements) pos)]
        (recur (rest elements) new-total (conj new-elements new-element))
      ))))

(defn read-torrent-file 
  "Given a torrent file read, decode and process it"
  ([torrent-file] 
    (read-torrent-file torrent-file #(dispatch/fire :add-torrent-data %)))
  ([torrent-file success-callback]
    (let-async [torrent-file (filereader torrent-file)]
      (let [reader (push-back-reader (uint8-array torrent-file 0))
            metadata (decode reader)
            info (metadata "info")
            info-hash (sha1 (encode info))
            pretty-info-hash (pad-string-left (crypt/byteArrayToHex info-hash) "0" 40)
            
            ; The pieces in the file, how many in the file and which ones we have
            pieces-hash (partition-string 20 (info "pieces"))
            pieces-length (count pieces-hash)
            piece-length (info "piece length")
            bitfield (bitfield pieces-length)

            ; Build an array of the announce list
            ; metadata announce-list may not exist
            announce [(metadata "announce")]
            announce-list (reduce conj announce (flatten (metadata "announce-list")))

            ; Build an array of the torrents files
            ; allow for multiple files or just the one
            files-list (js->clj (info "files") :keywordize true)
            files (or files-list [{:path (info "name") :length (info "length")}])
            ; files (generate-block-boundaries (set-file-data files) piece-length)
            
            total-length (reduce + (map "length" files))
            
            last-piece-length (rem total-length piece-length)
            last-piece-length (if (zero? last-piece-length) 
                                piece-length last-piece-length)
]

        (success-callback {
         :info-hash info-hash
         :pretty-info-hash pretty-info-hash
         :encoding (metadata "encoding")
         :pieces-hash pieces-hash
         :pieces-size pieces-size
         :bitfield bitfield
         :announce-list (filter http-scheme? announce-list)
         :comment (info "comment")
         :name (info "name")
         :files files
         :total-length total-length
         :piece-length piece-length
         :last-piece-length last-piece-length
        })
      )))
  )

(defn- write-input-to-file [fs path data]
  (async [success-callback]
    (let-async [entry (entry/get-file fs path {:create (not-nil? data)})
                writer (entry/create-writer entry)]
      (set (.-onwriteend writer) (success-callback entry))
      (if (nil? data)
        (success-callback entry)
        (.write writer data)))))

(def not-nil? (complement nil?))

; Torrent is a hash-map of information on the torrent
; fs is the filesystem access
; torrent-file is the actual .torrent
; files are the actual files for distribution
(defn build-files [torrent torrent-file files success-callback]
  ; First build out the file system access
  (let-async [:let files-size (reduce + (map "length" (@torrent :files)))
              :let requested-bytes (+ (.-size torrent-file) files-size)
              granted-bytes (filesystem/request-quota :PERSISTENT requested-bytes)
              fs (filesystem/request-file-system :PERSISTENT granted-bytes)]
          ; folder (.createPath directory-entry (torrent :name))

    ; Return a handler to the .torrent file
    (let-async [:let root-path (.-name torrent-file)
                torrent-file-entry (write-input-to-file fs root-path torrent-file)]
      (success-callback :torrent-file torrent-file-entry))
    
    ; The *loop* is run sequentially, everything within said loop is async
    ; so this is non-blocking
    ; Read (and potentially write) the files associated with the torrent
    ; and return a handler to them
    ; H.C: CORRECT ASSUMPTION WE WILL BE HANDED FILES
    (doseq [file files]
      (let-async [:let file-path (.-name file)
                  file-entry (write-input-to-file fs file-path file)]

        (success-callback :file file-entry)))
  ))

(defn torrent-machine 
  [torrent-data torrent-file files]
  (let [; If passed torrent data then start from has-torrent-data
        current (if (empty? torrent-data) :need-torrent-data :has-torrent-data)
        me (machine {:label :torrent-machine :current :init})
        torrent (atom torrent-data)]

    (defevent me :read-torrent-file [torrent-file]
      "Given a .torrent turn it into a hashmap of data"
      (read-torrent-file torrent-file 
        #(state/trigger me :add-torrent-data %)))

    (defevent me :add-torrent-data [torrent-data]
      "Given a hashmap of torrent data add it to the internal atom"
      (swap! torrent conj torrent-data)
      (state/set me :has-torrent-data))

    (defevent me :add-files [torrent torrent-file files]
      "Given torrent information and the files it pertains to 
      access them on the filesystem and add the entry to the torrent"
      (build-files torrent torrent-file files #(state/trigger me % %2)))

    (defn- has-files? []
      (= (count (@torrent :files)) (count files)))

    (defevent me :torrent-file [torrent-file]
      "Called when the .torrent file is ready for use"
      (swap! torrent assoc :torrent-file torrent-file)
      ; If the files needed have all been written, continue
      (if (has-files?)
        (state/set me :ready)))

    (defevent me :file [file]
      "Called when one of the associated files is ready for use"
      ; Add the file to the vector of files associated with this torrent
      (swap! torrent #(assoc % :files (conj (:files %) %2)) file )
      ; If both the torrent file and all the associated files are written
      ; continue to ready
      (if (and 
            (has-files?)
            (not-nil? (@torrent :torrent-file)))
        (state/set me :ready)))

    (defstate me :init)

    (defstate me :need-torrent-data
      (in [] 
        (state/trigger me :read-torrent-file torrent-file)))

    (defstate me :has-torrent-data
      (in []
        (state/trigger me :add-files torrent torrent-file files)
        (dispatch/fire [me :has-torrent-data] @torrent)))

    (defstate me :ready
      (in []
        (swap! torrent assoc :status :processed)
        (dispatch/fire :update-torrent torrent)
        (dispatch/fire :update-torrent-announce torrent)
        (dispatch/fire [me :ready] @torrent)))

    ; Trigger the (in) on the requested state
    (state/set me current)

))

; H.C NOTES
; so you start the torrent machine
; then either say, here are files from the user - copy them in
; or you say, here is an existing torrent hashmap, use it.
; ergo: file restore doesn't do read-torrent-file
; file create *does*

; When the add-torrent form is submitted generate a new torrent-machine
(dispatch/react-to #{:add-torrent-file} (fn [_ {:keys [torrent-file files]}]
  (let [torrent (torrent-machine {} torrent-file files)]
    ; As soon as the torrent file is read we need to 
    ; (dispatch/react-to #{[torrent :ready]} announce)
    )))