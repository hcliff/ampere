(ns torrent-client.client.core.bencode
  (:require [goog.crypt :as crypt])
  (:use [clojure.walk :only [keywordize-keys]]))

(defprotocol PushbackReader
  (read [reader length] "Returns the next char from the Reader,
nil if the end of stream has been reached"))

; Using two atoms is less idomatic, but saves the repeat overhead of map creation
(deftype ArrayPushbackReader [array index-atom]
  PushbackReader
  (read [reader length]
    (let [idx @index-atom
          length (or length 1)
          buffer-view (subarray array idx (+ idx length))]
      (swap! index-atom + length)
      ; If reading only 1 character return just the character
      ; otherwise return an array of characters
      (if (= length 1)
        (aget buffer-view 0)
        buffer-view))))

(defn push-back-reader [array]
  "Creates an ArrayPushbackReader from a given array"
  (ArrayPushbackReader. array (atom 0)))

; There must be a better way to do this
(defn uint8-array 
  ([array-buffer offset] (js/Uint8Array. array-buffer offset))
  ([array-buffer offset length] (js/Uint8Array. array-buffer offset length)))

(defn subarray [array-buffer-view begin end]
  (.subarray array-buffer-view begin end))

(defn char [characters]
  (if (goog.isNumber characters)
    (.fromCharCode js/String characters)
    (.apply (.-fromCharCode js/String) nil characters)))

(defn int [number]
  (js/parseInt number))

(defn decode [stream & i]
  (let [indicator (if (nil? i) (read stream) (first i))]
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
  (loop [i (if (nil? ch) (read stream) (first ch)), result ""]
    (let [c (char i)]
      (if (= c delimeter)
        (int result)
        (recur (read stream) (str result c))))))

(defn- decode-string [stream ch]
  (let [length (decode-number stream ":" ch)]
    (char (read stream length))))

(defn- decode-list [stream]
  (loop [result []]
    (let [c (read stream)]
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
  (write [array bytes] "append the bytes to the array")
  (toByteArray [array] "represent the array as a bytearray"))

(deftype ByteArrayOutputStream [array]
  ArrayOutputStream
  (write [stream bytes]
    (if (number? bytes)
      (.push array bytes)
      (.apply (.-push array) array bytes)))
  (toByteArray [stream]
    array))

(defn byte-array-output-stream []
  "Generate a new ByteArrayOutputStream with a native
  javascript array (performance reasons)"
  (ByteArrayOutputStream. (js/Array)))

(defn encode [obj]
  (let [stream (byte-array-output-stream)] 
    (encode-object obj stream)
    (toByteArray stream)))

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