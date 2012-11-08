(ns torrent-client.client.jsep
  (:require [torrent-client.client.core.dispatch :as dispatch]
            [torrent-client.client.polyfills.prefix :as prefix]
            [waltz.state :as state])
  (:use [jayq.core :only [$ ajax on val empty fade-out fade-in attr append]]
  			[jayq.util :only [clj->js]]
  			[clojure.walk :only [keywordize-keys]]
        [torrent-client.client.waltz :only [machine transition]]
  			[waltz.state :only [trigger]])
  (:use-macros [waltz.macros :only [in out defstate defevent]]
               [async.macros :only [async]]))


;;************************************************
;; Wrapper around javascript functions for JSEP
;;************************************************

(defn peer-connection [options]
  (prefix/PeerConnection. (clj->js options)))

(defn create-data-channel [peer-connection channel-name]
  (.createDataChannel peer-connection channel-name))

(defn create-offer [peer-connection success-callback]
  (.createOffer peer-connection success-callback))

(defn create-answer [peer-connection offer-sdp-string hints]
  (.createAnswer peer-connection offer-sdp-string (clj->js hints)))

(defn set-local-description [peer-connection description]
  (.setLocalDescription peer-connection description))

(defn set-remote-description [peer-connection description]
  (.setRemoteDescription peer-connection description))

(defn add-ice-candidate [peer-connection event]
  (let [options {:sdpMLineIndex (.-label event) :candidate (.-candidate event)}
        candidate (.RTCIceCandidate (clj->js options))]
  (.addIceCandidate peer-connection candidate)))

(defn to-sdp [object]
  (.toSdp object))

(defn session-description [sdp-string]
  (js/SessionDescription. sdp-string))

(defn jsep-machine [mode peer]
  "where mode is :receive-offer or :send-offer
  peer is only used when receiving data and is the offer that is
  currently being received"
  (let [me (machine {:label :jsep-machine :current :init})
        options {:iceServers [{:url "stun:stun.l.google.com:19302"}]}
        peer-connection (peer-connection options)]

    (set! (.-onicecandidate peer-connection) (fn [event]
      (trigger me :add-ice-candidate event)))

    (defevent me :add-ice-candidate [event]
      ; Only when all the ice candidates have been
      ; received should the state progress
      (if-not (undefined? (.-candidate event))
        (add-ice-candidate peer-connection event)
        ; If there is no candidate it is indicating we are finished
        (state/set me :ready)))

    (defevent me :receive-offer []
      "When given an offer from the server, connect to that peer"
      (let [offer-description (session-description (peer :sdp))]
        (create-answer peer-connection (fn [answer-description]
          (set-remote-description peer-connection offer-description)
          (set-local-description peer-connection answer-description)
          ))))

    (defevent me :send-offer []
      "Generate an offer to send to the server;
      Note that this offer will never be answered directly!"
      (create-offer peer-connection (fn [description]
        (set-local-description peer-connection description)
        (state/set me :ready)
        )))

    (defstate me :init)

    ; Once everything is completed return the finished peer connection
    (defstate me :ready
      (in []
        (dispatch/fire :ready peer-connection)))

    (state/trigger me mode)

))

(defn generate-offer-sdp []
  (async [success-callback]
    (jsep-machine :send-offer nil)
    (dispatch/react-to #{:ready} (fn [_ peer-connection]
      (let [local-description (.-localDescription peer-connection)]
        (success-callback (to-sdp local-description))))
    )))