goog.provide('waltz.state');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
waltz.state.debug_log = (function() { 
var debug_log__delegate = function (sm,v,vs){
if(cljs.core.truth_((function (){var and__3546__auto____7369 = console;

if(cljs.core.truth_(and__3546__auto____7369))
{return cljs.core.deref.call(null,sm).call(null,"\uFDD0'debug");
} else
{return and__3546__auto____7369;
}
})()))
{var s__7370 = cljs.core.apply.call(null,cljs.core.str,waltz.state.get_name.call(null,sm)," :: ",v,vs);

return console.log(s__7370);
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
debug_log.cljs$lang$applyTo = (function (arglist__7371){
var sm = cljs.core.first(arglist__7371);
var v = cljs.core.first(cljs.core.next(arglist__7371));
var vs = cljs.core.rest(cljs.core.next(arglist__7371));
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
var machine__delegate = function (p__7372){
var vec__7373__7374 = p__7372;
var n__7375 = cljs.core.nth.call(null,vec__7373__7374,0,null);

return cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'debug","\uFDD0'name","\uFDD0'current","\uFDD0'states","\uFDD0'events"],{"\uFDD0'debug":true,"\uFDD0'name":cljs.core.name.call(null,n__7375),"\uFDD0'current":cljs.core.set([]),"\uFDD0'states":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'events":cljs.core.ObjMap.fromObject([],{})}));
};
var machine = function (var_args){
var p__7372 = null;
if (goog.isDef(var_args)) {
  p__7372 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return machine__delegate.call(this, p__7372);
};
machine.cljs$lang$maxFixedArity = 0;
machine.cljs$lang$applyTo = (function (arglist__7376){
var p__7372 = cljs.core.seq( arglist__7376 );;
return machine__delegate.call(this, p__7372);
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
return cljs.core.swap_BANG_.call(null,sm,(function (p1__7377_SHARP_){
return cljs.core.assoc_in.call(null,p1__7377_SHARP_,ks,v);
}));
});
/**
* @param {...*} var_args
*/
waltz.state.update_sm = (function() { 
var update_sm__delegate = function (sm,fntail){
return cljs.core.swap_BANG_.call(null,sm,(function (p1__7378_SHARP_){
return cljs.core.apply.call(null,cljs.core.update_in,p1__7378_SHARP_,fntail);
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
update_sm.cljs$lang$applyTo = (function (arglist__7379){
var sm = cljs.core.first(arglist__7379);
var fntail = cljs.core.rest(arglist__7379);
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
var trans__7381 = waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["\uFDD0'states",state,"\uFDD0'constraints"]));

if(cljs.core.truth_(trans__7381))
{return cljs.core.every_QMARK_.call(null,(function (p1__7380_SHARP_){
return p1__7380_SHARP_.call(null,state);
}),trans__7381);
} else
{return true;
}
});
/**
* @param {...*} var_args
*/
waltz.state.set = (function() { 
var set__delegate = function (sm,states,context){
var G__7382__7383 = cljs.core.seq.call(null,waltz.state.__GT_coll.call(null,states));

if(cljs.core.truth_(G__7382__7383))
{var state__7384 = cljs.core.first.call(null,G__7382__7383);
var G__7382__7385 = G__7382__7383;

while(true){
if(cljs.core.truth_(waltz.state.can_transition_QMARK_.call(null,sm,state__7384)))
{var cur_in__7386 = waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["\uFDD0'states",state__7384,"\uFDD0'in"]));

waltz.state.update_sm.call(null,sm,cljs.core.Vector.fromArray(["\uFDD0'current"]),cljs.core.conj,state__7384);
waltz.state.debug_log.call(null,sm,"(set ",cljs.core.str.call(null,state__7384),") -> ",cljs.core.pr_str.call(null,waltz.state.current.call(null,sm)));
if(cljs.core.truth_(cljs.core.seq.call(null,cur_in__7386)))
{waltz.state.debug_log.call(null,sm,"(in ",cljs.core.str.call(null,state__7384),")");
var G__7387__7388 = cljs.core.seq.call(null,cur_in__7386);

if(cljs.core.truth_(G__7387__7388))
{var func__7389 = cljs.core.first.call(null,G__7387__7388);
var G__7387__7390 = G__7387__7388;

while(true){
cljs.core.apply.call(null,func__7389,context);
var temp__3698__auto____7391 = cljs.core.next.call(null,G__7387__7390);

if(cljs.core.truth_(temp__3698__auto____7391))
{var G__7387__7392 = temp__3698__auto____7391;

{
var G__7395 = cljs.core.first.call(null,G__7387__7392);
var G__7396 = G__7387__7392;
func__7389 = G__7395;
G__7387__7390 = G__7396;
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
var temp__3698__auto____7393 = cljs.core.next.call(null,G__7382__7385);

if(cljs.core.truth_(temp__3698__auto____7393))
{var G__7382__7394 = temp__3698__auto____7393;

{
var G__7397 = cljs.core.first.call(null,G__7382__7394);
var G__7398 = G__7382__7394;
state__7384 = G__7397;
G__7382__7385 = G__7398;
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
set.cljs$lang$applyTo = (function (arglist__7399){
var sm = cljs.core.first(arglist__7399);
var states = cljs.core.first(cljs.core.next(arglist__7399));
var context = cljs.core.rest(cljs.core.next(arglist__7399));
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
var G__7400__7401 = cljs.core.seq.call(null,waltz.state.__GT_coll.call(null,states));

if(cljs.core.truth_(G__7400__7401))
{var state__7402 = cljs.core.first.call(null,G__7400__7401);
var G__7400__7403 = G__7400__7401;

while(true){
if(cljs.core.truth_(waltz.state.in_QMARK_.call(null,sm,state__7402)))
{var cur_out__7404 = waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["\uFDD0'states",state__7402,"\uFDD0'out"]));

waltz.state.update_sm.call(null,sm,cljs.core.Vector.fromArray(["\uFDD0'current"]),cljs.core.disj,state__7402);
waltz.state.debug_log.call(null,sm,"(unset ",cljs.core.str.call(null,state__7402,")")," -> ",cljs.core.pr_str.call(null,waltz.state.current.call(null,sm)));
if(cljs.core.truth_(cljs.core.seq.call(null,cur_out__7404)))
{waltz.state.debug_log.call(null,sm,"(out ",cljs.core.str.call(null,state__7402),")");
var G__7405__7406 = cljs.core.seq.call(null,cur_out__7404);

if(cljs.core.truth_(G__7405__7406))
{var func__7407 = cljs.core.first.call(null,G__7405__7406);
var G__7405__7408 = G__7405__7406;

while(true){
cljs.core.apply.call(null,func__7407,context);
var temp__3698__auto____7409 = cljs.core.next.call(null,G__7405__7408);

if(cljs.core.truth_(temp__3698__auto____7409))
{var G__7405__7410 = temp__3698__auto____7409;

{
var G__7413 = cljs.core.first.call(null,G__7405__7410);
var G__7414 = G__7405__7410;
func__7407 = G__7413;
G__7405__7408 = G__7414;
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
var temp__3698__auto____7411 = cljs.core.next.call(null,G__7400__7403);

if(cljs.core.truth_(temp__3698__auto____7411))
{var G__7400__7412 = temp__3698__auto____7411;

{
var G__7415 = cljs.core.first.call(null,G__7400__7412);
var G__7416 = G__7400__7412;
state__7402 = G__7415;
G__7400__7403 = G__7416;
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
unset.cljs$lang$applyTo = (function (arglist__7417){
var sm = cljs.core.first(arglist__7417);
var states = cljs.core.first(cljs.core.next(arglist__7417));
var context = cljs.core.rest(cljs.core.next(arglist__7417));
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
set_ex.cljs$lang$applyTo = (function (arglist__7418){
var sm = cljs.core.first(arglist__7418);
var to_unset = cljs.core.first(cljs.core.next(arglist__7418));
var to_set = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7418)));
var context = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7418)));
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
var G__7419__7420 = cljs.core.seq.call(null,waltz.state.__GT_coll.call(null,ts));

if(cljs.core.truth_(G__7419__7420))
{var trans__7421 = cljs.core.first.call(null,G__7419__7420);
var G__7419__7422 = G__7419__7420;

while(true){
var temp__3698__auto____7423 = waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["\uFDD0'events",trans__7421]));

if(cljs.core.truth_(temp__3698__auto____7423))
{var t__7424 = temp__3698__auto____7423;

var res__7425 = cljs.core.apply.call(null,t__7424,context);

waltz.state.debug_log.call(null,sm,"(trans ",cljs.core.str.call(null,trans__7421),") -> ",cljs.core.boolean$.call(null,res__7425)," :: context ",cljs.core.pr_str.call(null,context));
} else
{}
var temp__3698__auto____7426 = cljs.core.next.call(null,G__7419__7422);

if(cljs.core.truth_(temp__3698__auto____7426))
{var G__7419__7427 = temp__3698__auto____7426;

{
var G__7428 = cljs.core.first.call(null,G__7419__7427);
var G__7429 = G__7419__7427;
trans__7421 = G__7428;
G__7419__7422 = G__7429;
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
trigger.cljs$lang$applyTo = (function (arglist__7430){
var sm = cljs.core.first(arglist__7430);
var ts = cljs.core.first(cljs.core.next(arglist__7430));
var context = cljs.core.rest(cljs.core.next(arglist__7430));
return trigger__delegate.call(this, sm, ts, context);
});
return trigger;
})()
;
waltz.state.set_debug = (function set_debug(sm,dbg){
return waltz.state.assoc_sm.call(null,sm,"\uFDD0'debug",dbg);
});
