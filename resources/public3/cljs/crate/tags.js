goog.provide('crate.tags');
goog.require('cljs.core');
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.tags.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__8392__delegate = function (args){
if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))))
{var vec__8388__8389 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag__8390 = cljs.core.nth.call(null,vec__8388__8389,0,null);
var body__8391 = cljs.core.nthnext.call(null,vec__8388__8389,1);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body__8391))))
{return cljs.core.apply.call(null,cljs.core.vector,tag__8390,cljs.core.merge.call(null,cljs.core.first.call(null,body__8391),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body__8391));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag__8390,cljs.core.first.call(null,args),body__8391);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__8392 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8392__delegate.call(this, args);
};
G__8392.cljs$lang$maxFixedArity = 0;
G__8392.cljs$lang$applyTo = (function (arglist__8393){
var args = cljs.core.seq( arglist__8393 );;
return G__8392__delegate.call(this, args);
});
return G__8392;
})()
;
});
var func__5161__auto____8399 = (function() { 
var G__8400__delegate = function (p__8394,content){
var vec__8395__8396 = p__8394;
var method__8397 = cljs.core.nth.call(null,vec__8395__8396,0,null);
var action__8398 = cljs.core.nth.call(null,vec__8395__8396,1,null);

return cljs.core.Vector.fromArray(["\uFDD0'form",cljs.core.ObjMap.fromObject(["\uFDD0'method","\uFDD0'action"],{"\uFDD0'method":cljs.core.name.call(null,method__8397),"\uFDD0'action":action__8398}),content]);
};
var G__8400 = function (p__8394,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8400__delegate.call(this, p__8394, content);
};
G__8400.cljs$lang$maxFixedArity = 1;
G__8400.cljs$lang$applyTo = (function (arglist__8401){
var p__8394 = cljs.core.first(arglist__8401);
var content = cljs.core.rest(arglist__8401);
return G__8400__delegate.call(this, p__8394, content);
});
return G__8400;
})()
;

crate.tags.form_to = crate.tags.add_optional_attrs.call(null,func__5161__auto____8399);
var func__5161__auto____8405 = (function (tpe,nme,value){
return cljs.core.Vector.fromArray(["\uFDD0'input",cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'name","\uFDD0'id","\uFDD0'value"],{"\uFDD0'type":tpe,"\uFDD0'name":(function (){var or__3548__auto____8402 = nme;

if(cljs.core.truth_(or__3548__auto____8402))
{return or__3548__auto____8402;
} else
{return null;
}
})(),"\uFDD0'id":(function (){var or__3548__auto____8403 = nme;

if(cljs.core.truth_(or__3548__auto____8403))
{return or__3548__auto____8403;
} else
{return null;
}
})(),"\uFDD0'value":(function (){var or__3548__auto____8404 = value;

if(cljs.core.truth_(or__3548__auto____8404))
{return or__3548__auto____8404;
} else
{return "";
}
})()})]);
});

crate.tags.input_field = crate.tags.add_optional_attrs.call(null,func__5161__auto____8405);
var func__5161__auto____8406 = (function (nme,value){
return crate.tags.input_field.call(null,"text",nme,value);
});

crate.tags.text_field = crate.tags.add_optional_attrs.call(null,func__5161__auto____8406);
var func__5161__auto____8407 = (function (nme,value){
return crate.tags.input_field.call(null,"password",nme,value);
});

crate.tags.password_field = crate.tags.add_optional_attrs.call(null,func__5161__auto____8407);
var func__5161__auto____8408 = (function (for$,text){
return cljs.core.Vector.fromArray(["\uFDD0'label",cljs.core.ObjMap.fromObject(["\uFDD0'for"],{"\uFDD0'for":for$}),text]);
});

crate.tags.label = crate.tags.add_optional_attrs.call(null,func__5161__auto____8408);
var func__5161__auto____8409 = (function (val){
return crate.tags.input_field.call(null,"submit",null,val);
});

crate.tags.submit_button = crate.tags.add_optional_attrs.call(null,func__5161__auto____8409);
var func__5161__auto____8410 = (function() { 
var G__8411__delegate = function (url,content){
return cljs.core.Vector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":url}),content]);
};
var G__8411 = function (url,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8411__delegate.call(this, url, content);
};
G__8411.cljs$lang$maxFixedArity = 1;
G__8411.cljs$lang$applyTo = (function (arglist__8412){
var url = cljs.core.first(arglist__8412);
var content = cljs.core.rest(arglist__8412);
return G__8411__delegate.call(this, url, content);
});
return G__8411;
})()
;

crate.tags.link_to = crate.tags.add_optional_attrs.call(null,func__5161__auto____8410);
