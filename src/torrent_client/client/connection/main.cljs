(ns torrent-client.client.connection.main)

(defprotocol Connection
  	(send-data [connection data] "Send data to the peer")
  	(receive-data [connection data] "Get data from the peer")
  	(connect-to-peer [connection] "Given a map of peer information, create a connection")
	(peer-id [connection] "A string uniquely identifying this peer and torrent")
	)