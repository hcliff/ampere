(ns torrent-client.jayq.core)

(defn files [$elem]
	"Returns a vector of files for a given input"
	(let [filelist (.-files (first $elem))]
		(vec (for [k (js-keys filelist)
				   :let [value (aget filelist k)]
				   :when (identical? (type value) js/File)] 
				value))
		))

(defn modal [$elem params]
	(.modal $elem params))
