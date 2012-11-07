(ns torrent-client.client.core.crypt
  (:require
    [goog.crypt :as crypt]
    [goog.crypt.Sha1 :as Sha1])
  (:use 
    [torrent-client.client.core.bencode :only [int char]]
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

(defn pack [formatters data]
  (let [reader (push-back-reader [])]

    (doseq [format formatters]
      (pack-data format data))
    data))

(defn unpack [formatters data]
  (let [reader (push-back-reader data)]
    (doseq [format formatters]
      (unpack-data format data))
    data))

(defmulti packdata (fn [format data] format))

(defmethod packdata :int [data]
  (let [bytes-to-read (sizes :int)]
    (int (char (reader bytes-to-read)))))

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
