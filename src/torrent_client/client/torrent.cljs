; submit actual files
; read meta data on torrent
; use name to build actual files
; start peering

;;************************************************
;; Functions for processing the .torrent file
;; and the associated files
;;************************************************


(defn read-torrent-file 
	"Given a torrent file read, decode and process it"
	[file]
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
			{:info-hash info-hash
			 :pretty-info-hash pretty-info-hash
			 :encoding (metadata "encoding")
			 :pieces-hash pieces-hash
			 :pieces-size (count pieces-hash)
			 :announce-list (filter http-scheme? announce-list)
			 :comment (info :comment)}
		)))

(defn- write-input-to-file [entry data]
	(let-async [writer (entry/create-writer entry)]
		(.write writer data)))

; Torrent is a hash-map of information on the torrent
; fs is the filesystem access
; torrent-file is the actual .torrent
; files are the actual files for distribution
(defn build-files [torrent torrent-file files]
	; First build out the file system access
	(let-async [:let requested-bytes (+ (.-size torrent-file) (reduce (+ % (.-size %2)) files))
				granted-bytes (filesystem/request-quota :PERSISTENT requested-bytes)
		  	    fs (filesystem/request-file-system :PERSISTENT granted-bytes)]

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


(defn torrent-machine []

	(let [me (machine {:label :torrent-machine :current :init})
		  torrent (atom [])])

		; Add the current torrent to the global atom
		(defevent me :init []
			(swap! assoc torrents torrent))

		(defevent me :recieve-files [torrent-file files]
			(read-torrent-file [torrent-file])
		)

		(defstate me :init
			(in [] (trigger me :init)))

		(defstate me :has-files)

		(defstate me :has-torrent-info)

		(defstate me :writing-files)

		(defstate me :ready)

)