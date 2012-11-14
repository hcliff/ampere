(ns torrent-client.client.tracker
  (:require 
    [torrent-client.client.core.dispatch :as dispatch]
    [goog.Timer :as Timer]
    [goog.events :as events])
  (:use 
    [torrent-client.jayq.async :only [ajax]]
    [torrent-client.client.main :only [torrents]]
    [torrent-client.client.peer-id :only [peer-id]]
    [torrent-client.client.core.string :only [a2b-hex]]
    [torrent-client.client.connection :only 
      [generate-offer-sdp generate-connection]]
    [torrent-client.client.channel :only [generate-channel]])
  (:use-macros [async.macros :only [let-async async]]))

; How often should we tell the tracker we are still alive?
(def announce-period (* 15 60 1000))

(defn announce [announce-url torrent extra-data & [event success-callback]]
  "Given an announce url and the torrent it corrosponds to update the tracker"
  ; (js* "debugger;")
  (let-async [offer-sdp (generate-offer-sdp)
              :let data {
                :sdp offer-sdp
                :info_hash (a2b-hex (@torrent :pretty-info-hash))
                :event (if-not (nil? event) (name event) "")
                :peer_id @peer-id}
              :let data (merge data extra-data)
              response (ajax announce-url {:data data :dataType "json"})
              :let connections (map generate-connection (response :peers))]
    (when-not (nil? success-callback) (success-callback response))))

(dispatch/react-to #{:started-torrent} (fn [_ torrent]
  "Update the list of trackers for this torrent
   and send out the start event to the trackers"
  (doseq [announce-url (@torrent :announce-list)]
    (announce announce-url torrent {:numwant 10} :started (fn [response]
      ; Loop through the returned peers and create datachannels with them
      (doseq [peer (response :peers)]
        (let-async [;Build a connection to the peer, this is one-to-one
                    connection (generate-connection peer)
                    :let channel (generate-channel connection torrent)]
          (js* "debugger;")
          (dispatch/fire :add-channel [torrent channel peer])
          )
      )
  )))))

(dispatch/react-to #{:completed-torrent} (fn [_ torrent]
  "When a torrent is finished send the complete event to the trackers"
  (doseq [announce-url (@torrent :announce-list)]
    (announce announce-url torrent {} :completed))))

(dispatch/react-to #{:stopped-torrent} (fn [_ torrent]
  "When a torrent is stopped send the stopped event to the trackers"
  (doseq [announce-url (@torrent :announce-list)]
    (announce announce-url torrent {} :stopped))))

; Use a global timer for announce period
; this is just for effiency
; every n seconds send an announce
; H.C TODO - resolve torrent statistic data
; TODO - use actual interval given by the tracker
(let [timer (goog/Timer. announce-period)]
  (.start timer)
  (events/listen timer Timer/TICK (fn [_]
    ; Loop through all the torrents here
    ; NOTE: at time of writing :when is broken
    (doseq [torrent (filter #(= :processed (% :status)) @torrents)]
      ; Update each of the trackers this torrent has
      (doseq [announce-url (@torrent :announce-list)]
        (announce announce-url torrent {
          :uploaded 0
          :downloaded 0
          :left (@torrent :total-length)
          }))
    ))))