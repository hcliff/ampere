(ns torrent-client.peer
  (:use 
    [torrent-client.torrent :only [pretty-info-hash has-full-metadata?]]
    [torrent-client.protocol.bittorrent :only [generate-protocol]]
    [torrent-client.bitfield :only [bitfield-unique]]
    [torrent-client.pieces :only [wanted-pieces work-piece! piece-blocks get-block]]
    [torrent-client.peer-id :only [peer-id]])
  (:require
    [torrent-client.core.dispatch :as dispatch]
    [torrent-client.protocol.main :as protocol]
    [torrent-client.metadata :as metadata]
    [cljconsole.main :as console]
    [waltz.state :as state])
  (:use-macros 
    [waltz.macros :only [in out constraint defstate defevent]]
    [async.macros :only [async let-async]]))

; How many outstanding requests can a peer have at any given time
; http://wiki.theory.org/BitTorrentSpecification#Queuing
; TODO: this number has been pulled out of my ass
(def max-outstanding 20)

;************************************************
; Helper methods for the peer
;************************************************

(defn set-interest! [peer torrent]
  "Update the peer to reflect if the peer has pieces we want"
  (if (has-full-metadata? torrent)
    (if-not (empty? (wanted-pieces torrent ((state/get-data peer) :bitfield)))
      (if-not (state/in? peer :client-interested)
        (state/set peer :client-interested)
        (state/unset peer :client-interested)))))

(defn request-piece [peer torrent bittorrent-client piece-index]
  "Given a piece index request its component blocks"
  (work-piece! torrent piece-index)
  (doseq [[begin length] (piece-blocks torrent piece-index)]
    ; Add to the outstanding queue
    (swap! peer update-in [:data :outstanding] inc)
    (protocol/send-request bittorrent-client piece-index begin length)))

(defn update-queue [& [peer torrent bittorrent-client :as arguments]]
  "Saturate the peers queue with block requests"
  (let [pieces (wanted-pieces torrent (state/get-data peer :bitfield))
        request-piece (partial request-piece peer torrent bittorrent-client)]
    (when (and (< ((state/get-data peer) :outstanding) max-outstanding)
               (not-empty pieces)
               (state/in? peer :client-downloading))
      (request-piece (rand-nth pieces))
      (apply update-queue arguments))))

(defn request-metadata [peer torrent bittorrent-client piece-index]
  "Request all the pieces the metadata is made from"
  (metadata/work-piece! torrent piece-index)
  (swap! peer update-in [:data :outstanding] inc)
  (protocol/send-metadata-request bittorrent-client piece-index))

(defn update-metadata-queue [& [peer torrent bittorrent-client :as arguments]]
  "Saturate the peers queue with metadata piece requests"
  (let [pieces (metadata/wanted-pieces torrent)
        request-metadata (partial request-metadata peer torrent bittorrent-client)]
    ; (js* "debugger;")
    (when (and (not (state/in? peer :rejecting-metadata-requests))
               (< ((state/get-data peer) :outstanding) max-outstanding)
               (not-empty pieces))
      (request-metadata (first pieces))
      (apply update-metadata-queue arguments))))

;************************************************
; Manage peer state and handle client/peer requests
;************************************************

