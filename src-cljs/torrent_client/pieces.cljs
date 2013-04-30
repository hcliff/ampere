(ns torrent-client.pieces
  (:require 
    [torrent-client.core.dispatch :as dispatch]
    [torrent-client.core.pieces :as pieces]
    [torrent-client.core.queue :as queue]
    [torrent-client.core.byte-array :as byte-array]
    [torrent-client.bitfield :as bitfield]
    [filesystem.filesystem :as filesystem]
    [filesystem.writer :as writer]
    [filesystem.entry :as entry]
    [cljconsole.main :as console]
    [clojure.set :as set])
  (:use
    [async.helpers :only [map-async]]
    [torrent-client.torrents :only [torrents]]
    [torrent-client.files :only [files]])
  (:use-macros 
    [async.macros :only [async let-async]]
    [task.macros :only [deftask]]))

; The bytes in a piece block (16kb)
; http://bit.ly/RsGL0R
; Reduced to 1kb due to chrome constraints
(def block-length 750)

; Blocks that have had requests sent out for them
(def working (atom {}))

; How long can a piece be working before we expire it
(def working-life (* 1000 30))

(deftask expire-pieces working-life [_]
  (let [expired (queue/expired working working-life)]
    (doseq [[torrent pieces] expired
            piece pieces]
      (console/info "Expiring piece: " piece)
      (queue/disj! working torrent piece)
      (dispatch/fire :expire-piece [torrent piece]))))

