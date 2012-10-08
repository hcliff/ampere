(ns torrent-client.client.waltz
	(:require [waltz.state :as state]))

;;************************************************
;; Extra helper functions for waltz
;;************************************************


(defn transition [sm required states & context]
	"Only transition to var states when the current state
	of state machine (var sm) is the required state (var required)"
	(when (state/in? sm required)
		(state/set sm states context)
	))

(defn machine [{:keys [label current]}]
	"Allow specification of the starting state"
  	(atom {:debug true
         :name (name label)
         :current #{:init}
         :states {}
         :events {}}))
