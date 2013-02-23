(ns torrent-client.server
  (:require [noir.server :as server]))

(server/load-views-ns 'views)

(defn -main [& m]
  (let [mode (keyword (or (first m) :dev))
        port (Integer. (get (System/getenv) "PORT" "8091"))]
    (server/start port {:mode mode
                        :ns 'torrent-client})))