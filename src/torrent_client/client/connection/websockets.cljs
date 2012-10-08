(ns torrent-client.client.connection.websockets
	(:require 
		[torrent-client.client.dispatch :as dispatch]
		[torrent-client.client.connection.main :as connection-protocol])
	; (:use [torrent-client.client.connection.main :only [Connection connect-to-peer]])
	(:use [jayq.core :only [ajax]])
	)

(def pusher (atom nil))

(dispatch/react-to #{:document-ready} (fn []
	; When the pusher api is loaded pass in our credentials to pusherapp
	(reset! pusher (js/Pusher. "2721af40efe881bcacf4"))))

(deftype Websockets [peer-id sdp]
	connection-protocol/Connection

	(send-data [connection data]
		(ajax (str "http://localhost:8090/api/1/client/" peer-id) {
			:data {:data data}
			:type "POST"
			}))

	(recieve-data [connection data]
		(js* "debugger;")
		(let [data (uint8-array (.parse js/JSON data))]
			(dispatch/fire [(keyword peer-id) :recieve-data] data)))

	(connect-to-peer [connection]
		(let [channel (.subscribe @pusher peer-id)]
			(.log js/console "connecting to peer")
			(.bind channel "data" #(connection-protocol/recieve-data connection %))))
	)

(defn generate-connection [{:keys [peer-id sdp]}]
	"Create the websocket channel to the given peer,
	then start listening for data"
	(let [connection (Websockets. peer-id sdp)]
		(connection-protocol/connect-to-peer connection)
		connection))