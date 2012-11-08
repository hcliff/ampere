(ns torrent-client.client.tracker
  (:require 
    [torrent-client.client.core.dispatch :as dispatch]
    [goog.Timer :as Timer]
    [goog.events :as events])
  (:use [torrent-client.jayq.async :only [ajax]]
      [torrent-client.client.peer-id :only [peer-id]]
      [torrent-client.client.core.string :only [a2b-hex]]
      [torrent-client.client.jsep :only [generate-offer-sdp]]
      [torrent-client.client.connection.websockets :only [generate-connection]])
  (:use-macros [async.macros :only [let-async async]]))

(.log js/console "tracker")

(defn announce [announce-url torrent event]
  "Given an announce url and the torrent it corrosponds to generate peers"
  (async [success-callback]
    (let-async [offer-sdp (generate-offer-sdp)
                :let data {
                  :jsep offer-sdp
                  :info_hash (a2b-hex (@torrent :pretty-info-hash))
                  :event "started"
                  :peer_id @peer-id
                  :numwant 10}
                response (ajax announce-url {:data data :dataType "json"})
                :let connections (map generate-connection (response :peers))]
      (success-callback response))))

(dispatch/react-to #{:started-torrent} (fn [_ torrent]
  "Update the list of trackers for this torrent
   and send out the start event to the trackers"
  (doseq [announce-url (@torrent :announce-list)]
    (let-async [response (announce announce-url torrent :start)]
      ; Loop through the returned peers and create datachannels with them
      (doseq [peer (response :peers)
              :let [channel (generate-connection peer)]]
        (dispatch/fire :add-channel [torrent channel]))
  ))))

; (dispatch/react-to #{:completed-torrent} (fn [_ torrent]
;   "When a torrent is finished send the complete event to the trackers"
;   (let [trackers (@torrent :announce-urls)]
;     (doseq [tracker trackers]
;       (announce tracker torrent :completed)))))

; (dispatch/react-to #{:stopped-torrent} (fn [_ torrent]
;   "When a torrent is finished send the complete event to the trackers"
;   (let [trackers (@torrent :announce-urls)]
;     (doseq [tracker trackers]
;       (announce tracker torrent :stopped)))))

; ; 60 seconds
; (def announce-period (* 60 1000))

; ; Use a global timer for announce period
; ; this is just for effiency
; ; every n seconds send an announce
; (let [timer (goog/Timer. announce-period)]
;     (.start timer)
;     (events/listen timer Timer/TICK (fn [_]
;       ; Loop through all the torrents here and 
;       (doseq [torrent @torrents
;               :when (= :downloading (torrent :processed))]
;         ; Update each of the trackers this torrent has
;         (doseq [tracker (torrent :announce-urls)]
;           (announce tracker torrent))))))

(.log js/console "not last")