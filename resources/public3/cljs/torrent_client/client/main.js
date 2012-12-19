goog.provide('torrent_client.client.main');
goog.require('cljs.core');
goog.require('waltz.state');
goog.require('jayq.util');
goog.require('clojure.walk');
goog.require('jayq.core');
goog.require('noir.cljs.client.watcher');
goog.require('clojure.browser.repl');
goog.require('crate.core');
goog.require('waltz.state');
goog.require('torrent_client.client.dispatch');
noir.cljs.client.watcher.init.call(null);
console.log("top of file 2");
torrent_client.client.main.get_user_media = (function() {
var get_user_media = null;
var get_user_media__5607 = (function (){
return get_user_media.call(null,(function (){
return torrent_client.client.dispatch.fire.call(null,cljs.core.Vector.fromArray(["\uFDD0'get-user-media-success"]));
}),(function (){
return torrent_client.client.dispatch.fire.call(null,cljs.core.Vector.fromArray(["\uFDD0'get-user-media-error"]));
}));
});
var get_user_media__5608 = (function (success){
return get_user_media.call(null,success,(function (){
return torrent_client.client.dispatch.fire.call(null,cljs.core.Vector.fromArray(["\uFDD0'get-user-media-error"]));
}));
});
var get_user_media__5609 = (function (success,error){
var options__5606 = cljs.core.ObjMap.fromObject(["\uFDD0'audio","\uFDD0'video"],{"\uFDD0'audio":true,"\uFDD0'video":false});

return navigator.webkitGetUserMedia(jayq.util.clj__GT_js.call(null,options__5606),success,error);
});
get_user_media = function(success,error){
switch(arguments.length){
case  0 :
return get_user_media__5607.call(this);
case  1 :
return get_user_media__5608.call(this,success);
case  2 :
return get_user_media__5609.call(this,success,error);
}
throw('Invalid arity: ' + arguments.length);
};
return get_user_media;
})()
;
torrent_client.client.main.stun_server = "STUN stun.l.google.com:19302";
torrent_client.client.main.peer_connection = (function() {
var peer_connection = null;
var peer_connection__5611 = (function (){
return peer_connection.call(null,(function (){
return torrent_client.client.dispatch.fire.call(null,cljs.core.Vector.fromArray(["\uFDD0'ice-callback"]));
}));
});
var peer_connection__5612 = (function (success){
return (new webkitPeerConnection00(torrent_client.client.main.stun_server,success));
});
peer_connection = function(success){
switch(arguments.length){
case  0 :
return peer_connection__5611.call(this);
case  1 :
return peer_connection__5612.call(this,success);
}
throw('Invalid arity: ' + arguments.length);
};
return peer_connection;
})()
;
torrent_client.client.main.add_stream = (function add_stream(peer_connection,stream){
return peer_connection.addStream(stream);
});
torrent_client.client.main.create_offer = (function create_offer(peer_connection,hints){
return peer_connection.createOffer(jayq.util.clj__GT_js.call(null,hints));
});
torrent_client.client.main.create_answer = (function create_answer(peer_connection,offer_sdp_string,hints){
return peer_connection.createAnswer(offer_sdp_string,jayq.util.clj__GT_js.call(null,hints));
});
torrent_client.client.main.set_local_description = (function set_local_description(peer_connection,session_description,offer){
return peer_connection.setLocalDescription((peer_connection[cljs.core.name.call(null,session_description)]),offer);
});
torrent_client.client.main.set_remote_description = (function set_remote_description(peer_connection,session_description,offer){
return peer_connection.setRemoteDescription((peer_connection[cljs.core.name.call(null,session_description)]),offer);
});
torrent_client.client.main.process_ice_message = (function process_ice_message(peer_connection,candidate){
return peer_connection.processIceMessage(candidate);
});
torrent_client.client.main.to_sdp = (function to_sdp(object){
return object.toSdp();
});
torrent_client.client.main.start_ice = (function start_ice(peer_connection){
return peer_connection.startIce();
});
torrent_client.client.main.session_description = (function session_description(sdp_string){
return (new SessionDescription(sdp_string));
});
/**
* @param {...*} var_args
*/
torrent_client.client.main.transition = (function() { 
var transition__delegate = function (sm,required,states,context){
if(cljs.core.truth_(waltz.state.in_QMARK_.call(null,sm,required)))
{return waltz.state.set.call(null,sm,states,context);
} else
{return null;
}
};
var transition = function (sm,required,states,var_args){
var context = null;
if (goog.isDef(var_args)) {
  context = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return transition__delegate.call(this, sm, required, states, context);
};
transition.cljs$lang$maxFixedArity = 3;
transition.cljs$lang$applyTo = (function (arglist__5614){
var sm = cljs.core.first(arglist__5614);
var required = cljs.core.first(cljs.core.next(arglist__5614));
var states = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5614)));
var context = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5614)));
return transition__delegate.call(this, sm, required, states, context);
});
return transition;
})()
;
torrent_client.client.main.machine = (function machine(p__5615){
var map__5616__5617 = p__5615;
var map__5616__5618 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5616__5617))?cljs.core.apply.call(null,cljs.core.hash_map,map__5616__5617):map__5616__5617);
var current__5619 = cljs.core.get.call(null,map__5616__5618,"\uFDD0'current");
var label__5620 = cljs.core.get.call(null,map__5616__5618,"\uFDD0'label");

return cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'debug","\uFDD0'name","\uFDD0'current","\uFDD0'states","\uFDD0'events"],{"\uFDD0'debug":true,"\uFDD0'name":cljs.core.name.call(null,label__5620),"\uFDD0'current":cljs.core.set(["\uFDD0'init"]),"\uFDD0'states":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'events":cljs.core.ObjMap.fromObject([],{})}));
});
console.log("transition defined3");
/**
* @param {...*} var_args
*/
torrent_client.client.main.jsep_machine = (function() { 
var jsep_machine__delegate = function (mode,peer){
var me__5624 = torrent_client.client.main.machine.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'current"],{"\uFDD0'label":"\uFDD0'sup","\uFDD0'current":"\uFDD0'init"}));
var user_media__5625 = torrent_client.client.main.get_user_media.call(null,(function (p1__5621_SHARP_){
return waltz.state.trigger.call(null,me__5624,"\uFDD0'add-stream",p1__5621_SHARP_);
}));
var peer_connection__5626 = torrent_client.client.main.peer_connection.call(null,(function (p1__5622_SHARP_,p2__5623_SHARP_){
return waltz.state.trigger.call(null,me__5624,"\uFDD0'add-ice-candidate",p1__5622_SHARP_,p2__5623_SHARP_);
}));

waltz.state.add_event.call(null,me__5624,"\uFDD0'add-stream",(function (stream){
torrent_client.client.main.add_stream.call(null,peer_connection__5626,stream);
return torrent_client.client.main.transition.call(null,me__5624,"\uFDD0'init","\uFDD0'has-user-media");
}));
waltz.state.add_event.call(null,me__5624,"\uFDD0'add-ice-candidate",(function (candidate,more){
if(cljs.core.truth_(cljs.core.not.call(null,more)))
{return torrent_client.client.main.transition.call(null,me__5624,"\uFDD0'has-user-media","\uFDD0'ready");
} else
{return null;
}
}));
waltz.state.add_event.call(null,me__5624,"\uFDD0'receive-offer",(function (peer){
var offer__5627 = torrent_client.client.main.session_description.call(null,peer.call(null,"\uFDD0'sdp"));
var answer__5628 = torrent_client.client.main.create_answer.call(null,peer_connection__5626,peer.call(null,"\uFDD0'sdp"),null);

torrent_client.client.main.set_remote_description.call(null,peer_connection__5626,"\uFDD0'SDP_OFFER",offer__5627);
torrent_client.client.main.set_local_description.call(null,peer_connection__5626,"\uFDD0'SDP_ANSWER",answer__5628);
return torrent_client.client.main.start_ice.call(null,peer_connection__5626);
}));
waltz.state.add_event.call(null,me__5624,"\uFDD0'send-offer",(function (){
var offer__5629 = torrent_client.client.main.create_offer.call(null,peer_connection__5626,null);

torrent_client.client.main.set_local_description.call(null,peer_connection__5626,"\uFDD0'SDP_OFFER",offer__5629);
return torrent_client.client.main.start_ice.call(null,peer_connection__5626);
}));
var s__4478__auto____5630 = waltz.state.state_STAR_.call(null);

waltz.state.add_state.call(null,me__5624,"\uFDD0'init",s__4478__auto____5630);
var s__4478__auto____5631 = waltz.state.in_STAR_.call(null,waltz.state.state_STAR_.call(null),(function (){
return waltz.state.trigger.call(null,me__5624,mode);
}));

waltz.state.add_state.call(null,me__5624,"\uFDD0'has-user-media",s__4478__auto____5631);
var s__4478__auto____5632 = waltz.state.in_STAR_.call(null,waltz.state.state_STAR_.call(null),(function (){
return (function (){
return torrent_client.client.dispatch.fire.call(null,"\uFDD0'ready",peer_connection__5626);
});
}));

return waltz.state.add_state.call(null,me__5624,"\uFDD0'ready",s__4478__auto____5632);
};
var jsep_machine = function (mode,var_args){
var peer = null;
if (goog.isDef(var_args)) {
  peer = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return jsep_machine__delegate.call(this, mode, peer);
};
jsep_machine.cljs$lang$maxFixedArity = 1;
jsep_machine.cljs$lang$applyTo = (function (arglist__5633){
var mode = cljs.core.first(arglist__5633);
var peer = cljs.core.rest(arglist__5633);
return jsep_machine__delegate.call(this, mode, peer);
});
return jsep_machine;
})()
;
console.log("state machine defined 4");
torrent_client.client.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'ready"]),(function (a,b){
return console.log("fired! on ready that is");
}));
torrent_client.client.main.jsep_machine.call(null,"\uFDD0'send-offer");
torrent_client.client.main.announce = (function announce(sdp){
return jayq.core.ajax.call(null,"http:\/\/localhost:8090\/announce",cljs.core.ObjMap.fromObject(["\uFDD0'data","\uFDD0'dataType","\uFDD0'success"],{"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'sdp","\uFDD0'info_hash","\uFDD0'event","\uFDD0'peer_id","\uFDD0'numwant"],{"\uFDD0'sdp":sdp,"\uFDD0'info_hash":"20 chr info hash","\uFDD0'event":"started","\uFDD0'peer_id":"some more shit","\uFDD0'numwant":50}),"\uFDD0'dataType":"json","\uFDD0'success":(function (response){
var response__5634 = cljs.core.js__GT_clj.call(null,response,"\uFDD0'keywordize-keys",true);

return torrent_client.client.main.jsep_machine.call(null,"\uFDD0'receive-offer",cljs.core.first.call(null,response__5634.call(null,"\uFDD0'peers")));
})}));
});
console.log("beginning");
