(ns torrent-client.client.channel)

(defn generate-channel [connection torrent]
  (let [channel (.createDataChannel connection (@torrent :pretty-info-hash))]
    (set! (.-binaryType channel) "arraybuffer")
    channel))