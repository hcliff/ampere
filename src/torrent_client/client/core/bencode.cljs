(ns torrent-client.client.core.bencode
  (:require 
    [goog.crypt :as crypt]
    [torrent-client.client.core.reader :as reader])
  (:use
    [jayq.util :only [clj->js]]))

; There must be a better way to do this
(defn uint8-array
  ([length] (js/Uint8Array. length))
  ([array-buffer offset] (js/Uint8Array. array-buffer offset))
  ([array-buffer offset length] (js/Uint8Array. array-buffer offset length)))

(defn char [characters]
  (cond
    (goog.isNumber characters)
      (.fromCharCode js/String characters)
    (vector? characters)
      (.apply (.-fromCharCode js/String) nil (clj->js characters))
    :else
      (.apply (.-fromCharCode js/String) nil characters)))

(defn int [number]
  (js/parseInt number))

(defn decode [stream & i]
  (let [indicator (if (nil? i) (reader/read stream) (first i))]
    (cond 
      ; indicator is a number (indicates a string)
      (and (>= indicator 48) (<= indicator 57)) (decode-string stream indicator)
      ; indicator is i
      (= indicator 105) (decode-number stream "e")
      ; indicator is l
      (= indicator 108) (decode-list stream)
      ; indicator is d
      (= indicator 100) (decode-map stream))))

(defn- decode-number [stream delimeter & ch]
  (loop [i (if (nil? ch) (reader/read stream) (first ch)), result ""]
    (let [c (char i)]
      (if (= c delimeter)
        (int result)
        (recur (reader/read stream) (str result c))))))

(defn- decode-string [stream ch]
  (let [length (decode-number stream ":" ch)]
    (char (reader/read stream length))))

(defn- decode-list [stream]
  (loop [result []]
    (let [c (reader/read stream)]
      ; If c is e - the end character then return the result
      (if (= c 101)
        result
        (recur (conj result (decode stream c)))))))

(defn- decode-map [stream] 
  (let [list (decode-list stream)] 
    (with-meta 
      (apply hash-map list) 
      {:order (map first (partition 2 list))})))
  ; (keywordize-keys (apply hash-map (decode-list stream)))
    ; (apply array-map (decode-list stream)))


(defprotocol ArrayOutputStream
  (write [array bytes] "append the bytes to the array"))

(deftype ByteArrayOutputStream [array]
  ArrayOutputStream
  (write [stream bytes]
    (if (number? bytes)
      (.push array bytes)
      (.apply (.-push array) array bytes))))

(defn byte-array-output-stream []
  "Generate a new ByteArrayOutputStream with a native
  javascript array (performance reasons)"
  (ByteArrayOutputStream. (js/Array)))

(defn encode [obj]
  (let [stream (byte-array-output-stream)] 
    (encode-object obj stream)
    (.-array stream)))

(defn- encode-object [obj stream]
  (cond (string?  obj) (encode-string obj stream)
        (number? obj) (encode-number obj stream)
        (vector? obj) (encode-list obj stream)
        (map? obj) (encode-dictionary obj stream)))

(defn- encode-string [obj stream]
  (let [bytes (crypt/stringToByteArray obj)
        bytes-length (crypt/stringToByteArray (str (count bytes) ":"))]
    (write stream bytes-length 0 (count bytes-length))
    (write stream bytes 0 (count bytes))))

(defn- encode-number [number stream]
  (let [string (str "i" number "e")
        bytes (crypt/stringToByteArray string)]
    (write stream bytes 0 (count bytes))))

(defn- encode-list [list stream]
  (write stream 108)
  (doseq [item list]
    (encode-object item stream))
  (write stream 101))

(defn- encode-dictionary [dictionary stream]
  (write stream 100)
  (doseq [item (if (nil? (meta dictionary)) 
               (keys dictionary)(:order (meta dictionary)))]
    (encode-object item stream)
    (encode-object (dictionary item) stream))
  (write stream 101))