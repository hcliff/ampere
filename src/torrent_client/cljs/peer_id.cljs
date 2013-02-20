(ns torrent-client.cljs.peer-id
  (:require
    [torrent-client.cljs.core.dispatch :as dispatch]
    [goog.string :as string]
    [goog.crypt :as crypt])
  (:use 
    [torrent-client.cljs.core.crypt :only [sha1]]))

; Create the unique peer-id atom
; nil is an invalid peer-id and should be switched
; on domready
(def peer-id (atom nil))

(defn generate-peer-id []
  "Generate a unique 20 byte peer-id"
  (let [; The client id identifies ampere
        client-id "AM1-0-0--"
        ; And a random string - note that this is 
        ; partially based from the current date
        random-string (string/getRandomString)
        sha (crypt/byteArrayToHex (sha1 random-string))]
    (str client-id (subs sha 0 (- 20 (count client-id))))))

(dispatch/react-to #{:document-ready} (fn [_]
  (reset! peer-id (generate-peer-id))))