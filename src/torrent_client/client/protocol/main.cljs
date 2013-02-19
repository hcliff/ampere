(ns torrent-client.client.protocol.main)

(defprotocol Protocol
  (watch-channel [client] "Start listening to the channel for data")
  (send-data [client data] [client type data] "")
  (send-handshake [client] "")
  (send-extended [client id message] [client id message data] "")
  (send-extended-handshake [client] "")
  (send-metadata-request [client piece-index] "")
  (send-metadata-piece [client piece-index data] "")
  (send-metadata-reject [client piece-index] "")
  (send-choke [client] "")
  (send-unchoke [client] "")
  (send-interested [client] "")
  (send-not-interested [client] "")
  (send-have [client index] "")
  (send-bitfield [client] "")
  (send-request [client index begin piece] "")
  (send-block [client index begin piece] "")
  (send-cancel [client index begin piece] "")

  (receive-handshake [client data])
  (receive-bitfield [client data])


  ; (keep-alive [client] "Fire a keep-alive every 60 seconds")
  ; (handle-data [client data] "")
  ; H.C syntax (send-interested [client] [client optional] "whatever")
  )