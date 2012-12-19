goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http:\/\/www.w3.org\/1999\/xhtml","\uFDD0'svg":"http:\/\/www.w3.org\/2000\/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__6986 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__6967__6968 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__6967__6968))
{var G__6970__6972 = cljs.core.first.call(null,G__6967__6968);
var vec__6971__6973 = G__6970__6972;
var k__6974 = cljs.core.nth.call(null,vec__6971__6973,0,null);
var v__6975 = cljs.core.nth.call(null,vec__6971__6973,1,null);
var G__6967__6976 = G__6967__6968;

var G__6970__6977 = G__6970__6972;
var G__6967__6978 = G__6967__6976;

while(true){
var vec__6979__6980 = G__6970__6977;
var k__6981 = cljs.core.nth.call(null,vec__6979__6980,0,null);
var v__6982 = cljs.core.nth.call(null,vec__6979__6980,1,null);
var G__6967__6983 = G__6967__6978;

dom_attr.call(null,elem,k__6981,v__6982);
var temp__3698__auto____6984 = cljs.core.next.call(null,G__6967__6983);

if(cljs.core.truth_(temp__3698__auto____6984))
{var G__6967__6985 = temp__3698__auto____6984;

{
var G__6989 = cljs.core.first.call(null,G__6967__6985);
var G__6990 = G__6967__6985;
G__6970__6977 = G__6989;
G__6967__6978 = G__6990;
continue;
}
} else
{}
break;
}
} else
{}
return elem;
}
} else
{return null;
}
});
var dom_attr__6987 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__6986.call(this,elem,k);
case  3 :
return dom_attr__6987.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__6991__6992 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__6991__6992))
{var c__6993 = cljs.core.first.call(null,G__6991__6992);
var G__6991__6994 = G__6991__6992;

while(true){
var child__6995 = (cljs.core.truth_((c__6993 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__6993))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__6993))?goog.dom.createTextNode.call(null,c__6993):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__6993))?crate.core.elem_factory.call(null,c__6993):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__6993))?as_content.call(null,parent,c__6993):(cljs.core.truth_(c__6993.nodeName)?c__6993:null))))));

if(cljs.core.truth_(child__6995))
{goog.dom.appendChild.call(null,parent,child__6995);
} else
{}
var temp__3698__auto____6996 = cljs.core.next.call(null,G__6991__6994);

if(cljs.core.truth_(temp__3698__auto____6996))
{var G__6991__6997 = temp__3698__auto____6996;

{
var G__6998 = cljs.core.first.call(null,G__6991__6997);
var G__6999 = G__6991__6997;
c__6993 = G__6998;
G__6991__6994 = G__6999;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
crate.core.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.core.normalize_element = (function normalize_element(p__7001){
var vec__7002__7003 = p__7001;
var tag__7004 = cljs.core.nth.call(null,vec__7002__7003,0,null);
var content__7005 = cljs.core.nthnext.call(null,vec__7002__7003,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____7006 = cljs.core.keyword_QMARK_.call(null,tag__7004);

if(cljs.core.truth_(or__3548__auto____7006))
{return or__3548__auto____7006;
} else
{var or__3548__auto____7007 = cljs.core.symbol_QMARK_.call(null,tag__7004);

if(cljs.core.truth_(or__3548__auto____7007))
{return or__3548__auto____7007;
} else
{return cljs.core.string_QMARK_.call(null,tag__7004);
}
}
})())))
{throw cljs.core.str.call(null,tag__7004," is not a valid tag name.");
} else
{}
var vec__7008__7010 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__7004));
var ___7011 = cljs.core.nth.call(null,vec__7008__7010,0,null);
var tag__7012 = cljs.core.nth.call(null,vec__7008__7010,1,null);
var id__7013 = cljs.core.nth.call(null,vec__7008__7010,2,null);
var class$__7014 = cljs.core.nth.call(null,vec__7008__7010,3,null);
var vec__7009__7021 = (function (){var vec__7015__7016 = clojure.string.split.call(null,tag__7012,/:/);
var nsp__7017 = cljs.core.nth.call(null,vec__7015__7016,0,null);
var t__7018 = cljs.core.nth.call(null,vec__7015__7016,1,null);
var ns_xmlns__7019 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__7017));

if(cljs.core.truth_(t__7018))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____7020 = ns_xmlns__7019;

if(cljs.core.truth_(or__3548__auto____7020))
{return or__3548__auto____7020;
} else
{return nsp__7017;
}
})(),t__7018]);
} else
{return cljs.core.Vector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__7017]);
}
})();
var nsp__7022 = cljs.core.nth.call(null,vec__7009__7021,0,null);
var tag__7023 = cljs.core.nth.call(null,vec__7009__7021,1,null);
var tag_attrs__7025 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__7000_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__7000_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____7024 = id__7013;

if(cljs.core.truth_(or__3548__auto____7024))
{return or__3548__auto____7024;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__7014)?clojure.string.replace.call(null,class$__7014,/\./," "):null)})));
var map_attrs__7026 = cljs.core.first.call(null,content__7005);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__7026)))
{return cljs.core.Vector.fromArray([nsp__7022,tag__7023,cljs.core.merge.call(null,tag_attrs__7025,map_attrs__7026),cljs.core.next.call(null,content__7005)]);
} else
{return cljs.core.Vector.fromArray([nsp__7022,tag__7023,tag_attrs__7025,content__7005]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__7027 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__7027)))
{crate.core.dom_attr.call(null,elem,attrs__7027);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
crate.core.create_elem = (cljs.core.truth_(document.createElementNS)?(function (nsp,tag){
return document.createElementNS(nsp,tag);
}):(function (_,tag){
return document.createElement(tag);
}));
crate.core.elem_factory = (function elem_factory(tag_def){
var vec__7028__7029 = crate.core.normalize_element.call(null,tag_def);
var nsp__7030 = cljs.core.nth.call(null,vec__7028__7029,0,null);
var tag__7031 = cljs.core.nth.call(null,vec__7028__7029,1,null);
var attrs__7032 = cljs.core.nth.call(null,vec__7028__7029,2,null);
var content__7033 = cljs.core.nth.call(null,vec__7028__7029,3,null);
var elem__7034 = crate.core.create_elem.call(null,nsp__7030,tag__7031);

crate.core.dom_attr.call(null,elem__7034,attrs__7032);
crate.core.as_content.call(null,elem__7034,content__7033);
return elem__7034;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__7035 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__7035)))
{return res__7035;
} else
{return cljs.core.first.call(null,res__7035);
}
};
var html = function (var_args){
var tags = null;
if (goog.isDef(var_args)) {
  tags = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return html__delegate.call(this, tags);
};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__7036){
var tags = cljs.core.seq( arglist__7036 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
