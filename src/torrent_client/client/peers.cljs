(ns torrent-client.client.peers
  (:use [torrent-client.client.peer :only [generate-peer]])
  (:require [torrent-client.client.core.dispatch :as dispatch]))

(dispatch/react-to #{:add-connection} (fn [_ [torrent connection]]
  "A new connection has been established"
  (.log js/console "new connection" torrent connection)
  (let [peer (generate-peer torrent connection)]

  )))