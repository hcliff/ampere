(ns torrent-client.client.peer
  (:use 
    ; [torrent-client.client.protocol.bittorrent :only [generate-protocol]]
    [torrent-client.client.waltz :only [machine transition]]
    [torrent-client.client.bitfield :only [bitfield-unique]]
    [waltz.state :only [trigger]]
    )
  (:require 
    [torrent-client.client.protocol.main :as protocol])
  (:use-macros [waltz.macros :only [in out defstate defevent]])
  )

(defn peer-machine
  "A state machine for managing the connection status with the peer
  this oversees the connection process and the subsequent connection
  management"
  [torrent connection]

  (let [me (machine {:label :peer-machine :current :init})
        ; peers start out choked and uninterested
        peer-data (atom {:peer-id (connection/peer-id connection)
                         :am_choking true 
                         :am_interested false})
        bitorrent-client (generate-protocol torrent connection me)]

    (defevent me :receive-handshake [valid]
      "The peer has sent us a valid handshake confirming their
      peer-id and the torrent info-hash"
      (if valid
        (transition me :init :handshaken)))

    (defevent me :recieve-choke []
      (transition :not-choked-not-interested :choked-not-interested)
      (transition :not-choked-interested :choked-interested))

    (defevent me :recieve-unchoke []
      (transition :choked-not-interested :not-choked-not-interested)
      (transition :choked-interested :not-choked-interested))

    (defevent me :recieve-have [index]
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
      (if (bitfield-unique (@torrent :bitfield) (@peer-data :bitfield))
        (state/set! :choked-interested)
        (transition :choked-not-interested)))

    (defevent me :receieve-request [index]
      "If we have a given piece send it to the peer 
      if they havn't been choked"
      (if-not (@peer-data :choked)
        (if (bitfield/get (@peer-data :bitfield) index)
          (if-let [data (get-piece (torrent :files) index)]
            (protocol/send-piece index data)))))

    (defevent me :receive-piece [piece]
      "Inform the torrent of the piece we have just recieved
      and then ask for the next piece"
      (torrent/trigger :recieve-piece piece)
      (if (bitfield-unique (@torrent :bitfield) (@peer-data :bitfield))
        (protocol/send-request (get-next-piece torrent))))

    (defevent me :receive-cancel [index begin length]

      )

    (defstate me :init)

    ; As soon as the handshake succeeds send the bitfield
    (defstate me :handshaken
      (in [] (protocol/send-bitfield bitorrent-client)))

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