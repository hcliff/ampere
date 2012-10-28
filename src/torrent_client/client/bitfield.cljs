(ns torrent-client.client.bitfield)

(defprotocol BitfieldProtocol
  (get [bitfield index] "Return if a piece exists within the bitfield")
  (set! [bitfield index val] "Set a piece within the bitfield")
  (byte-array [bitfield] "Returns the internal byte-array")
  )

(deftype Bitfield [byte-array]
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

  (set! [bitfield index val]
    (let [byte-index (bit-shift-right index 3)
          byte (aget byte-array byte-index)
          piece-bit (bit-shift-left 1 (mod index 8))]
      (if val
        ; If we have the piece add it to the byte
        (aset byte-array byte-index (bit-and byte piece-bit))
        ; Otherwise remove it
        (aset byte-array byte-index (bit-xor byte piece-bit)))
    ))

  (byte-array [bitfield]
    byte-array)

  IFn
  (-invoke [bitfield] byte-array)

  )

(defn bitfield [length]
  (let [byte-array (js/Uint8Array. length)]
    (Bitfield. byte-array)))

(defn bitfield-unique [bitfield1 bitfield2]
  ; Calculate the difference in pieces between the bitfields
  ; ie: pieces only the client or only the peer has
  (let [xor (bit-xor bitfield1 bitfield2)]
    ; Return the second bitfields unique pieces
    ; ie: pieces only the peer has
    (bit-and bitfield2 xor)))