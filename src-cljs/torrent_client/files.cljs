(ns torrent-client.files
  (:require
    [torrent-client.core.dispatch :as dispatch]
    [torrent-client.core.pieces :as pieces]
    [filesystem.filesystem :as filesystem]
    [filesystem.writer :as writer]
    [filesystem.entry :as entry]
    [cljconsole.main :as console])
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

(defn piece-boundaries [file piece-length]
  "Given a file and a piece-length calculate the pieces that a file contains, 
  note that two files may require the same piece due to overlap between the 
  head and tail of the files. 
  (e.g piece 3 has the head of file b and tail of a)"
  {:piece-start (Math/floor (/ (file :pos-start) piece-length))
   :piece-end   (Math/floor (/ (file :pos-end)   piece-length))})

;************************************************
; Manage torrent files
;************************************************

(defn generate-file [file-entry file-data piece-length]
  ; file-data is {:pos-start x :pos-end x}
  ; file-entry is the file on the filesystem
  ; piece length is how we should break apart these files
  (let [boundaries (piece-boundaries file-data piece-length)]
    ; Attach information on the block boundaries to the file
    (with-meta (pieces/piece-file file-entry) (merge file-data boundaries))))

(dispatch/react-to #{:add-file} (fn [_ [torrent file-entry file-data]]
  "A file has been added to this torrent"
  (let [file (generate-file file-entry file-data (@torrent :piece-length))]
    ; TODO: use below code
    ; (swap! files update-in [(@torrent :pretty-info-hash)] conj file)
    (swap! files (partial merge-with concat) {(@torrent :pretty-info-hash) [file]})
    ; "touch" the torrent atom to let listeners know related content has chanegd
    (swap! torrent identity))))

;************************************************
; Filesystem helpers
;************************************************

(defn write-file
  "Create a file on the filesystem, set it to the correct length and then 
   write any data we have for it"
  [fs {:keys [path length]} data]
  (console/info "Write to filesystem. Path: " path " Data: " data)
  (async [success-callback error-callback]
    (let-async [entry (entry/get-entry fs path {:create true})
                writer (entry/create-writer entry)
                _ (writer/truncate writer length)
                _ (writer/write writer data)]
      (success-callback entry))))