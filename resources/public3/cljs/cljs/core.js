goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____6267 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____6267))
{return or__3548__auto____6267;
} else
{var or__3548__auto____6268 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____6268))
{return or__3548__auto____6268;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return (array[i]);
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__6332 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____6269 = this$;

if(cljs.core.truth_(and__3546__auto____6269))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6269;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____6270 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6270))
{return or__3548__auto____6270;
} else
{var or__3548__auto____6271 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6271))
{return or__3548__auto____6271;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__6333 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____6272 = this$;

if(cljs.core.truth_(and__3546__auto____6272))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6272;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____6273 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6273))
{return or__3548__auto____6273;
} else
{var or__3548__auto____6274 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6274))
{return or__3548__auto____6274;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__6334 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____6275 = this$;

if(cljs.core.truth_(and__3546__auto____6275))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6275;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____6276 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6276))
{return or__3548__auto____6276;
} else
{var or__3548__auto____6277 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6277))
{return or__3548__auto____6277;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__6335 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____6278 = this$;

if(cljs.core.truth_(and__3546__auto____6278))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6278;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____6279 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6279))
{return or__3548__auto____6279;
} else
{var or__3548__auto____6280 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6280))
{return or__3548__auto____6280;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__6336 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____6281 = this$;

if(cljs.core.truth_(and__3546__auto____6281))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6281;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____6282 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6282))
{return or__3548__auto____6282;
} else
{var or__3548__auto____6283 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6283))
{return or__3548__auto____6283;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6337 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____6284 = this$;

if(cljs.core.truth_(and__3546__auto____6284))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6284;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____6285 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6285))
{return or__3548__auto____6285;
} else
{var or__3548__auto____6286 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6286))
{return or__3548__auto____6286;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__6338 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____6287 = this$;

if(cljs.core.truth_(and__3546__auto____6287))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6287;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____6288 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6288))
{return or__3548__auto____6288;
} else
{var or__3548__auto____6289 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6289))
{return or__3548__auto____6289;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__6339 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____6290 = this$;

if(cljs.core.truth_(and__3546__auto____6290))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6290;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____6291 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6291))
{return or__3548__auto____6291;
} else
{var or__3548__auto____6292 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6292))
{return or__3548__auto____6292;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__6340 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____6293 = this$;

if(cljs.core.truth_(and__3546__auto____6293))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6293;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____6294 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6294))
{return or__3548__auto____6294;
} else
{var or__3548__auto____6295 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6295))
{return or__3548__auto____6295;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__6341 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____6296 = this$;

if(cljs.core.truth_(and__3546__auto____6296))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6296;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____6297 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6297))
{return or__3548__auto____6297;
} else
{var or__3548__auto____6298 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6298))
{return or__3548__auto____6298;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__6342 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____6299 = this$;

if(cljs.core.truth_(and__3546__auto____6299))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6299;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____6300 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6300))
{return or__3548__auto____6300;
} else
{var or__3548__auto____6301 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6301))
{return or__3548__auto____6301;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__6343 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____6302 = this$;

if(cljs.core.truth_(and__3546__auto____6302))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6302;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____6303 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6303))
{return or__3548__auto____6303;
} else
{var or__3548__auto____6304 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6304))
{return or__3548__auto____6304;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__6344 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____6305 = this$;

if(cljs.core.truth_(and__3546__auto____6305))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6305;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____6306 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6306))
{return or__3548__auto____6306;
} else
{var or__3548__auto____6307 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6307))
{return or__3548__auto____6307;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__6345 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____6308 = this$;

if(cljs.core.truth_(and__3546__auto____6308))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6308;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____6309 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6309))
{return or__3548__auto____6309;
} else
{var or__3548__auto____6310 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6310))
{return or__3548__auto____6310;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__6346 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____6311 = this$;

if(cljs.core.truth_(and__3546__auto____6311))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6311;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____6312 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6312))
{return or__3548__auto____6312;
} else
{var or__3548__auto____6313 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6313))
{return or__3548__auto____6313;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__6347 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____6314 = this$;

if(cljs.core.truth_(and__3546__auto____6314))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6314;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____6315 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6315))
{return or__3548__auto____6315;
} else
{var or__3548__auto____6316 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6316))
{return or__3548__auto____6316;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__6348 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____6317 = this$;

if(cljs.core.truth_(and__3546__auto____6317))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6317;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____6318 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6318))
{return or__3548__auto____6318;
} else
{var or__3548__auto____6319 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6319))
{return or__3548__auto____6319;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__6349 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____6320 = this$;

if(cljs.core.truth_(and__3546__auto____6320))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6320;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____6321 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6321))
{return or__3548__auto____6321;
} else
{var or__3548__auto____6322 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6322))
{return or__3548__auto____6322;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__6350 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____6323 = this$;

if(cljs.core.truth_(and__3546__auto____6323))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6323;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____6324 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6324))
{return or__3548__auto____6324;
} else
{var or__3548__auto____6325 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6325))
{return or__3548__auto____6325;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__6351 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____6326 = this$;

if(cljs.core.truth_(and__3546__auto____6326))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6326;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____6327 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6327))
{return or__3548__auto____6327;
} else
{var or__3548__auto____6328 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6328))
{return or__3548__auto____6328;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__6352 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____6329 = this$;

if(cljs.core.truth_(and__3546__auto____6329))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6329;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____6330 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6330))
{return or__3548__auto____6330;
} else
{var or__3548__auto____6331 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6331))
{return or__3548__auto____6331;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__6332.call(this,this$);
case  2 :
return _invoke__6333.call(this,this$,a);
case  3 :
return _invoke__6334.call(this,this$,a,b);
case  4 :
return _invoke__6335.call(this,this$,a,b,c);
case  5 :
return _invoke__6336.call(this,this$,a,b,c,d);
case  6 :
return _invoke__6337.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__6338.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__6339.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__6340.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__6341.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__6342.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__6343.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__6344.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__6345.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__6346.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__6347.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__6348.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__6349.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__6350.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__6351.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__6352.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6354 = coll;

if(cljs.core.truth_(and__3546__auto____6354))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____6354;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____6355 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6355))
{return or__3548__auto____6355;
} else
{var or__3548__auto____6356 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____6356))
{return or__3548__auto____6356;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6357 = coll;

if(cljs.core.truth_(and__3546__auto____6357))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____6357;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____6358 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6358))
{return or__3548__auto____6358;
} else
{var or__3548__auto____6359 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____6359))
{return or__3548__auto____6359;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____6360 = coll;

if(cljs.core.truth_(and__3546__auto____6360))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____6360;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____6361 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6361))
{return or__3548__auto____6361;
} else
{var or__3548__auto____6362 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____6362))
{return or__3548__auto____6362;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__6369 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____6363 = coll;

if(cljs.core.truth_(and__3546__auto____6363))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____6363;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____6364 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6364))
{return or__3548__auto____6364;
} else
{var or__3548__auto____6365 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____6365))
{return or__3548__auto____6365;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__6370 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____6366 = coll;

if(cljs.core.truth_(and__3546__auto____6366))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____6366;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____6367 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6367))
{return or__3548__auto____6367;
} else
{var or__3548__auto____6368 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____6368))
{return or__3548__auto____6368;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__6369.call(this,coll,n);
case  3 :
return _nth__6370.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6372 = coll;

if(cljs.core.truth_(and__3546__auto____6372))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____6372;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____6373 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6373))
{return or__3548__auto____6373;
} else
{var or__3548__auto____6374 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____6374))
{return or__3548__auto____6374;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6375 = coll;

if(cljs.core.truth_(and__3546__auto____6375))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____6375;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____6376 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6376))
{return or__3548__auto____6376;
} else
{var or__3548__auto____6377 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____6377))
{return or__3548__auto____6377;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__6384 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____6378 = o;

if(cljs.core.truth_(and__3546__auto____6378))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____6378;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____6379 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6379))
{return or__3548__auto____6379;
} else
{var or__3548__auto____6380 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____6380))
{return or__3548__auto____6380;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__6385 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____6381 = o;

if(cljs.core.truth_(and__3546__auto____6381))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____6381;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____6382 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6382))
{return or__3548__auto____6382;
} else
{var or__3548__auto____6383 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____6383))
{return or__3548__auto____6383;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__6384.call(this,o,k);
case  3 :
return _lookup__6385.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____6387 = coll;

if(cljs.core.truth_(and__3546__auto____6387))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____6387;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____6388 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6388))
{return or__3548__auto____6388;
} else
{var or__3548__auto____6389 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____6389))
{return or__3548__auto____6389;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____6390 = coll;

if(cljs.core.truth_(and__3546__auto____6390))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____6390;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____6391 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6391))
{return or__3548__auto____6391;
} else
{var or__3548__auto____6392 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____6392))
{return or__3548__auto____6392;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____6393 = coll;

if(cljs.core.truth_(and__3546__auto____6393))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____6393;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____6394 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6394))
{return or__3548__auto____6394;
} else
{var or__3548__auto____6395 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____6395))
{return or__3548__auto____6395;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____6396 = coll;

if(cljs.core.truth_(and__3546__auto____6396))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____6396;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____6397 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6397))
{return or__3548__auto____6397;
} else
{var or__3548__auto____6398 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____6398))
{return or__3548__auto____6398;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6399 = coll;

if(cljs.core.truth_(and__3546__auto____6399))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____6399;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____6400 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6400))
{return or__3548__auto____6400;
} else
{var or__3548__auto____6401 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____6401))
{return or__3548__auto____6401;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6402 = coll;

if(cljs.core.truth_(and__3546__auto____6402))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____6402;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____6403 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6403))
{return or__3548__auto____6403;
} else
{var or__3548__auto____6404 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____6404))
{return or__3548__auto____6404;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____6405 = coll;

if(cljs.core.truth_(and__3546__auto____6405))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____6405;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____6406 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6406))
{return or__3548__auto____6406;
} else
{var or__3548__auto____6407 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____6407))
{return or__3548__auto____6407;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____6408 = o;

if(cljs.core.truth_(and__3546__auto____6408))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____6408;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____6409 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6409))
{return or__3548__auto____6409;
} else
{var or__3548__auto____6410 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____6410))
{return or__3548__auto____6410;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____6411 = o;

if(cljs.core.truth_(and__3546__auto____6411))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____6411;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____6412 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6412))
{return or__3548__auto____6412;
} else
{var or__3548__auto____6413 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____6413))
{return or__3548__auto____6413;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____6414 = o;

if(cljs.core.truth_(and__3546__auto____6414))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____6414;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____6415 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6415))
{return or__3548__auto____6415;
} else
{var or__3548__auto____6416 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____6416))
{return or__3548__auto____6416;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____6417 = o;

if(cljs.core.truth_(and__3546__auto____6417))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____6417;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____6418 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6418))
{return or__3548__auto____6418;
} else
{var or__3548__auto____6419 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____6419))
{return or__3548__auto____6419;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__6426 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____6420 = coll;

if(cljs.core.truth_(and__3546__auto____6420))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____6420;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____6421 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6421))
{return or__3548__auto____6421;
} else
{var or__3548__auto____6422 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____6422))
{return or__3548__auto____6422;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__6427 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____6423 = coll;

if(cljs.core.truth_(and__3546__auto____6423))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____6423;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____6424 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6424))
{return or__3548__auto____6424;
} else
{var or__3548__auto____6425 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____6425))
{return or__3548__auto____6425;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__6426.call(this,coll,f);
case  3 :
return _reduce__6427.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____6429 = o;

if(cljs.core.truth_(and__3546__auto____6429))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____6429;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____6430 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6430))
{return or__3548__auto____6430;
} else
{var or__3548__auto____6431 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____6431))
{return or__3548__auto____6431;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____6432 = o;

if(cljs.core.truth_(and__3546__auto____6432))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____6432;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____6433 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6433))
{return or__3548__auto____6433;
} else
{var or__3548__auto____6434 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____6434))
{return or__3548__auto____6434;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____6435 = o;

if(cljs.core.truth_(and__3546__auto____6435))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____6435;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____6436 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6436))
{return or__3548__auto____6436;
} else
{var or__3548__auto____6437 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____6437))
{return or__3548__auto____6437;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____6438 = o;

if(cljs.core.truth_(and__3546__auto____6438))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____6438;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____6439 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6439))
{return or__3548__auto____6439;
} else
{var or__3548__auto____6440 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____6440))
{return or__3548__auto____6440;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____6441 = d;

if(cljs.core.truth_(and__3546__auto____6441))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____6441;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____6442 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____6442))
{return or__3548__auto____6442;
} else
{var or__3548__auto____6443 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____6443))
{return or__3548__auto____6443;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____6444 = this$;

if(cljs.core.truth_(and__3546__auto____6444))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____6444;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____6445 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6445))
{return or__3548__auto____6445;
} else
{var or__3548__auto____6446 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____6446))
{return or__3548__auto____6446;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____6447 = this$;

if(cljs.core.truth_(and__3546__auto____6447))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____6447;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____6448 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6448))
{return or__3548__auto____6448;
} else
{var or__3548__auto____6449 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____6449))
{return or__3548__auto____6449;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____6450 = this$;

if(cljs.core.truth_(and__3546__auto____6450))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____6450;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____6451 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6451))
{return or__3548__auto____6451;
} else
{var or__3548__auto____6452 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____6452))
{return or__3548__auto____6452;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
*/
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
cljs.core.type = (function type(x){
return (x).constructor;
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__6453 = null;
var G__6453__6454 = (function (o,k){
return null;
});
var G__6453__6455 = (function (o,k,not_found){
return not_found;
});
G__6453 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__6453__6454.call(this,o,k);
case  3 :
return G__6453__6455.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6453;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__6457 = null;
var G__6457__6458 = (function (_,f){
return f.call(null);
});
var G__6457__6459 = (function (_,f,start){
return start;
});
G__6457 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__6457__6458.call(this,_,f);
case  3 :
return G__6457__6459.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6457;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o === null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__6461 = null;
var G__6461__6462 = (function (_,n){
return null;
});
var G__6461__6463 = (function (_,n,not_found){
return not_found;
});
G__6461 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__6461__6462.call(this,_,n);
case  3 :
return G__6461__6463.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6461;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__6471 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__6465 = cljs.core._nth.call(null,cicoll,0);
var n__6466 = 1;

while(true){
if(cljs.core.truth_((n__6466 < cljs.core._count.call(null,cicoll))))
{{
var G__6475 = f.call(null,val__6465,cljs.core._nth.call(null,cicoll,n__6466));
var G__6476 = (n__6466 + 1);
val__6465 = G__6475;
n__6466 = G__6476;
continue;
}
} else
{return val__6465;
}
break;
}
}
});
var ci_reduce__6472 = (function (cicoll,f,val){
var val__6467 = val;
var n__6468 = 0;

while(true){
if(cljs.core.truth_((n__6468 < cljs.core._count.call(null,cicoll))))
{{
var G__6477 = f.call(null,val__6467,cljs.core._nth.call(null,cicoll,n__6468));
var G__6478 = (n__6468 + 1);
val__6467 = G__6477;
n__6468 = G__6478;
continue;
}
} else
{return val__6467;
}
break;
}
});
var ci_reduce__6473 = (function (cicoll,f,val,idx){
var val__6469 = val;
var n__6470 = idx;

while(true){
if(cljs.core.truth_((n__6470 < cljs.core._count.call(null,cicoll))))
{{
var G__6479 = f.call(null,val__6469,cljs.core._nth.call(null,cicoll,n__6470));
var G__6480 = (n__6470 + 1);
val__6469 = G__6479;
n__6470 = G__6480;
continue;
}
} else
{return val__6469;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__6471.call(this,cicoll,f);
case  3 :
return ci_reduce__6472.call(this,cicoll,f,val);
case  4 :
return ci_reduce__6473.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__2227__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__6481 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__6494 = null;
var G__6494__6495 = (function (_,f){
var this__6482 = this;
return cljs.core.ci_reduce.call(null,this__6482.a,f,(this__6482.a[this__6482.i]),(this__6482.i + 1));
});
var G__6494__6496 = (function (_,f,start){
var this__6483 = this;
return cljs.core.ci_reduce.call(null,this__6483.a,f,start,this__6483.i);
});
G__6494 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__6494__6495.call(this,_,f);
case  3 :
return G__6494__6496.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6494;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6484 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6485 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__6498 = null;
var G__6498__6499 = (function (coll,n){
var this__6486 = this;
var i__6487 = (n + this__6486.i);

if(cljs.core.truth_((i__6487 < this__6486.a.length)))
{return (this__6486.a[i__6487]);
} else
{return null;
}
});
var G__6498__6500 = (function (coll,n,not_found){
var this__6488 = this;
var i__6489 = (n + this__6488.i);

if(cljs.core.truth_((i__6489 < this__6488.a.length)))
{return (this__6488.a[i__6489]);
} else
{return not_found;
}
});
G__6498 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__6498__6499.call(this,coll,n);
case  3 :
return G__6498__6500.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6498;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__6490 = this;
return (this__6490.a.length - this__6490.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__6491 = this;
return (this__6491.a[this__6491.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__6492 = this;
if(cljs.core.truth_(((this__6492.i + 1) < this__6492.a.length)))
{return (new cljs.core.IndexedSeq(this__6492.a,(this__6492.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__6493 = this;
return this$;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__6502 = null;
var G__6502__6503 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__6502__6504 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__6502 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__6502__6503.call(this,array,f);
case  3 :
return G__6502__6504.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6502;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__6506 = null;
var G__6506__6507 = (function (array,k){
return (array[k]);
});
var G__6506__6508 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__6506 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__6506__6507.call(this,array,k);
case  3 :
return G__6506__6508.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6506;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__6510 = null;
var G__6510__6511 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__6510__6512 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__6510 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__6510__6511.call(this,array,n);
case  3 :
return G__6510__6512.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6510;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____6514 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6514))
{var s__6515 = temp__3698__auto____6514;

return cljs.core._first.call(null,s__6515);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__6516 = cljs.core.next.call(null,s);
s = G__6516;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__6517 = cljs.core.seq.call(null,x);
var n__6518 = 0;

while(true){
if(cljs.core.truth_(s__6517))
{{
var G__6519 = cljs.core.next.call(null,s__6517);
var G__6520 = (n__6518 + 1);
s__6517 = G__6519;
n__6518 = G__6520;
continue;
}
} else
{return n__6518;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__6521 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__6522 = (function() { 
var G__6524__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__6525 = conj.call(null,coll,x);
var G__6526 = cljs.core.first.call(null,xs);
var G__6527 = cljs.core.next.call(null,xs);
coll = G__6525;
x = G__6526;
xs = G__6527;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__6524 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6524__delegate.call(this, coll, x, xs);
};
G__6524.cljs$lang$maxFixedArity = 2;
G__6524.cljs$lang$applyTo = (function (arglist__6528){
var coll = cljs.core.first(arglist__6528);
var x = cljs.core.first(cljs.core.next(arglist__6528));
var xs = cljs.core.rest(cljs.core.next(arglist__6528));
return G__6524__delegate.call(this, coll, x, xs);
});
return G__6524;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__6521.call(this,coll,x);
default:
return conj__6522.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__6522.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__6529 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__6530 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__6529.call(this,coll,n);
case  3 :
return nth__6530.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__6532 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__6533 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__6532.call(this,o,k);
case  3 :
return get__6533.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__6536 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__6537 = (function() { 
var G__6539__delegate = function (coll,k,v,kvs){
while(true){
var ret__6535 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__6540 = ret__6535;
var G__6541 = cljs.core.first.call(null,kvs);
var G__6542 = cljs.core.second.call(null,kvs);
var G__6543 = cljs.core.nnext.call(null,kvs);
coll = G__6540;
k = G__6541;
v = G__6542;
kvs = G__6543;
continue;
}
} else
{return ret__6535;
}
break;
}
};
var G__6539 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6539__delegate.call(this, coll, k, v, kvs);
};
G__6539.cljs$lang$maxFixedArity = 3;
G__6539.cljs$lang$applyTo = (function (arglist__6544){
var coll = cljs.core.first(arglist__6544);
var k = cljs.core.first(cljs.core.next(arglist__6544));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6544)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6544)));
return G__6539__delegate.call(this, coll, k, v, kvs);
});
return G__6539;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__6536.call(this,coll,k,v);
default:
return assoc__6537.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__6537.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__6546 = (function (coll){
return coll;
});
var dissoc__6547 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__6548 = (function() { 
var G__6550__delegate = function (coll,k,ks){
while(true){
var ret__6545 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__6551 = ret__6545;
var G__6552 = cljs.core.first.call(null,ks);
var G__6553 = cljs.core.next.call(null,ks);
coll = G__6551;
k = G__6552;
ks = G__6553;
continue;
}
} else
{return ret__6545;
}
break;
}
};
var G__6550 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6550__delegate.call(this, coll, k, ks);
};
G__6550.cljs$lang$maxFixedArity = 2;
G__6550.cljs$lang$applyTo = (function (arglist__6554){
var coll = cljs.core.first(arglist__6554);
var k = cljs.core.first(cljs.core.next(arglist__6554));
var ks = cljs.core.rest(cljs.core.next(arglist__6554));
return G__6550__delegate.call(this, coll, k, ks);
});
return G__6550;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__6546.call(this,coll);
case  2 :
return dissoc__6547.call(this,coll,k);
default:
return dissoc__6548.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__6548.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__2312__auto____6555 = o;

if(cljs.core.truth_((function (){var and__3546__auto____6556 = x__2312__auto____6555;

if(cljs.core.truth_(and__3546__auto____6556))
{var and__3546__auto____6557 = x__2312__auto____6555.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____6557))
{return cljs.core.not.call(null,x__2312__auto____6555.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____6557;
}
} else
{return and__3546__auto____6556;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__2312__auto____6555);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__6559 = (function (coll){
return coll;
});
var disj__6560 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__6561 = (function() { 
var G__6563__delegate = function (coll,k,ks){
while(true){
var ret__6558 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__6564 = ret__6558;
var G__6565 = cljs.core.first.call(null,ks);
var G__6566 = cljs.core.next.call(null,ks);
coll = G__6564;
k = G__6565;
ks = G__6566;
continue;
}
} else
{return ret__6558;
}
break;
}
};
var G__6563 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6563__delegate.call(this, coll, k, ks);
};
G__6563.cljs$lang$maxFixedArity = 2;
G__6563.cljs$lang$applyTo = (function (arglist__6567){
var coll = cljs.core.first(arglist__6567);
var k = cljs.core.first(cljs.core.next(arglist__6567));
var ks = cljs.core.rest(cljs.core.next(arglist__6567));
return G__6563__delegate.call(this, coll, k, ks);
});
return G__6563;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__6559.call(this,coll);
case  2 :
return disj__6560.call(this,coll,k);
default:
return disj__6561.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__6561.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__2312__auto____6568 = x;

if(cljs.core.truth_((function (){var and__3546__auto____6569 = x__2312__auto____6568;

if(cljs.core.truth_(and__3546__auto____6569))
{var and__3546__auto____6570 = x__2312__auto____6568.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____6570))
{return cljs.core.not.call(null,x__2312__auto____6568.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____6570;
}
} else
{return and__3546__auto____6569;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__2312__auto____6568);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__2312__auto____6571 = x;

if(cljs.core.truth_((function (){var and__3546__auto____6572 = x__2312__auto____6571;

if(cljs.core.truth_(and__3546__auto____6572))
{var and__3546__auto____6573 = x__2312__auto____6571.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____6573))
{return cljs.core.not.call(null,x__2312__auto____6571.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____6573;
}
} else
{return and__3546__auto____6572;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__2312__auto____6571);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__2312__auto____6574 = x;

if(cljs.core.truth_((function (){var and__3546__auto____6575 = x__2312__auto____6574;

if(cljs.core.truth_(and__3546__auto____6575))
{var and__3546__auto____6576 = x__2312__auto____6574.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____6576))
{return cljs.core.not.call(null,x__2312__auto____6574.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____6576;
}
} else
{return and__3546__auto____6575;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__2312__auto____6574);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__2312__auto____6577 = x;

if(cljs.core.truth_((function (){var and__3546__auto____6578 = x__2312__auto____6577;

if(cljs.core.truth_(and__3546__auto____6578))
{var and__3546__auto____6579 = x__2312__auto____6577.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____6579))
{return cljs.core.not.call(null,x__2312__auto____6577.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____6579;
}
} else
{return and__3546__auto____6578;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__2312__auto____6577);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__2312__auto____6580 = x;

if(cljs.core.truth_((function (){var and__3546__auto____6581 = x__2312__auto____6580;

if(cljs.core.truth_(and__3546__auto____6581))
{var and__3546__auto____6582 = x__2312__auto____6580.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____6582))
{return cljs.core.not.call(null,x__2312__auto____6580.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____6582;
}
} else
{return and__3546__auto____6581;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__2312__auto____6580);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__2312__auto____6583 = x;

if(cljs.core.truth_((function (){var and__3546__auto____6584 = x__2312__auto____6583;

if(cljs.core.truth_(and__3546__auto____6584))
{var and__3546__auto____6585 = x__2312__auto____6583.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____6585))
{return cljs.core.not.call(null,x__2312__auto____6583.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____6585;
}
} else
{return and__3546__auto____6584;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__2312__auto____6583);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__2312__auto____6586 = x;

if(cljs.core.truth_((function (){var and__3546__auto____6587 = x__2312__auto____6586;

if(cljs.core.truth_(and__3546__auto____6587))
{var and__3546__auto____6588 = x__2312__auto____6586.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____6588))
{return cljs.core.not.call(null,x__2312__auto____6586.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____6588;
}
} else
{return and__3546__auto____6587;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__2312__auto____6586);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__6589 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__6589.push(key);
}));
return keys__6589;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_((s === null)))
{return false;
} else
{var x__2312__auto____6590 = s;

if(cljs.core.truth_((function (){var and__3546__auto____6591 = x__2312__auto____6590;

if(cljs.core.truth_(and__3546__auto____6591))
{var and__3546__auto____6592 = x__2312__auto____6590.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____6592))
{return cljs.core.not.call(null,x__2312__auto____6590.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____6592;
}
} else
{return and__3546__auto____6591;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__2312__auto____6590);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____6593 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____6593))
{return cljs.core.not.call(null,(function (){var or__3548__auto____6594 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____6594))
{return or__3548__auto____6594;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____6593;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____6595 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____6595))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____6595;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____6596 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____6596))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____6596;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____6597 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____6597))
{return (n == n.toFixed());
} else
{return and__3546__auto____6597;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____6598 = coll;

if(cljs.core.truth_(and__3546__auto____6598))
{var and__3546__auto____6599 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____6599))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____6599;
}
} else
{return and__3546__auto____6598;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___6604 = (function (x){
return true;
});
var distinct_QMARK___6605 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___6606 = (function() { 
var G__6608__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__6600 = cljs.core.set([y,x]);
var xs__6601 = more;

while(true){
var x__6602 = cljs.core.first.call(null,xs__6601);
var etc__6603 = cljs.core.next.call(null,xs__6601);

if(cljs.core.truth_(xs__6601))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__6600,x__6602)))
{return false;
} else
{{
var G__6609 = cljs.core.conj.call(null,s__6600,x__6602);
var G__6610 = etc__6603;
s__6600 = G__6609;
xs__6601 = G__6610;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__6608 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6608__delegate.call(this, x, y, more);
};
G__6608.cljs$lang$maxFixedArity = 2;
G__6608.cljs$lang$applyTo = (function (arglist__6611){
var x = cljs.core.first(arglist__6611);
var y = cljs.core.first(cljs.core.next(arglist__6611));
var more = cljs.core.rest(cljs.core.next(arglist__6611));
return G__6608__delegate.call(this, x, y, more);
});
return G__6608;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___6604.call(this,x);
case  2 :
return distinct_QMARK___6605.call(this,x,y);
default:
return distinct_QMARK___6606.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___6606.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__6612 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__6612)))
{return r__6612;
} else
{if(cljs.core.truth_(r__6612))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__6614 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__6615 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__6613 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__6613,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__6613);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__6614.call(this,comp);
case  2 :
return sort__6615.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__6617 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__6618 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__6617.call(this,keyfn,comp);
case  3 :
return sort_by__6618.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__6620 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__6621 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__6620.call(this,f,val);
case  3 :
return reduce__6621.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__6627 = (function (f,coll){
var temp__3695__auto____6623 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____6623))
{var s__6624 = temp__3695__auto____6623;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__6624),cljs.core.next.call(null,s__6624));
} else
{return f.call(null);
}
});
var seq_reduce__6628 = (function (f,val,coll){
var val__6625 = val;
var coll__6626 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__6626))
{{
var G__6630 = f.call(null,val__6625,cljs.core.first.call(null,coll__6626));
var G__6631 = cljs.core.next.call(null,coll__6626);
val__6625 = G__6630;
coll__6626 = G__6631;
continue;
}
} else
{return val__6625;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__6627.call(this,f,val);
case  3 :
return seq_reduce__6628.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__6632 = null;
var G__6632__6633 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__6632__6634 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__6632 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__6632__6633.call(this,coll,f);
case  3 :
return G__6632__6634.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6632;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___6636 = (function (){
return 0;
});
var _PLUS___6637 = (function (x){
return x;
});
var _PLUS___6638 = (function (x,y){
return (x + y);
});
var _PLUS___6639 = (function() { 
var G__6641__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__6641 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6641__delegate.call(this, x, y, more);
};
G__6641.cljs$lang$maxFixedArity = 2;
G__6641.cljs$lang$applyTo = (function (arglist__6642){
var x = cljs.core.first(arglist__6642);
var y = cljs.core.first(cljs.core.next(arglist__6642));
var more = cljs.core.rest(cljs.core.next(arglist__6642));
return G__6641__delegate.call(this, x, y, more);
});
return G__6641;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___6636.call(this);
case  1 :
return _PLUS___6637.call(this,x);
case  2 :
return _PLUS___6638.call(this,x,y);
default:
return _PLUS___6639.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___6639.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___6643 = (function (x){
return (- x);
});
var ___6644 = (function (x,y){
return (x - y);
});
var ___6645 = (function() { 
var G__6647__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__6647 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6647__delegate.call(this, x, y, more);
};
G__6647.cljs$lang$maxFixedArity = 2;
G__6647.cljs$lang$applyTo = (function (arglist__6648){
var x = cljs.core.first(arglist__6648);
var y = cljs.core.first(cljs.core.next(arglist__6648));
var more = cljs.core.rest(cljs.core.next(arglist__6648));
return G__6647__delegate.call(this, x, y, more);
});
return G__6647;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___6643.call(this,x);
case  2 :
return ___6644.call(this,x,y);
default:
return ___6645.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___6645.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___6649 = (function (){
return 1;
});
var _STAR___6650 = (function (x){
return x;
});
var _STAR___6651 = (function (x,y){
return (x * y);
});
var _STAR___6652 = (function() { 
var G__6654__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__6654 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6654__delegate.call(this, x, y, more);
};
G__6654.cljs$lang$maxFixedArity = 2;
G__6654.cljs$lang$applyTo = (function (arglist__6655){
var x = cljs.core.first(arglist__6655);
var y = cljs.core.first(cljs.core.next(arglist__6655));
var more = cljs.core.rest(cljs.core.next(arglist__6655));
return G__6654__delegate.call(this, x, y, more);
});
return G__6654;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___6649.call(this);
case  1 :
return _STAR___6650.call(this,x);
case  2 :
return _STAR___6651.call(this,x,y);
default:
return _STAR___6652.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___6652.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___6656 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___6657 = (function (x,y){
return (x / y);
});
var _SLASH___6658 = (function() { 
var G__6660__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__6660 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6660__delegate.call(this, x, y, more);
};
G__6660.cljs$lang$maxFixedArity = 2;
G__6660.cljs$lang$applyTo = (function (arglist__6661){
var x = cljs.core.first(arglist__6661);
var y = cljs.core.first(cljs.core.next(arglist__6661));
var more = cljs.core.rest(cljs.core.next(arglist__6661));
return G__6660__delegate.call(this, x, y, more);
});
return G__6660;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___6656.call(this,x);
case  2 :
return _SLASH___6657.call(this,x,y);
default:
return _SLASH___6658.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___6658.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___6662 = (function (x){
return true;
});
var _LT___6663 = (function (x,y){
return (x < y);
});
var _LT___6664 = (function() { 
var G__6666__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__6667 = y;
var G__6668 = cljs.core.first.call(null,more);
var G__6669 = cljs.core.next.call(null,more);
x = G__6667;
y = G__6668;
more = G__6669;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6666 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6666__delegate.call(this, x, y, more);
};
G__6666.cljs$lang$maxFixedArity = 2;
G__6666.cljs$lang$applyTo = (function (arglist__6670){
var x = cljs.core.first(arglist__6670);
var y = cljs.core.first(cljs.core.next(arglist__6670));
var more = cljs.core.rest(cljs.core.next(arglist__6670));
return G__6666__delegate.call(this, x, y, more);
});
return G__6666;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___6662.call(this,x);
case  2 :
return _LT___6663.call(this,x,y);
default:
return _LT___6664.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___6664.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___6671 = (function (x){
return true;
});
var _LT__EQ___6672 = (function (x,y){
return (x <= y);
});
var _LT__EQ___6673 = (function() { 
var G__6675__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__6676 = y;
var G__6677 = cljs.core.first.call(null,more);
var G__6678 = cljs.core.next.call(null,more);
x = G__6676;
y = G__6677;
more = G__6678;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6675 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6675__delegate.call(this, x, y, more);
};
G__6675.cljs$lang$maxFixedArity = 2;
G__6675.cljs$lang$applyTo = (function (arglist__6679){
var x = cljs.core.first(arglist__6679);
var y = cljs.core.first(cljs.core.next(arglist__6679));
var more = cljs.core.rest(cljs.core.next(arglist__6679));
return G__6675__delegate.call(this, x, y, more);
});
return G__6675;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___6671.call(this,x);
case  2 :
return _LT__EQ___6672.call(this,x,y);
default:
return _LT__EQ___6673.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___6673.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___6680 = (function (x){
return true;
});
var _GT___6681 = (function (x,y){
return (x > y);
});
var _GT___6682 = (function() { 
var G__6684__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__6685 = y;
var G__6686 = cljs.core.first.call(null,more);
var G__6687 = cljs.core.next.call(null,more);
x = G__6685;
y = G__6686;
more = G__6687;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6684 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6684__delegate.call(this, x, y, more);
};
G__6684.cljs$lang$maxFixedArity = 2;
G__6684.cljs$lang$applyTo = (function (arglist__6688){
var x = cljs.core.first(arglist__6688);
var y = cljs.core.first(cljs.core.next(arglist__6688));
var more = cljs.core.rest(cljs.core.next(arglist__6688));
return G__6684__delegate.call(this, x, y, more);
});
return G__6684;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___6680.call(this,x);
case  2 :
return _GT___6681.call(this,x,y);
default:
return _GT___6682.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___6682.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___6689 = (function (x){
return true;
});
var _GT__EQ___6690 = (function (x,y){
return (x >= y);
});
var _GT__EQ___6691 = (function() { 
var G__6693__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__6694 = y;
var G__6695 = cljs.core.first.call(null,more);
var G__6696 = cljs.core.next.call(null,more);
x = G__6694;
y = G__6695;
more = G__6696;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6693 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6693__delegate.call(this, x, y, more);
};
G__6693.cljs$lang$maxFixedArity = 2;
G__6693.cljs$lang$applyTo = (function (arglist__6697){
var x = cljs.core.first(arglist__6697);
var y = cljs.core.first(cljs.core.next(arglist__6697));
var more = cljs.core.rest(cljs.core.next(arglist__6697));
return G__6693__delegate.call(this, x, y, more);
});
return G__6693;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___6689.call(this,x);
case  2 :
return _GT__EQ___6690.call(this,x,y);
default:
return _GT__EQ___6691.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___6691.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__6698 = (function (x){
return x;
});
var max__6699 = (function (x,y){
return ((x > y) ? x : y);
});
var max__6700 = (function() { 
var G__6702__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__6702 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6702__delegate.call(this, x, y, more);
};
G__6702.cljs$lang$maxFixedArity = 2;
G__6702.cljs$lang$applyTo = (function (arglist__6703){
var x = cljs.core.first(arglist__6703);
var y = cljs.core.first(cljs.core.next(arglist__6703));
var more = cljs.core.rest(cljs.core.next(arglist__6703));
return G__6702__delegate.call(this, x, y, more);
});
return G__6702;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__6698.call(this,x);
case  2 :
return max__6699.call(this,x,y);
default:
return max__6700.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__6700.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__6704 = (function (x){
return x;
});
var min__6705 = (function (x,y){
return ((x < y) ? x : y);
});
var min__6706 = (function() { 
var G__6708__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__6708 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6708__delegate.call(this, x, y, more);
};
G__6708.cljs$lang$maxFixedArity = 2;
G__6708.cljs$lang$applyTo = (function (arglist__6709){
var x = cljs.core.first(arglist__6709);
var y = cljs.core.first(cljs.core.next(arglist__6709));
var more = cljs.core.rest(cljs.core.next(arglist__6709));
return G__6708__delegate.call(this, x, y, more);
});
return G__6708;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__6704.call(this,x);
case  2 :
return min__6705.call(this,x,y);
default:
return min__6706.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__6706.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__6710 = (n % d);

return cljs.core.fix.call(null,((n - rem__6710) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__6711 = cljs.core.quot.call(null,n,d);

return (n - (d * q__6711));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__6712 = (function (){
return Math.random.call(null);
});
var rand__6713 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__6712.call(this);
case  1 :
return rand__6713.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___6715 = (function (x){
return true;
});
var _EQ__EQ___6716 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___6717 = (function() { 
var G__6719__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__6720 = y;
var G__6721 = cljs.core.first.call(null,more);
var G__6722 = cljs.core.next.call(null,more);
x = G__6720;
y = G__6721;
more = G__6722;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6719 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6719__delegate.call(this, x, y, more);
};
G__6719.cljs$lang$maxFixedArity = 2;
G__6719.cljs$lang$applyTo = (function (arglist__6723){
var x = cljs.core.first(arglist__6723);
var y = cljs.core.first(cljs.core.next(arglist__6723));
var more = cljs.core.rest(cljs.core.next(arglist__6723));
return G__6719__delegate.call(this, x, y, more);
});
return G__6719;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___6715.call(this,x);
case  2 :
return _EQ__EQ___6716.call(this,x,y);
default:
return _EQ__EQ___6717.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___6717.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__6724 = n;
var xs__6725 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____6726 = xs__6725;

if(cljs.core.truth_(and__3546__auto____6726))
{return (n__6724 > 0);
} else
{return and__3546__auto____6726;
}
})()))
{{
var G__6727 = (n__6724 - 1);
var G__6728 = cljs.core.next.call(null,xs__6725);
n__6724 = G__6727;
xs__6725 = G__6728;
continue;
}
} else
{return xs__6725;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__6733 = null;
var G__6733__6734 = (function (coll,n){
var temp__3695__auto____6729 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____6729))
{var xs__6730 = temp__3695__auto____6729;

return cljs.core.first.call(null,xs__6730);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__6733__6735 = (function (coll,n,not_found){
var temp__3695__auto____6731 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____6731))
{var xs__6732 = temp__3695__auto____6731;

return cljs.core.first.call(null,xs__6732);
} else
{return not_found;
}
});
G__6733 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__6733__6734.call(this,coll,n);
case  3 :
return G__6733__6735.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6733;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___6737 = (function (){
return "";
});
var str_STAR___6738 = (function (x){
if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___6739 = (function() { 
var G__6741__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__6742 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__6743 = cljs.core.next.call(null,more);
sb = G__6742;
more = G__6743;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__6741 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6741__delegate.call(this, x, ys);
};
G__6741.cljs$lang$maxFixedArity = 1;
G__6741.cljs$lang$applyTo = (function (arglist__6744){
var x = cljs.core.first(arglist__6744);
var ys = cljs.core.rest(arglist__6744);
return G__6741__delegate.call(this, x, ys);
});
return G__6741;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___6737.call(this);
case  1 :
return str_STAR___6738.call(this,x);
default:
return str_STAR___6739.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___6739.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__6745 = (function (){
return "";
});
var str__6746 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__6747 = (function() { 
var G__6749__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__6749 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6749__delegate.call(this, x, ys);
};
G__6749.cljs$lang$maxFixedArity = 1;
G__6749.cljs$lang$applyTo = (function (arglist__6750){
var x = cljs.core.first(arglist__6750);
var ys = cljs.core.rest(arglist__6750);
return G__6749__delegate.call(this, x, ys);
});
return G__6749;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__6745.call(this);
case  1 :
return str__6746.call(this,x);
default:
return str__6747.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__6747.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__6751 = (function (s,start){
return s.substring(start);
});
var subs__6752 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__6751.call(this,s,start);
case  3 :
return subs__6752.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__6754 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__6755 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__6754.call(this,ns);
case  2 :
return symbol__6755.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__6757 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__6758 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__6757.call(this,ns);
case  2 :
return keyword__6758.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__6760 = cljs.core.seq.call(null,x);
var ys__6761 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__6760 === null)))
{return (ys__6761 === null);
} else
{if(cljs.core.truth_((ys__6761 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__6760),cljs.core.first.call(null,ys__6761))))
{{
var G__6762 = cljs.core.next.call(null,xs__6760);
var G__6763 = cljs.core.next.call(null,ys__6761);
xs__6760 = G__6762;
ys__6761 = G__6763;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__6764_SHARP_,p2__6765_SHARP_){
return cljs.core.hash_combine.call(null,p1__6764_SHARP_,cljs.core.hash.call(null,p2__6765_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__6766__6767 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__6766__6767))
{var G__6769__6771 = cljs.core.first.call(null,G__6766__6767);
var vec__6770__6772 = G__6769__6771;
var key_name__6773 = cljs.core.nth.call(null,vec__6770__6772,0,null);
var f__6774 = cljs.core.nth.call(null,vec__6770__6772,1,null);
var G__6766__6775 = G__6766__6767;

var G__6769__6776 = G__6769__6771;
var G__6766__6777 = G__6766__6775;

while(true){
var vec__6778__6779 = G__6769__6776;
var key_name__6780 = cljs.core.nth.call(null,vec__6778__6779,0,null);
var f__6781 = cljs.core.nth.call(null,vec__6778__6779,1,null);
var G__6766__6782 = G__6766__6777;

var str_name__6783 = cljs.core.name.call(null,key_name__6780);

obj[str_name__6783] = f__6781;
var temp__3698__auto____6784 = cljs.core.next.call(null,G__6766__6782);

if(cljs.core.truth_(temp__3698__auto____6784))
{var G__6766__6785 = temp__3698__auto____6784;

{
var G__6786 = cljs.core.first.call(null,G__6766__6785);
var G__6787 = G__6766__6785;
G__6769__6776 = G__6786;
G__6766__6777 = G__6787;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__2227__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__6788 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6789 = this;
return (new cljs.core.List(this__6789.meta,o,coll,(this__6789.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6790 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6791 = this;
return this__6791.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__6792 = this;
return this__6792.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__6793 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__6794 = this;
return this__6794.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__6795 = this;
return this__6795.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6796 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6797 = this;
return (new cljs.core.List(meta,this__6797.first,this__6797.rest,this__6797.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6798 = this;
return this__6798.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6799 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__2227__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__6800 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6801 = this;
return (new cljs.core.List(this__6801.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6802 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6803 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__6804 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__6805 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__6806 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__6807 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6808 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6809 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6810 = this;
return this__6810.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6811 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__6812){
var items = cljs.core.seq( arglist__6812 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__2227__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6813 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__6814 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6815 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6816 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6816.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6817 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__6818 = this;
return this__6818.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__6819 = this;
if(cljs.core.truth_((this__6819.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__6819.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6820 = this;
return this__6820.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6821 = this;
return (new cljs.core.Cons(meta,this__6821.first,this__6821.rest));
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__6822 = null;
var G__6822__6823 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__6822__6824 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__6822 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__6822__6823.call(this,string,f);
case  3 :
return G__6822__6824.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6822;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__6826 = null;
var G__6826__6827 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__6826__6828 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__6826 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__6826__6827.call(this,string,k);
case  3 :
return G__6826__6828.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6826;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__6830 = null;
var G__6830__6831 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__6830__6832 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__6830 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__6830__6831.call(this,string,n);
case  3 :
return G__6830__6832.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6830;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__6840 = null;
var G__6840__6841 = (function (tsym6834,coll){
var tsym6834__6836 = this;

var this$__6837 = tsym6834__6836;

return cljs.core.get.call(null,coll,this$__6837.toString());
});
var G__6840__6842 = (function (tsym6835,coll,not_found){
var tsym6835__6838 = this;

var this$__6839 = tsym6835__6838;

return cljs.core.get.call(null,coll,this$__6839.toString(),not_found);
});
G__6840 = function(tsym6835,coll,not_found){
switch(arguments.length){
case  2 :
return G__6840__6841.call(this,tsym6835,coll);
case  3 :
return G__6840__6842.call(this,tsym6835,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6840;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__6844 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__6844;
} else
{lazy_seq.x = x__6844.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__2227__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6845 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__6846 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6847 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6848 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6848.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6849 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__6850 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__6851 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6852 = this;
return this__6852.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6853 = this;
return (new cljs.core.LazySeq(meta,this__6853.realized,this__6853.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__6854 = cljs.core.array.call(null);

var s__6855 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__6855)))
{ary__6854.push(cljs.core.first.call(null,s__6855));
{
var G__6856 = cljs.core.next.call(null,s__6855);
s__6855 = G__6856;
continue;
}
} else
{return ary__6854;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__6857 = s;
var i__6858 = n;
var sum__6859 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____6860 = (i__6858 > 0);

if(cljs.core.truth_(and__3546__auto____6860))
{return cljs.core.seq.call(null,s__6857);
} else
{return and__3546__auto____6860;
}
})()))
{{
var G__6861 = cljs.core.next.call(null,s__6857);
var G__6862 = (i__6858 - 1);
var G__6863 = (sum__6859 + 1);
s__6857 = G__6861;
i__6858 = G__6862;
sum__6859 = G__6863;
continue;
}
} else
{return sum__6859;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_((arglist === null)))
{return null;
} else
{if(cljs.core.truth_((cljs.core.next.call(null,arglist) === null)))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__6867 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__6868 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__6869 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__6864 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__6864))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__6864),concat.call(null,cljs.core.rest.call(null,s__6864),y));
} else
{return y;
}
})));
});
var concat__6870 = (function() { 
var G__6872__delegate = function (x,y,zs){
var cat__6866 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__6865 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__6865))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__6865),cat.call(null,cljs.core.rest.call(null,xys__6865),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__6866.call(null,concat.call(null,x,y),zs);
};
var G__6872 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6872__delegate.call(this, x, y, zs);
};
G__6872.cljs$lang$maxFixedArity = 2;
G__6872.cljs$lang$applyTo = (function (arglist__6873){
var x = cljs.core.first(arglist__6873);
var y = cljs.core.first(cljs.core.next(arglist__6873));
var zs = cljs.core.rest(cljs.core.next(arglist__6873));
return G__6872__delegate.call(this, x, y, zs);
});
return G__6872;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__6867.call(this);
case  1 :
return concat__6868.call(this,x);
case  2 :
return concat__6869.call(this,x,y);
default:
return concat__6870.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__6870.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___6874 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___6875 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___6876 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___6877 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___6878 = (function() { 
var G__6880__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__6880 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__6880__delegate.call(this, a, b, c, d, more);
};
G__6880.cljs$lang$maxFixedArity = 4;
G__6880.cljs$lang$applyTo = (function (arglist__6881){
var a = cljs.core.first(arglist__6881);
var b = cljs.core.first(cljs.core.next(arglist__6881));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6881)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6881))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6881))));
return G__6880__delegate.call(this, a, b, c, d, more);
});
return G__6880;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___6874.call(this,a);
case  2 :
return list_STAR___6875.call(this,a,b);
case  3 :
return list_STAR___6876.call(this,a,b,c);
case  4 :
return list_STAR___6877.call(this,a,b,c,d);
default:
return list_STAR___6878.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___6878.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__6891 = (function (f,args){
var fixed_arity__6882 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__6882 + 1)) <= fixed_arity__6882)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__6892 = (function (f,x,args){
var arglist__6883 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__6884 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__6883,fixed_arity__6884) <= fixed_arity__6884)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__6883));
} else
{return f.cljs$lang$applyTo(arglist__6883);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__6883));
}
});
var apply__6893 = (function (f,x,y,args){
var arglist__6885 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__6886 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__6885,fixed_arity__6886) <= fixed_arity__6886)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__6885));
} else
{return f.cljs$lang$applyTo(arglist__6885);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__6885));
}
});
var apply__6894 = (function (f,x,y,z,args){
var arglist__6887 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__6888 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__6887,fixed_arity__6888) <= fixed_arity__6888)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__6887));
} else
{return f.cljs$lang$applyTo(arglist__6887);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__6887));
}
});
var apply__6895 = (function() { 
var G__6897__delegate = function (f,a,b,c,d,args){
var arglist__6889 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__6890 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__6889,fixed_arity__6890) <= fixed_arity__6890)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__6889));
} else
{return f.cljs$lang$applyTo(arglist__6889);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__6889));
}
};
var G__6897 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__6897__delegate.call(this, f, a, b, c, d, args);
};
G__6897.cljs$lang$maxFixedArity = 5;
G__6897.cljs$lang$applyTo = (function (arglist__6898){
var f = cljs.core.first(arglist__6898);
var a = cljs.core.first(cljs.core.next(arglist__6898));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6898)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6898))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6898)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6898)))));
return G__6897__delegate.call(this, f, a, b, c, d, args);
});
return G__6897;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__6891.call(this,f,a);
case  3 :
return apply__6892.call(this,f,a,b);
case  4 :
return apply__6893.call(this,f,a,b,c);
case  5 :
return apply__6894.call(this,f,a,b,c,d);
default:
return apply__6895.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6895.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__6899){
var obj = cljs.core.first(arglist__6899);
var f = cljs.core.first(cljs.core.next(arglist__6899));
var args = cljs.core.rest(cljs.core.next(arglist__6899));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___6900 = (function (x){
return false;
});
var not_EQ___6901 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___6902 = (function() { 
var G__6904__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__6904 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6904__delegate.call(this, x, y, more);
};
G__6904.cljs$lang$maxFixedArity = 2;
G__6904.cljs$lang$applyTo = (function (arglist__6905){
var x = cljs.core.first(arglist__6905);
var y = cljs.core.first(cljs.core.next(arglist__6905));
var more = cljs.core.rest(cljs.core.next(arglist__6905));
return G__6904__delegate.call(this, x, y, more);
});
return G__6904;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___6900.call(this,x);
case  2 :
return not_EQ___6901.call(this,x,y);
default:
return not_EQ___6902.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___6902.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_((cljs.core.seq.call(null,coll) === null)))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__6906 = pred;
var G__6907 = cljs.core.next.call(null,coll);
pred = G__6906;
coll = G__6907;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____6908 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____6908))
{return or__3548__auto____6908;
} else
{{
var G__6909 = pred;
var G__6910 = cljs.core.next.call(null,coll);
pred = G__6909;
coll = G__6910;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__6911 = null;
var G__6911__6912 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__6911__6913 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__6911__6914 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__6911__6915 = (function() { 
var G__6917__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__6917 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6917__delegate.call(this, x, y, zs);
};
G__6917.cljs$lang$maxFixedArity = 2;
G__6917.cljs$lang$applyTo = (function (arglist__6918){
var x = cljs.core.first(arglist__6918);
var y = cljs.core.first(cljs.core.next(arglist__6918));
var zs = cljs.core.rest(cljs.core.next(arglist__6918));
return G__6917__delegate.call(this, x, y, zs);
});
return G__6917;
})()
;
G__6911 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__6911__6912.call(this);
case  1 :
return G__6911__6913.call(this,x);
case  2 :
return G__6911__6914.call(this,x,y);
default:
return G__6911__6915.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6911.cljs$lang$maxFixedArity = 2;
G__6911.cljs$lang$applyTo = G__6911__6915.cljs$lang$applyTo;
return G__6911;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__6919__delegate = function (args){
return x;
};
var G__6919 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6919__delegate.call(this, args);
};
G__6919.cljs$lang$maxFixedArity = 0;
G__6919.cljs$lang$applyTo = (function (arglist__6920){
var args = cljs.core.seq( arglist__6920 );;
return G__6919__delegate.call(this, args);
});
return G__6919;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__6924 = (function (){
return cljs.core.identity;
});
var comp__6925 = (function (f){
return f;
});
var comp__6926 = (function (f,g){
return (function() {
var G__6930 = null;
var G__6930__6931 = (function (){
return f.call(null,g.call(null));
});
var G__6930__6932 = (function (x){
return f.call(null,g.call(null,x));
});
var G__6930__6933 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__6930__6934 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__6930__6935 = (function() { 
var G__6937__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__6937 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6937__delegate.call(this, x, y, z, args);
};
G__6937.cljs$lang$maxFixedArity = 3;
G__6937.cljs$lang$applyTo = (function (arglist__6938){
var x = cljs.core.first(arglist__6938);
var y = cljs.core.first(cljs.core.next(arglist__6938));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6938)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6938)));
return G__6937__delegate.call(this, x, y, z, args);
});
return G__6937;
})()
;
G__6930 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6930__6931.call(this);
case  1 :
return G__6930__6932.call(this,x);
case  2 :
return G__6930__6933.call(this,x,y);
case  3 :
return G__6930__6934.call(this,x,y,z);
default:
return G__6930__6935.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6930.cljs$lang$maxFixedArity = 3;
G__6930.cljs$lang$applyTo = G__6930__6935.cljs$lang$applyTo;
return G__6930;
})()
});
var comp__6927 = (function (f,g,h){
return (function() {
var G__6939 = null;
var G__6939__6940 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__6939__6941 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__6939__6942 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__6939__6943 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__6939__6944 = (function() { 
var G__6946__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__6946 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6946__delegate.call(this, x, y, z, args);
};
G__6946.cljs$lang$maxFixedArity = 3;
G__6946.cljs$lang$applyTo = (function (arglist__6947){
var x = cljs.core.first(arglist__6947);
var y = cljs.core.first(cljs.core.next(arglist__6947));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6947)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6947)));
return G__6946__delegate.call(this, x, y, z, args);
});
return G__6946;
})()
;
G__6939 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6939__6940.call(this);
case  1 :
return G__6939__6941.call(this,x);
case  2 :
return G__6939__6942.call(this,x,y);
case  3 :
return G__6939__6943.call(this,x,y,z);
default:
return G__6939__6944.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6939.cljs$lang$maxFixedArity = 3;
G__6939.cljs$lang$applyTo = G__6939__6944.cljs$lang$applyTo;
return G__6939;
})()
});
var comp__6928 = (function() { 
var G__6948__delegate = function (f1,f2,f3,fs){
var fs__6921 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__6949__delegate = function (args){
var ret__6922 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__6921),args);
var fs__6923 = cljs.core.next.call(null,fs__6921);

while(true){
if(cljs.core.truth_(fs__6923))
{{
var G__6950 = cljs.core.first.call(null,fs__6923).call(null,ret__6922);
var G__6951 = cljs.core.next.call(null,fs__6923);
ret__6922 = G__6950;
fs__6923 = G__6951;
continue;
}
} else
{return ret__6922;
}
break;
}
};
var G__6949 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6949__delegate.call(this, args);
};
G__6949.cljs$lang$maxFixedArity = 0;
G__6949.cljs$lang$applyTo = (function (arglist__6952){
var args = cljs.core.seq( arglist__6952 );;
return G__6949__delegate.call(this, args);
});
return G__6949;
})()
;
};
var G__6948 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6948__delegate.call(this, f1, f2, f3, fs);
};
G__6948.cljs$lang$maxFixedArity = 3;
G__6948.cljs$lang$applyTo = (function (arglist__6953){
var f1 = cljs.core.first(arglist__6953);
var f2 = cljs.core.first(cljs.core.next(arglist__6953));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6953)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6953)));
return G__6948__delegate.call(this, f1, f2, f3, fs);
});
return G__6948;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__6924.call(this);
case  1 :
return comp__6925.call(this,f1);
case  2 :
return comp__6926.call(this,f1,f2);
case  3 :
return comp__6927.call(this,f1,f2,f3);
default:
return comp__6928.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__6928.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__6954 = (function (f,arg1){
return (function() { 
var G__6959__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__6959 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6959__delegate.call(this, args);
};
G__6959.cljs$lang$maxFixedArity = 0;
G__6959.cljs$lang$applyTo = (function (arglist__6960){
var args = cljs.core.seq( arglist__6960 );;
return G__6959__delegate.call(this, args);
});
return G__6959;
})()
;
});
var partial__6955 = (function (f,arg1,arg2){
return (function() { 
var G__6961__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__6961 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6961__delegate.call(this, args);
};
G__6961.cljs$lang$maxFixedArity = 0;
G__6961.cljs$lang$applyTo = (function (arglist__6962){
var args = cljs.core.seq( arglist__6962 );;
return G__6961__delegate.call(this, args);
});
return G__6961;
})()
;
});
var partial__6956 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__6963__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__6963 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6963__delegate.call(this, args);
};
G__6963.cljs$lang$maxFixedArity = 0;
G__6963.cljs$lang$applyTo = (function (arglist__6964){
var args = cljs.core.seq( arglist__6964 );;
return G__6963__delegate.call(this, args);
});
return G__6963;
})()
;
});
var partial__6957 = (function() { 
var G__6965__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__6966__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__6966 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6966__delegate.call(this, args);
};
G__6966.cljs$lang$maxFixedArity = 0;
G__6966.cljs$lang$applyTo = (function (arglist__6967){
var args = cljs.core.seq( arglist__6967 );;
return G__6966__delegate.call(this, args);
});
return G__6966;
})()
;
};
var G__6965 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__6965__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__6965.cljs$lang$maxFixedArity = 4;
G__6965.cljs$lang$applyTo = (function (arglist__6968){
var f = cljs.core.first(arglist__6968);
var arg1 = cljs.core.first(cljs.core.next(arglist__6968));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6968)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6968))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6968))));
return G__6965__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__6965;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__6954.call(this,f,arg1);
case  3 :
return partial__6955.call(this,f,arg1,arg2);
case  4 :
return partial__6956.call(this,f,arg1,arg2,arg3);
default:
return partial__6957.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__6957.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__6969 = (function (f,x){
return (function() {
var G__6973 = null;
var G__6973__6974 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__6973__6975 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__6973__6976 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__6973__6977 = (function() { 
var G__6979__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__6979 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6979__delegate.call(this, a, b, c, ds);
};
G__6979.cljs$lang$maxFixedArity = 3;
G__6979.cljs$lang$applyTo = (function (arglist__6980){
var a = cljs.core.first(arglist__6980);
var b = cljs.core.first(cljs.core.next(arglist__6980));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6980)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6980)));
return G__6979__delegate.call(this, a, b, c, ds);
});
return G__6979;
})()
;
G__6973 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__6973__6974.call(this,a);
case  2 :
return G__6973__6975.call(this,a,b);
case  3 :
return G__6973__6976.call(this,a,b,c);
default:
return G__6973__6977.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6973.cljs$lang$maxFixedArity = 3;
G__6973.cljs$lang$applyTo = G__6973__6977.cljs$lang$applyTo;
return G__6973;
})()
});
var fnil__6970 = (function (f,x,y){
return (function() {
var G__6981 = null;
var G__6981__6982 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__6981__6983 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__6981__6984 = (function() { 
var G__6986__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__6986 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6986__delegate.call(this, a, b, c, ds);
};
G__6986.cljs$lang$maxFixedArity = 3;
G__6986.cljs$lang$applyTo = (function (arglist__6987){
var a = cljs.core.first(arglist__6987);
var b = cljs.core.first(cljs.core.next(arglist__6987));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6987)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6987)));
return G__6986__delegate.call(this, a, b, c, ds);
});
return G__6986;
})()
;
G__6981 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__6981__6982.call(this,a,b);
case  3 :
return G__6981__6983.call(this,a,b,c);
default:
return G__6981__6984.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6981.cljs$lang$maxFixedArity = 3;
G__6981.cljs$lang$applyTo = G__6981__6984.cljs$lang$applyTo;
return G__6981;
})()
});
var fnil__6971 = (function (f,x,y,z){
return (function() {
var G__6988 = null;
var G__6988__6989 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__6988__6990 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__6988__6991 = (function() { 
var G__6993__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__6993 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6993__delegate.call(this, a, b, c, ds);
};
G__6993.cljs$lang$maxFixedArity = 3;
G__6993.cljs$lang$applyTo = (function (arglist__6994){
var a = cljs.core.first(arglist__6994);
var b = cljs.core.first(cljs.core.next(arglist__6994));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6994)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6994)));
return G__6993__delegate.call(this, a, b, c, ds);
});
return G__6993;
})()
;
G__6988 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__6988__6989.call(this,a,b);
case  3 :
return G__6988__6990.call(this,a,b,c);
default:
return G__6988__6991.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6988.cljs$lang$maxFixedArity = 3;
G__6988.cljs$lang$applyTo = G__6988__6991.cljs$lang$applyTo;
return G__6988;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__6969.call(this,f,x);
case  3 :
return fnil__6970.call(this,f,x,y);
case  4 :
return fnil__6971.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__6997 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6995 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6995))
{var s__6996 = temp__3698__auto____6995;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__6996)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__6996)));
} else
{return null;
}
})));
});

