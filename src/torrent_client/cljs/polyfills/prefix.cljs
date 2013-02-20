(ns torrent-client.cljs.polyfills.prefix
  (:require [clojure.string :as string]))

(defn prefix 
  "Given the name of a feature and optional browser overrides
  provide a consistant interface for accessing it"
  [name & specifics]
  (let [; The official version and the vendor prefixes
        prefixes ["webkit" "moz" "ms"]
        ; A capitilized version
        upper-name (str (string/upper-case (subs name 0 1))
                        (subs name 1))
        ; Loop through each prefix, building a dictionary of them
        prefixes (into {} 
          (map (juxt identity #(str % upper-name)) prefixes))
        ; And add the actual w3spec version
        prefixes (assoc prefixes "" name)
        ; Override any prefixes given in specifics
        prefixes (vals (merge prefixes specifics))
        ; Fetch the prefixes from the window
        prefixes (map #(aget js/window %) prefixes)]
    ; Return the first value thats not null
    (some #(if-not (nil? %) %) prefixes)))

(def indexedDB 
  (prefix "indexedDB"))

(def RTCPeerConnection
  (prefix "RTCPeerConnection"))