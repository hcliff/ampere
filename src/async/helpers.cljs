(ns async.helpers
  (:use-macros 
    [async.macros :only [async let-async]]))

; NOTES
; use of futures would be nice, this would be ideal
; (from get-partial)
;
; (defn reader [file]
; ASYNC WEBWORKER READS FILE
; somehow keep blocking until the async returns?
; )
;
; (let [readers (pmap (comp future reader) files)]
;   (doseq [file files
            ; reader readers]
; )

(defn map-async 
  "Given an async function and a collection; apply the
  function to every collection item and when all are done
  return the result"
  [f c1]
  (async [success-callback]
    (let [results (atom [])]
      ; Apply the given function to every collection element
      (doseq [item c1]
        ((f item) (fn [data]
          (swap! conj results data)
          ; If every item has finished its async function
          (.log js/console "hurrarh!" data (count results) (count collection))
          (if (= (count results) (count collection))
            (success-callback @results))
        )))
      results
      )))