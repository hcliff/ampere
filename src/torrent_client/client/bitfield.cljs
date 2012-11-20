(ns torrent-client.client.bitfield
  (:use [jayq.util :only [clj->js]]))

(defprotocol BitfieldProtocol
  (get [bitfield index] "Return if a piece exists within the bitfield")
  (byte-array [bitfield] "Returns the internal byte-array")
  )

(deftype Bitfield [byte-array]

  Object
  (toString [this]
    (pr-str byte-array))

  BitfieldProtocol
  (get [bitfield index]
    (let [; What byte does this position pack into
          byte-index (bit-shift-right index 3)
          byte (aget byte-array byte-index)
          ; The piece bit within the byte is the remainder
          piece-bit (bit-shift-left 1 (mod index 8))])
      ; If there is no overlap between the byte and our piece-bit
      ; it must be a 0 and thus not downloaded
      (not= (bit-and byte index-bit) 0))

  (byte-array [bitfield]
    byte-array)

  IFn
  (-invoke [bitfield] byte-array)

  IAssociative
  (-assoc [coll k v]
    (let [byte-index (bit-shift-right k 3)
          byte (aget byte-array byte-index)
          piece-bit (bit-shift-left 1 (mod k 8))]
      (if v
        ; If we have the piece add it to the byte
        (aset byte-array byte-index (bit-or byte piece-bit))
        ; Otherwise remove it
        (aset byte-array byte-index (bit-xor byte piece-bit)))
    ))

  )

(defn bitfield [bits]
  (if (integer? bits)
    ; Create a new bitfield, given the number
    ; of bits in it
    (let [length (Math/ceil (/ bits 8))
          byte-array (js/Uint8Array. length)]
      (Bitfield. byte-array))
    ; Construct a bitfield from an existing one
    ; (recieved from peer)
    (let [byte-array (js/Uint8Array. bits)]
      (Bitfield. byte-array))))

(defn fill-bitfield 
  "Given a bitfield mark that we have all the pieces"
  [bitfield pieces-length]
  (let [full-bytes (quot pieces-length 8)
        represented-bits (* full-bytes 8)]
    ; The last bitfield byte may be partial 
    (dotimes [n full-bytes]
      (aset (byte-array bitfield) n 255))
    (doseq [n (range represented-bits pieces-length)]
      (assoc bitfield n true))
    bitfield))

(defn bitfield-unique [bitfield1 bitfield2]
  ; Calculate the difference in pieces between the bitfields
  ; ie: pieces only the client or only the peer has
  (let [xor (bit-xor bitfield1 bitfield2)]
    ; Return the second bitfields unique pieces
    ; ie: pieces only the peer has
    (bit-and bitfield2 xor)))