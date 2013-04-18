(ns torrent-client.ui.online
  (:use [jayq.core :only [$ on]])
  (:require 
  	[cljconsole.main :as console]
  	[torrent-client.core.dispatch :as dispatch]))

(def $window ($ js/window))

(def online (atom nil))

(on $window :offline (fn [_]
  (reset! online false)))

(on $window :online (fn [_]
  (reset! online true)))

(add-watch online nil (fn [_ _ old-val new-val]
  (if (and (false? old-val) new-val)
    (console/info "Client online"))
  (if (and old-val (false? new-val))
    (console/info "Client offline"))))

(dispatch/react-to #{:document-ready} (fn [_]
  (reset! online (.-onLine js/navigator))))