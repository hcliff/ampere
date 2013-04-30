(ns torrent-client.connection
  (:require 
    [torrent-client.core.dispatch :as dispatch]
    [torrent-client.browser.prefix :as prefix]
    [torrent-client.core.crypt :as crypt]
    [cljconsole.main :as console]
    [clojure.string :as string])
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

(defn peer-connection 
  ([servers] 
    (peer-connection servers {}))
  ([servers optional]
    (prefix/RTCPeerConnection. (clj->js servers) (clj->js optional))))

(defn create-data-channel [peer-connection label]
  (.createDataChannel peer-connection label (clj->js {:reliable false})))

(defn create-offer [peer-connection success-callback error-callback]
  (.createOffer peer-connection success-callback error-callback))

(defn create-answer [peer-connection success-callback error-callback]
  (.createAnswer peer-connection success-callback error-callback))

(defn set-local-description! [peer-connection description]
  (.setLocalDescription peer-connection description))

(defn local-description [peer-connection]
  (.-localDescription peer-connection))

(defn set-remote-description! [peer-connection description]
  (.setRemoteDescription peer-connection description))

(defn remote-description [peer-connection]
  (.-remoteDescription peer-connection))

(defn ice-candidate? [obj]
  (instance? js/RTCIceCandidate obj))

(defn ice-candidate [event]
  "Extract an ice candidate from an onicecandidate event"
  (when-let [candidate (aget event "candidate")]
    {:candidate (aget candidate "candidate")
     :sdpMLineIndex (aget candidate "sdpMLineIndex")
     :sdpMid (aget candidate "sdpMid")}))

(defn add-ice-candidate [peer-connection candidate]
  "Add an ice candidate for the peer to the connection"
  (let [candidate (js/RTCIceCandidate. (clj->js candidate))]
    (.addIceCandidate peer-connection candidate)))

(defn session-description [type sdp]
  (let [options (clj->js {:type type :sdp sdp})]
    (js/RTCSessionDescription. options)))

(defn id [description]
  (re-matches #"/^o=.+/gm" description))

(defn local-id [peer-connection]
  (re-matches #"/^o=.+/gm" (.-localDescription peer-connection)))

(defn remote-id [peer-connection]
  (re-matches #"/^o=.+/gm" (.-remoteDescription peer-connection)))

; Avoid chromes throttling
; https://github.com/Peer5/ShareFest/issues/10
(defn increase-bandwidth [description]
  (let [match "b=AS:30"
        sdp (string/replace (aget description "sdp") match "b=AS:327680")]
    (aset description "sdp" sdp)
    description))

(def channel-throttle (atom {}))

; Deal with chromes rate throttling, queue up messages instead of
; immediately sending them
; (defn send [channel data]
;   (swap! update-in channel-throttle [(label channel)] conj data))

; (defn consume-send-queue []
;   (doseq [[channel messages] @channel-throttle]
;     (.send channel (first messages))))

; (let [timer (goog/Timer. send-queue-period)]
;   (.start timer)
;   (events/listen timer Timer/TICK consume-send-queue))

;;************************************************
;; Methods for creating and recieving offers and answers
;;************************************************

; Our defaults for creating a peer-connection
(def servers {:iceServers [{:url "stun:stun.l.google.com:19302"}]})
(def optional {:optional [{:RtpDataChannels true}]})

; An atom of connections where the key is the peer-id
(def connections (atom {}))

; An atom of unfufilled offers, the key is the offer id
(def pending-connections (atom {}))

; NOTE: chromes limitations mean that 1 torrent = 1 connection
; due to having to define datachannels prior to establishing the
; connection

; Add this connection to the list of connections for this peer
(defn create-connection [peer-id info-hash]
  (let [connection (peer-connection servers optional)]
    (swap! connections assoc-in [peer-id info-hash] connection)
    connection))

(defn send-offer! [peer-connection]
  "Given a torrent build a connection and create an offer"
  (async [success-callback error-callback]
    (if (nil? (local-description peer-connection))
      (create-offer peer-connection (fn [description]
          ; Tweak the sdp before we use it
          (let [description (increase-bandwidth description)]
            ; When the offer is built update our local description
            (set-local-description! peer-connection description)
            ; Add it to the pending peers using the local description as a key
            ; (swap! pending-connections assoc (local-id peer-connection) peer-connection)
            ; And finally mark it complete
            (success-callback peer-connection)))
        error-callback)
      (success-callback peer-connection))))

(defn receive-answer!
  "Given an answer by a peer (after we made an offer);
   mark the connection active"
  [peer-connection answer-description]
  ; Find the connection in the connections list
  (let [answer-description (session-description "answer" answer-description)]
;     ; Since it's no longer pending, remove it
;     (swap! pending-connections dissoc (remote-id answer-description))
    (when (nil? (remote-description peer-connection))
      ; Associate the answer
      (set-remote-description! peer-connection answer-description)
;       ; Add it to the real connections list
;       (swap! connections assoc peer-id peer-connection))
      )
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
      (do
        (create-answer peer-connection (fn [description]
            (let [description (increase-bandwidth description)]
              (set-local-description! peer-connection description)
              ; (swap! connections assoc peer-id peer-connection)
              (success-callback peer-connection)))
          error-callback)
        peer-connection)
      (success-callback peer-connection))))

(defn receive-ice-candidate!
  "Post peering the peer has provided an ice candidate"
  [peer-connection candidate]
  (add-ice-candidate peer-connection candidate))

;;************************************************
;; Events and binding for the connection and channel
;;************************************************

(declare set-channel-events!)

(defn on-data-channel [peer-id]
  "React to the peer opening a channel"
  (fn [event]
    ; Chrome sends event, FF sends raw channel
    (let [channel (or (aget event "channel") event)]
      ; (set-channel-events! channel peer-id)
      (console/info "Channel opened by peer:" peer-id)
      (set-channel-events! channel peer-id)
      (dispatch/fire :add-channel [peer-id channel]))))

(defn on-ice-candidate [tracker peer-id info-hash]
  (fn [event]
    (this-as connection
      (if-let [candidate (ice-candidate event)]
        (dispatch/fire :add-ice-candidate 
                       [tracker 
                        peer-id
                        info-hash
                        candidate])
        (console/info "Sent ice candidate to peer" peer-id)))))

(defn on-ice-state-change [peer-id info-hash]
  (fn [_]
    (this-as connection
      (if (= (aget connection "iceConnectionState") "disconnected")
        (dispatch/fire :remove-connection [peer-id info-hash])))))

(defn set-connection-events! [tracker connection peer-id info-hash]
  (aset connection "ondatachannel" (on-data-channel peer-id))
  (aset connection "onicecandidate" (on-ice-candidate tracker peer-id info-hash))
  (aset connection "onicechange" (on-ice-state-change peer-id info-hash))
  (aset connection "oniceconnectionstatechange" (on-ice-state-change peer-id info-hash)))

(defn on-close [peer-id]
  (fn []
    (this-as channel
      (console/info "Channel closed with peer:" peer-id)
      (dispatch/fire :remove-channel [peer-id channel]))))

(defn on-error [peer-id]
  (fn [event]
    (console/warn "Channel error with peer" peer-id)))

(defn on-open [peer-id]
  "React to the peer opening a channel"
  (fn []
    (this-as channel
      (console/info "Channel opened with peer:" peer-id)
      (dispatch/fire :add-channel [peer-id channel :handshake]))))

(defn on-message [peer-id]
  "React to the peer sending data down the channel"
  (fn [event]
    (console/log event)
    (this-as channel
      (let [data (aget event "data")
            data (crypt/str->byte-array data)]
        (dispatch/fire :receive-data [peer-id channel data])))))

(defn set-channel-events! [channel peer-id]
  (aset channel "onclose" (on-close peer-id))
  (aset channel "onerror" (on-error peer-id))
  (aset channel "onopen" (on-open peer-id))
  (aset channel "onmessage" (on-message peer-id)))