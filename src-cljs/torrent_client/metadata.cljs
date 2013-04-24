(ns torrent-client.metadata
  (:require 
    [torrent-client.core.dispatch :as dispatch]
    [torrent-client.core.queue :as queue]
    [torrent-client.core.crypt :as crypt]
    [torrent-client.core.byte-array :as byte-array]
    [cljconsole.main :as console])
  (:use
    [torrent-client.torrent :only [has-full-metadata?]]
    [torrent-client.torrents :only [torrents]]
    [torrent-client.core.metadata :only [piece-length pieces->metadata]])
  (:use-macros 
    [task.macros :only [deftask]]))

;;************************************************
;; For retrieving metadata per BEP 9
;;************************************************

; metadata pieces we are currently getting
(def working (atom {}))

; All the metadata pieces we've received
(def received (atom {}))

; How long can a piece be working before we expire it
(def working-life (* 1000 15))

; (deftask expire-pieces working-life [_]
;   (queue/expire working working-life))

; Indexes of all the pieces in a torrent
(defn pieces [torrent]
  (range (Math/ceil (/ (@torrent :info-length) piece-length))))

(defn wanted-pieces [torrent]
  "Given a torrent return the pieces missing from its metadata"
  (let [wanted (pieces torrent)]
    (if-not (has-full-metadata? torrent)
      (remove #(queue/contains? working torrent %) wanted))))

(dispatch/react-to #{:receive-metadata-reject} (fn [_ [torrent piece-index]]
  "A peer indicates it doesn't have a metadata piece, mark it no longer worked"
  (queue/disj! working torrent piece-index)))

(dispatch/react-to #{:receive-metadata-piece} (fn [_ [torrent piece-index data]]
  "When we get a metadata piece add it to the receieved pile"
  (let [info-hash (@torrent :pretty-info-hash)]
    (swap! received assoc-in [info-hash piece-index] data)
    (queue/disj! working torrent piece-index)
    ; And if we have all the metadata pieces 
    (if (= (count (@received info-hash)) (count (pieces torrent)))
      ; String all the pieces into one byte array
      (let [byte-array (pieces->metadata (@received info-hash))]
        (swap! received dissoc info-hash)
        (dispatch/fire :receive-metadata [torrent byte-array]))))))

(dispatch/react-to #{:receive-metadata} (fn [_ [torrent byte-array]]
  ; TODO: needless string conversion
  ; Verify that the correct metadata was received
  (if (= (vec (crypt/sha1 byte-array)) (vec (@torrent :info-hash)))
    (dispatch/fire :add-info-byte-array [torrent byte-array])
    (dispatch/fire :corrupt-metadata torrent))))

(dispatch/react-to #{:corrupt-metadata} (fn [_ torrent]
  (console/warn "Received incorrect metadata for torrent" 
                (@torrent :pretty-info-hash))))

(defn get-piece [torrent piece-index]
  (byte-array/uint8-array (@torrent :info-byte-array) 
                          (* piece-index piece-length) 
                          piece-length))