(ns torrent-client.ui.views 
  (:require 
    [clojure.string :as string]
    [crate.core :as crate]
    [crate.form :as form])
  (:use
    [torrent-client.torrent :only [active? paused? completed? downloading? has-full-metadata?]]
    [crate.binding :only [bound]]
    [goog.format :only [numBytesToString]]
    [torrent-client.files :only [files]])
  (:use-macros
    [crate.def-macros :only [defpartial]]))

;;************************************************
;; View methods
;;************************************************

(defn html [& args]
  "Help crate deal with logic"
  (let [args (remove nil? args)]
    (apply crate/html args)))

(defn download-percent 
  "Percentage of pieces saved to needed, rough estimate of progress"
  [torrent]
  (let [percent (/ (torrent :pieces-written) (torrent :pieces-length))]
    (str (/ percent 0.01) "%")))

(defn total-length-to-string [{:keys [total-length]}]
  (string/lower-case (numBytesToString total-length)))

(defn time-remaining-to-string [torrent]
  "-"
  ; (if (paused? torrent)
  ;   "∞"
  ;   (let [; The number of seconds remaining
  ;         seconds (/ (torrent :total-length) (* 700 1000))]
  ;     seconds))
)

(defn torrent-speed-to-string [torrent]
  "-")

(defn file-url [file]
  "Given a file return a link to it's localstorage entry"
  (.toURL (.-file file)))

;;************************************************
;; Views
;;************************************************

(defpartial alert [content]
  [:div.alert
    [:button.close {:type "button" :data-dismiss "alert"} "×"]
    content])

(defpartial torrent-file-badge [content]
  [:span.label (.-name content)])

(defpartial share-modal [content]
  [:div.modal
    [:div.modal-header
      [:h3 (str (content :name) " is ready to share!")]
      [:button.close {:type "button" :data-dismiss "modal"}]]
    [:form#create-form.modal-body.form-horizontal
      [:div.control-group
        (form/label {:class "control-label"} "link" "download link")
        [:div.controls
          (form/text-field {:value (content :magnet-url) :class "input-xlarge"} "link")]]
      ; [:div.control-group
      ;   [:div.controls
      ;     [:a#built-download 
      ;      {:download (get-in content [:torrent-file .-name])
      ;       :title (str "download " (get-in content [:torrent-file .-name]))
      ;       :href (file-url (content :torrent-file))}
      ;       "or download the .torrent"]]]
            ]
    [:div.modal-footer
      [:a.btn {:data-dismiss "modal"} "close"]]])

(defn- torrent-progress [torrent]
  (if-not (has-full-metadata? torrent)
    [:div.progress.progress-striped.progress-success.active
      [:div.bar.bar-success {:style {:width "100%"}}]
      [:label.label "starting..."]]
    [:div {:class (str "progress progress-striped" 
                       (if (active? torrent) " active"))}
      [:div.bar {:style {:width (download-percent torrent)}}]
      [:label {:class (str "label" (if-not (active? torrent) " hide"))} 
        (time-remaining-to-string torrent)]]))

(defn- action-browse [torrent]
  (let [files (@files (torrent :pretty-info-hash))]
    (if (and (not-empty files) (completed? torrent))
      [:a.btn {:href (file-url (first files)) :target "_blank"}
        [:i.icon-folder-open]])))

(defn- torrent-actions [torrent]
  [:div.btn-group
    (if (has-full-metadata? torrent)
      (html
        [:button.btn.share
          [:i.icon-globe]]
        [:button.btn {:disabled true}
          [:i {:class (if (active? torrent) "icon-pause" "icon-play")}]]
        (action-browse torrent))
      ; Crate cannot take nil thus the if cannot be uncaught
      (html))
    [:button.btn {:disabled true}
      [:i.icon-trash]]])

(defpartial torrent-row [torrent]
  [:tr
    [:td.flex2.name (@torrent :name)]
    [:td.flex1.size (bound torrent total-length-to-string)]
    [:td.flex5.progress-td (bound torrent torrent-progress)]
    [:td.flex1.speed (bound torrent torrent-speed-to-string)]
    [:td.actions (bound torrent torrent-actions)]])