(ns torrent-client.client.speed
  ; (:use 
  ;   [torrent-client.client.main :only [torrents]]
  ;   [goog :only [now]])
  ; (:require
  ;   [torrent-client.client.core.dispatch :as dispatch]
  ;   [goog.date :as date])
  ; ; (:use-macros [task.macros :only [deftask]])
  )


; (def download-pieces (atom {}))

; (dispatch/listen #{:receive-piece} (fn [_ [torrent piece]]
;   ; Add this piece to list of latest pieces for this torrent
;   (let [latest (@download-pieces (@torrent :pretty-info-hash))]
;     (swap! @download-pieces (now)))))

; (deftask check-speed (* 0.5 1000) [_]
;   (doseq [torrent-pieces download-pieces]
;     (let [torrent (@torrents info-hash)
;           five-seconds (date/Interval. (.-SECONDS date/Interval) 5)
;           ; Only use results from the last five seconds
;           latest (filter #(> (.add % five-seconds) (now)) torrent-pieces)
;           ; Total bytes received over the five seconds averaged 
;           speed (/ (* (count latest ) 312740) 5)]
;       ; Remove the older entries
;       (swap! download-pieces info-hash latest)
;       (dispatch/fire :download-speed [info-hash speed]))))

(.log js/console "not-last")