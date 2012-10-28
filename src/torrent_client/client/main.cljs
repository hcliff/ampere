(ns torrent-client.client.main
  (:require 
    [torrent-client.client.core.dispatch :as dispatch]
    [noir.cljs.client.watcher :as watcher]
    [clojure.browser.repl :as repl])
  (:use 
    [jayq.core :only [$ on attr append document-ready]]
    [torrent-client.jayq.core :only [files modal]]
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

;;************************************************
;; Code
;;************************************************

(def $form ($ "#create-form"))
(def $torrents ($ "tbody"))

(on $form :submit (fn [e]
  (do (.preventDefault e)
    ; Get the files given to us
    (let [torrent-file (first (files ($ "[name=torrent]" form)))
          files (files ($ "[name=files]" form))]
      (dispatch/fire :add-torrent-file 
        {:torrent-file torrent-file :files files}))
    (modal ($ "#create-modal") "hide"))))

(defn size-format [{:keys [downloaded size]}]
  (* 100 (/ size downloaded)))

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

(dispatch/react-to #{:update-torrent} (fn [_ torrent]
  (.log js/console "body about to update" torrent @torrent (torrent-row @torrent) $torrents)
  (append $torrents (torrent-row @torrent))
  ))

(document-ready (fn [e]
  (dispatch/fire :document-ready {})))

(.log js/console "js loaded ok")