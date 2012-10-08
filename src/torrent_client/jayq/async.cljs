(ns torrent-client.jayq.async
	"Some helper functions for use with the async macro"
	(:use [jayq.util :only [clj->js]])
  	(:use-macros [async.macros :only [async]]))

(defn ajax [url settings]
	(async [success-callback]
		(let [success-callback #(success-callback (js->clj % :keywordize-keys true))
			  settings (assoc settings :success success-callback)]
			(.log js/console "settings" (clj->js settings))
			(.ajax js/jQuery url (clj->js settings)))))