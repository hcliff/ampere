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
{var vec__7850__7851 = route;
var m__7852 = cljs.core.nth.call(null,vec__7850__7851,0,null);
var u__7853 = cljs.core.nth.call(null,vec__7850__7851,1,null);

return cljs.core.Vector.fromArray([fetch.core.__GT_method.call(null,m__7852),u__7853]);
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
var cur__7854 = fetch.util.clj__GT_js.call(null,d);
var query__7855 = goog.Uri.QueryData.createFromMap.call(null,(new goog.structs.Map(cur__7854)));

return cljs.core.str.call(null,query__7855);
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__7856 = req.getResponseText();

return callback.call(null,data__7856);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__7857){
var vec__7858__7859 = p__7857;
var opts__7860 = cljs.core.nth.call(null,vec__7858__7859,0,null);

var req__7862 = (new goog.net.XhrIo());
var vec__7861__7863 = fetch.core.parse_route.call(null,route);
var method__7864 = cljs.core.nth.call(null,vec__7861__7863,0,null);
var uri__7865 = cljs.core.nth.call(null,vec__7861__7863,1,null);
var data__7866 = fetch.core.__GT_data.call(null,content);
var callback__7867 = fetch.core.__GT_callback.call(null,callback);

if(cljs.core.truth_(callback__7867))
{goog.events.listen.call(null,req__7862,goog.net.EventType.COMPLETE,(function (){
return callback__7867.call(null,req__7862);
}));
} else
{}
return req__7862.send(uri__7865,method__7864,data__7866,(cljs.core.truth_(opts__7860)?fetch.util.clj__GT_js.call(null,opts__7860):null));
};
var xhr = function (route,content,callback,var_args){
var p__7857 = null;
if (goog.isDef(var_args)) {
  p__7857 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__7857);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__7868){
var route = cljs.core.first(arglist__7868);
var content = cljs.core.first(cljs.core.next(arglist__7868));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7868)));
var p__7857 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7868)));
return xhr__delegate.call(this, route, content, callback, p__7857);
});
return xhr;
})()
;
