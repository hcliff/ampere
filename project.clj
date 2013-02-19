(defproject torrent-client "0.1.0-SNAPSHOT"
  :description "A webrtc bittorrent client written in clojurescript"
  :url "http://github.com/hcliff/ampere"
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [noir "1.3.0-beta2"]
                 [environ "0.3.0"]
                 [jayq "2.0.0"]
                 [crate "0.2.4"]
                 [waltz "0.1.0-alpha1"]]
  :hooks [environ.leiningen.hooks]
  :plugins [[environ/environ.lein "0.3.0"]
            [lein-exec "0.2.1"]
            [lein-cljsbuild "0.3.0"]]
  :cljsbuild {
    :builds {
      :main {
        ; The path to the top-level ClojureScript source directory:
        :source-paths ["src"]
        ; The standard ClojureScript compiler options:
        ; (See the ClojureScript compiler documentation for details.)
        :compiler {
          :output-to "resources/public/cljs/bootstrap.js"
          :optimizations :whitespace
          :pretty-print true}}}
    :repl-listen-port 9000
    :repl-launch-commands{
      "firefox"  ["firefox"
                  :stdout ".repl-firefox-out"
                  :stderr ".repl-firefox-err"]
      "chrome" ["/opt/google/chrome/chrome" "http://localhost:8091/"
                :stdout ".repl-chrome-out"
                :stderr ".repl-chrome-err"
                ]}}
  :source-paths ["src"]
  :main torrent-client.server)
