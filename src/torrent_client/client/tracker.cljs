(ns torrent-client.client.tracker
  (:require 
    [torrent-client.client.core.dispatch :as dispatch])
  (:use [torrent-client.jayq.async :only [ajax]]
      [torrent-client.client.peer-id :only [peer-id]]
      [torrent-client.client.core.string :only [a2b-hex]]
      [torrent-client.client.jsep :only [generate-offer-sdp]]
      [torrent-client.client.connection.websockets :only [generate-connection]])
  (:use-macros [async.macros :only [let-async]]))

(defn announce [announce-url torrent]
  "Given an announce url and the torrent it corrosponds to generate peers"
  (let-async [offer-sdp (generate-offer-sdp)
              :let data {
                :jsep offer-sdp
                :info_hash (a2b-hex (@torrent :pretty-info-hash))
                :event "started"
                :peer_id @peer-id
                :numwant 10}
              response (ajax announce-url {:data data :dataType "json"})
              :let connections (map generate-connection (response :peers))
        ]
    (doseq [connection connections]
      (dispatch/fire :add-connection [torrent connection]))
      ))

(dispatch/react-to #{:update-torrent-announce} (fn [_ torrent]
  "When a torrent gets a new announce url query it for peers"
  (doseq [announce-url (@torrent :announce-list)]
    (announce announce-url torrent)
  )))