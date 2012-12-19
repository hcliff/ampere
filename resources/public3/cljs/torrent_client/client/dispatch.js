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
var react_to__5635 = (function (event_pred,reactor){
return react_to.call(null,null,event_pred,reactor);
});
var react_to__5636 = (function (max_count,event_pred,reactor){
var reaction__5634 = cljs.core.ObjMap.fromObject(["\uFDD0'max-count","\uFDD0'event-pred","\uFDD0'reactor"],{"\uFDD0'max-count":max_count,"\uFDD0'event-pred":event_pred,"\uFDD0'reactor":reactor});

cljs.core.swap_BANG_.call(null,torrent_client.client.dispatch.reactions,cljs.core.assoc,reaction__5634,0);
return reaction__5634;
});
react_to = function(max_count,event_pred,reactor){
switch(arguments.length){
case  2 :
return react_to__5635.call(this,max_count,event_pred);
case  3 :
return react_to__5636.call(this,max_count,event_pred,reactor);
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
var fire__5673 = (function (event_id){
return fire.call(null,event_id,null);
});
var fire__5674 = (function (event_id,event_data){
var matching_reactions__5646 = cljs.core.filter.call(null,(function (p__5638){
var vec__5639__5641 = p__5638;
var map__5640__5642 = cljs.core.nth.call(null,vec__5639__5641,0,null);
var map__5640__5643 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5640__5642))?cljs.core.apply.call(null,cljs.core.hash_map,map__5640__5642):map__5640__5642);
var event_pred__5644 = cljs.core.get.call(null,map__5640__5643,"\uFDD0'event-pred");
var run_count__5645 = cljs.core.nth.call(null,vec__5639__5641,1,null);

return event_pred__5644.call(null,event_id);
}),cljs.core.deref.call(null,torrent_client.client.dispatch.reactions));

var G__5647__5648 = cljs.core.seq.call(null,matching_reactions__5646);

if(cljs.core.truth_(G__5647__5648))
{var G__5650__5652 = cljs.core.first.call(null,G__5647__5648);
var vec__5651__5653 = G__5650__5652;
var reaction__5654 = cljs.core.nth.call(null,vec__5651__5653,0,null);
var run_count__5655 = cljs.core.nth.call(null,vec__5651__5653,1,null);
var G__5647__5656 = G__5647__5648;

var G__5650__5657 = G__5650__5652;
var G__5647__5658 = G__5647__5656;

while(true){
var vec__5659__5660 = G__5650__5657;
var reaction__5661 = cljs.core.nth.call(null,vec__5659__5660,0,null);
var run_count__5662 = cljs.core.nth.call(null,vec__5659__5660,1,null);
var G__5647__5663 = G__5647__5658;

var map__5664__5665 = reaction__5661;
var map__5664__5666 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5664__5665))?cljs.core.apply.call(null,cljs.core.hash_map,map__5664__5665):map__5664__5665);
var reactor__5667 = cljs.core.get.call(null,map__5664__5666,"\uFDD0'reactor");
var max_count__5668 = cljs.core.get.call(null,map__5664__5666,"\uFDD0'max-count");
var run_count__5669 = (run_count__5662 + 1);

reactor__5667.call(null,event_id,event_data);
if(cljs.core.truth_((function (){var and__3546__auto____5670 = max_count__5668;

if(cljs.core.truth_(and__3546__auto____5670))
{return (max_count__5668 <= run_count__5669);
} else
{return and__3546__auto____5670;
}
})()))
{torrent_client.client.dispatch.delete_reaction.call(null,reaction__5661);
} else
{cljs.core.swap_BANG_.call(null,torrent_client.client.dispatch.reactions,cljs.core.assoc,reaction__5661,run_count__5669);
}
var temp__3698__auto____5671 = cljs.core.next.call(null,G__5647__5663);

if(cljs.core.truth_(temp__3698__auto____5671))
{var G__5647__5672 = temp__3698__auto____5671;

{
var G__5676 = cljs.core.first.call(null,G__5647__5672);
var G__5677 = G__5647__5672;
G__5650__5657 = G__5676;
G__5647__5658 = G__5677;
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
return fire__5673.call(this,event_id);
case  2 :
return fire__5674.call(this,event_id,event_data);
}
throw('Invalid arity: ' + arguments.length);
};
return fire;
})()
;
