(ns torrent-client.torrents
  (:require 
    [torrent-client.core.dispatch :as dispatch]))

; A vector of the torrents currently in use
; the key is the pretty-info-hash
(def torrents (atom {}))

(defn- start-torrent [metadata]
  (let [torrent (atom metadata)]
    (swap! torrents assoc (@torrent :pretty-info-hash) torrent)
    (dispatch/fire :started-torrent torrent)))

(defn- update-torrent [torrent metadata]
  (swap! torrent merge metadata)
  (dispatch/fire :updated-torrent torrent))

; When metadata is processed turn it into an atom and track it
(dispatch/react-to #{:processed-metadata} (fn [_ metadata]
  (.log js/console "Adding to torrents atom" metadata)
  (if-let [existing (@torrents (metadata :pretty-info-hash))]
    (if (@existing :pieces-hash)
      ; If we have all the metadata why would the user give us more
      (dispatch/fire :duplicate-torrent existing)
      ; If we receieve extra data on the torrent
      (update-torrent existing metadata))
    (start-torrent metadata))))

(dispatch/react-to #{:written-piece} (fn [_ [torrent _]]
  (let [pieces-written (inc (or (@torrent :pieces-written) 0))]
    (swap! torrent assoc :pieces-written pieces-written)
    ; If this torrent has all it's pieces mark as such
    (if (= pieces-written (@torrent :pieces-length))
      (dispatch/fire :completed-torrent torrent)))))

(dispatch/react-to #{:update-metadata} (fn [_ [torrent metadata]]
  (swap! torrent merge metadata)))