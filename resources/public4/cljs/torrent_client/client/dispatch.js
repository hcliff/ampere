goog.provide('torrent_client.client.dispatch');
goog.require('cljs.core');
/**
* Stores the current reactions.
*/
torrent_client.client.dispatch.reactions = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
/**
* Cause the specified reactor to be invoked whenever an event that
* satisfies `event-pred` is fired. reactor is a function that accepts
* two arguments: `event-id` and `event-data`.
* 
* Returns the reaction.
* 
* The reactor will continue to be invoked until one of two things
* happens:
* 
* 1. `delete-reaction` is called on this reaction.
* 
* 2. The reaction occurs `max-count` times. If `max-count` is not
* specified, the reaction will continue to be invoked until deleted.
* 
* If `max-count` is specified, `delete-reaction` will be called
* automatically when the reaction has occurred the specified number of
* times.
*/
torrent_client.client.dispatch.react_to = (function() {
var react_to = null;
var react_to__5787 = (function (event_pred,reactor){
return react_to.call(null,null,event_pred,reactor);
});
var react_to__5788 = (function (max_count,event_pred,reactor){
var reaction__5786 = cljs.core.ObjMap.fromObject(["\uFDD0'max-count","\uFDD0'event-pred","\uFDD0'reactor"],{"\uFDD0'max-count":max_count,"\uFDD0'event-pred":event_pred,"\uFDD0'reactor":reactor});

cljs.core.swap_BANG_.call(null,torrent_client.client.dispatch.reactions,cljs.core.assoc,reaction__5786,0);
return reaction__5786;
});
react_to = function(max_count,event_pred,reactor){
switch(arguments.length){
case  2 :
return react_to__5787.call(this,max_count,event_pred);
case  3 :
return react_to__5788.call(this,max_count,event_pred,reactor);
}
throw('Invalid arity: ' + arguments.length);
};
return react_to;
})()
;
/**
* Delete a reaction. After calling this function, the specified
* reaction will no longer be invoked.
*/
torrent_client.client.dispatch.delete_reaction = (function delete_reaction(reaction){
return cljs.core.swap_BANG_.call(null,torrent_client.client.dispatch.reactions,cljs.core.dissoc,reaction);
});
/**
* Raise an event to any reactors whose event-pred returns true for
* `event-id`. The `event-id` and `event-data`, if specified, are passed to
* the reactor.
*/
torrent_client.client.dispatch.fire = (function() {
var fire = null;
var fire__5825 = (function (event_id){
return fire.call(null,event_id,null);
});
var fire__5826 = (function (event_id,event_data){
var matching_reactions__5798 = cljs.core.filter.call(null,(function (p__5790){
var vec__5791__5793 = p__5790;
var map__5792__5794 = cljs.core.nth.call(null,vec__5791__5793,0,null);
var map__5792__5795 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5792__5794))?cljs.core.apply.call(null,cljs.core.hash_map,map__5792__5794):map__5792__5794);
var event_pred__5796 = cljs.core.get.call(null,map__5792__5795,"\uFDD0'event-pred");
var run_count__5797 = cljs.core.nth.call(null,vec__5791__5793,1,null);

return event_pred__5796.call(null,event_id);
}),cljs.core.deref.call(null,torrent_client.client.dispatch.reactions));

var G__5799__5800 = cljs.core.seq.call(null,matching_reactions__5798);

if(cljs.core.truth_(G__5799__5800))
{var G__5802__5804 = cljs.core.first.call(null,G__5799__5800);
var vec__5803__5805 = G__5802__5804;
var reaction__5806 = cljs.core.nth.call(null,vec__5803__5805,0,null);
var run_count__5807 = cljs.core.nth.call(null,vec__5803__5805,1,null);
var G__5799__5808 = G__5799__5800;

var G__5802__5809 = G__5802__5804;
var G__5799__5810 = G__5799__5808;

while(true){
var vec__5811__5812 = G__5802__5809;
var reaction__5813 = cljs.core.nth.call(null,vec__5811__5812,0,null);
var run_count__5814 = cljs.core.nth.call(null,vec__5811__5812,1,null);
var G__5799__5815 = G__5799__5810;

var map__5816__5817 = reaction__5813;
var map__5816__5818 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5816__5817))?cljs.core.apply.call(null,cljs.core.hash_map,map__5816__5817):map__5816__5817);
var reactor__5819 = cljs.core.get.call(null,map__5816__5818,"\uFDD0'reactor");
var max_count__5820 = cljs.core.get.call(null,map__5816__5818,"\uFDD0'max-count");
var run_count__5821 = (run_count__5814 + 1);

reactor__5819.call(null,event_id,event_data);
if(cljs.core.truth_((function (){var and__3546__auto____5822 = max_count__5820;

if(cljs.core.truth_(and__3546__auto____5822))
{return (max_count__5820 <= run_count__5821);
} else
{return and__3546__auto____5822;
}
})()))
{torrent_client.client.dispatch.delete_reaction.call(null,reaction__5813);
} else
{cljs.core.swap_BANG_.call(null,torrent_client.client.dispatch.reactions,cljs.core.assoc,reaction__5813,run_count__5821);
}
var temp__3698__auto____5823 = cljs.core.next.call(null,G__5799__5815);

if(cljs.core.truth_(temp__3698__auto____5823))
{var G__5799__5824 = temp__3698__auto____5823;

{
var G__5828 = cljs.core.first.call(null,G__5799__5824);
var G__5829 = G__5799__5824;
G__5802__5809 = G__5828;
G__5799__5810 = G__5829;
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
});
fire = function(event_id,event_data){
switch(arguments.length){
case  1 :
return fire__5825.call(this,event_id);
case  2 :
return fire__5826.call(this,event_id,event_data);
}
throw('Invalid arity: ' + arguments.length);
};
return fire;
})()
;
