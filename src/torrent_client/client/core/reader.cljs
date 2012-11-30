(ns torrent-client.client.core.reader
  (:use
    [torrent-client.client.core.byte-array :only [subarray]]))

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