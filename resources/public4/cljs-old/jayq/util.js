goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__7560 = cljs.core.js_obj.call(null);

var G__7561__7562 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__7561__7562))
{var G__7564__7566 = cljs.core.first.call(null,G__7561__7562);
var vec__7565__7567 = G__7564__7566;
var k__7568 = cljs.core.nth.call(null,vec__7565__7567,0,null);
var v__7569 = cljs.core.nth.call(null,vec__7565__7567,1,null);
var G__7561__7570 = G__7561__7562;

var G__7564__7571 = G__7564__7566;
var G__7561__7572 = G__7561__7570;

while(true){
var vec__7573__7574 = G__7564__7571;
var k__7575 = cljs.core.nth.call(null,vec__7573__7574,0,null);
var v__7576 = cljs.core.nth.call(null,vec__7573__7574,1,null);
var G__7561__7577 = G__7561__7572;

(out__7560[cljs.core.name.call(null,k__7575)] = v__7576);
var temp__3698__auto____7578 = cljs.core.next.call(null,G__7561__7577);

if(cljs.core.truth_(temp__3698__auto____7578))
{var G__7561__7579 = temp__3698__auto____7578;

{
var G__7580 = cljs.core.first.call(null,G__7561__7579);
var G__7581 = G__7561__7579;
G__7564__7571 = G__7580;
G__7561__7572 = G__7581;
continue;
}
} else
{}
break;
}
} else
{}
return out__7560;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__7582 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__7582);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__7583){
var v = cljs.core.first(arglist__7583);
var text = cljs.core.rest(arglist__7583);
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
{return cljs.core.reduce.call(null,(function (m,p__7584){
var vec__7585__7586 = p__7584;
var k__7587 = cljs.core.nth.call(null,vec__7585__7586,0,null);
var v__7588 = cljs.core.nth.call(null,vec__7585__7586,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__7587),clj__GT_js.call(null,v__7588));
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
