(ns torrent-client.client.main
  (:require 
    [torrent-client.client.core.dispatch :as dispatch]
    [noir.cljs.client.watcher :as watcher]
    [clojure.browser.repl :as repl]
    [goog.events :as events]
    [goog.events.FileDropHandler :as FileDropHandler]
    [goog.string :as gstring]
    [clojure.string :as string]
    [waltz.state :as state])
  (:use
    [torrent-client.client.pieces :only [files]]
    [jayq.core :only [$ on attr document-ready empty text]]
    [torrent-client.jayq.core :only [append input-files event-files modal tab]]
    [torrent-client.client.waltz :only [machine]]
    [crate.binding :only [bound]]
    [goog.format :only [numBytesToString]])
  (:use-macros 
    [waltz.macros :only [in out defstate defevent]]
    [crate.def-macros :only [defpartial]]))

;;************************************************
;; Dev stuff
;;************************************************

(watcher/init)
; (repl/connect "http://localhost:9000/repl")

;;************************************************
;; Atoms & state
;;************************************************

; A vector of the torrents currently in use
; the key is the pretty-info-hash
(def torrents (atom {}))

; When a torrent is started, add it to the torrents
(dispatch/react-to #{:started-torrent} (fn [_ torrent]
  (.log js/console "Adding to torrents atom" torrent)
  (swap! torrents assoc (@torrent :pretty-info-hash) torrent)))

; A vector of files currently being used in the create form
(def create-form-files (atom []))

;;************************************************
;; jquery selectors
;;************************************************

(def $document ($ js/document))
(def $add-modal ($ "#add-modal"))
(def $add-form ($ "#add-form"))
(def $create-modal ($ "#create-modal"))
(def $create-form ($ "#create-form"))
(def $seed-modal ($ "#seed-modal"))
(def $seed-form ($ "#seed-form"))
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
           (gstring/caseInsensitiveEndsWith (.-name file) ".torrent"))))

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
  (empty ($ ".files" $create-modal))
  (reset! create-form-files [])))

(on $add-form :submit (fn [e]
  (.preventDefault e)
  ; Get the files given to us
  (let [file (first (input-files ($ "[name=metainfo]" $add-form)))]
    (dispatch/fire :add-metainfo-file file)
  (modal ($ "#add-modal") "hide"))))

(on $add-modal :hide (fn [e]
  (.reset (first $add-form))))

(on $seed-form :submit (fn [e]
  (.preventDefault e)
  (.log js/console "fired submit")
  (let [metainfo (first (input-files ($ "[name=metainfo]" $seed-form)))
        file-entries [(first (input-files ($ "[name=files]" $seed-form)))]]
    (dispatch/fire :add-metainfo-file-and-files [metainfo file-entries])
  )))

;;************************************************
;; Templating
;;************************************************

(def elements (atom {}))

(dispatch/react-to #{:started-torrent} (fn [_ torrent]
  (let [element (torrent-row torrent)
        file (@files (@torrent :pretty-info-hash))]
    ; Render the torrent row and add it to the atom
    (swap! elements (partial merge-with concat) {(@torrent :pretty-info-hash) [element]})
    (append $torrents element)
  )))

(defpartial torrent-file-badge [content]
  [:span.label (.-name content)])

(defn bound-class 
  "Given a func that returns boolean display a css class"
  [torrent func class-name & [negative-class-name]]
  (letfn [(which-class [torrent]
            (if (func torrent)
              class-name
              negative-class-name))]
    (bound torrent which-class)))

(defn download-percent [torrent]
  (str "50%"))

(defn total-length-to-string [{:keys [total-length]}]
  (string/lower-case (numBytesToString total-length)))

(defn time-remaining-to-string [torrent]
  "∞"
  ; (if (paused? torrent)
  ;   "∞"
  ;   (let [; The number of seconds remaining
  ;         seconds (/ (torrent :total-length) (* 700 1000))]
  ;     seconds))
)

(defn torrent-speed-to-string [torrent]
  "700kb/s"
  )

(defpartial torrent-row [torrent]
  [:tr
    [:td.flex3 (@torrent :name)]
    [:td.flex1.size (total-length-to-string @torrent)]
    [:td.flex5
      [:div {:class (bound-class torrent active? 
                      "progress progress-striped active"
                      "progress progress-striped")}
        [:div.bar {:style {:width (bound torrent download-percent)}}]
        [:label {:class (bound-class torrent active? "label" "label hide")} 
          (bound torrent time-remaining-to-string)]
      ]]
    [:td.flex1.speed (bound torrent torrent-speed-to-string)]
    [:td.actions
      [:div.btn-group
        [:button {:class (bound-class torrent completed? "btn" "btn hide")}
          [:i.icon-folder-open]]
        [:button.btn 
          [:i {:class (bound-class torrent active? "icon-pause" "icon-play")}]]
        [:button.btn [:i.icon-trash]]
      ]]])


(defn active? [torrent]
  "Take either a collection or atom and return it's active status"
  (if-not (coll? torrent)
    (active? @torrent)
    (= :processed (torrent :status))))

(def paused? (complement active?))

(defn downloading? [torrent]
  "Take a collection or atom and determin if the torrent has finished"
  (if-not (coll? torrent)
    (downloading? @torrent)
    (< (torrent :size) (torrent :total-length))))

(def completed? (complement downloading?))

(dispatch/react-to #{:started-torrent :completed-torrent :stopped-torrent 
                     :paused-torrent :resumed-torrent} (fn [_ torrent]
  (let [; Only show splings that are not paused
        torrents (filter active? @torrents)
        ; Count the splings downloading (file size less than target size)
        downloading (count (filter downloading? torrents))
        ; If it's active and downloading
        completed (- (count torrents) downloading)]
  (text ($ "#downloading-count") downloading)
  (text ($ "#completed-count") completed))))

(defn tab-machine []
  (let [me (machine {:label :tab-machine :current :downloading})]

    ; When a torrent finished automatically show the finished tab
    (dispatch/react-to #{:completed-torrent} (fn [_ _]
      (state/set me :completed)))

    (on ($ "#downloading-tab") :click (fn [_]
      (state/set me :downloading)))

    (on ($ "#completed-tab") :click (fn [_]
      (state/set me :completed)))

    (defstate me :downloading
      (in []
        (empty $torrents)
        (let [torrents (filter downloading? @torrents)
          
              elements (map (comp @elements :pretty-info-hash deref) torrents)]
          (append $torrents elements))
        (tab ($ "#downloading-tab") "show")))

    (defstate me :completed
      (in []
        (empty $torrents)
        (let [torrents (filter completed? @torrents)
              elements (map (comp @elements :pretty-info-hash deref) torrents)]
          (append $torrents elements))
        (tab ($ "#completed-tab") "show")))

    ))

(tab-machine)

;************************************************
; Client notifications
;************************************************

; TODO add options page with a "show notifications box"

;   ; returns 0 when we have persmission 
;   (if-not (= 0 (.checkPermission webkit-notifications))
;     (.requestPermission webkit-notifications))))

; ; When a torrent completes, try to inform the user
; (dispatch/react-to #{:completed-torrent} (fn [_ torrent]
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