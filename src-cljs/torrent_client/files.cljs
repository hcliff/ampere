(ns torrent-client.files
  (:require
    [torrent-client.core.dispatch :as dispatch]
    [torrent-client.core.pieces :as pieces]
    [filesystem.entry :as entry])
  (:use-macros 
    [async.macros :only [async let-async]]))

(def files (atom {}))

;************************************************
; Generate data for files
;************************************************

(defn file-boundaries
  "Given files in a set order, calculate start and stop indexes"
  ([files] (file-boundaries files 0 []))
  ([files total boundaries]
    (if (empty? files)
      boundaries
      (let [new-total (+ total ((first files) :length))
            pos {:pos-start total :pos-end new-total}]
        (recur (rest files) new-total (conj boundaries pos))))))

(defn block-boundaries [torrent file]
  "Given a file and the torrent block-length calculate the
  blocks that a file contains, note that two files may require
  the same block due to overlap between the head and tail of
  the files. (e.g block 3 has the head of file b and tail of a)"
  {:piece-start (Math/floor (/ (file :pos-start) (@torrent :piece-length)))
   :piece-end   (Math/floor (/ (file :pos-end)   (@torrent :piece-length)))})

;************************************************
; Manage torrent files
;************************************************

(defn generate-file [torrent file-entry file-data]
  ; file-data is {:pos-start x :pos-end x}, file-entry is the file on the filesystem
  (let [boundaries (block-boundaries torrent file-data)]
    ; Attach information on the block boundaries to the file
    (with-meta (pieces/piece-file file-entry) (merge file-data boundaries))))

(dispatch/react-to #{:add-file} (fn [_ [torrent file-entry file-data]]
  "A file has been added to this torrent"
  (let [file (generate-file torrent file-entry file-data)]
    ; TODO: use below code
    ; (swap! files update-in [(@torrent :pretty-info-hash)] conj file)
    (swap! files (partial merge-with concat) {(@torrent :pretty-info-hash) [file]})
    ; "touch" the torrent atom to let listeners know related content has chanegd
    (swap! torrent identity))))

;************************************************
; Reading and writing from the filesystem
;************************************************

(defn read-file 
  "Given a path, read a file from the filesystem and trigger :add-file"
  [fs path]
  (.log js/console "read file from filesystem" path)
  (async [success-callback _]
    (let-async [entry (entry/get-entry fs path {:create false})]
      (success-callback entry))))

(defn write-file
  [fs path data]
  (.log js/console "write file to filesystem" path data)
  (async [success-callback error-callback]
    (let-async [entry (entry/get-entry fs path {:create true})
                writer (entry/create-writer entry)]
      (set! (.-onerror writer) error-callback)
      (set! (.-onwriteend writer) #(success-callback entry))
      ; If we have no data for this file there's no need to write
      (if (nil? data)
        (success-callback entry)
        (.write writer data)))))