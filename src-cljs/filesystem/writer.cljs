(ns filesystem.writer
  (:use-macros [async.macros :only [let-async async]]))

(defn- unbind-events! [writer]
  (aset writer "onerror" nil)
  (aset writer "onwriteend" nil))

(defn- bind-events! [writer success-callback error-callback]
  "When an event triggers, unbind it to prevent multiple firing"
  (aset writer "onwriteend" (juxt #(unbind-events! writer) success-callback))
  (aset writer "onerror" (juxt #(unbind-events! writer) error-callback)))

(defn truncate [writer length]
  (async [success-callback error-callback]
    (bind-events! writer success-callback error-callback)
    (.truncate writer length)))

(defn write [writer data]
  (async [success-callback error-callback]
    (if (nil? data)
      (success-callback))
    (when-not (nil? data)
      (bind-events! writer success-callback error-callback)
      (.write writer data))))

(defn seek [writer position]
  (.seek writer position))