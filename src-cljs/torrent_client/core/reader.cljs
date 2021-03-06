(ns torrent-client.core.reader
  (:refer-clojure :exclude [rem])
  (:use [torrent-client.core.byte-array :only [subarray]]))

(defprotocol PushbackReader
  (read [reader] [reader length] "Returns the next char from the Reader,
nil if the end of stream has been reached")
  (rem [reader] "Return the unread part of the array"))

; Using two atoms is less idomatic, but saves the repeat overhead of map creation
(deftype ArrayPushbackReader [array index-atom]
  PushbackReader
  (read [reader] (read reader 1))
  (read [_ length]
    (let [idx @index-atom
          length (or length 1)
          buffer-view (subarray array idx (+ idx length))]
      (swap! index-atom + length)
      ; If reading only 1 character return just the character
      ; otherwise return an array of characters
      (if (= length 1)
        (aget buffer-view 0)
        buffer-view)))
  (rem [_] (subarray array @index-atom)))

(defn push-back-reader [array]
  "Creates an ArrayPushbackReader from a given array"
  (ArrayPushbackReader. array (atom 0)))