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
                  "js/bootstrap/bootstrap-modal.js" "js/bootstrap/bootstrap-tab.js"
                  "http://js.pusher.com/1.12/pusher.min.js" "js/idb_filesystem.js"
                  "js/datachannel.js")
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
                    (submit-button {:class "btn btn-primary" :form "add-form"} "create")]
                  ]

                [:div#seed-modal.modal.hide
                  [:div.modal-header
                    [:h3 "Seed a torrent"]
                    [:button.close {:type "button" :data-dismiss "modal"}]]
                  [:form#seed-form.modal-body.form-horizontal
                    [:div.control-group
                      (label {:class "control-label"} "metainfo" ".torrent")
                      [:div.controls (file-upload "metainfo")]]
                    [:div.control-group
                      (label {:class "control-label"} "files" ".torrent")
                      [:div.controls (file-upload "files")]]]
                  [:div.modal-footer
                    [:a.btn {:data-dismiss "modal"} "close"]
                    (submit-button {:class "btn btn-primary" :form "seed-form"} "create")]
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
                              "Create Torrent")]
                          [:li
                            (link-to {:role "button" :data-toggle "modal"} "#seed-modal" 
                              "Seed Torrent")]]]
                  ]]]
                [:div.container-fluid
                  (link-to {:id "demo-torrent"} "http://localhost:8091/Rescue%20You.mp3.torrent"
                    [:div.row-fluid
                      [:div.info
                        [:img.promo {:src "http://localhost/the_weeknd.jpg"}]
                        [:div.wrapper
                          [:strong "Click here to start a demo torrent"]
                          [:small "A song from The Weeknds debute mixtape, released for free, 4mb"]]
                      ]])
                  [:div.row-fluid
                    [:ul.nav.nav-tabs
                      [:li.active 
                        [:a#downloading-tab {:data-toggle "tab"}
                          "Downloading " [:span#downloading-count.badge "0"]]]
                      [:li
                        [:a#completed-tab {:data-toggle "tab"}
                          "Completed " [:span#completed-count.badge "0"]]]
                      ]
                    [:div.tab-content
                      [:div#hom.tab-pane-active
                        [:table.table.table-striped.body
                          [:thead
                            [:tr
                              [:th.flex2.name "Name"]
                              [:th.flex1.size "Size"]
                              [:th.flex5.progress-td "Progress"]
                              [:th.flex1.speed "Speed"]
                              [:th.actions ""]
                            ]]
                          [:tbody]
                        ]]]]]
                (cljs/include-scripts)
                ]))