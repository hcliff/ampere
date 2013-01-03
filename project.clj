(defproject torrent-client "0.1.0-SNAPSHOT"
  :description "A webrtc bittorrent client written in clojurescript"
  :url "http://github.com/hcliff/ampere"
  :dependencies [[org.clojure/clojure "1.4.0"]
                 ; [noir-cljs "0.3.0"]
                 [jayq "0.1.0-alpha4"]
                 [fetch "0.1.0-alpha2"]
                 [crate "0.2.0"]
                 [noir "1.3.0-beta2"]
                 [waltz "0.1.0-alpha1"]
                 [com.taoensso/timbre "0.8.0"]
                 [org.clojure/clojurescript "0.0-1236"]
                 [watchtower "0.1.1"]
                 [colorize "0.1.1"]
                 [org.clojure/google-closure-library "0.0-2029"]
                 [environ "0.3.0"]]
  :hooks [environ.leiningen.hooks]
  :plugins [[lein-git-deps "0.0.1-SNAPSHOT"]
            [lein-localrepo "0.4.0"]
            [environ/environ.lein "0.3.0"]
            [lein-exec "0.2.1"]]
  :git-dependencies [["git://github.com/pandeiro/noir-cljs.git"]]
  :source-paths ["src" ".lein-git-deps/noir-cljs/src"]
  :repositories {"goog" "http://repository.apache.org/content/repositories/releases/"}
  :main ^{:skip-aot true} torrent-client.server)
