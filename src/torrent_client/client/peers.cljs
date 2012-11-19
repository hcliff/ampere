(ns torrent-client.client.peers
  (:use 
    [torrent-client.client.main :only [torrents]]
    [torrent-client.client.peer :only [generate-peer]]
    [waltz.state :only [trigger]])
  (:require 
    [torrent-client.client.core.dispatch :as dispatch]
    [goog.Timer :as Timer]
    [goog.events :as events]))

; 30 seconds
(def optimistic-unchoke-period (* 10 1000))

; how many peers should we download from at once
(def download-count 4)

(def peers (atom {}))
; The peers that are currently unchoked
(def unchoked (atom {}))

; Optimistically unchoke a torrent periodically
(dispatch/react-to #{:started-torrent} (fn [_ torrent]
  (let [timer (goog/Timer. optimistic-unchoke-period)]
    (.start timer)
    ; (events/listen timer Timer/TICK #(unoptimistic (@torrent :pretty-info-hash)))
    (events/listen timer Timer/TICK #(optimistic-unchoke (@torrent :pretty-info-hash)))
  )))

(dispatch/react-to #{:stopped-torrent} (fn [torrent]
  ; Cancel any pieces in transit
  (doseq [peer (@peers (torrent :info-hash))]
    (trigger peer :cancel))
  ; Remove all of our peers
  (swap! peers dissoc (torrent :info-hash))))

(dispatch/react-to #{:completed-torrent} (fn [torrent]
  (doseq [peer (@peers (torrent :info-hash))]
    (trigger peer :cancel))
  ; TODO: rework unchoke algorithm upon completion
  ; TODO: do we change our interested status?
  ))

(dispatch/react-to #{:paused-torrent} (fn [torrent]
  ; TODO: cancel current pieces?
  ; TODO: do we change our interested status?
  ; TODO: pause timer
  ))

(dispatch/react-to #{:add-channel} (fn [_ [peer-id channel & flags]]
  "A new channel has been established to get torrent data"
  (let [; If this peer is initiating the handshake
        handshake (contains? (set flags) :handshake)
        ; Find the torrent this channel is for
        info-hash (.-label channel)
        torrent (@torrents info-hash)
        peer (generate-peer torrent channel peer-id handshake)]
    ; add the peer to the list of peers for this torrent
    (.log js/console "peer" peer)
    (swap! peers (partial merge-with concat) {info-hash [peer]}))))

(dispatch/react-to #{:add-block} (fn [_ [torrent block]]
  "When a peer sends us a block we didn't have before"
  ; Inform all our peers we have it
  (doseq [peer (@peers (torrent :info-hash))]
    (trigger peer :add-block block))))

; listen for changes in the peers interest
(dispatch/react-to #{:receive-interested :receive-not-interested} (fn [_ torrent]
  (change-interested (@torrent :pretty-info-hash))))

(defn set-unchoked! 
  "Update the currently unchoked peers, choking & unchoking peers where 
  appropriate"
  [info-hash]
  (let [peers (sort-by (comp (juxt :optimistic :interested :upload) deref) 
                        (@peers info-hash))
        first-peer-status ((juxt :optimistic :interested) (deref (first peers)))
        ; is the first peer is optimistically unchoked but not interested
        optimistic-uninterested (= [true false] first-peer-status)
        ; if the optimisticly unchoked peer isn't interested allow 5 active peers
        ; otherwise just have the 4 active peers
        active (subvec peers 0 (if first-peer-unop 5 4))
        inactive (subvec peers (if first-peer-unop 5 4))]
    ; Unchoke the peers in the top 4 that are currently choked
    ; H.C (comp :choking deref not working...?)
    (doseq [peer (filter :choking (map deref active))]
      (dispatch/fire [:unchoke (peer :peer-id)]))
    ; choke inactive peers that are unchoked
    (doseq [peer (remove :choking (map deref inactive))]
      (dispatch/fire [:choke (peer :peer-id)]))
    (swap! unchoked assoc info-hash active)))

(defn unoptimistic
  "The optimistic downloader is protected for the first 30 seconds
  after that it has to fight for itself"
  [info-hash]
  (let [optimistic (first (filter :optimistic peers))]
    (trigger optimistic :unoptimistic)))

(defn optimistic-unchoke
  "Unchoke a peer regardless of its upload speed"
  [info-hash]
  ; HC: why can't I if-let this?
  (if (contains? @peers info-hash)
    (let [eligible-peers (remove (comp :optimistic deref)
            (filter (comp :choking deref) (@peers info-hash)))
          random-peer (rand-nth eligible-peers)]
      (dispatch/fire [:unchoke-peer (@random-peer :peer-id)])
      (set-unchoked! info-hash))))

(defn change-interested 
  "A peer hash changed its interested status"
  [info-hash]
  (set-unchoked! info-hash))

