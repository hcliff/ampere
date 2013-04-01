(ns filesystem.entry
  (:use-macros [async.macros :only [async]]))

(defn create-writer [file-entry]
  (async [success-callback error-callback]
    (letfn [(error-callback [e]
              (js* "debugger;")
              (.error js/console e))]
      (.createWriter file-entry success-callback error-callback))))

(defn get-entry
  "Return a fileentry (information on the file)"
  ([filesystem path] (get-entry filesystem path {}))
  ([filesystem path options]
    (async [success-callback error-callback]
      (.getFile (.-root filesystem) path (clj->js options) 
        success-callback error-callback))))

(defn file
  "Given a FileEntry return the underlying file object"
  [entry]
  (async [success-callback error-callback]
    (.file entry success-callback)))