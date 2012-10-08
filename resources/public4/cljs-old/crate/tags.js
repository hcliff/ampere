goog.provide('crate.tags');
goog.require('cljs.core');
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.tags.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__7845__delegate = function (args){
if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))))
{var vec__7841__7842 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag__7843 = cljs.core.nth.call(null,vec__7841__7842,0,null);
var body__7844 = cljs.core.nthnext.call(null,vec__7841__7842,1);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body__7844))))
{return cljs.core.apply.call(null,cljs.core.vector,tag__7843,cljs.core.merge.call(null,cljs.core.first.call(null,body__7844),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body__7844));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag__7843,cljs.core.first.call(null,args),body__7844);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__7845 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7845__delegate.call(this, args);
};
G__7845.cljs$lang$maxFixedArity = 0;
G__7845.cljs$lang$applyTo = (function (arglist__7846){
var args = cljs.core.seq( arglist__7846 );;
return G__7845__delegate.call(this, args);
});
return G__7845;
})()
;
});
var func__4466__auto____7852 = (function() { 
var G__7853__delegate = function (p__7847,content){
var vec__7848__7849 = p__7847;
var method__7850 = cljs.core.nth.call(null,vec__7848__7849,0,null);
var action__7851 = cljs.core.nth.call(null,vec__7848__7849,1,null);

return cljs.core.Vector.fromArray(["\uFDD0'form",cljs.core.ObjMap.fromObject(["\uFDD0'method","\uFDD0'action"],{"\uFDD0'method":cljs.core.name.call(null,method__7850),"\uFDD0'action":action__7851}),content]);
};
var G__7853 = function (p__7847,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7853__delegate.call(this, p__7847, content);
};
G__7853.cljs$lang$maxFixedArity = 1;
G__7853.cljs$lang$applyTo = (function (arglist__7854){
var p__7847 = cljs.core.first(arglist__7854);
var content = cljs.core.rest(arglist__7854);
return G__7853__delegate.call(this, p__7847, content);
});
return G__7853;
})()
;

crate.tags.form_to = crate.tags.add_optional_attrs.call(null,func__4466__auto____7852);
var func__4466__auto____7858 = (function (tpe,nme,value){
return cljs.core.Vector.fromArray(["\uFDD0'input",cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'name","\uFDD0'id","\uFDD0'value"],{"\uFDD0'type":tpe,"\uFDD0'name":(function (){var or__3548__auto____7855 = nme;

if(cljs.core.truth_(or__3548__auto____7855))
{return or__3548__auto____7855;
} else
{return null;
}
})(),"\uFDD0'id":(function (){var or__3548__auto____7856 = nme;

if(cljs.core.truth_(or__3548__auto____7856))
{return or__3548__auto____7856;
} else
{return null;
}
})(),"\uFDD0'value":(function (){var or__3548__auto____7857 = value;

if(cljs.core.truth_(or__3548__auto____7857))
{return or__3548__auto____7857;
} else
{return "";
}
})()})]);
});

crate.tags.input_field = crate.tags.add_optional_attrs.call(null,func__4466__auto____7858);
var func__4466__auto____7859 = (function (nme,value){
return crate.tags.input_field.call(null,"text",nme,value);
});

crate.tags.text_field = crate.tags.add_optional_attrs.call(null,func__4466__auto____7859);
var func__4466__auto____7860 = (function (nme,value){
return crate.tags.input_field.call(null,"password",nme,value);
});

crate.tags.password_field = crate.tags.add_optional_attrs.call(null,func__4466__auto____7860);
var func__4466__auto____7861 = (function (for$,text){
return cljs.core.Vector.fromArray(["\uFDD0'label",cljs.core.ObjMap.fromObject(["\uFDD0'for"],{"\uFDD0'for":for$}),text]);
});

crate.tags.label = crate.tags.add_optional_attrs.call(null,func__4466__auto____7861);
var func__4466__auto____7862 = (function (val){
return crate.tags.input_field.call(null,"submit",null,val);
});

crate.tags.submit_button = crate.tags.add_optional_attrs.call(null,func__4466__auto____7862);
var func__4466__auto____7863 = (function() { 
var G__7864__delegate = function (url,content){
return cljs.core.Vector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":url}),content]);
};
var G__7864 = function (url,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7864__delegate.call(this, url, content);
};
G__7864.cljs$lang$maxFixedArity = 1;
G__7864.cljs$lang$applyTo = (function (arglist__7865){
var url = cljs.core.first(arglist__7865);
var content = cljs.core.rest(arglist__7865);
return G__7864__delegate.call(this, url, content);
});
return G__7864;
})()
;

crate.tags.link_to = crate.tags.add_optional_attrs.call(null,func__4466__auto____7863);
