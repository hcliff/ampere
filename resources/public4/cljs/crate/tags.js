goog.provide('crate.tags');
goog.require('cljs.core');
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.tags.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__8077__delegate = function (args){
if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))))
{var vec__8073__8074 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag__8075 = cljs.core.nth.call(null,vec__8073__8074,0,null);
var body__8076 = cljs.core.nthnext.call(null,vec__8073__8074,1);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body__8076))))
{return cljs.core.apply.call(null,cljs.core.vector,tag__8075,cljs.core.merge.call(null,cljs.core.first.call(null,body__8076),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body__8076));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag__8075,cljs.core.first.call(null,args),body__8076);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__8077 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8077__delegate.call(this, args);
};
G__8077.cljs$lang$maxFixedArity = 0;
G__8077.cljs$lang$applyTo = (function (arglist__8078){
var args = cljs.core.seq( arglist__8078 );;
return G__8077__delegate.call(this, args);
});
return G__8077;
})()
;
});
var func__7815__auto____8084 = (function() { 
var G__8085__delegate = function (p__8079,content){
var vec__8080__8081 = p__8079;
var method__8082 = cljs.core.nth.call(null,vec__8080__8081,0,null);
var action__8083 = cljs.core.nth.call(null,vec__8080__8081,1,null);

return cljs.core.Vector.fromArray(["\uFDD0'form",cljs.core.ObjMap.fromObject(["\uFDD0'method","\uFDD0'action"],{"\uFDD0'method":cljs.core.name.call(null,method__8082),"\uFDD0'action":action__8083}),content]);
};
var G__8085 = function (p__8079,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8085__delegate.call(this, p__8079, content);
};
G__8085.cljs$lang$maxFixedArity = 1;
G__8085.cljs$lang$applyTo = (function (arglist__8086){
var p__8079 = cljs.core.first(arglist__8086);
var content = cljs.core.rest(arglist__8086);
return G__8085__delegate.call(this, p__8079, content);
});
return G__8085;
})()
;

crate.tags.form_to = crate.tags.add_optional_attrs.call(null,func__7815__auto____8084);
var func__7815__auto____8090 = (function (tpe,nme,value){
return cljs.core.Vector.fromArray(["\uFDD0'input",cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'name","\uFDD0'id","\uFDD0'value"],{"\uFDD0'type":tpe,"\uFDD0'name":(function (){var or__3548__auto____8087 = nme;

if(cljs.core.truth_(or__3548__auto____8087))
{return or__3548__auto____8087;
} else
{return null;
}
})(),"\uFDD0'id":(function (){var or__3548__auto____8088 = nme;

if(cljs.core.truth_(or__3548__auto____8088))
{return or__3548__auto____8088;
} else
{return null;
}
})(),"\uFDD0'value":(function (){var or__3548__auto____8089 = value;

if(cljs.core.truth_(or__3548__auto____8089))
{return or__3548__auto____8089;
} else
{return "";
}
})()})]);
});

crate.tags.input_field = crate.tags.add_optional_attrs.call(null,func__7815__auto____8090);
var func__7815__auto____8091 = (function (nme,value){
return crate.tags.input_field.call(null,"text",nme,value);
});

crate.tags.text_field = crate.tags.add_optional_attrs.call(null,func__7815__auto____8091);
var func__7815__auto____8092 = (function (nme,value){
return crate.tags.input_field.call(null,"password",nme,value);
});

crate.tags.password_field = crate.tags.add_optional_attrs.call(null,func__7815__auto____8092);
var func__7815__auto____8093 = (function (for$,text){
return cljs.core.Vector.fromArray(["\uFDD0'label",cljs.core.ObjMap.fromObject(["\uFDD0'for"],{"\uFDD0'for":for$}),text]);
});

crate.tags.label = crate.tags.add_optional_attrs.call(null,func__7815__auto____8093);
var func__7815__auto____8094 = (function (val){
return crate.tags.input_field.call(null,"submit",null,val);
});

crate.tags.submit_button = crate.tags.add_optional_attrs.call(null,func__7815__auto____8094);
var func__7815__auto____8095 = (function() { 
var G__8096__delegate = function (url,content){
return cljs.core.Vector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":url}),content]);
};
var G__8096 = function (url,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8096__delegate.call(this, url, content);
};
G__8096.cljs$lang$maxFixedArity = 1;
G__8096.cljs$lang$applyTo = (function (arglist__8097){
var url = cljs.core.first(arglist__8097);
var content = cljs.core.rest(arglist__8097);
return G__8096__delegate.call(this, url, content);
});
return G__8096;
})()
;

crate.tags.link_to = crate.tags.add_optional_attrs.call(null,func__7815__auto____8095);