return mapi__6997.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6998 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6998))
{var s__6999 = temp__3698__auto____6998;

var x__7000 = f.call(null,cljs.core.first.call(null,s__6999));

if(cljs.core.truth_((x__7000 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__6999));
} else
{return cljs.core.cons.call(null,x__7000,keep.call(null,f,cljs.core.rest.call(null,s__6999)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__7010 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7007 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7007))
{var s__7008 = temp__3698__auto____7007;

var x__7009 = f.call(null,idx,cljs.core.first.call(null,s__7008));

if(cljs.core.truth_((x__7009 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__7008));
} else
{return cljs.core.cons.call(null,x__7009,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__7008)));
}
} else
{return null;
}
})));
});

return keepi__7010.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__7055 = (function (p){
return (function() {
var ep1 = null;
var ep1__7060 = (function (){
return true;
});
var ep1__7061 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__7062 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7017 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____7017))
{return p.call(null,y);
} else
{return and__3546__auto____7017;
}
})());
});
var ep1__7063 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7018 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____7018))
{var and__3546__auto____7019 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____7019))
{return p.call(null,z);
} else
{return and__3546__auto____7019;
}
} else
{return and__3546__auto____7018;
}
})());
});
var ep1__7064 = (function() { 
var G__7066__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7020 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____7020))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____7020;
}
})());
};
var G__7066 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7066__delegate.call(this, x, y, z, args);
};
G__7066.cljs$lang$maxFixedArity = 3;
G__7066.cljs$lang$applyTo = (function (arglist__7067){
var x = cljs.core.first(arglist__7067);
var y = cljs.core.first(cljs.core.next(arglist__7067));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7067)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7067)));
return G__7066__delegate.call(this, x, y, z, args);
});
return G__7066;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__7060.call(this);
case  1 :
return ep1__7061.call(this,x);
case  2 :
return ep1__7062.call(this,x,y);
case  3 :
return ep1__7063.call(this,x,y,z);
default:
return ep1__7064.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__7064.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__7056 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__7068 = (function (){
return true;
});
var ep2__7069 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7021 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7021))
{return p2.call(null,x);
} else
{return and__3546__auto____7021;
}
})());
});
var ep2__7070 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7022 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7022))
{var and__3546__auto____7023 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____7023))
{var and__3546__auto____7024 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7024))
{return p2.call(null,y);
} else
{return and__3546__auto____7024;
}
} else
{return and__3546__auto____7023;
}
} else
{return and__3546__auto____7022;
}
})());
});
var ep2__7071 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7025 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7025))
{var and__3546__auto____7026 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____7026))
{var and__3546__auto____7027 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____7027))
{var and__3546__auto____7028 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7028))
{var and__3546__auto____7029 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____7029))
{return p2.call(null,z);
} else
{return and__3546__auto____7029;
}
} else
{return and__3546__auto____7028;
}
} else
{return and__3546__auto____7027;
}
} else
{return and__3546__auto____7026;
}
} else
{return and__3546__auto____7025;
}
})());
});
var ep2__7072 = (function() { 
var G__7074__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7030 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____7030))
{return cljs.core.every_QMARK_.call(null,(function (p1__7001_SHARP_){
var and__3546__auto____7031 = p1.call(null,p1__7001_SHARP_);

if(cljs.core.truth_(and__3546__auto____7031))
{return p2.call(null,p1__7001_SHARP_);
} else
{return and__3546__auto____7031;
}
}),args);
} else
{return and__3546__auto____7030;
}
})());
};
var G__7074 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7074__delegate.call(this, x, y, z, args);
};
G__7074.cljs$lang$maxFixedArity = 3;
G__7074.cljs$lang$applyTo = (function (arglist__7075){
var x = cljs.core.first(arglist__7075);
var y = cljs.core.first(cljs.core.next(arglist__7075));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7075)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7075)));
return G__7074__delegate.call(this, x, y, z, args);
});
return G__7074;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__7068.call(this);
case  1 :
return ep2__7069.call(this,x);
case  2 :
return ep2__7070.call(this,x,y);
case  3 :
return ep2__7071.call(this,x,y,z);
default:
return ep2__7072.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__7072.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__7057 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__7076 = (function (){
return true;
});
var ep3__7077 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7032 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7032))
{var and__3546__auto____7033 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7033))
{return p3.call(null,x);
} else
{return and__3546__auto____7033;
}
} else
{return and__3546__auto____7032;
}
})());
});
var ep3__7078 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7034 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7034))
{var and__3546__auto____7035 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7035))
{var and__3546__auto____7036 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____7036))
{var and__3546__auto____7037 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____7037))
{var and__3546__auto____7038 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____7038))
{return p3.call(null,y);
} else
{return and__3546__auto____7038;
}
} else
{return and__3546__auto____7037;
}
} else
{return and__3546__auto____7036;
}
} else
{return and__3546__auto____7035;
}
} else
{return and__3546__auto____7034;
}
})());
});
var ep3__7079 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7039 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7039))
{var and__3546__auto____7040 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7040))
{var and__3546__auto____7041 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____7041))
{var and__3546__auto____7042 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____7042))
{var and__3546__auto____7043 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____7043))
{var and__3546__auto____7044 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____7044))
{var and__3546__auto____7045 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____7045))
{var and__3546__auto____7046 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____7046))
{return p3.call(null,z);
} else
{return and__3546__auto____7046;
}
} else
{return and__3546__auto____7045;
}
} else
{return and__3546__auto____7044;
}
} else
{return and__3546__auto____7043;
}
} else
{return and__3546__auto____7042;
}
} else
{return and__3546__auto____7041;
}
} else
{return and__3546__auto____7040;
}
} else
{return and__3546__auto____7039;
}
})());
});
var ep3__7080 = (function() { 
var G__7082__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7047 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____7047))
{return cljs.core.every_QMARK_.call(null,(function (p1__7002_SHARP_){
var and__3546__auto____7048 = p1.call(null,p1__7002_SHARP_);

if(cljs.core.truth_(and__3546__auto____7048))
{var and__3546__auto____7049 = p2.call(null,p1__7002_SHARP_);

if(cljs.core.truth_(and__3546__auto____7049))
{return p3.call(null,p1__7002_SHARP_);
} else
{return and__3546__auto____7049;
}
} else
{return and__3546__auto____7048;
}
}),args);
} else
{return and__3546__auto____7047;
}
})());
};
var G__7082 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7082__delegate.call(this, x, y, z, args);
};
G__7082.cljs$lang$maxFixedArity = 3;
G__7082.cljs$lang$applyTo = (function (arglist__7083){
var x = cljs.core.first(arglist__7083);
var y = cljs.core.first(cljs.core.next(arglist__7083));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7083)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7083)));
return G__7082__delegate.call(this, x, y, z, args);
});
return G__7082;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__7076.call(this);
case  1 :
return ep3__7077.call(this,x);
case  2 :
return ep3__7078.call(this,x,y);
case  3 :
return ep3__7079.call(this,x,y,z);
default:
return ep3__7080.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__7080.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__7058 = (function() { 
var G__7084__delegate = function (p1,p2,p3,ps){
var ps__7050 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__7085 = (function (){
return true;
});
var epn__7086 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7003_SHARP_){
return p1__7003_SHARP_.call(null,x);
}),ps__7050);
});
var epn__7087 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7004_SHARP_){
var and__3546__auto____7051 = p1__7004_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____7051))
{return p1__7004_SHARP_.call(null,y);
} else
{return and__3546__auto____7051;
}
}),ps__7050);
});
var epn__7088 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7005_SHARP_){
var and__3546__auto____7052 = p1__7005_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____7052))
{var and__3546__auto____7053 = p1__7005_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____7053))
{return p1__7005_SHARP_.call(null,z);
} else
{return and__3546__auto____7053;
}
} else
{return and__3546__auto____7052;
}
}),ps__7050);
});
var epn__7089 = (function() { 
var G__7091__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7054 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____7054))
{return cljs.core.every_QMARK_.call(null,(function (p1__7006_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7006_SHARP_,args);
}),ps__7050);
} else
{return and__3546__auto____7054;
}
})());
};
var G__7091 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7091__delegate.call(this, x, y, z, args);
};
G__7091.cljs$lang$maxFixedArity = 3;
G__7091.cljs$lang$applyTo = (function (arglist__7092){
var x = cljs.core.first(arglist__7092);
var y = cljs.core.first(cljs.core.next(arglist__7092));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7092)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7092)));
return G__7091__delegate.call(this, x, y, z, args);
});
return G__7091;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__7085.call(this);
case  1 :
return epn__7086.call(this,x);
case  2 :
return epn__7087.call(this,x,y);
case  3 :
return epn__7088.call(this,x,y,z);
default:
return epn__7089.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__7089.cljs$lang$applyTo;
return epn;
})()
};
var G__7084 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7084__delegate.call(this, p1, p2, p3, ps);
};
G__7084.cljs$lang$maxFixedArity = 3;
G__7084.cljs$lang$applyTo = (function (arglist__7093){
var p1 = cljs.core.first(arglist__7093);
var p2 = cljs.core.first(cljs.core.next(arglist__7093));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7093)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7093)));
return G__7084__delegate.call(this, p1, p2, p3, ps);
});
return G__7084;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__7055.call(this,p1);
case  2 :
return every_pred__7056.call(this,p1,p2);
case  3 :
return every_pred__7057.call(this,p1,p2,p3);
default:
return every_pred__7058.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__7058.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__7133 = (function (p){
return (function() {
var sp1 = null;
var sp1__7138 = (function (){
return null;
});
var sp1__7139 = (function (x){
return p.call(null,x);
});
var sp1__7140 = (function (x,y){
var or__3548__auto____7095 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____7095))
{return or__3548__auto____7095;
} else
{return p.call(null,y);
}
});
var sp1__7141 = (function (x,y,z){
var or__3548__auto____7096 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____7096))
{return or__3548__auto____7096;
} else
{var or__3548__auto____7097 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____7097))
{return or__3548__auto____7097;
} else
{return p.call(null,z);
}
}
});
var sp1__7142 = (function() { 
var G__7144__delegate = function (x,y,z,args){
var or__3548__auto____7098 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____7098))
{return or__3548__auto____7098;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__7144 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7144__delegate.call(this, x, y, z, args);
};
G__7144.cljs$lang$maxFixedArity = 3;
G__7144.cljs$lang$applyTo = (function (arglist__7145){
var x = cljs.core.first(arglist__7145);
var y = cljs.core.first(cljs.core.next(arglist__7145));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7145)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7145)));
return G__7144__delegate.call(this, x, y, z, args);
});
return G__7144;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__7138.call(this);
case  1 :
return sp1__7139.call(this,x);
case  2 :
return sp1__7140.call(this,x,y);
case  3 :
return sp1__7141.call(this,x,y,z);
default:
return sp1__7142.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__7142.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__7134 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__7146 = (function (){
return null;
});
var sp2__7147 = (function (x){
var or__3548__auto____7099 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7099))
{return or__3548__auto____7099;
} else
{return p2.call(null,x);
}
});
var sp2__7148 = (function (x,y){
var or__3548__auto____7100 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7100))
{return or__3548__auto____7100;
} else
{var or__3548__auto____7101 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____7101))
{return or__3548__auto____7101;
} else
{var or__3548__auto____7102 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____7102))
{return or__3548__auto____7102;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__7149 = (function (x,y,z){
var or__3548__auto____7103 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7103))
{return or__3548__auto____7103;
} else
{var or__3548__auto____7104 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____7104))
{return or__3548__auto____7104;
} else
{var or__3548__auto____7105 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____7105))
{return or__3548__auto____7105;
} else
{var or__3548__auto____7106 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____7106))
{return or__3548__auto____7106;
} else
{var or__3548__auto____7107 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____7107))
{return or__3548__auto____7107;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__7150 = (function() { 
var G__7152__delegate = function (x,y,z,args){
var or__3548__auto____7108 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____7108))
{return or__3548__auto____7108;
} else
{return cljs.core.some.call(null,(function (p1__7011_SHARP_){
var or__3548__auto____7109 = p1.call(null,p1__7011_SHARP_);

if(cljs.core.truth_(or__3548__auto____7109))
{return or__3548__auto____7109;
} else
{return p2.call(null,p1__7011_SHARP_);
}
}),args);
}
};
var G__7152 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7152__delegate.call(this, x, y, z, args);
};
G__7152.cljs$lang$maxFixedArity = 3;
G__7152.cljs$lang$applyTo = (function (arglist__7153){
var x = cljs.core.first(arglist__7153);
var y = cljs.core.first(cljs.core.next(arglist__7153));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7153)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7153)));
return G__7152__delegate.call(this, x, y, z, args);
});
return G__7152;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__7146.call(this);
case  1 :
return sp2__7147.call(this,x);
case  2 :
return sp2__7148.call(this,x,y);
case  3 :
return sp2__7149.call(this,x,y,z);
default:
return sp2__7150.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__7150.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__7135 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__7154 = (function (){
return null;
});
var sp3__7155 = (function (x){
var or__3548__auto____7110 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7110))
{return or__3548__auto____7110;
} else
{var or__3548__auto____7111 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____7111))
{return or__3548__auto____7111;
} else
{return p3.call(null,x);
}
}
});
var sp3__7156 = (function (x,y){
var or__3548__auto____7112 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7112))
{return or__3548__auto____7112;
} else
{var or__3548__auto____7113 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____7113))
{return or__3548__auto____7113;
} else
{var or__3548__auto____7114 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____7114))
{return or__3548__auto____7114;
} else
{var or__3548__auto____7115 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____7115))
{return or__3548__auto____7115;
} else
{var or__3548__auto____7116 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____7116))
{return or__3548__auto____7116;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__7157 = (function (x,y,z){
var or__3548__auto____7117 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7117))
{return or__3548__auto____7117;
} else
{var or__3548__auto____7118 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____7118))
{return or__3548__auto____7118;
} else
{var or__3548__auto____7119 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____7119))
{return or__3548__auto____7119;
} else
{var or__3548__auto____7120 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____7120))
{return or__3548__auto____7120;
} else
{var or__3548__auto____7121 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____7121))
{return or__3548__auto____7121;
} else
{var or__3548__auto____7122 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____7122))
{return or__3548__auto____7122;
} else
{var or__3548__auto____7123 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____7123))
{return or__3548__auto____7123;
} else
{var or__3548__auto____7124 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____7124))
{return or__3548__auto____7124;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__7158 = (function() { 
var G__7160__delegate = function (x,y,z,args){
var or__3548__auto____7125 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____7125))
{return or__3548__auto____7125;
} else
{return cljs.core.some.call(null,(function (p1__7012_SHARP_){
var or__3548__auto____7126 = p1.call(null,p1__7012_SHARP_);

if(cljs.core.truth_(or__3548__auto____7126))
{return or__3548__auto____7126;
} else
{var or__3548__auto____7127 = p2.call(null,p1__7012_SHARP_);

if(cljs.core.truth_(or__3548__auto____7127))
{return or__3548__auto____7127;
} else
{return p3.call(null,p1__7012_SHARP_);
}
}
}),args);
}
};
var G__7160 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7160__delegate.call(this, x, y, z, args);
};
G__7160.cljs$lang$maxFixedArity = 3;
G__7160.cljs$lang$applyTo = (function (arglist__7161){
var x = cljs.core.first(arglist__7161);
var y = cljs.core.first(cljs.core.next(arglist__7161));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7161)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7161)));
return G__7160__delegate.call(this, x, y, z, args);
});
return G__7160;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__7154.call(this);
case  1 :
return sp3__7155.call(this,x);
case  2 :
return sp3__7156.call(this,x,y);
case  3 :
return sp3__7157.call(this,x,y,z);
default:
return sp3__7158.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__7158.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__7136 = (function() { 
var G__7162__delegate = function (p1,p2,p3,ps){
var ps__7128 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__7163 = (function (){
return null;
});
var spn__7164 = (function (x){
return cljs.core.some.call(null,(function (p1__7013_SHARP_){
return p1__7013_SHARP_.call(null,x);
}),ps__7128);
});
var spn__7165 = (function (x,y){
return cljs.core.some.call(null,(function (p1__7014_SHARP_){
var or__3548__auto____7129 = p1__7014_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____7129))
{return or__3548__auto____7129;
} else
{return p1__7014_SHARP_.call(null,y);
}
}),ps__7128);
});
var spn__7166 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__7015_SHARP_){
var or__3548__auto____7130 = p1__7015_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____7130))
{return or__3548__auto____7130;
} else
{var or__3548__auto____7131 = p1__7015_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____7131))
{return or__3548__auto____7131;
} else
{return p1__7015_SHARP_.call(null,z);
}
}
}),ps__7128);
});
var spn__7167 = (function() { 
var G__7169__delegate = function (x,y,z,args){
var or__3548__auto____7132 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____7132))
{return or__3548__auto____7132;
} else
{return cljs.core.some.call(null,(function (p1__7016_SHARP_){
return cljs.core.some.call(null,p1__7016_SHARP_,args);
}),ps__7128);
}
};
var G__7169 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7169__delegate.call(this, x, y, z, args);
};
G__7169.cljs$lang$maxFixedArity = 3;
G__7169.cljs$lang$applyTo = (function (arglist__7170){
var x = cljs.core.first(arglist__7170);
var y = cljs.core.first(cljs.core.next(arglist__7170));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7170)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7170)));
return G__7169__delegate.call(this, x, y, z, args);
});
return G__7169;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__7163.call(this);
case  1 :
return spn__7164.call(this,x);
case  2 :
return spn__7165.call(this,x,y);
case  3 :
return spn__7166.call(this,x,y,z);
default:
return spn__7167.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__7167.cljs$lang$applyTo;
return spn;
})()
};
var G__7162 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7162__delegate.call(this, p1, p2, p3, ps);
};
G__7162.cljs$lang$maxFixedArity = 3;
G__7162.cljs$lang$applyTo = (function (arglist__7171){
var p1 = cljs.core.first(arglist__7171);
var p2 = cljs.core.first(cljs.core.next(arglist__7171));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7171)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7171)));
return G__7162__delegate.call(this, p1, p2, p3, ps);
});
return G__7162;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__7133.call(this,p1);
case  2 :
return some_fn__7134.call(this,p1,p2);
case  3 :
return some_fn__7135.call(this,p1,p2,p3);
default:
return some_fn__7136.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__7136.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__7184 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7172 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7172))
{var s__7173 = temp__3698__auto____7172;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__7173)),map.call(null,f,cljs.core.rest.call(null,s__7173)));
} else
{return null;
}
})));
});
var map__7185 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7174 = cljs.core.seq.call(null,c1);
var s2__7175 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____7176 = s1__7174;

