(ns torrent-client.browser.features
  (:require [torrent-client.browser.prefix :as prefix]))

;************************************************
; Browser feature detection
;************************************************

(defn create-data-channel? [_]
  "Rough check for datachannel support, not 100% accurate"
  (let [pc (prefix/RTCPeerConnection. nil)]
    (and pc (aget pc "createDataChannel"))))

(defn persistent-storage? [_]
  "Does this browser support permanant locastorage"
  (not (and (nil? prefix/PersistentStorage)
  			(nil? (.-webkitStorageInfo js/window)))))

(defn supported? [browser]
  "Sniff support for required features"
  ((every-pred create-data-channel? persistent-storage?) browser))