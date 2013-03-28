(ns torrent-client.core.bencode
  (:use 
    [clojure.walk :only [keywordize-keys]]
    [torrent-client.core.byte-array :only [uint8-array]])
  (:require 
    [goog.crypt :as crypt]
    [torrent-client.core.reader :as reader]))

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
        (recur (conj result (decode-dispatch stream c)))))))

(defn- decode-map [stream] 
  (let [list (decode-list stream)]
    (apply array-map (map #(%1 %2) (cycle [keyword identity]) list))))

(defn- decode-dispatch [stream & i]
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

(defn decode [stream & flags]
  (let [output (decode-dispatch stream)
        data (reader/rem stream)]
    ; Check if data at the end of the stream was requested
    (if-not (contains? (set flags) :payload)
      output
      ; Otherwise return the object and the remainder
      [output data])))

(defprotocol ArrayOutputStream
  (write [array bytes] "append the bytes to the array"))

(deftype ByteArrayOutputStream [array]
  ArrayOutputStream
  (write [_ bytes]
    (if (number? bytes)
      (.push array bytes)
      (.apply (.-push array) array bytes)))
    array)

(defn byte-array-output-stream []
  "Generate a new ByteArrayOutputStream with a native
  javascript array (performance reasons)"
  (ByteArrayOutputStream. (js/Array)))

(defn- encode-string [obj stream]
  (let [bytes (crypt/stringToByteArray obj)
        bytes-length (crypt/stringToByteArray (str (count bytes) ":"))]
    (write stream bytes-length)
    (write stream bytes)))

(defn- encode-number [number stream]
  (let [string (str "i" number "e")
        bytes (crypt/stringToByteArray string)]
    (write stream bytes)))

(defn- encode-seq [seq stream]
  (write stream 108)
  ; (js* "debugger;")
  (doseq [item seq]
    (encode-object item stream))
  (write stream 101))

(defn- encode-dictionary [dictionary stream]
  (write stream 100)
  ; (js* "debugger;")
  (doseq [[key item] (seq dictionary)]
    (encode-object key stream)
    (encode-object item stream))
  (write stream 101))

(defn- encode-object [obj stream]
  ; (js* "debugger;")
  (cond (keyword? obj) (encode-string (name obj) stream)
        (string? obj) (encode-string obj stream)
        (number? obj) (encode-number obj stream)
        (sequential? obj) (encode-seq obj stream)
        (map? obj) (encode-dictionary obj stream)))

(defn encode [obj]
  (let [stream (byte-array-output-stream)] 
    (encode-object obj stream)
    (.-array stream)))