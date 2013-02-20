(ns torrent-client.clj.server
  (:require [noir.server :as server]))

(server/load-views-ns 'torrent-client.views)

(defn -main [& m]
  (let [mode (keyword (or (first m) :dev))
        port (Integer. (get (System/getenv) "PORT" "8091"))]
    ; (cljs/start mode cljs-options)
    (server/start port {:mode mode
                        :ns 'torrent-client})))