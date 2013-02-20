(ns torrent-client.views.common
  (:use [noir.core :only [defpartial]]
        [hiccup.page :only [html5 include-css include-js]]
        [hiccup.form :only [label file-upload submit-button text-field]]
        [hiccup.element :only [link-to]]
        [hiccup.util]
        [environ.core]))

(defn include-less
  "Include a list of external stylesheet files."
  [& styles]
  (for [style styles]
    [:link {:type "text/less", :href (to-uri style), :rel "stylesheet"}]))

(defpartial layout [& content]
  (with-base-url (env :base-url)
    (html5
      [:head
        [:title "Ampere, abusus non tollit usum"]
        [:link {:href "favicon.ico" :rel "shortcut-icon" :type "image/x-icon"}]
        (include-css "css/bootstrap.css")
        (include-js 
          "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"
          "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.2.2/bootstrap.min.js"
          "http://cdnjs.cloudflare.com/ajax/libs/socket.io/0.9.10/socket.io.min.js"
          "/js/humane.js" "/js/datachannel.js")
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
                (text-field {:type "url" :value "http://ec2-184-73-103-94.compute-1.amazonaws.com:8010"} "tracker")]]
            [:div.control-group
              (label {:class "control-label"} "files" "files")
              [:div.controls
                [:div.files]
                [:span.help-inline "Drag files from your computer to add them"]]]]
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

        [:div#about-modal.modal.hide
          [:div.modal-header
            [:h3 "Ampere"]
            [:button.close {:type "button" :data-dismiss "modal"}]]
          [:div.modal-body
            [:pre 
              "Ampere was built by " 
              [:a {:href "http://github.com/hcliff" :target "_blank"} "Henry Clifford"]]
            [:pre 
              "Building on the efforts of others"
              [:ul
                [:li
                  [:a {:href "https://github.com/piranna" :target "_blank"} "Piranna"]]
                [:li
                  [:a {:href "http://nakkaya.com" :target "_blank"} "Nakkaya"]]
              ]]
            [:pre "Ampere is licensed under the MIT license"]
            [:pre 
              "You can contribute or fork ampere "
              [:a {:href "http://github.com/hcliff/ampere" :target "_blank"} "on github"]]
            ]]

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
                    (link-to {:role "button" :data-toggle "modal"} "#about-modal" 
                      "About")]]]
          ]]]
        [:div.container-fluid
          [:div#alerts.row-fluid]
          (link-to {:id "demo-torrent"} "/Rescue%20You.mp3.torrent"
            [:div.row-fluid
              [:div.info
                [:img.promo {:src (to-uri "/the_weeknd.jpg")}]
                [:div.wrapper
                  [:strong "Click here to start a demo torrent"]
                  [:small "A song from The Weeknds debute mixtape, released for free, 4mb"]]
              ]])
          [:div.row-fluid
            [:ul.nav.nav-tabs
              [:li.active 
                [:a#downloading-tab.active {:data-toggle "tab" :href "#torrents"}
                  "Downloading " [:span#downloading-count.badge "0"]]]
              [:li
                [:a#completed-tab {:data-toggle "tab" :href "#torrents"}
                  "Completed " [:span#completed-count.badge "0"]]]
              [:li
                [:a#settings-tab {:data-toggle "tab" :href "#settings"}
                  "Settings"]]]
            [:div.tab-content
              [:div#torrents.tab-pane.active
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
                ]]
              [:div#settings.tab-pane
                [:form.form-horizontal.offset4
                  [:div.control-group
                    (label {:class "control-label"} "settings-notifications" "browser notifications")
                    [:div.controls
                      [:a#settings-notifications.btn "Add browser notifications"]]]
                  [:div.control-group
                    (label {:class "control-label"} "settings-magnet" "magnet links")
                    [:div.controls
                      [:a#settings-magnet.btn "Handle magnet links"]]]
                ]]
                ]]]
          (include-js "/cljs/bootstrap.js" "/js/monkey.js")
        ])))