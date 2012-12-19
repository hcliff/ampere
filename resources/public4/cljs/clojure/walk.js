goog.provide('clojure.walk');
goog.require('cljs.core');
/**
* Traverses form, an arbitrary data structure.  inner and outer are
* functions.  Applies inner to each element of form, building up a
* data structure of the same type, then applies outer to the result.
* Recognizes all Clojure data structures. Consumes seqs as with doall.
*/
clojure.walk.walk = (function walk(inner,outer,form){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,form)))
{return outer.call(null,cljs.core.doall.call(null,cljs.core.map.call(null,inner,form)));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,form)))
{return outer.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,inner,form)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return outer.call(null,form);
} else
{return null;
}
}
}
});
/**
* Performs a depth-first, post-order traversal of form.  Calls f on
* each sub-form, uses f's return value in place of the original.
* Recognizes all Clojure data structures. Consumes seqs as with doall.
*/
clojure.walk.postwalk = (function postwalk(f,form){
return clojure.walk.walk.call(null,cljs.core.partial.call(null,postwalk,f),f,form);
});
/**
* Like postwalk, but does pre-order traversal.
*/
clojure.walk.prewalk = (function prewalk(f,form){
return clojure.walk.walk.call(null,cljs.core.partial.call(null,prewalk,f),cljs.core.identity,f.call(null,form));
});
/**
* Recursively transforms all map keys from strings to keywords.
*/
clojure.walk.keywordize_keys = (function keywordize_keys(m){
var f__7569 = (function (p__7564){
var vec__7565__7566 = p__7564;
var k__7567 = cljs.core.nth.call(null,vec__7565__7566,0,null);
var v__7568 = cljs.core.nth.call(null,vec__7565__7566,1,null);

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,k__7567)))
{return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__7567),v__7568]);
} else
{return cljs.core.Vector.fromArray([k__7567,v__7568]);
}
});

return clojure.walk.postwalk.call(null,(function (x){
if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,f__7569,x));
} else
{return x;
}
}),m);
});
/**
* Recursively transforms all map keys from keywords to strings.
*/
clojure.walk.stringify_keys = (function stringify_keys(m){
var f__7575 = (function (p__7570){
var vec__7571__7572 = p__7570;
var k__7573 = cljs.core.nth.call(null,vec__7571__7572,0,null);
var v__7574 = cljs.core.nth.call(null,vec__7571__7572,1,null);

if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,k__7573)))
{return cljs.core.Vector.fromArray([cljs.core.name.call(null,k__7573),v__7574]);
} else
{return cljs.core.Vector.fromArray([k__7573,v__7574]);
}
});

return clojure.walk.postwalk.call(null,(function (x){
if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,f__7575,x));
} else
{return x;
}
}),m);
});
/**
* Recursively transforms form by replacing keys in smap with their
* values.  Like clojure/replace but works on any data structure.  Does
* replacement at the root of the tree first.
*/
clojure.walk.prewalk_replace = (function prewalk_replace(smap,form){
return clojure.walk.prewalk.call(null,(function (x){
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,smap,x)))
{return smap.call(null,x);
} else
{return x;
}
}),form);
});
/**
* Recursively transforms form by replacing keys in smap with their
* values.  Like clojure/replace but works on any data structure.  Does
* replacement at the leaves of the tree first.
*/
clojure.walk.postwalk_replace = (function postwalk_replace(smap,form){
return clojure.walk.postwalk.call(null,(function (x){
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,smap,x)))
{return smap.call(null,x);
} else
{return x;
}
}),form);
});
