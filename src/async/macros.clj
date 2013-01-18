(ns async.macros
  "Macros to avoid callback soup, act as defer/await")

(defmacro let-async [bindings & body]
  (cond
    ; when there are no more bindings execute the body
    (empty? bindings) `(do ~@body) 

    ; a regular (not async let)
    ; e.g: [:let one "hello world"]
    (= (first bindings) :let)
    (let [[_ binding-name binding-value & remaining] bindings]
      `(let [~binding-name ~binding-value]
        (let-async ~remaining ~@body)))

    ; an async let
    :else
    (let [[binding-name binding-value & remaining] bindings]
      `(~binding-value 
          (fn [binding-name#] 
            (let [~binding-name binding-name#]
              (let-async ~remaining ~@body)))
          (fn [error#]
            (.error js/console error#))))))

(defmacro async [bindings & body]
  `(fn ~bindings ~@body))