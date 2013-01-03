(ns torrent-client.views.main
  (:require [torrent-client.views.common :as common])
  (:use [noir.core :only [defpage]]
        [hiccup.core :only [html]]))

(defpage index "/" []
  (common/layout [:div#content]))