; TODO: switch this over to rarity based search
(defn wanted-pieces
  "Given a torrent and a peers bitfield, return a list of pieces we want 
  from this peer
  note: not lazy!"
  [torrent peer-bitfield]
  (if-let [client-bitfield (@torrent :bitfield)]
    (let [; Get a bitfield of the blocks we want from the peer
          wanted-bitfield (bitfield/difference peer-bitfield client-bitfield)
          wanted (keep-indexed #(if-not (zero? %2) %1) wanted-bitfield)]
      (remove #(queue/contains? working torrent %) wanted))))

; Events that indicate we should stop working a piece
(def not-working-events #{:written-piece :invalid-piece :expired-piece})
(dispatch/react-to not-working-events (fn [_ [torrent piece-index]]
  "When a block has finished or is invalid, remove it from the in-progress"
  (queue/disj! working torrent piece-index)))

(defn piece-length 
  "If this is the last piece return the last-piece-length"
  [torrent piece-index]
  (if (= piece-index (dec (@torrent :pieces-length)))
    (@torrent :last-piece-length)
    (@torrent :piece-length)))

(defn piece-offset [torrent piece-index]
  "Given a torrent and a requested piece-index calculate the actual
  offset in the overall stream"
  (* piece-index (@torrent :piece-length)))

(defn piece-blocks
  "Given a piece, return all the blocks within it"
  [torrent piece-index]
  (let [piece-length (piece-length torrent piece-index)]
    (console/log "Piece index:" piece-index " size:" piece-length)
    (loop [offset 0
           blocks []]
      ; If we havn't finished splitting up this piece
      (if-not (= offset piece-length)
        (let [length (min block-length (- piece-length offset))]
          ; Add another block to the vector
          (recur (+ offset length) (conj blocks [offset length])))
        ; Return all the piece parts
        blocks))))

(defn- get-file-section
  "Given a piece-file, offset and length return a byte array"
  [piece-file offset length]
  (async [success-callback _]
    (let-async [file (entry/file (.-file piece-file))
                :let offset (max offset ((meta piece-file) :pos-start))
                :let end (min (+ offset length) ((meta piece-file) :pos-end))
                :let length (- end offset)
                ; Slice the file, only reading the required piece
                :let slice (filesystem/slice file offset length)
                ; :let slice (filesystem/slice file 0 100000000)
                data (filesystem/filereader slice)]
      ; (js* "debugger;")
      (success-callback (byte-array/uint8-array data)))))

(defn get-file-piece 
  "Fetch a piece across the files that contain part of it"
  [files piece-length piece-index]
  (async [success-callback _]
    (let [offset (*  piece-index piece-length)
          files (filter #(contains? % piece-index) files)]
      (console/log "Files with piece-index" (count files))
      (if-not (empty? files)
        ; Get a byte array subsection of the file then make a piece from it
        (let-async [section (get-file-section (first files) offset piece-length)]
          (success-callback (pieces/piece section)))
        (success-callback nil)))))

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
      (console/log "get-block" (first files) piece-index offset length)
      ; TODO: support stradling files
      (let-async [data (get-file-section (first files) block-offset length)]
        ; (console/log data)
        ; (console/log "hash" piece-index (byte-array->str (crypt/sha1 data)) (nth (@torrent :pieces-hash) piece-index))
        (success-callback data))
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

(dispatch/react-to #{:invalid-piece :receive-piece} (fn [_ [torrent piece-index]]
  "Remove the blocks from the working queue"
  (let [queue-key (str (@torrent :pretty-info-hash) piece-index)]
    (queue/dissoc! pieces-to-write queue-key))))

(defn needed? [torrent piece-index blocks block]
  "Given a torrent, a piece and its thus far collected blocks, resolve if the
   block we have just recieved is needed in said piece"
  (let [; Blocks are identified by their offset in the file
        blocks (set (map :begin blocks))]
    ; We are currently looking for this piece and don't allready have it (xor)
    (and (queue/contains? working torrent piece-index)
         (not (contains? blocks block)))))

(defn correct-count? [torrent piece-index blocks]
  "Given a set of blocks, check if we have all the blocks a piece requires"
  (let [correct-count (count (piece-blocks torrent piece-index))]
    (console/log "Correct count: " correct-count " Actual count: " (count blocks))
    (= (count blocks) correct-count)))

(defn correct-hash? [torrent piece-index piece]
  "Given a piece and its purported data, check the validity via hashing
   and comparing it to the hash provided by the torrent metainfo"
  (let [correct-hash (nth (@torrent :pieces-hash) piece-index)]
    (= (hash piece) correct-hash)))

(defn dispatch-piece [torrent piece-index blocks]
  (let [piece (pieces/blocks->piece blocks)]
    (if (correct-hash? torrent piece-index piece)
      (dispatch/fire :receive-piece [torrent piece-index piece])
      (dispatch/fire :invalid-piece [torrent piece-index]))))

(dispatch/react-to #{:receive-block} (fn [_ [torrent piece-index begin data]]
  (let [queue-key (str (@torrent :pretty-info-hash) piece-index)
        blocks (get @pieces-to-write queue-key)
        block {:begin begin :data data}]
    (when (needed? torrent piece-index blocks begin)
      ; Add this piece to the queue of pieces to write
      (queue/conj! pieces-to-write queue-key block))
      (let [blocks (get @pieces-to-write queue-key)]
        (console/info "blocks" begin (sort (map :begin blocks)))
        (if (correct-count? torrent piece-index blocks)
          (dispatch-piece torrent piece-index blocks))))))

(dispatch/react-to #{:invalid-piece} (fn [_ [_ piece-index]]
  (.error js/console "invalid hash" piece-index)))

(defn file-queue-key [file]
  "Generate a key for the file, use the name as this shouldn't be changed"
  (aget (.-file file) "name"))

(dispatch/react-to #{:receive-piece} (fn [_ [torrent piece-index piece]]
  ; Grab their meta info
  (let [info-hash (@torrent :pretty-info-hash)
        files (filter #(contains? % piece-index) (@files info-hash))]
    (console/info "Received piece: " piece-index " for torrent: " info-hash)
    ; For every file that needs this piece
    (doseq [file files]
      ; Add this to list of pieces to write for this file
      (queue/conj! file-write-queue (file-queue-key file) [piece-index file piece])
      ; And potentially initiate a writer
      (console/log "Writing to disk")
      (dispatch/fire :write-file [torrent file])))))

(declare seek-then-write)

(dispatch/react-to #{:write-file} (fn [_ [torrent file]]
  ; Only kick off the writing if it's not allready running
  (if (= 1 (count (@file-write-queue (file-queue-key file))))
    (let-async [writer (entry/create-writer (.-file file))]
      (seek-then-write torrent file writer)))))

(defn- truncate-piece [torrent piece-index file piece]
  (let [piece-offset (piece-offset torrent piece-index)
        ; Get the data stored in the meta about this files pieces
        {:keys [pos-start pos-end]} (meta file)
        ; trim the start of the piece (inverse of seek)
        piece-start (max 0 (- pos-start piece-offset))
        ; trim the end of the piece
        piece-end (- (min (count piece) (- pos-end pos-start))
                     piece-start)
        piece-data (byte-array/subarray (.-byte-array piece) piece-start piece-end)]
    piece-data))

(defn- seek-position [torrent piece-index file]
  (let [piece-offset (piece-offset torrent piece-index)
        ; Get the data stored in the meta about this files pieces
        {:keys [pos-start]} (meta file)]
  ; where in this file should we seek too
  (max 0 (- piece-offset pos-start))))

; TODO: could be done via recur
(defn- seek-then-write [torrent file writer]
  ; Grab the next piece when possible
  (if-let [next-piece (first (@file-write-queue (file-queue-key file)))]
    ; Destructure seperate to the if-let
    ; (otherwise when clause allways executes)
    (let [[piece-index _ _] next-piece
          seek-position (seek-position torrent piece-index file)
          piece-data (apply truncate-piece torrent next-piece)
          ; H.C: for now only blobs can be written
          piece-data (js/Blob. (js/Array. piece-data))]
      (writer/seek writer seek-position)
      (let-async [_ (writer/write writer piece-data)]
        ; Consume this piece from the queue
        (queue/disj! file-write-queue (file-queue-key file) next-piece)
        ; And inform that it has been written
        (console/log "Finished writing file" seek-position piece-index)
        (dispatch/fire :written-piece [torrent piece-index])
        ; grab the next one if applicable
        (seek-then-write torrent file writer)))))