(ns torrent-client.storage
	(:require
    [torrent-client.core.dispatch :as dispatch]
    [torrent-client.core.db :as db])
  (:use-macros [async.macros :only [let-async]]))

; An atom other db dependant files can use for db connection
(def connection (atom nil))

; A list of the objectstores available to us
; this is useful for managing versioning
(def object-stores 
  "All the object stores ampere wll use
   NOTE: key-path cannot have dashes"
  [{:name "metainfo"}])

; NOTE: edge case on magnet links, they will try to add before the db is ready

;;************************************************
;; DB setup and initial data pull
;;************************************************

(dispatch/react-to #{:document-ready} (fn []
  (let-async [database (db/open-database "ampere12" 1 object-stores)]
    (.info js/console "Opened indexeddb")
    ; Swap out the atom with our db connection
    (reset! connection database)
    (let [transaction (db/create-transaction database ["metainfo"] "readonly")
          object-store (.objectStore transaction "metainfo")
          ; And finally fetch all our data from the metainfo objectStore
          objects (.getAll object-store)]
      ; When the entries are loaded from the db add them
      (.addCallback objects (fn [torrents]
        (doseq [torrent (js->clj torrents :keywordize-keys true)]
          (dispatch/fire :add-metainfo-db torrent))))))))

;;************************************************
;; Maintaining torrent state
;;************************************************

(defn- write-metadata-to-db [metainfo]
  "We can function without indexeddb, so don't crash if there's no connection"
  (if @connection
    (let [transaction (db/create-transaction @connection ["metainfo"] "readwrite")
          object-store (.objectStore transaction "metainfo")]
      (assoc! object-store (metainfo :pretty-info-hash) metainfo))))

(dispatch/react-to #{:started-torrent} (fn [_ torrent]
  "When a torrent is started we should set up a handler in the db"
  (add-watch torrent :update-db (fn [_ _ _ new-metainfo]
    (write-metadata-to-db new-metainfo)))
  (swap! torrent identity)))