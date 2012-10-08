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
var get_user_media__5846 = (function (){
return get_user_media.call(null,(function (){
return torrent_client.client.dispatch.fire.call(null,cljs.core.Vector.fromArray(["\uFDD0'get-user-media-success"]));
}),(function (){
return torrent_client.client.dispatch.fire.call(null,cljs.core.Vector.fromArray(["\uFDD0'get-user-media-error"]));
}));
});
var get_user_media__5847 = (function (success){
return get_user_media.call(null,success,(function (){
return torrent_client.client.dispatch.fire.call(null,cljs.core.Vector.fromArray(["\uFDD0'get-user-media-error"]));
}));
});
var get_user_media__5848 = (function (success,error){
var options__5845 = cljs.core.ObjMap.fromObject(["\uFDD0'audio","\uFDD0'video"],{"\uFDD0'audio":true,"\uFDD0'video":false});

return navigator.webkitGetUserMedia(jayq.util.clj__GT_js.call(null,options__5845),success,error);
});
get_user_media = function(success,error){
switch(arguments.length){
case  0 :
return get_user_media__5846.call(this);
case  1 :
return get_user_media__5847.call(this,success);
case  2 :
return get_user_media__5848.call(this,success,error);
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
var peer_connection__5850 = (function (){
return peer_connection.call(null,(function (){
return torrent_client.client.dispatch.fire.call(null,cljs.core.Vector.fromArray(["\uFDD0'ice-callback"]));
}));
});
var peer_connection__5851 = (function (success){
return (new webkitPeerConnection00(torrent_client.client.jsep.stun_server,success));
});
peer_connection = function(success){
switch(arguments.length){
case  0 :
return peer_connection__5850.call(this);
case  1 :
return peer_connection__5851.call(this,success);
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
var me__5856 = torrent_client.client.jsep.machine.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'current"],{"\uFDD0'label":"\uFDD0'jsep-machine","\uFDD0'current":"\uFDD0'init"}));
var user_media__5857 = torrent_client.client.jsep.get_user_media.call(null,(function (p1__5853_SHARP_){
return waltz.state.trigger.call(null,me__5856,"\uFDD0'add-stream",p1__5853_SHARP_);
}));
var peer_connection__5858 = torrent_client.client.jsep.peer_connection.call(null,(function (p1__5854_SHARP_,p2__5855_SHARP_){
return waltz.state.trigger.call(null,me__5856,"\uFDD0'add-ice-candidate",p1__5854_SHARP_,p2__5855_SHARP_);
}));

waltz.state.add_event.call(null,me__5856,"\uFDD0'add-stream",(function (stream){
torrent_client.client.jsep.add_stream.call(null,peer_connection__5858,stream);
return torrent_client.client.jsep.transition.call(null,me__5856,"\uFDD0'init","\uFDD0'has-user-media");
}));
waltz.state.add_event.call(null,me__5856,"\uFDD0'add-ice-candidate",(function (candidate,more){
if(cljs.core.truth_(cljs.core.not.call(null,more)))
{return torrent_client.client.jsep.transition.call(null,me__5856,"\uFDD0'has-user-media","\uFDD0'ready");
} else
{return null;
}
}));
waltz.state.add_event.call(null,me__5856,"\uFDD0'receive-offer",(function (){
var offer__5859 = torrent_client.client.jsep.session_description.call(null,peer.call(null,"\uFDD0'sdp"));
var answer__5860 = torrent_client.client.jsep.create_answer.call(null,peer_connection__5858,peer.call(null,"\uFDD0'sdp"),null);

torrent_client.client.jsep.set_remote_description.call(null,peer_connection__5858,"\uFDD0'SDP_OFFER",offer__5859);
torrent_client.client.jsep.set_local_description.call(null,peer_connection__5858,"\uFDD0'SDP_ANSWER",answer__5860);
return torrent_client.client.jsep.start_ice.call(null,peer_connection__5858);
}));
waltz.state.add_event.call(null,me__5856,"\uFDD0'send-offer",(function (){
var offer__5861 = torrent_client.client.jsep.create_offer.call(null,peer_connection__5858,null);

torrent_client.client.jsep.set_local_description.call(null,peer_connection__5858,"\uFDD0'SDP_OFFER",offer__5861);
return torrent_client.client.jsep.start_ice.call(null,peer_connection__5858);
}));
var s__4693__auto____5862 = waltz.state.state_STAR_.call(null);

waltz.state.add_state.call(null,me__5856,"\uFDD0'init",s__4693__auto____5862);
var s__4693__auto____5863 = waltz.state.in_STAR_.call(null,waltz.state.state_STAR_.call(null),(function (){
return waltz.state.trigger.call(null,me__5856,mode);
}));

waltz.state.add_state.call(null,me__5856,"\uFDD0'has-user-media",s__4693__auto____5863);
var s__4693__auto____5864 = waltz.state.in_STAR_.call(null,waltz.state.state_STAR_.call(null),(function (){
return torrent_client.client.dispatch.fire.call(null,"\uFDD0'ready",peer_connection__5858);
}));

return waltz.state.add_state.call(null,me__5856,"\uFDD0'ready",s__4693__auto____5864);
});
