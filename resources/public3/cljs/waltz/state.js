goog.provide('waltz.state');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
waltz.state.debug_log = (function() { 
var debug_log__delegate = function (sm,v,vs){
if(cljs.core.truth_((function (){var and__3546__auto____6342 = console;

if(cljs.core.truth_(and__3546__auto____6342))
{return cljs.core.deref.call(null,sm).call(null,"\uFDD0'debug");
} else
{return and__3546__auto____6342;
}
})()))
{var s__6343 = cljs.core.apply.call(null,cljs.core.str,waltz.state.get_name.call(null,sm)," :: ",v,vs);

return console.log(s__6343);
} else
{return null;
}
};
var debug_log = function (sm,v,var_args){
var vs = null;
if (goog.isDef(var_args)) {
  vs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return debug_log__delegate.call(this, sm, v, vs);
};
debug_log.cljs$lang$maxFixedArity = 2;
debug_log.cljs$lang$applyTo = (function (arglist__6344){
var sm = cljs.core.first(arglist__6344);
var v = cljs.core.first(cljs.core.next(arglist__6344));
var vs = cljs.core.rest(cljs.core.next(arglist__6344));
return debug_log__delegate.call(this, sm, v, vs);
});
return debug_log;
})()
;
waltz.state.__GT_coll = (function __GT_coll(v){
if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,v)))
{return v;
} else
{return cljs.core.Vector.fromArray([v]);
}
});
waltz.state.state_STAR_ = (function state_STAR_(){
return cljs.core.ObjMap.fromObject(["\uFDD0'in","\uFDD0'out","\uFDD0'constraints"],{"\uFDD0'in":cljs.core.Vector.fromArray([]),"\uFDD0'out":cljs.core.Vector.fromArray([]),"\uFDD0'constraints":cljs.core.Vector.fromArray([])});
});
/**
* @param {...*} var_args
*/
waltz.state.machine = (function() { 
var machine__delegate = function (p__6345){
var vec__6346__6347 = p__6345;
var n__6348 = cljs.core.nth.call(null,vec__6346__6347,0,null);

return cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'debug","\uFDD0'name","\uFDD0'current","\uFDD0'states","\uFDD0'events"],{"\uFDD0'debug":true,"\uFDD0'name":cljs.core.name.call(null,n__6348),"\uFDD0'current":cljs.core.set([]),"\uFDD0'states":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'events":cljs.core.ObjMap.fromObject([],{})}));
};
var machine = function (var_args){
var p__6345 = null;
if (goog.isDef(var_args)) {
  p__6345 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return machine__delegate.call(this, p__6345);
};
machine.cljs$lang$maxFixedArity = 0;
machine.cljs$lang$applyTo = (function (arglist__6349){
var p__6345 = cljs.core.seq( arglist__6349 );;
return machine__delegate.call(this, p__6345);
});
return machine;
})()
;
waltz.state.get_name = (function get_name(sm){
return waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["\uFDD0'name"]));
});
waltz.state.get_in_sm = (function get_in_sm(sm,ks){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,sm),ks);
});
waltz.state.assoc_sm = (function assoc_sm(sm,ks,v){
return cljs.core.swap_BANG_.call(null,sm,(function (p1__6350_SHARP_){
return cljs.core.assoc_in.call(null,p1__6350_SHARP_,ks,v);
}));
});
/**
* @param {...*} var_args
*/
waltz.state.update_sm = (function() { 
var update_sm__delegate = function (sm,fntail){
return cljs.core.swap_BANG_.call(null,sm,(function (p1__6351_SHARP_){
return cljs.core.apply.call(null,cljs.core.update_in,p1__6351_SHARP_,fntail);
}));
};
var update_sm = function (sm,var_args){
var fntail = null;
if (goog.isDef(var_args)) {
  fntail = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return update_sm__delegate.call(this, sm, fntail);
};
update_sm.cljs$lang$maxFixedArity = 1;
update_sm.cljs$lang$applyTo = (function (arglist__6352){
var sm = cljs.core.first(arglist__6352);
var fntail = cljs.core.rest(arglist__6352);
return update_sm__delegate.call(this, sm, fntail);
});
return update_sm;
})()
;
waltz.state.current = (function current(sm){
return waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["\uFDD0'current"]));
});
waltz.state.in_QMARK_ = (function in_QMARK_(sm,state){
return waltz.state.current.call(null,sm).call(null,state);
});
waltz.state.has_state_QMARK_ = (function has_state_QMARK_(sm,state){
return waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["\uFDD0'states",state]));
});
waltz.state.has_event_QMARK_ = (function has_event_QMARK_(sm,trans){
return waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["\uFDD0'events",trans]));
});
waltz.state.add_state = (function add_state(sm,name,v){
return waltz.state.assoc_sm.call(null,sm,cljs.core.Vector.fromArray(["\uFDD0'states",name]),v);
});
waltz.state.add_event = (function add_event(sm,name,v){
return waltz.state.assoc_sm.call(null,sm,cljs.core.Vector.fromArray(["\uFDD0'events",name]),v);
});
waltz.state.in_STAR_ = (function in_STAR_(state,fn){
return cljs.core.update_in.call(null,state,cljs.core.Vector.fromArray(["\uFDD0'in"]),cljs.core.conj,fn);
});
waltz.state.out_STAR_ = (function out_STAR_(state,fn){
return cljs.core.update_in.call(null,state,cljs.core.Vector.fromArray(["\uFDD0'out"]),cljs.core.conj,fn);
});
waltz.state.constraint = (function constraint(state,fn){
return cljs.core.update_in.call(null,state,cljs.core.Vector.fromArray(["\uFDD0'constraint"]),cljs.core.conj,fn);
});
waltz.state.can_transition_QMARK_ = (function can_transition_QMARK_(sm,state){
var trans__6354 = waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["\uFDD0'states",state,"\uFDD0'constraints"]));

