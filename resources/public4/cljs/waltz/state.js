goog.provide('waltz.state');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
waltz.state.debug_log = (function() { 
var debug_log__delegate = function (sm,v,vs){
if(cljs.core.truth_((function (){var and__3546__auto____7576 = console;

if(cljs.core.truth_(and__3546__auto____7576))
{return cljs.core.deref.call(null,sm).call(null,"\uFDD0'debug");
} else
{return and__3546__auto____7576;
}
})()))
{var s__7577 = cljs.core.apply.call(null,cljs.core.str,waltz.state.get_name.call(null,sm)," :: ",v,vs);

return console.log(s__7577);
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
debug_log.cljs$lang$applyTo = (function (arglist__7578){
var sm = cljs.core.first(arglist__7578);
var v = cljs.core.first(cljs.core.next(arglist__7578));
var vs = cljs.core.rest(cljs.core.next(arglist__7578));
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
var machine__delegate = function (p__7579){
var vec__7580__7581 = p__7579;
var n__7582 = cljs.core.nth.call(null,vec__7580__7581,0,null);

return cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'debug","\uFDD0'name","\uFDD0'current","\uFDD0'states","\uFDD0'events"],{"\uFDD0'debug":true,"\uFDD0'name":cljs.core.name.call(null,n__7582),"\uFDD0'current":cljs.core.set([]),"\uFDD0'states":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'events":cljs.core.ObjMap.fromObject([],{})}));
};
var machine = function (var_args){
var p__7579 = null;
if (goog.isDef(var_args)) {
  p__7579 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return machine__delegate.call(this, p__7579);
};
machine.cljs$lang$maxFixedArity = 0;
machine.cljs$lang$applyTo = (function (arglist__7583){
var p__7579 = cljs.core.seq( arglist__7583 );;
return machine__delegate.call(this, p__7579);
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
return cljs.core.swap_BANG_.call(null,sm,(function (p1__7584_SHARP_){
return cljs.core.assoc_in.call(null,p1__7584_SHARP_,ks,v);
}));
});
/**
* @param {...*} var_args
*/
waltz.state.update_sm = (function() { 
var update_sm__delegate = function (sm,fntail){
return cljs.core.swap_BANG_.call(null,sm,(function (p1__7585_SHARP_){
return cljs.core.apply.call(null,cljs.core.update_in,p1__7585_SHARP_,fntail);
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
update_sm.cljs$lang$applyTo = (function (arglist__7586){
var sm = cljs.core.first(arglist__7586);
var fntail = cljs.core.rest(arglist__7586);
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
var trans__7588 = waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["\uFDD0'states",state,"\uFDD0'constraints"]));

if(cljs.core.truth_(trans__7588))
{return cljs.core.every_QMARK_.call(null,(function (p1__7587_SHARP_){
return p1__7587_SHARP_.call(null,state);
}),trans__7588);
} else
{return true;
}
});
/**
* @param {...*} var_args
*/
waltz.state.set = (function() { 
var set__delegate = function (sm,states,context){
var G__7589__7590 = cljs.core.seq.call(null,waltz.state.__GT_coll.call(null,states));

if(cljs.core.truth_(G__7589__7590))
{var state__7591 = cljs.core.first.call(null,G__7589__7590);
var G__7589__7592 = G__7589__7590;

while(true){
if(cljs.core.truth_(waltz.state.can_transition_QMARK_.call(null,sm,state__7591)))
{var cur_in__7593 = waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["\uFDD0'states",state__7591,"\uFDD0'in"]));

waltz.state.update_sm.call(null,sm,cljs.core.Vector.fromArray(["\uFDD0'current"]),cljs.core.conj,state__7591);
waltz.state.debug_log.call(null,sm,"(set ",cljs.core.str.call(null,state__7591),") -> ",cljs.core.pr_str.call(null,waltz.state.current.call(null,sm)));
if(cljs.core.truth_(cljs.core.seq.call(null,cur_in__7593)))
{waltz.state.debug_log.call(null,sm,"(in ",cljs.core.str.call(null,state__7591),")");
var G__7594__7595 = cljs.core.seq.call(null,cur_in__7593);

if(cljs.core.truth_(G__7594__7595))
{var func__7596 = cljs.core.first.call(null,G__7594__7595);
var G__7594__7597 = G__7594__7595;

while(true){
cljs.core.apply.call(null,func__7596,context);
var temp__3698__auto____7598 = cljs.core.next.call(null,G__7594__7597);

if(cljs.core.truth_(temp__3698__auto____7598))
{var G__7594__7599 = temp__3698__auto____7598;

{
var G__7602 = cljs.core.first.call(null,G__7594__7599);
var G__7603 = G__7594__7599;
func__7596 = G__7602;
G__7594__7597 = G__7603;
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
var temp__3698__auto____7600 = cljs.core.next.call(null,G__7589__7592);

if(cljs.core.truth_(temp__3698__auto____7600))
{var G__7589__7601 = temp__3698__auto____7600;

{
var G__7604 = cljs.core.first.call(null,G__7589__7601);
var G__7605 = G__7589__7601;
state__7591 = G__7604;
G__7589__7592 = G__7605;
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
set.cljs$lang$applyTo = (function (arglist__7606){
var sm = cljs.core.first(arglist__7606);
var states = cljs.core.first(cljs.core.next(arglist__7606));
var context = cljs.core.rest(cljs.core.next(arglist__7606));
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
var G__7607__7608 = cljs.core.seq.call(null,waltz.state.__GT_coll.call(null,states));

if(cljs.core.truth_(G__7607__7608))
{var state__7609 = cljs.core.first.call(null,G__7607__7608);
var G__7607__7610 = G__7607__7608;

while(true){
if(cljs.core.truth_(waltz.state.in_QMARK_.call(null,sm,state__7609)))
{var cur_out__7611 = waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["\uFDD0'states",state__7609,"\uFDD0'out"]));

waltz.state.update_sm.call(null,sm,cljs.core.Vector.fromArray(["\uFDD0'current"]),cljs.core.disj,state__7609);
waltz.state.debug_log.call(null,sm,"(unset ",cljs.core.str.call(null,state__7609,")")," -> ",cljs.core.pr_str.call(null,waltz.state.current.call(null,sm)));
if(cljs.core.truth_(cljs.core.seq.call(null,cur_out__7611)))
{waltz.state.debug_log.call(null,sm,"(out ",cljs.core.str.call(null,state__7609),")");
var G__7612__7613 = cljs.core.seq.call(null,cur_out__7611);

if(cljs.core.truth_(G__7612__7613))
{var func__7614 = cljs.core.first.call(null,G__7612__7613);
var G__7612__7615 = G__7612__7613;

while(true){
cljs.core.apply.call(null,func__7614,context);
var temp__3698__auto____7616 = cljs.core.next.call(null,G__7612__7615);

if(cljs.core.truth_(temp__3698__auto____7616))
{var G__7612__7617 = temp__3698__auto____7616;

{
var G__7620 = cljs.core.first.call(null,G__7612__7617);
var G__7621 = G__7612__7617;
func__7614 = G__7620;
G__7612__7615 = G__7621;
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
var temp__3698__auto____7618 = cljs.core.next.call(null,G__7607__7610);

if(cljs.core.truth_(temp__3698__auto____7618))
{var G__7607__7619 = temp__3698__auto____7618;

{
var G__7622 = cljs.core.first.call(null,G__7607__7619);
var G__7623 = G__7607__7619;
state__7609 = G__7622;
G__7607__7610 = G__7623;
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
unset.cljs$lang$applyTo = (function (arglist__7624){
var sm = cljs.core.first(arglist__7624);
var states = cljs.core.first(cljs.core.next(arglist__7624));
var context = cljs.core.rest(cljs.core.next(arglist__7624));
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
set_ex.cljs$lang$applyTo = (function (arglist__7625){
var sm = cljs.core.first(arglist__7625);
var to_unset = cljs.core.first(cljs.core.next(arglist__7625));
var to_set = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7625)));
var context = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7625)));
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
var G__7626__7627 = cljs.core.seq.call(null,waltz.state.__GT_coll.call(null,ts));

if(cljs.core.truth_(G__7626__7627))
{var trans__7628 = cljs.core.first.call(null,G__7626__7627);
var G__7626__7629 = G__7626__7627;

while(true){
var temp__3698__auto____7630 = waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["\uFDD0'events",trans__7628]));

if(cljs.core.truth_(temp__3698__auto____7630))
{var t__7631 = temp__3698__auto____7630;

var res__7632 = cljs.core.apply.call(null,t__7631,context);

waltz.state.debug_log.call(null,sm,"(trans ",cljs.core.str.call(null,trans__7628),") -> ",cljs.core.boolean$.call(null,res__7632)," :: context ",cljs.core.pr_str.call(null,context));
} else
{}
var temp__3698__auto____7633 = cljs.core.next.call(null,G__7626__7629);

if(cljs.core.truth_(temp__3698__auto____7633))
{var G__7626__7634 = temp__3698__auto____7633;

{
var G__7635 = cljs.core.first.call(null,G__7626__7634);
var G__7636 = G__7626__7634;
trans__7628 = G__7635;
G__7626__7629 = G__7636;
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
trigger.cljs$lang$applyTo = (function (arglist__7637){
var sm = cljs.core.first(arglist__7637);
var ts = cljs.core.first(cljs.core.next(arglist__7637));
var context = cljs.core.rest(cljs.core.next(arglist__7637));
return trigger__delegate.call(this, sm, ts, context);
});
return trigger;
})()
;
waltz.state.set_debug = (function set_debug(sm,dbg){
return waltz.state.assoc_sm.call(null,sm,"\uFDD0'debug",dbg);
});
