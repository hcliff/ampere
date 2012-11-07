(ns torrent-client.client.peer
  (:use 
    [torrent-client.client.protocol.bittorrent :only [generate-protocol]]
    [torrent-client.client.waltz :only [machine transition]]
    [torrent-client.client.bitfield :only [bitfield-unique]]
    )
  (:require
    [torrent-client.client.core.dispatch :as dispatch]
    [torrent-client.client.protocol.main :as protocol]
    [torrent-client.client.connection.main :as connection]
    [waltz.state :as state])
  (:use-macros [waltz.macros :only [in out defstate defevent]])
  )

(defn peer-machine
  "A state machine for managing the connection status with the peer
  this oversees the connection process and the subsequent connection
  management"
  [torrent connection]

  (let [me (machine {:label :peer-machine :current :init})
        peer-data (atom {:peer-id (connection/peer-id connection)
                         ; Is this client choking the peer,
                         :choking true 
                         ; Is peer interested in this client
                         :interested false})
        bitorrent-client (generate-protocol torrent connection me)]

    (defevent me :receive-handshake [info-hash peer-id]
      "The peer has sent us a valid handshake confirming their
      peer-id and the torrent info-hash"
      (if (and (= (vec (@torrent :info-hash)) info-hash)
               (= (@peer-data :peer-id) peer-id))
        (transition me :init :handshaken)))

    (defevent me :receive-choke []
      (transition :not-choked-not-interested :choked-not-interested)
      (transition :not-choked-interested :choked-interested))

    (defevent me :receive-unchoke []
      (transition :choked-not-interested :not-choked-not-interested)
      (transition :choked-interested :not-choked-interested))

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
        (transition :not-choked-not-interested :not-choked-interested)
        (transition :choked-not-interested :choked-interested)))

    (defevent me :receive-bitfield [bitfield]
      "The client has sent us a valid bitfield detailing the
      pieces of the torrent they have"
      (swap! peer-data assoc :bitfield bitfield)
      (.log js/console "bitfield" (bitfield-unique (@torrent :bitfield) (@peer-data :bitfield)))
      (if (bitfield-unique (@torrent :bitfield) (@peer-data :bitfield))
        (state/set me :choked-interested)
        (state/set me :choked-not-interested)))

    (defevent me :receieve-request [index]
      "If we have a given piece send it to the peer 
      if they havn't been choked"
      (if-not (@peer-data :choked)
        (if (bitfield/get (@peer-data :bitfield) index)
          (if-let [data (get-piece (torrent :files) index)]
            (protocol/send-piece index data)))))

    (defevent me :receive-piece [piece]
      "Inform the torrent of the piece we have just received
      and then ask for the next piece"
      (state/trigger torrent :receive-piece piece)
      (if (bitfield-unique (@torrent :bitfield) (@peer-data :bitfield))
        (protocol/send-request (get-next-piece torrent))))

    (defevent me :receive-cancel [index begin length]

      )

    (defevent me :choke-peer []
      (swap! peer-data assoc :choked true)
      (protocol/send-unchoke bitorrent-client))

    (defevent me :unchoke-peer []
      (swap! peer-data assoc :choked false)
      (protocol/send-unchoke bitorrent-client))

    (defstate me :init)

    ; As soon as the handshake succeeds send the bitfield
    ; remember the bitfield is optional, not all clients will send it
    (defstate me :handshaken
      (in []
        (state/set me :choked-not-interested)
        (protocol/send-bitfield bitorrent-client)))

    (defstate me :choked-not-interested
      (in [] (protocol/send-not-interested bitorrent-client)))

    (defstate me :choked-interested
      (in [] (protocol/send-interested bitorrent-client)))

    (defstate me :not-choked-not-interested
      (in [] (protocol/send-not-interested bitorrent-client)))

    ; This is when downloading actually occurs
    (defstate me :not-choked-interested 
      (in []
        (protocol/send-interested bitorrent-client)
        (protocol/send-request bitorrent-client (get-next-piece torrent))))

    ; Immediately handshake with the peer
    ; consider this the (in) of init
    (protocol/send-handshake bitorrent-client)

))

(defn generate-peer
  "Given a connection create a bittorrent peer and track the state"
  [torrent connection]
  (peer-machine torrent connection))