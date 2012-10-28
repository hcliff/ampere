(ns torrent-client.client.protocol.main)

(defprotocol Protocol
  (watch-connection [client] "Start listening to the connection for data")
  (send-data [client data] [client type data] "")
  (send-handshake [client] "")
  (send-choke [client] "")
  (send-unchoke [client] "")
  (send-interested [client] "")
  (send-not-interested [client] "")
  (send-have [client index] "")
  (send-bitfield [client] "")
  (send-request [client index begin piece] "")
  (send-piece [client index begin piece] "")
  (send-cancel [client index begin piece] "")

  (recieve-handshake [client data])
  (recieve-bitfield [client data])


  ; (keep-alive [client] "Fire a keep-alive every 60 seconds")
  ; (handle-data [client data] "")
  ; H.C syntax (send-interested [client] [client optional] "whatever")
  )