if(cljs.core.truth_(trans__6354))
{return cljs.core.every_QMARK_.call(null,(function (p1__6353_SHARP_){
return p1__6353_SHARP_.call(null,state);
}),trans__6354);
} else
{return true;
}
});
/**
* @param {...*} var_args
*/
waltz.state.set = (function() { 
var set__delegate = function (sm,states,context){
var G__6355__6356 = cljs.core.seq.call(null,waltz.state.__GT_coll.call(null,states));

if(cljs.core.truth_(G__6355__6356))
{var state__6357 = cljs.core.first.call(null,G__6355__6356);
var G__6355__6358 = G__6355__6356;

while(true){
if(cljs.core.truth_(waltz.state.can_transition_QMARK_.call(null,sm,state__6357)))
{var cur_in__6359 = waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["\uFDD0'states",state__6357,"\uFDD0'in"]));

waltz.state.update_sm.call(null,sm,cljs.core.Vector.fromArray(["\uFDD0'current"]),cljs.core.conj,state__6357);
waltz.state.debug_log.call(null,sm,"(set ",cljs.core.str.call(null,state__6357),") -> ",cljs.core.pr_str.call(null,waltz.state.current.call(null,sm)));
if(cljs.core.truth_(cljs.core.seq.call(null,cur_in__6359)))
{waltz.state.debug_log.call(null,sm,"(in ",cljs.core.str.call(null,state__6357),")");
var G__6360__6361 = cljs.core.seq.call(null,cur_in__6359);

if(cljs.core.truth_(G__6360__6361))
{var func__6362 = cljs.core.first.call(null,G__6360__6361);
var G__6360__6363 = G__6360__6361;

while(true){
cljs.core.apply.call(null,func__6362,context);
var temp__3698__auto____6364 = cljs.core.next.call(null,G__6360__6363);

if(cljs.core.truth_(temp__3698__auto____6364))
{var G__6360__6365 = temp__3698__auto____6364;

{
var G__6368 = cljs.core.first.call(null,G__6360__6365);
var G__6369 = G__6360__6365;
func__6362 = G__6368;
G__6360__6363 = G__6369;
continue;
}
} else
{}
break;
}
} else
{}
} else
{}
} else
{}
var temp__3698__auto____6366 = cljs.core.next.call(null,G__6355__6358);

if(cljs.core.truth_(temp__3698__auto____6366))
{var G__6355__6367 = temp__3698__auto____6366;

{
var G__6370 = cljs.core.first.call(null,G__6355__6367);
var G__6371 = G__6355__6367;
state__6357 = G__6370;
G__6355__6358 = G__6371;
continue;
}
} else
{}
break;
}
} else
{}
return sm;
};
var set = function (sm,states,var_args){
var context = null;
if (goog.isDef(var_args)) {
  context = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set__delegate.call(this, sm, states, context);
};
set.cljs$lang$maxFixedArity = 2;
set.cljs$lang$applyTo = (function (arglist__6372){
var sm = cljs.core.first(arglist__6372);
var states = cljs.core.first(cljs.core.next(arglist__6372));
var context = cljs.core.rest(cljs.core.next(arglist__6372));
return set__delegate.call(this, sm, states, context);
});
return set;
})()
;
/**
* @param {...*} var_args
*/
waltz.state.unset = (function() { 
var unset__delegate = function (sm,states,context){
var G__6373__6374 = cljs.core.seq.call(null,waltz.state.__GT_coll.call(null,states));

if(cljs.core.truth_(G__6373__6374))
{var state__6375 = cljs.core.first.call(null,G__6373__6374);
var G__6373__6376 = G__6373__6374;

while(true){
if(cljs.core.truth_(waltz.state.in_QMARK_.call(null,sm,state__6375)))
{var cur_out__6377 = waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["\uFDD0'states",state__6375,"\uFDD0'out"]));

waltz.state.update_sm.call(null,sm,cljs.core.Vector.fromArray(["\uFDD0'current"]),cljs.core.disj,state__6375);
waltz.state.debug_log.call(null,sm,"(unset ",cljs.core.str.call(null,state__6375,")")," -> ",cljs.core.pr_str.call(null,waltz.state.current.call(null,sm)));
if(cljs.core.truth_(cljs.core.seq.call(null,cur_out__6377)))
{waltz.state.debug_log.call(null,sm,"(out ",cljs.core.str.call(null,state__6375),")");
var G__6378__6379 = cljs.core.seq.call(null,cur_out__6377);

if(cljs.core.truth_(G__6378__6379))
{var func__6380 = cljs.core.first.call(null,G__6378__6379);
var G__6378__6381 = G__6378__6379;

while(true){
cljs.core.apply.call(null,func__6380,context);
var temp__3698__auto____6382 = cljs.core.next.call(null,G__6378__6381);

if(cljs.core.truth_(temp__3698__auto____6382))
{var G__6378__6383 = temp__3698__auto____6382;

{
var G__6386 = cljs.core.first.call(null,G__6378__6383);
var G__6387 = G__6378__6383;
func__6380 = G__6386;
G__6378__6381 = G__6387;
continue;
}
} else
{}
break;
}
} else
{}
} else
{}
} else
{}
var temp__3698__auto____6384 = cljs.core.next.call(null,G__6373__6376);

if(cljs.core.truth_(temp__3698__auto____6384))
{var G__6373__6385 = temp__3698__auto____6384;

{
var G__6388 = cljs.core.first.call(null,G__6373__6385);
var G__6389 = G__6373__6385;
state__6375 = G__6388;
G__6373__6376 = G__6389;
continue;
}
} else
{}
break;
}
} else
{}
return sm;
};
var unset = function (sm,states,var_args){
var context = null;
if (goog.isDef(var_args)) {
  context = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return unset__delegate.call(this, sm, states, context);
};
unset.cljs$lang$maxFixedArity = 2;
unset.cljs$lang$applyTo = (function (arglist__6390){
var sm = cljs.core.first(arglist__6390);
var states = cljs.core.first(cljs.core.next(arglist__6390));
var context = cljs.core.rest(cljs.core.next(arglist__6390));
return unset__delegate.call(this, sm, states, context);
});
return unset;
})()
;
/**
* @param {...*} var_args
*/
waltz.state.set_ex = (function() { 
var set_ex__delegate = function (sm,to_unset,to_set,context){
cljs.core.apply.call(null,waltz.state.unset,sm,to_unset,context);
return cljs.core.apply.call(null,waltz.state.set,sm,to_set,context);
};
var set_ex = function (sm,to_unset,to_set,var_args){
var context = null;
if (goog.isDef(var_args)) {
  context = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return set_ex__delegate.call(this, sm, to_unset, to_set, context);
};
set_ex.cljs$lang$maxFixedArity = 3;
set_ex.cljs$lang$applyTo = (function (arglist__6391){
var sm = cljs.core.first(arglist__6391);
var to_unset = cljs.core.first(cljs.core.next(arglist__6391));
var to_set = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6391)));
var context = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6391)));
return set_ex__delegate.call(this, sm, to_unset, to_set, context);
});
return set_ex;
})()
;
/**
* @param {...*} var_args
*/
waltz.state.trigger = (function() { 
var trigger__delegate = function (sm,ts,context){
var G__6392__6393 = cljs.core.seq.call(null,waltz.state.__GT_coll.call(null,ts));

if(cljs.core.truth_(G__6392__6393))
{var trans__6394 = cljs.core.first.call(null,G__6392__6393);
var G__6392__6395 = G__6392__6393;

while(true){
var temp__3698__auto____6396 = waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["\uFDD0'events",trans__6394]));

if(cljs.core.truth_(temp__3698__auto____6396))
{var t__6397 = temp__3698__auto____6396;

var res__6398 = cljs.core.apply.call(null,t__6397,context);

waltz.state.debug_log.call(null,sm,"(trans ",cljs.core.str.call(null,trans__6394),") -> ",cljs.core.boolean$.call(null,res__6398)," :: context ",cljs.core.pr_str.call(null,context));
} else
{}
var temp__3698__auto____6399 = cljs.core.next.call(null,G__6392__6395);

if(cljs.core.truth_(temp__3698__auto____6399))
{var G__6392__6400 = temp__3698__auto____6399;

{
var G__6401 = cljs.core.first.call(null,G__6392__6400);
var G__6402 = G__6392__6400;
trans__6394 = G__6401;
G__6392__6395 = G__6402;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
};
var trigger = function (sm,ts,var_args){
var context = null;
if (goog.isDef(var_args)) {
  context = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return trigger__delegate.call(this, sm, ts, context);
};
trigger.cljs$lang$maxFixedArity = 2;
trigger.cljs$lang$applyTo = (function (arglist__6403){
var sm = cljs.core.first(arglist__6403);
var ts = cljs.core.first(cljs.core.next(arglist__6403));
var context = cljs.core.rest(cljs.core.next(arglist__6403));
return trigger__delegate.call(this, sm, ts, context);
});
return trigger;
})()
;
waltz.state.set_debug = (function set_debug(sm,dbg){
return waltz.state.assoc_sm.call(null,sm,"\uFDD0'debug",dbg);
});
