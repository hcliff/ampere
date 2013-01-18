(ns torrent-client.client.core.crypt
  (:require
    [goog.crypt :as crypt]
    [goog.crypt.Sha1 :as Sha1]
    [torrent-client.client.core.reader :as reader])
  (:use 
    [torrent-client.client.core.bencode :only [char]]
    [jayq.util :only [clj->js]]))

(defn sha1 
  "A wrapper around the SHA class to get the
  computed value without subsequent calls"
  [obj]
  (let [sha1 (crypt/Sha1.)]
    (.update sha1 obj)
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

; H.C currently packs to string
; if we change communication to bytearray will need changing
(defn pack [& formatters]
  (let [formatters (partition 2 formatters)]
    (apply str (map pack-data formatters))))

(defmulti pack-data (fn [[format data]] format))

(defmethod pack-data :int [[_ data]]
  (char [(bit-and 0xff (bit-shift-right data 24))
         (bit-and 0xff (bit-shift-right data 16))
         (bit-and 0xff (bit-shift-right data 8))
         (bit-and 0xff data)]))

(defn unpack [formatters data]
  (let [reader (reader/push-back-reader data)]
    (loop [formatters formatters
           data []]
      (if-let [formatter (first formatters)]
        (let [bytes (reader/read reader (sizes formatter))]
          (recur (rest formatters)
                 ; Execute this formatter add the result to the data
                 (conj data (unpack-data formatter bytes))))
        ; And return the data when we're done
        data))))

(defmulti unpack-data (fn [format data] format))

(defmethod unpack-data :int [_ data]
  (+ (bit-shift-left (nth data 0) 24)
     (bit-shift-left (nth data 1) 16)
     (bit-shift-left (nth data 2) 8)
     (nth data 3)))

(defn b64-encode [string]
  (.btoa js/window string))

(defn b64-decode [string]
  (.atob js/window string))

(defn str->byte-array
  "The same as googles stringToByteArray
  but works on a typed array instead!"
  [string]
  (let [buffer (js/ArrayBuffer. (count string))
        buffer-view (js/Uint8Array. buffer)]
    (doseq [i (range (count string))
            :let [byte (.charCodeAt string i)]]
      (aset buffer-view i byte))
    buffer-view))

(defn byte-array->str
  "Wrapper around the closure library to feed it cljs datatypes"
  [array]
  (crypt/byteArrayToString (clj->js array)))