(ns async.helpers
  (:use-macros [async.macros :only [async let-async]]))

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

; take multiple collections 
(defn- map-indexed* [f & collections]
  ; apply the fn with i as the first argument 
  ; and the coll values as subsequent
  (let [f* #(apply f %1 %2)
        ; c1 [:one :two :three] c2 [:uno :dos :tres] =>
        ; c [[:one :uno] [:two :dos] [:three :tres]]
        c (apply (partial map vector) collections)]
    (map-indexed f* c)))

(defn map-async 
  "Given an async function and collection(s); apply the
  function to every collection(s) item and when all are done
  return the result"
  [f & collections]
  (async [success-callback]
    (let [results (atom {})]
      (letfn [(success [i data]
                ; preserve results order by using index
                (swap! results assoc i data)
                ; when
                (if (= (count @results) (count (first collections)))
                  (success-callback (vals @results))))
              (f* [i & arguments]
                ; run the provided function with the collections as params
                ; execute success function with index and result
                ((apply f arguments) (partial success %1)))]
        (doall (apply map-indexed* f* collections))))))