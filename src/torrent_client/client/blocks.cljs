(ns torrent-client.client.blocks
  (:require [torrent-client.client.crypt :as crypt]))

(defprotocol IFile 
  (-file [this] "Return the underlying file"))

(extend-type js/File
  IFile
  (-file [this] this))

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
    (<= (meta :block-start) k (meta :block-end)))

  IFile
  (-file [this] file)

  )

(defn block-file [file]
  (BlockFile. nil file))

(deftype Block [meta byte-array __hash]

  Hash
  (-hash [_] 
    (caching-hash byte-array crypt/sha1 __hash))

  IWithMeta
  (-with-meta [_ meta] (Block. meta __hash))

  IMeta
  (-meta [_] meta)

  )

(defn block 
  "Build a block from its component pieces"
  [pieces]
  (let [pieces (sort :begin pieces)
        block-size (reduce count pieces)
        byte-array (uint8-array block-size)]
    (doseq [piece pieces]
      (.set byte-array (piece :data) (piece :begin)))
    (Block. byte-array nil nil)))