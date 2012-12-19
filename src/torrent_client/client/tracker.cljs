(ns torrent-client.client.tracker
  (:require 
    [torrent-client.client.core.dispatch :as dispatch]
    [goog.Timer :as Timer]
    [goog.events :as events]
    [clojure.string :as string])
  (:use
    [jayq.core :only [ajax]]
    [torrent-client.jayq.core :only [param]]
    [torrent-client.client.torrents :only [torrents]]
    [torrent-client.client.peer-id :only [peer-id]]
    [torrent-client.client.core.string :only [a2b-hex]]
    [torrent-client.client.connection :only 
      [create-connection-send-offer 
       recieve-answer
       receive-offer-send-answer
       create-data-channel]])
  (:use-macros [async.macros :only [let-async async]]))

;;************************************************
;; Tempory pusher polyfill until native websockets
;; TODO: tracker will be *purely* websockets
;; And tidyed up....
;;************************************************

(def pusher (atom nil))

(dispatch/react-to #{:document-ready} (fn []

  (set! (.-log js/Pusher) (fn [message]
    (.log js/console message)))

  ; When the pusher api is loaded pass in our credentials to pusherapp
  (reset! pusher (js/Pusher. "2721af40efe881bcacf4"))))

; How often should we tell the tracker we are still alive?
(def announce-period (* 15 60 1000))

; H.C, replace with websockets
(defn announce [announce-url event torrent & [extra-data success-callback an]]
  "Given an announce url and the torrent it corrosponds to update the tracker"
  (let [info-hash (@torrent :pretty-info-hash)
        ; TODO - obviously wrong
        announce-url (or an "http://localhost:8090/announce")
        ; Manually build a string to avoid urlencoding
        ; data {
        ;   "event"   (if-not (nil? event) (name event) "")
        ;   "peer_id" @peer-id
        ;     }
        ; data (param (merge data (or extra-data {})))
        ; data (str "?" data "&info_hash=" (a2b-hex info-hash))
        data {:event (if-not (nil? event) (name event) "")
              :peer_id @peer-id}
        data (param (merge data (or extra-data {})))
        data (str data "&info_hash=" (a2b-hex info-hash))
        ]
    (.log js/console "ajax data" data)
    (ajax (str announce-url) {:data data :dataType "json" :success success-callback})))

;;************************************************
;; H.C new tracker system, pure websockets
;;************************************************

(def trackers (atom {}))

