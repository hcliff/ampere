(ns torrent-client.bitfield
  (:use
    [torrent-client.core.byte-array :only [uint8-array?]])
  (:require [torrent-client.core.dispatch :as dispatch]))

(deftype Bitfield [byte-array i]

  Object
  (toString [this] (pr-str byte-array))

  IEncodeJS
  (-clj->js [_] byte-array)

  IIndexed
  (-nth [bitfield n]
    (let [n (+ n i)
          piece (bit-shift-right n 3)
          bit (bit-shift-right 128 (mod n 8))]
      (bit-and (aget byte-array piece) bit)))

  IFn
  (-invoke [bitfield] byte-array)

  IAssociative
  (-assoc [_ k v]
    (let [k (+ k i)
          byte-index (bit-shift-right k 3)
          byte (aget byte-array byte-index)
          ; bitorrent uses the high bit as 0
          ; but bit-set/clear uses the low bit as 0
          piece-bit (- 7 (mod k 8))
          ; How are we modifying the byte?
          f (if v bit-set bit-clear)]
      (aset byte-array byte-index (f byte piece-bit))))

  ICollection
  (-conj [coll entry]
    (if (vector? entry)
      (-assoc coll (-nth entry 0) (-nth entry 1))
      (reduce -conj
              coll
              entry)))

  ISeqable
  (-seq [this] this)

  ASeq
  ISeq
  (-first [bitfield] (nth bitfield 0))
  (-rest [bitfield] 
    ; If we can create a new bitfield with length >= 1
    (if (pos? (dec (count bitfield)))
      (Bitfield. byte-array (inc i))))

  ICounted
  ; Return the number of bits in the bitfield
  (-count [_] (- (* 8 (count byte-array)) i))

  )

(defn bitfield [bits]
  (cond 
    (integer? bits)
    ; Create a new bitfield, given the number
    ; of bits in it
    (let [length (Math/ceil (/ bits 8))
          byte-array (js/Uint8Array. length)]
      (Bitfield. byte-array 0))

    ; Construct a bitfield from an existing one
    ; (received from peer)
    (uint8-array? bits)
    ; TODO: check this
    ; (let [byte-array (js/Uint8Array. bits)]
    (Bitfield. bits 0)

    :else
    (let [byte-array (js/Uint8Array. (clj->js bits))]
      (Bitfield. byte-array 0))))

(defn fill-bitfield!
  "Given a bitfield mark that we have all the pieces"
  [bitfield pieces-length]
  (let [full-bytes (quot pieces-length 8)
        represented-bits (* full-bytes 8)]
    ; The last bitfield byte may be partial 
    (dotimes [n full-bytes]
      (aset (.-byte-array bitfield) n 255))
    (doseq [n (range represented-bits pieces-length)]
      (assoc bitfield n true))
    bitfield))

;;************************************************
;; Bitfield methods
;; modeled after clojure.set
;; TODO: seperate out
;;************************************************

(defn intersection [b1 b2]
  (let [byte-array1 (.-byte-array b1)
        byte-array2 (.-byte-array b2)]
    ; loop over the byte array (each byte)
    ; not the bitfield (each bit)
    (bitfield (doall (map bit-and byte-array1 byte-array2)))))

(defn union [b1 b2]
  (let [byte-array1 (.-byte-array b1)
        byte-array2 (.-byte-array b2)]
    (bitfield (doall (map bit-or byte-array1 byte-array2)))))

; Modelled after set/difference
(defn difference
  ([b1 b2]
    (let [byte-array1 (.-byte-array b1)
          byte-array2 (.-byte-array b2)
          ; get the unique bits (inverse intersection)
          unique (map bit-xor byte-array1 byte-array2)]
      ; the unique bits in byte-array 1
      (intersection b1 (bitfield unique))))
  ([b1 b2 & bitfields]
    (reduce difference b1 (conj bitfields b2))))

;;************************************************
;; Event handling
;;************************************************

(dispatch/react-to #{:written-piece} (fn [_ [torrent piece-index]]
  (let [bitfield (@torrent :bitfield)]
    (assoc bitfield piece-index true)
    ; (if (filter #(= % 0xff) (.-byte-array bitfield))
    ;   (dispatch/fire :completed-torrent torrent))
    )))