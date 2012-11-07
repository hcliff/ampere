(ns torrent-client.client.core.db
  (:require [goog.db :as db]
            [goog.db.ObjectStore :as ObjectStore]
            [goog.db.IndexedDb :as IndexedDb])
  (:use [jayq.util :only [clj->js]])
  (:use-macros [async.macros :only [async]]))

;;************************************************
;; Idiomatic clojure wrapper around the objectstore 
;;************************************************

(extend-type db/ObjectStore
  
  ILookup
  (-lookup
    [os k]
      (js->clj (.get os (name k))))

  ; ; ; ICounted
  ; ; ; (-count  [ls] (.getCount ls))

  ; ; IFn
  ; ; (-invoke
  ; ;   [os k]
  ; ;     (-lookup os k))

  ITransientAssociative
  (-assoc! 
    [os k v]
      (.put os (clj->js v) (name k)))

  ; ITransientMap
  ; (-dissoc! [os k]
  ;   (.remove os (name k)))

  )

; ;;************************************************
; ;; Wrappers around the closure library
; ;;************************************************

(defn create-object-store [db name options]
  (.createObjectStore db name (clj->js options)))

(defn create-transaction [db object-stores method]
  (.createTransaction db (clj->js object-stores) method))

(def indexedDB
  (or (.-indexedDB js/window) (.-webkitIndexedDB js/window)
      (.-mozIndexedDB js/window) (.-msIndexedDB js/window)))

; ; H.C: should work?
; ; (def indexedDB
; ;   (apply or (map #(aget js/window %) 
; ;                  ["indexedDB" "webkitIndexedDB" "mozIndexedDB" "msIndexedDB"])))
; ; (def indexedDB 
; ;   (apply or ((juxt #(.-indexedDB %) #(.-webkitIndexedDB %)
; ;                    #(.-mozIndexedDB %) #(.-msIndexedDB %)) js/window)))

; ;;************************************************
; ;; Async helpers
; ;;************************************************

(defn open-database 
  "Deal with the impressive amount of shit around IndexedDB.
  Chrome at the time of writing doesn't support onupgraderequired
  which is the neater method of versioning and requires a shim"
  [database version object-stores]
  (async [success-callback]
    (let [request (.open indexedDB database version)]
      (letfn [(success [e]
                (let [db (.-result request)]
                  (if (.-setVersion db)
                    (let [version (.setVersion (.-result request) version)]
                      ; once the versioning is actually done we can
                      ; proceed to create the object store
                      (set! (.-onsuccess version) upgrade-required)
                      (set! (.-onerror version) #(.log js/console "version" %))
                      )
                     (success-callback (db/IndexedDb. db)))))

              (upgrade-required [e]
                (let [db (.-result request)]
                  ; Create all the object stores
                  (doseq [store object-stores]
                    (if-not (.contains (.-objectStoreNames db) (:name store))
                      (create-object-store db (:name store) {
                        :keyPath (:key-path store)
                        :autoIncrement (:auto-increment store)
                        }))
                  ; More chrome BS, need to reopen db to use datastore
                  (let [request (.open indexedDB database version)
                        success-callback 
                          #(success-callback (db/IndexedDb. (.-result request)))]
                    (set! (.-onsuccess request) success-callback)))))
              ]

        (set! (.-onsuccess request) success)
        (set! (.-onupgraderequired request) upgrade-required)))))