(ns torrent-client.client.blocks
  (:use 
    [torrent-client.client.core.crypt :only [sha1 byte-array->str]]
    [torrent-client.client.core.byte-array :only [uint8-array]]))

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

  Fn
  IFn
  (-invoke [this]
    file)
  (-invoke [this k]
    (-lookup this k))
  (-invoke [this k not-found]
    (-lookup this k not-found))

  IAssociative
  (-contains-key? [this k]
    "Check if a block-index is required by this file"
    (if-not (nil? meta)
      (<= (meta :block-start) k (meta :block-end))))
  )

(defn block-file [file]
  (BlockFile. nil file))

(deftype Block [meta byte-array ^:mutable __hash]

  ICounted
  (-count [a] (count byte-array))

  IHash
  (-hash [_]
    ; H.C; check caching-hash macro
    (if-not (nil? __hash)
      __hash
      ; sha1 does not return a Uint8Array, it returns a regular array
      (let [hash-str (byte-array->str (sha1 byte-array))]
        ; H.C; this causes a compile fail?
        ; (set! __hash hash-str)

        ; If the hash didn't previously exist generate it and
        hash-str)))

  IWithMeta
  (-with-meta [_ meta] (Block. meta byte-array __hash))

  IMeta
  (-meta [_] meta)

  )

(defn block 
  "Build a block from its component pieces"
  [pieces]
  (let [pieces (sort :begin pieces)
        block-size (reduce + (map (comp count :data) pieces))
        ; Build a byte array long enough for all the pieces
        byte-array (uint8-array block-size)]
    ; Then add all the pieces at their correct offset
    (doseq [piece pieces]
      (.set byte-array (piece :data) (piece :begin)))
    (Block. nil byte-array nil)))