if(cljs.core.truth_(and__3546__auto____7176))
{return s2__7175;
} else
{return and__3546__auto____7176;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__7174),cljs.core.first.call(null,s2__7175)),map.call(null,f,cljs.core.rest.call(null,s1__7174),cljs.core.rest.call(null,s2__7175)));
} else
{return null;
}
})));
});
var map__7186 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7177 = cljs.core.seq.call(null,c1);
var s2__7178 = cljs.core.seq.call(null,c2);
var s3__7179 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____7180 = s1__7177;

if(cljs.core.truth_(and__3546__auto____7180))
{var and__3546__auto____7181 = s2__7178;

if(cljs.core.truth_(and__3546__auto____7181))
{return s3__7179;
} else
{return and__3546__auto____7181;
}
} else
{return and__3546__auto____7180;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__7177),cljs.core.first.call(null,s2__7178),cljs.core.first.call(null,s3__7179)),map.call(null,f,cljs.core.rest.call(null,s1__7177),cljs.core.rest.call(null,s2__7178),cljs.core.rest.call(null,s3__7179)));
} else
{return null;
}
})));
});
var map__7187 = (function() { 
var G__7189__delegate = function (f,c1,c2,c3,colls){
var step__7183 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__7182 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__7182)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__7182),step.call(null,map.call(null,cljs.core.rest,ss__7182)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__7094_SHARP_){
return cljs.core.apply.call(null,f,p1__7094_SHARP_);
}),step__7183.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__7189 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7189__delegate.call(this, f, c1, c2, c3, colls);
};
G__7189.cljs$lang$maxFixedArity = 4;
G__7189.cljs$lang$applyTo = (function (arglist__7190){
var f = cljs.core.first(arglist__7190);
var c1 = cljs.core.first(cljs.core.next(arglist__7190));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7190)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7190))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7190))));
return G__7189__delegate.call(this, f, c1, c2, c3, colls);
});
return G__7189;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__7184.call(this,f,c1);
case  3 :
return map__7185.call(this,f,c1,c2);
case  4 :
return map__7186.call(this,f,c1,c2,c3);
default:
return map__7187.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__7187.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____7191 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7191))
{var s__7192 = temp__3698__auto____7191;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__7192),take.call(null,(n - 1),cljs.core.rest.call(null,s__7192)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__7195 = (function (n,coll){
while(true){
var s__7193 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____7194 = (n > 0);

if(cljs.core.truth_(and__3546__auto____7194))
{return s__7193;
} else
{return and__3546__auto____7194;
}
})()))
{{
var G__7196 = (n - 1);
var G__7197 = cljs.core.rest.call(null,s__7193);
n = G__7196;
coll = G__7197;
continue;
}
} else
{return s__7193;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__7195.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__7198 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__7199 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__7198.call(this,n);
case  2 :
return drop_last__7199.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__7201 = cljs.core.seq.call(null,coll);
var lead__7202 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__7202))
{{
var G__7203 = cljs.core.next.call(null,s__7201);
var G__7204 = cljs.core.next.call(null,lead__7202);
s__7201 = G__7203;
lead__7202 = G__7204;
continue;
}
} else
{return s__7201;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__7207 = (function (pred,coll){
while(true){
var s__7205 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____7206 = s__7205;

if(cljs.core.truth_(and__3546__auto____7206))
{return pred.call(null,cljs.core.first.call(null,s__7205));
} else
{return and__3546__auto____7206;
}
})()))
{{
var G__7208 = pred;
var G__7209 = cljs.core.rest.call(null,s__7205);
pred = G__7208;
coll = G__7209;
continue;
}
} else
{return s__7205;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__7207.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7210 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7210))
{var s__7211 = temp__3698__auto____7210;

return cljs.core.concat.call(null,s__7211,cycle.call(null,s__7211));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__7212 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__7213 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__7212.call(this,n);
case  2 :
return repeat__7213.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__7215 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__7216 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__7215.call(this,n);
case  2 :
return repeatedly__7216.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__7222 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7218 = cljs.core.seq.call(null,c1);
var s2__7219 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____7220 = s1__7218;

if(cljs.core.truth_(and__3546__auto____7220))
{return s2__7219;
} else
{return and__3546__auto____7220;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__7218),cljs.core.cons.call(null,cljs.core.first.call(null,s2__7219),interleave.call(null,cljs.core.rest.call(null,s1__7218),cljs.core.rest.call(null,s2__7219))));
} else
{return null;
}
})));
});
var interleave__7223 = (function() { 
var G__7225__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__7221 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__7221)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__7221),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__7221)));
} else
{return null;
}
})));
};
var G__7225 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7225__delegate.call(this, c1, c2, colls);
};
G__7225.cljs$lang$maxFixedArity = 2;
G__7225.cljs$lang$applyTo = (function (arglist__7226){
var c1 = cljs.core.first(arglist__7226);
var c2 = cljs.core.first(cljs.core.next(arglist__7226));
var colls = cljs.core.rest(cljs.core.next(arglist__7226));
return G__7225__delegate.call(this, c1, c2, colls);
});
return G__7225;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__7222.call(this,c1,c2);
default:
return interleave__7223.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__7223.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__7229 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____7227 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____7227))
{var coll__7228 = temp__3695__auto____7227;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__7228),cat.call(null,cljs.core.rest.call(null,coll__7228),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__7229.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__7230 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__7231 = (function() { 
var G__7233__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__7233 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7233__delegate.call(this, f, coll, colls);
};
G__7233.cljs$lang$maxFixedArity = 2;
G__7233.cljs$lang$applyTo = (function (arglist__7234){
var f = cljs.core.first(arglist__7234);
var coll = cljs.core.first(cljs.core.next(arglist__7234));
var colls = cljs.core.rest(cljs.core.next(arglist__7234));
return G__7233__delegate.call(this, f, coll, colls);
});
return G__7233;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__7230.call(this,f,coll);
default:
return mapcat__7231.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__7231.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7235 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7235))
{var s__7236 = temp__3698__auto____7235;

var f__7237 = cljs.core.first.call(null,s__7236);
var r__7238 = cljs.core.rest.call(null,s__7236);

if(cljs.core.truth_(pred.call(null,f__7237)))
{return cljs.core.cons.call(null,f__7237,filter.call(null,pred,r__7238));
} else
{return filter.call(null,pred,r__7238);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__7240 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__7240.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__7239_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__7239_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__7247 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__7248 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7241 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7241))
{var s__7242 = temp__3698__auto____7241;

var p__7243 = cljs.core.take.call(null,n,s__7242);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__7243))))
{return cljs.core.cons.call(null,p__7243,partition.call(null,n,step,cljs.core.drop.call(null,step,s__7242)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__7249 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7244 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7244))
{var s__7245 = temp__3698__auto____7244;

var p__7246 = cljs.core.take.call(null,n,s__7245);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__7246))))
{return cljs.core.cons.call(null,p__7246,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__7245)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__7246,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__7247.call(this,n,step);
case  3 :
return partition__7248.call(this,n,step,pad);
case  4 :
return partition__7249.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__7255 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__7256 = (function (m,ks,not_found){
var sentinel__7251 = cljs.core.lookup_sentinel;
var m__7252 = m;
var ks__7253 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__7253))
{var m__7254 = cljs.core.get.call(null,m__7252,cljs.core.first.call(null,ks__7253),sentinel__7251);

if(cljs.core.truth_((sentinel__7251 === m__7254)))
{return not_found;
} else
{{
var G__7258 = sentinel__7251;
var G__7259 = m__7254;
var G__7260 = cljs.core.next.call(null,ks__7253);
sentinel__7251 = G__7258;
m__7252 = G__7259;
ks__7253 = G__7260;
continue;
}
}
} else
{return m__7252;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__7255.call(this,m,ks);
case  3 :
return get_in__7256.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__7261,v){
var vec__7262__7263 = p__7261;
var k__7264 = cljs.core.nth.call(null,vec__7262__7263,0,null);
var ks__7265 = cljs.core.nthnext.call(null,vec__7262__7263,1);

if(cljs.core.truth_(ks__7265))
{return cljs.core.assoc.call(null,m,k__7264,assoc_in.call(null,cljs.core.get.call(null,m,k__7264),ks__7265,v));
} else
{return cljs.core.assoc.call(null,m,k__7264,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__7266,f,args){
var vec__7267__7268 = p__7266;
var k__7269 = cljs.core.nth.call(null,vec__7267__7268,0,null);
var ks__7270 = cljs.core.nthnext.call(null,vec__7267__7268,1);

if(cljs.core.truth_(ks__7270))
{return cljs.core.assoc.call(null,m,k__7269,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__7269),ks__7270,f,args));
} else
{return cljs.core.assoc.call(null,m,k__7269,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__7269),args));
}
};
var update_in = function (m,p__7266,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__7266, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__7271){
var m = cljs.core.first(arglist__7271);
var p__7266 = cljs.core.first(cljs.core.next(arglist__7271));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7271)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7271)));
return update_in__delegate.call(this, m, p__7266, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__2227__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7272 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__7305 = null;
var G__7305__7306 = (function (coll,k){
var this__7273 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__7305__7307 = (function (coll,k,not_found){
var this__7274 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__7305 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__7305__7306.call(this,coll,k);
case  3 :
return G__7305__7307.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7305;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__7275 = this;
var new_array__7276 = cljs.core.aclone.call(null,this__7275.array);

(new_array__7276[k] = v);
return (new cljs.core.Vector(this__7275.meta,new_array__7276));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__7309 = null;
var G__7309__7310 = (function (tsym7277,k){
var this__7279 = this;
var tsym7277__7280 = this;

var coll__7281 = tsym7277__7280;

return cljs.core._lookup.call(null,coll__7281,k);
});
var G__7309__7311 = (function (tsym7278,k,not_found){
var this__7282 = this;
var tsym7278__7283 = this;

var coll__7284 = tsym7278__7283;

return cljs.core._lookup.call(null,coll__7284,k,not_found);
});
G__7309 = function(tsym7278,k,not_found){
switch(arguments.length){
case  2 :
return G__7309__7310.call(this,tsym7278,k);
case  3 :
return G__7309__7311.call(this,tsym7278,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7309;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7285 = this;
var new_array__7286 = cljs.core.aclone.call(null,this__7285.array);

new_array__7286.push(o);
return (new cljs.core.Vector(this__7285.meta,new_array__7286));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__7313 = null;
var G__7313__7314 = (function (v,f){
var this__7287 = this;
return cljs.core.ci_reduce.call(null,this__7287.array,f);
});
var G__7313__7315 = (function (v,f,start){
var this__7288 = this;
return cljs.core.ci_reduce.call(null,this__7288.array,f,start);
});
G__7313 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__7313__7314.call(this,v,f);
case  3 :
return G__7313__7315.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7313;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7289 = this;
if(cljs.core.truth_((this__7289.array.length > 0)))
{var vector_seq__7290 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__7289.array.length)))
{return cljs.core.cons.call(null,(this__7289.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__7290.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7291 = this;
return this__7291.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__7292 = this;
var count__7293 = this__7292.array.length;

if(cljs.core.truth_((count__7293 > 0)))
{return (this__7292.array[(count__7293 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__7294 = this;
if(cljs.core.truth_((this__7294.array.length > 0)))
{var new_array__7295 = cljs.core.aclone.call(null,this__7294.array);

new_array__7295.pop();
return (new cljs.core.Vector(this__7294.meta,new_array__7295));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__7296 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7297 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7298 = this;
return (new cljs.core.Vector(meta,this__7298.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7299 = this;
return this__7299.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7317 = null;
var G__7317__7318 = (function (coll,n){
var this__7300 = this;
if(cljs.core.truth_((function (){var and__3546__auto____7301 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____7301))
{return (n < this__7300.array.length);
} else
{return and__3546__auto____7301;
}
})()))
{return (this__7300.array[n]);
} else
{return null;
}
});
var G__7317__7319 = (function (coll,n,not_found){
var this__7302 = this;
if(cljs.core.truth_((function (){var and__3546__auto____7303 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____7303))
{return (n < this__7302.array.length);
} else
{return and__3546__auto____7303;
}
})()))
{return (this__7302.array[n]);
} else
{return not_found;
}
});
G__7317 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7317__7318.call(this,coll,n);
case  3 :
return G__7317__7319.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7317;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7304 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__7304.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__7321){
var args = cljs.core.seq( arglist__7321 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__2227__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7322 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__7350 = null;
var G__7350__7351 = (function (coll,k){
var this__7323 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__7350__7352 = (function (coll,k,not_found){
var this__7324 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__7350 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__7350__7351.call(this,coll,k);
case  3 :
return G__7350__7352.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7350;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__7325 = this;
var v_pos__7326 = (this__7325.start + key);

return (new cljs.core.Subvec(this__7325.meta,cljs.core._assoc.call(null,this__7325.v,v_pos__7326,val),this__7325.start,((this__7325.end > (v_pos__7326 + 1)) ? this__7325.end : (v_pos__7326 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__7354 = null;
var G__7354__7355 = (function (tsym7327,k){
var this__7329 = this;
var tsym7327__7330 = this;

var coll__7331 = tsym7327__7330;

return cljs.core._lookup.call(null,coll__7331,k);
});
var G__7354__7356 = (function (tsym7328,k,not_found){
var this__7332 = this;
var tsym7328__7333 = this;

var coll__7334 = tsym7328__7333;

return cljs.core._lookup.call(null,coll__7334,k,not_found);
});
G__7354 = function(tsym7328,k,not_found){
switch(arguments.length){
case  2 :
return G__7354__7355.call(this,tsym7328,k);
case  3 :
return G__7354__7356.call(this,tsym7328,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7354;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7335 = this;
return (new cljs.core.Subvec(this__7335.meta,cljs.core._assoc_n.call(null,this__7335.v,this__7335.end,o),this__7335.start,(this__7335.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__7358 = null;
var G__7358__7359 = (function (coll,f){
var this__7336 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__7358__7360 = (function (coll,f,start){
var this__7337 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__7358 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__7358__7359.call(this,coll,f);
case  3 :
return G__7358__7360.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7358;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7338 = this;
var subvec_seq__7339 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__7338.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__7338.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__7339.call(null,this__7338.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7340 = this;
return (this__7340.end - this__7340.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__7341 = this;
return cljs.core._nth.call(null,this__7341.v,(this__7341.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__7342 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__7342.start,this__7342.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__7342.meta,this__7342.v,this__7342.start,(this__7342.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__7343 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7344 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7345 = this;
return (new cljs.core.Subvec(meta,this__7345.v,this__7345.start,this__7345.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7346 = this;
return this__7346.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7362 = null;
var G__7362__7363 = (function (coll,n){
var this__7347 = this;
return cljs.core._nth.call(null,this__7347.v,(this__7347.start + n));
});
var G__7362__7364 = (function (coll,n,not_found){
var this__7348 = this;
return cljs.core._nth.call(null,this__7348.v,(this__7348.start + n),not_found);
});
G__7362 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7362__7363.call(this,coll,n);
case  3 :
return G__7362__7364.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7362;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7349 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__7349.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__7366 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__7367 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__7366.call(this,v,start);
case  3 :
return subvec__7367.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__2227__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7369 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7370 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7371 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7372 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7372.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7373 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7374 = this;
return cljs.core._first.call(null,this__7374.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7375 = this;
var temp__3695__auto____7376 = cljs.core.next.call(null,this__7375.front);

if(cljs.core.truth_(temp__3695__auto____7376))
{var f1__7377 = temp__3695__auto____7376;

return (new cljs.core.PersistentQueueSeq(this__7375.meta,f1__7377,this__7375.rear));
} else
{if(cljs.core.truth_((this__7375.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__7375.meta,this__7375.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7378 = this;
return this__7378.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7379 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__7379.front,this__7379.rear));
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__2227__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7380 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7381 = this;
if(cljs.core.truth_(this__7381.front))
{return (new cljs.core.PersistentQueue(this__7381.meta,(this__7381.count + 1),this__7381.front,cljs.core.conj.call(null,(function (){var or__3548__auto____7382 = this__7381.rear;

if(cljs.core.truth_(or__3548__auto____7382))
{return or__3548__auto____7382;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__7381.meta,(this__7381.count + 1),cljs.core.conj.call(null,this__7381.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7383 = this;
var rear__7384 = cljs.core.seq.call(null,this__7383.rear);

if(cljs.core.truth_((function (){var or__3548__auto____7385 = this__7383.front;

if(cljs.core.truth_(or__3548__auto____7385))
{return or__3548__auto____7385;
} else
{return rear__7384;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__7383.front,cljs.core.seq.call(null,rear__7384)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7386 = this;
return this__7386.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__7387 = this;
return cljs.core._first.call(null,this__7387.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__7388 = this;
if(cljs.core.truth_(this__7388.front))
{var temp__3695__auto____7389 = cljs.core.next.call(null,this__7388.front);

if(cljs.core.truth_(temp__3695__auto____7389))
{var f1__7390 = temp__3695__auto____7389;

return (new cljs.core.PersistentQueue(this__7388.meta,(this__7388.count - 1),f1__7390,this__7388.rear));
} else
{return (new cljs.core.PersistentQueue(this__7388.meta,(this__7388.count - 1),cljs.core.seq.call(null,this__7388.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7391 = this;
return cljs.core.first.call(null,this__7391.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7392 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7393 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7394 = this;
return (new cljs.core.PersistentQueue(meta,this__7394.count,this__7394.front,this__7394.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7395 = this;
return this__7395.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7396 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.Vector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__2227__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__7397 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__7398 = array.length;

var i__7399 = 0;

while(true){
if(cljs.core.truth_((i__7399 < len__7398)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__7399]))))
{return i__7399;
} else
{{
var G__7400 = (i__7399 + incr);
i__7399 = G__7400;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___7402 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___7403 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____7401 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____7401))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____7401;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___7402.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___7403.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__7406 = cljs.core.hash.call(null,a);
var b__7407 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__7406 < b__7407)))
{return -1;
} else
{if(cljs.core.truth_((a__7406 > b__7407)))
{return 1;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return 0;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__2227__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7408 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__7435 = null;
var G__7435__7436 = (function (coll,k){
var this__7409 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__7435__7437 = (function (coll,k,not_found){
var this__7410 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__7410.strobj,(this__7410.strobj[k]),not_found);
});
G__7435 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__7435__7436.call(this,coll,k);
case  3 :
return G__7435__7437.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7435;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__7411 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__7412 = goog.object.clone.call(null,this__7411.strobj);
var overwrite_QMARK___7413 = new_strobj__7412.hasOwnProperty(k);

(new_strobj__7412[k] = v);
if(cljs.core.truth_(overwrite_QMARK___7413))
{return (new cljs.core.ObjMap(this__7411.meta,this__7411.keys,new_strobj__7412));
} else
{var new_keys__7414 = cljs.core.aclone.call(null,this__7411.keys);

new_keys__7414.push(k);
return (new cljs.core.ObjMap(this__7411.meta,new_keys__7414,new_strobj__7412));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__7411.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__7415 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__7415.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__7439 = null;
var G__7439__7440 = (function (tsym7416,k){
var this__7418 = this;
var tsym7416__7419 = this;

var coll__7420 = tsym7416__7419;

return cljs.core._lookup.call(null,coll__7420,k);
});
var G__7439__7441 = (function (tsym7417,k,not_found){
var this__7421 = this;
var tsym7417__7422 = this;

var coll__7423 = tsym7417__7422;

return cljs.core._lookup.call(null,coll__7423,k,not_found);
});
G__7439 = function(tsym7417,k,not_found){
switch(arguments.length){
case  2 :
return G__7439__7440.call(this,tsym7417,k);
case  3 :
return G__7439__7441.call(this,tsym7417,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7439;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__7424 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7425 = this;
if(cljs.core.truth_((this__7425.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__7405_SHARP_){
return cljs.core.vector.call(null,p1__7405_SHARP_,(this__7425.strobj[p1__7405_SHARP_]));
}),this__7425.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7426 = this;
return this__7426.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7427 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7428 = this;
return (new cljs.core.ObjMap(meta,this__7428.keys,this__7428.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7429 = this;
return this__7429.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7430 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__7430.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__7431 = this;
if(cljs.core.truth_((function (){var and__3546__auto____7432 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____7432))
{return this__7431.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____7432;
}
})()))
{var new_keys__7433 = cljs.core.aclone.call(null,this__7431.keys);
var new_strobj__7434 = goog.object.clone.call(null,this__7431.strobj);

new_keys__7433.splice(cljs.core.scan_array.call(null,1,k,new_keys__7433),1);
cljs.core.js_delete.call(null,new_strobj__7434,k);
return (new cljs.core.ObjMap(this__7431.meta,new_keys__7433,new_strobj__7434));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__2227__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7444 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__7482 = null;
var G__7482__7483 = (function (coll,k){
var this__7445 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__7482__7484 = (function (coll,k,not_found){
var this__7446 = this;
var bucket__7447 = (this__7446.hashobj[cljs.core.hash.call(null,k)]);
var i__7448 = (cljs.core.truth_(bucket__7447)?cljs.core.scan_array.call(null,2,k,bucket__7447):null);

if(cljs.core.truth_(i__7448))
{return (bucket__7447[(i__7448 + 1)]);
} else
{return not_found;
}
});
G__7482 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__7482__7483.call(this,coll,k);
case  3 :
return G__7482__7484.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7482;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__7449 = this;
var h__7450 = cljs.core.hash.call(null,k);
var bucket__7451 = (this__7449.hashobj[h__7450]);

if(cljs.core.truth_(bucket__7451))
{var new_bucket__7452 = cljs.core.aclone.call(null,bucket__7451);
var new_hashobj__7453 = goog.object.clone.call(null,this__7449.hashobj);

(new_hashobj__7453[h__7450] = new_bucket__7452);
var temp__3695__auto____7454 = cljs.core.scan_array.call(null,2,k,new_bucket__7452);

if(cljs.core.truth_(temp__3695__auto____7454))
{var i__7455 = temp__3695__auto____7454;

(new_bucket__7452[(i__7455 + 1)] = v);
return (new cljs.core.HashMap(this__7449.meta,this__7449.count,new_hashobj__7453));
} else
{new_bucket__7452.push(k,v);
return (new cljs.core.HashMap(this__7449.meta,(this__7449.count + 1),new_hashobj__7453));
}
} else
{var new_hashobj__7456 = goog.object.clone.call(null,this__7449.hashobj);

(new_hashobj__7456[h__7450] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__7449.meta,(this__7449.count + 1),new_hashobj__7456));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__7457 = this;
var bucket__7458 = (this__7457.hashobj[cljs.core.hash.call(null,k)]);
var i__7459 = (cljs.core.truth_(bucket__7458)?cljs.core.scan_array.call(null,2,k,bucket__7458):null);

if(cljs.core.truth_(i__7459))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__7486 = null;
var G__7486__7487 = (function (tsym7460,k){
var this__7462 = this;
var tsym7460__7463 = this;

var coll__7464 = tsym7460__7463;

return cljs.core._lookup.call(null,coll__7464,k);
});
var G__7486__7488 = (function (tsym7461,k,not_found){
var this__7465 = this;
var tsym7461__7466 = this;

var coll__7467 = tsym7461__7466;

return cljs.core._lookup.call(null,coll__7467,k,not_found);
});
G__7486 = function(tsym7461,k,not_found){
switch(arguments.length){
case  2 :
return G__7486__7487.call(this,tsym7461,k);
case  3 :
return G__7486__7488.call(this,tsym7461,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7486;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__7468 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7469 = this;
if(cljs.core.truth_((this__7469.count > 0)))
{var hashes__7470 = cljs.core.js_keys.call(null,this__7469.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__7443_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__7469.hashobj[p1__7443_SHARP_])));
}),hashes__7470);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7471 = this;
return this__7471.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7472 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7473 = this;
return (new cljs.core.HashMap(meta,this__7473.count,this__7473.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7474 = this;
return this__7474.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7475 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__7475.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__7476 = this;
var h__7477 = cljs.core.hash.call(null,k);
var bucket__7478 = (this__7476.hashobj[h__7477]);
var i__7479 = (cljs.core.truth_(bucket__7478)?cljs.core.scan_array.call(null,2,k,bucket__7478):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__7479)))
{return coll;
} else
{var new_hashobj__7480 = goog.object.clone.call(null,this__7476.hashobj);

if(cljs.core.truth_((3 > bucket__7478.length)))
{cljs.core.js_delete.call(null,new_hashobj__7480,h__7477);
} else
{var new_bucket__7481 = cljs.core.aclone.call(null,bucket__7478);

new_bucket__7481.splice(i__7479,2);
(new_hashobj__7480[h__7477] = new_bucket__7481);
}
return (new cljs.core.HashMap(this__7476.meta,(this__7476.count - 1),new_hashobj__7480));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__7490 = ks.length;

var i__7491 = 0;
var out__7492 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__7491 < len__7490)))
{{
var G__7493 = (i__7491 + 1);
var G__7494 = cljs.core.assoc.call(null,out__7492,(ks[i__7491]),(vs[i__7491]));
i__7491 = G__7493;
out__7492 = G__7494;
continue;
}
} else
{return out__7492;
}
break;
}
});
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__7495 = cljs.core.seq.call(null,keyvals);
var out__7496 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__7495))
{{
var G__7497 = cljs.core.nnext.call(null,in$__7495);
var G__7498 = cljs.core.assoc.call(null,out__7496,cljs.core.first.call(null,in$__7495),cljs.core.second.call(null,in$__7495));
in$__7495 = G__7497;
out__7496 = G__7498;
continue;
}
} else
{return out__7496;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__7499){
var keyvals = cljs.core.seq( arglist__7499 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__7500_SHARP_,p2__7501_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____7502 = p1__7500_SHARP_;

if(cljs.core.truth_(or__3548__auto____7502))
{return or__3548__auto____7502;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__7501_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__7503){
var maps = cljs.core.seq( arglist__7503 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__7506 = (function (m,e){
var k__7504 = cljs.core.first.call(null,e);
var v__7505 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__7504)))
{return cljs.core.assoc.call(null,m,k__7504,f.call(null,cljs.core.get.call(null,m,k__7504),v__7505));
} else
{return cljs.core.assoc.call(null,m,k__7504,v__7505);
}
});
var merge2__7508 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__7506,(function (){var or__3548__auto____7507 = m1;

if(cljs.core.truth_(or__3548__auto____7507))
{return or__3548__auto____7507;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__7508,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__7509){
var f = cljs.core.first(arglist__7509);
var maps = cljs.core.rest(arglist__7509);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__7511 = cljs.core.ObjMap.fromObject([],{});
var keys__7512 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__7512))
{var key__7513 = cljs.core.first.call(null,keys__7512);
var entry__7514 = cljs.core.get.call(null,map,key__7513,"\uFDD0'user/not-found");

{
var G__7515 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__7514,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__7511,key__7513,entry__7514):ret__7511);
var G__7516 = cljs.core.next.call(null,keys__7512);
ret__7511 = G__7515;
keys__7512 = G__7516;
continue;
}
} else
{return ret__7511;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__2227__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7517 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__7538 = null;
var G__7538__7539 = (function (coll,v){
var this__7518 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__7538__7540 = (function (coll,v,not_found){
var this__7519 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__7519.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__7538 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__7538__7539.call(this,coll,v);
case  3 :
return G__7538__7540.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7538;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__7542 = null;
var G__7542__7543 = (function (tsym7520,k){
var this__7522 = this;
var tsym7520__7523 = this;

var coll__7524 = tsym7520__7523;

return cljs.core._lookup.call(null,coll__7524,k);
});
var G__7542__7544 = (function (tsym7521,k,not_found){
var this__7525 = this;
var tsym7521__7526 = this;

var coll__7527 = tsym7521__7526;

return cljs.core._lookup.call(null,coll__7527,k,not_found);
});
G__7542 = function(tsym7521,k,not_found){
switch(arguments.length){
case  2 :
return G__7542__7543.call(this,tsym7521,k);
case  3 :
return G__7542__7544.call(this,tsym7521,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7542;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7528 = this;
return (new cljs.core.Set(this__7528.meta,cljs.core.assoc.call(null,this__7528.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7529 = this;
return cljs.core.keys.call(null,this__7529.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__7530 = this;
return (new cljs.core.Set(this__7530.meta,cljs.core.dissoc.call(null,this__7530.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7531 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7532 = this;
var and__3546__auto____7533 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____7533))
{var and__3546__auto____7534 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____7534))
{return cljs.core.every_QMARK_.call(null,(function (p1__7510_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__7510_SHARP_);
}),other);
} else
{return and__3546__auto____7534;
}
} else
{return and__3546__auto____7533;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7535 = this;
return (new cljs.core.Set(meta,this__7535.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7536 = this;
return this__7536.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7537 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__7537.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__7547 = cljs.core.seq.call(null,coll);
var out__7548 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__7547))))
{{
var G__7549 = cljs.core.rest.call(null,in$__7547);
var G__7550 = cljs.core.conj.call(null,out__7548,cljs.core.first.call(null,in$__7547));
in$__7547 = G__7549;
out__7548 = G__7550;
continue;
}
} else
{return out__7548;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__7551 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____7552 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____7552))
{var e__7553 = temp__3695__auto____7552;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__7553));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__7551,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__7546_SHARP_){
var temp__3695__auto____7554 = cljs.core.find.call(null,smap,p1__7546_SHARP_);

if(cljs.core.truth_(temp__3695__auto____7554))
{var e__7555 = temp__3695__auto____7554;

return cljs.core.second.call(null,e__7555);
} else
{return p1__7546_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__7563 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__7556,seen){
while(true){
var vec__7557__7558 = p__7556;
var f__7559 = cljs.core.nth.call(null,vec__7557__7558,0,null);
var xs__7560 = vec__7557__7558;

var temp__3698__auto____7561 = cljs.core.seq.call(null,xs__7560);

if(cljs.core.truth_(temp__3698__auto____7561))
{var s__7562 = temp__3698__auto____7561;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__7559)))
{{
var G__7564 = cljs.core.rest.call(null,s__7562);
var G__7565 = seen;
p__7556 = G__7564;
seen = G__7565;
continue;
}
} else
{return cljs.core.cons.call(null,f__7559,step.call(null,cljs.core.rest.call(null,s__7562),cljs.core.conj.call(null,seen,f__7559)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__7563.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__7566 = cljs.core.Vector.fromArray([]);
var s__7567 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__7567)))
{{
var G__7568 = cljs.core.conj.call(null,ret__7566,cljs.core.first.call(null,s__7567));
var G__7569 = cljs.core.next.call(null,s__7567);
ret__7566 = G__7568;
s__7567 = G__7569;
continue;
}
} else
{return cljs.core.seq.call(null,ret__7566);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____7570 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____7570))
{return or__3548__auto____7570;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__7571 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__7571 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__7571 + 1));
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____7572 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____7572))
{return or__3548__auto____7572;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__7573 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__7573 > -1)))
{return cljs.core.subs.call(null,x,2,i__7573);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__7576 = cljs.core.ObjMap.fromObject([],{});
var ks__7577 = cljs.core.seq.call(null,keys);
var vs__7578 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____7579 = ks__7577;

if(cljs.core.truth_(and__3546__auto____7579))
{return vs__7578;
} else
{return and__3546__auto____7579;
}
})()))
{{
var G__7580 = cljs.core.assoc.call(null,map__7576,cljs.core.first.call(null,ks__7577),cljs.core.first.call(null,vs__7578));
var G__7581 = cljs.core.next.call(null,ks__7577);
var G__7582 = cljs.core.next.call(null,vs__7578);
map__7576 = G__7580;
ks__7577 = G__7581;
vs__7578 = G__7582;
continue;
}
} else
{return map__7576;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__7585 = (function (k,x){
return x;
});
var max_key__7586 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__7587 = (function() { 
var G__7589__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__7574_SHARP_,p2__7575_SHARP_){
return max_key.call(null,k,p1__7574_SHARP_,p2__7575_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__7589 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7589__delegate.call(this, k, x, y, more);
};
G__7589.cljs$lang$maxFixedArity = 3;
G__7589.cljs$lang$applyTo = (function (arglist__7590){
var k = cljs.core.first(arglist__7590);
var x = cljs.core.first(cljs.core.next(arglist__7590));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7590)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7590)));
return G__7589__delegate.call(this, k, x, y, more);
});
return G__7589;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__7585.call(this,k,x);
case  3 :
return max_key__7586.call(this,k,x,y);
default:
return max_key__7587.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__7587.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__7591 = (function (k,x){
return x;
});
var min_key__7592 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__7593 = (function() { 
var G__7595__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__7583_SHARP_,p2__7584_SHARP_){
return min_key.call(null,k,p1__7583_SHARP_,p2__7584_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__7595 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7595__delegate.call(this, k, x, y, more);
};
G__7595.cljs$lang$maxFixedArity = 3;
G__7595.cljs$lang$applyTo = (function (arglist__7596){
var k = cljs.core.first(arglist__7596);
var x = cljs.core.first(cljs.core.next(arglist__7596));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7596)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7596)));
return G__7595__delegate.call(this, k, x, y, more);
});
return G__7595;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__7591.call(this,k,x);
case  3 :
return min_key__7592.call(this,k,x,y);
default:
return min_key__7593.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__7593.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__7599 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__7600 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7597 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7597))
{var s__7598 = temp__3698__auto____7597;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__7598),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__7598)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__7599.call(this,n,step);
case  3 :
return partition_all__7600.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7602 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7602))
{var s__7603 = temp__3698__auto____7602;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__7603))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7603),take_while.call(null,pred,cljs.core.rest.call(null,s__7603)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__2227__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__7604 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__7605 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__7621 = null;
var G__7621__7622 = (function (rng,f){
var this__7606 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__7621__7623 = (function (rng,f,s){
var this__7607 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__7621 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__7621__7622.call(this,rng,f);
case  3 :
return G__7621__7623.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7621;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__7608 = this;
var comp__7609 = (cljs.core.truth_((this__7608.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__7609.call(null,this__7608.start,this__7608.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__7610 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__7610.end - this__7610.start) / this__7610.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__7611 = this;
return this__7611.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__7612 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__7612.meta,(this__7612.start + this__7612.step),this__7612.end,this__7612.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__7613 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__7614 = this;
return (new cljs.core.Range(meta,this__7614.start,this__7614.end,this__7614.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__7615 = this;
return this__7615.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7625 = null;
var G__7625__7626 = (function (rng,n){
var this__7616 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__7616.start + (n * this__7616.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____7617 = (this__7616.start > this__7616.end);

if(cljs.core.truth_(and__3546__auto____7617))
{return cljs.core._EQ_.call(null,this__7616.step,0);
} else
{return and__3546__auto____7617;
}
})()))
{return this__7616.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__7625__7627 = (function (rng,n,not_found){
var this__7618 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__7618.start + (n * this__7618.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____7619 = (this__7618.start > this__7618.end);

if(cljs.core.truth_(and__3546__auto____7619))
{return cljs.core._EQ_.call(null,this__7618.step,0);
} else
{return and__3546__auto____7619;
}
})()))
{return this__7618.start;
} else
{return not_found;
}
}
});
G__7625 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__7625__7626.call(this,rng,n);
case  3 :
return G__7625__7627.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7625;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__7620 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7620.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__7629 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__7630 = (function (end){
return range.call(null,0,end,1);
});
var range__7631 = (function (start,end){
return range.call(null,start,end,1);
});
var range__7632 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__7629.call(this);
case  1 :
return range__7630.call(this,start);
case  2 :
return range__7631.call(this,start,end);
case  3 :
return range__7632.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7634 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7634))
{var s__7635 = temp__3698__auto____7634;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__7635),take_nth.call(null,n,cljs.core.drop.call(null,n,s__7635)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7637 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7637))
{var s__7638 = temp__3698__auto____7637;

var fst__7639 = cljs.core.first.call(null,s__7638);
var fv__7640 = f.call(null,fst__7639);
var run__7641 = cljs.core.cons.call(null,fst__7639,cljs.core.take_while.call(null,(function (p1__7636_SHARP_){
return cljs.core._EQ_.call(null,fv__7640,f.call(null,p1__7636_SHARP_));
}),cljs.core.next.call(null,s__7638)));

return cljs.core.cons.call(null,run__7641,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__7641),s__7638))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__7656 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____7652 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____7652))
{var s__7653 = temp__3695__auto____7652;

return reductions.call(null,f,cljs.core.first.call(null,s__7653),cljs.core.rest.call(null,s__7653));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__7657 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7654 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7654))
{var s__7655 = temp__3698__auto____7654;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__7655)),cljs.core.rest.call(null,s__7655));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__7656.call(this,f,init);
case  3 :
return reductions__7657.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__7660 = (function (f){
return (function() {
var G__7665 = null;
var G__7665__7666 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__7665__7667 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__7665__7668 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__7665__7669 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__7665__7670 = (function() { 
var G__7672__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__7672 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7672__delegate.call(this, x, y, z, args);
};
G__7672.cljs$lang$maxFixedArity = 3;
G__7672.cljs$lang$applyTo = (function (arglist__7673){
var x = cljs.core.first(arglist__7673);
var y = cljs.core.first(cljs.core.next(arglist__7673));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7673)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7673)));
return G__7672__delegate.call(this, x, y, z, args);
});
return G__7672;
})()
;
G__7665 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__7665__7666.call(this);
case  1 :
return G__7665__7667.call(this,x);
case  2 :
return G__7665__7668.call(this,x,y);
case  3 :
return G__7665__7669.call(this,x,y,z);
default:
return G__7665__7670.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7665.cljs$lang$maxFixedArity = 3;
G__7665.cljs$lang$applyTo = G__7665__7670.cljs$lang$applyTo;
return G__7665;
})()
});
var juxt__7661 = (function (f,g){
return (function() {
var G__7674 = null;
var G__7674__7675 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__7674__7676 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__7674__7677 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__7674__7678 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__7674__7679 = (function() { 
var G__7681__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7681 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7681__delegate.call(this, x, y, z, args);
};
G__7681.cljs$lang$maxFixedArity = 3;
G__7681.cljs$lang$applyTo = (function (arglist__7682){
var x = cljs.core.first(arglist__7682);
var y = cljs.core.first(cljs.core.next(arglist__7682));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7682)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7682)));
return G__7681__delegate.call(this, x, y, z, args);
});
return G__7681;
})()
;
G__7674 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__7674__7675.call(this);
case  1 :
return G__7674__7676.call(this,x);
case  2 :
return G__7674__7677.call(this,x,y);
case  3 :
return G__7674__7678.call(this,x,y,z);
default:
return G__7674__7679.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7674.cljs$lang$maxFixedArity = 3;
G__7674.cljs$lang$applyTo = G__7674__7679.cljs$lang$applyTo;
return G__7674;
})()
});
var juxt__7662 = (function (f,g,h){
return (function() {
var G__7683 = null;
var G__7683__7684 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__7683__7685 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__7683__7686 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__7683__7687 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__7683__7688 = (function() { 
var G__7690__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__7690 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7690__delegate.call(this, x, y, z, args);
};
G__7690.cljs$lang$maxFixedArity = 3;
G__7690.cljs$lang$applyTo = (function (arglist__7691){
var x = cljs.core.first(arglist__7691);
var y = cljs.core.first(cljs.core.next(arglist__7691));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7691)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7691)));
return G__7690__delegate.call(this, x, y, z, args);
});
return G__7690;
})()
;
G__7683 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__7683__7684.call(this);
case  1 :
return G__7683__7685.call(this,x);
case  2 :
return G__7683__7686.call(this,x,y);
case  3 :
return G__7683__7687.call(this,x,y,z);
default:
return G__7683__7688.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7683.cljs$lang$maxFixedArity = 3;
G__7683.cljs$lang$applyTo = G__7683__7688.cljs$lang$applyTo;
return G__7683;
})()
});
var juxt__7663 = (function() { 
var G__7692__delegate = function (f,g,h,fs){
var fs__7659 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__7693 = null;
var G__7693__7694 = (function (){
return cljs.core.reduce.call(null,(function (p1__7642_SHARP_,p2__7643_SHARP_){
return cljs.core.conj.call(null,p1__7642_SHARP_,p2__7643_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__7659);
});
var G__7693__7695 = (function (x){
return cljs.core.reduce.call(null,(function (p1__7644_SHARP_,p2__7645_SHARP_){
return cljs.core.conj.call(null,p1__7644_SHARP_,p2__7645_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__7659);
});
var G__7693__7696 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__7646_SHARP_,p2__7647_SHARP_){
return cljs.core.conj.call(null,p1__7646_SHARP_,p2__7647_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__7659);
});
var G__7693__7697 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__7648_SHARP_,p2__7649_SHARP_){
return cljs.core.conj.call(null,p1__7648_SHARP_,p2__7649_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__7659);
});
var G__7693__7698 = (function() { 
var G__7700__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__7650_SHARP_,p2__7651_SHARP_){
return cljs.core.conj.call(null,p1__7650_SHARP_,cljs.core.apply.call(null,p2__7651_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__7659);
};
var G__7700 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7700__delegate.call(this, x, y, z, args);
};
G__7700.cljs$lang$maxFixedArity = 3;
G__7700.cljs$lang$applyTo = (function (arglist__7701){
var x = cljs.core.first(arglist__7701);
var y = cljs.core.first(cljs.core.next(arglist__7701));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7701)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7701)));
return G__7700__delegate.call(this, x, y, z, args);
});
return G__7700;
})()
;
G__7693 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__7693__7694.call(this);
case  1 :
return G__7693__7695.call(this,x);
case  2 :
return G__7693__7696.call(this,x,y);
case  3 :
return G__7693__7697.call(this,x,y,z);
default:
return G__7693__7698.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7693.cljs$lang$maxFixedArity = 3;
G__7693.cljs$lang$applyTo = G__7693__7698.cljs$lang$applyTo;
return G__7693;
})()
};
var G__7692 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7692__delegate.call(this, f, g, h, fs);
};
G__7692.cljs$lang$maxFixedArity = 3;
G__7692.cljs$lang$applyTo = (function (arglist__7702){
var f = cljs.core.first(arglist__7702);
var g = cljs.core.first(cljs.core.next(arglist__7702));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7702)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7702)));
return G__7692__delegate.call(this, f, g, h, fs);
});
return G__7692;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__7660.call(this,f);
case  2 :
return juxt__7661.call(this,f,g);
case  3 :
return juxt__7662.call(this,f,g,h);
default:
return juxt__7663.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__7663.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__7704 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__7707 = cljs.core.next.call(null,coll);
coll = G__7707;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__7705 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____7703 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____7703))
{return (n > 0);
} else
{return and__3546__auto____7703;
}
})()))
{{
var G__7708 = (n - 1);
var G__7709 = cljs.core.next.call(null,coll);
n = G__7708;
coll = G__7709;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__7704.call(this,n);
case  2 :
return dorun__7705.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__7710 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__7711 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__7710.call(this,n);
case  2 :
return doall__7711.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__7713 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__7713),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__7713),1)))
{return cljs.core.first.call(null,matches__7713);
} else
{return cljs.core.vec.call(null,matches__7713);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__7714 = re.exec(s);

if(cljs.core.truth_((matches__7714 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__7714),1)))
{return cljs.core.first.call(null,matches__7714);
} else
{return cljs.core.vec.call(null,matches__7714);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__7715 = cljs.core.re_find.call(null,re,s);
var match_idx__7716 = s.search(re);
var match_str__7717 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__7715))?cljs.core.first.call(null,match_data__7715):match_data__7715);
var post_match__7718 = cljs.core.subs.call(null,s,(match_idx__7716 + cljs.core.count.call(null,match_str__7717)));

if(cljs.core.truth_(match_data__7715))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__7715,re_seq.call(null,re,post_match__7718));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__7720__7721 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___7722 = cljs.core.nth.call(null,vec__7720__7721,0,null);
var flags__7723 = cljs.core.nth.call(null,vec__7720__7721,1,null);
var pattern__7724 = cljs.core.nth.call(null,vec__7720__7721,2,null);

return (new RegExp(pattern__7724,flags__7723));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__7719_SHARP_){
return print_one.call(null,p1__7719_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_((obj === null)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____7725 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____7725))
{var and__3546__auto____7729 = (function (){var x__2312__auto____7726 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____7727 = x__2312__auto____7726;

if(cljs.core.truth_(and__3546__auto____7727))
{var and__3546__auto____7728 = x__2312__auto____7726.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____7728))
{return cljs.core.not.call(null,x__2312__auto____7726.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____7728;
}
} else
{return and__3546__auto____7727;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__2312__auto____7726);
}
})();

if(cljs.core.truth_(and__3546__auto____7729))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____7729;
}
} else
{return and__3546__auto____7725;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__2312__auto____7730 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____7731 = x__2312__auto____7730;

if(cljs.core.truth_(and__3546__auto____7731))
{var and__3546__auto____7732 = x__2312__auto____7730.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____7732))
{return cljs.core.not.call(null,x__2312__auto____7730.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____7732;
}
} else
{return and__3546__auto____7731;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__2312__auto____7730);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__7733 = cljs.core.first.call(null,objs);
var sb__7734 = (new goog.string.StringBuffer());

var G__7735__7736 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__7735__7736))
{var obj__7737 = cljs.core.first.call(null,G__7735__7736);
var G__7735__7738 = G__7735__7736;

while(true){
if(cljs.core.truth_((obj__7737 === first_obj__7733)))
{} else
{sb__7734.append(" ");
}
var G__7739__7740 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__7737,opts));

if(cljs.core.truth_(G__7739__7740))
{var string__7741 = cljs.core.first.call(null,G__7739__7740);
var G__7739__7742 = G__7739__7740;

while(true){
sb__7734.append(string__7741);
var temp__3698__auto____7743 = cljs.core.next.call(null,G__7739__7742);

if(cljs.core.truth_(temp__3698__auto____7743))
{var G__7739__7744 = temp__3698__auto____7743;

{
var G__7747 = cljs.core.first.call(null,G__7739__7744);
var G__7748 = G__7739__7744;
string__7741 = G__7747;
G__7739__7742 = G__7748;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____7745 = cljs.core.next.call(null,G__7735__7738);

if(cljs.core.truth_(temp__3698__auto____7745))
{var G__7735__7746 = temp__3698__auto____7745;

{
var G__7749 = cljs.core.first.call(null,G__7735__7746);
var G__7750 = G__7735__7746;
obj__7737 = G__7749;
G__7735__7738 = G__7750;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__7734);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__7751 = cljs.core.first.call(null,objs);

var G__7752__7753 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__7752__7753))
{var obj__7754 = cljs.core.first.call(null,G__7752__7753);
var G__7752__7755 = G__7752__7753;

while(true){
if(cljs.core.truth_((obj__7754 === first_obj__7751)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__7756__7757 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__7754,opts));

if(cljs.core.truth_(G__7756__7757))
{var string__7758 = cljs.core.first.call(null,G__7756__7757);
var G__7756__7759 = G__7756__7757;

while(true){
cljs.core.string_print.call(null,string__7758);
var temp__3698__auto____7760 = cljs.core.next.call(null,G__7756__7759);

if(cljs.core.truth_(temp__3698__auto____7760))
{var G__7756__7761 = temp__3698__auto____7760;

{
var G__7764 = cljs.core.first.call(null,G__7756__7761);
var G__7765 = G__7756__7761;
string__7758 = G__7764;
G__7756__7759 = G__7765;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____7762 = cljs.core.next.call(null,G__7752__7755);

if(cljs.core.truth_(temp__3698__auto____7762))
{var G__7752__7763 = temp__3698__auto____7762;

{
var G__7766 = cljs.core.first.call(null,G__7752__7763);
var G__7767 = G__7752__7763;
obj__7754 = G__7766;
G__7752__7755 = G__7767;
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
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"\uFDD0'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__7768){
var objs = cljs.core.seq( arglist__7768 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__7769){
var objs = cljs.core.seq( arglist__7769 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__7770){
var objs = cljs.core.seq( arglist__7770 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__7771){
var objs = cljs.core.seq( arglist__7771 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__7772){
var objs = cljs.core.seq( arglist__7772 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__7773 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__7773,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____7774 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____7774))
{var nspc__7775 = temp__3698__auto____7774;

return cljs.core.str.call(null,nspc__7775,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____7776 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____7776))
{var nspc__7777 = temp__3698__auto____7776;

return cljs.core.str.call(null,nspc__7777,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("\uFDD0'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",cljs.core.str.call(null,this$),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__7778 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__7778,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__2227__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__7779 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__7780 = this;
var G__7781__7782 = cljs.core.seq.call(null,this__7780.watches);

if(cljs.core.truth_(G__7781__7782))
{var G__7784__7786 = cljs.core.first.call(null,G__7781__7782);
var vec__7785__7787 = G__7784__7786;
var key__7788 = cljs.core.nth.call(null,vec__7785__7787,0,null);
var f__7789 = cljs.core.nth.call(null,vec__7785__7787,1,null);
var G__7781__7790 = G__7781__7782;

var G__7784__7791 = G__7784__7786;
var G__7781__7792 = G__7781__7790;

while(true){
var vec__7793__7794 = G__7784__7791;
var key__7795 = cljs.core.nth.call(null,vec__7793__7794,0,null);
var f__7796 = cljs.core.nth.call(null,vec__7793__7794,1,null);
var G__7781__7797 = G__7781__7792;

f__7796.call(null,key__7795,this$,oldval,newval);
var temp__3698__auto____7798 = cljs.core.next.call(null,G__7781__7797);

if(cljs.core.truth_(temp__3698__auto____7798))
{var G__7781__7799 = temp__3698__auto____7798;

{
var G__7806 = cljs.core.first.call(null,G__7781__7799);
var G__7807 = G__7781__7799;
G__7784__7791 = G__7806;
G__7781__7792 = G__7807;
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
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__7800 = this;
return this$.watches = cljs.core.assoc.call(null,this__7800.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__7801 = this;
return this$.watches = cljs.core.dissoc.call(null,this__7801.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__7802 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__7802.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__7803 = this;
return this__7803.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__7804 = this;
return this__7804.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__7805 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__7814 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__7815 = (function() { 
var G__7817__delegate = function (x,p__7808){
var map__7809__7810 = p__7808;
var map__7809__7811 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7809__7810))?cljs.core.apply.call(null,cljs.core.hash_map,map__7809__7810):map__7809__7810);
var validator__7812 = cljs.core.get.call(null,map__7809__7811,"\uFDD0'validator");
var meta__7813 = cljs.core.get.call(null,map__7809__7811,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__7813,validator__7812,null));
};
var G__7817 = function (x,var_args){
var p__7808 = null;
if (goog.isDef(var_args)) {
  p__7808 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7817__delegate.call(this, x, p__7808);
};
G__7817.cljs$lang$maxFixedArity = 1;
G__7817.cljs$lang$applyTo = (function (arglist__7818){
var x = cljs.core.first(arglist__7818);
var p__7808 = cljs.core.rest(arglist__7818);
return G__7817__delegate.call(this, x, p__7808);
});
return G__7817;
})()
;
atom = function(x,var_args){
var p__7808 = var_args;
switch(arguments.length){
case  1 :
return atom__7814.call(this,x);
default:
return atom__7815.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__7815.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____7819 = a.validator;

if(cljs.core.truth_(temp__3698__auto____7819))
{var validate__7820 = temp__3698__auto____7819;

if(cljs.core.truth_(validate__7820.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3073))))));
}
} else
{}
var old_value__7821 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__7821,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___7822 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___7823 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___7824 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___7825 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___7826 = (function() { 
var G__7828__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__7828 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7828__delegate.call(this, a, f, x, y, z, more);
};
G__7828.cljs$lang$maxFixedArity = 5;
G__7828.cljs$lang$applyTo = (function (arglist__7829){
var a = cljs.core.first(arglist__7829);
var f = cljs.core.first(cljs.core.next(arglist__7829));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7829)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7829))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7829)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7829)))));
return G__7828__delegate.call(this, a, f, x, y, z, more);
});
return G__7828;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___7822.call(this,a,f);
case  3 :
return swap_BANG___7823.call(this,a,f,x);
case  4 :
return swap_BANG___7824.call(this,a,f,x,y);
case  5 :
return swap_BANG___7825.call(this,a,f,x,y,z);
default:
return swap_BANG___7826.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___7826.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__7830){
var iref = cljs.core.first(arglist__7830);
var f = cljs.core.first(cljs.core.next(arglist__7830));
var args = cljs.core.rest(cljs.core.next(arglist__7830));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__7831 = (function (){
return gensym.call(null,"G__");
});
var gensym__7832 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__7831.call(this);
case  1 :
return gensym__7832.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__2227__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__7834 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__7834.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__7835 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__7835.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__7835.state,this__7835.f);
}
return cljs.core.deref.call(null,this__7835.state);
});
cljs.core.Delay;
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__7836){
var body = cljs.core.seq( arglist__7836 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__7837__7838 = options;
var map__7837__7839 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7837__7838))?cljs.core.apply.call(null,cljs.core.hash_map,map__7837__7838):map__7837__7838);
var keywordize_keys__7840 = cljs.core.get.call(null,map__7837__7839,"\uFDD0'keywordize-keys");
var keyfn__7841 = (cljs.core.truth_(keywordize_keys__7840)?cljs.core.keyword:cljs.core.str);
var f__7847 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__2376__auto____7846 = (function iter__7842(s__7843){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7843__7844 = s__7843;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__7843__7844)))
{var k__7845 = cljs.core.first.call(null,s__7843__7844);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__7841.call(null,k__7845),thisfn.call(null,(x[k__7845]))]),iter__7842.call(null,cljs.core.rest.call(null,s__7843__7844)));
} else
{return null;
}
break;
}
})));
});

