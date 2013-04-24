(ns torrent-client.core.queue
  (:use [torrent-client.core.incubator :only [dissoc-in]])
  (:refer-clojure :exclude [conj! disj! contains? dissoc!])
  (:require [cljconsole.main :as console]))

; A wrapper around items we want to queue to allow seperate meta handling
; this allows for queuing of strings and numbers
(deftype QueueEntry [obj _meta]
  Object
  (toString [_] obj)
  IEquiv
  (-equiv [_ other]
    (identical? obj other))

  IMeta
  (-meta [_] _meta)
  IWithMeta
  (-with-meta [_ new-meta] (QueueEntry. obj new-meta)))

(defn queue-entry [obj]
  "Provide metadata wrapping for objects without it"
  (QueueEntry. obj nil))

(defn build-entry [obj]
  "If metadata can't nativly be attached to the object wrap it in a queueobject"
  (if ((some-fn string? number?) obj)
    (queue-entry obj)
    obj))

(defn with-data []
  {:added (.getTime (js/Date.))
   :ack false})

(defn contains? [queues k1 k2]
  ; Watch the order here, use QueueEntry's IEquiv, not k2s
  (some #(= % k2) (@queues k1)))

(defn dissoc! [queues & [keys]]
  (swap! queues dissoc-in keys))

(defn- conj-set [c args]
  "Create a set or conjoin to one
  update-in  ... conj would result in a list (which has no disj support)"
  (if c
    (conj c args)
    #{args}))

(defn- hash-key [k]
  (if-not ((some-fn string? number?) k)
    (hash k)
    k))

(defn conj! [queues k o]
  "Marks that we have started fetching a piece"
  (let [o (build-entry o)
        entry (with-meta o (with-data))]
    (swap! queues update-in [k] conj-set entry)))

(defn disj! [queues k1 k2]
  (let [items (filter #(= % k2) (@queues k1))]
    (apply swap! queues update-in [k1] disj items)))

(defn expired? [life object]
  "Has an object been around for longer than it is permitted"
  (let [max-life (- (.getTime (js/Date.)) life)]
    (-> object meta :added (partial >= life))))

(defn expire [queues life]
  "Given a collection of queues, remove expired pieces"
  (doseq [[k c] @queues
          :let [c (filter (partial expired? life) c)]]
    (console/info "Expiring pieces" (map str c))
    (map (partial disj! k) c)))