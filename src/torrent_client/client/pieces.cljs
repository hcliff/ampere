(ns torrent-client.client.pieces
  (:require 
    [torrent-client.client.core.dispatch :as dispatch]
    [torrent-client.client.bitfield :as bitfield]

    [filesystem.entry :as entry]
    )
  (:use [async.helpers :only [map-async]])
  (:use-macros 
    [async.macros :only [async let-async]])
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
  ; Does this file contain a given block index
  (-lookup [this k]
    (-lookup this k nil))
  (-lookup [this k not-found]
    (-contains-key? this k))

  IFn
  (-invoke [this k]
    (-lookup this k))
  (-invoke [this k not-found]
    (-lookup this k not-found))

  IAssociative
  (-contains-key? [this k]
    (<= (meta :block-start) k (meta :block-end)))

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

(defn needs-block 
  "Given the co-ordinates of a block and a file, determine if the block
   or part of it lies within the file"
  [block-index file]
  (<= (file :block-start) block-index (file :block-end)))

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

; TODO: switch this over to rarity based search
(defn get-next-block
  "Given a torrent and a peers bitfield, return the index of 
  the first needed block"
  [torrent peer-bitfield]
  (let [torrent-bitfield (bitfield/byte-array (@torrent :bitfield))
        peer-bitfield (bitfield/byte-array peer-bitfield)
        ; Inverse the bitfield so 1 represents a wanted block
        ; Find blocks that are wanted and the peer has
        needed (map bit-and-not peer-bitfield torrent-bitfield)
        ; Add an index to our vector
        indexed (map-indexed vector needed)
        ; Get the first wanted block
        block (some #(if-not (zero? (second %)) (first %)) indexed)]
		block))

(defn block-length 
  "If this is the last block return the last-piece-length"
  [torrent block-index]
  (if (= block-index (dec (@torrent :pieces-length)))
    (@torrent :last-piece-length)
    (@torrent :piece-length)))

; The bytes in a block partial (32kb)
(def partial-length 32768)

(defn block-partials
  "Given a block, return all the partials within it"
  [torrent block-index]
  (let [block-length (block-length torrent block-index)]
    (loop [offset 0
           partials []]
      ; If we havn't finished splitting up this block
      (if-not (= offset block-length)
        ; Add another partial to the partials vector
        (recur (+ offset (min partial-length (- block-length offset)))
               (conj partials [offset (+ offset partial-length)]))
        ; Return all the partial parts
        partials))))

(defn- get-file-partial [offset end file]
  (async [success-callback]
    (let-async [file (filesystem/filereader file)
                :let offset (min offset (file :block-start))
                :let end (min end (file :block-end))]
      (success-callback (subarray file offset end)))))

; TODO rewrite to grab block and hold it until all
; the pieces have been requested
; this would require one fileread as opposed to n
(defn get-partial [torrent block-index offset length]
  (async [success-callback]
    (let [block-offset (* block-index (@torrent :piece-size))
          torrent-hash (@torrent :pretty-info-hash)
          offset (+ block-offset offset)
          end (+ offset length)
          ; A block that straddles two files may have a partial that
          ; stradles two files, establish which files use this block
          files (filter #(contains? % block-index) (@files torrent-hash))]
      (js* "debugger;")
      ; Retrieve the partials from the files
      (let-async [data (map-async #(get-file-partial offset end %) files)]
        (.log js/console "called back" data)
        (success-callback (apply conj data))))))