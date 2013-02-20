(ns torrent-client.cljs.waltz
  (:require [waltz.state :as state]))

;;************************************************
;; Extra helper functions for waltz
;;************************************************


(defn transition [sm to-unset to-set & context]
  "Only transition to var states when the current state
  of state machine (var sm) is the required state (var required)"
  (if (state/in? sm to-unset)
    (state/set-ex sm to-unset to-set context)))

(defn machine [{:keys [label current]}]
  "Allow specification of the starting state"
    (atom {:debug true
           :name (name label)
           :current #{:init}
           :states {}
           :events {}}))
