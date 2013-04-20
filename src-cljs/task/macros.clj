(ns task.macros)

(defmacro deftask [label period bindings & body]
  `(task/main/task ~period (fn ~bindings ~@body)))