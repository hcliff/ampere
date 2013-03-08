(ns torrent-client.peer
  (:use 
    [torrent-client.torrent :only [pretty-info-hash has-full-metadata?]]
    [torrent-client.protocol.bittorrent :only [generate-protocol]]
    [torrent-client.waltz :only [machine transition]]
    [torrent-client.bitfield :only [bitfield-unique]]
    [torrent-client.pieces :only [wanted-pieces work-piece! piece-blocks get-block]]
    [torrent-client.peer-id :only [peer-id]])
  (:require
    [torrent-client.core.dispatch :as dispatch]
    [torrent-client.protocol.main :as protocol]
    [torrent-client.metadata :as metadata]
    [waltz.state :as state])
  (:use-macros 
    [waltz.macros :only [in out constraint defstate defevent]]
    [async.macros :only [async let-async]]))

; How many outstanding requests can a peer have at any given time
; http://wiki.theory.org/BitTorrentSpecification#Queuing
; TODO: this number has been pulled out of my ass
(def max-outstanding 20)

(defn peer-machine
  "A state machine for managing the channel with the peer
  this oversees the channel process and the subsequent channel
  management
  Hanshake indicates if this peer should begin the handshake"
  [torrent channel peer-data handshake]

  (let [me (machine {:label :peer-machine :current :init})
        bittorrent-client (generate-protocol torrent channel me)
        peer-data (atom (merge peer-data {
                         ; Does this peer have the torrents metadata?
                         :has-metadata nil
                         ; Is this client choking the peer,
                         :choking true 
                         ; Is peer interested in this client
                         :interested false
                         ; How many outstanding requests does this peer have
                         :outstanding 0}))]

    ; the peers management has determined choking/unchoking
    ; of this peer
    ; TODO: make this granular to the info-hash
    (dispatch/react-to #{[:choke-peer (@peer-data :peer-id)]} 
      #(state/trigger me :choke-peer))
    (dispatch/react-to #{[:unchoke-peer (@peer-data :peer-id)]}
      #(state/trigger me :unchoke-peer))

    ; If the metadata becomes available and we were waiting on it
    ; proceed to send the bitfield
    (dispatch/react-to #{[:full-metadata (@torrent :pretty-info-hash)]}
      #(state/set me :sent-bitfield))

    (defevent me :receive-handshake [reserved info-hash peer-id]
      "The peer has sent us a valid handshake confirming their
      peer-id and the torrent info-hash"
      (.log js/console "recieve handshake" peer-id)
      (when (and (= (vec (@torrent :info-hash)) info-hash)
                 (= (@peer-data :peer-id) peer-id))
        ; If this peer supports extensions
        ; H.C: currently can't deal with peers who don't
        ; we can't send a bitfield on magnet requests obviously
        (if (nth reserved 44)
          (state/set me :sent-extended)
          (state/set me :sent-bitfield))
        (if-not (state/in? me :sent-handshake)
          (state/set me :sent-handshake))
        (.log js/console (state/current me))))

    (defevent me :receive-extended [message]
      ; Store the metadata length for later use
      ; (work out how many pieces to request)
      (let [metadata {:metadata-length (message :metadata_size)}]
        (dispatch/fire :update-metadata [torrent metadata]))
      ; And begin the process of retrieving the metadata
      (state/set me :acquiring-metadata)
      (if-not (state/in? me :sent-extended)
        (state/set me :sent-extended)))

    (defn update-metadata-queue []
      "Saturate the peers queue with metadata piece requests"
      (js* "debugger;")
      (let [pieces (metadata/wanted-pieces torrent)]
        (when (and (not (false? (@peer-data :has-metadata)))
                   (< (@peer-data :outstanding) max-outstanding)
                   (not-empty pieces))
          (request-metadata (first pieces))
          (update-metadata-queue))))

    (defn request-metadata [piece-index]
      "Request all the pieces the metadata is made from"
      (metadata/work-piece! torrent piece-index)
      (swap! peer-data update-in [:outstanding] inc)
      (protocol/send-metadata-request bittorrent-client piece-index))

    (defevent me :receive-metadata-request [piece-index]
      ; If we have metadata we have every piece
      (if (@torrent :metadata-byte-array)
        (let-async [data (metadata/get-piece torrent piece-index)]
          (protocol/send-metadata-piece bittorrent-client piece-index data))
        ; Otherwise reject
        (protocol/send-metadata-reject bittorrent-client piece-index)))

    (defevent me :receive-metadata-piece [piece-index data]
      (swap! peer-data update-in [:outstanding] dec)
      (update-metadata-queue)
      (dispatch/fire :receive-metadata-piece [torrent piece-index data]))

    (defevent me :receive-choke []
      (transition me :not-choked-not-interested :choked-not-interested)
      (transition me :not-choked-interested :choked-interested))

    (defevent me :receive-unchoke []
      (transition me :choked-not-interested :not-choked-not-interested)
      (transition me :choked-interested :not-choked-interested))

    (defevent me :receive-interested []
      (swap! peer-data assoc :interested true)
      (dispatch/fire :receive-interested torrent))

    (defevent me :receive-not-interested []
      (swap! peer-data assoc :interested false)
      (dispatch/fire :receive-not-interested torrent))

    (defevent me :receive-have [index]
      "Update the bitfield to mark we have the correct piece"
      (bitfield/set! (@peer-data :bitfield) index true)
      ; Check the peer has pieces that we need
      (if-not (empty? (wanted-pieces torrent (@peer-data :bitfield)))
        (transition me :not-choked-not-interested :not-choked-interested)
        (transition me :choked-not-interested :choked-interested)))

    (defevent me :receive-bitfield [bitfield]
      "The client has sent us a valid bitfield detailing the
      pieces of the torrent they have"
      (swap! peer-data assoc :bitfield bitfield)
      ; If we havn't yet sent a bitfield, do so!
      (if-not (state/in? me :sent-bitfield)
        (state/set me :sent-bitfield))
      ; If the client has allready sent their bitfield then send interested
      (if-not (empty? (wanted-pieces torrent (@peer-data :bitfield)))
        (state/set me :choked-interested)
        (state/set me :choked-not-interested)))

    (defevent me :receive-request [piece-index offset length]
      "If we have a given piece send it to the peer 
      if they havn't been choked"
      (when-not (@peer-data :choking)
        ; If we have the block, we have the piece
        (if-not (zero? (nth (@torrent :bitfield) piece-index))
          (let-async [data (get-block torrent piece-index offset length)]
            (protocol/send-block bittorrent-client piece-index offset data)))))

    (defevent me :receive-block [piece-index begin data]
      "Inform the torrent of the piece we have just received
      and then ask for the next piece"
      (.log js/console "received block" piece-index begin)
      ; Regardless of the blocks validity reduce the queue
      (swap! peer-data update-in [:outstanding] dec)
      (update-queue)
      (dispatch/fire :receive-block [torrent piece-index begin data]))

    ; TODO: impliment
    (defevent me :receive-cancel [index begin length]

      )

    (defevent me :choke-peer []
      (swap! peer-data assoc :choking true)
      (protocol/send-unchoke bittorrent-client))

    (defevent me :unchoke-peer []
      (swap! peer-data assoc :choking false)
      (protocol/send-unchoke bittorrent-client))

    (defn update-queue []
      "Saturate the peers queue with block requests"
      (let [pieces (wanted-pieces torrent (@peer-data :bitfield))]
        (when (and (< (@peer-data :outstanding) max-outstanding)
                   (not-empty pieces))
          (request-piece (rand-nth pieces))
          (update-queue))))

    (defn request-piece [piece-index]
      "Given a piece index request its component blocks"
      (work-piece! torrent piece-index)
      (doseq [[begin length] (piece-blocks torrent piece-index)]
        ; Add to the outstanding queue
        (swap! peer-data update-in [:outstanding] inc)
        (protocol/send-request bittorrent-client piece-index begin length)))

    (defstate me :init)

    (defstate me :sent-handshake
      (in [] (protocol/send-handshake bittorrent-client))
      ; Only send the handshake once
      (constraint [_ _] (state/in? me :init)))

    (defstate me :sent-extended
      (in [] (protocol/send-extended-handshake bittorrent-client))
      ; Can't send extensions until peer is validated
      (constraint [_ _] (state/in? me :sent-handshake)))

    (defstate me :acquiring-metadata
      (in []
        ; Try to transition immediately
        (state/set me :sent-bitfield)
        ; Or start getting the metadata
        (update-metadata-queue))
      (constraint [_ _] (state/in? me :sent-handshake)))

    (defstate me :sent-bitfield
      (in [] (protocol/send-bitfield bittorrent-client))
      ; Can't send the bitfield until we have all our metadata
      (constraint [_ _] (has-full-metadata? torrent)))

    (defstate me :choked-not-interested
      (in [] (protocol/send-not-interested bittorrent-client))
      (constraint [_ _] (state/in? me :sent-bitfield)))

    (defstate me :choked-interested
      (in [] (protocol/send-interested bittorrent-client))
      (constraint [_ _] (state/in? me :sent-bitfield)))

    (defstate me :not-choked-not-interested
      (in [] (protocol/send-not-interested bittorrent-client))
      (constraint [_ _] (state/in? me :sent-bitfield)))

    ; This is when downloading actually occurs
    ; TODO: this can be optimised
    (defstate me :not-choked-interested 
      (in []
        (protocol/send-interested bittorrent-client)
        ; If the peer has pieces we want then start fetching
        (if-not (empty? (wanted-pieces torrent (@peer-data :bitfield)))
          (update-queue)
          (state/set me :not-choked-not-interested)))
      (constraint [_ _] (state/in? me :sent-bitfield)))

    ; Handshake if this is the first client
    (when handshake
      (.log js/console "INITIATE HANDSHAKE")
      (state/set me :sent-handshake))

    ; Return some info on the peer
    peer-data

))

(defn generate-peer
  "Given a channel create a bittorrent peer and track the state"
  [torrent channel peer-id handshake]
  (.log js/console "generate-peer" peer-id handshake)
  (peer-machine torrent channel {:peer-id peer-id} handshake))

(.log js/console "loaded js")