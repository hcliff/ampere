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
{var vec__8264__8265 = route;
var m__8266 = cljs.core.nth.call(null,vec__8264__8265,0,null);
var u__8267 = cljs.core.nth.call(null,vec__8264__8265,1,null);

return cljs.core.Vector.fromArray([fetch.core.__GT_method.call(null,m__8266),u__8267]);
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
var cur__8268 = fetch.util.clj__GT_js.call(null,d);
var query__8269 = goog.Uri.QueryData.createFromMap.call(null,(new goog.structs.Map(cur__8268)));

return cljs.core.str.call(null,query__8269);
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__8270 = req.getResponseText();

return callback.call(null,data__8270);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__8271){
var vec__8272__8273 = p__8271;
var opts__8274 = cljs.core.nth.call(null,vec__8272__8273,0,null);

var req__8276 = (new goog.net.XhrIo());
var vec__8275__8277 = fetch.core.parse_route.call(null,route);
var method__8278 = cljs.core.nth.call(null,vec__8275__8277,0,null);
var uri__8279 = cljs.core.nth.call(null,vec__8275__8277,1,null);
var data__8280 = fetch.core.__GT_data.call(null,content);
var callback__8281 = fetch.core.__GT_callback.call(null,callback);

if(cljs.core.truth_(callback__8281))
{goog.events.listen.call(null,req__8276,goog.net.EventType.COMPLETE,(function (){
return callback__8281.call(null,req__8276);
}));
} else
{}
return req__8276.send(uri__8279,method__8278,data__8280,(cljs.core.truth_(opts__8274)?fetch.util.clj__GT_js.call(null,opts__8274):null));
};
var xhr = function (route,content,callback,var_args){
var p__8271 = null;
if (goog.isDef(var_args)) {
  p__8271 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__8271);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__8282){
var route = cljs.core.first(arglist__8282);
var content = cljs.core.first(cljs.core.next(arglist__8282));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8282)));
var p__8271 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8282)));
return xhr__delegate.call(this, route, content, callback, p__8271);
});
return xhr;
})()
;
