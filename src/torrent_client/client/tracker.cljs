(ns torrent-client.client.tracker
  (:require [torrent-client.client.core.dispatch :as dispatch])
  (:use [torrent-client.jayq.async :only [ajax]]
  		[torrent-client.client.core.string :only [a2b-hex]]
  		[torrent-client.client.jsep :only [generate-offer-sdp]]
  		[torrent-client.client.connection.websockets :only [generate-connection]]
  		[torrent-client.client.core.bittorrent :only [generate-peer]])
  (:use-macros [async.macros :only [let-async]]))

(defn announce [info-hash]
	(.log js/console "info-hash" info-hash)
	(let-async [offer-sdp (generate-offer-sdp)
				:let data {
					:jsep offer-sdp
					:info_hash (a2b-hex info-hash)
					:event "started"
					:peer_id @peer-id
					:numwant 10}
				response (ajax "http://localhost:8090/announce" {:data data :dataType "json"})
				:let connections (map generate-connection (response :peers))
				]
		; (doall peers)
		; For each potential peer kick off the connection and handshake
		; this happens async 
		(generate-peer data (first connections))

		))