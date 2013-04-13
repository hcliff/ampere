(ns cljconsole.macros)

(defmacro defn-method [fname & [jsf]]
  (let [jsf (or jsf fname)]
   `(def ~(symbol fname) ~(list 'apply-method (str jsf)))))