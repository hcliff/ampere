(ns torrent-client.client.main
  (:require [torrent-client.client.dispatch :as dispatch]
  			[filesystem.filesystem :as filesystem]
  			[filesystem.entry :as entry]
  			[noir.cljs.client.watcher :as watcher]
            [clojure.browser.repl :as repl]
            [goog.crypt :as crypt]
            [goog.string :as string]
            )
  (:use [jayq.core :only [$ on attr append document-ready]]
  		[jayq.util :only [clj->js]]
  		[waltz.state :only [trigger]]
  		[torrent-client.jayq.core :only [files modal]]
  		[torrent-client.jayq.async :only [ajax]]
  		[torrent-client.client.jsep :only [generate-offer-sdp]]
  		[torrent-client.client.core.string :only [partition-string pad-string-left a2b-hex]]
  		[torrent-client.client.core.url :only [http-scheme?]]
  		[torrent-client.client.core.bencode :only [encode decode uint8-array push-back-reader]]
  		[torrent-client.client.core.crypt :only [sha1]]
  		[torrent-client.client.connection.websockets :only [generate-connection]]
  		[torrent-client.client.core.bittorrent :only [generate-peer]]
  		)
  (:use-macros [async.macros :only [async let-async]]))

;;************************************************
;; Dev stuff
;;************************************************

(watcher/init)
; (repl/connect "http://localhost:9000/repl")

;;************************************************
;; Atoms & state
;;************************************************

; Create the unique peer-id atom
; nil is an invalid peer-id and should be switched
; on domready
(def peer-id (atom nil))
; A vector of the torrents currently in use
(def torrents (atom []))

;;************************************************
;; Code
;;************************************************

(dispatch/react-to #{:ready} (fn [_ peer-connection]
	(let [sdp (to-sdp (.-localDescription peer-connection))
				audio ($ "<audio id='remoteAudio' autoplay='autoplay'/>")
				page ($ "body")
				peer-connection (js->clj peer-connection :keywordize-keys true)]
				(if-let [stream (createObjectURL (first (peer-connection :remoteStreams)))]
					(do
						(.log js/console (peer-connection :remoteStreams))
						(.log js/console stream)
						(append page audio)
						(.log js/console (first (peer-connection :remoteStreams)))
						(js* "debugger;")
						(attr audio :src (first (peer-connection :remoteStreams)))
					)
					(announce sdp)
					)
		)
))

(def form ($ "#create-form"))

(on form :submit (fn [e]
 	(do (.preventDefault e)
 		; Get the files given to us, and set up file system access
 		(let-async [:let torrent-file (first (files ($ "[name=torrent]" form)))
 					:let file-file (first (files ($ "[name=file]" form)))
 					granted-bytes (filesystem/request-quota :PERSISTENT 
 						(+ (.-size torrent-file) (.-size file-file)))
		  	     	fs (filesystem/request-file-system :PERSISTENT granted-bytes)
		  			torrent-file-entry  (entry/get-file fs (.-name torrent-file) {:create true})
			  		torrent-file-writer (entry/create-writer torrent-file-entry)]
			  	; Save the actual torrent file to our system
			  	(.write torrent-file-writer torrent-file)
			  	; And inform the tracker about it
			  	(dispatch/fire :add-torrent-file torrent-file))
 		(modal ($ "#create-modal") "hide"))))

; (jsep-machine :send-offer)

(defn- write-input-to-file [entry data]
	(let-async [writer (entry/create-writer entry)]
		(.write writer data)))

; Torrent is a hash-map of information on the torrent
; fs is the filesystem access
; torrent-file is the actual .torrent
; files are the actual files for distribution
(defn build-files [torrent fs torrent-file files]
	(let [directory-entry (DirectoryEntry. fs fs.root)
		  folder (.createPath directory-entry (torrent :name))
		  torrent-file-entry (entry/get-file fs torrent-file {:create true})
		  file-entries (map #(entry/get-file fs % {:create true}) (torrent :files))]
		; If we have a torrent file write it to the entry
		(if torrent-file (write-input-to-file torrent-file-entry torrent-file))
		; If there are files given write them to their entries
		(if files (dorun (map write-input-to file-entries files)))
		; Return the corrosponding entries
		{:torrent-file torrent-file-entry
		 :file-entries file-entries}))

(defn filereader [file]
	(async [success-callback]
		(let [reader (js/FileReader.)]
			(set! (.-onloadend reader) success-callback)
			(.readAsArrayBuffer reader file))))

(dispatch/react-to #{:document-ready} (fn [_]
	(reset! peer-id (generate-peer-id))
	))

(defn generate-peer-id []
	"Generate a unique 20 byte peer-id"
	(let [; The client id identifies ampere
		  client-id "AM1-0-0--"
		  ; And a random string - note that this is 
		  ; partially based from the current date
		  random-string (string/getRandomString)
		  sha (crypt/byteArrayToHex (sha1 random-string))]
		(str client-id (subs sha 0 (- 20 (count client-id))))))

; When a physical torrent file is added, process it.
; when processed a further event is fired
(dispatch/react-to #{:add-torrent-file} (fn [_ file]
	(read-torrent-file file)))

(dispatch/react-to #{:processed-torrent-file} (fn [_ file-data]
	(let [torrent {
		   :peer-ids []
		}])
	(announce (file :info-hash))))

(defn read-torrent-file [file]
	(let-async [progress-event (filereader file)]
		; onloadend actually triggers a progress event
		; we want the actual file contents
		(let [result (.-result (.-currentTarget progress-event))
			  reader (push-back-reader (uint8-array result 0))

			  metadata (decode reader)
			  info (metadata "info")
			  info-hash (sha1 (encode info))
			  pretty-info-hash (pad-string-left (crypt/byteArrayToHex info-hash) "0" 40)
			  pieces-hash (partition-string 20 (get-in metadata ["info" "pieces"]))
			  announce [(metadata "announce")]
			  announce-list (reduce conj announce (flatten (metadata "announce-list")))]
			; Fire an event with the full file
			(js* "debugger;")
			(.log js/console (clj->js info))
			(dispatch/fire :processed-torrent-file
				{:info-hash 
				 :encoding (metadata "encoding")
				 :pieces-hash pieces-hash
				 :pieces-size (count pieces-hash)
				 :announce-list (filter http-scheme? announce-list)})
		)))

(defn announce [info-hash]
	(.log js/console "info-hash" info-hash)
	(let-async [offer-sdp (generate-offer-sdp)
				:let data {
					:jsep offer-sdp
					:info_hash (a2b-hex info-hash)
					:event "started"
					:peer_id @peer-id
					:numwant 10}
				response (ajax "http://localhost:8090/announce" {:data data :dataType "json"})
				:let connections (map generate-connection (response :peers))
				]
		; (doall peers)
		; For each potential peer kick off the connection and handshake
		; this happens async 
		(generate-peer data (first connections))

		))

(.log js/console "beginning")
(document-ready (fn [e]
	(dispatch/fire :document-ready)))