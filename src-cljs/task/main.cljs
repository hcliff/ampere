(ns task.main
  (:require 
    [cljconsole.main :as console]
    [goog.Timer :as Timer]
    [goog.events :as events]))

(defn task [period f]
  (let [timer (goog/Timer. period)]
    (.start timer)
    (events/listen timer Timer/TICK f)))