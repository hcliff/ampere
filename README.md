# Ampere

A bittorrent client that runs in the browser without plugins.
Currently only works in chrome

DEMO: http://hcliff.github.com/ampere

## Tech

Built using clojurescript (that subsequently compiles down to javascript) and utilizing the latest in HTML5 tech
* WebRTC
* HTML5 Filesystem
* Websockets
* Typed Arrays

## Usage

```bash
lein deps
lein git-deps
lein run
```

# Also see

* [the actual client](http://hcliff.github.com/ampere) - View the client in your browser
* [webrtc-tracker](https://github.com/hcliff/webrtc-tracker) - A seperate project to build a bittorrent tracker for webrtc based bittorrent clients
* [our tracker](http://webrtc-tracker.herokuapp.com) - A running instance of webrtc-tracker  _Will not accept arbitrary torrents, serves a collection of linux distributions and mixtapes_
* [demo torrents](http://ampere-torrents.herokuapp.com) - Some demo torrents for you to use with ampere!

## License

Copyright (C) 2012 Henry Clifford

