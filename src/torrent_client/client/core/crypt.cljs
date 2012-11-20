(ns torrent-client.client.core.crypt
  (:require
    [goog.crypt :as crypt]
    [goog.crypt.Sha1 :as Sha1])
  (:use 
    [torrent-client.client.core.bencode :only [int char]]
    [torrent-client.client.core.bencode :only 
      [encode decode uint8-array push-back-reader]]
    [goog.crypt :only [byteArrayToString]]
    [jayq.util :only [clj->js]]))

(defn sha1 
  "A wrapper around the SHA class to get the
  computed value without subsequent calls"
  [string]
  (let [sha1 (crypt/Sha1.)]
    (.update sha1 string)
    (.digest sha1)))

(def sizes {
  :byte (/ 8 8)
  :char (/ 16 8)
  :short (/ 16 8)
  :int (/ 32 8)
  :long (/ 64 8)
  :float (/ 32 8)
  :double (/ 64 8)
  })

(defn pack [& formatters]
  (let [reader (push-back-reader [])
        formatters (partition 2 formatters)]
    (apply str (map pack-data formatters))))

(defmulti pack-data (fn [[format data]] format))

(defmethod pack-data :int [[_ data]]
  (char [(bit-and 0xff (bit-shift-right data 24))
         (bit-and 0xff (bit-shift-right data 16))
         (bit-and 0xff (bit-shift-right data 8))
         (bit-and 0xff data)]))


(defn unpack [formatters data]
  (let [reader (push-back-reader data)]
    (doseq [format formatters]
      (unpack-data format data))
    data))

(defmulti unpack-data (fn [format data] format))

(defmethod unpack-data :int [_ data]
  (or (bit-shift-left (nth data 0) 24)
      (bit-shift-left (nth data 1) 16)
      (bit-shift-left (nth data 2) 8)
      (nth data 3)))

(defn str-to-uint8-array
  "The same as googles stringToByteArray
  but works on a typed array instead!"
  [string]
  (let [buffer (js/ArrayBuffer. (count string))
        buffer-view (js/Uint8Array. buffer)]
    (doseq [i (range (count string))
            :let [byte (.charCodeAt string i)]]
      (aset buffer-view i byte))
    buffer-view
  ))

(defn b64-encode [string]
  (.btoa js/window string))

(defn b64-decode [string]
  (.atob js/window string))

; allegedly (:use) supports rename, I can't get it working
(def goog-byteArrayToString byteArrayToString)

(defn byteArrayToString
  "Wrapper around the closure library to feed it cljs datatypes"
  [array]
  (goog-byteArrayToString (clj->js array)))
