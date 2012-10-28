(ns torrent-client.client.connection.websockets
  (:require 
    [torrent-client.client.core.dispatch :as dispatch]
    [torrent-client.client.connection.main :as connection]
    [torrent-client.client.core.crypt :as crypt])
  (:use 
    [jayq.core :only [ajax]]))

(def pusher (atom nil))

(dispatch/react-to #{:document-ready} (fn []

  (set! (.-log js/Pusher) (fn [message]
    (.log js/console message)))

  ; When the pusher api is loaded pass in our credentials to pusherapp
  (reset! pusher (js/Pusher. "2721af40efe881bcacf4"))))

(deftype Websockets [peer-id sdp]
  connection/Connection

  (send-data [connection data]
    (ajax (str "http://localhost:8090/api/1/client/" peer-id) {
      :data {:data data}
      :type "POST"
      }))

  (recieve-data [connection data]
    (let [data (crypt/str-to-uint8-array (.-data data))]
      (dispatch/fire [:recieve-data (connection/peer-id connection)] data)))

  (connect-to-peer [connection]
    (let [channel (.subscribe @pusher peer-id)]
      (.log js/console "connecting to peer")
      (.bind channel "data" #(connection/recieve-data connection %))))

  (peer-id [connection]
    (str peer-id))
  )

(defn generate-connection [{:keys [peer-id sdp]}]
  "Create the websocket channel to the given peer,
  then start listening for data"
  (let [connection (Websockets. peer-id sdp)]
    (connection/connect-to-peer connection)
    connection))