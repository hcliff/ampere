(ns filesystem.filesystem
  (:use [filesystem.blockfile :only [get-file]])
  (:require [filesystem.prefix :as prefix])
  (:use-macros [async.macros :only [let-async async]]))

(defn request-file-system [type size]
  (async [success-callback error-callback]
    (.webkitRequestFileSystem js/window (aget js/window (name type)) size success-callback error-callback)
  ))

(defn request-quota [type size]
  (async [success-callback error-callback]
    (.requestQuota (.-webkitStorageInfo js/window) (aget js/window (name type)) size success-callback error-callback)
  ))

(defn request-quota-then-filesystem [type size]
  "A combination of the above two functions, if request-quota succeeds,
  then call request-file-system"
  (let-async [granted-bytes (request-quota type size)]
    (request-file-system type granted-bytes)))

(defn filereader [obj]
  (async [success-callback]
    (let [reader (js/FileReader.)
          ; onloadend actually triggers a progress event
          ; we want the actual file contents
          success-callback #(success-callback (.-result (.-currentTarget %)))]
      (set! (.-onloadend reader) success-callback)
      (.readAsArrayBuffer reader obj))))