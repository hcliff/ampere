(ns torrent-client.torrents
  (:require 
    [torrent-client.core.dispatch :as dispatch]))

; A vector of the torrents currently in use
; the key is the pretty-info-hash
(def torrents (atom {}))

; When a torrent is started, add it to the torrents
(dispatch/react-to #{:processed-torrent} (fn [_ torrent]
  (.log js/console "Adding to torrents atom" torrent)
  (swap! torrents assoc (@torrent :pretty-info-hash) torrent)
  (dispatch/fire :started-torrent torrent)))

(dispatch/react-to #{:written-piece} (fn [_ [torrent _]]
  (let [pieces-written (inc (or (@torrent :pieces-written) 0))]
    (swap! torrent assoc :pieces-written pieces-written)
    ; If this torrent has all it's pieces mark as such
    (if (= pieces-written (@torrent :pieces-length))
      (dispatch/fire :completed-torrent torrent)))))