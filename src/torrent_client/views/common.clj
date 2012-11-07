(ns torrent-client.views.common
  (:require [noir.cljs.core :as cljs])
  (:use [noir.core :only [defpartial]]
        [torrent-client.hiccup.page :only [include-less]]
        [hiccup.page :only [html5 include-css include-js]]
        [hiccup.form :only [label file-upload submit-button text-field]]
        [hiccup.element :only [link-to]]
        [hiccup.util]))

(defpartial layout [& content]
            (html5
              [:head
                [:title "Ampere, abusus non tollit usum"]
                [:link {:href "favicon.ico" :rel "shortcut-icon" :type "image/x-icon"}]
                (include-css "/css/bootstrap.css")
                (include-js "js/jquery.js" "/js/less.js" "/js/underscore.js" "js/humane.js"
                  "js/bootstrap/bootstrap-modal.js" "http://js.pusher.com/1.12/pusher.min.js")
              ]
              [:body
                [:div#create-modal.modal.hide
                  [:div.modal-header
                    [:h3 "Create a torrent"]
                    [:button.close {:type "button" :data-dismiss "modal"}]]
                  [:form#create-form.modal-body.form-horizontal
                    [:div.control-group
                      (label {:class "control-label"} "name" "name")
                      [:div.controls
                        (text-field {:placeholder "My great torrent"} "name")]]
                    [:div.control-group
                      (label {:class "control-label"} "tracker" "tracker")
                      [:div.controls
                        (text-field {:type "url" :placeholder "http://"} "tracker")]]
                    [:div.control-group
                      (label {:class "control-label"} "files" "files")
                      [:div.controls
                        [:div.files]
                        [:span.help-inline "Drag files from your computer to add them"]]
                      ]]
                  [:div.modal-footer
                    [:a.btn {:data-dismiss "modal"} "close"]
                    (submit-button {:class "btn btn-primary" :form "create-form"} "create")]
                  ]
                [:div#add-modal.modal.hide
                  [:div.modal-header
                    [:h3 "Add a torrent"]
                    [:button.close {:type "button" :data-dismiss "modal"}]]
                  [:form#add-form.modal-body.form-horizontal
                    [:div.control-group
                      (label {:class "control-label"} "metainfo" ".torrent")
                      [:div.controls
                        (file-upload "metainfo")
                        [:span.help-block "Or drag a file from your computer"]
                      ]]]
                  [:div.modal-footer
                    [:a.btn {:data-dismiss "modal"} "close"]
                    (submit-button {:class "btn btn-primary" :form "create-form"} "create")]
                  ]
                [:div.navbar.navbar-fixed-top
                  [:div.navbar-inner
                    [:div.container-fluid
                      [:a.brand "Ampere"]
                      [:div.nav-collapse.pull-right
                        [:ul.nav
                          [:li
                            (link-to {:role "button" :data-toggle "modal"} "#add-modal" 
                              "Add Torrent")]
                          [:li
                            (link-to {:role "button" :data-toggle "modal"} "#create-modal" 
                              "Create Torrent")]]]
                  ]]]
                [:div.container-fluid
                  [:div.row-fluid
                    [:ul.nav.nav-tabs
                      [:li.active 
                        [:a {:data-toggle "tab"}
                          "Downloading " [:span#downloading-count.badge "0"]]]
                      [:li
                        [:a {:data-toggle "tab"}
                          "Finished " [:span#finished-count.badge "0"]]]
                      ]
                    [:div.tab-content
                      [:div#home.tab-pane-active
                        [:table.table.table-striped.body
                          [:thead
                            [:th.flex3 "Name"]
                            [:th.flex1.size "Size"]
                            [:th.flex5 "Progress"]
                            [:th.flex1.speed "Speed"]
                            [:th.actions ""]
                            ]
                          [:tbody]
                        ]]]]]
                (cljs/include-scripts)
                ]))