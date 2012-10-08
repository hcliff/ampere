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
var sdp__8098 = torrent_client.client.main.to_sdp.call(null,peer_connection.localDescription);
var audio__8099 = jayq.core.$.call(null,"<audio id='remoteAudio' autoplay='autoplay'\/>");
var page__8100 = jayq.core.$.call(null,"body");
var peer_connection__8101 = cljs.core.js__GT_clj.call(null,peer_connection,"\uFDD0'keywordize-keys",true);

var temp__3695__auto____8102 = torrent_client.client.main.createObjectURL.call(null,cljs.core.first.call(null,peer_connection__8101.call(null,"\uFDD0'remoteStreams")));

if(cljs.core.truth_(temp__3695__auto____8102))
{var stream__8103 = temp__3695__auto____8102;

console.log(peer_connection__8101.call(null,"\uFDD0'remoteStreams"));
console.log(stream__8103);
jayq.core.append.call(null,page__8100,audio__8099);
console.log(cljs.core.first.call(null,peer_connection__8101.call(null,"\uFDD0'remoteStreams")));
debugger;;
return jayq.core.attr.call(null,audio__8099,"\uFDD0'src",cljs.core.first.call(null,peer_connection__8101.call(null,"\uFDD0'remoteStreams")));
} else
{return torrent_client.client.main.announce.call(null,sdp__8098);
}
}));
torrent_client.client.main.form = jayq.core.$.call(null,"#create-form");
jayq.core.on.call(null,torrent_client.client.main.form,"\uFDD0'submit",(function (e){
e.preventDefault();
return async_kit.async_STAR_.call(null,(function (completed8104,error8105){
var torrent__8106 = cljs.core.first.call(null,jayq.core.files.call(null,jayq.core.$.call(null,"[name=torrent]",torrent_client.client.main.form)));

var file__8107 = cljs.core.first.call(null,jayq.core.files.call(null,jayq.core.$.call(null,"[name=file]",torrent_client.client.main.form)));

return async_kit.await_STAR_.call(null,filesystem.filesystem.request_quota.call(null,"\uFDD0'PERSISTENT",(1024 * 1024)),(function (error__4546__auto__,value__4547__auto__){
if(cljs.core.truth_(error__4546__auto__))
{return error8105.call(null,error__4546__auto__);
} else
{var granted_bytes__8108 = value__4547__auto__;

return async_kit.await_STAR_.call(null,filesystem.filesystem.request_file_system.call(null,"\uFDD0'PERSISTENT",granted_bytes__8108),(function (error__4546__auto__,value__4547__auto__){
if(cljs.core.truth_(error__4546__auto__))
{return error8105.call(null,error__4546__auto__);
} else
{var fs__8109 = value__4547__auto__;

return async_kit.await_STAR_.call(null,filesystem.filesystem.get_file.call(null,fs__8109,torrent__8106.call(null,"\uFDD0'name"),cljs.core.ObjMap.fromObject(["\uFDD0'create","\uFDD0'exclusive"],{"\uFDD0'create":true,"\uFDD0'exclusive":true}),"\uFDD0'AWAIT"),(function (error__4546__auto__,value__4547__auto__){
if(cljs.core.truth_(error__4546__auto__))
{return error8105.call(null,error__4546__auto__);
} else
{var torrent_file_entry__8110 = value__4547__auto__;

return async_kit.await_STAR_.call(null,filesystem.entry.create_writer.call(null,torrent_file_entry__8110,"\uFDD0'AWAIT"),(function (error__4546__auto__,value__4547__auto__){
if(cljs.core.truth_(error__4546__auto__))
{return error8105.call(null,error__4546__auto__);
} else
{var torrent_file_writer__8111 = value__4547__auto__;

return completed8104.call(null,torrent_file_writer__8111.write(torrent__8106));
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
var response__8112 = cljs.core.js__GT_clj.call(null,response,"\uFDD0'keywordize-keys",true);

return torrent_client.client.jsep.jsep_machine.call(null,"\uFDD0'receive-offer",cljs.core.first.call(null,response__8112.call(null,"\uFDD0'peers")));
})}));
});
console.log("beginning");
