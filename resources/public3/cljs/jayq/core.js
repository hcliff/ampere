goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('clojure.string');
jayq.core.crate_meta = (function crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function __GT_selector(sel){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,sel)))
{return sel;
} else
{if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,sel)))
{var temp__3695__auto____8413 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____8413))
{var cm__8414 = temp__3695__auto____8413;

return cljs.core.str.call(null,"[crateGroup=",cm__8414,"]");
} else
{return sel;
}
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,sel)))
{return cljs.core.name.call(null,sel);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return sel;
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.$ = (function() { 
var $__delegate = function (sel,p__8415){
var vec__8416__8417 = p__8415;
var context__8418 = cljs.core.nth.call(null,vec__8416__8417,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__8418)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__8418);
}
};
var $ = function (sel,var_args){
var p__8415 = null;
if (goog.isDef(var_args)) {
  p__8415 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__8415);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__8419){
var sel = cljs.core.first(arglist__8419);
var p__8415 = cljs.core.rest(arglist__8419);
return $__delegate.call(this, sel, p__8415);
});
return $;
})()
;
jQuery.prototype.cljs$core$IReduce$ = true;
jQuery.prototype.cljs$core$IReduce$_reduce = (function (this$,f){
return cljs.core.ci_reduce.call(null,this$,f);
});
jQuery.prototype.cljs$core$IReduce$_reduce = (function (this$,f,start){
return cljs.core.ci_reduce.call(null,this$,f,start);
});
jQuery.prototype.cljs$core$ILookup$ = true;
jQuery.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8421 = null;
var G__8421__8422 = (function (this$,k){
var or__3548__auto____8420 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____8420))
{return or__3548__auto____8420;
} else
{return null;
}
});
var G__8421__8423 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__8421 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__8421__8422.call(this,this$,k);
case  3 :
return G__8421__8423.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8421;
})()
;
jQuery.prototype.cljs$core$ISequential$ = true;
jQuery.prototype.cljs$core$IIndexed$ = true;
jQuery.prototype.cljs$core$IIndexed$_nth = (function (this$,n){
if(cljs.core.truth_((n < cljs.core.count.call(null,this$))))
{return this$.slice(n,(n + 1));
} else
{return null;
}
});
jQuery.prototype.cljs$core$IIndexed$_nth = (function (this$,n,not_found){
if(cljs.core.truth_((n < cljs.core.count.call(null,this$))))
{return this$.slice(n,(n + 1));
} else
{if(cljs.core.truth_((void 0 === not_found)))
{return null;
} else
{return not_found;
}
}
});
jQuery.prototype.cljs$core$ICounted$ = true;
jQuery.prototype.cljs$core$ICounted$_count = (function (this$){
return this$.size();
});
jQuery.prototype.cljs$core$ISeq$ = true;
jQuery.prototype.cljs$core$ISeq$_first = (function (this$){
return this$.get(0);
});
jQuery.prototype.cljs$core$ISeq$_rest = (function (this$){
if(cljs.core.truth_((cljs.core.count.call(null,this$) > 1)))
{return this$.slice(1);
} else
{return cljs.core.list.call(null);
}
});
jQuery.prototype.cljs$core$ISeqable$ = true;
jQuery.prototype.cljs$core$ISeqable$_seq = (function (this$){
if(cljs.core.truth_(this$.get(0)))
{return this$;
} else
{return null;
}
});
jQuery.prototype.call = (function() {
var G__8425 = null;
var G__8425__8426 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__8425__8427 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__8425 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__8425__8426.call(this,_,k);
case  3 :
return G__8425__8427.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8425;
})()
;
jayq.core.anim = (function anim(elem,props,dur){
return elem.animate(jayq.util.clj__GT_js.call(null,props),dur);
});
jayq.core.text = (function text($elem,txt){
return $elem.text(txt);
});
jayq.core.css = (function css($elem,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,opts)))
{return $elem.css(cljs.core.name.call(null,opts));
} else
{return $elem.css(jayq.util.clj__GT_js.call(null,opts));
}
});
/**
* @param {...*} var_args
*/
jayq.core.attr = (function() { 
var attr__delegate = function ($elem,a,p__8429){
var vec__8430__8431 = p__8429;
var v__8432 = cljs.core.nth.call(null,vec__8430__8431,0,null);

var a__8433 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__8432)))
{return $elem.attr(a__8433);
} else
{return $elem.attr(a__8433,v__8432);
}
};
var attr = function ($elem,a,var_args){
var p__8429 = null;
if (goog.isDef(var_args)) {
  p__8429 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__8429);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__8434){
var $elem = cljs.core.first(arglist__8434);
var a = cljs.core.first(cljs.core.next(arglist__8434));
var p__8429 = cljs.core.rest(cljs.core.next(arglist__8434));
return attr__delegate.call(this, $elem, a, p__8429);
});
return attr;
})()
;
jayq.core.remove_attr = (function remove_attr($elem,a){
return $elem.removeAttr(cljs.core.name.call(null,a));
});
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__8435){
var vec__8436__8437 = p__8435;
var v__8438 = cljs.core.nth.call(null,vec__8436__8437,0,null);

var k__8439 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__8438)))
{return $elem.data(k__8439);
} else
{return $elem.data(k__8439,v__8438);
}
};
var data = function ($elem,k,var_args){
var p__8435 = null;
if (goog.isDef(var_args)) {
  p__8435 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__8435);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__8440){
var $elem = cljs.core.first(arglist__8440);
var k = cljs.core.first(cljs.core.next(arglist__8440));
var p__8435 = cljs.core.rest(cljs.core.next(arglist__8440));
return data__delegate.call(this, $elem, k, p__8435);
});
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__8441 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__8441);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__8442 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__8442);
});
jayq.core.toggle_class = (function toggle_class($elem,cl){
var cl__8443 = cljs.core.name.call(null,cl);

return $elem.toggleClass(cl__8443);
});
jayq.core.has_class = (function has_class($elem,cl){
var cl__8444 = cljs.core.name.call(null,cl);

return $elem.hasClass(cl__8444);
});
jayq.core.after = (function after($elem,content){
return $elem.after(content);
});
jayq.core.before = (function before($elem,content){
return $elem.before(content);
});
jayq.core.append = (function append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.remove = (function remove($elem){
return $elem.remove();
});
/**
* @param {...*} var_args
*/
jayq.core.hide = (function() { 
var hide__delegate = function ($elem,p__8445){
var vec__8446__8447 = p__8445;
var speed__8448 = cljs.core.nth.call(null,vec__8446__8447,0,null);
var on_finish__8449 = cljs.core.nth.call(null,vec__8446__8447,1,null);

return $elem.hide(speed__8448,on_finish__8449);
};
var hide = function ($elem,var_args){
var p__8445 = null;
if (goog.isDef(var_args)) {
  p__8445 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__8445);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__8450){
var $elem = cljs.core.first(arglist__8450);
var p__8445 = cljs.core.rest(arglist__8450);
return hide__delegate.call(this, $elem, p__8445);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__8451){
var vec__8452__8453 = p__8451;
var speed__8454 = cljs.core.nth.call(null,vec__8452__8453,0,null);
var on_finish__8455 = cljs.core.nth.call(null,vec__8452__8453,1,null);

return $elem.show(speed__8454,on_finish__8455);
};
var show = function ($elem,var_args){
var p__8451 = null;
if (goog.isDef(var_args)) {
  p__8451 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__8451);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__8456){
var $elem = cljs.core.first(arglist__8456);
var p__8451 = cljs.core.rest(arglist__8456);
return show__delegate.call(this, $elem, p__8451);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__8457){
var vec__8458__8459 = p__8457;
var speed__8460 = cljs.core.nth.call(null,vec__8458__8459,0,null);
var on_finish__8461 = cljs.core.nth.call(null,vec__8458__8459,1,null);

return $elem.toggle(speed__8460,on_finish__8461);
};
var toggle = function ($elem,var_args){
var p__8457 = null;
if (goog.isDef(var_args)) {
  p__8457 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__8457);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__8462){
var $elem = cljs.core.first(arglist__8462);
var p__8457 = cljs.core.rest(arglist__8462);
return toggle__delegate.call(this, $elem, p__8457);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__8463){
var vec__8464__8465 = p__8463;
var speed__8466 = cljs.core.nth.call(null,vec__8464__8465,0,null);
var on_finish__8467 = cljs.core.nth.call(null,vec__8464__8465,1,null);

return $elem.fadeOut(speed__8466,on_finish__8467);
};
var fade_out = function ($elem,var_args){
var p__8463 = null;
if (goog.isDef(var_args)) {
  p__8463 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__8463);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__8468){
var $elem = cljs.core.first(arglist__8468);
var p__8463 = cljs.core.rest(arglist__8468);
return fade_out__delegate.call(this, $elem, p__8463);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__8469){
var vec__8470__8471 = p__8469;
var speed__8472 = cljs.core.nth.call(null,vec__8470__8471,0,null);
var on_finish__8473 = cljs.core.nth.call(null,vec__8470__8471,1,null);

return $elem.fadeIn(speed__8472,on_finish__8473);
};
var fade_in = function ($elem,var_args){
var p__8469 = null;
if (goog.isDef(var_args)) {
  p__8469 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__8469);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__8474){
var $elem = cljs.core.first(arglist__8474);
var p__8469 = cljs.core.rest(arglist__8474);
return fade_in__delegate.call(this, $elem, p__8469);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__8475){
var vec__8476__8477 = p__8475;
var speed__8478 = cljs.core.nth.call(null,vec__8476__8477,0,null);
var on_finish__8479 = cljs.core.nth.call(null,vec__8476__8477,1,null);

return $elem.slideUp(speed__8478,on_finish__8479);
};
var slide_up = function ($elem,var_args){
var p__8475 = null;
if (goog.isDef(var_args)) {
  p__8475 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__8475);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__8480){
var $elem = cljs.core.first(arglist__8480);
var p__8475 = cljs.core.rest(arglist__8480);
return slide_up__delegate.call(this, $elem, p__8475);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__8481){
var vec__8482__8483 = p__8481;
var speed__8484 = cljs.core.nth.call(null,vec__8482__8483,0,null);
var on_finish__8485 = cljs.core.nth.call(null,vec__8482__8483,1,null);

return $elem.slideDown(speed__8484,on_finish__8485);
};
var slide_down = function ($elem,var_args){
var p__8481 = null;
if (goog.isDef(var_args)) {
  p__8481 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__8481);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__8486){
var $elem = cljs.core.first(arglist__8486);
var p__8481 = cljs.core.rest(arglist__8486);
return slide_down__delegate.call(this, $elem, p__8481);
});
return slide_down;
})()
;
jayq.core.parent = (function parent($elem){
return $elem.parent();
});
jayq.core.find = (function find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
/**
* @param {...*} var_args
*/
jayq.core.closest = (function() { 
var closest__delegate = function ($elem,selector,p__8487){
var vec__8488__8489 = p__8487;
var context__8490 = cljs.core.nth.call(null,vec__8488__8489,0,null);

return $elem.closest(selector,context__8490);
};
var closest = function ($elem,selector,var_args){
var p__8487 = null;
if (goog.isDef(var_args)) {
  p__8487 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return closest__delegate.call(this, $elem, selector, p__8487);
};
closest.cljs$lang$maxFixedArity = 2;
closest.cljs$lang$applyTo = (function (arglist__8491){
var $elem = cljs.core.first(arglist__8491);
var selector = cljs.core.first(cljs.core.next(arglist__8491));
var p__8487 = cljs.core.rest(cljs.core.next(arglist__8491));
return closest__delegate.call(this, $elem, selector, p__8487);
});
return closest;
})()
;
jayq.core.clone = (function clone($elem){
return $elem.clone();
});
jayq.core.inner = (function inner($elem,v){
return $elem.html(v);
});
jayq.core.empty = (function empty($elem){
return $elem.empty();
});
/**
* @param {...*} var_args
*/
jayq.core.val = (function() { 
var val__delegate = function ($elem,p__8492){
var vec__8493__8494 = p__8492;
var v__8495 = cljs.core.nth.call(null,vec__8493__8494,0,null);

if(cljs.core.truth_(v__8495))
{return $elem.val(v__8495);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__8492 = null;
if (goog.isDef(var_args)) {
  p__8492 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__8492);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__8496){
var $elem = cljs.core.first(arglist__8496);
var p__8492 = cljs.core.rest(arglist__8496);
return val__delegate.call(this, $elem, p__8492);
});
return val;
})()
;
jayq.core.serialize = (function serialize($elem){
return $elem.serialize();
});
jayq.core.queue = (function queue($elem,callback){
return $elem.queue(callback);
});
jayq.core.dequeue = (function dequeue(elem){
return jayq.core.$.call(null,elem).dequeue();
});
jayq.core.document_ready = (function document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.xhr = (function xhr(p__8497,content,callback){
var vec__8498__8499 = p__8497;
var method__8500 = cljs.core.nth.call(null,vec__8498__8499,0,null);
var uri__8501 = cljs.core.nth.call(null,vec__8498__8499,1,null);

var params__8502 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__8500)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__8501,params__8502);
});
jayq.core.ajax = (function() {
var ajax = null;
var ajax__8504 = (function (settings){
return jQuery.ajax(jayq.util.clj__GT_js.call(null,settings));
});
var ajax__8503 = (function (url,settings){
return jQuery.ajax(url,jayq.util.clj__GT_js.call(null,settings));
});
ajax = function(url,settings){
switch(arguments.length){
case  1 :
return ajax__8504.call(this,url);
case  2 :
return ajax__8503.call(this,url,settings);
}
throw('Invalid arity: ' + arguments.length);
};
return ajax;
})()
;
jayq.core.bind = (function bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
/**
* @param {...*} var_args
*/
jayq.core.unbind = (function() { 
var unbind__delegate = function ($elem,ev,p__8506){
var vec__8507__8508 = p__8506;
var func__8509 = cljs.core.nth.call(null,vec__8507__8508,0,null);

return $elem.unbind(cljs.core.name.call(null,ev),func__8509);
};
var unbind = function ($elem,ev,var_args){
var p__8506 = null;
if (goog.isDef(var_args)) {
  p__8506 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return unbind__delegate.call(this, $elem, ev, p__8506);
};
unbind.cljs$lang$maxFixedArity = 2;
unbind.cljs$lang$applyTo = (function (arglist__8510){
var $elem = cljs.core.first(arglist__8510);
var ev = cljs.core.first(cljs.core.next(arglist__8510));
var p__8506 = cljs.core.rest(cljs.core.next(arglist__8510));
return unbind__delegate.call(this, $elem, ev, p__8506);
});
return unbind;
})()
;
jayq.core.trigger = (function trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function __GT_event(e){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,e)))
{return cljs.core.name.call(null,e);
} else
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,e)))
{return jayq.util.clj__GT_js.call(null,e);
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,e)))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Unknown event type: ",e)));
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.on = (function() { 
var on__delegate = function ($elem,events,p__8511){
var vec__8512__8513 = p__8511;
var sel__8514 = cljs.core.nth.call(null,vec__8512__8513,0,null);
var data__8515 = cljs.core.nth.call(null,vec__8512__8513,1,null);
var handler__8516 = cljs.core.nth.call(null,vec__8512__8513,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__8514),data__8515,handler__8516);
};
var on = function ($elem,events,var_args){
var p__8511 = null;
if (goog.isDef(var_args)) {
  p__8511 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__8511);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__8517){
var $elem = cljs.core.first(arglist__8517);
var events = cljs.core.first(cljs.core.next(arglist__8517));
var p__8511 = cljs.core.rest(cljs.core.next(arglist__8517));
return on__delegate.call(this, $elem, events, p__8511);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__8518){
var vec__8519__8520 = p__8518;
var sel__8521 = cljs.core.nth.call(null,vec__8519__8520,0,null);
var data__8522 = cljs.core.nth.call(null,vec__8519__8520,1,null);
var handler__8523 = cljs.core.nth.call(null,vec__8519__8520,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__8521),data__8522,handler__8523);
};
var one = function ($elem,events,var_args){
var p__8518 = null;
if (goog.isDef(var_args)) {
  p__8518 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__8518);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__8524){
var $elem = cljs.core.first(arglist__8524);
var events = cljs.core.first(cljs.core.next(arglist__8524));
var p__8518 = cljs.core.rest(cljs.core.next(arglist__8524));
return one__delegate.call(this, $elem, events, p__8518);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__8525){
var vec__8526__8527 = p__8525;
var sel__8528 = cljs.core.nth.call(null,vec__8526__8527,0,null);
var handler__8529 = cljs.core.nth.call(null,vec__8526__8527,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__8528),handler__8529);
};
var off = function ($elem,events,var_args){
var p__8525 = null;
if (goog.isDef(var_args)) {
  p__8525 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__8525);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__8530){
var $elem = cljs.core.first(arglist__8530);
var events = cljs.core.first(cljs.core.next(arglist__8530));
var p__8525 = cljs.core.rest(cljs.core.next(arglist__8530));
return off__delegate.call(this, $elem, events, p__8525);
});
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
