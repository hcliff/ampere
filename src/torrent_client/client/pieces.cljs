(ns torrent-client.client.pieces)

; manages the pieces for a torrent
; what pieces do we have?
; what do we need?
; what ones are in progress

(defn- generate-block-boundaries [files piece-length]
  "Given a file and the torrent piece-length calculate the
  blocks that a file needs, note that two files may require
  the same piece due to overlap between the head and tail of
  the files. (e.g block 3 has the head of file b and tail of a)"
  (map (fn [file]
    (let [start (math/floor (/ (file :pos-start) piece-length))
          end (math/ceil (/ (file :pos-end) piece-length))]
      (assoc file :block-start start :block-end end))) 
    files))

(defn get-next-piece [torrent peer-bitfield]
	(let [piece (first @need)]
		(swap! need rest)
		(swap! working assoc piece)
		piece

	))