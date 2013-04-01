(ns torrent-client.metadata
  (:require 
    [torrent-client.core.dispatch :as dispatch]
    [cljconsole.main :as console])
  (:use
    [torrent-client.torrent :only [has-full-metadata?]]
    [torrent-client.torrents :only [torrents]]
    [torrent-client.core.crypt :only [sha1]]
    [torrent-client.core.metadata :only [piece-length pieces->metadata]]
    [torrent-client.core.byte-array :only [uint8-array]]))

;;************************************************
;; For retrieving metadata per BEP 9
;;************************************************

; metadata pieces we are currently getting
(def working (atom {}))

; All the metadata pieces we've received
(def received (atom {}))

; Indexes of all the pieces in a torrent
(defn pieces [torrent]
  (range (Math/ceil (/ (@torrent :info-length) piece-length))))

(defn wanted-pieces [torrent]
  "Given a torrent return the pieces missing from its metadata"
  (let [info-hash (@torrent :pretty-info-hash)
        wanted (pieces torrent)
        working (set (@working info-hash))]
    (if-not (has-full-metadata? torrent)
      (remove #(contains? working %) wanted))))

(defn work-piece!
  "Marks that we have started fetching a piece"
  [torrent piece-index]
  (let [info-hash (@torrent :pretty-info-hash)]
    (.log js/console "work-next-piece" piece-index)
    ; Add this block to the works in progress
    (swap! working (partial merge-with concat) {info-hash [piece-index]})
    piece-index))

; (dispatch/react-to #{:receive-metadata-reject} (fn [_ [torrent piece-index]]
;   "A peer indicates it doesn't have a metadata piece, mark it no longer worked"
;   (let [info-hash (@torrent :pretty-info-hash)
;         pieces (remove #(= piece-index %) (@working info-hash))]
;     (swap! working assoc info-hash pieces))))

(dispatch/react-to #{:receive-metadata-piece} (fn [_ [torrent piece-index data]]
  "When we get a metadata piece add it to the receieved pile"
  (let [info-hash (@torrent :pretty-info-hash)
        working* (remove #(= piece-index %) (@working info-hash))]
    (swap! working assoc info-hash working*)
    (swap! received assoc-in [info-hash piece-index] data)
    ; And if we have all the metadata pieces 
    (if (= (count (@received info-hash)) (count (pieces torrent)))
      ; String all the pieces into one byte array
      (let [byte-array (pieces->metadata (@received info-hash))]
        (swap! received dissoc info-hash)
        (dispatch/fire :receive-metadata [torrent byte-array]))))))

(dispatch/react-to #{:receive-metadata} (fn [_ [torrent byte-array]]
  ; TODO: needless string conversion
  ; Verify that the correct metadata was received
  (if (= (vec (sha1 byte-array)) (vec (@torrent :info-hash)))
    (dispatch/fire :add-info-byte-array [torrent byte-array])
    (dispatch/fire :corrupt-metadata torrent))))

(dispatch/react-to #{:corrupt-metadata} (fn [_ torrent]
  (console/warn "Received incorrect metadata for torrent" 
                (@torrent :pretty-info-hash))))

(defn get-piece [torrent piece-index]
  (uint8-array (@torrent :info-byte-array) (* piece-index piece-length) piece-length))