return iter__2376__auto____7846.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__7847.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__7848){
var x = cljs.core.first(arglist__7848);
var options = cljs.core.rest(arglist__7848);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__7849 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__7853__delegate = function (args){
var temp__3695__auto____7850 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__7849),args);

if(cljs.core.truth_(temp__3695__auto____7850))
{var v__7851 = temp__3695__auto____7850;

return v__7851;
} else
{var ret__7852 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__7849,cljs.core.assoc,args,ret__7852);
return ret__7852;
}
};
var G__7853 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7853__delegate.call(this, args);
};
G__7853.cljs$lang$maxFixedArity = 0;
G__7853.cljs$lang$applyTo = (function (arglist__7854){
var args = cljs.core.seq( arglist__7854 );;
return G__7853__delegate.call(this, args);
});
return G__7853;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__7856 = (function (f){
while(true){
var ret__7855 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__7855)))
{{
var G__7859 = ret__7855;
f = G__7859;
continue;
}
} else
{return ret__7855;
}
break;
}
});
var trampoline__7857 = (function() { 
var G__7860__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__7860 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7860__delegate.call(this, f, args);
};
G__7860.cljs$lang$maxFixedArity = 1;
G__7860.cljs$lang$applyTo = (function (arglist__7861){
var f = cljs.core.first(arglist__7861);
var args = cljs.core.rest(arglist__7861);
return G__7860__delegate.call(this, f, args);
});
return G__7860;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__7856.call(this,f);
default:
return trampoline__7857.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__7857.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__7862 = (function (){
return rand.call(null,1);
});
var rand__7863 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__7862.call(this);
case  1 :
return rand__7863.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__7865 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__7865,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__7865,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'descendants":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___7874 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___7875 = (function (h,child,parent){
var or__3548__auto____7866 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____7866))
{return or__3548__auto____7866;
} else
{var or__3548__auto____7867 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____7867))
{return or__3548__auto____7867;
} else
{var and__3546__auto____7868 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____7868))
{var and__3546__auto____7869 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____7869))
{var and__3546__auto____7870 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____7870))
{var ret__7871 = true;
var i__7872 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____7873 = cljs.core.not.call(null,ret__7871);

if(cljs.core.truth_(or__3548__auto____7873))
{return or__3548__auto____7873;
} else
{return cljs.core._EQ_.call(null,i__7872,cljs.core.count.call(null,parent));
}
})()))
{return ret__7871;
} else
{{
var G__7877 = isa_QMARK_.call(null,h,child.call(null,i__7872),parent.call(null,i__7872));
var G__7878 = (i__7872 + 1);
ret__7871 = G__7877;
i__7872 = G__7878;
continue;
}
}
break;
}
} else
{return and__3546__auto____7870;
}
} else
{return and__3546__auto____7869;
}
} else
{return and__3546__auto____7868;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___7874.call(this,h,child);
case  3 :
return isa_QMARK___7875.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__7879 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__7880 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__7879.call(this,h);
case  2 :
return parents__7880.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__7882 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__7883 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__7882.call(this,h);
case  2 :
return ancestors__7883.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__7885 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__7886 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__7885.call(this,h);
case  2 :
return descendants__7886.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__7896 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__7897 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3369))))));
}
var tp__7891 = "\uFDD0'parents".call(null,h);
var td__7892 = "\uFDD0'descendants".call(null,h);
var ta__7893 = "\uFDD0'ancestors".call(null,h);
var tf__7894 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____7895 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__7891.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__7893.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__7893.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__7891,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__7894.call(null,"\uFDD0'ancestors".call(null,h),tag,td__7892,parent,ta__7893),"\uFDD0'descendants":tf__7894.call(null,"\uFDD0'descendants".call(null,h),parent,ta__7893,tag,td__7892)});
})());

