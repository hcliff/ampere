goog.provide('crate.tags');
goog.require('cljs.core');
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.tags.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__7223__delegate = function (args){
if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))))
{var vec__7219__7220 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag__7221 = cljs.core.nth.call(null,vec__7219__7220,0,null);
var body__7222 = cljs.core.nthnext.call(null,vec__7219__7220,1);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body__7222))))
{return cljs.core.apply.call(null,cljs.core.vector,tag__7221,cljs.core.merge.call(null,cljs.core.first.call(null,body__7222),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body__7222));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag__7221,cljs.core.first.call(null,args),body__7222);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__7223 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7223__delegate.call(this, args);
};
G__7223.cljs$lang$maxFixedArity = 0;
G__7223.cljs$lang$applyTo = (function (arglist__7224){
var args = cljs.core.seq( arglist__7224 );;
return G__7223__delegate.call(this, args);
});
return G__7223;
})()
;
});
var func__4100__auto____7230 = (function() { 
var G__7231__delegate = function (p__7225,content){
var vec__7226__7227 = p__7225;
var method__7228 = cljs.core.nth.call(null,vec__7226__7227,0,null);
var action__7229 = cljs.core.nth.call(null,vec__7226__7227,1,null);

return cljs.core.Vector.fromArray(["\uFDD0'form",cljs.core.ObjMap.fromObject(["\uFDD0'method","\uFDD0'action"],{"\uFDD0'method":cljs.core.name.call(null,method__7228),"\uFDD0'action":action__7229}),content]);
};
var G__7231 = function (p__7225,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7231__delegate.call(this, p__7225, content);
};
G__7231.cljs$lang$maxFixedArity = 1;
G__7231.cljs$lang$applyTo = (function (arglist__7232){
var p__7225 = cljs.core.first(arglist__7232);
var content = cljs.core.rest(arglist__7232);
return G__7231__delegate.call(this, p__7225, content);
});
return G__7231;
})()
;

crate.tags.form_to = crate.tags.add_optional_attrs.call(null,func__4100__auto____7230);
var func__4100__auto____7236 = (function (tpe,nme,value){
return cljs.core.Vector.fromArray(["\uFDD0'input",cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'name","\uFDD0'id","\uFDD0'value"],{"\uFDD0'type":tpe,"\uFDD0'name":(function (){var or__3548__auto____7233 = nme;

if(cljs.core.truth_(or__3548__auto____7233))
{return or__3548__auto____7233;
} else
{return null;
}
})(),"\uFDD0'id":(function (){var or__3548__auto____7234 = nme;

if(cljs.core.truth_(or__3548__auto____7234))
{return or__3548__auto____7234;
} else
{return null;
}
})(),"\uFDD0'value":(function (){var or__3548__auto____7235 = value;

if(cljs.core.truth_(or__3548__auto____7235))
{return or__3548__auto____7235;
} else
{return "";
}
})()})]);
});

crate.tags.input_field = crate.tags.add_optional_attrs.call(null,func__4100__auto____7236);
var func__4100__auto____7237 = (function (nme,value){
return crate.tags.input_field.call(null,"text",nme,value);
});

crate.tags.text_field = crate.tags.add_optional_attrs.call(null,func__4100__auto____7237);
var func__4100__auto____7238 = (function (nme,value){
return crate.tags.input_field.call(null,"password",nme,value);
});

crate.tags.password_field = crate.tags.add_optional_attrs.call(null,func__4100__auto____7238);
var func__4100__auto____7239 = (function (for$,text){
return cljs.core.Vector.fromArray(["\uFDD0'label",cljs.core.ObjMap.fromObject(["\uFDD0'for"],{"\uFDD0'for":for$}),text]);
});

crate.tags.label = crate.tags.add_optional_attrs.call(null,func__4100__auto____7239);
var func__4100__auto____7240 = (function (val){
return crate.tags.input_field.call(null,"submit",null,val);
});

crate.tags.submit_button = crate.tags.add_optional_attrs.call(null,func__4100__auto____7240);
var func__4100__auto____7241 = (function() { 
var G__7242__delegate = function (url,content){
return cljs.core.Vector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":url}),content]);
};
var G__7242 = function (url,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7242__delegate.call(this, url, content);
};
G__7242.cljs$lang$maxFixedArity = 1;
G__7242.cljs$lang$applyTo = (function (arglist__7243){
var url = cljs.core.first(arglist__7243);
var content = cljs.core.rest(arglist__7243);
return G__7242__delegate.call(this, url, content);
});
return G__7242;
})()
;

crate.tags.link_to = crate.tags.add_optional_attrs.call(null,func__4100__auto____7241);
