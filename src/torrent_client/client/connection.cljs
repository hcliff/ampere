(ns torrent-client.client.connection
  (:require [torrent-client.client.core.dispatch :as dispatch]
            [torrent-client.client.polyfills.prefix :as prefix]
            [goog.events :as events]
            [waltz.state :as state])
  (:use [jayq.core :only [$ ajax on val empty fade-out fade-in attr append]]
        [jayq.util :only [clj->js]]
        [torrent-client.client.waltz :only [machine transition]]
        [waltz.state :only [trigger]])
  (:use-macros [waltz.macros :only [in out defstate defevent]]
               [async.macros :only [async]]))

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

(defn create-data-channel [peer-connection channel-name]
  (.createDataChannel peer-connection channel-name))

(defn create-offer [peer-connection success-callback]
  (.createOffer peer-connection success-callback))

(defn create-answer [peer-connection success-callback]
  (.createAnswer peer-connection success-callback))

(defn set-local-description [peer-connection description]
  (.setLocalDescription peer-connection description))

(defn set-remote-description [peer-connection description]
  (.setRemoteDescription peer-connection description))

(defn add-ice-candidate [peer-connection event]
  (let [options {:sdpMLineIndex (.-label event) :candidate (.-candidate event)}
        candidate (.RTCIceCandidate (clj->js options))]
  (.addIceCandidate peer-connection candidate)))

(defn session-description [type sdp]
  (let [options (clj->js {:type type :sdp sdp})]
    (js/RTCSessionDescription. options)))

;;************************************************
;; A state machine used for building ICE candidates
;; H.C: can probably be refactored to not be 
;; a state machine
;;************************************************

(defn jsep-machine [mode peer]
  "where mode is :receive-offer or :send-offer
  peer is only used when receiving data and is the offer that is
  currently being received"
  (let [me (machine {:label :jsep-machine :current :init})
        options {:iceServers [{:url "stun:stun.l.google.com:19302"}]}
        peer-connection (peer-connection options)]

    (events/listen peer-connection "onicecandidate" (fn [event]
      (trigger me :add-ice-candidate event)))

    (defevent me :add-ice-candidate [event]
      ; Only when all the ice candidates have been
      ; received should the state progress
      (if-not (undefined? (.-candidate event))
        (add-ice-candidate peer-connection event)
        ; If there is no candidate it is indicating we are finished
        (state/set me :ready)))

    (defevent me :receive-offer [callback]
      "When given an offer from the server, connect to that peer"
      ; Create a description from the offer and use it as the remote description
      (let [offer-description (session-description "offer" (peer :sdp))]
        (set-remote-description peer-connection offer-description)
        ; Create an answer and set our local description
        (create-answer peer-connection (fn [answer-description]
          (set-local-description peer-connection answer-description)))
        peer-connection))

    (defevent me :send-offer []
      "Generate an offer to send to the server;
      Note that this offer will never be answered directly!"
      (create-offer peer-connection (fn [description]
        (set-local-description peer-connection description)))
      peer-connection)

    (defstate me :init)

    ; All the ice candidates have been found
    (defstate me :ready)

    (state/trigger me mode)

    ; return the peer connection
    peer-connection

))

(defn generate-offer-sdp
  "Build SDP to send to the server for other clients to connect to"
  []
  (async [success-callback]
    (let [connection (jsep-machine :send-offer nil)]
      (events/listen connection "statechange" (fn [_]
        (let [local-description (.-localDescription connection)]
          (success-callback (.-sdp local-description))))
    ))))

; generate-offer-sdp is exepensive, and announce requires
; it every 60 seconds or so
(def generate-offer-sdp-memo (memoize generate-offer-sdp))

(def connections (atom {}))

(defn generate-connection 
  "Given an offer connect to a peer and add it to our connections list"
  [peer]
  (async [success-callback]
    (if (contains? @connections (peer :peer-id))
      ; If we have allready connected to this peer then return it
      (success-callback (@connections (peer :peer-id)))
      ; Otherwise build it
      (do
        ; NOTE: using "connection" triggers a UID error
        (let [instance (jsep-machine :receive-offer peer)]
          (events/listen instance "statechange" (fn [_]
            ; Add this connection to our list and return it
            (swap! connections assoc (peer :peer-id) instance)
            (success-callback instance)))))
      )))