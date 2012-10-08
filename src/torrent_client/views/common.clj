(ns torrent-client.views.common
  (:require [noir.cljs.core :as cljs])
  (:use [noir.core :only [defpartial]]
        [hiccup.page :only [html5 include-css include-js]]
        [hiccup.form :only [label file-upload submit-button]]
        [hiccup.element :only [link-to]]
        [hiccup.util]))

; (defn include-less
;   "Include a list of external less stylesheet files.
;   Also include the js compiler"
;   [& styles]
;   (for [style styles]
;     [:link {:type "text/css", :href (to-uri style), :rel "stylesheet/less"}])
;   )

(defpartial layout [& content]
            (html5
              [:head
                [:title "linux torrents"]
                [:link {:href "favicon.ico" :rel "shortcut-icon" :type "image/x-icon"}]
                (include-css "/css/bootstrap.css")
                (include-js "js/jquery.js" "/js/less.js" "/js/underscore.js" "js/humane.js"
                  "js/bootstrap/bootstrap-modal.js" "https://raw.github.com/gist/3789078/61bffe580742bd9b726e9208108772fe5e0bf20b/sha1.js"
                  "http://js.pusher.com/1.12/pusher.min.js")
              ]
              [:body
                [:div#create-modal.modal
                  [:div.modal-header
                    [:h3 "Create a torrent"]
                    [:button.close {:type "button" :data-dismiss "modal"}]]
                  [:form#create-form.modal-body.form-horizontal
                    [:div.control-group
                      (label {:class "control-label"} "torrent" ".torrent")
                      (file-upload "torrent")]
                    [:div.control-group
                      (label {:class "control-label"} "file" "file")
                      (file-upload "file")]]
                  [:div.modal-footer
                    [:a.btn {:data-dismiss "modal"} "close"]
                    (submit-button {:class "btn btn-primary" :form "create-form"} "create")]
                  ]
                [:div.navbar.navbar-fixed-top
                  [:div.navbar-inner
                    [:div.container-fluid
                      [:a.brand "Linux torrents"]
                      [:div.nav-collapse
                        [:form.navbar-search.pull-left
                          [:input.search-query.span4 {:type "text"
                            :placeholder "Search torrents..." :data-provide "typeahead"}]]]
                      [:div.nav-collapse.pull-right
                        [:ul.nav
                          [:li
                            (link-to {:role "button" :data-toggle "modal"} "#create-modal" 
                              "Create Torrent")]]]
                  ]]]
                [:div#alerts
                  [:div.alert
                    [:strong "hello world!"]
                    [:button.close {:type "button" :data-dismiss "alert"}]
                  ]]
                [:table.table.table-striped.body
                  [:thead
                    [:th.span4 "Name"]
                    [:th.span2 "Added"]
                    [:th.span1 "Seeds"]
                    [:th.span1 "Leechers"]
                    [:th.span1 "Complete"]
                    [:th.span3 ""]]
                  [:tbody]]
                  (cljs/include-scripts)
                ]
               ))