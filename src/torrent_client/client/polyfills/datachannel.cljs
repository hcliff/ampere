(ns torrent-client.client.polyfills.datachannel
  (:require 
    [torrent-client.client.polyfills.prefix :as prefix]
    [torrent-client.client.core.dispatch :as dispatch]
    [torrent-client.client.core.crypt :as crypt])
  (:use 
    [jayq.core :only [ajax]]))

; H.C this is ropey as hell, I stopped working on it
; with the advent of moz data channels

(.log js/console "start shim")

; (js/DCPF_install "wss://datachannel-polyfill.nodejitsu.com")
(js/DCPF_install "wss://datachannel-polyfill.nodejitsu.com")

(defprotocol RTCPeerConnection
  (local-id [this] "Returns a unique id for this connections local desc")
  (remote-id [this] "Returns a unique id for this connections local desc")
  (set-local-description [this description])
  (set-remote-description [this description])
  )

(extend-type prefix/RTCPeerConnection
  RTCPeerConnection
  (local-id [this]
    (re-matches #"/^o=.+/gm" (.-localDescription this))
    )

  (remote-id [this]
    (re-matches #"/^o=.+/gm" (.-remoteDescription this))
    )

  (set-local-description [this description]
    (.setLocalDescription this description))

  (set-remote-description [this description]
    (.setRemoteDescription this description))

  )

; (def pusher (atom nil))

; (dispatch/react-to #{:document-ready} (fn []

;   (set! (.-log js/Pusher) (fn [message]
;     (.log js/console message)))

;   ; When the pusher api is loaded pass in our credentials to pusherapp
;   (reset! pusher (js/Pusher. "2721af40efe881bcacf4"))))

; ; For consistency we provide an interface on
; ; real data channels 
; (defprotocol Create
;   (create-data-channel [label] "A wrapper to create data channels"))

; ; (extend-type prefix/PeerConnection
; ;   Create
; ;   (create-data-channel [label]
; ;     (.createDataChannel this label)))

; (defprotocol Channel
;   (close [channel] "Close the channel")
;   (send [channel data] "Send data on the channel")
;   )

; (def DataChannel (or (.-DataChannel js/window) (.-Object js/window)))

; ; Again; provide a consistent interface on
; ; real datachannels
; ; (extend-type DataChannel

; ;   Channel
; ;   (close [this]
; ;     (.close this))
; ;   (send [this data]
; ;     (.send this data)))

; ; Wrap the datachannel with a websocket
; (deftype WebsocketDataChannel [label]

;   Channel
;   (close [this]
;     true)

;   ; H.C - sort this out
;   (send [this data]
    

;     ))

; (defn websocket-data-channel [label]
;   (let [channel (WebsocketDataChannel. label)]
;     (.bind websocket "data" (fn [data]
;       (if (= (.-from data) label)
;         #(-.onmessage channel data))))))

; (let [pc (prefix/PeerConnection. nil)]
;   (try
;     (create-data-channel pc "polyfill")
;     ; If the data channel creation failed our browser
;     ; doesn't yet support it
;     (catch js/Object e
;       (.info js/console "No support for datachannels, falling back to websockets")
;       ; (extend-type prefix/PeerConnection
;       ;   Create
;       ;   ; overload the create-channel method
;       ;   (create-data-channel [label]
;       ;     ; return a fake websocket connection
;       ;     (let [channel (websocket-data-channel label)]
;       ;       channel))
;       ;   )
;       )
;     )
;   )

(.log js/console "suvived the fucking shim")