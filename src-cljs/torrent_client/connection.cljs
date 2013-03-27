(ns torrent-client.connection
  (:require [torrent-client.core.dispatch :as dispatch]
            [torrent-client.polyfills.prefix :as prefix])
  (:use-macros [async.macros :only [async let-async]]))

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

(defn set-local-description! [peer-connection description]
  (.setLocalDescription peer-connection description))

(defn local-description [peer-connection]
  (.-localDescription peer-connection))

(defn set-remote-description! [peer-connection description]
  (.setRemoteDescription peer-connection description))

(defn remote-description [peer-connection]
  (.-remoteDescription peer-connection))

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

(defn peer-connection-ice []
  "Provide some sane defaults for building a peer connection"
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

(defn- get-or-create-connection [peer-id & [potential-connection]]
  "Return or create a peer connection"
  (if-let [peer-connection (@connections peer-id)]
    (do
      (.info js/console "Peer connection allready exists with peer:" peer-id)
      peer-connection)
    (do
      (.info js/console "Peer connection being made with peer:" peer-id)
      (or potential-connection (peer-connection-ice)))))

(defn send-offer! [peer-connection]
  "Given a torrent build a connection and create an offer"
  (async [success-callback error-callback]
    (if (nil? (local-description peer-connection))
      (create-offer peer-connection (fn [description]
          ; When the offer is built update our local description
          (set-local-description! peer-connection description)
          ; Add it to the pending peers using the local description as a key
          (swap! pending-connections assoc (local-id peer-connection) peer-connection)
          ; And finally mark it complete
          (success-callback peer-connection))
        error-callback)
      (success-callback peer-connection))))

(defn recieve-answer
  "Given an answer by a peer (after we made an offer);
   mark the connection active"
  [answer-description peer-id]
  ; Find the connection in the connections list
  (let [pending (@pending-connections (id answer-description))
        peer-connection (get-or-create-connection peer-id pending)
        answer-description (session-description "answer" answer-description)]
    ; Since it's no longer pending, remove it
    (swap! pending-connections dissoc (remote-id answer-description))
    (when (nil? (remote-description peer-connection))
      ; Associate the answer
      (set-remote-description! peer-connection answer-description)
      ; Add it to the real connections list
      (swap! connections assoc peer-id peer-connection))
    peer-connection))

(defn receive-offer!
  "Given an offer, update the the peers sdp offers"
  [peer-connection offer-description]
  (let [offer-description (session-description "offer" offer-description)]
    (if (nil? (remote-description peer-connection))
      (set-remote-description! peer-connection offer-description))
    peer-connection))

(defn send-answer!
  "Generate an answer to send to a peer, mark this connection active"
  [peer-connection peer-id]
  (async [success-callback error-callback]
    (if (nil? (local-description peer-connection))
      ; Create an answer and set our local description
      (create-answer peer-connection (fn [description]
          (set-local-description! peer-connection description)
          (swap! connections assoc peer-id peer-connection)
          (success-callback peer-connection)) 
        error-callback)
      (success-callback peer-connection))))

(defn on-close [peer-id]
  (fn []
    (this-as channel
      (.info js/console "Channel closed with peer:" peer-id)
      (dispatch/fire :remove-channel [peer-id channel]))))

(defn on-open [peer-id]
  "React to the client opening a channel"
  (fn []
    (this-as channel
      (.info js/console "Channel opened with peer:" peer-id)
      (set! (.-onclose channel) (on-close peer-id))
      (dispatch/fire :add-channel [peer-id channel :handshake]))))

(defn on-data-channel [peer-id]
  "React to the peer opening a channel"
  (fn [event]
    (let [channel (.-channel event)]
      (.info js/console "Channel opened by peer:" peer-id)
      (set! (.-onclose channel) (on-close channel))
      (dispatch/fire :add-channel [peer-id channel]))))