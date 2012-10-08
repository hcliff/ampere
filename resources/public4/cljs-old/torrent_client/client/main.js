goog.provide('torrent_client.client.main');
goog.require('cljs.core');
goog.require('waltz.state');
goog.require('jayq.util');
goog.require('torrent_client.client.jsep');
goog.require('jayq.core');
goog.require('torrent_client.client.dispatch');
goog.require('filesystem.filesystem');
goog.require('filesystem.entry');
goog.require('noir.cljs.client.watcher');
goog.require('clojure.browser.repl');
noir.cljs.client.watcher.init.call(null);
torrent_client.client.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'ready"]),(function (_,peer_connection){
var sdp__5809 = torrent_client.client.main.to_sdp.call(null,peer_connection.localDescription);
var audio__5810 = jayq.core.$.call(null,"<audio id='remoteAudio' autoplay='autoplay'\/>");
var page__5811 = jayq.core.$.call(null,"body");
var peer_connection__5812 = cljs.core.js__GT_clj.call(null,peer_connection,"\uFDD0'keywordize-keys",true);

var temp__3695__auto____5813 = torrent_client.client.main.createObjectURL.call(null,cljs.core.first.call(null,peer_connection__5812.call(null,"\uFDD0'remoteStreams")));

if(cljs.core.truth_(temp__3695__auto____5813))
{var stream__5814 = temp__3695__auto____5813;

console.log(peer_connection__5812.call(null,"\uFDD0'remoteStreams"));
console.log(stream__5814);
jayq.core.append.call(null,page__5811,audio__5810);
console.log(cljs.core.first.call(null,peer_connection__5812.call(null,"\uFDD0'remoteStreams")));
debugger;;
return jayq.core.attr.call(null,audio__5810,"\uFDD0'src",cljs.core.first.call(null,peer_connection__5812.call(null,"\uFDD0'remoteStreams")));
} else
{return torrent_client.client.main.announce.call(null,sdp__5809);
}
}));
torrent_client.client.main.form = jayq.core.$.call(null,"#create-form");
jayq.core.on.call(null,torrent_client.client.main.form,"\uFDD0'submit",(function (e){
e.preventDefault();
return async_kit.async_STAR_.call(null,(function (completed5815,error5816){
var torrent__5817 = cljs.core.first.call(null,jayq.core.files.call(null,jayq.core.$.call(null,"[name=torrent]",torrent_client.client.main.form)));

var file__5818 = cljs.core.first.call(null,jayq.core.files.call(null,jayq.core.$.call(null,"[name=file]",torrent_client.client.main.form)));

return async_kit.await_STAR_.call(null,filesystem.filesystem.request_quota.call(null,"\uFDD0'PERSISTENT",(1024 * 1024)),(function (error__4648__auto__,value__4649__auto__){
if(cljs.core.truth_(error__4648__auto__))
{return error5816.call(null,error__4648__auto__);
} else
{var granted_bytes__5819 = value__4649__auto__;

return async_kit.await_STAR_.call(null,filesystem.filesystem.request_file_system.call(null,"\uFDD0'PERSISTENT",granted_bytes__5819),(function (error__4648__auto__,value__4649__auto__){
if(cljs.core.truth_(error__4648__auto__))
{return error5816.call(null,error__4648__auto__);
} else
{var fs__5820 = value__4649__auto__;

return async_kit.await_STAR_.call(null,filesystem.filesystem.get_file.call(null,fs__5820,torrent__5817.call(null,"\uFDD0'name"),cljs.core.ObjMap.fromObject(["\uFDD0'create","\uFDD0'exclusive"],{"\uFDD0'create":true,"\uFDD0'exclusive":true}),"\uFDD0'AWAIT"),(function (error__4648__auto__,value__4649__auto__){
if(cljs.core.truth_(error__4648__auto__))
{return error5816.call(null,error__4648__auto__);
} else
{var torrent_file_entry__5821 = value__4649__auto__;

return async_kit.await_STAR_.call(null,filesystem.entry.create_writer.call(null,torrent_file_entry__5821,"\uFDD0'AWAIT"),(function (error__4648__auto__,value__4649__auto__){
if(cljs.core.truth_(error__4648__auto__))
{return error5816.call(null,error__4648__auto__);
} else
{var torrent_file_writer__5822 = value__4649__auto__;

return completed5815.call(null,torrent_file_writer__5822.write(torrent__5817));
}
}));
}
}));
}
}));
}
}));
}));
}));
torrent_client.client.main.announce = (function announce(sdp){
return jayq.core.ajax.call(null,"http:\/\/localhost:8090\/announce",cljs.core.ObjMap.fromObject(["\uFDD0'data","\uFDD0'dataType","\uFDD0'success"],{"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'sdp","\uFDD0'info_hash","\uFDD0'event","\uFDD0'peer_id","\uFDD0'numwant"],{"\uFDD0'sdp":sdp,"\uFDD0'info_hash":"20 chr info hash","\uFDD0'event":"started","\uFDD0'peer_id":"some more shit","\uFDD0'numwant":50}),"\uFDD0'dataType":"json","\uFDD0'success":(function (response){
var response__5823 = cljs.core.js__GT_clj.call(null,response,"\uFDD0'keywordize-keys",true);

return torrent_client.client.jsep.jsep_machine.call(null,"\uFDD0'receive-offer",cljs.core.first.call(null,response__5823.call(null,"\uFDD0'peers")));
})}));
});
console.log("beginning");
