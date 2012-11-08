(ns torrent-client.client.polyfills.prefix)

(defn prefix 
  "Given the name of a feature and optional browser overrides
  provide a consistant interface for accessing it"
  [name & specifics]
  (let [; The official version and the vendor prefixes
        prefixes ["" "webkit" "moz" "ms"]
        ; Loop through each prefix, building a dictionary of them
        prefixes (into {} (map (juxt identity #(str % name)) prefixes))
        ; Override any prefixes given in specifics
        prefixes (vals (merge prefixes specifics))
        ; Fetch the prefixes from the window
        prefixes (map #(aget js/window %) prefixes)]
    ; Return the first value thats not null
    (some #(if-not (nil? %) %) prefixes)))

(def IndexedDB 
  (prefix "IndexedDB"))

(def PeerConnection
  (prefix "PeerConnection" {
    :webkit-rtc "webkitRTCPeerConnection"
    :rtc "RTCPeerConnection"}))