if(cljs.core.truth_(or__3548__auto____7895))
{return or__3548__auto____7895;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__7896.call(this,h,tag);
case  3 :
return derive__7897.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__7903 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__7904 = (function (h,tag,parent){
var parentMap__7899 = "\uFDD0'parents".call(null,h);
var childsParents__7900 = (cljs.core.truth_(parentMap__7899.call(null,tag))?cljs.core.disj.call(null,parentMap__7899.call(null,tag),parent):cljs.core.set([]));
var newParents__7901 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__7900))?cljs.core.assoc.call(null,parentMap__7899,tag,childsParents__7900):cljs.core.dissoc.call(null,parentMap__7899,tag));
var deriv_seq__7902 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__7888_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__7888_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__7888_SHARP_),cljs.core.second.call(null,p1__7888_SHARP_)));
}),cljs.core.seq.call(null,newParents__7901)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__7899.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__7889_SHARP_,p2__7890_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__7889_SHARP_,p2__7890_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__7902));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__7903.call(this,h,tag);
case  3 :
return underive__7904.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__7906 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____7908 = (cljs.core.truth_((function (){var and__3546__auto____7907 = xprefs__7906;

if(cljs.core.truth_(and__3546__auto____7907))
{return xprefs__7906.call(null,y);
} else
{return and__3546__auto____7907;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____7908))
{return or__3548__auto____7908;
} else
{var or__3548__auto____7910 = (function (){var ps__7909 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__7909) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__7909),prefer_table)))
{} else
{}
{
var G__7913 = cljs.core.rest.call(null,ps__7909);
ps__7909 = G__7913;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____7910))
{return or__3548__auto____7910;
} else
{var or__3548__auto____7912 = (function (){var ps__7911 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__7911) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__7911),y,prefer_table)))
{} else
{}
{
var G__7914 = cljs.core.rest.call(null,ps__7911);
ps__7911 = G__7914;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____7912))
{return or__3548__auto____7912;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____7915 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____7915))
{return or__3548__auto____7915;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__7924 = cljs.core.reduce.call(null,(function (be,p__7916){
var vec__7917__7918 = p__7916;
var k__7919 = cljs.core.nth.call(null,vec__7917__7918,0,null);
var ___7920 = cljs.core.nth.call(null,vec__7917__7918,1,null);
var e__7921 = vec__7917__7918;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__7919)))
{var be2__7923 = (cljs.core.truth_((function (){var or__3548__auto____7922 = (be === null);

if(cljs.core.truth_(or__3548__auto____7922))
{return or__3548__auto____7922;
} else
{return cljs.core.dominates.call(null,k__7919,cljs.core.first.call(null,be),prefer_table);
}
})())?e__7921:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__7923),k__7919,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__7919," and ",cljs.core.first.call(null,be2__7923),", and neither is preferred")));
}
return be2__7923;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__7924))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__7924));
return cljs.core.second.call(null,best_entry__7924);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____7925 = mf;

