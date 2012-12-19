(ns torrent-client.client.pieces
  (:require 
    [torrent-client.client.core.dispatch :as dispatch]
    [torrent-client.client.bitfield :as bitfield]
    [torrent-client.client.blocks :as blocks]
    [filesystem.filesystem :as filesystem]
    [filesystem.entry :as entry]
    [clojure.set :as set])
  (:use 
    [async.helpers :only [map-async]]
    [torrent-client.client.core.byte-array :only [uint8-array subarray]]
    [torrent-client.client.torrents :only [torrents]])
  (:use-macros 
    [async.macros :only [async let-async]])
  )

; The bytes in a block piece (16kb)
; http://bit.ly/RsGL0R
(def piece-length 16384)

(def files (atom {}))
; Blocks that have had requests sent out for them
(def working (atom {}))

(dispatch/react-to #{:add-file} (fn [_ [torrent file-entry file-data]]
  "A file has been added to this torrent"
  (let [file (generate-file torrent file-entry file-data)]
    (swap! files (partial merge-with concat) {(@torrent :pretty-info-hash) [file]})
  )))

(defn generate-file [torrent file-entry file-data]
  (let [boundaries (generate-block-boundaries torrent file-data)]
    ; Attach information on the block boundaries to the file
    (with-meta (blocks/block-file file-entry) (merge file-data boundaries))))

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
  (let [info-hash (@torrent :pretty-info-hash)
        torrent-bitfield (bitfield/byte-array (@torrent :bitfield))
        peer-bitfield (bitfield/byte-array peer-bitfield)
        ; Inverse the bitfield so 1 represents a wanted block
        ; Find blocks that are wanted and the peer has
        needed (map bit-and-not peer-bitfield torrent-bitfield)
        ; Add an index to our vector
        indexed (map-indexed vector needed)
        currently-working (@working info-hash)
        ; Remove blocks currently working from the candidates
        candidates (remove #(contains? currently-working (first %)) indexed)
        ; Get the first wanted block
        block (some #(if-not (zero? (second %)) (first %)) candidates)]
		block))

(defn work-next-block
  "Marks that we have started fetching a current block"
  [torrent peer-bitfield]
  (let [info-hash (@torrent :pretty-info-hash)
        block-index (get-next-block torrent peer-bitfield)]
    ; Add this block to the works in progress
    (swap! working (partial merge-with set/union) {info-hash #{block-index}})
    block-index))

; (dispatch/react-to #{:written-block :invalid-block} (fn [_ torrent block-index]
;   "When a block has finished or is invalid, remove it from the in-progress"
;   (swap! working (partial merge-with set/difference) {info-hash #{block-index}})))

(defn block-length 
  "If this is the last block return the last-piece-length"
  [torrent block-index]
  (if (= block-index (dec (@torrent :pieces-length)))
    (@torrent :last-piece-length)
    (@torrent :piece-length)))

(defn block-pieces
  "Given a block, return all the pieces within it"
  [torrent block-index]
  (let [block-length (block-length torrent block-index)]
    (.log js/console "calculating block-length" block-length piece-length)
    (loop [offset 0
           pieces []]
      ; If we havn't finished splitting up this block
      (if-not (= offset block-length)
        ; Add another piece to the pieces vector
        (recur (+ offset (min piece-length (- block-length offset)))
               (conj pieces [offset (+ offset piece-length)]))
        ; Return all the piece parts
        pieces))))

(defn- get-file-piece
  [offset length file]
  (async [success-callback _]
    (let-async [:let offset (max offset ((meta file) :pos-start))
                :let end (min (+ offset length) ((meta file) :pos-end))
                ; :let length (- end offset)
                :let length piece-length
                ; Get a filereader on the block-files underlying file
                file (entry/file (.-file file))
                data (filesystem/filereader file)]
      (.log js/console "get-file-piece" offset length)
      (success-callback (uint8-array data offset length))
      )))

; TODO rewrite to grab block and hold it until all
; the pieces have been requested
; this would require one fileread as opposed to n
(defn get-piece [torrent block-index offset length]
  (async [success-callback _]
    (let [block-offset (* block-index (@torrent :piece-length))
          info-hash (@torrent :pretty-info-hash)
          offset (+ block-offset offset)
          end (+ offset length)
          ; A block that straddles two files may have a piece that
          ; stradles two files, establish which files use this block
          files (filter #(contains? % block-index) (@files info-hash))]
      ; Retrieve the pieces from the files
      (let-async [data (get-file-piece offset end (first files))]
        (.log js/console "get-piece is ready")
        (success-callback data)
        )
      ; (let-async [data (map-async #(get-file-piece offset end %) files)]
      ;   (success-callback (apply conj data)))

      )))

;;************************************************
;; Wait for a block to have all its pieces before
;; writing. This avoids disk thrashing,
;; prematurely announcing have-piece and allows
;; hash verification of the block. 
;;************************************************

(def pieces-to-write (atom {}))
(def file-write-queue (atom {}))


(defn queue! [queue queue-key queue-data]
  (swap! queue (partial merge-with concat) {(hash queue-key) [queue-data]}))

(defn consume! [queue queue-key]
  (swap! queue assoc (hash queue-key) (rest (@queue (hash queue-key)))))

(dispatch/react-to #{:receive-piece} (fn [_ [torrent block-index begin data]]
  ; Add this piece to the queue of pieces to write
  (let [info-hash (@torrent :pretty-info-hash)
        queue-key (str info-hash block-index)
        piece {:begin begin :data data}]
    (swap! pieces-to-write (partial merge-with concat) {queue-key [piece]})
    ; Fetch all the pieces for this block
    (let [pieces (get @pieces-to-write queue-key)]
      ; If we've fetched all the pieces for this block
      (if (= (count pieces) (count (block-pieces torrent block-index)))
        (let [block (blocks/block pieces)
              block-hash (hash block)]
          (.log js/console "block hash" block-hash (nth (@torrent :pieces-hash) block-index))
          ; If the hash of the block we have is correct, use the block
          (if (= (hash block) (nth (@torrent :pieces-hash) block-index))
            (dispatch/fire :receive-block [info-hash block-index block])
            ; Otherwise destroy it and announce the invalidity
            (do
              (.log js/console "invalid hash")
              (dispatch/fire :invalid-block [torrent block-index]))
      ))))
  )))

(dispatch/react-to #{:receive-block} (fn [_ [info-hash block-index block]]
  ; Grab their meta info
  (let [torrent (@torrents info-hash)
        block-offset (* block-index (@torrent :piece-length))
        files (filter #(contains? % block-index) (@files info-hash))]
    ; For every file that needs this block
    (doseq [file files]
      (let [; Get the data stored in the meta about this files blocks
            {:keys [pos-start pos-end]} (meta file)
            ; where in this file should we seek too
            seek-position (max 0 (- block-offset pos-start))
            ; trim the start of the block (inverse of seek)
            block-start (max 0 (- pos-start block-offset))
            ; trim the end of the block
            block-end (- (min (count block) (- pos-end pos-start))
                         block-start)
            block-data (subarray (.-byte-array block) block-start block-end)]
        ; Add this to list of blocks to write for this file
        (queue! file-write-queue file [block-index seek-position block-data])
        ; And potentially initiate a writer
        (.log js/console "we should now be writing")
        (dispatch/fire :write-file [torrent file])
  )))))

(dispatch/react-to #{:write-file} (fn [_ [torrent file]]
  ; This will simply fail if a writer exists
  (let-async [writer (entry/create-writer (.-file file))]
    (seek-then-write torrent file writer))))

(defn- seek-then-write [torrent file writer]
  ; Grab the next block when possible
  (if-let [next-block (first (@file-write-queue (hash file)))]
    ; Destructure seperate to the if-let
    ; (otherwise when clause allways executes)
    (let [[block-index seek-position block-data] next-block]
      (.log js/console "about to write" next-block)
      ; When the block finishes writing
      (set! (.-onwriteend writer) (fn [_]
        ; Consume this block from the queue
        (consume! file-write-queue file)
        ; And inform that it has been written
        (.log js/console "finished writing!")
        (dispatch/fire :written-block [torrent block-index])
        ; grab the next one if applicable
        (seek-then-write torrent file writer)))
      (.seek writer seek-position)
      ; H.C: for now only blobs can be written
      (.write writer (js/Blob. (js/Array. block-data))))))