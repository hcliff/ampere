(ns torrent-client.metadata
  (:require 
    [torrent-client.core.dispatch :as dispatch])
  (:use
    [torrent-client.torrents :only [torrents]]
    [torrent-client.core.metadata :only [piece-length pieces->metadata]]))

; metadata pieces we are currently getting
(def working (atom {}))

; All the metadata pieces we've recieved
(def recieved (atom {}))

; Indexes of all the pieces in a torrent
(defn pieces [torrent]
  (range (Math/ceil (/ (@torrent :metadata-length) piece-length))))

(defn wanted-pieces [torrent]
  "Given a torrent return the pieces missing from its metadata"
  (let [info-hash (@torrent :pretty-info-hash)
        wanted (pieces torrent)
        working (set (@working info-hash))]
    (remove #(contains? working %) wanted)))

(dispatch/react-to #{:receive-metadata-piece} (fn [_ [torrent piece-index payload]]
  "When we get a metadata piece add it to the receieved pile"
  (let [info-hash (@torrent :pretty-info-hash)
        pieces (remove #(= piece-index %) (@working info-hash))]
    (swap! working assoc info-hash pieces))
    (swap! recieved assoc-in [info-hash piece-index] payload)
    ; And if we have all the metadata pieces 
    (if (= (count received) (count (pieces torrent)))
      (let [byte-array (pieces->metadata received)]
        (swap! received dissoc info-hash)
        (dispatch/fire :receive-metadata [torrent byte-array])))))

(dispatch/react-to #{:receive-metadata} (fn [_ [torrent metadata]]
  (if (= (hash metadata) (@torrent :info-hash))
    (dispatch/fire :add-metadata-byte-array metadata))))

(defn get-piece [torrent piece-index]
  (uint8-array (@torrent :metadata-byte-array) (* piece-index piece-length)))