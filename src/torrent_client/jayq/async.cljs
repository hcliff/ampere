(ns torrent-client.jayq.async
  "Some helper functions for use with the async macro"
  (:use [jayq.util :only [clj->js]])
    (:use-macros [async.macros :only [async]]))

(defn ajax [url settings]
  (async [success-callback]
    (let [success-callback #(success-callback (js->clj % :keywordize-keys true))
          error-callback (fn [e] 
            (do
              (js* "debugger;")
              (.log js/console e)))
          settings (assoc settings :success success-callback)
          settings (assoc settings :error error-callback)]
      (.log js/console "settings" (clj->js settings))
      (.ajax js/jQuery url (clj->js settings)))))

; jQuery doesn't support binary requests
(defn ajax-binary [url settings]
  (async [success-callback]
    (let [xhr (js/XMLHttpRequest.)]
      (set! (.-responseType xhr) "arraybuffer")
      (set! (.-onload xhr) (fn [e]
        (this-as self
          (if (= 200 (.-status self))
            (success-callback (.-response self))))))
      (.open xhr "GET" url true)
      (.send xhr))))

(.log js/console "loaded async")