(ns cljconsole.main
  (:use-macros [cljconsole.macros :only [defn-method]]))

(defn apply-method [fname]
  "Return a function for the method"
  (fn [& args]
    ; Turn all our arguments into javascript objects and call the method
    (.apply (aget js/console fname) js/console (clj->js args))))

(defn-method "log")
(defn-method "warn")
(defn-method "info")
(defn-method "time")
(defn-method "timeEnd")