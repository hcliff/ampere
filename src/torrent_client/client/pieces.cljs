(ns torrent-client.client.pieces
  (:require 
    [torrent-client.client.core.dispatch :as dispatch]
    [filesystem.entry :as entry]
    )
  (:use-macros 
    [async.macros :only [let-async]])
  )

(def files (atom {}))

(deftype BlockFile [meta file]

  Object
  (toString [this]
    (pr-str this))

  IWithMeta
  (-with-meta [this meta] (BlockFile. meta file))

  IMeta
  (-meta [this] meta)

  ILookup
  (-lookup [this k]
    (aget file k))
  ;   ([array k not-found]
  ;      (-nth file k not-found))

  IFn
  (-invoke [this k]
    (-lookup this k))
  (-invoke [this k not-found]
    (-lookup this k not-found))

  )

(defn block-file [file]
  (BlockFile. nil file))

; H.C TODO: ADD BASIC LOOKUPS ON FILE TO ALLOW FOR (file :name)

(dispatch/react-to #{:add-file} (fn [_ [torrent file-entry file-data]]
  "A file has been added to this torrent"

  (let [file (generate-file torrent file-entry file-data)]
    (swap! files (partial merge-with concat) {(@torrent :pretty-info-hash) [file]})
  )))

(defn generate-file [torrent file-entry file-data]
  (let [boundaries (generate-block-boundaries torrent file-data)]
    ; Attach information on the block boundaries to the file
    (with-meta (block-file file-entry) (merge file-data boundaries))))

; (defn needs-piece [block-position file]
;   (and (<= block-position (file :block-end))
;        (>= block-position (file :block-start))))

; (dispatch/react-to #{:receive-piece} (fn [torrent block-position block-data]
;   (let [torrent-files (@files (@torrent :pretty-info-hash))
;         ; At what byte does this piece start
;         block-start (* block-position (@torrent :block-length))
;         ; If this is the last byte it may be partial
;         block-size (if (= block-position (@torrent :blocks-length))
;                         (@torrent :last-block-length)
;                         (@torrent :block-length))
;         ; At what byte does this block end
;         block-end (+ block-start block-size)
;         ; Return files that include this block
;         files (filter #(needs-block block-position %) torrent-files)]

;     (doseq [file files]
;       (let [; Get the data stored in the meta about this files blocks
;             file-meta (meta file)
;             ; where in this file should we seek too
;             seek-position (max 0 (- block-start (file-meta :block-start)))
;             ; trim the start of the block
;             block-start (max 0 (- (file-meta :block-start) block-start))
;             ; trim the end of the block
;             block-end (min block-size (- (file-meta :block-end) block-start))
;             block (subarray block block-start block-end)]
;         (let-async [writer (entry/create-writer file)]
;           (.seek writer seek-position)
;           (.write writer block))
;   ))))

(defn- generate-block-boundaries [torrent file]
  "Given a file and the torrent piece-length calculate the
  blocks that a file needs, note that two files may require
  the same piece due to overlap between the head and tail of
  the files. (e.g block 3 has the head of file b and tail of a)"
  {:block-start (Math/floor (/ (file :pos-start) (@torrent :piece-length)))
   :block-end   (Math/ceil  (/ (file :pos-end)   (@torrent :piece-length)))})


; (defn get-next-piece [torrent peer-bitfield]
; 	(let [piece (first @need)]
; 		(swap! need rest)
; 		(swap! working assoc piece)
; 		piece

; 	))

(.log js/console "not last")