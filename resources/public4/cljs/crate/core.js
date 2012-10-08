goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http:\/\/www.w3.org\/1999\/xhtml","\uFDD0'svg":"http:\/\/www.w3.org\/2000\/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__7922 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__7903__7904 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__7903__7904))
{var G__7906__7908 = cljs.core.first.call(null,G__7903__7904);
var vec__7907__7909 = G__7906__7908;
var k__7910 = cljs.core.nth.call(null,vec__7907__7909,0,null);
var v__7911 = cljs.core.nth.call(null,vec__7907__7909,1,null);
var G__7903__7912 = G__7903__7904;

var G__7906__7913 = G__7906__7908;
var G__7903__7914 = G__7903__7912;

while(true){
var vec__7915__7916 = G__7906__7913;
var k__7917 = cljs.core.nth.call(null,vec__7915__7916,0,null);
var v__7918 = cljs.core.nth.call(null,vec__7915__7916,1,null);
var G__7903__7919 = G__7903__7914;

dom_attr.call(null,elem,k__7917,v__7918);
var temp__3698__auto____7920 = cljs.core.next.call(null,G__7903__7919);

if(cljs.core.truth_(temp__3698__auto____7920))
{var G__7903__7921 = temp__3698__auto____7920;

{
var G__7925 = cljs.core.first.call(null,G__7903__7921);
var G__7926 = G__7903__7921;
G__7906__7913 = G__7925;
G__7903__7914 = G__7926;
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
var dom_attr__7923 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__7922.call(this,elem,k);
case  3 :
return dom_attr__7923.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__7927__7928 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__7927__7928))
{var c__7929 = cljs.core.first.call(null,G__7927__7928);
var G__7927__7930 = G__7927__7928;

while(true){
var child__7931 = (cljs.core.truth_((c__7929 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__7929))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__7929))?goog.dom.createTextNode.call(null,c__7929):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__7929))?crate.core.elem_factory.call(null,c__7929):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__7929))?as_content.call(null,parent,c__7929):(cljs.core.truth_(c__7929.nodeName)?c__7929:null))))));

if(cljs.core.truth_(child__7931))
{goog.dom.appendChild.call(null,parent,child__7931);
} else
{}
var temp__3698__auto____7932 = cljs.core.next.call(null,G__7927__7930);

if(cljs.core.truth_(temp__3698__auto____7932))
{var G__7927__7933 = temp__3698__auto____7932;

{
var G__7934 = cljs.core.first.call(null,G__7927__7933);
var G__7935 = G__7927__7933;
c__7929 = G__7934;
G__7927__7930 = G__7935;
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
crate.core.normalize_element = (function normalize_element(p__7937){
var vec__7938__7939 = p__7937;
var tag__7940 = cljs.core.nth.call(null,vec__7938__7939,0,null);
var content__7941 = cljs.core.nthnext.call(null,vec__7938__7939,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____7942 = cljs.core.keyword_QMARK_.call(null,tag__7940);

if(cljs.core.truth_(or__3548__auto____7942))
{return or__3548__auto____7942;
} else
{var or__3548__auto____7943 = cljs.core.symbol_QMARK_.call(null,tag__7940);

if(cljs.core.truth_(or__3548__auto____7943))
{return or__3548__auto____7943;
} else
{return cljs.core.string_QMARK_.call(null,tag__7940);
}
}
})())))
{throw cljs.core.str.call(null,tag__7940," is not a valid tag name.");
} else
{}
var vec__7944__7946 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__7940));
var ___7947 = cljs.core.nth.call(null,vec__7944__7946,0,null);
var tag__7948 = cljs.core.nth.call(null,vec__7944__7946,1,null);
var id__7949 = cljs.core.nth.call(null,vec__7944__7946,2,null);
var class$__7950 = cljs.core.nth.call(null,vec__7944__7946,3,null);
var vec__7945__7957 = (function (){var vec__7951__7952 = clojure.string.split.call(null,tag__7948,/:/);
var nsp__7953 = cljs.core.nth.call(null,vec__7951__7952,0,null);
var t__7954 = cljs.core.nth.call(null,vec__7951__7952,1,null);
var ns_xmlns__7955 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__7953));

if(cljs.core.truth_(t__7954))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____7956 = ns_xmlns__7955;

if(cljs.core.truth_(or__3548__auto____7956))
{return or__3548__auto____7956;
} else
{return nsp__7953;
}
})(),t__7954]);
} else
{return cljs.core.Vector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__7953]);
}
})();
var nsp__7958 = cljs.core.nth.call(null,vec__7945__7957,0,null);
var tag__7959 = cljs.core.nth.call(null,vec__7945__7957,1,null);
var tag_attrs__7961 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__7936_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__7936_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____7960 = id__7949;

if(cljs.core.truth_(or__3548__auto____7960))
{return or__3548__auto____7960;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__7950)?clojure.string.replace.call(null,class$__7950,/\./," "):null)})));
var map_attrs__7962 = cljs.core.first.call(null,content__7941);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__7962)))
{return cljs.core.Vector.fromArray([nsp__7958,tag__7959,cljs.core.merge.call(null,tag_attrs__7961,map_attrs__7962),cljs.core.next.call(null,content__7941)]);
} else
{return cljs.core.Vector.fromArray([nsp__7958,tag__7959,tag_attrs__7961,content__7941]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__7963 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__7963)))
{crate.core.dom_attr.call(null,elem,attrs__7963);
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
var vec__7964__7965 = crate.core.normalize_element.call(null,tag_def);
var nsp__7966 = cljs.core.nth.call(null,vec__7964__7965,0,null);
var tag__7967 = cljs.core.nth.call(null,vec__7964__7965,1,null);
var attrs__7968 = cljs.core.nth.call(null,vec__7964__7965,2,null);
var content__7969 = cljs.core.nth.call(null,vec__7964__7965,3,null);
var elem__7970 = crate.core.create_elem.call(null,nsp__7966,tag__7967);

crate.core.dom_attr.call(null,elem__7970,attrs__7968);
crate.core.as_content.call(null,elem__7970,content__7969);
return elem__7970;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__7971 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__7971)))
{return res__7971;
} else
{return cljs.core.first.call(null,res__7971);
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
html.cljs$lang$applyTo = (function (arglist__7972){
var tags = cljs.core.seq( arglist__7972 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
