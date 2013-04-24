(ns torrent-client.core.incubator)

; https://github.com/clojure/core.incubator/blob/master/src/main/clojure/clojure/core/incubator.clj#L56
(defn dissoc-in
  "Dissociates an entry from a nested associative structure returning a new
  nested structure. keys is a sequence of keys. Any empty maps that result
  will not be present in the new structure."
  [m [k & ks :as keys]]
  (if ks
    (if-let [nextmap (get m k)]
      (let [newmap (dissoc-in nextmap ks)]
        (if (seq newmap)
          (assoc m k newmap)
          (dissoc m k)))
      m)
    (dissoc m k)))

(defn aget-in [a keys]
  (reduce #(aget % %2) keys a))