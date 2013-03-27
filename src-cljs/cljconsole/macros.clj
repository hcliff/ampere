(ns cljconsole.macros)

(defmacro defn-method [fname]
  `(def ~(symbol fname) ~(list 'apply-method (str fname))))