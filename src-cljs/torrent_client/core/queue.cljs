(ns torrent-client.core.queue)

(defn with-timestamp [obj]
  "Add the current time to an objects metadata"
  (with-meta obj {:added (.getTime (js/Date.))}))

(defn work! [queues k o]
  "Marks that we have started fetching a piece"
  (swap! queues update-in [k] conj (with-timestamp o)))

(defn consume! [queues k o]
  "Relinquish a piece"
  (swap! queues update-in [k] disj o))

(defn expired? [life object]
  "Has an object been around for longer than it is permitted"
  (let [max-life (- (.getTime (js/Date.)) life)]
    (-> object meta :added (partial >= life))))

(defn expire [queues life]
  "Given a collection of queues, remove expired pieces"
  (doseq [[k c] @queues
          :let [c (filter (partial expired? life) c)]]
    (console/info "Expiring pieces" c)
    (map (partial consume! k) (keys c))))