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
    (.requestQuota (.-webkitPersistentStorage js/navigator) 
                   size 
                   success-callback 
                   error-callback)))

(defn request-quota-then-filesystem [type size]
  "A combination of the above two functions, if request-quota succeeds,
  then call request-file-system"
  (let-async [granted-bytes (request-quota type size)]
    (request-file-system type granted-bytes)))

(defn filereader 
  ([obj]
    (async [success-callback error-callback]
      (let [reader (js/FileReader.)
            ; onloadend actually triggers a progress event
            ; we want the actual file contents
            success-callback #(success-callback (.-result (.-currentTarget %)))]
        (set! (.-onerror reader) error-callback)
        (set! (.-onloadend reader) success-callback)
        (.readAsArrayBuffer reader obj))))
  ([obj offset length]
    "Small helper function to build the slicer when given a offset and length"
    ; H.C: not sure if .slice can be relied on? (see mozSlice)
    ; at this time ampere only targets chrome so this isn't an issue
    (let [blob (.slice obj offset (+ offset length))]
      (filereader blob))))