(ns torrent-client.client.core.url
  (:require [goog.Uri :as uri]))

(defn http-scheme?
  "Given a url return whether it uses http(s)"
  [url]
  (let [uri (uri/parse url)
      	scheme (.getScheme uri)]
    (or (= "http" scheme) (= "https" scheme))))