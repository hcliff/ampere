(ns torrent-client.core.metadata
  (:use [torrent-client.core.byte-array :only [uint8-array]]))

; The bytes in each metainfo piece
(def piece-length 16384)

(defn pieces->metadata
  "Build metadata from its pieces"
  [pieces]
  (let [info-length (reduce + (map count (vals pieces)))
        ; Build a byte array long enough for all the pieces
        byte-array (uint8-array info-length)]
    ; Then add all the pieces at their correct offset
    (doseq [[piece-index piece] pieces
            :let [offset (* piece-index piece-length)]]
      (.set byte-array piece offset))
    byte-array))