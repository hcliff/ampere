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
if(cljs.core.truth_((function (){var and__3546__auto____7066 = data;

if(cljs.core.truth_(and__3546__auto____7066))
{return cljs.core.not_EQ_.call(null,data,"");
} else
{return and__3546__auto____7066;
}
})()))
{eval.call(null,data);
var G__7067__7068 = cljs.core.seq.call(null,cljs.core.deref.call(null,noir.cljs.client.watcher.callbacks));

if(cljs.core.truth_(G__7067__7068))
{var cur__7069 = cljs.core.first.call(null,G__7067__7068);
var G__7067__7070 = G__7067__7068;

while(true){
cur__7069.call(null,data);
var temp__3698__auto____7071 = cljs.core.next.call(null,G__7067__7070);

if(cljs.core.truth_(temp__3698__auto____7071))
{var G__7067__7072 = temp__3698__auto____7071;

{
var G__7073 = cljs.core.first.call(null,G__7067__7072);
var G__7074 = G__7067__7072;
cur__7069 = G__7073;
G__7067__7070 = G__7074;
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
var group__4087__auto____7076 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

/**
* @param {...*} var_args
*/
noir.cljs.client.watcher.selector_button = (function() { 
var selector_button__delegate = function (p__7077,p__7078){
var map__7079__7081 = p__7077;
var map__7079__7082 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7079__7081))?cljs.core.apply.call(null,cljs.core.hash_map,map__7079__7081):map__7079__7081);
var label__7083 = cljs.core.get.call(null,map__7079__7082,"\uFDD0'label");
var mode__7084 = cljs.core.get.call(null,map__7079__7082,"\uFDD0'mode");
var vec__7080__7085 = p__7078;
var m__7086 = cljs.core.nth.call(null,vec__7080__7085,0,null);

var elem__4088__auto____7088 = crate.core.html.call(null,(function (){var klass__7087 = cljs.core.str.call(null,"noir-cljs-button ",(cljs.core.truth_(cljs.core._EQ_.call(null,mode__7084,m__7086))?"active":null));

return cljs.core.Vector.fromArray(["\uFDD0'li",crate.tags.link_to.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'class","\uFDD0'data-mode"],{"\uFDD0'class":klass__7087,"\uFDD0'data-mode":mode__7084}),"#",label__7083)]);
})());

elem__4088__auto____7088.setAttribute("crateGroup",group__4087__auto____7076);
return elem__4088__auto____7088;
};
var selector_button = function (p__7077,var_args){
var p__7078 = null;
if (goog.isDef(var_args)) {
  p__7078 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return selector_button__delegate.call(this, p__7077, p__7078);
};
selector_button.cljs$lang$maxFixedArity = 1;
selector_button.cljs$lang$applyTo = (function (arglist__7089){
var p__7077 = cljs.core.first(arglist__7089);
var p__7078 = cljs.core.rest(arglist__7089);
return selector_button__delegate.call(this, p__7077, p__7078);
});
return selector_button;
})()
;
noir.cljs.client.watcher.selector_button.prototype._crateGroup = group__4087__auto____7076;
var group__4087__auto____7090 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

noir.cljs.client.watcher.selector = (function selector(m){
var elem__4088__auto____7091 = crate.core.html.call(null,cljs.core.Vector.fromArray(["\uFDD0'div",cljs.core.Vector.fromArray(["\uFDD0'style",cljs.core.ObjMap.fromObject(["\uFDD0'type"],{"\uFDD0'type":"text\/css"}),"#noir-cljs-selector {position:fixed; bottom:15px; right:30px; list-style:none; }\n     #noir-cljs-selector li {}\n     #noir-cljs-selector a { float:left; display:inline; text-decoration:none; line-height:1em; height:19px; padding:5px 10px; background:#77c; width:10px; border:1px solid #55c; text-align:center; border-radius:5px; margin-bottom:8px; color:#449; }\n     #noir-cljs-selector a:hover {background:#99f;}\n     #noir-cljs-selector .active {background:#7cc; border-color:#599;} "]),cljs.core.Vector.fromArray(["\uFDD0'ul#noir-cljs-selector",cljs.core.map.call(null,(function (p1__7075_SHARP_){
return noir.cljs.client.watcher.selector_button.call(null,p1__7075_SHARP_,m);
}),noir.cljs.client.watcher.buttons)])]));

elem__4088__auto____7091.setAttribute("crateGroup",group__4087__auto____7090);
return elem__4088__auto____7091;
});
noir.cljs.client.watcher.selector.prototype._crateGroup = group__4087__auto____7090;
jayq.core.delegate.call(null,noir.cljs.client.watcher.$body,"\uFDD0'.noir-cljs-button","\uFDD0'click",(function (e){
e.preventDefault();
jayq.core.remove_class.call(null,jayq.core.find.call(null,jayq.core.$.call(null,noir.cljs.client.watcher.selector),"\uFDD0'.noir-cljs-button"),"\uFDD0'active");
var me__7092 = this;

var $me__7093 = jayq.core.$.call(null,me__7092);
var mode__7094 = jayq.core.data.call(null,$me__7093,"\uFDD0'mode");

jayq.core.add_class.call(null,$me__7093,"\uFDD0'active");
return noir.cljs.client.watcher.set_mode.call(null,mode__7094);
}));
noir.cljs.client.watcher.init = (function init(){
return noir.cljs.client.watcher.get_mode.call(null,(function (m){
return jayq.core.append.call(null,noir.cljs.client.watcher.$body,noir.cljs.client.watcher.selector.call(null,m));
}));
});
