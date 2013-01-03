(ns filesystem.blockfile)

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

(defn get-file [obj]
  (-file obj))

(.log js/console "not last")