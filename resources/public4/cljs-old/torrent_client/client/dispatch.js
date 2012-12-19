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
var react_to__5583 = (function (event_pred,reactor){
return react_to.call(null,null,event_pred,reactor);
});
var react_to__5584 = (function (max_count,event_pred,reactor){
var reaction__5582 = cljs.core.ObjMap.fromObject(["\uFDD0'max-count","\uFDD0'event-pred","\uFDD0'reactor"],{"\uFDD0'max-count":max_count,"\uFDD0'event-pred":event_pred,"\uFDD0'reactor":reactor});

cljs.core.swap_BANG_.call(null,torrent_client.client.dispatch.reactions,cljs.core.assoc,reaction__5582,0);
return reaction__5582;
});
react_to = function(max_count,event_pred,reactor){
switch(arguments.length){
case  2 :
return react_to__5583.call(this,max_count,event_pred);
case  3 :
return react_to__5584.call(this,max_count,event_pred,reactor);
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
var fire__5621 = (function (event_id){
return fire.call(null,event_id,null);
});
var fire__5622 = (function (event_id,event_data){
var matching_reactions__5594 = cljs.core.filter.call(null,(function (p__5586){
var vec__5587__5589 = p__5586;
var map__5588__5590 = cljs.core.nth.call(null,vec__5587__5589,0,null);
var map__5588__5591 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5588__5590))?cljs.core.apply.call(null,cljs.core.hash_map,map__5588__5590):map__5588__5590);
var event_pred__5592 = cljs.core.get.call(null,map__5588__5591,"\uFDD0'event-pred");
var run_count__5593 = cljs.core.nth.call(null,vec__5587__5589,1,null);

return event_pred__5592.call(null,event_id);
}),cljs.core.deref.call(null,torrent_client.client.dispatch.reactions));

var G__5595__5596 = cljs.core.seq.call(null,matching_reactions__5594);

if(cljs.core.truth_(G__5595__5596))
{var G__5598__5600 = cljs.core.first.call(null,G__5595__5596);
var vec__5599__5601 = G__5598__5600;
var reaction__5602 = cljs.core.nth.call(null,vec__5599__5601,0,null);
var run_count__5603 = cljs.core.nth.call(null,vec__5599__5601,1,null);
var G__5595__5604 = G__5595__5596;

var G__5598__5605 = G__5598__5600;
var G__5595__5606 = G__5595__5604;

while(true){
var vec__5607__5608 = G__5598__5605;
var reaction__5609 = cljs.core.nth.call(null,vec__5607__5608,0,null);
var run_count__5610 = cljs.core.nth.call(null,vec__5607__5608,1,null);
var G__5595__5611 = G__5595__5606;

var map__5612__5613 = reaction__5609;
var map__5612__5614 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5612__5613))?cljs.core.apply.call(null,cljs.core.hash_map,map__5612__5613):map__5612__5613);
var reactor__5615 = cljs.core.get.call(null,map__5612__5614,"\uFDD0'reactor");
var max_count__5616 = cljs.core.get.call(null,map__5612__5614,"\uFDD0'max-count");
var run_count__5617 = (run_count__5610 + 1);

reactor__5615.call(null,event_id,event_data);
if(cljs.core.truth_((function (){var and__3546__auto____5618 = max_count__5616;

if(cljs.core.truth_(and__3546__auto____5618))
{return (max_count__5616 <= run_count__5617);
} else
{return and__3546__auto____5618;
}
})()))
{torrent_client.client.dispatch.delete_reaction.call(null,reaction__5609);
} else
{cljs.core.swap_BANG_.call(null,torrent_client.client.dispatch.reactions,cljs.core.assoc,reaction__5609,run_count__5617);
}
var temp__3698__auto____5619 = cljs.core.next.call(null,G__5595__5611);

if(cljs.core.truth_(temp__3698__auto____5619))
{var G__5595__5620 = temp__3698__auto____5619;

{
var G__5624 = cljs.core.first.call(null,G__5595__5620);
var G__5625 = G__5595__5620;
G__5598__5605 = G__5624;
G__5595__5606 = G__5625;
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
return fire__5621.call(this,event_id);
case  2 :
return fire__5622.call(this,event_id,event_data);
}
throw('Invalid arity: ' + arguments.length);
};
return fire;
})()
;
