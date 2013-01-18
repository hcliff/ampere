(ns torrent-client.client.pieces
  (:require 
    [torrent-client.client.core.dispatch :as dispatch]
    [torrent-client.client.core.pieces :as pieces]
    [torrent-client.client.bitfield :as bitfield]
    [filesystem.filesystem :as filesystem]
    [filesystem.entry :as entry]
    [clojure.set :as set])
  (:use
    [async.helpers :only [map-async]]
    [torrent-client.client.core.byte-array :only [uint8-array subarray]]
    [torrent-client.client.torrents :only [torrents]]
    [torrent-client.client.core.crypt :only [sha1 byte-array->str]]
    )
  (:use-macros 
    [async.macros :only [async let-async]])
  )

; The bytes in a piece block (16kb)
; http://bit.ly/RsGL0R
(def block-length 16384)

(def files (atom {}))
; Blocks that have had requests sent out for them
(def working (atom {}))

(dispatch/react-to #{:add-file} (fn [_ [torrent file-entry file-data]]
  "A file has been added to this torrent"
  (let [file (generate-file torrent file-entry file-data)]
    (swap! files (partial merge-with concat) {(@torrent :pretty-info-hash) [file]}))))

(defn generate-file [torrent file-entry file-data]
  (let [boundaries (generate-block-boundaries torrent file-data)]
    ; Attach information on the block boundaries to the file
    (with-meta (pieces/piece-file file-entry) (merge file-data boundaries))))

(defn- generate-block-boundaries [torrent file]
  "Given a file and the torrent block-length calculate the
  blocks that a file needs, note that two files may require
  the same block due to overlap between the head and tail of
  the files. (e.g block 3 has the head of file b and tail of a)"
  {:block-start (Math/floor (/ (file :pos-start) (@torrent :piece-length)))
   :block-end   (Math/ceil  (/ (file :pos-end)   (@torrent :piece-length)))})

