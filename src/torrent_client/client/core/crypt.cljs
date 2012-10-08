(ns torrent-client.client.core.crypt
	; (:use [goog.crypt :only [Sha1]])
	)

(defn sha1 
	"A wrapper around the SHA class to get the
	computed value without subsequent calls"
	[string]
	(let [sha1 (js/Sha1.)]
		(.update sha1 string)
		(.digest sha1)))