(defn peer-machine
  "A state machine for managing the channel with the peer
  this oversees the channel process and the subsequent channel
  management
  Hanshake indicates if this peer should begin the handshake"
  [torrent channel peer-data handshake]

  (let [data {:bitfield nil :outstanding 0}
        me (state/machine {:label (peer-data :peer-id) :data data})
        bittorrent-client (generate-protocol torrent channel me)]

    (defevent me :receive-handshake [reserved info-hash peer-id]
      "The peer has sent us a valid handshake confirming their
      peer-id and the torrent info-hash"
      (console/info "Received handshake from peer:" peer-id)
      (when (and (= (vec (@torrent :info-hash)) info-hash)
                 (= (state/get-name me) peer-id))
        (if-not (state/in? me :sent-handshake)
          (state/set me :sent-handshake))
        ; If this peer supports extensions
        ; H.C: currently can't deal with peers who don't
        ; we can't send a bitfield on magnet requests obviously
        (if (nth reserved 44)
          (state/set me :sent-extended)
          (state/set me :sent-bitfield))))

    (defevent me :receive-extended [message]
      ; Store the metadata length for later use
      ; (work out how many pieces to request)
      (let [info-length (or (@torrent :info-length) (message :metadata_size))
            metadata {:info-length info-length}]
        (dispatch/fire :update-metadata [torrent metadata]))
      (if-not (state/in? me :sent-extended)
        (state/set me :sent-extended)))

    (defevent me :receive-choke []
      (state/set me :client-chocked))

    (defevent me :receive-unchoke []
      (state/unset me :client-choked))

    (defevent me :receive-interested []
      (state/set me :peer-interested))

    (defevent me :receive-not-interested []
      (state/unset me :peer-interested))

    (defevent me :receive-have [index]
      "Update the bitfield to mark we have the correct piece"
      (bitfield/set! ((state/get-data me) :bitfield) index true)
      (state/set me :has-metadata)
      (set-interest! me torrent))

    (defevent me :receive-bitfield [bitfield]
      "The client has sent us a valid bitfield detailing the
      pieces of the torrent they have"
      (swap! me assoc-in [:data :bitfield] bitfield)
      (state/set me :has-metadata)
      ; If we haven't yet sent a bitfield, do so!
      (if-not (state/in? me :sent-bitfield)
        (state/set me :sent-bitfield))
      (set-interest! me torrent))

    (defevent me :receive-request [piece-index offset length]
      "If we have a given piece send it to the peer 
      if they haven't been choked"
      (if (and (state/in me :peer-downloading)
               (not (zero? (nth (@torrent :bitfield) piece-index))))
        ; If we have the block, we have the piece
        (let-async [data (get-block torrent piece-index offset length)]
          (protocol/send-block bittorrent-client piece-index offset data))))

    (defevent me :receive-block [piece-index begin data]
      "Inform the torrent of the piece we have just received
      and then ask for the next piece"
      ; (console/log "Received block" piece-index begin)
      ; Regardless of the blocks validity reduce the queue
      (swap! me update-in [:data :outstanding] dec)
      (update-queue me torrent bittorrent-client)
      (dispatch/fire :receive-block [torrent piece-index begin data]))

    ; TODO: impliment
    (defevent me :receive-cancel [index begin length]

      )

    ;************************************************
    ; Methods relating to BEP 9
    ;************************************************

    (defevent me :receive-metadata-request [piece-index]
      ; If we have metadata we have every piece
      (if (has-full-metadata? @torrent)
        (let [data (metadata/get-piece torrent piece-index)
              info-length (@torrent :info-length)]
          (protocol/send-metadata-piece bittorrent-client piece-index info-length data))
        ; Otherwise reject
        (protocol/send-metadata-reject bittorrent-client piece-index)))

    (defevent me :receive-metadata-reject [piece-index]
      (swap! me update-in [:data :outstanding] dec)
      (if-not (state/in? me :rejecting-metadata-requests)
        (state/set me :rejecting-metadata-requests))
      (dispatch/fire :receive-metadata-reject [torrent piece-index]))

    (defevent me :receive-metadata-piece [piece-index data]
      (swap! me update-in [:data :outstanding] dec)
      (state/set me :has-metadata)
      (update-metadata-queue me torrent bittorrent-client)
      (dispatch/fire :receive-metadata-piece [torrent piece-index data]))

    ;************************************************
    ; Manage the peer
    ;************************************************

    (defevent me :request-metadata []
      (update-metadata-queue me torrent bittorrent-client))

    (defevent me :received-metadata []
      "Fired when a torrent has all its metadata, proceed to send the peer 
      the clients bitfield"
      (state/set me :sent-bitfield))

    (defevent me :unchoke-peer []
      (if-not (state/in? me :peer-unchoked)
        (state/set me :peer-unchoked)))

    (defevent me :choke-peer []
      (state/unset me :peer-unchoked))

    (defevent me :optimistic []
      (state/set me :optimistic))

    (defevent me :unoptimistic []
      (state/unset me :optimistic))

    ;************************************************
    ; States
    ;************************************************

    (defstate me :sent-handshake
      (in [] (protocol/send-handshake bittorrent-client)))

    (defstate me :sent-extended
      (in [] (protocol/send-extended-handshake bittorrent-client))
      ; Can't send extensions until peer is validated
      (constraint [_ _] (state/in? me :sent-handshake)))

    (defstate me :sent-bitfield
      (in [] (protocol/send-bitfield bittorrent-client))
      ; Can't send the bitfield until we have all our metadata
      (constraint [_ _] (has-full-metadata? torrent)))

    (defstate me :client-unchoked
      "This client can request pieces from the peer"
      (in [] (state/set me :client-downloading))
      (out [] (state/unset me :client-downloading)))

    (defstate me :client-interested
      "This client wants pieces from the peer"
      (in [] 
        (protocol/send-interested bittorrent-client)
        (state/set me :client-downloading))
      (out [] 
        (protocol/send-not-interested bittorrent-client)
        (state/unset me :client-downloading))
      (constraint [_ _] (state/in? me :sent-bitfield)))

    (defstate me :peer-unchocked
      "The peer is allowed to request pieces from this client if it wants"
      (in [] 
        (protocol/send-unchoke bittorrent-client)
        (state/set me :peer-downloading))
      (out [] 
        (protocol/send-choke bittorrent-client)
        (state/unset me :peer-downloading))
      (constraint [_ _] (state/in? me :sent-bitfield)))

    (defstate me :peer-interested
      "The peer wants pieces from this client"
      (in [] (state/set me :peer-downloading))
      (out [] (state/unset me :peer-downloading)))

    (defstate me :client-downloading
      "This client is requested pieces from the peer"
      ; When we start downloading from the peer kick of piece request
      (in [] (update-queue me torrent bittorrent-client))
      (constraint [_ _] 
        (and (state/in? me :client-interested) 
             (state/in? me :client-unchoked)
             (state/in? me :sent-bitfield))))

    (defstate me :peer-downloading
      "The peer is requesting pieces from this client"
      (constraint [_ _]
        (and (state/in? me :peer-interested)
             (state/in? me :peer-unchoked)
             ; Peer can only download from us if we have torrent meta
             (state/in? me :sent-bitfield))))

    (defstate me :has-metadata
      (constraint [_ _] (not (state/in? me :has-metadata))))
    (defstate me :rejecting-metadata-requests)

    ;************************************************
    ; Initiate state machine
    ;************************************************

    ; Handshake if this is the first client
    (when handshake
      (console/info "Initiating handshake with peer:" (state/get-name me))
      (state/set me :sent-handshake))

    ; Return the machine
    me))

(defn generate-peer
  "Given a channel create a bittorrent peer and track the state"
  [torrent channel peer-id handshake]
  (console/info "Generate peer:" peer-id handshake)
  (peer-machine torrent channel {:peer-id peer-id} handshake))