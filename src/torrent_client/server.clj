(ns torrent-client.server
  (:require [noir.server :as server]
            [noir.cljs.core :as cljs])
	(:use [clojure.repl]
				[cljs.repl :only (repl)]
				[cljs.repl.browser :only (repl-env)]))

(server/load-views-ns 'torrent-client.views)
(def cljs-options {:advanced {:externs ["externs/jquery.js"]}})

(defn -main [& m]
  (let [mode (keyword (or (first m) :dev))
        port (Integer. (get (System/getenv) "PORT" "8091"))]
    (cljs/start mode cljs-options)
    (server/start port {:mode mode
                        :ns 'torrent-client})))

(def env (repl-env))
(defn cljs-repl []
	(repl env))