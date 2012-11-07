(ns torrent-client.client.main
  (:require 
    [torrent-client.client.core.dispatch :as dispatch]
    [noir.cljs.client.watcher :as watcher]
    [clojure.browser.repl :as repl]
    [goog.events :as events]
    [goog.events.FileDropHandler :as FileDropHandler]
    [goog.string :as string])
  (:use 
    [jayq.core :only [$ on attr append document-ready empty]]
    [torrent-client.jayq.core :only [input-files event-files modal]]
    [crate.binding :only [bound]])
  (:use-macros [crate.def-macros :only [defpartial]]))

;[torrent-client.client.peer-id]
    ; [torrent-client.client.torrent]
    ; [torrent-client.client.tracker]

;;************************************************
;; Dev stuff
;;************************************************

(watcher/init)
; (repl/connect "http://localhost:9000/repl")

;;************************************************
;; Atoms & state
;;************************************************

; A vector of the torrents currently in use
(def torrents (atom []))

; A vector of files currently being used in the create form
(def create-form-files (atom []))

;;************************************************
;; Code
;;************************************************

(def $document ($ js/document))
(def $add-modal ($ "#add-modal"))
(def $add-form ($ "#add-form"))
(def $create-modal ($ "#create-modal"))
(def $create-form ($ "#create-form"))
(def $torrents ($ "tbody"))

;;************************************************
;; Adding metainfo and files
;;************************************************

(defn metainfo-file?
  "Return true if a file is metainfo file"
  [file]
  ; The proper way to detect torrents is to sniff the type
  (or (= (.-type file) "application/x-bittorrent")
      ; But my ubuntu chrome build returns blank
      (and (= (.-type file) "")
           (string/caseInsensitiveEndsWith (.-name file) ".torrent"))))

; Set up drag and drop for the page
(let [dropzone js/document
      handler (events/FileDropHandler. dropzone true)]
  ; Listen for any files dropped on the window
  (events/listen handler (-> events/FileDropHandler .-EventType .-DROP) (fn [e]
    (let [files (event-files e)
          ; check out how many .torrent files we have here
          metainfo (vec (filter metainfo-file? files))]
    (cond
      ; If just given torrents, download them
      (and (= (count files) (count metainfo)))
      (doseq [file files]
        (dispatch/fire :add-metainfo-file file))

      ; Given no .torrents, just files to create a torrent
      (= (count metainfo) 0)
      (dispatch/fire :add-torrent-files files)

      :else
      (dispatch/fire :error "To load an existing .torrent use \"add torrent\""))
    ))))

(dispatch/react-to #{:add-torrent-files} (fn [_ files]
  (.modal $add-modal "hide")
  (.modal $create-modal "show")
  ; Add all our files to create-form
  (apply (partial swap! create-form-files conj) files)
  ; And render them
  ; H.C: could this be done through an atom watch?
  (doseq [file files]
    (append ($ ".files") (torrent-file-badge file)))))

(dispatch/react-to #{:add-metainfo-file} (fn [_ _]
  (.modal $create-modal "hide")
  (.modal $add-modal "hide")))

(on $create-form :submit (fn [e]
  (.preventDefault e)
  (dispatch/fire :create-torrent {
    :name (val ($ "[name=name]" $create-form))
    :tracker (val ($ "[name=tracker]" $create-form))
    :files @create-form-files})
  (modal $create-modal "hide")))

(on $create-modal :hide (fn [e]
  ; Clear input values
  (.reset (first $create-form))
  ; And reset the files
  (empty ($ ".files") $create-modal)
  (reset! create-form-files [])))

(on $add-form :submit (fn [e]
  (do (.preventDefault e)
    ; Get the files given to us
    (let [file (first (input-files ($ "[name=metainfo]" $add-form)))]
      (dispatch/fire :add-metainfo-file file)
    (modal ($ "#add-modal") "hide")))))

(on $add-modal :hide (fn [e]
  (.reset (first $add-form))))

;;************************************************
;; Templating
;;************************************************

(defn size-format [{:keys [downloaded size]}]
  (* 100 (/ size downloaded)))

(defpartial torrent-file-badge [content]
  [:span.label (.-name content)])

(defpartial torrent-row [content]
  [:tr
    [:td.flex3 (content :name)]
    [:td.flex1.size (content :size)]
    [:td.flex5
      [:div.progress.progress-striped.active
        [:div.bar]
        [:label.label "about one hour remaining"]
      ]]
    [:td.flex1.speed "700" [:small "kb/s"]]
    [:td.actions
      [:div.btn-group
        [:button.btn [:i.icon-folder-open]]
        [:button.btn [:i.icon-pause]]
        [:button.btn [:i.icon-trash]]
      ]]])

; (def downloading? [torrent]
;   (contains? [:downloading :downloading-paused (state/current torrent)]))

; (def finished? [torrent]
;   (contains? [:finished :finished-paused (state/current torrent)]))

; When a torrent changes status or is added update the counts
; (add-watch torrents nil (fn [_ _ old-torrents new-torrents]
;   (letfn [(count-type [type value]
;             (count (filter type value)))
;           (count-value [values]
;             (map count-type [downloading? finished?] values))
;           (compare-count [type]
;             (apply - (map #(count-type type %1) [old-torrents new-torrents])))]
;   (let [[new-downloading, new-finished] (count-value new-torrents)
;         [diff-downloading, diff-finished] (compare-count )]
;     (text ($ :downloading-badge) finished)
;     (text ($ :finished-badge) finished)
;     (when (pos? diff-downloading)
;       ())
;     )))

;(defn tab-machine []
  ; (let [me (machine {:label :tab-machine :current :downloading})]

  ;   ; When a torrent finished automatically show the finished tab
  ;   (dispatch/react-to #{:finished-torrent} (fn [_ _]
  ;     (state/set! me :finished)))

  ;   (defstate me :downloading
  ;     (in []
  ;       ; hide all finished (finished, finished-paused)
  ;       (hide ($ "[.^=finished]" $torrents))
  ;       ; show all downloading (downloading, downloading-paused)
  ;       (show ($ "[.^=downloading]" $torrents))
  ;       (tab ($ :downloading-tab $torrents) "show")))

  ;   (defstate me :finished
  ;     (in []
  ;       (hide ($ "[.^=downloading]" $torrents))
  ;       (show ($ "[.^=finished]" $torrents))
  ;       (tab ($ :finished-tab $torrents) "show")))

  ;   ))

;;************************************************
;; Client notifications
;;************************************************

; (def webkit-notifications (.-webkitNotifications js/window))


; TODO add options page with a "show notifications box"

;   ; returns 0 when we have persmission 
;   (if-not (= 0 (.checkPermission webkit-notifications))
;     (.requestPermission webkit-notifications))))

; ; When a torrent completes, try to inform the user
; (dispatch/react-to #{:finished-torrent} (fn [_ torrent]
;   ; If the user is currently on the site don't show the notification
;   (if-not (.hasFocus js/document)
;     (.createNotification webkit-notifications
;       nil 
;       "notification title"
;       "notification content"
;       ))))

(document-ready (fn [e]
  (dispatch/fire :document-ready {})))

(.log js/console "js loaded ok")