(ns torrent-client.torrents
  (:require 
    [torrent-client.core.dispatch :as dispatch]))

; A vector of the torrents currently in use
; the key is the pretty-info-hash
(def torrents (atom {}))

; When metadata is processed turn it into an atom and track it
(dispatch/react-to #{:processed-metadata} (fn [_ metadata]
  (.log js/console "Adding to torrents atom" metadata)
  (if-let [existing (@torrents (metadata :pretty-info-hash))]
    (dispatch/fire :duplicate-torrent existing)
    (let [torrent (atom metadata)]
      (swap! torrents assoc (@torrent :pretty-info-hash) torrent)
      (dispatch/fire :started-torrent torrent)))))

(dispatch/react-to #{:written-piece} (fn [_ [torrent _]]
  (let [pieces-written (inc (or (@torrent :pieces-written) 0))]
    (swap! torrent assoc :pieces-written pieces-written)
    ; If this torrent has all it's pieces mark as such
    (if (= pieces-written (@torrent :pieces-length))
      (dispatch/fire :completed-torrent torrent)))))

(dispatch/react-to #{:update-metadata} (fn [_ [torrent metadata]]
  (swap! torrent merge metadata)))