; TODO: switch this over to rarity based search
(defn wanted-pieces
  "Given a torrent and a peers bitfield, return a list of pieces we want 
  from this peer
  note: not lazy!"
  [torrent peer-bitfield]
  (let [info-hash (@torrent :pretty-info-hash)
        ; Get a bitfield of the blocks we want from the peer
        wanted-bitfield (bitfield/difference peer-bitfield (@torrent :bitfield))
        wanted (keep-indexed #(if-not (zero? %2) %1) wanted-bitfield)
        working (set (@working info-hash))]
    (remove #(contains? working %) wanted)))

(defn work-piece!
  "Marks that we have started fetching a piece"
  [torrent piece-index]
  (let [info-hash (@torrent :pretty-info-hash)]
    (.log js/console "work-next-piece" piece-index)
    ; Add this block to the works in progress
    (swap! working (partial merge-with concat) {info-hash [piece-index]})
    piece-index))

(dispatch/react-to #{:written-piece :invalid-piece} (fn [_ torrent block-index]
  "When a block has finished or is invalid, remove it from the in-progress"
  (let [blocks (remove #(= block-index %) (@working :info-hash))]
    (swap! working assoc info-hash blocks))))

(defn piece-length 
  "If this is the last piece return the last-piece-length"
  [torrent piece-index]
  (.log js/console "piece-length" piece-index)
  (if (= piece-index (dec (@torrent :pieces-length)))
    (@torrent :last-piece-length)
    (@torrent :piece-length)))

(defn piece-offset [torrent piece-index]
  "Given a torrent and a requested piece-index calculate the actual
  offset in the file (e.g: given piece 5 and only piece one is written
  the offset is one piece)"
  (let [bitfield (@torrent :bitfield)
        pieces-prior (take piece-index bitfield)
        pieces-written (count (remove zero? pieces-prior))]
    (.log js/console "calc piece-offset" piece-index pieces-prior pieces-written)
    (* pieces-written (@torrent :piece-length))))

(defn piece-blocks
  "Given a piece, return all the blocks within it"
  [torrent piece-index]
  (let [piece-length (piece-length torrent piece-index)]
    (.log js/console "calculating piece-length" piece-length)
    (loop [offset 0
           blocks []]
      ; If we havn't finished splitting up this piece
      (if-not (= offset piece-length)
        (let [length (min block-length (- piece-length offset))]
          ; Add another block to the vector
          (recur (+ offset length) (conj blocks [offset length])))
        ; Return all the piece parts
        blocks))))

(defn- get-file-block
  [offset length file]
  (async [success-callback _]
    (let-async [:let offset (max offset ((meta file) :pos-start))
                :let end (min (+ offset length) ((meta file) :pos-end))
                :let length (- end offset)
                ; Get a filereader on the piece-files underlying file
                fileb (entry/file (.-file file))
                data (filesystem/filereader fileb)]
      (.log js/console "get-file-block" offset length ((meta file) :pos-end) (.-byteLength data))
      ; H.C: introduced when in testing ubuntu started trimming the file end for some reason
      (try
        (success-callback (uint8-array data offset length))
        (catch js/Exception _ (.error js/console "file may be corrupt"))))))

; TODO rewrite to grab piece and hold it until all
; the blocks have been requested
; this would require one fileread as opposed to n
(defn get-block [torrent piece-index offset length]
  (async [success-callback _]
    (let [piece-offset (piece-offset torrent piece-index)
          info-hash (@torrent :pretty-info-hash)
          block-offset (+ piece-offset offset)
          ; A piece that straddles two files may have a block that
          ; stradles two files, establish which files use this block
          files (filter #(contains? % piece-index) (@files info-hash))]
      ; Retrieve the pieces from the files
      (.log js/console "get-block" piece-index offset length)
      ; (js* "debugger;")
      ; TODO: support stradling files
      (let-async [data (get-file-block block-offset length (first files))]
        ; (.log js/console data)
        ; (.log js/console "hash" piece-index (byte-array->str (sha1 data)) (nth (@torrent :pieces-hash) piece-index))
        (success-callback data))
      ; (let-async [data (map-async #(get-file-piece offset end %) files)]
      ;   (success-callback (apply conj data)))

      )))

; ;;************************************************
; ;; Wait for a block to have all its pieces before
; ;; writing. This avoids disk thrashing,
; ;; prematurely announcing have-piece and allows
; ;; hash verification of the block. 
; ;;************************************************

(def pieces-to-write (atom {}))
(def file-write-queue (atom {}))

(defn queue! [queue queue-key queue-data]
  (swap! queue (partial merge-with concat) {(hash queue-key) [queue-data]}))

(defn consume! [queue queue-key]
  (swap! queue #(update-in % [(hash queue-key)] rest)))

; TODO: refactor this, far too long and complex
(dispatch/react-to #{:receive-block} (fn [_ [torrent piece-index begin data]]
  ; Add this piece to the queue of pieces to write
  (let [info-hash (@torrent :pretty-info-hash)
        queue-key (str info-hash piece-index)
        blocks (get @pieces-to-write queue-key)
        block {:begin begin :data data}
        working (@working info-hash)]
    ; This is a piece that we're currently trying to get
    ; and we don't allready have it
    (if (and (contains? (set working) piece-index)
             (not (contains? (set (map :begin blocks)) begin)))
      ; Add this block the list of blocks we have for this piece
      ; NOTE: avoid distinct due to comparing data
      (swap! pieces-to-write (partial merge-with concat) {queue-key [block]}))
    ; If we've fetched all the pieces for this block
    (let [blocks (get @pieces-to-write queue-key)]
      (if (= (count blocks) (count (piece-blocks torrent piece-index)))
        (let [piece (pieces/piece blocks)
              piece-hash (hash piece)]
          (.log js/console "piece hash" piece-hash (nth (@torrent :pieces-hash) piece-index))
          ; If the hash of the piece we have is correct, use the piece
          (if (= (hash piece) (nth (@torrent :pieces-hash) piece-index))
            (dispatch/fire :receive-piece [info-hash piece-index piece])
            (dispatch/fire :invalid-piece [torrent piece-index]))
      ))))
  )))

(dispatch/react-to #{:invalid-piece} (fn [_ [_ piece-index]]
  (.error js/console "invalid hash" piece-index)))

(dispatch/react-to #{:receive-piece} (fn [_ [info-hash piece-index piece]]
  ; Grab their meta info
  (let [torrent (@torrents info-hash)
        files (filter #(contains? % piece-index) (@files info-hash))]
    ; For every file that needs this piece
    (doseq [file files]
      ; Add this to list of pieces to write for this file
      (queue! file-write-queue file [piece-index file piece])
      ; And potentially initiate a writer
      (.log js/console "we should now be writing")
      (dispatch/fire :write-file [torrent file])))))

(dispatch/react-to #{:write-file} (fn [_ [torrent file]]
  ; Only kick off the writing if it's not allready running
  (if (= 1 (count (@file-write-queue (hash file))))
    (let-async [writer (entry/create-writer (.-file file))]
      (seek-then-write torrent file writer)))))

(defn- truncate-piece [torrent piece-index file piece]
  (let [piece-offset (piece-offset torrent piece-index)
        ; Get the data stored in the meta about this files pieces
        {:keys [pos-start pos-end]} (meta file)
        ; where in this file should we seek too
        seek-position (max 0 (- piece-offset pos-start))
        ; trim the start of the piece (inverse of seek)
        piece-start (max 0 (- pos-start piece-offset))
        ; trim the end of the piece
        piece-end (- (min (count piece) (- pos-end pos-start))
                     piece-start)
        piece-data (subarray (.-byte-array piece) piece-start piece-end)]
    [seek-position piece-data]))

(defn- seek-then-write [torrent file writer]
  ; Grab the next piece when possible
  (if-let [next-piece (first (@file-write-queue (hash file)))]
    ; Destructure seperate to the if-let
    ; (otherwise when clause allways executes)
    (let [[piece-index _ _] next-piece
          [seek-position piece-data] (apply truncate-piece torrent next-piece)]
      ; When the piece finishes writing
      (set! (.-onwriteend writer) (fn [_]
        ; Consume this piece from the queue
        (consume! file-write-queue file)
        ; And inform that it has been written
        (.log js/console "finished writing!" seek-position piece-index)
        (dispatch/fire :written-piece [torrent piece-index])
        ; grab the next one if applicable
        (seek-then-write torrent file writer)))
      (.seek writer seek-position)
      ; H.C: for now only blobs can be written
      (.write writer (js/Blob. (js/Array. piece-data))))))