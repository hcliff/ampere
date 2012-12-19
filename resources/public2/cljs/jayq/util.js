goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__7319 = cljs.core.js_obj.call(null);

var G__7320__7321 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__7320__7321))
{var G__7323__7325 = cljs.core.first.call(null,G__7320__7321);
var vec__7324__7326 = G__7323__7325;
var k__7327 = cljs.core.nth.call(null,vec__7324__7326,0,null);
var v__7328 = cljs.core.nth.call(null,vec__7324__7326,1,null);
var G__7320__7329 = G__7320__7321;

var G__7323__7330 = G__7323__7325;
var G__7320__7331 = G__7320__7329;

while(true){
var vec__7332__7333 = G__7323__7330;
var k__7334 = cljs.core.nth.call(null,vec__7332__7333,0,null);
var v__7335 = cljs.core.nth.call(null,vec__7332__7333,1,null);
var G__7320__7336 = G__7320__7331;

(out__7319[cljs.core.name.call(null,k__7334)] = v__7335);
var temp__3698__auto____7337 = cljs.core.next.call(null,G__7320__7336);

if(cljs.core.truth_(temp__3698__auto____7337))
{var G__7320__7338 = temp__3698__auto____7337;

{
var G__7339 = cljs.core.first.call(null,G__7320__7338);
var G__7340 = G__7320__7338;
G__7323__7330 = G__7339;
G__7320__7331 = G__7340;
continue;
}
} else
{}
break;
}
} else
{}
return out__7319;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__7341 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__7341);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__7342){
var v = cljs.core.first(arglist__7342);
var text = cljs.core.rest(arglist__7342);
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
{return cljs.core.reduce.call(null,(function (m,p__7343){
var vec__7344__7345 = p__7343;
var k__7346 = cljs.core.nth.call(null,vec__7344__7345,0,null);
var v__7347 = cljs.core.nth.call(null,vec__7344__7345,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__7346),clj__GT_js.call(null,v__7347));
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
