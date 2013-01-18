(ns torrent-client.client.storage
	(:require
    [torrent-client.client.core.dispatch :as dispatch]
    [torrent-client.client.core.db :as db])
  (:use-macros [async.macros :only [let-async]]))

; An atom other db dependant files can use for db connection
(def connection (atom nil))

; A list of the objectstores available to us
; this is useful for managing versioning
(def object-stores 
  "All the object stores ampere wll use
   NOTE: key-path cannot have dashes"
  [{:name "metainfo"}])

; ;;************************************************
; ;; DB setup and initial data pull
; ;;************************************************

(dispatch/react-to #{:document-ready} (fn []
  (let-async [database (db/open-database "ampere" "3.0" object-stores)]
    (let [transaction (db/create-transaction database ["metainfo"] "readonly")
          object-store (.objectStore transaction "metainfo")
          ; And finally fetch all our data from the metainfo objectStore
          objects (.getAll object-store)]
      ; Swap out the atom with our db connection
      (reset! connection database)
      ; When the entries are loaded from the db add them
      (.addCallback objects (fn [torrents]
        (doseq [torrent torrents]
          (dispatch/trigger :add-metainfo-object torrent))))))))