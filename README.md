# Ampere

A bittorrent client that runs in the browser without plugins. **Currently only works in chrome**

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
* [webrtc-tracker](https://github.com/hcliff/webrtc-tracker-nodejs) - A seperate project to build a bittorrent tracker for webrtc based bittorrent clients

# Issues

* Advanced compile doesn't work; thus simple must be (adds 200k to page weight)
* https is not used

## License

Copyright (c) 2013, Henry Clifford
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of the <organization> nor the
      names of its contributors may be used to endorse or promote products
      derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

