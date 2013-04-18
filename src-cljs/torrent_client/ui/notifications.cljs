(ns torrent-client.ui.notifications)

  ; returns 0 when we have persmission 
  ; (if-not (= 0 (.checkPermission webkit-notifications))
  ;   (.requestPermission webkit-notifications))))

; When a torrent completes, try to inform the user
; (dispatch/react-to #{:completed-torrent} (fn [_ torrent]
;   ; If the user is currently on the site don't show the notification
;   (if-not (.hasFocus js/document)
;     (.createNotification webkit-notifications
;       nil 
;       "notification title"
;       "notification content"
;       ))))