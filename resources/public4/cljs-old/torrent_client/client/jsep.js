goog.provide('torrent_client.client.jsep');
goog.require('cljs.core');
goog.require('waltz.state');
goog.require('jayq.util');
goog.require('clojure.walk');
goog.require('jayq.core');
goog.require('torrent_client.client.dispatch');
goog.require('waltz.state');
torrent_client.client.jsep.get_user_media = (function() {
var get_user_media = null;
var get_user_media__8367 = (function (){
return get_user_media.call(null,(function (){
return torrent_client.client.dispatch.fire.call(null,cljs.core.Vector.fromArray(["\uFDD0'get-user-media-success"]));
}),(function (){
return torrent_client.client.dispatch.fire.call(null,cljs.core.Vector.fromArray(["\uFDD0'get-user-media-error"]));
}));
});
var get_user_media__8368 = (function (success){
return get_user_media.call(null,success,(function (){
return torrent_client.client.dispatch.fire.call(null,cljs.core.Vector.fromArray(["\uFDD0'get-user-media-error"]));
}));
});
var get_user_media__8369 = (function (success,error){
var options__8366 = cljs.core.ObjMap.fromObject(["\uFDD0'audio","\uFDD0'video"],{"\uFDD0'audio":true,"\uFDD0'video":false});

return navigator.webkitGetUserMedia(jayq.util.clj__GT_js.call(null,options__8366),success,error);
});
get_user_media = function(success,error){
switch(arguments.length){
case  0 :
return get_user_media__8367.call(this);
case  1 :
return get_user_media__8368.call(this,success);
case  2 :
return get_user_media__8369.call(this,success,error);
}
throw('Invalid arity: ' + arguments.length);
};
return get_user_media;
})()
;
torrent_client.client.jsep.createObjectURL = (function createObjectURL(stream){
return createObjectURL.call(null,webkitURL,jayq.util.clj__GT_js.call(null,stream));
});
torrent_client.client.jsep.stun_server = "STUN stun.l.google.com:19302";
torrent_client.client.jsep.peer_connection = (function() {
var peer_connection = null;
var peer_connection__8371 = (function (){
return peer_connection.call(null,(function (){
return torrent_client.client.dispatch.fire.call(null,cljs.core.Vector.fromArray(["\uFDD0'ice-callback"]));
}));
});
var peer_connection__8372 = (function (success){
return (new webkitPeerConnection00(torrent_client.client.jsep.stun_server,success));
});
peer_connection = function(success){
switch(arguments.length){
case  0 :
return peer_connection__8371.call(this);
case  1 :
return peer_connection__8372.call(this,success);
}
throw('Invalid arity: ' + arguments.length);
};
return peer_connection;
})()
;
torrent_client.client.jsep.add_stream = (function add_stream(peer_connection,stream){
return peer_connection.addStream(stream);
});
torrent_client.client.jsep.create_offer = (function create_offer(peer_connection,hints){
return peer_connection.createOffer(jayq.util.clj__GT_js.call(null,hints));
});
torrent_client.client.jsep.create_answer = (function create_answer(peer_connection,offer_sdp_string,hints){
return peer_connection.createAnswer(offer_sdp_string,jayq.util.clj__GT_js.call(null,hints));
});
torrent_client.client.jsep.set_local_description = (function set_local_description(peer_connection,session_description,offer){
return peer_connection.setLocalDescription((peer_connection[cljs.core.name.call(null,session_description)]),offer);
});
torrent_client.client.jsep.set_remote_description = (function set_remote_description(peer_connection,session_description,offer){
return peer_connection.setRemoteDescription((peer_connection[cljs.core.name.call(null,session_description)]),offer);
});
torrent_client.client.jsep.process_ice_message = (function process_ice_message(peer_connection,candidate){
return peer_connection.processIceMessage(candidate);
});
torrent_client.client.jsep.to_sdp = (function to_sdp(object){
return object.toSdp();
});
torrent_client.client.jsep.start_ice = (function start_ice(peer_connection){
return peer_connection.startIce();
});
torrent_client.client.jsep.session_description = (function session_description(sdp_string){
return (new SessionDescription(sdp_string));
});
torrent_client.client.jsep.jsep_machine = (function jsep_machine(mode,peer){
var me__8377 = torrent_client.client.jsep.machine.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'current"],{"\uFDD0'label":"\uFDD0'jsep-machine","\uFDD0'current":"\uFDD0'init"}));
var user_media__8378 = torrent_client.client.jsep.get_user_media.call(null,(function (p1__8374_SHARP_){
return waltz.state.trigger.call(null,me__8377,"\uFDD0'add-stream",p1__8374_SHARP_);
}));
var peer_connection__8379 = torrent_client.client.jsep.peer_connection.call(null,(function (p1__8375_SHARP_,p2__8376_SHARP_){
return waltz.state.trigger.call(null,me__8377,"\uFDD0'add-ice-candidate",p1__8375_SHARP_,p2__8376_SHARP_);
}));

waltz.state.add_event.call(null,me__8377,"\uFDD0'add-stream",(function (stream){
torrent_client.client.jsep.add_stream.call(null,peer_connection__8379,stream);
return torrent_client.client.jsep.transition.call(null,me__8377,"\uFDD0'init","\uFDD0'has-user-media");
}));
waltz.state.add_event.call(null,me__8377,"\uFDD0'add-ice-candidate",(function (candidate,more){
if(cljs.core.truth_(cljs.core.not.call(null,more)))
{return torrent_client.client.jsep.transition.call(null,me__8377,"\uFDD0'has-user-media","\uFDD0'ready");
} else
{return null;
}
}));
waltz.state.add_event.call(null,me__8377,"\uFDD0'receive-offer",(function (){
var offer__8380 = torrent_client.client.jsep.session_description.call(null,peer.call(null,"\uFDD0'sdp"));
var answer__8381 = torrent_client.client.jsep.create_answer.call(null,peer_connection__8379,peer.call(null,"\uFDD0'sdp"),null);

torrent_client.client.jsep.set_remote_description.call(null,peer_connection__8379,"\uFDD0'SDP_OFFER",offer__8380);
torrent_client.client.jsep.set_local_description.call(null,peer_connection__8379,"\uFDD0'SDP_ANSWER",answer__8381);
return torrent_client.client.jsep.start_ice.call(null,peer_connection__8379);
}));
waltz.state.add_event.call(null,me__8377,"\uFDD0'send-offer",(function (){
var offer__8382 = torrent_client.client.jsep.create_offer.call(null,peer_connection__8379,null);

torrent_client.client.jsep.set_local_description.call(null,peer_connection__8379,"\uFDD0'SDP_OFFER",offer__8382);
return torrent_client.client.jsep.start_ice.call(null,peer_connection__8379);
}));
var s__4478__auto____8383 = waltz.state.state_STAR_.call(null);

waltz.state.add_state.call(null,me__8377,"\uFDD0'init",s__4478__auto____8383);
var s__4478__auto____8384 = waltz.state.in_STAR_.call(null,waltz.state.state_STAR_.call(null),(function (){
return waltz.state.trigger.call(null,me__8377,mode);
}));

waltz.state.add_state.call(null,me__8377,"\uFDD0'has-user-media",s__4478__auto____8384);
var s__4478__auto____8385 = waltz.state.in_STAR_.call(null,waltz.state.state_STAR_.call(null),(function (){
return torrent_client.client.dispatch.fire.call(null,"\uFDD0'ready",peer_connection__8379);
}));

return waltz.state.add_state.call(null,me__8377,"\uFDD0'ready",s__4478__auto____8385);
});
