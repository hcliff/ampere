(ns torrent-client.client.connection
  (:require [torrent-client.client.core.dispatch :as dispatch]
            [torrent-client.client.polyfills.prefix :as prefix]
            [goog.events :as events]
            [waltz.state :as state])
  (:use [jayq.util :only [clj->js]]
        [torrent-client.client.waltz :only [machine transition]]
        [waltz.state :only [trigger]])
  (:use-macros [waltz.macros :only [in out defstate defevent]]
               [async.macros :only [async let-async]]))

;;************************************************
;; NOTE
;; Connections != Channels != Peers
;; A connection is a representation of a users computer
;; which can have many channels (each torrent has a channel)
;; e.g: if you are downloading 5 torrents from me
;;      I will have 5 channels open
;; Peers use channels to communicate and manage state
;;************************************************


;;************************************************
;; Wrapper around javascript functions for JSEP
;;************************************************

(defn peer-connection [options]
  (prefix/RTCPeerConnection. (clj->js options)))

(defn create-data-channel [peer-connection label]
  (.createDataChannel peer-connection label))

(defn create-offer [peer-connection success-callback error-callback]
  (.createOffer peer-connection success-callback error-callback))

(defn create-answer [peer-connection success-callback error-callback]
  (.createAnswer peer-connection success-callback))

(defn set-local-description [peer-connection description]
  (.setLocalDescription peer-connection description))

(defn set-remote-description [peer-connection description]
  (.setRemoteDescription peer-connection description))

(defn add-ice-candidate [peer-connection event]
  (let [options {:sdpMLineIndex (.-label event) :candidate (.-candidate event)}
        candidate (js/RTCIceCandidate. (clj->js options))]
  (.addIceCandidate peer-connection (.-candidate event))))

(defn session-description [type sdp]
  (let [options (clj->js {:type type :sdp sdp})]
    (js/RTCSessionDescription. options)))

(defn id [description]
  (re-matches #"/^o=.+/gm" description))

(defn local-id [peer-connection]
  (re-matches #"/^o=.+/gm" (.-localDescription peer-connection)))

(defn remote-id [peer-connection]
  (re-matches #"/^o=.+/gm" (.-remoteDescription peer-connection)))

;;************************************************
;; Methods for creating and recieving offers and answers
;;************************************************

(defn peer-connection-ice 
  "Provide some sane defaults for building a peer connection"
  []
  ; Create the peer-connection with some basic settings
  (let [options {:iceServers [{:url "stun:stun.l.google.com:19302"}]}
        peer-connection (peer-connection options)]

    ; When we receive an ice candiate add it to the candiates
    (set! (.-onicecandidate peer-connection) (fn [event]
      (if-not (undefined? (.-candidate event))
        (add-ice-candidate peer-connection event))))

    peer-connection))

; An atom of connections where the key is the peer-id
(def connections (atom {}))

; An atom of unfufilled offers, the key is the offer id
(def pending-connections (atom {}))

(defn create-connection-send-offer
  "Given a torrent build a connection and create an offer"
  []
  (async [success-callback error-callback]
    ; Set up the connection and start listening for ice
    (let [peer-connection (peer-connection-ice)]
      (create-offer peer-connection (fn [description]
        ; When the offer is built update our local description
        (set-local-description peer-connection description)
        ; Add it to the pending peers using the local description as a key
        (swap! pending-connections assoc (local-id peer-connection) peer-connection)
        ; And finally mark it complete
        (success-callback peer-connection)
        ) error-callback))))

(defn recieve-answer
  "Given an answer by a peer (after we made an offer);
   mark the connection active"
  [answer-description peer-id]
  ; Find the connection in the connections list
  (let [peer-connection (@pending-connections (id answer-description))
        answer-description (session-description "answer" answer-description)]
    ; Since it's no longer pending, remove it
    (swap! pending-connections dissoc (remote-id answer-description))

    (if-let [peer-connection (@connections peer-id)]
      (do
        (.log js/console "PEER EXISTS...?")
        peer-connection)
      (do
        (.log js/console "PEER NO EXIST")
        ; Add it to the real connections list
        (swap! connections assoc peer-id peer-connection)
        ; Associate the answer
        (set-remote-description peer-connection answer-description)
        peer-connection))))

(defn receive-offer-send-answer
  "Given an offer; connect to a peer and add it to our connections list"
  [offer-description peer-id]
  (async [success-callback error-callback]
    (if (contains? @connections peer-id)
      ; If we have allready connected to this peer then return it
      (success-callback (@connections peer-id))
      ; Otherwise connect first
      (let [peer-connection (peer-connection-ice)
            offer-description (session-description "offer" offer-description)]
        ; When we create a new peer connection listen for any channels
        ; allow multiple channels to one peer by sniffing the channel label
        (set! (.-ondatachannel peer-connection) (fn [event]
          (let [channel (.-channel event)]
            (.log js/console "from ondatachannel" peer-id)
            (dispatch/fire :add-channel [peer-id channel]))))

        (set-remote-description peer-connection offer-description)
        ; Create an answer and set our local description
        (create-answer peer-connection 
          (fn [answer-description]
            (set-local-description peer-connection answer-description)
            (swap! connections assoc peer-id peer-connection)
            (.log js/console "about to success")
            (success-callback peer-connection)) 
          error-callback)))))

