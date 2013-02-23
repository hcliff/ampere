(ns torrent-client.core.db
  (:require [goog.db :as db]
            [goog.db.Cursor :as Cursor]
            [goog.db.KeyRange :as KeyRange]
            [goog.db.ObjectStore :as ObjectStore]
            [goog.db.IndexedDb :as IndexedDb]
            [torrent-client.polyfills.prefix :as prefix])
  (:use 
    [torrent-client.core.string :only [camel-case selector-case]])
  (:use-macros [async.macros :only [async]]))

;;************************************************
;; Idiomatic clojure wrapper around the objectstore 
;;************************************************

(extend-type db/ObjectStore
  
  ILookup
  (-lookup
    [os k]
      (js->clj (.get os (clj->js k))))

  ; ICounted
  ; (-count [os] (.count (.-store_ os)))

  ; ; IFn
  ; ; (-invoke
  ; ;   [os k]
  ; ;     (-lookup os k))

  ITransientAssociative
  (-assoc! 
    [os k v]
      (.put os (clj->js v) (clj->js k)))

  ; ITransientMap
  ; (-dissoc! [os k]
  ;   (.delete os (clj->js k)))

  )

;;************************************************
;; Wrappers around the closure library
;;************************************************

(defn create-object-store [db name options]
  (.createObjectStore db name (clj->js options)))

(defn create-transaction [db object-stores method]
  (.createTransaction db (clj->js object-stores) method))

;;************************************************
;; Async helpers
;;************************************************

(defn open-database 
  "Manages versioning of object-stores for a database"
  [database version object-stores]
  (async [success-callback error-callback]
    (let [request (.open prefix/indexedDB database version)]
      (letfn [(success [e]
                (let [db (.-result request)]
                  (success-callback (db/IndexedDb. db))))

              (upgrade-needed [e]
                (let [db (.-result request)]
                  ; Create all the object stores
                  (doseq [store object-stores]
                    (when-not (.contains (.-objectStoreNames db) (:name store))
                      (create-object-store db (:name store) {
                        :keyPath (:key-path store)
                        :autoIncrement (:auto-increment store)
                        })))
                  db))]
        (set! (.-onerror request) error-callback)
        (set! (.-onsuccess request) success)
        (set! (.-onupgradeneeded request) upgrade-needed)))))