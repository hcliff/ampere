goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__8107 = cljs.core.js_obj.call(null);

var G__8108__8109 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__8108__8109))
{var G__8111__8113 = cljs.core.first.call(null,G__8108__8109);
var vec__8112__8114 = G__8111__8113;
var k__8115 = cljs.core.nth.call(null,vec__8112__8114,0,null);
var v__8116 = cljs.core.nth.call(null,vec__8112__8114,1,null);
var G__8108__8117 = G__8108__8109;

var G__8111__8118 = G__8111__8113;
var G__8108__8119 = G__8108__8117;

while(true){
var vec__8120__8121 = G__8111__8118;
var k__8122 = cljs.core.nth.call(null,vec__8120__8121,0,null);
var v__8123 = cljs.core.nth.call(null,vec__8120__8121,1,null);
var G__8108__8124 = G__8108__8119;

(out__8107[cljs.core.name.call(null,k__8122)] = v__8123);
var temp__3698__auto____8125 = cljs.core.next.call(null,G__8108__8124);

if(cljs.core.truth_(temp__3698__auto____8125))
{var G__8108__8126 = temp__3698__auto____8125;

{
var G__8127 = cljs.core.first.call(null,G__8108__8126);
var G__8128 = G__8108__8126;
G__8111__8118 = G__8127;
G__8108__8119 = G__8128;
continue;
}
} else
{}
break;
}
} else
{}
return out__8107;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__8129 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__8129);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__8130){
var v = cljs.core.first(arglist__8130);
var text = cljs.core.rest(arglist__8130);
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
{return cljs.core.reduce.call(null,(function (m,p__8131){
var vec__8132__8133 = p__8131;
var k__8134 = cljs.core.nth.call(null,vec__8132__8133,0,null);
var v__8135 = cljs.core.nth.call(null,vec__8132__8133,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__8134),clj__GT_js.call(null,v__8135));
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
