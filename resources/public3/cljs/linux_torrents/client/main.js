goog.provide('linux_torrents.client.main');
goog.require('cljs.core');
goog.require('waltz.state');
goog.require('jayq.util');
goog.require('clojure.walk');
goog.require('jayq.core');
goog.require('noir.cljs.client.watcher');
goog.require('clojure.browser.repl');
goog.require('crate.core');
goog.require('waltz.state');
noir.cljs.client.watcher.init.call(null);
linux_torrents.client.main.get_user_media = (function() {
var get_user_media = null;
var get_user_media__6395 = (function (){
return get_user_media.call(null,(function (){
return dispatch.fire.call(null,"get-user-media-success");
}),(function (){
return dispatch.fire.call(null,"get-user-media-error");
}));
});
var get_user_media__6396 = (function (success){
return get_user_media.call(null,success,(function (){
return dispatch.fire.call(null,"get-user-media-error");
}));
});
var get_user_media__6397 = (function (success,error){
var options__6394 = cljs.core.ObjMap.fromObject(["\uFDD0'audio","\uFDD0'video"],{"\uFDD0'audio":true,"\uFDD0'video":false});

return navigator.webkitGetUserMedia(linux_torrents.client.main.cljs__GT_js.call(null,options__6394),success,error);
});
get_user_media = function(success,error){
switch(arguments.length){
case  0 :
return get_user_media__6395.call(this);
case  1 :
return get_user_media__6396.call(this,success);
case  2 :
return get_user_media__6397.call(this,success,error);
}
throw('Invalid arity: ' + arguments.length);
};
return get_user_media;
})()
;
linux_torrents.client.main.peer_connection = (function() {
var peer_connection = null;
var peer_connection__6399 = (function (){
return peer_connection.call(null,(function (){
return dispatch.fire.call(null,"ice-callback");
}));
});
var peer_connection__6400 = (function (success){
return (new webkitPeerConnection00(linux_torrents.client.main.stun_server,success));
});
peer_connection = function(success){
switch(arguments.length){
case  0 :
return peer_connection__6399.call(this);
case  1 :
return peer_connection__6400.call(this,success);
}
throw('Invalid arity: ' + arguments.length);
};
return peer_connection;
})()
;
linux_torrents.client.main.add_stream = (function add_stream(peer_connection,stream){
return peer_connection.addStream(stream);
});
linux_torrents.client.main.create_offer = (function create_offer(peer_connection,hints){
return peer_connection.createOffer(hints);
});
linux_torrents.client.main.set_local_description = (function set_local_description(peer_connection,offer){
return (peer_connection[cljs.core.name.call(null,offer)]).setLocalDescription(jayq.util.clj__GT_js.call(null,offer));
});
linux_torrents.client.main.process_ice_message = (function process_ice_message(peer_connection,candidate){
return peer_connection.processIceMessage(candidate);
});
linux_torrents.client.main.to_sdp = (function to_sdp(object){
return object.toSdp();
});
/**
* @param {...*} var_args
*/
linux_torrents.client.main.transition = (function() { 
var transition__delegate = function (sm,required,states,context){
if(cljs.core.truth_(cljs.core._EQ_.call(null,required,cljs.core.deref.call(null,sm).call(null,"\uFDD0'current"))))
{return waltz.state.set.call(null,cljs.core.Vector.fromArray([sm,states,context]));
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
transition.cljs$lang$applyTo = (function (arglist__6402){
var sm = cljs.core.first(arglist__6402);
var required = cljs.core.first(cljs.core.next(arglist__6402));
var states = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6402)));
var context = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6402)));
return transition__delegate.call(this, sm, required, states, context);
});
return transition;
})()
;
