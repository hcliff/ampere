goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__7638 = cljs.core.js_obj.call(null);

var G__7639__7640 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__7639__7640))
{var G__7642__7644 = cljs.core.first.call(null,G__7639__7640);
var vec__7643__7645 = G__7642__7644;
var k__7646 = cljs.core.nth.call(null,vec__7643__7645,0,null);
var v__7647 = cljs.core.nth.call(null,vec__7643__7645,1,null);
var G__7639__7648 = G__7639__7640;

var G__7642__7649 = G__7642__7644;
var G__7639__7650 = G__7639__7648;

while(true){
var vec__7651__7652 = G__7642__7649;
var k__7653 = cljs.core.nth.call(null,vec__7651__7652,0,null);
var v__7654 = cljs.core.nth.call(null,vec__7651__7652,1,null);
var G__7639__7655 = G__7639__7650;

(out__7638[cljs.core.name.call(null,k__7653)] = v__7654);
var temp__3698__auto____7656 = cljs.core.next.call(null,G__7639__7655);

if(cljs.core.truth_(temp__3698__auto____7656))
{var G__7639__7657 = temp__3698__auto____7656;

{
var G__7658 = cljs.core.first.call(null,G__7639__7657);
var G__7659 = G__7639__7657;
G__7642__7649 = G__7658;
G__7639__7650 = G__7659;
continue;
}
} else
{}
break;
}
} else
{}
return out__7638;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__7660 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__7660);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__7661){
var v = cljs.core.first(arglist__7661);
var text = cljs.core.rest(arglist__7661);
return log__delegate.call(this, v, text);
});
return log;
})()
;
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
jayq.util.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,x)))
{return cljs.core.reduce.call(null,(function (m,p__7662){
var vec__7663__7664 = p__7662;
var k__7665 = cljs.core.nth.call(null,vec__7663__7664,0,null);
var v__7666 = cljs.core.nth.call(null,vec__7663__7664,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__7665),clj__GT_js.call(null,v__7666));
}),cljs.core.ObjMap.fromObject([],{}),x).strobj;
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,clj__GT_js,x));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x;
} else
{return null;
}
}
}
}
}
});
