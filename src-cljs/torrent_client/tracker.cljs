(ns torrent-client.tracker
  (:require 
    [torrent-client.core.dispatch :as dispatch]
    [goog.Timer :as Timer]
    [goog.events :as events])
  (:use
    [torrent-client.torrents :only [torrents]]
    [torrent-client.peer-id :only [peer-id]]
    [torrent-client.connection :only 
      [create-connection-send-offer 
       recieve-answer
       receive-offer-send-answer
       create-data-channel]])
  (:use-macros [async.macros :only [let-async async]]))

; How often should we tell the tracker our download progress
; NOTE: not currently used
(def announce-period (* 15 60 1000))

;;************************************************
;; Use socket.io to communicate peer offers
;; and answers with a tracker
;; 1 connection per tracker, support for
;; multiple torrents from one tracker
;;************************************************

(def trackers (atom {}))

(defn on [socket event callback]
  (.on socket (name event) #(callback (js->clj % :keywordize-keys true))))

(defn tracker-socket [tracker]
  (async [success-callback error-callback]
    (if-let [tracker (@trackers tracker)]
      ; If we allready have a socket to this tracker return it
      (success-callback (@trackers tracker))
      ; Otherwise build one
      (let [socket (.connect js/io tracker)]
        (set! (.-onerror tracker) error-callback)
        ; Continue once the socket is opened
        (on socket :connect #(success-callback socket))
        ; Listen for socket events
        (on socket :need_offer #(dispatch/fire :need-offer [socket %]))
        (on socket :offer #(dispatch/fire :offer [socket %]))
        (on socket :answer #(dispatch/fire :answer [socket %]))))))

;;************************************************
;; Reactions to changes in torrent state
;;************************************************

(defn emit [socket event data]
  (.emit socket (clj->js event) (clj->js data)))

; TODO: logical falicy, find a better way to manage
; the number of connections, we shouldn't request offers from
; every tracker
(dispatch/react-to #{:started-torrent} (fn [_ torrent]
  "Update the list of trackers for this torrent
   and send out the start event to the trackers"
  (doseq [tracker-url (@torrent :announce-list)]
    (.info js/console "trying tracker" tracker-url)
    (let-async [socket (tracker-socket tracker-url)]
      (.info js/console "connected to tracker" tracker-url)
      (swap! trackers assoc tracker socket)
      (emit socket :started {
        :peer_id @peer-id
        :info_hash (@torrent :pretty-info-hash)
        :numwant 10
        })))))

(dispatch/react-to #{:completed-torrent} (fn [_ torrent]
  "When a torrent is finished send the complete event to the trackers"
  (doseq [socket (@trackers (@torrent :pretty-info-hash))]
    (emit socket :completed {
      :peer_id @peer-id
      :info_hash (@torrent :pretty-info-hash)
      }))))

(dispatch/react-to #{:stopped-torrent} (fn [_ torrent]
  "When a torrent is stopped send the stopped event to the trackers"
  (doseq [socket @trackers]
    (emit socket :stopped {
      :peer_id @peer-id
      :info_hash (@torrent :pretty-info-hash)
      }))))

;;************************************************
;; Reactions to events sent by the tracker
;;************************************************

(dispatch/react-to #{:need-offer} (fn [_ [tracker-socket {:keys [peer_id info_hash]}]]
  "The tracker has requested an offer from this client"
  (.log js/console tracker-socket peer_id info_hash)
  (let-async [peer-connection (create-connection-send-offer)
              :let sdp (-> peer-connection .-localDescription .-sdp)]
    ; Check the peer requested a torrent we have
    (if-let [torrent (@torrents info_hash)]
      ; TODO: also check numwant
      (emit tracker-socket :offer {
        :sdp sdp 
        :info_hash info_hash 
        :to_peer_id peer_id 
        :peer_id @peer-id
        })))))

(dispatch/react-to #{:offer} (fn [_ [tracker-socket {:keys [peer_id info_hash sdp]}]]
  "When the tracker sends an offer for a torrent connection
  build and return an answer"
  (let-async [peer-connection (receive-offer-send-answer sdp peer_id)
              :let sdp (-> peer-connection .-localDescription .-sdp)]
    (.log js/console peer_id info_hash)
    (if-let [torrent (@torrents info_hash)]
      ; The client that sent the offer will create the datachannel after it
      ; gets this clients offer
      (emit tracker-socket :answer {
        :sdp sdp 
        :info_hash info_hash 
        :to_peer_id peer_id 
        :peer_id @peer-id
        })))))

(dispatch/react-to #{:answer} (fn [_ [tracker-socket {:keys [peer_id info_hash sdp]}]]
  "When the tracker sends an answer for an offer we send"
  (let [; Retrieve the peer connection
        peer-connection (recieve-answer sdp peer_id)
        ; Build a channel on this connection for the torrent
        channel (create-data-channel peer-connection info_hash)]
    ; When the channel we opened is successful announce it
    (set! (.-onopen channel) (fn [event]
      (.log js/console "datachannel onopen from peer" peer_id)
      (dispatch/fire :add-channel [peer_id channel :handshake]))))))

;;************************************************
;; Statistics
;;************************************************

; Use a global timer for announce period. this is just for effiency
; Every n seconds send an announce
; TODO - use actual interval given by the tracker
; (let [timer (goog/Timer. announce-period)]
;   (.start timer)
;   (events/listen timer Timer/TICK (fn [_]
;     ; Loop through all the torrents here
;     ; NOTE: at time of writing :when is broken
;     (doseq [torrent (filter #(= :processed (% :status)) @torrents)]
;       ; Update each of the trackers this torrent has
;       (doseq [tracker-socket (@torrent :announce-list)]
;         (.emit tracker-socket :stats {
;           :uploaded 0
;           :downloaded 0
;           :left (@torrent :total-length)
;           :info_hash (@torrent :pretty-info-hash)
;           :peer_id @peer-id
;           }))
;     ))))

(.log js/console "not last in tracker")