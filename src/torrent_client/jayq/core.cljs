(ns torrent-client.jayq.core
  (:use [jayq.util :only [clj->js]]))

(defn append [$elem content]
  (if (sequential? content)
    ; TODO: Should be able to apply .append?
    (doseq [string content]
      (append $elem string))
    (.append $elem content)))

(defn input-files [$elem]
  "Returns a vector of files for a given input"
  (filelist-files (first $elem)))

(defn event-files 
  "Takes a goog event and returns the files
   TODO: also get jquery events working"
  [event]
  (filelist-files (-> event .getBrowserEvent .-dataTransfer)))

(defn filelist-files [filelist]
  (let [filelist (.-files filelist)]
    (vec (for [k (js-keys filelist)
               :let [value (aget filelist k)]
               :when (identical? (type value) js/File)] 
      value))))

(defn param [obj]
  (.log js/console "PARAM YO")
  (.param js/jQuery (clj->js obj)))

(defn modal [$elem params]
  (.modal $elem params))

(defn tab [$elem params]
  (.tab $elem params))

(defn css
  ([$elem opts]
     (.css $elem (clj->js opts)))
  ([$elem p v]
     (.css $elem (name p) v)))