(ns torrent-client.client.core.byte-array
  (:require 
    [goog.crypt :as crypt]))

(defprotocol SubArray
  (subarray [array start] [array start finish] "Return a subarray of the array immediately"))

(extend-type js/Uint8Array

  ISeqable
  (-seq [array] (array-seq array 0))

  ICounted
  (-count [a] (alength a))

  IIndexed
  (-nth
    ([array n]
       (if (< n (alength array)) (aget array n)))
    ([array n not-found]
       (if (< n (alength array)) (aget array n)
           not-found)))

  ILookup
  (-lookup
    ([array k]
       (aget array k))
    ([array k not-found]
       (-nth array k not-found)))

  IReduce
  (-reduce
    ([array f]
       (ci-reduce array f))
    ([array f start]
       (ci-reduce array f start)))

  SubArray
  (subarray [array start]
    (.subarray array start))
  (subarray [array start finish]
    (.subarray array start finish))

  ICounted
  (-count [array] (.-length array))

  )

; H.C Object on type gives error?
(set! js/Uint8Array.prototype.toString (fn []
  (this-as self
    (crypt/byteArrayToString self))))

(defn uint8-array
  "Build a new byte array"
  ([length] (js/Uint8Array. length))
  ([array-buffer offset] (js/Uint8Array. array-buffer offset))
  ([array-buffer offset length] (js/Uint8Array. array-buffer offset length)))

(defn subarray 
  ([coll start]
    (.subarray coll start))
  ([coll start finish]
    (.subarray coll start finish)))

(defn ^boolean uint8-array? [candidate]
  ; Incorrect; but js/ArrayBufferView doesn't exist
  (instance? js/Uint8Array candidate))