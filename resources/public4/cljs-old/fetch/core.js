goog.provide('fetch.core');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('clojure.string');
goog.require('fetch.util');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
fetch.core.__GT_method = (function __GT_method(m){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,m));
});
fetch.core.parse_route = (function parse_route(route){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,route)))
{return cljs.core.Vector.fromArray(["GET",route]);
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,route)))
{var vec__7717__7718 = route;
var m__7719 = cljs.core.nth.call(null,vec__7717__7718,0,null);
var u__7720 = cljs.core.nth.call(null,vec__7717__7718,1,null);

return cljs.core.Vector.fromArray([fetch.core.__GT_method.call(null,m__7719),u__7720]);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.Vector.fromArray(["GET",route]);
} else
{return null;
}
}
}
});
fetch.core.__GT_data = (function __GT_data(d){
var cur__7721 = fetch.util.clj__GT_js.call(null,d);
var query__7722 = goog.Uri.QueryData.createFromMap.call(null,(new goog.structs.Map(cur__7721)));

return cljs.core.str.call(null,query__7722);
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__7723 = req.getResponseText();

return callback.call(null,data__7723);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__7724){
var vec__7725__7726 = p__7724;
var opts__7727 = cljs.core.nth.call(null,vec__7725__7726,0,null);

var req__7729 = (new goog.net.XhrIo());
var vec__7728__7730 = fetch.core.parse_route.call(null,route);
var method__7731 = cljs.core.nth.call(null,vec__7728__7730,0,null);
var uri__7732 = cljs.core.nth.call(null,vec__7728__7730,1,null);
var data__7733 = fetch.core.__GT_data.call(null,content);
var callback__7734 = fetch.core.__GT_callback.call(null,callback);

if(cljs.core.truth_(callback__7734))
{goog.events.listen.call(null,req__7729,goog.net.EventType.COMPLETE,(function (){
return callback__7734.call(null,req__7729);
}));
} else
{}
return req__7729.send(uri__7732,method__7731,data__7733,(cljs.core.truth_(opts__7727)?fetch.util.clj__GT_js.call(null,opts__7727):null));
};
var xhr = function (route,content,callback,var_args){
var p__7724 = null;
if (goog.isDef(var_args)) {
  p__7724 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__7724);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__7735){
var route = cljs.core.first(arglist__7735);
var content = cljs.core.first(cljs.core.next(arglist__7735));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7735)));
var p__7724 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7735)));
return xhr__delegate.call(this, route, content, callback, p__7724);
});
return xhr;
})()
;
