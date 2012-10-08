(ns torrent-client.client.core.bittorrent
	(:require [torrent-client.client.connection.main :as connection-protocol])
	(:use 
		[goog.crypt :only [byteArrayToString]]))

(def msg-choke "00")
(def msg-unchoke "01")
(def msg-interested "02")
(def msg-not-interested "03")
(def msg-have "04")
(def msg-bitfield "05")
(def msg-request "06")
(def msg-piece "07")
(def msg-cancel "08")

(def msg-type {
	msg-choke :msg-choke
	msg-unchoke :msg-unchoke
	msg-interested :msg-interested
	msg-not-interested :msg-not-interested
	msg-have :msg-have
	msg-bitfield :msg-bitfield
	msg-request :msg-request
	msg-piece :msg-piece
	msg-cancel :msg-cancel
	})

(defprotocol Bittorrent
	(send-data [client data] "")
	(send-message [client type data] "")
	(send-handshake [client] "")
	(keep-alive [client] "Fire a keep-alive every 60 seconds")
	(handle-data [client data] "")
	)

(deftype BittorrentClient [torrent connection]
	Bittorrent

	(send-data [client data]
		(.log js/console "sending data yo")
		(connection-protocol/send-data connection data))

	(send-message [client type data]
		(send-data client (str type data)))

	(send-handshake [client]
		"Generate a handshake string"
		(let [; String length of protocol-name, as a single raw byte
			  protocol-name-length (byteArrayToString [13])
			  protocol-name "BitTorrent protocol"
			  reserved (byteArrayToString [00 00 00 00 00 00 00 01])
			  info-hash (torrent :info_hash)
			  data (str protocol-name-length protocol-name reserved info-hash "peer id")]
			; (.log js/console "handshake" data)
			; (js* "debugger;")
			data
			; (send-data client data)
			))

	(keep-alive 
		[client]
		(.setTimeOut js/window #(send-data % "") (* 60 1000) client))

	(handle-data [client data]
		; make sure our data is a binary array
		(let [data (handle-data connection data)]

			))

	(recieve-handshake [client data]
		(if (and
			 (= (torrent :info-hash) (data :info-hash))
			 (= (.peer-id connection) (data :peer-id)))
			; If the handshake went well then start using this peer
			(dispatch/fire :connected-peer [torrent connection])
			; Otherwise break the connection
			(dispatch/fire :error-peer [torrent connection])))

	)

(defn generate-peer
	"Given a connection create a bitorrent peer and
	send a handshake"
	[torrent connection]
	(let [client (BittorrentClient. torrent connection)
		  handshake (send-handshake client)]
		  (send-data client handshake)
		; (.log js/console "generating peer" peer-id)
		
		client))