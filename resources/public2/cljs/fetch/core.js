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
{var vec__7095__7096 = route;
var m__7097 = cljs.core.nth.call(null,vec__7095__7096,0,null);
var u__7098 = cljs.core.nth.call(null,vec__7095__7096,1,null);

return cljs.core.Vector.fromArray([fetch.core.__GT_method.call(null,m__7097),u__7098]);
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
var cur__7099 = fetch.util.clj__GT_js.call(null,d);
var query__7100 = goog.Uri.QueryData.createFromMap.call(null,(new goog.structs.Map(cur__7099)));

return cljs.core.str.call(null,query__7100);
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__7101 = req.getResponseText();

return callback.call(null,data__7101);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__7102){
var vec__7103__7104 = p__7102;
var opts__7105 = cljs.core.nth.call(null,vec__7103__7104,0,null);

var req__7107 = (new goog.net.XhrIo());
var vec__7106__7108 = fetch.core.parse_route.call(null,route);
var method__7109 = cljs.core.nth.call(null,vec__7106__7108,0,null);
var uri__7110 = cljs.core.nth.call(null,vec__7106__7108,1,null);
var data__7111 = fetch.core.__GT_data.call(null,content);
var callback__7112 = fetch.core.__GT_callback.call(null,callback);

if(cljs.core.truth_(callback__7112))
{goog.events.listen.call(null,req__7107,goog.net.EventType.COMPLETE,(function (){
return callback__7112.call(null,req__7107);
}));
} else
{}
return req__7107.send(uri__7110,method__7109,data__7111,(cljs.core.truth_(opts__7105)?fetch.util.clj__GT_js.call(null,opts__7105):null));
};
var xhr = function (route,content,callback,var_args){
var p__7102 = null;
if (goog.isDef(var_args)) {
  p__7102 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__7102);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__7113){
var route = cljs.core.first(arglist__7113);
var content = cljs.core.first(cljs.core.next(arglist__7113));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7113)));
var p__7102 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7113)));
return xhr__delegate.call(this, route, content, callback, p__7102);
});
return xhr;
})()
;
