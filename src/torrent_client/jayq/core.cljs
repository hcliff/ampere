(ns torrent-client.jayq.core)

(defn input-files [$elem]
	"Returns a vector of files for a given input"
  (filelist-files (first $elem)))

(defn event-files 
  "Takes a goog event and returns the files
   TODO: also get jquery events working"
  [event]
  (filelist-files (-> event .getBrowserEvent .-dataTransfer)))

(defn filelist-files [filelist]
	(let [filelist (.-files filelist)]
		(vec (for [k (js-keys filelist)
				       :let [value (aget filelist k)]
				       :when (identical? (type value) js/File)] 
			value))))

(defn modal [$elem params]
	(.modal $elem params))

(defn tab [$elem params]
	(.tab $elem params))