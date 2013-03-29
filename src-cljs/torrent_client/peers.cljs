(ns torrent-client.peers
  (:use 
    [torrent-client.torrents :only [torrents]]
    [torrent-client.torrent :only [has-full-metadata?]]
    [torrent-client.peer :only [generate-peer]]
    [waltz.state :only [trigger]])
  (:require 
    [torrent-client.core.dispatch :as dispatch]
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
; The peers that are currently unchoked
(def unchoked (atom {}))

; (dispatch/react-to #{:stopped-torrent} (fn [_ torrent]
;   ; Cancel any pieces in transit
;   (doseq [peer (@peers (torrent :info-hash))]
;     (trigger peer :cancel))
;   ; Remove all of our peers
;   (swap! peers dissoc (torrent :info-hash))))

; TODO: impliment better end game stratgy
; http://wiki.theory.org/BitTorrentSpecification#End_Game
; (dispatch/react-to #{:completed-torrent} (fn [_ torrent]
;   (doseq [peer (@peers (torrent :info-hash))]
;     (trigger peer :cancel))
;   ; TODO: rework unchoke algorithm upon completion
;   ; TODO: do we change our interested status?
;   ))

(dispatch/react-to #{:paused-torrent} (fn [_ torrent]
  ; TODO: cancel current pieces?
  ; TODO: do we change our interested status?
  ; TODO: pause timer
  ))

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
    (swap! peers (partial merge-with concat) {info-hash [peer]}))))

(dispatch/react-to #{:remove-channel} (fn [_ [peer-id channel]]
  (let [info-hash (aget channel "label")
        peers (@peers info-hash)
        ; Remove this peer from the torrent peers
        peers (remove #(= peer-id (-> % deref :peer-id)) peers)]
  (swap! peers assoc info-hash peers))))

; (dispatch/react-to #{:written-piece} (fn [_ [torrent block]]
;   "When a peer sends us a block we didn't have before"
;   ; Inform all our peers we have it
;   (doseq [peer (@peers (@torrent :info-hash))]
;     (trigger peer :add-block block))))

(defn request-metadata! [info-hash]
  (if-let [peers (@peers info-hash)]
    (let [peers (remove #(false? (-> % deref :has-metadata)) peers)
          ; has-metadata can be false, nil (unknown) or true
          ; prefer true to nil
          peers (sort-by (comp :has-metadata deref) peers)
          peers-count (min metadata-request-count (count peers))]
      (doseq [p (subvec peers 0 peers-count)]
        (trigger p :request-metadata)))))

(dispatch/react-to #{:updated-torrent} (fn [_ torrent]
  "Peers will have been waiting on metadata to continue with the connection 
  process"
  (let [peers (@peers (@torrent :info-hash))]
    (doseq [p peers]
      (trigger p :received-metadata)))))

(defn set-unchoked!
  "Update the currently unchoked peers, choking & unchoking peers where 
  appropriate"
  [info-hash]
  (if-let [peers (@peers info-hash)]
    (let [peers (sort-by (comp (juxt :optimistic :interested :upload) deref) peers)
          first-peer-status ((juxt :optimistic :interested) (deref (first peers)))
          ; is the first peer is optimistically unchoked but not interested
          ; TODO: resolve this testing logic
          first-peer-unop (= [true false] first-peer-status)
          ; the first n peers are active
          active-peers-count (min (count peers) (if first-peer-unop 5 4))
          ; if the optimisticly unchoked peer isn't interested allow 5 active 
          ; peers otherwise just have the 4 active peers
          active (subvec peers 0 active-peers-count)
          inactive (if (< active-peers-count (count peers))
                      (subvec peers active-peers-count))]
      ; Unchoke the peers in the top 4 that are currently choked
      ; H.C (comp :choking deref not working...?)
      (doseq [peer (filter (comp :choking deref) active)]
        (dispatch/fire [:unchoke-peer (@peer :peer-id)]))
      ; ; choke inactive peers that are unchoked
      (doseq [peer (remove :choking (map #(deref %) inactive))]
        (dispatch/fire [:choke (@peer :peer-id)]))
      (swap! unchoked assoc info-hash active))))

(defn unoptimistic
  "The optimistic downloader is protected for the first 30 seconds
  after that it has to fight for itself"
  [info-hash]
  (if-let [peers (@peers info-hash)]
    (let [peer (first (filter (comp :optimistic deref) peers))]
      (dispatch/fire [:unoptimistic (@peer :peer-id)]))))

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

; listen for changes in the peers interest
(dispatch/react-to #{:receive-interested :receive-not-interested} (fn [_ torrent]
  (change-interested (@torrent :pretty-info-hash))))

; Periodically update the peers for this torrent
(dispatch/react-to #{:started-torrent} (fn [_ torrent]
  (let [timer (goog/Timer. optimistic-unchoke-period)]
    (.start timer)
    (events/listen timer Timer/TICK (fn [_]
      (unoptimistic (@torrent :pretty-info-hash))
      (optimistic-unchoke (@torrent :pretty-info-hash))
      (if-not (has-full-metadata? torrent)
        (request-metadata! (@torrent :pretty-info-hash))))))))