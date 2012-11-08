(ns torrent-client.client.polyfills.datachannel
  (:require 
    [torrent-client.client.polyfills.prefix :as prefix]
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

; For consistency we proivde an interface on
; real data channels 
; (extend-type PeerConnection
;   (create-data-channel [label]
;     (.createDataChannel this label)))

; ; Again; provide a consisten interface on
; ; real datachannels
; (extend-type DataChannel

;   Channel
;   (close [this]
;     (.close this))
;   (send [this data]
;     (.send this data))
;   )

; ; Wrap the datachannel with a websocket
; (deftype WebsocketDataChannel [label socket]

;   Channel
;   (close [this]
;     (.close socket))

;   (send [this data]
;     (ajax (str "http://localhost:8090/api/1/client/" peer-id) {
;       :data {:data data}
;       :type "POST"
;       })))

; (let [pc (prefix/PeerConnection. nil)]
;   (try
;     (create-data-channel pc "polyfill")
;     ; If the data channel creation failed our browser
;     ; doesn't yet support it
;     (catch js/Object e
;       (extend-type PeerConnection
;         ; overload the create-channel method
;         (create-data-channel [label]
;           ; return a fake websocket connection
;           (let [channel (websocket-data-channel label)]
;             channel))))))

; (defn websocket-data-channel [label]
;   (let [websocket (.subscribe @pusher peer-id)
;         channel (WebsocketDataChannel. label websocket)]
;     (.bind websocket "data" #(-.onmessage channel %))))

(.log js/console "not last")