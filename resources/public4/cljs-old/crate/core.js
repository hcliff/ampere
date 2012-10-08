goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http:\/\/www.w3.org\/1999\/xhtml","\uFDD0'svg":"http:\/\/www.w3.org\/2000\/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__7608 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__7589__7590 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__7589__7590))
{var G__7592__7594 = cljs.core.first.call(null,G__7589__7590);
var vec__7593__7595 = G__7592__7594;
var k__7596 = cljs.core.nth.call(null,vec__7593__7595,0,null);
var v__7597 = cljs.core.nth.call(null,vec__7593__7595,1,null);
var G__7589__7598 = G__7589__7590;

var G__7592__7599 = G__7592__7594;
var G__7589__7600 = G__7589__7598;

while(true){
var vec__7601__7602 = G__7592__7599;
var k__7603 = cljs.core.nth.call(null,vec__7601__7602,0,null);
var v__7604 = cljs.core.nth.call(null,vec__7601__7602,1,null);
var G__7589__7605 = G__7589__7600;

dom_attr.call(null,elem,k__7603,v__7604);
var temp__3698__auto____7606 = cljs.core.next.call(null,G__7589__7605);

if(cljs.core.truth_(temp__3698__auto____7606))
{var G__7589__7607 = temp__3698__auto____7606;

{
var G__7611 = cljs.core.first.call(null,G__7589__7607);
var G__7612 = G__7589__7607;
G__7592__7599 = G__7611;
G__7589__7600 = G__7612;
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
var dom_attr__7609 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__7608.call(this,elem,k);
case  3 :
return dom_attr__7609.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__7613__7614 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__7613__7614))
{var c__7615 = cljs.core.first.call(null,G__7613__7614);
var G__7613__7616 = G__7613__7614;

while(true){
var child__7617 = (cljs.core.truth_((c__7615 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__7615))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__7615))?goog.dom.createTextNode.call(null,c__7615):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__7615))?crate.core.elem_factory.call(null,c__7615):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__7615))?as_content.call(null,parent,c__7615):(cljs.core.truth_(c__7615.nodeName)?c__7615:null))))));

if(cljs.core.truth_(child__7617))
{goog.dom.appendChild.call(null,parent,child__7617);
} else
{}
var temp__3698__auto____7618 = cljs.core.next.call(null,G__7613__7616);

if(cljs.core.truth_(temp__3698__auto____7618))
{var G__7613__7619 = temp__3698__auto____7618;

{
var G__7620 = cljs.core.first.call(null,G__7613__7619);
var G__7621 = G__7613__7619;
c__7615 = G__7620;
G__7613__7616 = G__7621;
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
crate.core.normalize_element = (function normalize_element(p__7623){
var vec__7624__7625 = p__7623;
var tag__7626 = cljs.core.nth.call(null,vec__7624__7625,0,null);
var content__7627 = cljs.core.nthnext.call(null,vec__7624__7625,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____7628 = cljs.core.keyword_QMARK_.call(null,tag__7626);

if(cljs.core.truth_(or__3548__auto____7628))
{return or__3548__auto____7628;
} else
{var or__3548__auto____7629 = cljs.core.symbol_QMARK_.call(null,tag__7626);

if(cljs.core.truth_(or__3548__auto____7629))
{return or__3548__auto____7629;
} else
{return cljs.core.string_QMARK_.call(null,tag__7626);
}
}
})())))
{throw cljs.core.str.call(null,tag__7626," is not a valid tag name.");
} else
{}
var vec__7630__7632 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__7626));
var ___7633 = cljs.core.nth.call(null,vec__7630__7632,0,null);
var tag__7634 = cljs.core.nth.call(null,vec__7630__7632,1,null);
var id__7635 = cljs.core.nth.call(null,vec__7630__7632,2,null);
var class$__7636 = cljs.core.nth.call(null,vec__7630__7632,3,null);
var vec__7631__7643 = (function (){var vec__7637__7638 = clojure.string.split.call(null,tag__7634,/:/);
var nsp__7639 = cljs.core.nth.call(null,vec__7637__7638,0,null);
var t__7640 = cljs.core.nth.call(null,vec__7637__7638,1,null);
var ns_xmlns__7641 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__7639));

if(cljs.core.truth_(t__7640))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____7642 = ns_xmlns__7641;

if(cljs.core.truth_(or__3548__auto____7642))
{return or__3548__auto____7642;
} else
{return nsp__7639;
}
})(),t__7640]);
} else
{return cljs.core.Vector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__7639]);
}
})();
var nsp__7644 = cljs.core.nth.call(null,vec__7631__7643,0,null);
var tag__7645 = cljs.core.nth.call(null,vec__7631__7643,1,null);
var tag_attrs__7647 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__7622_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__7622_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____7646 = id__7635;

if(cljs.core.truth_(or__3548__auto____7646))
{return or__3548__auto____7646;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__7636)?clojure.string.replace.call(null,class$__7636,/\./," "):null)})));
var map_attrs__7648 = cljs.core.first.call(null,content__7627);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__7648)))
{return cljs.core.Vector.fromArray([nsp__7644,tag__7645,cljs.core.merge.call(null,tag_attrs__7647,map_attrs__7648),cljs.core.next.call(null,content__7627)]);
} else
{return cljs.core.Vector.fromArray([nsp__7644,tag__7645,tag_attrs__7647,content__7627]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__7649 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__7649)))
{crate.core.dom_attr.call(null,elem,attrs__7649);
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
var vec__7650__7651 = crate.core.normalize_element.call(null,tag_def);
var nsp__7652 = cljs.core.nth.call(null,vec__7650__7651,0,null);
var tag__7653 = cljs.core.nth.call(null,vec__7650__7651,1,null);
var attrs__7654 = cljs.core.nth.call(null,vec__7650__7651,2,null);
var content__7655 = cljs.core.nth.call(null,vec__7650__7651,3,null);
var elem__7656 = crate.core.create_elem.call(null,nsp__7652,tag__7653);

crate.core.dom_attr.call(null,elem__7656,attrs__7654);
crate.core.as_content.call(null,elem__7656,content__7655);
return elem__7656;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__7657 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__7657)))
{return res__7657;
} else
{return cljs.core.first.call(null,res__7657);
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
html.cljs$lang$applyTo = (function (arglist__7658){
var tags = cljs.core.seq( arglist__7658 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