(defn tracker-socket [tracker]
  (async [success-callback error-callback]
    (if-let [tracker (@trackers tracker)]
      ; If we allready have a socket to this tracker return it
      (success-callback (@trackers tracker))
      ; Otherwise build one
      (let [socket (js/WebSocket. tracker)]
        (swap! trackers assoc tracker socket)
        (set! (.-onerror tracker) error-callback)
        ; Continue once the socket is opened
        (set! (.-onopen tracker) (fn [data]
          (success-callback socket)))
        ; Listen for socket events
        (set! (.-onmessage tracker) (fn [data]
          (let [data (assoc data :tracker tracker)
                data (dissoc data :event)]
          ; Check the peer isn't sending malicious events
          (if (contains? #{"need-offer" "offer" "answer"} event)
            (dispatch/fire (data :event) data)))))
      ))))

;;************************************************
;; Reactions to changes in torrent state
;;************************************************

; TODO: logical falicy, find a better way to manage
; the number of connections, if we want a max of 10
; is sending 10 offers to *every* announce a good idea?
(dispatch/react-to #{:started-torrent} (fn [_ torrent]
  "Update the list of trackers for this torrent
   and send out the start event to the trackers"
  (doseq [announce-url (@torrent :announce-list)]
    ; (let-async [tracker (tracker-socket announce-url)]
    ;   (.send tracker {:peer-id @peer-id 
    ;                   :info-hash info-hash
    ;                   :event :started
    ;                   :numwant 10
    ; })
          ; H.C - rework to parallel map
          ; :let [offers (map #(.-localDescription %) (repeat 10 (generate-offer)))]]
    (let-async [offer (create-connection-send-offer)
                :let channel (.subscribe @pusher (@torrent :pretty-info-hash))]
      ; Normalize our events
      (.bind channel (str "answer" @peer-id) (fn [data] 
        (dispatch/fire :answer (js->clj data :keywordize-keys true))))
      (.bind channel (str "offer" @peer-id)  (fn [data] 
        (dispatch/fire :offer  (js->clj data :keywordize-keys true))))
      ; Send all our offers to the server
      (announce announce-url :started torrent {:offers [offer]} (fn [peers]
        (doseq [peer ((js->clj peers :keywordize-keys true) :peers)]
          (dispatch/fire :offer {
            :peer_id (peer :peer-id)
            :info_hash (@torrent :pretty-info-hash)
            :offer (peer :offer)}))))
      ))))

(dispatch/react-to #{:completed-torrent} (fn [_ torrent]
  "When a torrent is finished send the complete event to the trackers"
  (doseq [announce-url (@torrent :announce-list)]
    (announce announce-url :completed torrent))))

(dispatch/react-to #{:stopped-torrent} (fn [_ torrent]
  "When a torrent is stopped send the stopped event to the trackers"
  (doseq [announce-url (@torrent :announce-list)]
    (announce announce-url :stopped torrent))))

;;************************************************
;; Reactions to events sent by the tracker
;;************************************************

(dispatch/react-to #{:need-offer} (fn [_ {:keys [tracker peer_id info_hash]}]
  "The tracker has requested an offer from this client"
  (let-async [peer-connection (create-connection-send-offer peer_id)
              :let sdp (-> peer-connection .-localDescription .-sdp)]
    ; Check the peer requested a torrent we have
    (if-let [torrent (@torrents info_hash)]
      ; TODO: also check numwant
      (announce tracker "offer"
        {:sdp sdp :info-hash info_hash :to-peer-id peer-id})
  ))))

(dispatch/react-to #{:answer} (fn [_ {:keys [peer_id info_hash answer]}]
  "When the tracker sends an answer for an offer we send"
  (let [; Retrieve the peer connection
        peer-connection (recieve-answer answer peer_id)
        torrent (@torrents info_hash)
        ; Build a channel on this connection for the torrent
        channel (create-data-channel peer-connection info_hash)]
    ; When the channel we opened is successful announce it
    (set! (.-onopen channel) (fn [event]
      (.log js/console "from onopen" peer_id)
      (dispatch/fire :add-channel [peer_id channel :handshake])))
  )))

(dispatch/react-to #{:offer} (fn [_ {:keys [peer_id info_hash offer]}]
  "When the tracker sends an offer for a torrent connection
  build and return an answer"
  (.log js/console peer_id info_hash offer)
  (let-async [peer-connection (receive-offer-send-answer offer peer_id)
              :let answer (-> peer-connection .-localDescription .-sdp)
              :let torrent (@torrents info_hash)
              :let event (str "answer" peer_id)]
    (.log js/console "react to offer"event)
    ; The client that sent the offer will create the datachannel after it
    ; gets this clients offer
    (announce announce-url event torrent {:answer answer} #() "http://localhost:8090/answer"))))

;;************************************************
;; Keepalive and statistics
;;************************************************

; Use a global timer for announce period. this is just for effiency
; Every n seconds send an announce
; H.C TODO - resolve torrent statistic data
; TODO - use actual interval given by the tracker
; (let [timer (goog/Timer. announce-period)]
;   (.start timer)
;   (events/listen timer Timer/TICK (fn [_]
;     ; Loop through all the torrents here
;     ; NOTE: at time of writing :when is broken
;     (doseq [torrent (filter #(= :processed (% :status)) @torrents)]
;       ; Update each of the trackers this torrent has
;       (doseq [announce-url (@torrent :announce-list)]
;         (announce announce-url nil torrent {
;           :uploaded 0
;           :downloaded 0
;           :left (@torrent :total-length)
;           }))
;     ))))

(.log js/console "not last")