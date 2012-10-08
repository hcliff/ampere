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