goog.provide('noir.cljs.client.watcher');
goog.require('cljs.core');
goog.require('crate.tags');
goog.require('jayq.core');
goog.require('fetch.core');
goog.require('crate.core');
goog.require('cljs.reader');
noir.cljs.client.watcher.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
noir.cljs.client.watcher.$body = jayq.core.$.call(null,"\uFDD0'body");
noir.cljs.client.watcher.callbacks = cljs.core.atom.call(null,cljs.core.Vector.fromArray([]));
noir.cljs.client.watcher.cur_mode = cljs.core.atom.call(null,"\uFDD0'simple");
noir.cljs.client.watcher.poll = (function poll(){
return noir.cljs.client.watcher.wait.call(null,100,(function (){
return fetch.core.xhr.call(null,cljs.core.Vector.fromArray(["\uFDD0'get","\/noir-cljs-get-updated"]),cljs.core.ObjMap.fromObject([],{}),(function (data){
if(cljs.core.truth_((function (){var and__3546__auto____7688 = data;

if(cljs.core.truth_(and__3546__auto____7688))
{return cljs.core.not_EQ_.call(null,data,"");
} else
{return and__3546__auto____7688;
}
})()))
{eval.call(null,data);
var G__7689__7690 = cljs.core.seq.call(null,cljs.core.deref.call(null,noir.cljs.client.watcher.callbacks));

if(cljs.core.truth_(G__7689__7690))
{var cur__7691 = cljs.core.first.call(null,G__7689__7690);
var G__7689__7692 = G__7689__7690;

while(true){
cur__7691.call(null,data);
var temp__3698__auto____7693 = cljs.core.next.call(null,G__7689__7692);

if(cljs.core.truth_(temp__3698__auto____7693))
{var G__7689__7694 = temp__3698__auto____7693;

{
var G__7695 = cljs.core.first.call(null,G__7689__7694);
var G__7696 = G__7689__7694;
cur__7691 = G__7695;
G__7689__7692 = G__7696;
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
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,noir.cljs.client.watcher.cur_mode),"\uFDD0'interactive")))
{return poll.call(null);
} else
{return null;
}
}));
}));
});
noir.cljs.client.watcher.on_update = (function on_update(func){
return cljs.core.swap_BANG_.call(null,noir.cljs.client.watcher.callbacks,cljs.core.conj,func);
});
noir.cljs.client.watcher.set_mode = (function set_mode(m){
return fetch.core.xhr.call(null,cljs.core.Vector.fromArray(["\uFDD0'post","\/noir-cljs-mode"]),cljs.core.ObjMap.fromObject(["\uFDD0'm"],{"\uFDD0'm":m}),(function (){
cljs.core.reset_BANG_.call(null,noir.cljs.client.watcher.cur_mode,m);
if(cljs.core.truth_(cljs.core._EQ_.call(null,m,"\uFDD0'interactive")))
{return noir.cljs.client.watcher.poll.call(null);
} else
{return null;
}
}));
});
noir.cljs.client.watcher.get_mode = (function get_mode(callback){
return fetch.core.xhr.call(null,cljs.core.Vector.fromArray(["\uFDD0'get","\/noir-cljs-mode"]),cljs.core.ObjMap.fromObject([],{}),(function (x){
return callback.call(null,cljs.reader.read_string.call(null,x));
}));
});
noir.cljs.client.watcher.buttons = cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'mode","\uFDD0'label"],{"\uFDD0'mode":"\uFDD0'advanced","\uFDD0'label":"A"}),cljs.core.ObjMap.fromObject(["\uFDD0'mode","\uFDD0'label"],{"\uFDD0'mode":"\uFDD0'simple","\uFDD0'label":"S"}),cljs.core.ObjMap.fromObject(["\uFDD0'mode","\uFDD0'label"],{"\uFDD0'mode":"\uFDD0'interactive","\uFDD0'label":"I"})]);
var group__4453__auto____7698 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

/**
* @param {...*} var_args
*/
noir.cljs.client.watcher.selector_button = (function() { 
var selector_button__delegate = function (p__7699,p__7700){
var map__7701__7703 = p__7699;
var map__7701__7704 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7701__7703))?cljs.core.apply.call(null,cljs.core.hash_map,map__7701__7703):map__7701__7703);
var label__7705 = cljs.core.get.call(null,map__7701__7704,"\uFDD0'label");
var mode__7706 = cljs.core.get.call(null,map__7701__7704,"\uFDD0'mode");
var vec__7702__7707 = p__7700;
var m__7708 = cljs.core.nth.call(null,vec__7702__7707,0,null);

var elem__4454__auto____7710 = crate.core.html.call(null,(function (){var klass__7709 = cljs.core.str.call(null,"noir-cljs-button ",(cljs.core.truth_(cljs.core._EQ_.call(null,mode__7706,m__7708))?"active":null));

return cljs.core.Vector.fromArray(["\uFDD0'li",crate.tags.link_to.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'class","\uFDD0'data-mode"],{"\uFDD0'class":klass__7709,"\uFDD0'data-mode":mode__7706}),"#",label__7705)]);
})());

elem__4454__auto____7710.setAttribute("crateGroup",group__4453__auto____7698);
return elem__4454__auto____7710;
};
var selector_button = function (p__7699,var_args){
var p__7700 = null;
if (goog.isDef(var_args)) {
  p__7700 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return selector_button__delegate.call(this, p__7699, p__7700);
};
selector_button.cljs$lang$maxFixedArity = 1;
selector_button.cljs$lang$applyTo = (function (arglist__7711){
var p__7699 = cljs.core.first(arglist__7711);
var p__7700 = cljs.core.rest(arglist__7711);
return selector_button__delegate.call(this, p__7699, p__7700);
});
return selector_button;
})()
;
noir.cljs.client.watcher.selector_button.prototype._crateGroup = group__4453__auto____7698;
var group__4453__auto____7712 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

noir.cljs.client.watcher.selector = (function selector(m){
var elem__4454__auto____7713 = crate.core.html.call(null,cljs.core.Vector.fromArray(["\uFDD0'div",cljs.core.Vector.fromArray(["\uFDD0'style",cljs.core.ObjMap.fromObject(["\uFDD0'type"],{"\uFDD0'type":"text\/css"}),"#noir-cljs-selector {position:fixed; bottom:15px; right:30px; list-style:none; }\n     #noir-cljs-selector li {}\n     #noir-cljs-selector a { float:left; display:inline; text-decoration:none; line-height:1em; height:19px; padding:5px 10px; background:#77c; width:10px; border:1px solid #55c; text-align:center; border-radius:5px; margin-bottom:8px; color:#449; }\n     #noir-cljs-selector a:hover {background:#99f;}\n     #noir-cljs-selector .active {background:#7cc; border-color:#599;} "]),cljs.core.Vector.fromArray(["\uFDD0'ul#noir-cljs-selector",cljs.core.map.call(null,(function (p1__7697_SHARP_){
return noir.cljs.client.watcher.selector_button.call(null,p1__7697_SHARP_,m);
}),noir.cljs.client.watcher.buttons)])]));

elem__4454__auto____7713.setAttribute("crateGroup",group__4453__auto____7712);
return elem__4454__auto____7713;
});
noir.cljs.client.watcher.selector.prototype._crateGroup = group__4453__auto____7712;
jayq.core.delegate.call(null,noir.cljs.client.watcher.$body,"\uFDD0'.noir-cljs-button","\uFDD0'click",(function (e){
e.preventDefault();
jayq.core.remove_class.call(null,jayq.core.find.call(null,jayq.core.$.call(null,noir.cljs.client.watcher.selector),"\uFDD0'.noir-cljs-button"),"\uFDD0'active");
var me__7714 = this;

var $me__7715 = jayq.core.$.call(null,me__7714);
var mode__7716 = jayq.core.data.call(null,$me__7715,"\uFDD0'mode");

jayq.core.add_class.call(null,$me__7715,"\uFDD0'active");
return noir.cljs.client.watcher.set_mode.call(null,mode__7716);
}));
noir.cljs.client.watcher.init = (function init(){
return noir.cljs.client.watcher.get_mode.call(null,(function (m){
return jayq.core.append.call(null,noir.cljs.client.watcher.$body,noir.cljs.client.watcher.selector.call(null,m));
}));
});