if(cljs.core.truth_(and__3546__auto____7925))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____7925;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____7926 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____7926))
{return or__3548__auto____7926;
} else
{var or__3548__auto____7927 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____7927))
{return or__3548__auto____7927;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____7928 = mf;

if(cljs.core.truth_(and__3546__auto____7928))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____7928;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____7929 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____7929))
{return or__3548__auto____7929;
} else
{var or__3548__auto____7930 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____7930))
{return or__3548__auto____7930;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____7931 = mf;

if(cljs.core.truth_(and__3546__auto____7931))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____7931;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____7932 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____7932))
{return or__3548__auto____7932;
} else
{var or__3548__auto____7933 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____7933))
{return or__3548__auto____7933;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____7934 = mf;

if(cljs.core.truth_(and__3546__auto____7934))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____7934;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____7935 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____7935))
{return or__3548__auto____7935;
} else
{var or__3548__auto____7936 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____7936))
{return or__3548__auto____7936;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____7937 = mf;

if(cljs.core.truth_(and__3546__auto____7937))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____7937;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____7938 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____7938))
{return or__3548__auto____7938;
} else
{var or__3548__auto____7939 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____7939))
{return or__3548__auto____7939;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____7940 = mf;

if(cljs.core.truth_(and__3546__auto____7940))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____7940;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____7941 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____7941))
{return or__3548__auto____7941;
} else
{var or__3548__auto____7942 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____7942))
{return or__3548__auto____7942;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____7943 = mf;

if(cljs.core.truth_(and__3546__auto____7943))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____7943;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____7944 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____7944))
{return or__3548__auto____7944;
} else
{var or__3548__auto____7945 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____7945))
{return or__3548__auto____7945;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____7946 = mf;

if(cljs.core.truth_(and__3546__auto____7946))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____7946;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____7947 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____7947))
{return or__3548__auto____7947;
} else
{var or__3548__auto____7948 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____7948))
{return or__3548__auto____7948;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__7949 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__7950 = cljs.core._get_method.call(null,mf,dispatch_val__7949);

if(cljs.core.truth_(target_fn__7950))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__7949)));
}
return cljs.core.apply.call(null,target_fn__7950,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__2227__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__7951 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__7952 = this;
cljs.core.swap_BANG_.call(null,this__7952.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__7952.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__7952.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__7952.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__7953 = this;
cljs.core.swap_BANG_.call(null,this__7953.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__7953.method_cache,this__7953.method_table,this__7953.cached_hierarchy,this__7953.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__7954 = this;
cljs.core.swap_BANG_.call(null,this__7954.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__7954.method_cache,this__7954.method_table,this__7954.cached_hierarchy,this__7954.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__7955 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__7955.cached_hierarchy),cljs.core.deref.call(null,this__7955.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__7955.method_cache,this__7955.method_table,this__7955.cached_hierarchy,this__7955.hierarchy);
}
var temp__3695__auto____7956 = cljs.core.deref.call(null,this__7955.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____7956))
{var target_fn__7957 = temp__3695__auto____7956;

return target_fn__7957;
} else
{var temp__3695__auto____7958 = cljs.core.find_and_cache_best_method.call(null,this__7955.name,dispatch_val,this__7955.hierarchy,this__7955.method_table,this__7955.prefer_table,this__7955.method_cache,this__7955.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____7958))
{var target_fn__7959 = temp__3695__auto____7958;

return target_fn__7959;
} else
{return cljs.core.deref.call(null,this__7955.method_table).call(null,this__7955.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__7960 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__7960.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__7960.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__7960.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__7960.method_cache,this__7960.method_table,this__7960.cached_hierarchy,this__7960.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__7961 = this;
return cljs.core.deref.call(null,this__7961.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__7962 = this;
return cljs.core.deref.call(null,this__7962.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__7963 = this;
return cljs.core.do_dispatch.call(null,mf,this__7963.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__7964__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__7964 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7964__delegate.call(this, _, args);
};
G__7964.cljs$lang$maxFixedArity = 1;
G__7964.cljs$lang$applyTo = (function (arglist__7965){
var _ = cljs.core.first(arglist__7965);
var args = cljs.core.rest(arglist__7965);
return G__7964__delegate.call(this, _, args);
});
return G__7964;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
