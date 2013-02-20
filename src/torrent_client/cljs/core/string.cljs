(ns torrent-client.cljs.core.string
  (:require [goog.string :as gstring]))

(defn partition-string [n string]
  (let [length (count string)]
    (map 
      #(subs string % (min (+ % 20) length))
      (range 0 length 20))))

(defn- pad-string [string padding length]
  "return the padding needed to bring a string to a length"
  ; Only preceed is padding is needed
  (if (> (count string) length)
    (let [padding-length (- length (count string))
        ; how many times should the padding be repeated
        padding-repeat (/ padding-length (count padding))
        padding (str (take padding-repeat (repeat padding)))]
      (subs padding 0 padding-length))))

(defn pad-string-left [string padding length]
  (str string (pad-string string padding length)))

(defn pad-string-right [string padding length]
  (str (pad-string string padding length) string))

(defn- a2b-part [part]
    (let [part (clojure.string/join part)
          byte (js/parseInt part 16)]
      (if (or (and (>= byte 65) (<= byte 90)) ; A-Z
              (and (>= byte 97) (<= byte 122)) ; a-z
              (and (>= byte 48) (<= byte 57)) ; 0-9
              (= byte 45) (= byte 95) (= byte 46) (= byte 126))
          (.fromCharCode js/String byte)
          (str "%" part))))

(defn a2b-hex [string]
  (.log js/console "a2b-hex" string (clojure.string/join (map a2b-part (partition 2 string))))
  (clojure.string/join (map a2b-part (partition 2 string))))

(defn camel-case [s] (gstring/toCamelCase s))
(defn selector-case [s] (gstring/toSelectorCase s))