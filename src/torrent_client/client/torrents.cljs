(ns torrent-client.client.torrents
  (:require 
    [torrent-client.client.core.dispatch :as dispatch]))

; A vector of the torrents currently in use
; the key is the pretty-info-hash
(def torrents (atom {}))

; When a torrent is started, add it to the torrents
(dispatch/react-to #{:processed-torrent} (fn [_ torrent]
  (.log js/console "Adding to torrents atom" torrent)
  (swap! torrents assoc (@torrent :pretty-info-hash) torrent)
  (dispatch/fire :started-torrent torrent)
  ))