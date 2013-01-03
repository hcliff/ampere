(ns torrent-client.hiccup.page
  (:use hiccup.util))

(defn include-less
  "Include a list of external stylesheet files."
  [& styles]
  (for [style styles]
    [:link {:type "text/less", :href (to-uri style), :rel "stylesheet"}]))