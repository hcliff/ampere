(ns torrent-client.client.peer
  (:use 
    [torrent-client.client.protocol.bittorrent :only [generate-protocol]]
    [torrent-client.client.waltz :only [machine transition]]
    [torrent-client.client.bitfield :only [bitfield-unique]]
    [torrent-client.client.pieces :only [get-next-block]]
    )
  (:require
    [torrent-client.client.core.dispatch :as dispatch]
    [torrent-client.client.protocol.main :as protocol]
    [waltz.state :as state])
  (:use-macros [waltz.macros :only [in out defstate defevent]])
  )

(defn peer-machine
  "A state machine for managing the channel with the peer
  this oversees the channel process and the subsequent channel
  management
  Hanshake indicates if this peer should begin the handshake"
  [torrent channel peer-data handshake]

  (let [me (machine {:label :peer-machine :current :init})
        bittorrent-client (generate-protocol torrent channel me)
        peer-data (atom (merge peer-data {
                         ; Is this client choking the peer,
                         :choking true 
                         ; Is peer interested in this client
                         :interested false}))]

    (dispatch/react-to #{[:choke-peer (@peer-data :peer-id)]} 
      #(state/trigger me :choke-peer))
    (dispatch/react-to #{[:unchoke-peer (@peer-data :peer-id)]} 
      #(state/trigger me :unchoke-peer))

    (defevent me :receive-handshake [info-hash peer-id]
      "The peer has sent us a valid handshake confirming their
      peer-id and the torrent info-hash"
      (.log js/console "recieve handshake" (@peer-data :peer-id) peer-id)
      (if (and (= (vec (@torrent :info-hash)) info-hash)
               (= (@peer-data :peer-id) peer-id))
        (state/set me :handshaken)))

    (defevent me :receive-choke []
      (transition me :not-choked-not-interested :choked-not-interested)
      (transition me :not-choked-interested :choked-interested))

    (defevent me :receive-unchoke []
      (transition me :choked-not-interested :not-choked-not-interested)
      (transition me :choked-interested :not-choked-interested))

    (defevent me :receive-interested []
      (swap! peer-data assoc :interested true)
      (dispatch/fire [:receive-interested] torrent))

    (defevent me :receive-not-interested []
      (swap! peer-data assoc :interested false)
      (dispatch/fire [:receive-not-interested] torrent))

    (defevent me :receive-have [index]
      "Update the bitfield to mark we have the correct piece"
      (bitfield/set! (@peer-data :bitfield) index true)
      ; Check the peer has pieces that we need
      (if (bitfield-unique (@torrent :bitfield) (@peer-data :bitfield))
        (transition me :not-choked-not-interested :not-choked-interested)
        (transition me :choked-not-interested :choked-interested)))

    (defevent me :receive-bitfield [bitfield]
      "The client has sent us a valid bitfield detailing the
      pieces of the torrent they have"
      (swap! peer-data assoc :bitfield bitfield)
      (if (bitfield-unique (@torrent :bitfield) (@peer-data :bitfield))
        (state/set me :choked-interested)
        (state/set me :choked-not-interested)))

    (defevent me :receieve-request [index]
      "If we have a given piece send it to the peer 
      if they havn't been choked"
      (if-not (@peer-data :choked)
        (if (bitfield/get (@peer-data :bitfield) index)
          (if-let [data (get-piece (torrent :files) index)]
            (protocol/send-piece bittorrent-client index data)))))

    (defevent me :receive-piece [piece]
      "Inform the torrent of the piece we have just received
      and then ask for the next piece"
      (state/trigger torrent :receive-piece piece)
      (if (bitfield-unique (@torrent :bitfield) (@peer-data :bitfield))
        (protocol/send-request bittorrent-client (get-next-piece torrent))))

    (defevent me :receive-cancel [index begin length]

      )

    (defevent me :choke-peer []
      (swap! peer-data assoc :choked true)
      (protocol/send-unchoke bittorrent-client))

    (defevent me :unchoke-peer []
      (.log js/console "UNCHOKE BITCH" peer-data)
      (swap! peer-data assoc :choked false)
      (protocol/send-unchoke bittorrent-client))

    (defstate me :init)

    ; As soon as the handshake succeeds send the bitfield
    ; remember the bitfield is optional, not all clients will send it
    (defstate me :handshaken
      (in []
        (do
          (state/set me :choked-not-interested)
          (protocol/send-bitfield bittorrent-client))))

    (defstate me :choked-not-interested
      (in [] (protocol/send-not-interested bittorrent-client)))

    (defstate me :choked-interested
      (in [] (protocol/send-interested bittorrent-client)))

    (defstate me :not-choked-not-interested
      (in [] (protocol/send-not-interested bittorrent-client)))

    ; This is when downloading actually occurs
    (defstate me :not-choked-interested 
      (in []
        (protocol/send-interested bittorrent-client)
        (let [block-index (get-next-block torrent (@peer-data :bitfield))]
          (protocol/send-request bittorrent-client block-index))))

    ; Handshake if this is the first client
    (when handshake
      (protocol/send-handshake bittorrent-client))

    ; Return some info on the peer
    peer-data

))

(defn generate-peer
  "Given a channel create a bittorrent peer and track the state"
  [torrent channel peer-id handshake]
  (peer-machine torrent channel {:peer-id peer-id} handshake))