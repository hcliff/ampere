goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http:\/\/www.w3.org\/1999\/xhtml","\uFDD0'svg":"http:\/\/www.w3.org\/2000\/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__8155 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__8136__8137 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__8136__8137))
{var G__8139__8141 = cljs.core.first.call(null,G__8136__8137);
var vec__8140__8142 = G__8139__8141;
var k__8143 = cljs.core.nth.call(null,vec__8140__8142,0,null);
var v__8144 = cljs.core.nth.call(null,vec__8140__8142,1,null);
var G__8136__8145 = G__8136__8137;

var G__8139__8146 = G__8139__8141;
var G__8136__8147 = G__8136__8145;

while(true){
var vec__8148__8149 = G__8139__8146;
var k__8150 = cljs.core.nth.call(null,vec__8148__8149,0,null);
var v__8151 = cljs.core.nth.call(null,vec__8148__8149,1,null);
var G__8136__8152 = G__8136__8147;

dom_attr.call(null,elem,k__8150,v__8151);
var temp__3698__auto____8153 = cljs.core.next.call(null,G__8136__8152);

if(cljs.core.truth_(temp__3698__auto____8153))
{var G__8136__8154 = temp__3698__auto____8153;

{
var G__8158 = cljs.core.first.call(null,G__8136__8154);
var G__8159 = G__8136__8154;
G__8139__8146 = G__8158;
G__8136__8147 = G__8159;
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
var dom_attr__8156 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__8155.call(this,elem,k);
case  3 :
return dom_attr__8156.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__8160__8161 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__8160__8161))
{var c__8162 = cljs.core.first.call(null,G__8160__8161);
var G__8160__8163 = G__8160__8161;

while(true){
var child__8164 = (cljs.core.truth_((c__8162 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__8162))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__8162))?goog.dom.createTextNode.call(null,c__8162):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__8162))?crate.core.elem_factory.call(null,c__8162):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__8162))?as_content.call(null,parent,c__8162):(cljs.core.truth_(c__8162.nodeName)?c__8162:null))))));

if(cljs.core.truth_(child__8164))
{goog.dom.appendChild.call(null,parent,child__8164);
} else
{}
var temp__3698__auto____8165 = cljs.core.next.call(null,G__8160__8163);

if(cljs.core.truth_(temp__3698__auto____8165))
{var G__8160__8166 = temp__3698__auto____8165;

{
var G__8167 = cljs.core.first.call(null,G__8160__8166);
var G__8168 = G__8160__8166;
c__8162 = G__8167;
G__8160__8163 = G__8168;
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
crate.core.normalize_element = (function normalize_element(p__8170){
var vec__8171__8172 = p__8170;
var tag__8173 = cljs.core.nth.call(null,vec__8171__8172,0,null);
var content__8174 = cljs.core.nthnext.call(null,vec__8171__8172,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____8175 = cljs.core.keyword_QMARK_.call(null,tag__8173);

if(cljs.core.truth_(or__3548__auto____8175))
{return or__3548__auto____8175;
} else
{var or__3548__auto____8176 = cljs.core.symbol_QMARK_.call(null,tag__8173);

if(cljs.core.truth_(or__3548__auto____8176))
{return or__3548__auto____8176;
} else
{return cljs.core.string_QMARK_.call(null,tag__8173);
}
}
})())))
{throw cljs.core.str.call(null,tag__8173," is not a valid tag name.");
} else
{}
var vec__8177__8179 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__8173));
var ___8180 = cljs.core.nth.call(null,vec__8177__8179,0,null);
var tag__8181 = cljs.core.nth.call(null,vec__8177__8179,1,null);
var id__8182 = cljs.core.nth.call(null,vec__8177__8179,2,null);
var class$__8183 = cljs.core.nth.call(null,vec__8177__8179,3,null);
var vec__8178__8190 = (function (){var vec__8184__8185 = clojure.string.split.call(null,tag__8181,/:/);
var nsp__8186 = cljs.core.nth.call(null,vec__8184__8185,0,null);
var t__8187 = cljs.core.nth.call(null,vec__8184__8185,1,null);
var ns_xmlns__8188 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__8186));

if(cljs.core.truth_(t__8187))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____8189 = ns_xmlns__8188;

if(cljs.core.truth_(or__3548__auto____8189))
{return or__3548__auto____8189;
} else
{return nsp__8186;
}
})(),t__8187]);
} else
{return cljs.core.Vector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__8186]);
}
})();
var nsp__8191 = cljs.core.nth.call(null,vec__8178__8190,0,null);
var tag__8192 = cljs.core.nth.call(null,vec__8178__8190,1,null);
var tag_attrs__8194 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__8169_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__8169_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____8193 = id__8182;

if(cljs.core.truth_(or__3548__auto____8193))
{return or__3548__auto____8193;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__8183)?clojure.string.replace.call(null,class$__8183,/\./," "):null)})));
var map_attrs__8195 = cljs.core.first.call(null,content__8174);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__8195)))
{return cljs.core.Vector.fromArray([nsp__8191,tag__8192,cljs.core.merge.call(null,tag_attrs__8194,map_attrs__8195),cljs.core.next.call(null,content__8174)]);
} else
{return cljs.core.Vector.fromArray([nsp__8191,tag__8192,tag_attrs__8194,content__8174]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__8196 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__8196)))
{crate.core.dom_attr.call(null,elem,attrs__8196);
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
var vec__8197__8198 = crate.core.normalize_element.call(null,tag_def);
var nsp__8199 = cljs.core.nth.call(null,vec__8197__8198,0,null);
var tag__8200 = cljs.core.nth.call(null,vec__8197__8198,1,null);
var attrs__8201 = cljs.core.nth.call(null,vec__8197__8198,2,null);
var content__8202 = cljs.core.nth.call(null,vec__8197__8198,3,null);
var elem__8203 = crate.core.create_elem.call(null,nsp__8199,tag__8200);

crate.core.dom_attr.call(null,elem__8203,attrs__8201);
crate.core.as_content.call(null,elem__8203,content__8202);
return elem__8203;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__8204 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__8204)))
{return res__8204;
} else
{return cljs.core.first.call(null,res__8204);
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
html.cljs$lang$applyTo = (function (arglist__8205){
var tags = cljs.core.seq( arglist__8205 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
