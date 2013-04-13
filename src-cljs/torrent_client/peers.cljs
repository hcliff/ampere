(ns torrent-client.peers
  (:use 
    [torrent-client.torrents :only [torrents]]
    [torrent-client.torrent :only [has-full-metadata?]]
    [torrent-client.peer :only [generate-peer]]
    [torrent-client.core.incubator :only [dissoc-in]])
  (:require 
    [torrent-client.core.dispatch :as dispatch]
    [waltz.state :as state]
    [cljconsole.main :as console]
    [goog.Timer :as Timer]
    [goog.events :as events]))

; 30 seconds
(def optimistic-unchoke-period (* 10 1000))

; how many peers should we download from at once
(def download-count 4)
; how many peers should we get metadat from at once
(def metadata-request-count 2)

(def peers (atom {}))

(defn optimistic? [m] (state/in? m :optimistic))
(def not-optimistic? (complement optimistic?))

(defn peer-unchoked? [m] (state/in? m :peer-unchoked))
(def peer-choked? (complement peer-unchoked?))
(defn peer-interested? [m] (state/in? m :peer-interested))
(def peer-uninterested? (complement peer-interested?))

;;************************************************
;; Manage events sent from torrent management
;;************************************************

(dispatch/react-to #{:stopped-torrent} (fn [_ torrent]
  ; Cancel any pieces in transit
  (doseq [peer (@peers (torrent :info-hash))]
    (state/trigger peer :cancel))
  ; Remove all of our peers
  (swap! peers dissoc (torrent :info-hash))))

; ; TODO: impliment better end game stratgy
; ; http://wiki.theory.org/BitTorrentSpecification#End_Game
; (dispatch/react-to #{:completed-torrent} (fn [_ torrent]
;   (doseq [peer (@peers (torrent :info-hash))]
;     (state/trigger peer :cancel))
;   ; TODO: rework unchoke algorithm upon completion
;   ; TODO: do we change our interested status?
;   ))

(dispatch/react-to #{:paused-torrent} (fn [_ torrent]
  ; TODO: cancel current pieces?
  ; TODO: do we change our interested status?
  ; TODO: pause timer
  ))

;;************************************************
;; Manage events sent from channels
;;************************************************

(dispatch/react-to #{:add-channel} (fn [_ [peer-id channel & flags]]
  "A new channel has been established to get torrent data"
  (let [; If this peer is initiating the handshake
        handshake (contains? (set flags) :handshake)
        ; Find the torrent this channel is for
        info-hash (aget channel "label")
        torrent (@torrents info-hash)
        peer (generate-peer torrent channel peer-id handshake)]
    ; add the peer to the list of peers for this torrent
    (console/info "Added peer" peer-id "to torrent" info-hash)
    (swap! peers assoc-in [info-hash peer-id] peer))))

(dispatch/react-to #{:remove-channel} (fn [_ [peer-id channel]]
  (let [info-hash (aget channel "label")]
    (swap! peers dissoc-in [info-hash peer-id]))))

(dispatch/react-to #{:receive-data} (fn [_ [peer-id channel data]]
  (let [info-hash (aget channel "label")]
    (if-let [peer (get-in @peers [info-hash peer-id])]
      (state/trigger peer :receive-data data)))))

; (dispatch/react-to #{:written-piece} (fn [_ [torrent block]]
;   "When a peer sends us a block we didn't have before"
;   ; Inform all our peers we have it
;   (doseq [peer (@peers (@torrent :info-hash))]
;     (state/trigger peer :add-block block))))

;;************************************************
;; Peer management
;;************************************************

(defn request-metadata! [info-hash]
  (if-let [peers (vals (@peers info-hash))]
    (let [peers (remove #(state/in? % :rejecting-metadata-requests) peers)
          ; has-metadata not being set can also mean it is unknown
          ; prefer peers that definately have metadata, but also try unknowns
          peers (sort-by #(state/in? % :has-metadata) peers)
          peers-count (min metadata-request-count (count peers))]
      (doseq [p (subvec peers 0 peers-count)]
        (state/trigger p :request-metadata)))))

(defn set-unchoked!
  "Update the currently unchoked peers, choking & unchoking peers where 
  appropriate"
  [info-hash]
  (if-let [peers (vals (@peers info-hash))]
    (let [peers (sort-by (juxt optimistic? peer-interested?) peers)
          ; is the first peer is optimistically unchoked but not interested
          ; TODO: resolve this testing logic
          first-peer-unop ((every-pred optimistic? peer-uninterested?) (first peers))
          ; the first n peers are active
          active-peers-count (min (count peers) (if first-peer-unop 5 4))
          ; if the optimisticly unchoked peer isn't interested allow 5 active 
          ; peers otherwise just have the 4 active peers
          active (subvec peers 0 active-peers-count)
          inactive (if (< active-peers-count (count peers))
                      (subvec peers active-peers-count))]
      ; Unchoke the peers in the top 4 that are currently choked
      ; H.C (comp :choking deref not working...?)
      (doseq [peer (filter peer-choked? active)]
        (state/trigger peer :unchoke-peer))
      ; choke inactive peers that are unchoked
      (doseq [peer (filter peer-unchoked? inactive)]
        (state/trigger peer :choke-peer)))))

(defn unoptimistic
  "The optimistic downloader is protected for the first 30 seconds
  after that it has to fight for itself"
  [info-hash]
  (if-let [peers (vals (get @peers info-hash))]
    (if-let [peer (first (filter optimistic? peers))]
      (state/trigger peer :unoptimistic))))

(defn optimistic-unchoke
  "Unchoke a peer regardless of its upload speed"
  [info-hash]
  (if-let [peers (vals (get @peers info-hash))]
    ; mark optimistic a random peer that is choked and not allready optimistic
    (let [eligible-peers (filter (every-pred not-optimistic? peer-choked?) peers)]
      (if (pos? (count eligible-peers))
        (state/trigger (rand-nth eligible-peers) :optimistic)))))

(dispatch/react-to #{:receive-interested :receive-not-interested} (fn [_ torrent]
  "A peer changed its interested status"
  (js* "debugger;")
  (set-unchoked! (@torrent :pretty-info-hash))))

(defn- manage-peers [torrent]
  "Run all the sub functions required to manage all a torrents peers"
  (let [info-hash (@torrent :pretty-info-hash)]
    (unoptimistic info-hash)
    (optimistic-unchoke info-hash)
    (if (has-full-metadata? torrent)
      (set-unchoked! info-hash)
      (request-metadata! info-hash))))

; Periodically update the peers for this torrent
(dispatch/react-to #{:started-torrent} (fn [_ torrent]
  (let [timer (goog/Timer. optimistic-unchoke-period)]
    (.start timer)
    (events/listen timer Timer/TICK #(manage-peers torrent)))))

(dispatch/react-to #{:updated-torrent} (fn [_ torrent]
  "Peers will have been waiting on metadata to continue with the connection 
  process"
  (let [peers (vals (@peers (@torrent :info-hash)))]
    (doseq [p peers]
      (state/trigger p :received-metadata)))))