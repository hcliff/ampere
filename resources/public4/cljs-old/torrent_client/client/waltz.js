goog.provide('torrent_client.client.waltz');
goog.require('cljs.core');
goog.require('waltz.state');
/**
* @param {...*} var_args
*/
torrent_client.client.waltz.transition = (function() { 
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
transition.cljs$lang$applyTo = (function (arglist__8325){
var sm = cljs.core.first(arglist__8325);
var required = cljs.core.first(cljs.core.next(arglist__8325));
var states = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8325)));
var context = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8325)));
return transition__delegate.call(this, sm, required, states, context);
});
return transition;
})()
;
torrent_client.client.waltz.machine = (function machine(p__8326){
var map__8327__8328 = p__8326;
var map__8327__8329 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8327__8328))?cljs.core.apply.call(null,cljs.core.hash_map,map__8327__8328):map__8327__8328);
var current__8330 = cljs.core.get.call(null,map__8327__8329,"\uFDD0'current");
var label__8331 = cljs.core.get.call(null,map__8327__8329,"\uFDD0'label");

return cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'debug","\uFDD0'name","\uFDD0'current","\uFDD0'states","\uFDD0'events"],{"\uFDD0'debug":true,"\uFDD0'name":cljs.core.name.call(null,label__8331),"\uFDD0'current":cljs.core.set(["\uFDD0'init"]),"\uFDD0'states":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'events":cljs.core.ObjMap.fromObject([],{})}));
});
