(ns filesystem.filesystem
  (:require [filesystem.prefix :as prefix])
  (:use-macros [async.macros :only [let-async async]]))

(defn request-file-system [type size]
  (async [success-callback error-callback]
    (.webkitRequestFileSystem js/window 
                              (aget js/window (name type)) 
                              size 
                              success-callback 
                              error-callback)))

(defn request-quota [type size]
  (async [success-callback error-callback]
    (if-let [storage (.-webkitPersistentStorage js/navigator)]
      ; Chrome 27 and up
      (.requestQuota storage size success-callback error-callback)
      ; Chrome 26
      (.requestQuota (.-webkitStorageInfo js/window)
                     (aget js/window (name type))
                     size
                     success-callback
                     error-callback))))

(defn request-quota-then-filesystem [type size]
  "A combination of the above two functions, if request-quota succeeds,
  then call request-file-system"
  (let-async [granted-bytes (request-quota type size)]
    (request-file-system type granted-bytes)))

(defn filereader [obj]
  (async [success-callback error-callback]
    (let [reader (js/FileReader.)
          ; onloadend actually triggers a progress event
          ; we want the actual file contents
          success-callback #(success-callback (-> % .-currentTarget .-result))]
      (set! (.-onerror reader) error-callback)
      (set! (.-onloadend reader) success-callback)
      (.readAsArrayBuffer reader obj))))

(defn file? [obj] (instance? js/File obj))

(defn slice [file offset length]
  {:pre [(file? file)]}
  (.slice file offset (+ offset length)))

(defn seek [file position]
  (.seek file position))

(defn truncate [file length]
  (.truncate file length))

(defn write [file data]
  (.write file data))