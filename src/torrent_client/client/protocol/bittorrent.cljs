(ns torrent-client.client.protocol.bittorrent
  (:require
    [torrent-client.client.core.dispatch :as dispatch]
    [torrent-client.client.core.crypt :as crypt]
    [torrent-client.client.bitfield :as bitfield]
    [torrent-client.client.protocol.main :as protocol]
    [torrent-client.client.connection.main :as connection])
  (:use 
    [torrent-client.client.peer-id :only [peer-id]]
    [torrent-client.client.core.bencode :only [subarray]]
    [waltz.state :only [trigger]]))

(defn ^boolean array-buffer-view? [candidate]
  ; Incorrect; but js/ArrayBufferView doesn't exist
  (instance? js/Uint8Array candidate))

(deftype Char [code]
  Object
  (toString [this]
    (.fromCharCode js/String code))

  IEquiv
  (-equiv [_ o]
    (cond
      ; If a 1 character byte array compare the first bytes
      (array-buffer-view? o) (and (= (count o) 1) (= (first o) code))
      ; compare string char codes
      (string? o) (= o (str code))
      :else (= o code)))

  IHash
  (-hash [this] 
    (goog.string/hashCode (pr-str this)))
  )

(defn char [code]
  (Char. code))

(def msg-choke (char 00))
(def msg-unchoke (char 01))
(def msg-interested (char 02))
(def msg-not-interested (char 03))
(def msg-have (char 04))
(def msg-bitfield (char 05))
(def msg-request (char 06))
(def msg-piece (char 07))
(def msg-cancel (char 8))
; ; The length of the string "BitTorrent protocol"
(def msg-handshake (char 19))

;;************************************************
;; Map incoming data based on it's first byte
;; and co-ordinate with the peer with the data
;;************************************************

(defmulti receive-data (fn [peer data] (char (first data))))

(defmethod receive-data msg-choke [p _]   
  (trigger p :receive-choke))
(defmethod receive-data msg-unchoke [p _] 
  (trigger p :receive-unchoke))

(defmethod receive-data msg-interested [p _]
  (trigger p :receive-interested))
(defmethod receive-data msg-not-interested [p _] 
  (trigger p :receive-not-interested))

(defmethod receive-data msg-have [p data]
  (let [data (crypt/unpack [:int] (rest data))]
    (trigger p :receive-have data)))

(defmethod receive-data msg-bitfield [p data]
  (trigger p :receive-bitfield (bitfield/bitfield (rest data))))

(defmethod receive-data msg-request [p data]
  (let [[index begin length] (crypt/unpack [:int :int :int] (rest data))]
    (trigger p :receive-request index begin length)))

(defmethod receive-data msg-piece [p data]
  (let [[index begin] (crypt/unpack [:int :int] (subarray data 1 8))
        piece (subarray data 8)]
    (trigger p :receive-have index begin data)))

(defmethod receive-data msg-cancel [p data]
  (let [[index begin length] (crypt/unpack [:int :int :int] (rest data))]
    (trigger p :receive-cancel index begin length)))

(defmethod receive-data msg-handshake [p data]
  (let [info-hash (vec (subarray data 28 48))
        peer-id (crypt/byteArrayToString (vec (subarray data 48 68)))]
    (trigger p :receive-handshake info-hash peer-id)))

;;************************************************
;; The bittorrent protocol
;;************************************************

; connection-instance not connection to avoid naming collision
(deftype BittorrentProtocol [torrent connection-instance peer]
  protocol/Protocol

  (watch-connection [client]
    "Set up an event listener for data from the connection"
    (dispatch/react-to 
      #{[:receive-data (connection/peer-id connection-instance)]} 
      #(receive-data peer %2)))

  (send-data [client string]
    (connection/send-data connection-instance string))

  (send-data [client type data]
    (if (string? data)
      (protocol/send-data client (str type data))
      (protocol/send-data client (str type (crypt/byteArrayToString data)))))

  (send-handshake [client]
    "Generate a handshake string"
    (let [protocol-name "BitTorrent protocol"
          reserved (crypt/byteArrayToString [00 00 00 00 00 00 00 00])
          info-hash (crypt/byteArrayToString (@torrent :info-hash))
          data (str protocol-name reserved info-hash @peer-id)]
      (.log js/console "about to send")
      (protocol/send-data client msg-handshake data)))

  (send-choke [client]
    (protocol/send-data client msg-choke ""))

  (send-unchoke [client]
    (protocol/send-data client msg-unchoke ""))

  (send-interested [client]
    (protocol/send-data client msg-interested ""))

  (send-not-interested [client]
    (protocol/send-data client msg-not-interested ""))

  (send-have [client index]
    (let [data (crypt/pack :int index)]
      (protocol/send-data client msg-have data)))

  (send-bitfield [client]
    (let [byte-array (bitfield/byte-array (@torrent :bitfield))]
      (protocol/send-data client msg-bitfield byte-array)))

  (send-request [client index begin piece]
    (let [data (crypt/pack :int index :int begin :int piece)]
      (protocol/send-data client msg-request data)))

  ; H.C REVIEW
  (send-piece [client index begin piece]
    (let [piece (.next-piece (@torrent :pieces))
          data (crypt/pack :int index :int begin :int piece)]
      (protocol/send-data client msg-piece data piece)))

  (send-cancel [client index begin piece]
    (let [data (crypt/pack :int index :int begin :int piece)]
      (protocol/send-data client msg-cancel data)))

  ; (send-keep-alive [client]
  ;   (protocol/send-data client ""))

  )

(defprotocol SubArray
  (subarray [array start finish] "Return a subarray of the array immediately"))

(extend-type js/Uint8Array
  ISeqable
  (-seq [array] (array-seq array 0))

  ICounted
  (-count [a] (alength a))

  IIndexed
  (-nth
    ([array n]
       (if (< n (alength array)) (aget array n)))
    ([array n not-found]
       (if (< n (alength array)) (aget array n)
           not-found)))

  ILookup
  (-lookup
    ([array k]
       (aget array k))
    ([array k not-found]
       (-nth array k not-found)))

  IReduce
  (-reduce
    ([array f]
       (ci-reduce array f))
    ([array f start]
       (ci-reduce array f start))))

  ; IHash
  ; (-hash [this] 
  ;   (goog.string/hashCode (pr-str this)))

  ; ISeqable
  ; (-seq [coll] coll)

  ; ASeq
  ; ISeq
  ; (-first [coll] (aget coll 0))
  ; (-rest [coll] (subarray coll 1))

(defn subarray 
  ([coll start]
    (.subarray array start))
  ([coll start finish]
    (.subarray array start finish)))

(defn generate-protocol [torrent connection peer]
  "Generate an instance of the protocol, and start watching the 
  provided connection"
  (let [protocol-instance (BittorrentProtocol. torrent connection peer)]
    (protocol/watch-connection protocol-instance)
    protocol-instance))