(ns torrent-client.client.jsep
  (:require [torrent-client.client.core.dispatch :as dispatch]
            [waltz.state :as state])
  (:use [jayq.core :only [$ ajax on val empty fade-out fade-in attr append]]
  			[jayq.util :only [clj->js]]
  			[clojure.walk :only [keywordize-keys]]
        [torrent-client.client.waltz :only [machine transition]]
  			[waltz.state :only [trigger]])
  (:use-macros [waltz.macros :only [in out defstate defevent]]
               [async.macros :only [async]]))

;;************************************************
;; Helper functions for testing code without data channels
;;************************************************

(defn get-user-media
  ([] (get-user-media
    #(dispatch/fire [:get-user-media-success])
    #(dispatch/fire [:get-user-media-error])))
  ([success] (get-user-media success
    #(dispatch/fire [:get-user-media-error])))
  ([success error] (let [options {:audio true :video false}]
    (.webkitGetUserMedia js/navigator (clj->js options) success error)
  )))

(defn createObjectURL [stream]
  (createObjectURL js/webkitURL (clj->js stream))
  )

;;************************************************
;; Wrapper around javascript functions for JSEP
;;************************************************

(def stun-server "STUN stun.l.google.com:19302")

(defn peer-connection
  ([] (peer-connection #(dispatch/fire [:ice-callback])))
  ([success] (js/webkitPeerConnection00. stun-server success)))

(defn add-stream [peer-connection stream]
  (.addStream peer-connection stream)
  )

(defn create-offer [peer-connection hints]
  (.createOffer peer-connection (clj->js hints))
  )

(defn create-answer [peer-connection offer-sdp-string hints]
  (.createAnswer peer-connection offer-sdp-string (clj->js hints))
  )

(defn set-local-description [peer-connection session-description offer]
  (.setLocalDescription peer-connection (aget peer-connection (name session-description)) offer)
  )

(defn set-remote-description [peer-connection session-description offer]
  (.setRemoteDescription peer-connection (aget peer-connection (name session-description)) offer)
  )

(defn process-ice-message [peer-connection candidate]
  (.processIceMessage peer-connection candidate)
  )

(defn to-sdp [object]
  (.toSdp object)
  )

(defn start-ice [peer-connection]
  (.startIce peer-connection)
  )

(defn session-description [sdp-string]
  (js/SessionDescription. sdp-string)
  )

(defn jsep-machine [mode peer]
  "where mode is :receive-offer or :send-offer
  peer is only used when receiving data and is the offer that is
  currently being received"
  (let [me (machine {:label :jsep-machine :current :init})
        user-media (get-user-media #(trigger me :add-stream %))
        peer-connection (peer-connection #(trigger me :add-ice-candidate % %2))]

    (defevent me :add-stream [stream]
      (add-stream peer-connection stream)
      (transition me :init :has-user-media))

    (defevent me :add-ice-candidate [candidate more]
      ; Only when all the ice candidates have been
      ; received should the state progress
      (if-not more
        (transition me :has-user-media :ready)))

    (defevent me :receive-offer []
      "When given an offer from the server, connect to that peer"
      (let [offer (session-description (peer :sdp))
            answer (create-answer peer-connection (peer :sdp) nil)]
        (set-remote-description peer-connection :SDP_OFFER offer)
        (set-local-description peer-connection :SDP_ANSWER answer)
        (start-ice peer-connection)
      ))

    (defevent me :send-offer []
      "Generate an offer to send to the server;
      Note that this offer will never be answered directly!"
      (let [offer (create-offer peer-connection nil)]
          (set-local-description peer-connection :SDP_OFFER offer)
          (start-ice peer-connection)
        ))

    (defstate me :init)

    ; once we have obtained user media
    ; prepare to send or receive an offer
    (defstate me :has-user-media
      (in [] (trigger me mode) ))

    ; Once everything is completed return the finished peer connection
    (defstate me :ready
      (in [] (do
        (dispatch/fire :ready peer-connection)
      )))

))



(defn generate-offer-sdp []
  (async [success-callback]
    (jsep-machine :send-offer nil)
    (dispatch/react-to #{:ready} (fn [_ peer-connection]
      (let [local-description (.-localDescription peer-connection)]
        (success-callback (to-sdp local-description))))
    )))