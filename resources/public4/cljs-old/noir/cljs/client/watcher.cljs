(ns noir.cljs.client.watcher
  (:require [fetch.core :as fetch]
            [crate.core :as crate]
            [cljs.reader :as reader])
  (:use [jayq.core :only [$ append delegate data add-class remove-class find]]
        [crate.tags :only [link-to]])
  (:use-macros [crate.macros :only [defpartial]]))

(defn wait [ms func]
  (js* "setTimeout(~{func}, ~{ms})"))

(def $body ($ :body))
(def callbacks (atom []))
(def cur-mode (atom :simple))

(defn poll []
  (wait 100 #(fetch/xhr [:get "/noir-cljs-get-updated"] {}
                        (fn [data]
                          (when (and data
                                     (not= data ""))
                            (js/eval data)
                            (doseq [cur @callbacks]
                              (cur data)))
                          (when (= @cur-mode :interactive)
                            (poll))))))

(defn on-update [func]
  (swap! callbacks conj func))

(defn set-mode [m]
  (fetch/xhr [:post "/noir-cljs-mode"] {:m m}
             (fn []
               (reset! cur-mode m)
               (when (= m :interactive)
                 (poll)))))

(defn get-mode [callback]
  (fetch/xhr [:get "/noir-cljs-mode"] {}
             (fn [x]
               (callback (reader/read-string x)))))

(def buttons [{:mode :advanced :label "A"}
              {:mode :simple :label "S"}
              {:mode :interactive :label "I"}])

(defpartial selector-button [{:keys [mode label]} & [m]]
  (let [klass (str "noir-cljs-button " (when (= mode m)
                                         "active"))]
    [:li (link-to {:class klass :data-mode mode} "#" label)]))

(defpartial selector [m]
  [:div
   [:style {:type "text/css"}
    "#noir-cljs-selector {position:fixed; bottom:15px; right:30px; list-style:none; }
     #noir-cljs-selector li {}
     #noir-cljs-selector a { float:left; display:inline; text-decoration:none; line-height:1em; height:19px; padding:5px 10px; background:#77c; width:10px; border:1px solid #55c; text-align:center; border-radius:5px; margin-bottom:8px; color:#449; }
     #noir-cljs-selector a:hover {background:#99f;}
     #noir-cljs-selector .active {background:#7cc; border-color:#599;} "] 
   [:ul#noir-cljs-selector
    (map #(selector-button % m) buttons)]])

(delegate $body :.noir-cljs-button :click
          (fn [e]
            (.preventDefault e)
            (remove-class (find ($ selector) :.noir-cljs-button) :active)
            (this-as me
              (let [$me ($ me)
                    mode (data $me :mode)]
                (add-class $me :active)
                (set-mode mode)))))

(defn init []
  (get-mode (fn [m]
              (append $body (selector m)))))
