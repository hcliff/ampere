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
var or__3548__auto____5865 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____5865))
{return or__3548__auto____5865;
} else
{var or__3548__auto____5866 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____5866))
{return or__3548__auto____5866;
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
var _invoke__5930 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____5867 = this$;

if(cljs.core.truth_(and__3546__auto____5867))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5867;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____5868 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5868))
{return or__3548__auto____5868;
} else
{var or__3548__auto____5869 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5869))
{return or__3548__auto____5869;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__5931 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____5870 = this$;

if(cljs.core.truth_(and__3546__auto____5870))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5870;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____5871 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5871))
{return or__3548__auto____5871;
} else
{var or__3548__auto____5872 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5872))
{return or__3548__auto____5872;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__5932 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____5873 = this$;

if(cljs.core.truth_(and__3546__auto____5873))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5873;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____5874 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5874))
{return or__3548__auto____5874;
} else
{var or__3548__auto____5875 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5875))
{return or__3548__auto____5875;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__5933 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____5876 = this$;

if(cljs.core.truth_(and__3546__auto____5876))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5876;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____5877 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5877))
{return or__3548__auto____5877;
} else
{var or__3548__auto____5878 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5878))
{return or__3548__auto____5878;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5934 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____5879 = this$;

if(cljs.core.truth_(and__3546__auto____5879))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5879;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____5880 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5880))
{return or__3548__auto____5880;
} else
{var or__3548__auto____5881 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5881))
{return or__3548__auto____5881;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__5935 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____5882 = this$;

if(cljs.core.truth_(and__3546__auto____5882))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5882;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____5883 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5883))
{return or__3548__auto____5883;
} else
{var or__3548__auto____5884 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5884))
{return or__3548__auto____5884;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__5936 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____5885 = this$;

if(cljs.core.truth_(and__3546__auto____5885))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5885;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____5886 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5886))
{return or__3548__auto____5886;
} else
{var or__3548__auto____5887 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5887))
{return or__3548__auto____5887;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__5937 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____5888 = this$;

if(cljs.core.truth_(and__3546__auto____5888))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5888;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____5889 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5889))
{return or__3548__auto____5889;
} else
{var or__3548__auto____5890 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5890))
{return or__3548__auto____5890;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__5938 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____5891 = this$;

if(cljs.core.truth_(and__3546__auto____5891))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5891;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____5892 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5892))
{return or__3548__auto____5892;
} else
{var or__3548__auto____5893 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5893))
{return or__3548__auto____5893;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__5939 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____5894 = this$;

if(cljs.core.truth_(and__3546__auto____5894))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5894;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____5895 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5895))
{return or__3548__auto____5895;
} else
{var or__3548__auto____5896 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5896))
{return or__3548__auto____5896;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__5940 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____5897 = this$;

if(cljs.core.truth_(and__3546__auto____5897))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5897;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____5898 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5898))
{return or__3548__auto____5898;
} else
{var or__3548__auto____5899 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5899))
{return or__3548__auto____5899;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__5941 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____5900 = this$;

if(cljs.core.truth_(and__3546__auto____5900))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5900;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____5901 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5901))
{return or__3548__auto____5901;
} else
{var or__3548__auto____5902 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5902))
{return or__3548__auto____5902;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__5942 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____5903 = this$;

if(cljs.core.truth_(and__3546__auto____5903))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5903;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____5904 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5904))
{return or__3548__auto____5904;
} else
{var or__3548__auto____5905 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5905))
{return or__3548__auto____5905;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__5943 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____5906 = this$;

if(cljs.core.truth_(and__3546__auto____5906))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5906;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____5907 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5907))
{return or__3548__auto____5907;
} else
{var or__3548__auto____5908 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5908))
{return or__3548__auto____5908;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__5944 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____5909 = this$;

if(cljs.core.truth_(and__3546__auto____5909))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5909;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____5910 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5910))
{return or__3548__auto____5910;
} else
{var or__3548__auto____5911 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5911))
{return or__3548__auto____5911;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__5945 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____5912 = this$;

if(cljs.core.truth_(and__3546__auto____5912))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5912;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____5913 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5913))
{return or__3548__auto____5913;
} else
{var or__3548__auto____5914 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5914))
{return or__3548__auto____5914;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__5946 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____5915 = this$;

if(cljs.core.truth_(and__3546__auto____5915))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5915;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____5916 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5916))
{return or__3548__auto____5916;
} else
{var or__3548__auto____5917 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5917))
{return or__3548__auto____5917;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__5947 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____5918 = this$;

if(cljs.core.truth_(and__3546__auto____5918))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5918;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____5919 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5919))
{return or__3548__auto____5919;
} else
{var or__3548__auto____5920 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5920))
{return or__3548__auto____5920;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__5948 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____5921 = this$;

if(cljs.core.truth_(and__3546__auto____5921))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5921;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____5922 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5922))
{return or__3548__auto____5922;
} else
{var or__3548__auto____5923 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5923))
{return or__3548__auto____5923;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__5949 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____5924 = this$;

if(cljs.core.truth_(and__3546__auto____5924))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5924;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____5925 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5925))
{return or__3548__auto____5925;
} else
{var or__3548__auto____5926 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5926))
{return or__3548__auto____5926;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__5950 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____5927 = this$;

if(cljs.core.truth_(and__3546__auto____5927))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5927;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____5928 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5928))
{return or__3548__auto____5928;
} else
{var or__3548__auto____5929 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5929))
{return or__3548__auto____5929;
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
return _invoke__5930.call(this,this$);
case  2 :
return _invoke__5931.call(this,this$,a);
case  3 :
return _invoke__5932.call(this,this$,a,b);
case  4 :
return _invoke__5933.call(this,this$,a,b,c);
case  5 :
return _invoke__5934.call(this,this$,a,b,c,d);
case  6 :
return _invoke__5935.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__5936.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__5937.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__5938.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__5939.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__5940.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__5941.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__5942.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__5943.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__5944.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__5945.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__5946.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__5947.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__5948.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__5949.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__5950.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5952 = coll;

if(cljs.core.truth_(and__3546__auto____5952))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____5952;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____5953 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5953))
{return or__3548__auto____5953;
} else
{var or__3548__auto____5954 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____5954))
{return or__3548__auto____5954;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5955 = coll;

if(cljs.core.truth_(and__3546__auto____5955))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____5955;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____5956 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5956))
{return or__3548__auto____5956;
} else
{var or__3548__auto____5957 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____5957))
{return or__3548__auto____5957;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____5958 = coll;

if(cljs.core.truth_(and__3546__auto____5958))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____5958;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____5959 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5959))
{return or__3548__auto____5959;
} else
{var or__3548__auto____5960 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____5960))
{return or__3548__auto____5960;
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
var _nth__5967 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____5961 = coll;

if(cljs.core.truth_(and__3546__auto____5961))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____5961;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____5962 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5962))
{return or__3548__auto____5962;
} else
{var or__3548__auto____5963 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____5963))
{return or__3548__auto____5963;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__5968 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____5964 = coll;

if(cljs.core.truth_(and__3546__auto____5964))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____5964;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____5965 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5965))
{return or__3548__auto____5965;
} else
{var or__3548__auto____5966 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____5966))
{return or__3548__auto____5966;
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
return _nth__5967.call(this,coll,n);
case  3 :
return _nth__5968.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5970 = coll;

if(cljs.core.truth_(and__3546__auto____5970))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____5970;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____5971 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5971))
{return or__3548__auto____5971;
} else
{var or__3548__auto____5972 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____5972))
{return or__3548__auto____5972;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5973 = coll;

if(cljs.core.truth_(and__3546__auto____5973))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____5973;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____5974 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5974))
{return or__3548__auto____5974;
} else
{var or__3548__auto____5975 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____5975))
{return or__3548__auto____5975;
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
var _lookup__5982 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____5976 = o;

if(cljs.core.truth_(and__3546__auto____5976))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____5976;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____5977 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5977))
{return or__3548__auto____5977;
} else
{var or__3548__auto____5978 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____5978))
{return or__3548__auto____5978;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__5983 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____5979 = o;

if(cljs.core.truth_(and__3546__auto____5979))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____5979;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____5980 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5980))
{return or__3548__auto____5980;
} else
{var or__3548__auto____5981 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____5981))
{return or__3548__auto____5981;
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
return _lookup__5982.call(this,o,k);
case  3 :
return _lookup__5983.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____5985 = coll;

if(cljs.core.truth_(and__3546__auto____5985))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____5985;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____5986 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5986))
{return or__3548__auto____5986;
} else
{var or__3548__auto____5987 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____5987))
{return or__3548__auto____5987;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____5988 = coll;

if(cljs.core.truth_(and__3546__auto____5988))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____5988;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____5989 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5989))
{return or__3548__auto____5989;
} else
{var or__3548__auto____5990 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____5990))
{return or__3548__auto____5990;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____5991 = coll;

if(cljs.core.truth_(and__3546__auto____5991))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____5991;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____5992 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5992))
{return or__3548__auto____5992;
} else
{var or__3548__auto____5993 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____5993))
{return or__3548__auto____5993;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____5994 = coll;

if(cljs.core.truth_(and__3546__auto____5994))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____5994;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____5995 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5995))
{return or__3548__auto____5995;
} else
{var or__3548__auto____5996 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____5996))
{return or__3548__auto____5996;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5997 = coll;

if(cljs.core.truth_(and__3546__auto____5997))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____5997;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____5998 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5998))
{return or__3548__auto____5998;
} else
{var or__3548__auto____5999 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____5999))
{return or__3548__auto____5999;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6000 = coll;

if(cljs.core.truth_(and__3546__auto____6000))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____6000;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____6001 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6001))
{return or__3548__auto____6001;
} else
{var or__3548__auto____6002 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____6002))
{return or__3548__auto____6002;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____6003 = coll;

if(cljs.core.truth_(and__3546__auto____6003))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____6003;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____6004 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6004))
{return or__3548__auto____6004;
} else
{var or__3548__auto____6005 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____6005))
{return or__3548__auto____6005;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____6006 = o;

if(cljs.core.truth_(and__3546__auto____6006))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____6006;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____6007 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6007))
{return or__3548__auto____6007;
} else
{var or__3548__auto____6008 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____6008))
{return or__3548__auto____6008;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____6009 = o;

if(cljs.core.truth_(and__3546__auto____6009))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____6009;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____6010 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6010))
{return or__3548__auto____6010;
} else
{var or__3548__auto____6011 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____6011))
{return or__3548__auto____6011;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____6012 = o;

if(cljs.core.truth_(and__3546__auto____6012))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____6012;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____6013 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6013))
{return or__3548__auto____6013;
} else
{var or__3548__auto____6014 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____6014))
{return or__3548__auto____6014;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____6015 = o;

if(cljs.core.truth_(and__3546__auto____6015))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____6015;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____6016 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6016))
{return or__3548__auto____6016;
} else
{var or__3548__auto____6017 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____6017))
{return or__3548__auto____6017;
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
var _reduce__6024 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____6018 = coll;

if(cljs.core.truth_(and__3546__auto____6018))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____6018;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____6019 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6019))
{return or__3548__auto____6019;
} else
{var or__3548__auto____6020 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____6020))
{return or__3548__auto____6020;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__6025 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____6021 = coll;

if(cljs.core.truth_(and__3546__auto____6021))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____6021;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____6022 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6022))
{return or__3548__auto____6022;
} else
{var or__3548__auto____6023 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____6023))
{return or__3548__auto____6023;
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
return _reduce__6024.call(this,coll,f);
case  3 :
return _reduce__6025.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____6027 = o;

if(cljs.core.truth_(and__3546__auto____6027))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____6027;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____6028 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6028))
{return or__3548__auto____6028;
} else
{var or__3548__auto____6029 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____6029))
{return or__3548__auto____6029;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____6030 = o;

if(cljs.core.truth_(and__3546__auto____6030))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____6030;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____6031 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6031))
{return or__3548__auto____6031;
} else
{var or__3548__auto____6032 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____6032))
{return or__3548__auto____6032;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____6033 = o;

if(cljs.core.truth_(and__3546__auto____6033))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____6033;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____6034 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6034))
{return or__3548__auto____6034;
} else
{var or__3548__auto____6035 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____6035))
{return or__3548__auto____6035;
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
if(cljs.core.truth_((function (){var and__3546__auto____6036 = o;

if(cljs.core.truth_(and__3546__auto____6036))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____6036;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____6037 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6037))
{return or__3548__auto____6037;
} else
{var or__3548__auto____6038 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____6038))
{return or__3548__auto____6038;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____6039 = d;

if(cljs.core.truth_(and__3546__auto____6039))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____6039;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____6040 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____6040))
{return or__3548__auto____6040;
} else
{var or__3548__auto____6041 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____6041))
{return or__3548__auto____6041;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____6042 = this$;

if(cljs.core.truth_(and__3546__auto____6042))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____6042;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____6043 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6043))
{return or__3548__auto____6043;
} else
{var or__3548__auto____6044 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____6044))
{return or__3548__auto____6044;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____6045 = this$;

if(cljs.core.truth_(and__3546__auto____6045))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____6045;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____6046 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6046))
{return or__3548__auto____6046;
} else
{var or__3548__auto____6047 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____6047))
{return or__3548__auto____6047;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____6048 = this$;

if(cljs.core.truth_(and__3546__auto____6048))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____6048;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____6049 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6049))
{return or__3548__auto____6049;
} else
{var or__3548__auto____6050 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____6050))
{return or__3548__auto____6050;
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
var G__6051 = null;
var G__6051__6052 = (function (o,k){
return null;
});
var G__6051__6053 = (function (o,k,not_found){
return not_found;
});
G__6051 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__6051__6052.call(this,o,k);
case  3 :
return G__6051__6053.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6051;
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
var G__6055 = null;
var G__6055__6056 = (function (_,f){
return f.call(null);
});
var G__6055__6057 = (function (_,f,start){
return start;
});
G__6055 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__6055__6056.call(this,_,f);
case  3 :
return G__6055__6057.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6055;
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
var G__6059 = null;
var G__6059__6060 = (function (_,n){
return null;
});
var G__6059__6061 = (function (_,n,not_found){
return not_found;
});
G__6059 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__6059__6060.call(this,_,n);
case  3 :
return G__6059__6061.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6059;
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
var ci_reduce__6069 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__6063 = cljs.core._nth.call(null,cicoll,0);
var n__6064 = 1;

while(true){
if(cljs.core.truth_((n__6064 < cljs.core._count.call(null,cicoll))))
{{
var G__6073 = f.call(null,val__6063,cljs.core._nth.call(null,cicoll,n__6064));
var G__6074 = (n__6064 + 1);
val__6063 = G__6073;
n__6064 = G__6074;
continue;
}
} else
{return val__6063;
}
break;
}
}
});
var ci_reduce__6070 = (function (cicoll,f,val){
var val__6065 = val;
var n__6066 = 0;

while(true){
if(cljs.core.truth_((n__6066 < cljs.core._count.call(null,cicoll))))
{{
var G__6075 = f.call(null,val__6065,cljs.core._nth.call(null,cicoll,n__6066));
var G__6076 = (n__6066 + 1);
val__6065 = G__6075;
n__6066 = G__6076;
continue;
}
} else
{return val__6065;
}
break;
}
});
var ci_reduce__6071 = (function (cicoll,f,val,idx){
var val__6067 = val;
var n__6068 = idx;

while(true){
if(cljs.core.truth_((n__6068 < cljs.core._count.call(null,cicoll))))
{{
var G__6077 = f.call(null,val__6067,cljs.core._nth.call(null,cicoll,n__6068));
var G__6078 = (n__6068 + 1);
val__6067 = G__6077;
n__6068 = G__6078;
continue;
}
} else
{return val__6067;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__6069.call(this,cicoll,f);
case  3 :
return ci_reduce__6070.call(this,cicoll,f,val);
case  4 :
return ci_reduce__6071.call(this,cicoll,f,val,idx);
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
var this__6079 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__6092 = null;
var G__6092__6093 = (function (_,f){
var this__6080 = this;
return cljs.core.ci_reduce.call(null,this__6080.a,f,(this__6080.a[this__6080.i]),(this__6080.i + 1));
});
var G__6092__6094 = (function (_,f,start){
var this__6081 = this;
return cljs.core.ci_reduce.call(null,this__6081.a,f,start,this__6081.i);
});
G__6092 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__6092__6093.call(this,_,f);
case  3 :
return G__6092__6094.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6092;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6082 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6083 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__6096 = null;
var G__6096__6097 = (function (coll,n){
var this__6084 = this;
var i__6085 = (n + this__6084.i);

if(cljs.core.truth_((i__6085 < this__6084.a.length)))
{return (this__6084.a[i__6085]);
} else
{return null;
}
});
var G__6096__6098 = (function (coll,n,not_found){
var this__6086 = this;
var i__6087 = (n + this__6086.i);

if(cljs.core.truth_((i__6087 < this__6086.a.length)))
{return (this__6086.a[i__6087]);
} else
{return not_found;
}
});
G__6096 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__6096__6097.call(this,coll,n);
case  3 :
return G__6096__6098.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6096;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__6088 = this;
return (this__6088.a.length - this__6088.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__6089 = this;
return (this__6089.a[this__6089.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__6090 = this;
if(cljs.core.truth_(((this__6090.i + 1) < this__6090.a.length)))
{return (new cljs.core.IndexedSeq(this__6090.a,(this__6090.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__6091 = this;
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
var G__6100 = null;
var G__6100__6101 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__6100__6102 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__6100 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__6100__6101.call(this,array,f);
case  3 :
return G__6100__6102.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6100;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__6104 = null;
var G__6104__6105 = (function (array,k){
return (array[k]);
});
var G__6104__6106 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__6104 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__6104__6105.call(this,array,k);
case  3 :
return G__6104__6106.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6104;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__6108 = null;
var G__6108__6109 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__6108__6110 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__6108 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__6108__6109.call(this,array,n);
case  3 :
return G__6108__6110.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6108;
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
var temp__3698__auto____6112 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6112))
{var s__6113 = temp__3698__auto____6112;

return cljs.core._first.call(null,s__6113);
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
var G__6114 = cljs.core.next.call(null,s);
s = G__6114;
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
var s__6115 = cljs.core.seq.call(null,x);
var n__6116 = 0;

while(true){
if(cljs.core.truth_(s__6115))
{{
var G__6117 = cljs.core.next.call(null,s__6115);
var G__6118 = (n__6116 + 1);
s__6115 = G__6117;
n__6116 = G__6118;
continue;
}
} else
{return n__6116;
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
var conj__6119 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__6120 = (function() { 
var G__6122__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__6123 = conj.call(null,coll,x);
var G__6124 = cljs.core.first.call(null,xs);
var G__6125 = cljs.core.next.call(null,xs);
coll = G__6123;
x = G__6124;
xs = G__6125;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__6122 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6122__delegate.call(this, coll, x, xs);
};
G__6122.cljs$lang$maxFixedArity = 2;
G__6122.cljs$lang$applyTo = (function (arglist__6126){
var coll = cljs.core.first(arglist__6126);
var x = cljs.core.first(cljs.core.next(arglist__6126));
var xs = cljs.core.rest(cljs.core.next(arglist__6126));
return G__6122__delegate.call(this, coll, x, xs);
});
return G__6122;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__6119.call(this,coll,x);
default:
return conj__6120.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__6120.cljs$lang$applyTo;
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
var nth__6127 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__6128 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__6127.call(this,coll,n);
case  3 :
return nth__6128.call(this,coll,n,not_found);
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
var get__6130 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__6131 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__6130.call(this,o,k);
case  3 :
return get__6131.call(this,o,k,not_found);
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
var assoc__6134 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__6135 = (function() { 
var G__6137__delegate = function (coll,k,v,kvs){
while(true){
var ret__6133 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__6138 = ret__6133;
var G__6139 = cljs.core.first.call(null,kvs);
var G__6140 = cljs.core.second.call(null,kvs);
var G__6141 = cljs.core.nnext.call(null,kvs);
coll = G__6138;
k = G__6139;
v = G__6140;
kvs = G__6141;
continue;
}
} else
{return ret__6133;
}
break;
}
};
var G__6137 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6137__delegate.call(this, coll, k, v, kvs);
};
G__6137.cljs$lang$maxFixedArity = 3;
G__6137.cljs$lang$applyTo = (function (arglist__6142){
var coll = cljs.core.first(arglist__6142);
var k = cljs.core.first(cljs.core.next(arglist__6142));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6142)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6142)));
return G__6137__delegate.call(this, coll, k, v, kvs);
});
return G__6137;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__6134.call(this,coll,k,v);
default:
return assoc__6135.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__6135.cljs$lang$applyTo;
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
var dissoc__6144 = (function (coll){
return coll;
});
var dissoc__6145 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__6146 = (function() { 
var G__6148__delegate = function (coll,k,ks){
while(true){
var ret__6143 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__6149 = ret__6143;
var G__6150 = cljs.core.first.call(null,ks);
var G__6151 = cljs.core.next.call(null,ks);
coll = G__6149;
k = G__6150;
ks = G__6151;
continue;
}
} else
{return ret__6143;
}
break;
}
};
var G__6148 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6148__delegate.call(this, coll, k, ks);
};
G__6148.cljs$lang$maxFixedArity = 2;
G__6148.cljs$lang$applyTo = (function (arglist__6152){
var coll = cljs.core.first(arglist__6152);
var k = cljs.core.first(cljs.core.next(arglist__6152));
var ks = cljs.core.rest(cljs.core.next(arglist__6152));
return G__6148__delegate.call(this, coll, k, ks);
});
return G__6148;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__6144.call(this,coll);
case  2 :
return dissoc__6145.call(this,coll,k);
default:
return dissoc__6146.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__6146.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__2312__auto____6153 = o;

if(cljs.core.truth_((function (){var and__3546__auto____6154 = x__2312__auto____6153;

if(cljs.core.truth_(and__3546__auto____6154))
{var and__3546__auto____6155 = x__2312__auto____6153.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____6155))
{return cljs.core.not.call(null,x__2312__auto____6153.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____6155;
}
} else
{return and__3546__auto____6154;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__2312__auto____6153);
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
var disj__6157 = (function (coll){
return coll;
});
var disj__6158 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__6159 = (function() { 
var G__6161__delegate = function (coll,k,ks){
while(true){
var ret__6156 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__6162 = ret__6156;
var G__6163 = cljs.core.first.call(null,ks);
var G__6164 = cljs.core.next.call(null,ks);
coll = G__6162;
k = G__6163;
ks = G__6164;
continue;
}
} else
{return ret__6156;
}
break;
}
};
var G__6161 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6161__delegate.call(this, coll, k, ks);
};
G__6161.cljs$lang$maxFixedArity = 2;
G__6161.cljs$lang$applyTo = (function (arglist__6165){
var coll = cljs.core.first(arglist__6165);
var k = cljs.core.first(cljs.core.next(arglist__6165));
var ks = cljs.core.rest(cljs.core.next(arglist__6165));
return G__6161__delegate.call(this, coll, k, ks);
});
return G__6161;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__6157.call(this,coll);
case  2 :
return disj__6158.call(this,coll,k);
default:
return disj__6159.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__6159.cljs$lang$applyTo;
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
{var x__2312__auto____6166 = x;

if(cljs.core.truth_((function (){var and__3546__auto____6167 = x__2312__auto____6166;

if(cljs.core.truth_(and__3546__auto____6167))
{var and__3546__auto____6168 = x__2312__auto____6166.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____6168))
{return cljs.core.not.call(null,x__2312__auto____6166.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____6168;
}
} else
{return and__3546__auto____6167;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__2312__auto____6166);
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
{var x__2312__auto____6169 = x;

if(cljs.core.truth_((function (){var and__3546__auto____6170 = x__2312__auto____6169;

if(cljs.core.truth_(and__3546__auto____6170))
{var and__3546__auto____6171 = x__2312__auto____6169.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____6171))
{return cljs.core.not.call(null,x__2312__auto____6169.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____6171;
}
} else
{return and__3546__auto____6170;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__2312__auto____6169);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__2312__auto____6172 = x;

if(cljs.core.truth_((function (){var and__3546__auto____6173 = x__2312__auto____6172;

if(cljs.core.truth_(and__3546__auto____6173))
{var and__3546__auto____6174 = x__2312__auto____6172.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____6174))
{return cljs.core.not.call(null,x__2312__auto____6172.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____6174;
}
} else
{return and__3546__auto____6173;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__2312__auto____6172);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__2312__auto____6175 = x;

if(cljs.core.truth_((function (){var and__3546__auto____6176 = x__2312__auto____6175;

if(cljs.core.truth_(and__3546__auto____6176))
{var and__3546__auto____6177 = x__2312__auto____6175.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____6177))
{return cljs.core.not.call(null,x__2312__auto____6175.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____6177;
}
} else
{return and__3546__auto____6176;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__2312__auto____6175);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__2312__auto____6178 = x;

if(cljs.core.truth_((function (){var and__3546__auto____6179 = x__2312__auto____6178;

if(cljs.core.truth_(and__3546__auto____6179))
{var and__3546__auto____6180 = x__2312__auto____6178.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____6180))
{return cljs.core.not.call(null,x__2312__auto____6178.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____6180;
}
} else
{return and__3546__auto____6179;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__2312__auto____6178);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__2312__auto____6181 = x;

if(cljs.core.truth_((function (){var and__3546__auto____6182 = x__2312__auto____6181;

if(cljs.core.truth_(and__3546__auto____6182))
{var and__3546__auto____6183 = x__2312__auto____6181.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____6183))
{return cljs.core.not.call(null,x__2312__auto____6181.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____6183;
}
} else
{return and__3546__auto____6182;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__2312__auto____6181);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__2312__auto____6184 = x;

if(cljs.core.truth_((function (){var and__3546__auto____6185 = x__2312__auto____6184;

if(cljs.core.truth_(and__3546__auto____6185))
{var and__3546__auto____6186 = x__2312__auto____6184.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____6186))
{return cljs.core.not.call(null,x__2312__auto____6184.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____6186;
}
} else
{return and__3546__auto____6185;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__2312__auto____6184);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__6187 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__6187.push(key);
}));
return keys__6187;
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
{var x__2312__auto____6188 = s;

if(cljs.core.truth_((function (){var and__3546__auto____6189 = x__2312__auto____6188;

if(cljs.core.truth_(and__3546__auto____6189))
{var and__3546__auto____6190 = x__2312__auto____6188.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____6190))
{return cljs.core.not.call(null,x__2312__auto____6188.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____6190;
}
} else
{return and__3546__auto____6189;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__2312__auto____6188);
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
var and__3546__auto____6191 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____6191))
{return cljs.core.not.call(null,(function (){var or__3548__auto____6192 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____6192))
{return or__3548__auto____6192;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____6191;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____6193 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____6193))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____6193;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____6194 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____6194))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____6194;
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
var and__3546__auto____6195 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____6195))
{return (n == n.toFixed());
} else
{return and__3546__auto____6195;
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
if(cljs.core.truth_((function (){var and__3546__auto____6196 = coll;

if(cljs.core.truth_(and__3546__auto____6196))
{var and__3546__auto____6197 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____6197))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____6197;
}
} else
{return and__3546__auto____6196;
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
var distinct_QMARK___6202 = (function (x){
return true;
});
var distinct_QMARK___6203 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___6204 = (function() { 
var G__6206__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__6198 = cljs.core.set([y,x]);
var xs__6199 = more;

while(true){
var x__6200 = cljs.core.first.call(null,xs__6199);
var etc__6201 = cljs.core.next.call(null,xs__6199);

if(cljs.core.truth_(xs__6199))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__6198,x__6200)))
{return false;
} else
{{
var G__6207 = cljs.core.conj.call(null,s__6198,x__6200);
var G__6208 = etc__6201;
s__6198 = G__6207;
xs__6199 = G__6208;
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
var G__6206 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6206__delegate.call(this, x, y, more);
};
G__6206.cljs$lang$maxFixedArity = 2;
G__6206.cljs$lang$applyTo = (function (arglist__6209){
var x = cljs.core.first(arglist__6209);
var y = cljs.core.first(cljs.core.next(arglist__6209));
var more = cljs.core.rest(cljs.core.next(arglist__6209));
return G__6206__delegate.call(this, x, y, more);
});
return G__6206;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___6202.call(this,x);
case  2 :
return distinct_QMARK___6203.call(this,x,y);
default:
return distinct_QMARK___6204.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___6204.cljs$lang$applyTo;
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
var r__6210 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__6210)))
{return r__6210;
} else
{if(cljs.core.truth_(r__6210))
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
var sort__6212 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__6213 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__6211 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__6211,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__6211);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__6212.call(this,comp);
case  2 :
return sort__6213.call(this,comp,coll);
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
var sort_by__6215 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__6216 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__6215.call(this,keyfn,comp);
case  3 :
return sort_by__6216.call(this,keyfn,comp,coll);
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
var reduce__6218 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__6219 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__6218.call(this,f,val);
case  3 :
return reduce__6219.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__6225 = (function (f,coll){
var temp__3695__auto____6221 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____6221))
{var s__6222 = temp__3695__auto____6221;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__6222),cljs.core.next.call(null,s__6222));
} else
{return f.call(null);
}
});
var seq_reduce__6226 = (function (f,val,coll){
var val__6223 = val;
var coll__6224 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__6224))
{{
var G__6228 = f.call(null,val__6223,cljs.core.first.call(null,coll__6224));
var G__6229 = cljs.core.next.call(null,coll__6224);
val__6223 = G__6228;
coll__6224 = G__6229;
continue;
}
} else
{return val__6223;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__6225.call(this,f,val);
case  3 :
return seq_reduce__6226.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__6230 = null;
var G__6230__6231 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__6230__6232 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__6230 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__6230__6231.call(this,coll,f);
case  3 :
return G__6230__6232.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6230;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___6234 = (function (){
return 0;
});
var _PLUS___6235 = (function (x){
return x;
});
var _PLUS___6236 = (function (x,y){
return (x + y);
});
var _PLUS___6237 = (function() { 
var G__6239__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__6239 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6239__delegate.call(this, x, y, more);
};
G__6239.cljs$lang$maxFixedArity = 2;
G__6239.cljs$lang$applyTo = (function (arglist__6240){
var x = cljs.core.first(arglist__6240);
var y = cljs.core.first(cljs.core.next(arglist__6240));
var more = cljs.core.rest(cljs.core.next(arglist__6240));
return G__6239__delegate.call(this, x, y, more);
});
return G__6239;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___6234.call(this);
case  1 :
return _PLUS___6235.call(this,x);
case  2 :
return _PLUS___6236.call(this,x,y);
default:
return _PLUS___6237.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___6237.cljs$lang$applyTo;
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
var ___6241 = (function (x){
return (- x);
});
var ___6242 = (function (x,y){
return (x - y);
});
var ___6243 = (function() { 
var G__6245__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__6245 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6245__delegate.call(this, x, y, more);
};
G__6245.cljs$lang$maxFixedArity = 2;
G__6245.cljs$lang$applyTo = (function (arglist__6246){
var x = cljs.core.first(arglist__6246);
var y = cljs.core.first(cljs.core.next(arglist__6246));
var more = cljs.core.rest(cljs.core.next(arglist__6246));
return G__6245__delegate.call(this, x, y, more);
});
return G__6245;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___6241.call(this,x);
case  2 :
return ___6242.call(this,x,y);
default:
return ___6243.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___6243.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___6247 = (function (){
return 1;
});
var _STAR___6248 = (function (x){
return x;
});
var _STAR___6249 = (function (x,y){
return (x * y);
});
var _STAR___6250 = (function() { 
var G__6252__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__6252 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6252__delegate.call(this, x, y, more);
};
G__6252.cljs$lang$maxFixedArity = 2;
G__6252.cljs$lang$applyTo = (function (arglist__6253){
var x = cljs.core.first(arglist__6253);
var y = cljs.core.first(cljs.core.next(arglist__6253));
var more = cljs.core.rest(cljs.core.next(arglist__6253));
return G__6252__delegate.call(this, x, y, more);
});
return G__6252;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___6247.call(this);
case  1 :
return _STAR___6248.call(this,x);
case  2 :
return _STAR___6249.call(this,x,y);
default:
return _STAR___6250.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___6250.cljs$lang$applyTo;
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
var _SLASH___6254 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___6255 = (function (x,y){
return (x / y);
});
var _SLASH___6256 = (function() { 
var G__6258__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__6258 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6258__delegate.call(this, x, y, more);
};
G__6258.cljs$lang$maxFixedArity = 2;
G__6258.cljs$lang$applyTo = (function (arglist__6259){
var x = cljs.core.first(arglist__6259);
var y = cljs.core.first(cljs.core.next(arglist__6259));
var more = cljs.core.rest(cljs.core.next(arglist__6259));
return G__6258__delegate.call(this, x, y, more);
});
return G__6258;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___6254.call(this,x);
case  2 :
return _SLASH___6255.call(this,x,y);
default:
return _SLASH___6256.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___6256.cljs$lang$applyTo;
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
var _LT___6260 = (function (x){
return true;
});
var _LT___6261 = (function (x,y){
return (x < y);
});
var _LT___6262 = (function() { 
var G__6264__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__6265 = y;
var G__6266 = cljs.core.first.call(null,more);
var G__6267 = cljs.core.next.call(null,more);
x = G__6265;
y = G__6266;
more = G__6267;
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
var G__6264 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6264__delegate.call(this, x, y, more);
};
G__6264.cljs$lang$maxFixedArity = 2;
G__6264.cljs$lang$applyTo = (function (arglist__6268){
var x = cljs.core.first(arglist__6268);
var y = cljs.core.first(cljs.core.next(arglist__6268));
var more = cljs.core.rest(cljs.core.next(arglist__6268));
return G__6264__delegate.call(this, x, y, more);
});
return G__6264;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___6260.call(this,x);
case  2 :
return _LT___6261.call(this,x,y);
default:
return _LT___6262.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___6262.cljs$lang$applyTo;
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
var _LT__EQ___6269 = (function (x){
return true;
});
var _LT__EQ___6270 = (function (x,y){
return (x <= y);
});
var _LT__EQ___6271 = (function() { 
var G__6273__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__6274 = y;
var G__6275 = cljs.core.first.call(null,more);
var G__6276 = cljs.core.next.call(null,more);
x = G__6274;
y = G__6275;
more = G__6276;
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
var G__6273 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6273__delegate.call(this, x, y, more);
};
G__6273.cljs$lang$maxFixedArity = 2;
G__6273.cljs$lang$applyTo = (function (arglist__6277){
var x = cljs.core.first(arglist__6277);
var y = cljs.core.first(cljs.core.next(arglist__6277));
var more = cljs.core.rest(cljs.core.next(arglist__6277));
return G__6273__delegate.call(this, x, y, more);
});
return G__6273;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___6269.call(this,x);
case  2 :
return _LT__EQ___6270.call(this,x,y);
default:
return _LT__EQ___6271.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___6271.cljs$lang$applyTo;
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
var _GT___6278 = (function (x){
return true;
});
var _GT___6279 = (function (x,y){
return (x > y);
});
var _GT___6280 = (function() { 
var G__6282__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__6283 = y;
var G__6284 = cljs.core.first.call(null,more);
var G__6285 = cljs.core.next.call(null,more);
x = G__6283;
y = G__6284;
more = G__6285;
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
var G__6282 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6282__delegate.call(this, x, y, more);
};
G__6282.cljs$lang$maxFixedArity = 2;
G__6282.cljs$lang$applyTo = (function (arglist__6286){
var x = cljs.core.first(arglist__6286);
var y = cljs.core.first(cljs.core.next(arglist__6286));
var more = cljs.core.rest(cljs.core.next(arglist__6286));
return G__6282__delegate.call(this, x, y, more);
});
return G__6282;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___6278.call(this,x);
case  2 :
return _GT___6279.call(this,x,y);
default:
return _GT___6280.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___6280.cljs$lang$applyTo;
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
var _GT__EQ___6287 = (function (x){
return true;
});
var _GT__EQ___6288 = (function (x,y){
return (x >= y);
});
var _GT__EQ___6289 = (function() { 
var G__6291__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__6292 = y;
var G__6293 = cljs.core.first.call(null,more);
var G__6294 = cljs.core.next.call(null,more);
x = G__6292;
y = G__6293;
more = G__6294;
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
var G__6291 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6291__delegate.call(this, x, y, more);
};
G__6291.cljs$lang$maxFixedArity = 2;
G__6291.cljs$lang$applyTo = (function (arglist__6295){
var x = cljs.core.first(arglist__6295);
var y = cljs.core.first(cljs.core.next(arglist__6295));
var more = cljs.core.rest(cljs.core.next(arglist__6295));
return G__6291__delegate.call(this, x, y, more);
});
return G__6291;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___6287.call(this,x);
case  2 :
return _GT__EQ___6288.call(this,x,y);
default:
return _GT__EQ___6289.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___6289.cljs$lang$applyTo;
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
var max__6296 = (function (x){
return x;
});
var max__6297 = (function (x,y){
return ((x > y) ? x : y);
});
var max__6298 = (function() { 
var G__6300__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__6300 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6300__delegate.call(this, x, y, more);
};
G__6300.cljs$lang$maxFixedArity = 2;
G__6300.cljs$lang$applyTo = (function (arglist__6301){
var x = cljs.core.first(arglist__6301);
var y = cljs.core.first(cljs.core.next(arglist__6301));
var more = cljs.core.rest(cljs.core.next(arglist__6301));
return G__6300__delegate.call(this, x, y, more);
});
return G__6300;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__6296.call(this,x);
case  2 :
return max__6297.call(this,x,y);
default:
return max__6298.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__6298.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__6302 = (function (x){
return x;
});
var min__6303 = (function (x,y){
return ((x < y) ? x : y);
});
var min__6304 = (function() { 
var G__6306__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__6306 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6306__delegate.call(this, x, y, more);
};
G__6306.cljs$lang$maxFixedArity = 2;
G__6306.cljs$lang$applyTo = (function (arglist__6307){
var x = cljs.core.first(arglist__6307);
var y = cljs.core.first(cljs.core.next(arglist__6307));
var more = cljs.core.rest(cljs.core.next(arglist__6307));
return G__6306__delegate.call(this, x, y, more);
});
return G__6306;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__6302.call(this,x);
case  2 :
return min__6303.call(this,x,y);
default:
return min__6304.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__6304.cljs$lang$applyTo;
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
var rem__6308 = (n % d);

return cljs.core.fix.call(null,((n - rem__6308) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__6309 = cljs.core.quot.call(null,n,d);

return (n - (d * q__6309));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__6310 = (function (){
return Math.random.call(null);
});
var rand__6311 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__6310.call(this);
case  1 :
return rand__6311.call(this,n);
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
var _EQ__EQ___6313 = (function (x){
return true;
});
var _EQ__EQ___6314 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___6315 = (function() { 
var G__6317__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__6318 = y;
var G__6319 = cljs.core.first.call(null,more);
var G__6320 = cljs.core.next.call(null,more);
x = G__6318;
y = G__6319;
more = G__6320;
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
var G__6317 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6317__delegate.call(this, x, y, more);
};
G__6317.cljs$lang$maxFixedArity = 2;
G__6317.cljs$lang$applyTo = (function (arglist__6321){
var x = cljs.core.first(arglist__6321);
var y = cljs.core.first(cljs.core.next(arglist__6321));
var more = cljs.core.rest(cljs.core.next(arglist__6321));
return G__6317__delegate.call(this, x, y, more);
});
return G__6317;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___6313.call(this,x);
case  2 :
return _EQ__EQ___6314.call(this,x,y);
default:
return _EQ__EQ___6315.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___6315.cljs$lang$applyTo;
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
var n__6322 = n;
var xs__6323 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____6324 = xs__6323;

if(cljs.core.truth_(and__3546__auto____6324))
{return (n__6322 > 0);
} else
{return and__3546__auto____6324;
}
})()))
{{
var G__6325 = (n__6322 - 1);
var G__6326 = cljs.core.next.call(null,xs__6323);
n__6322 = G__6325;
xs__6323 = G__6326;
continue;
}
} else
{return xs__6323;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__6331 = null;
var G__6331__6332 = (function (coll,n){
var temp__3695__auto____6327 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____6327))
{var xs__6328 = temp__3695__auto____6327;

return cljs.core.first.call(null,xs__6328);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__6331__6333 = (function (coll,n,not_found){
var temp__3695__auto____6329 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____6329))
{var xs__6330 = temp__3695__auto____6329;

return cljs.core.first.call(null,xs__6330);
} else
{return not_found;
}
});
G__6331 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__6331__6332.call(this,coll,n);
case  3 :
return G__6331__6333.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6331;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___6335 = (function (){
return "";
});
var str_STAR___6336 = (function (x){
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
var str_STAR___6337 = (function() { 
var G__6339__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__6340 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__6341 = cljs.core.next.call(null,more);
sb = G__6340;
more = G__6341;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__6339 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6339__delegate.call(this, x, ys);
};
G__6339.cljs$lang$maxFixedArity = 1;
G__6339.cljs$lang$applyTo = (function (arglist__6342){
var x = cljs.core.first(arglist__6342);
var ys = cljs.core.rest(arglist__6342);
return G__6339__delegate.call(this, x, ys);
});
return G__6339;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___6335.call(this);
case  1 :
return str_STAR___6336.call(this,x);
default:
return str_STAR___6337.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___6337.cljs$lang$applyTo;
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
var str__6343 = (function (){
return "";
});
var str__6344 = (function (x){
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
var str__6345 = (function() { 
var G__6347__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__6347 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6347__delegate.call(this, x, ys);
};
G__6347.cljs$lang$maxFixedArity = 1;
G__6347.cljs$lang$applyTo = (function (arglist__6348){
var x = cljs.core.first(arglist__6348);
var ys = cljs.core.rest(arglist__6348);
return G__6347__delegate.call(this, x, ys);
});
return G__6347;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__6343.call(this);
case  1 :
return str__6344.call(this,x);
default:
return str__6345.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__6345.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__6349 = (function (s,start){
return s.substring(start);
});
var subs__6350 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__6349.call(this,s,start);
case  3 :
return subs__6350.call(this,s,start,end);
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
var symbol__6352 = (function (name){
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
var symbol__6353 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__6352.call(this,ns);
case  2 :
return symbol__6353.call(this,ns,name);
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
var keyword__6355 = (function (name){
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
var keyword__6356 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__6355.call(this,ns);
case  2 :
return keyword__6356.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__6358 = cljs.core.seq.call(null,x);
var ys__6359 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__6358 === null)))
{return (ys__6359 === null);
} else
{if(cljs.core.truth_((ys__6359 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__6358),cljs.core.first.call(null,ys__6359))))
{{
var G__6360 = cljs.core.next.call(null,xs__6358);
var G__6361 = cljs.core.next.call(null,ys__6359);
xs__6358 = G__6360;
ys__6359 = G__6361;
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
return cljs.core.reduce.call(null,(function (p1__6362_SHARP_,p2__6363_SHARP_){
return cljs.core.hash_combine.call(null,p1__6362_SHARP_,cljs.core.hash.call(null,p2__6363_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__6364__6365 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__6364__6365))
{var G__6367__6369 = cljs.core.first.call(null,G__6364__6365);
var vec__6368__6370 = G__6367__6369;
var key_name__6371 = cljs.core.nth.call(null,vec__6368__6370,0,null);
var f__6372 = cljs.core.nth.call(null,vec__6368__6370,1,null);
var G__6364__6373 = G__6364__6365;

var G__6367__6374 = G__6367__6369;
var G__6364__6375 = G__6364__6373;

while(true){
var vec__6376__6377 = G__6367__6374;
var key_name__6378 = cljs.core.nth.call(null,vec__6376__6377,0,null);
var f__6379 = cljs.core.nth.call(null,vec__6376__6377,1,null);
var G__6364__6380 = G__6364__6375;

var str_name__6381 = cljs.core.name.call(null,key_name__6378);

obj[str_name__6381] = f__6379;
var temp__3698__auto____6382 = cljs.core.next.call(null,G__6364__6380);

if(cljs.core.truth_(temp__3698__auto____6382))
{var G__6364__6383 = temp__3698__auto____6382;

{
var G__6384 = cljs.core.first.call(null,G__6364__6383);
var G__6385 = G__6364__6383;
G__6367__6374 = G__6384;
G__6364__6375 = G__6385;
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
var this__6386 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6387 = this;
return (new cljs.core.List(this__6387.meta,o,coll,(this__6387.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6388 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6389 = this;
return this__6389.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__6390 = this;
return this__6390.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__6391 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__6392 = this;
return this__6392.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__6393 = this;
return this__6393.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6394 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6395 = this;
return (new cljs.core.List(meta,this__6395.first,this__6395.rest,this__6395.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6396 = this;
return this__6396.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6397 = this;
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
var this__6398 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6399 = this;
return (new cljs.core.List(this__6399.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6400 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6401 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__6402 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__6403 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__6404 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__6405 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6406 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6407 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6408 = this;
return this__6408.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6409 = this;
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
list.cljs$lang$applyTo = (function (arglist__6410){
var items = cljs.core.seq( arglist__6410 );;
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
var this__6411 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__6412 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6413 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6414 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6414.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6415 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__6416 = this;
return this__6416.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__6417 = this;
if(cljs.core.truth_((this__6417.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__6417.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6418 = this;
return this__6418.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6419 = this;
return (new cljs.core.Cons(meta,this__6419.first,this__6419.rest));
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
var G__6420 = null;
var G__6420__6421 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__6420__6422 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__6420 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__6420__6421.call(this,string,f);
case  3 :
return G__6420__6422.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6420;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__6424 = null;
var G__6424__6425 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__6424__6426 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__6424 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__6424__6425.call(this,string,k);
case  3 :
return G__6424__6426.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6424;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__6428 = null;
var G__6428__6429 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__6428__6430 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__6428 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__6428__6429.call(this,string,n);
case  3 :
return G__6428__6430.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6428;
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
var G__6438 = null;
var G__6438__6439 = (function (tsym6432,coll){
var tsym6432__6434 = this;

var this$__6435 = tsym6432__6434;

return cljs.core.get.call(null,coll,this$__6435.toString());
});
var G__6438__6440 = (function (tsym6433,coll,not_found){
var tsym6433__6436 = this;

var this$__6437 = tsym6433__6436;

return cljs.core.get.call(null,coll,this$__6437.toString(),not_found);
});
G__6438 = function(tsym6433,coll,not_found){
switch(arguments.length){
case  2 :
return G__6438__6439.call(this,tsym6433,coll);
case  3 :
return G__6438__6440.call(this,tsym6433,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6438;
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
var x__6442 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__6442;
} else
{lazy_seq.x = x__6442.call(null);
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
var this__6443 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__6444 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6445 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6446 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6446.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6447 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__6448 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__6449 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6450 = this;
return this__6450.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6451 = this;
return (new cljs.core.LazySeq(meta,this__6451.realized,this__6451.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__6452 = cljs.core.array.call(null);

var s__6453 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__6453)))
{ary__6452.push(cljs.core.first.call(null,s__6453));
{
var G__6454 = cljs.core.next.call(null,s__6453);
s__6453 = G__6454;
continue;
}
} else
{return ary__6452;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__6455 = s;
var i__6456 = n;
var sum__6457 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____6458 = (i__6456 > 0);

if(cljs.core.truth_(and__3546__auto____6458))
{return cljs.core.seq.call(null,s__6455);
} else
{return and__3546__auto____6458;
}
})()))
{{
var G__6459 = cljs.core.next.call(null,s__6455);
var G__6460 = (i__6456 - 1);
var G__6461 = (sum__6457 + 1);
s__6455 = G__6459;
i__6456 = G__6460;
sum__6457 = G__6461;
continue;
}
} else
{return sum__6457;
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
var concat__6465 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__6466 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__6467 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__6462 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__6462))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__6462),concat.call(null,cljs.core.rest.call(null,s__6462),y));
} else
{return y;
}
})));
});
var concat__6468 = (function() { 
var G__6470__delegate = function (x,y,zs){
var cat__6464 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__6463 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__6463))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__6463),cat.call(null,cljs.core.rest.call(null,xys__6463),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__6464.call(null,concat.call(null,x,y),zs);
};
var G__6470 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6470__delegate.call(this, x, y, zs);
};
G__6470.cljs$lang$maxFixedArity = 2;
G__6470.cljs$lang$applyTo = (function (arglist__6471){
var x = cljs.core.first(arglist__6471);
var y = cljs.core.first(cljs.core.next(arglist__6471));
var zs = cljs.core.rest(cljs.core.next(arglist__6471));
return G__6470__delegate.call(this, x, y, zs);
});
return G__6470;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__6465.call(this);
case  1 :
return concat__6466.call(this,x);
case  2 :
return concat__6467.call(this,x,y);
default:
return concat__6468.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__6468.cljs$lang$applyTo;
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
var list_STAR___6472 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___6473 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___6474 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___6475 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___6476 = (function() { 
var G__6478__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__6478 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__6478__delegate.call(this, a, b, c, d, more);
};
G__6478.cljs$lang$maxFixedArity = 4;
G__6478.cljs$lang$applyTo = (function (arglist__6479){
var a = cljs.core.first(arglist__6479);
var b = cljs.core.first(cljs.core.next(arglist__6479));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6479)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6479))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6479))));
return G__6478__delegate.call(this, a, b, c, d, more);
});
return G__6478;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___6472.call(this,a);
case  2 :
return list_STAR___6473.call(this,a,b);
case  3 :
return list_STAR___6474.call(this,a,b,c);
case  4 :
return list_STAR___6475.call(this,a,b,c,d);
default:
return list_STAR___6476.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___6476.cljs$lang$applyTo;
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
var apply__6489 = (function (f,args){
var fixed_arity__6480 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__6480 + 1)) <= fixed_arity__6480)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__6490 = (function (f,x,args){
var arglist__6481 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__6482 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__6481,fixed_arity__6482) <= fixed_arity__6482)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__6481));
} else
{return f.cljs$lang$applyTo(arglist__6481);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__6481));
}
});
var apply__6491 = (function (f,x,y,args){
var arglist__6483 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__6484 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__6483,fixed_arity__6484) <= fixed_arity__6484)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__6483));
} else
{return f.cljs$lang$applyTo(arglist__6483);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__6483));
}
});
var apply__6492 = (function (f,x,y,z,args){
var arglist__6485 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__6486 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__6485,fixed_arity__6486) <= fixed_arity__6486)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__6485));
} else
{return f.cljs$lang$applyTo(arglist__6485);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__6485));
}
});
var apply__6493 = (function() { 
var G__6495__delegate = function (f,a,b,c,d,args){
var arglist__6487 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__6488 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__6487,fixed_arity__6488) <= fixed_arity__6488)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__6487));
} else
{return f.cljs$lang$applyTo(arglist__6487);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__6487));
}
};
var G__6495 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__6495__delegate.call(this, f, a, b, c, d, args);
};
G__6495.cljs$lang$maxFixedArity = 5;
G__6495.cljs$lang$applyTo = (function (arglist__6496){
var f = cljs.core.first(arglist__6496);
var a = cljs.core.first(cljs.core.next(arglist__6496));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6496)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6496))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6496)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6496)))));
return G__6495__delegate.call(this, f, a, b, c, d, args);
});
return G__6495;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__6489.call(this,f,a);
case  3 :
return apply__6490.call(this,f,a,b);
case  4 :
return apply__6491.call(this,f,a,b,c);
case  5 :
return apply__6492.call(this,f,a,b,c,d);
default:
return apply__6493.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6493.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__6497){
var obj = cljs.core.first(arglist__6497);
var f = cljs.core.first(cljs.core.next(arglist__6497));
var args = cljs.core.rest(cljs.core.next(arglist__6497));
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
var not_EQ___6498 = (function (x){
return false;
});
var not_EQ___6499 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___6500 = (function() { 
var G__6502__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__6502 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6502__delegate.call(this, x, y, more);
};
G__6502.cljs$lang$maxFixedArity = 2;
G__6502.cljs$lang$applyTo = (function (arglist__6503){
var x = cljs.core.first(arglist__6503);
var y = cljs.core.first(cljs.core.next(arglist__6503));
var more = cljs.core.rest(cljs.core.next(arglist__6503));
return G__6502__delegate.call(this, x, y, more);
});
return G__6502;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___6498.call(this,x);
case  2 :
return not_EQ___6499.call(this,x,y);
default:
return not_EQ___6500.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___6500.cljs$lang$applyTo;
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
var G__6504 = pred;
var G__6505 = cljs.core.next.call(null,coll);
pred = G__6504;
coll = G__6505;
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
{var or__3548__auto____6506 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____6506))
{return or__3548__auto____6506;
} else
{{
var G__6507 = pred;
var G__6508 = cljs.core.next.call(null,coll);
pred = G__6507;
coll = G__6508;
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
var G__6509 = null;
var G__6509__6510 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__6509__6511 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__6509__6512 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__6509__6513 = (function() { 
var G__6515__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__6515 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6515__delegate.call(this, x, y, zs);
};
G__6515.cljs$lang$maxFixedArity = 2;
G__6515.cljs$lang$applyTo = (function (arglist__6516){
var x = cljs.core.first(arglist__6516);
var y = cljs.core.first(cljs.core.next(arglist__6516));
var zs = cljs.core.rest(cljs.core.next(arglist__6516));
return G__6515__delegate.call(this, x, y, zs);
});
return G__6515;
})()
;
G__6509 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__6509__6510.call(this);
case  1 :
return G__6509__6511.call(this,x);
case  2 :
return G__6509__6512.call(this,x,y);
default:
return G__6509__6513.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6509.cljs$lang$maxFixedArity = 2;
G__6509.cljs$lang$applyTo = G__6509__6513.cljs$lang$applyTo;
return G__6509;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__6517__delegate = function (args){
return x;
};
var G__6517 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6517__delegate.call(this, args);
};
G__6517.cljs$lang$maxFixedArity = 0;
G__6517.cljs$lang$applyTo = (function (arglist__6518){
var args = cljs.core.seq( arglist__6518 );;
return G__6517__delegate.call(this, args);
});
return G__6517;
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
var comp__6522 = (function (){
return cljs.core.identity;
});
var comp__6523 = (function (f){
return f;
});
var comp__6524 = (function (f,g){
return (function() {
var G__6528 = null;
var G__6528__6529 = (function (){
return f.call(null,g.call(null));
});
var G__6528__6530 = (function (x){
return f.call(null,g.call(null,x));
});
var G__6528__6531 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__6528__6532 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__6528__6533 = (function() { 
var G__6535__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__6535 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6535__delegate.call(this, x, y, z, args);
};
G__6535.cljs$lang$maxFixedArity = 3;
G__6535.cljs$lang$applyTo = (function (arglist__6536){
var x = cljs.core.first(arglist__6536);
var y = cljs.core.first(cljs.core.next(arglist__6536));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6536)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6536)));
return G__6535__delegate.call(this, x, y, z, args);
});
return G__6535;
})()
;
G__6528 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6528__6529.call(this);
case  1 :
return G__6528__6530.call(this,x);
case  2 :
return G__6528__6531.call(this,x,y);
case  3 :
return G__6528__6532.call(this,x,y,z);
default:
return G__6528__6533.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6528.cljs$lang$maxFixedArity = 3;
G__6528.cljs$lang$applyTo = G__6528__6533.cljs$lang$applyTo;
return G__6528;
})()
});
var comp__6525 = (function (f,g,h){
return (function() {
var G__6537 = null;
var G__6537__6538 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__6537__6539 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__6537__6540 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__6537__6541 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__6537__6542 = (function() { 
var G__6544__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__6544 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6544__delegate.call(this, x, y, z, args);
};
G__6544.cljs$lang$maxFixedArity = 3;
G__6544.cljs$lang$applyTo = (function (arglist__6545){
var x = cljs.core.first(arglist__6545);
var y = cljs.core.first(cljs.core.next(arglist__6545));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6545)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6545)));
return G__6544__delegate.call(this, x, y, z, args);
});
return G__6544;
})()
;
G__6537 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6537__6538.call(this);
case  1 :
return G__6537__6539.call(this,x);
case  2 :
return G__6537__6540.call(this,x,y);
case  3 :
return G__6537__6541.call(this,x,y,z);
default:
return G__6537__6542.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6537.cljs$lang$maxFixedArity = 3;
G__6537.cljs$lang$applyTo = G__6537__6542.cljs$lang$applyTo;
return G__6537;
})()
});
var comp__6526 = (function() { 
var G__6546__delegate = function (f1,f2,f3,fs){
var fs__6519 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__6547__delegate = function (args){
var ret__6520 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__6519),args);
var fs__6521 = cljs.core.next.call(null,fs__6519);

while(true){
if(cljs.core.truth_(fs__6521))
{{
var G__6548 = cljs.core.first.call(null,fs__6521).call(null,ret__6520);
var G__6549 = cljs.core.next.call(null,fs__6521);
ret__6520 = G__6548;
fs__6521 = G__6549;
continue;
}
} else
{return ret__6520;
}
break;
}
};
var G__6547 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6547__delegate.call(this, args);
};
G__6547.cljs$lang$maxFixedArity = 0;
G__6547.cljs$lang$applyTo = (function (arglist__6550){
var args = cljs.core.seq( arglist__6550 );;
return G__6547__delegate.call(this, args);
});
return G__6547;
})()
;
};
var G__6546 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6546__delegate.call(this, f1, f2, f3, fs);
};
G__6546.cljs$lang$maxFixedArity = 3;
G__6546.cljs$lang$applyTo = (function (arglist__6551){
var f1 = cljs.core.first(arglist__6551);
var f2 = cljs.core.first(cljs.core.next(arglist__6551));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6551)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6551)));
return G__6546__delegate.call(this, f1, f2, f3, fs);
});
return G__6546;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__6522.call(this);
case  1 :
return comp__6523.call(this,f1);
case  2 :
return comp__6524.call(this,f1,f2);
case  3 :
return comp__6525.call(this,f1,f2,f3);
default:
return comp__6526.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__6526.cljs$lang$applyTo;
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
var partial__6552 = (function (f,arg1){
return (function() { 
var G__6557__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__6557 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6557__delegate.call(this, args);
};
G__6557.cljs$lang$maxFixedArity = 0;
G__6557.cljs$lang$applyTo = (function (arglist__6558){
var args = cljs.core.seq( arglist__6558 );;
return G__6557__delegate.call(this, args);
});
return G__6557;
})()
;
});
var partial__6553 = (function (f,arg1,arg2){
return (function() { 
var G__6559__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__6559 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6559__delegate.call(this, args);
};
G__6559.cljs$lang$maxFixedArity = 0;
G__6559.cljs$lang$applyTo = (function (arglist__6560){
var args = cljs.core.seq( arglist__6560 );;
return G__6559__delegate.call(this, args);
});
return G__6559;
})()
;
});
var partial__6554 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__6561__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__6561 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6561__delegate.call(this, args);
};
G__6561.cljs$lang$maxFixedArity = 0;
G__6561.cljs$lang$applyTo = (function (arglist__6562){
var args = cljs.core.seq( arglist__6562 );;
return G__6561__delegate.call(this, args);
});
return G__6561;
})()
;
});
var partial__6555 = (function() { 
var G__6563__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__6564__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__6564 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6564__delegate.call(this, args);
};
G__6564.cljs$lang$maxFixedArity = 0;
G__6564.cljs$lang$applyTo = (function (arglist__6565){
var args = cljs.core.seq( arglist__6565 );;
return G__6564__delegate.call(this, args);
});
return G__6564;
})()
;
};
var G__6563 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__6563__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__6563.cljs$lang$maxFixedArity = 4;
G__6563.cljs$lang$applyTo = (function (arglist__6566){
var f = cljs.core.first(arglist__6566);
var arg1 = cljs.core.first(cljs.core.next(arglist__6566));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6566)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6566))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6566))));
return G__6563__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__6563;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__6552.call(this,f,arg1);
case  3 :
return partial__6553.call(this,f,arg1,arg2);
case  4 :
return partial__6554.call(this,f,arg1,arg2,arg3);
default:
return partial__6555.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__6555.cljs$lang$applyTo;
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
var fnil__6567 = (function (f,x){
return (function() {
var G__6571 = null;
var G__6571__6572 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__6571__6573 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__6571__6574 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__6571__6575 = (function() { 
var G__6577__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__6577 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6577__delegate.call(this, a, b, c, ds);
};
G__6577.cljs$lang$maxFixedArity = 3;
G__6577.cljs$lang$applyTo = (function (arglist__6578){
var a = cljs.core.first(arglist__6578);
var b = cljs.core.first(cljs.core.next(arglist__6578));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6578)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6578)));
return G__6577__delegate.call(this, a, b, c, ds);
});
return G__6577;
})()
;
G__6571 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__6571__6572.call(this,a);
case  2 :
return G__6571__6573.call(this,a,b);
case  3 :
return G__6571__6574.call(this,a,b,c);
default:
return G__6571__6575.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6571.cljs$lang$maxFixedArity = 3;
G__6571.cljs$lang$applyTo = G__6571__6575.cljs$lang$applyTo;
return G__6571;
})()
});
var fnil__6568 = (function (f,x,y){
return (function() {
var G__6579 = null;
var G__6579__6580 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__6579__6581 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__6579__6582 = (function() { 
var G__6584__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__6584 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6584__delegate.call(this, a, b, c, ds);
};
G__6584.cljs$lang$maxFixedArity = 3;
G__6584.cljs$lang$applyTo = (function (arglist__6585){
var a = cljs.core.first(arglist__6585);
var b = cljs.core.first(cljs.core.next(arglist__6585));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6585)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6585)));
return G__6584__delegate.call(this, a, b, c, ds);
});
return G__6584;
})()
;
G__6579 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__6579__6580.call(this,a,b);
case  3 :
return G__6579__6581.call(this,a,b,c);
default:
return G__6579__6582.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6579.cljs$lang$maxFixedArity = 3;
G__6579.cljs$lang$applyTo = G__6579__6582.cljs$lang$applyTo;
return G__6579;
})()
});
var fnil__6569 = (function (f,x,y,z){
return (function() {
var G__6586 = null;
var G__6586__6587 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__6586__6588 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__6586__6589 = (function() { 
var G__6591__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__6591 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6591__delegate.call(this, a, b, c, ds);
};
G__6591.cljs$lang$maxFixedArity = 3;
G__6591.cljs$lang$applyTo = (function (arglist__6592){
var a = cljs.core.first(arglist__6592);
var b = cljs.core.first(cljs.core.next(arglist__6592));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6592)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6592)));
return G__6591__delegate.call(this, a, b, c, ds);
});
return G__6591;
})()
;
G__6586 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__6586__6587.call(this,a,b);
case  3 :
return G__6586__6588.call(this,a,b,c);
default:
return G__6586__6589.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6586.cljs$lang$maxFixedArity = 3;
G__6586.cljs$lang$applyTo = G__6586__6589.cljs$lang$applyTo;
return G__6586;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__6567.call(this,f,x);
case  3 :
return fnil__6568.call(this,f,x,y);
case  4 :
return fnil__6569.call(this,f,x,y,z);
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
var mapi__6595 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6593 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6593))
{var s__6594 = temp__3698__auto____6593;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__6594)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__6594)));
} else
{return null;
}
})));
});

return mapi__6595.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6596 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6596))
{var s__6597 = temp__3698__auto____6596;

var x__6598 = f.call(null,cljs.core.first.call(null,s__6597));

if(cljs.core.truth_((x__6598 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__6597));
} else
{return cljs.core.cons.call(null,x__6598,keep.call(null,f,cljs.core.rest.call(null,s__6597)));
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
var keepi__6608 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6605 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6605))
{var s__6606 = temp__3698__auto____6605;

var x__6607 = f.call(null,idx,cljs.core.first.call(null,s__6606));

if(cljs.core.truth_((x__6607 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__6606));
} else
{return cljs.core.cons.call(null,x__6607,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__6606)));
}
} else
{return null;
}
})));
});

return keepi__6608.call(null,0,coll);
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
var every_pred__6653 = (function (p){
return (function() {
var ep1 = null;
var ep1__6658 = (function (){
return true;
});
var ep1__6659 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__6660 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6615 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____6615))
{return p.call(null,y);
} else
{return and__3546__auto____6615;
}
})());
});
var ep1__6661 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6616 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____6616))
{var and__3546__auto____6617 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____6617))
{return p.call(null,z);
} else
{return and__3546__auto____6617;
}
} else
{return and__3546__auto____6616;
}
})());
});
var ep1__6662 = (function() { 
var G__6664__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6618 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____6618))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____6618;
}
})());
};
var G__6664 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6664__delegate.call(this, x, y, z, args);
};
G__6664.cljs$lang$maxFixedArity = 3;
G__6664.cljs$lang$applyTo = (function (arglist__6665){
var x = cljs.core.first(arglist__6665);
var y = cljs.core.first(cljs.core.next(arglist__6665));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6665)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6665)));
return G__6664__delegate.call(this, x, y, z, args);
});
return G__6664;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__6658.call(this);
case  1 :
return ep1__6659.call(this,x);
case  2 :
return ep1__6660.call(this,x,y);
case  3 :
return ep1__6661.call(this,x,y,z);
default:
return ep1__6662.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__6662.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__6654 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__6666 = (function (){
return true;
});
var ep2__6667 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6619 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____6619))
{return p2.call(null,x);
} else
{return and__3546__auto____6619;
}
})());
});
var ep2__6668 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6620 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____6620))
{var and__3546__auto____6621 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____6621))
{var and__3546__auto____6622 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____6622))
{return p2.call(null,y);
} else
{return and__3546__auto____6622;
}
} else
{return and__3546__auto____6621;
}
} else
{return and__3546__auto____6620;
}
})());
});
var ep2__6669 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6623 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____6623))
{var and__3546__auto____6624 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____6624))
{var and__3546__auto____6625 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____6625))
{var and__3546__auto____6626 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____6626))
{var and__3546__auto____6627 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____6627))
{return p2.call(null,z);
} else
{return and__3546__auto____6627;
}
} else
{return and__3546__auto____6626;
}
} else
{return and__3546__auto____6625;
}
} else
{return and__3546__auto____6624;
}
} else
{return and__3546__auto____6623;
}
})());
});
var ep2__6670 = (function() { 
var G__6672__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6628 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____6628))
{return cljs.core.every_QMARK_.call(null,(function (p1__6599_SHARP_){
var and__3546__auto____6629 = p1.call(null,p1__6599_SHARP_);

if(cljs.core.truth_(and__3546__auto____6629))
{return p2.call(null,p1__6599_SHARP_);
} else
{return and__3546__auto____6629;
}
}),args);
} else
{return and__3546__auto____6628;
}
})());
};
var G__6672 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6672__delegate.call(this, x, y, z, args);
};
G__6672.cljs$lang$maxFixedArity = 3;
G__6672.cljs$lang$applyTo = (function (arglist__6673){
var x = cljs.core.first(arglist__6673);
var y = cljs.core.first(cljs.core.next(arglist__6673));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6673)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6673)));
return G__6672__delegate.call(this, x, y, z, args);
});
return G__6672;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__6666.call(this);
case  1 :
return ep2__6667.call(this,x);
case  2 :
return ep2__6668.call(this,x,y);
case  3 :
return ep2__6669.call(this,x,y,z);
default:
return ep2__6670.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__6670.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__6655 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__6674 = (function (){
return true;
});
var ep3__6675 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6630 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____6630))
{var and__3546__auto____6631 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____6631))
{return p3.call(null,x);
} else
{return and__3546__auto____6631;
}
} else
{return and__3546__auto____6630;
}
})());
});
var ep3__6676 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6632 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____6632))
{var and__3546__auto____6633 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____6633))
{var and__3546__auto____6634 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____6634))
{var and__3546__auto____6635 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____6635))
{var and__3546__auto____6636 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____6636))
{return p3.call(null,y);
} else
{return and__3546__auto____6636;
}
} else
{return and__3546__auto____6635;
}
} else
{return and__3546__auto____6634;
}
} else
{return and__3546__auto____6633;
}
} else
{return and__3546__auto____6632;
}
})());
});
var ep3__6677 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6637 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____6637))
{var and__3546__auto____6638 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____6638))
{var and__3546__auto____6639 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____6639))
{var and__3546__auto____6640 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____6640))
{var and__3546__auto____6641 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____6641))
{var and__3546__auto____6642 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____6642))
{var and__3546__auto____6643 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____6643))
{var and__3546__auto____6644 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____6644))
{return p3.call(null,z);
} else
{return and__3546__auto____6644;
}
} else
{return and__3546__auto____6643;
}
} else
{return and__3546__auto____6642;
}
} else
{return and__3546__auto____6641;
}
} else
{return and__3546__auto____6640;
}
} else
{return and__3546__auto____6639;
}
} else
{return and__3546__auto____6638;
}
} else
{return and__3546__auto____6637;
}
})());
});
var ep3__6678 = (function() { 
var G__6680__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6645 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____6645))
{return cljs.core.every_QMARK_.call(null,(function (p1__6600_SHARP_){
var and__3546__auto____6646 = p1.call(null,p1__6600_SHARP_);

if(cljs.core.truth_(and__3546__auto____6646))
{var and__3546__auto____6647 = p2.call(null,p1__6600_SHARP_);

if(cljs.core.truth_(and__3546__auto____6647))
{return p3.call(null,p1__6600_SHARP_);
} else
{return and__3546__auto____6647;
}
} else
{return and__3546__auto____6646;
}
}),args);
} else
{return and__3546__auto____6645;
}
})());
};
var G__6680 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6680__delegate.call(this, x, y, z, args);
};
G__6680.cljs$lang$maxFixedArity = 3;
G__6680.cljs$lang$applyTo = (function (arglist__6681){
var x = cljs.core.first(arglist__6681);
var y = cljs.core.first(cljs.core.next(arglist__6681));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6681)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6681)));
return G__6680__delegate.call(this, x, y, z, args);
});
return G__6680;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__6674.call(this);
case  1 :
return ep3__6675.call(this,x);
case  2 :
return ep3__6676.call(this,x,y);
case  3 :
return ep3__6677.call(this,x,y,z);
default:
return ep3__6678.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__6678.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__6656 = (function() { 
var G__6682__delegate = function (p1,p2,p3,ps){
var ps__6648 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__6683 = (function (){
return true;
});
var epn__6684 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__6601_SHARP_){
return p1__6601_SHARP_.call(null,x);
}),ps__6648);
});
var epn__6685 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__6602_SHARP_){
var and__3546__auto____6649 = p1__6602_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____6649))
{return p1__6602_SHARP_.call(null,y);
} else
{return and__3546__auto____6649;
}
}),ps__6648);
});
var epn__6686 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__6603_SHARP_){
var and__3546__auto____6650 = p1__6603_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____6650))
{var and__3546__auto____6651 = p1__6603_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____6651))
{return p1__6603_SHARP_.call(null,z);
} else
{return and__3546__auto____6651;
}
} else
{return and__3546__auto____6650;
}
}),ps__6648);
});
var epn__6687 = (function() { 
var G__6689__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6652 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____6652))
{return cljs.core.every_QMARK_.call(null,(function (p1__6604_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__6604_SHARP_,args);
}),ps__6648);
} else
{return and__3546__auto____6652;
}
})());
};
var G__6689 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6689__delegate.call(this, x, y, z, args);
};
G__6689.cljs$lang$maxFixedArity = 3;
G__6689.cljs$lang$applyTo = (function (arglist__6690){
var x = cljs.core.first(arglist__6690);
var y = cljs.core.first(cljs.core.next(arglist__6690));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6690)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6690)));
return G__6689__delegate.call(this, x, y, z, args);
});
return G__6689;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__6683.call(this);
case  1 :
return epn__6684.call(this,x);
case  2 :
return epn__6685.call(this,x,y);
case  3 :
return epn__6686.call(this,x,y,z);
default:
return epn__6687.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__6687.cljs$lang$applyTo;
return epn;
})()
};
var G__6682 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6682__delegate.call(this, p1, p2, p3, ps);
};
G__6682.cljs$lang$maxFixedArity = 3;
G__6682.cljs$lang$applyTo = (function (arglist__6691){
var p1 = cljs.core.first(arglist__6691);
var p2 = cljs.core.first(cljs.core.next(arglist__6691));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6691)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6691)));
return G__6682__delegate.call(this, p1, p2, p3, ps);
});
return G__6682;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__6653.call(this,p1);
case  2 :
return every_pred__6654.call(this,p1,p2);
case  3 :
return every_pred__6655.call(this,p1,p2,p3);
default:
return every_pred__6656.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__6656.cljs$lang$applyTo;
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
var some_fn__6731 = (function (p){
return (function() {
var sp1 = null;
var sp1__6736 = (function (){
return null;
});
var sp1__6737 = (function (x){
return p.call(null,x);
});
var sp1__6738 = (function (x,y){
var or__3548__auto____6693 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____6693))
{return or__3548__auto____6693;
} else
{return p.call(null,y);
}
});
var sp1__6739 = (function (x,y,z){
var or__3548__auto____6694 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____6694))
{return or__3548__auto____6694;
} else
{var or__3548__auto____6695 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____6695))
{return or__3548__auto____6695;
} else
{return p.call(null,z);
}
}
});
var sp1__6740 = (function() { 
var G__6742__delegate = function (x,y,z,args){
var or__3548__auto____6696 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____6696))
{return or__3548__auto____6696;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__6742 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6742__delegate.call(this, x, y, z, args);
};
G__6742.cljs$lang$maxFixedArity = 3;
G__6742.cljs$lang$applyTo = (function (arglist__6743){
var x = cljs.core.first(arglist__6743);
var y = cljs.core.first(cljs.core.next(arglist__6743));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6743)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6743)));
return G__6742__delegate.call(this, x, y, z, args);
});
return G__6742;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__6736.call(this);
case  1 :
return sp1__6737.call(this,x);
case  2 :
return sp1__6738.call(this,x,y);
case  3 :
return sp1__6739.call(this,x,y,z);
default:
return sp1__6740.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__6740.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__6732 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__6744 = (function (){
return null;
});
var sp2__6745 = (function (x){
var or__3548__auto____6697 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____6697))
{return or__3548__auto____6697;
} else
{return p2.call(null,x);
}
});
var sp2__6746 = (function (x,y){
var or__3548__auto____6698 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____6698))
{return or__3548__auto____6698;
} else
{var or__3548__auto____6699 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____6699))
{return or__3548__auto____6699;
} else
{var or__3548__auto____6700 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____6700))
{return or__3548__auto____6700;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__6747 = (function (x,y,z){
var or__3548__auto____6701 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____6701))
{return or__3548__auto____6701;
} else
{var or__3548__auto____6702 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____6702))
{return or__3548__auto____6702;
} else
{var or__3548__auto____6703 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____6703))
{return or__3548__auto____6703;
} else
{var or__3548__auto____6704 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____6704))
{return or__3548__auto____6704;
} else
{var or__3548__auto____6705 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____6705))
{return or__3548__auto____6705;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__6748 = (function() { 
var G__6750__delegate = function (x,y,z,args){
var or__3548__auto____6706 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____6706))
{return or__3548__auto____6706;
} else
{return cljs.core.some.call(null,(function (p1__6609_SHARP_){
var or__3548__auto____6707 = p1.call(null,p1__6609_SHARP_);

if(cljs.core.truth_(or__3548__auto____6707))
{return or__3548__auto____6707;
} else
{return p2.call(null,p1__6609_SHARP_);
}
}),args);
}
};
var G__6750 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6750__delegate.call(this, x, y, z, args);
};
G__6750.cljs$lang$maxFixedArity = 3;
G__6750.cljs$lang$applyTo = (function (arglist__6751){
var x = cljs.core.first(arglist__6751);
var y = cljs.core.first(cljs.core.next(arglist__6751));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6751)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6751)));
return G__6750__delegate.call(this, x, y, z, args);
});
return G__6750;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__6744.call(this);
case  1 :
return sp2__6745.call(this,x);
case  2 :
return sp2__6746.call(this,x,y);
case  3 :
return sp2__6747.call(this,x,y,z);
default:
return sp2__6748.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__6748.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__6733 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__6752 = (function (){
return null;
});
var sp3__6753 = (function (x){
var or__3548__auto____6708 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____6708))
{return or__3548__auto____6708;
} else
{var or__3548__auto____6709 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____6709))
{return or__3548__auto____6709;
} else
{return p3.call(null,x);
}
}
});
var sp3__6754 = (function (x,y){
var or__3548__auto____6710 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____6710))
{return or__3548__auto____6710;
} else
{var or__3548__auto____6711 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____6711))
{return or__3548__auto____6711;
} else
{var or__3548__auto____6712 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____6712))
{return or__3548__auto____6712;
} else
{var or__3548__auto____6713 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____6713))
{return or__3548__auto____6713;
} else
{var or__3548__auto____6714 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____6714))
{return or__3548__auto____6714;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__6755 = (function (x,y,z){
var or__3548__auto____6715 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____6715))
{return or__3548__auto____6715;
} else
{var or__3548__auto____6716 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____6716))
{return or__3548__auto____6716;
} else
{var or__3548__auto____6717 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____6717))
{return or__3548__auto____6717;
} else
{var or__3548__auto____6718 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____6718))
{return or__3548__auto____6718;
} else
{var or__3548__auto____6719 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____6719))
{return or__3548__auto____6719;
} else
{var or__3548__auto____6720 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____6720))
{return or__3548__auto____6720;
} else
{var or__3548__auto____6721 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____6721))
{return or__3548__auto____6721;
} else
{var or__3548__auto____6722 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____6722))
{return or__3548__auto____6722;
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
var sp3__6756 = (function() { 
var G__6758__delegate = function (x,y,z,args){
var or__3548__auto____6723 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____6723))
{return or__3548__auto____6723;
} else
{return cljs.core.some.call(null,(function (p1__6610_SHARP_){
var or__3548__auto____6724 = p1.call(null,p1__6610_SHARP_);

if(cljs.core.truth_(or__3548__auto____6724))
{return or__3548__auto____6724;
} else
{var or__3548__auto____6725 = p2.call(null,p1__6610_SHARP_);

if(cljs.core.truth_(or__3548__auto____6725))
{return or__3548__auto____6725;
} else
{return p3.call(null,p1__6610_SHARP_);
}
}
}),args);
}
};
var G__6758 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6758__delegate.call(this, x, y, z, args);
};
G__6758.cljs$lang$maxFixedArity = 3;
G__6758.cljs$lang$applyTo = (function (arglist__6759){
var x = cljs.core.first(arglist__6759);
var y = cljs.core.first(cljs.core.next(arglist__6759));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6759)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6759)));
return G__6758__delegate.call(this, x, y, z, args);
});
return G__6758;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__6752.call(this);
case  1 :
return sp3__6753.call(this,x);
case  2 :
return sp3__6754.call(this,x,y);
case  3 :
return sp3__6755.call(this,x,y,z);
default:
return sp3__6756.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__6756.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__6734 = (function() { 
var G__6760__delegate = function (p1,p2,p3,ps){
var ps__6726 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__6761 = (function (){
return null;
});
var spn__6762 = (function (x){
return cljs.core.some.call(null,(function (p1__6611_SHARP_){
return p1__6611_SHARP_.call(null,x);
}),ps__6726);
});
var spn__6763 = (function (x,y){
return cljs.core.some.call(null,(function (p1__6612_SHARP_){
var or__3548__auto____6727 = p1__6612_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____6727))
{return or__3548__auto____6727;
} else
{return p1__6612_SHARP_.call(null,y);
}
}),ps__6726);
});
var spn__6764 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__6613_SHARP_){
var or__3548__auto____6728 = p1__6613_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____6728))
{return or__3548__auto____6728;
} else
{var or__3548__auto____6729 = p1__6613_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____6729))
{return or__3548__auto____6729;
} else
{return p1__6613_SHARP_.call(null,z);
}
}
}),ps__6726);
});
var spn__6765 = (function() { 
var G__6767__delegate = function (x,y,z,args){
var or__3548__auto____6730 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____6730))
{return or__3548__auto____6730;
} else
{return cljs.core.some.call(null,(function (p1__6614_SHARP_){
return cljs.core.some.call(null,p1__6614_SHARP_,args);
}),ps__6726);
}
};
var G__6767 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6767__delegate.call(this, x, y, z, args);
};
G__6767.cljs$lang$maxFixedArity = 3;
G__6767.cljs$lang$applyTo = (function (arglist__6768){
var x = cljs.core.first(arglist__6768);
var y = cljs.core.first(cljs.core.next(arglist__6768));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6768)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6768)));
return G__6767__delegate.call(this, x, y, z, args);
});
return G__6767;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__6761.call(this);
case  1 :
return spn__6762.call(this,x);
case  2 :
return spn__6763.call(this,x,y);
case  3 :
return spn__6764.call(this,x,y,z);
default:
return spn__6765.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__6765.cljs$lang$applyTo;
return spn;
})()
};
var G__6760 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6760__delegate.call(this, p1, p2, p3, ps);
};
G__6760.cljs$lang$maxFixedArity = 3;
G__6760.cljs$lang$applyTo = (function (arglist__6769){
var p1 = cljs.core.first(arglist__6769);
var p2 = cljs.core.first(cljs.core.next(arglist__6769));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6769)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6769)));
return G__6760__delegate.call(this, p1, p2, p3, ps);
});
return G__6760;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__6731.call(this,p1);
case  2 :
return some_fn__6732.call(this,p1,p2);
case  3 :
return some_fn__6733.call(this,p1,p2,p3);
default:
return some_fn__6734.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__6734.cljs$lang$applyTo;
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
var map__6782 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6770 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6770))
{var s__6771 = temp__3698__auto____6770;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__6771)),map.call(null,f,cljs.core.rest.call(null,s__6771)));
} else
{return null;
}
})));
});
var map__6783 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__6772 = cljs.core.seq.call(null,c1);
var s2__6773 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____6774 = s1__6772;

if(cljs.core.truth_(and__3546__auto____6774))
{return s2__6773;
} else
{return and__3546__auto____6774;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__6772),cljs.core.first.call(null,s2__6773)),map.call(null,f,cljs.core.rest.call(null,s1__6772),cljs.core.rest.call(null,s2__6773)));
} else
{return null;
}
})));
});
var map__6784 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__6775 = cljs.core.seq.call(null,c1);
var s2__6776 = cljs.core.seq.call(null,c2);
var s3__6777 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____6778 = s1__6775;

if(cljs.core.truth_(and__3546__auto____6778))
{var and__3546__auto____6779 = s2__6776;

if(cljs.core.truth_(and__3546__auto____6779))
{return s3__6777;
} else
{return and__3546__auto____6779;
}
} else
{return and__3546__auto____6778;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__6775),cljs.core.first.call(null,s2__6776),cljs.core.first.call(null,s3__6777)),map.call(null,f,cljs.core.rest.call(null,s1__6775),cljs.core.rest.call(null,s2__6776),cljs.core.rest.call(null,s3__6777)));
} else
{return null;
}
})));
});
var map__6785 = (function() { 
var G__6787__delegate = function (f,c1,c2,c3,colls){
var step__6781 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__6780 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__6780)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__6780),step.call(null,map.call(null,cljs.core.rest,ss__6780)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__6692_SHARP_){
return cljs.core.apply.call(null,f,p1__6692_SHARP_);
}),step__6781.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__6787 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__6787__delegate.call(this, f, c1, c2, c3, colls);
};
G__6787.cljs$lang$maxFixedArity = 4;
G__6787.cljs$lang$applyTo = (function (arglist__6788){
var f = cljs.core.first(arglist__6788);
var c1 = cljs.core.first(cljs.core.next(arglist__6788));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6788)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6788))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6788))));
return G__6787__delegate.call(this, f, c1, c2, c3, colls);
});
return G__6787;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__6782.call(this,f,c1);
case  3 :
return map__6783.call(this,f,c1,c2);
case  4 :
return map__6784.call(this,f,c1,c2,c3);
default:
return map__6785.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__6785.cljs$lang$applyTo;
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
{var temp__3698__auto____6789 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6789))
{var s__6790 = temp__3698__auto____6789;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__6790),take.call(null,(n - 1),cljs.core.rest.call(null,s__6790)));
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
var step__6793 = (function (n,coll){
while(true){
var s__6791 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____6792 = (n > 0);

if(cljs.core.truth_(and__3546__auto____6792))
{return s__6791;
} else
{return and__3546__auto____6792;
}
})()))
{{
var G__6794 = (n - 1);
var G__6795 = cljs.core.rest.call(null,s__6791);
n = G__6794;
coll = G__6795;
continue;
}
} else
{return s__6791;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__6793.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__6796 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__6797 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__6796.call(this,n);
case  2 :
return drop_last__6797.call(this,n,s);
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
var s__6799 = cljs.core.seq.call(null,coll);
var lead__6800 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__6800))
{{
var G__6801 = cljs.core.next.call(null,s__6799);
var G__6802 = cljs.core.next.call(null,lead__6800);
s__6799 = G__6801;
lead__6800 = G__6802;
continue;
}
} else
{return s__6799;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__6805 = (function (pred,coll){
while(true){
var s__6803 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____6804 = s__6803;

if(cljs.core.truth_(and__3546__auto____6804))
{return pred.call(null,cljs.core.first.call(null,s__6803));
} else
{return and__3546__auto____6804;
}
})()))
{{
var G__6806 = pred;
var G__6807 = cljs.core.rest.call(null,s__6803);
pred = G__6806;
coll = G__6807;
continue;
}
} else
{return s__6803;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__6805.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6808 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6808))
{var s__6809 = temp__3698__auto____6808;

return cljs.core.concat.call(null,s__6809,cycle.call(null,s__6809));
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
var repeat__6810 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__6811 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__6810.call(this,n);
case  2 :
return repeat__6811.call(this,n,x);
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
var repeatedly__6813 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__6814 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__6813.call(this,n);
case  2 :
return repeatedly__6814.call(this,n,f);
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
var interleave__6820 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__6816 = cljs.core.seq.call(null,c1);
var s2__6817 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____6818 = s1__6816;

if(cljs.core.truth_(and__3546__auto____6818))
{return s2__6817;
} else
{return and__3546__auto____6818;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__6816),cljs.core.cons.call(null,cljs.core.first.call(null,s2__6817),interleave.call(null,cljs.core.rest.call(null,s1__6816),cljs.core.rest.call(null,s2__6817))));
} else
{return null;
}
})));
});
var interleave__6821 = (function() { 
var G__6823__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__6819 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__6819)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__6819),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__6819)));
} else
{return null;
}
})));
};
var G__6823 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6823__delegate.call(this, c1, c2, colls);
};
G__6823.cljs$lang$maxFixedArity = 2;
G__6823.cljs$lang$applyTo = (function (arglist__6824){
var c1 = cljs.core.first(arglist__6824);
var c2 = cljs.core.first(cljs.core.next(arglist__6824));
var colls = cljs.core.rest(cljs.core.next(arglist__6824));
return G__6823__delegate.call(this, c1, c2, colls);
});
return G__6823;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__6820.call(this,c1,c2);
default:
return interleave__6821.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__6821.cljs$lang$applyTo;
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
var cat__6827 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____6825 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____6825))
{var coll__6826 = temp__3695__auto____6825;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__6826),cat.call(null,cljs.core.rest.call(null,coll__6826),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__6827.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__6828 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__6829 = (function() { 
var G__6831__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__6831 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6831__delegate.call(this, f, coll, colls);
};
G__6831.cljs$lang$maxFixedArity = 2;
G__6831.cljs$lang$applyTo = (function (arglist__6832){
var f = cljs.core.first(arglist__6832);
var coll = cljs.core.first(cljs.core.next(arglist__6832));
var colls = cljs.core.rest(cljs.core.next(arglist__6832));
return G__6831__delegate.call(this, f, coll, colls);
});
return G__6831;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__6828.call(this,f,coll);
default:
return mapcat__6829.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__6829.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6833 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6833))
{var s__6834 = temp__3698__auto____6833;

var f__6835 = cljs.core.first.call(null,s__6834);
var r__6836 = cljs.core.rest.call(null,s__6834);

if(cljs.core.truth_(pred.call(null,f__6835)))
{return cljs.core.cons.call(null,f__6835,filter.call(null,pred,r__6836));
} else
{return filter.call(null,pred,r__6836);
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
var walk__6838 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__6838.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__6837_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__6837_SHARP_));
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
var partition__6845 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__6846 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6839 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6839))
{var s__6840 = temp__3698__auto____6839;

var p__6841 = cljs.core.take.call(null,n,s__6840);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__6841))))
{return cljs.core.cons.call(null,p__6841,partition.call(null,n,step,cljs.core.drop.call(null,step,s__6840)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__6847 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6842 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6842))
{var s__6843 = temp__3698__auto____6842;

var p__6844 = cljs.core.take.call(null,n,s__6843);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__6844))))
{return cljs.core.cons.call(null,p__6844,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__6843)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__6844,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__6845.call(this,n,step);
case  3 :
return partition__6846.call(this,n,step,pad);
case  4 :
return partition__6847.call(this,n,step,pad,coll);
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
var get_in__6853 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__6854 = (function (m,ks,not_found){
var sentinel__6849 = cljs.core.lookup_sentinel;
var m__6850 = m;
var ks__6851 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__6851))
{var m__6852 = cljs.core.get.call(null,m__6850,cljs.core.first.call(null,ks__6851),sentinel__6849);

if(cljs.core.truth_((sentinel__6849 === m__6852)))
{return not_found;
} else
{{
var G__6856 = sentinel__6849;
var G__6857 = m__6852;
var G__6858 = cljs.core.next.call(null,ks__6851);
sentinel__6849 = G__6856;
m__6850 = G__6857;
ks__6851 = G__6858;
continue;
}
}
} else
{return m__6850;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__6853.call(this,m,ks);
case  3 :
return get_in__6854.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__6859,v){
var vec__6860__6861 = p__6859;
var k__6862 = cljs.core.nth.call(null,vec__6860__6861,0,null);
var ks__6863 = cljs.core.nthnext.call(null,vec__6860__6861,1);

if(cljs.core.truth_(ks__6863))
{return cljs.core.assoc.call(null,m,k__6862,assoc_in.call(null,cljs.core.get.call(null,m,k__6862),ks__6863,v));
} else
{return cljs.core.assoc.call(null,m,k__6862,v);
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
var update_in__delegate = function (m,p__6864,f,args){
var vec__6865__6866 = p__6864;
var k__6867 = cljs.core.nth.call(null,vec__6865__6866,0,null);
var ks__6868 = cljs.core.nthnext.call(null,vec__6865__6866,1);

if(cljs.core.truth_(ks__6868))
{return cljs.core.assoc.call(null,m,k__6867,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__6867),ks__6868,f,args));
} else
{return cljs.core.assoc.call(null,m,k__6867,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__6867),args));
}
};
var update_in = function (m,p__6864,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__6864, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__6869){
var m = cljs.core.first(arglist__6869);
var p__6864 = cljs.core.first(cljs.core.next(arglist__6869));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6869)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6869)));
return update_in__delegate.call(this, m, p__6864, f, args);
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
var this__6870 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6903 = null;
var G__6903__6904 = (function (coll,k){
var this__6871 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__6903__6905 = (function (coll,k,not_found){
var this__6872 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__6903 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6903__6904.call(this,coll,k);
case  3 :
return G__6903__6905.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6903;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__6873 = this;
var new_array__6874 = cljs.core.aclone.call(null,this__6873.array);

(new_array__6874[k] = v);
return (new cljs.core.Vector(this__6873.meta,new_array__6874));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__6907 = null;
var G__6907__6908 = (function (tsym6875,k){
var this__6877 = this;
var tsym6875__6878 = this;

var coll__6879 = tsym6875__6878;

return cljs.core._lookup.call(null,coll__6879,k);
});
var G__6907__6909 = (function (tsym6876,k,not_found){
var this__6880 = this;
var tsym6876__6881 = this;

var coll__6882 = tsym6876__6881;

return cljs.core._lookup.call(null,coll__6882,k,not_found);
});
G__6907 = function(tsym6876,k,not_found){
switch(arguments.length){
case  2 :
return G__6907__6908.call(this,tsym6876,k);
case  3 :
return G__6907__6909.call(this,tsym6876,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6907;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6883 = this;
var new_array__6884 = cljs.core.aclone.call(null,this__6883.array);

new_array__6884.push(o);
return (new cljs.core.Vector(this__6883.meta,new_array__6884));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__6911 = null;
var G__6911__6912 = (function (v,f){
var this__6885 = this;
return cljs.core.ci_reduce.call(null,this__6885.array,f);
});
var G__6911__6913 = (function (v,f,start){
var this__6886 = this;
return cljs.core.ci_reduce.call(null,this__6886.array,f,start);
});
G__6911 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__6911__6912.call(this,v,f);
case  3 :
return G__6911__6913.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6911;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6887 = this;
if(cljs.core.truth_((this__6887.array.length > 0)))
{var vector_seq__6888 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__6887.array.length)))
{return cljs.core.cons.call(null,(this__6887.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__6888.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6889 = this;
return this__6889.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__6890 = this;
var count__6891 = this__6890.array.length;

if(cljs.core.truth_((count__6891 > 0)))
{return (this__6890.array[(count__6891 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__6892 = this;
if(cljs.core.truth_((this__6892.array.length > 0)))
{var new_array__6893 = cljs.core.aclone.call(null,this__6892.array);

new_array__6893.pop();
return (new cljs.core.Vector(this__6892.meta,new_array__6893));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__6894 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6895 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6896 = this;
return (new cljs.core.Vector(meta,this__6896.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6897 = this;
return this__6897.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__6915 = null;
var G__6915__6916 = (function (coll,n){
var this__6898 = this;
if(cljs.core.truth_((function (){var and__3546__auto____6899 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____6899))
{return (n < this__6898.array.length);
} else
{return and__3546__auto____6899;
}
})()))
{return (this__6898.array[n]);
} else
{return null;
}
});
var G__6915__6917 = (function (coll,n,not_found){
var this__6900 = this;
if(cljs.core.truth_((function (){var and__3546__auto____6901 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____6901))
{return (n < this__6900.array.length);
} else
{return and__3546__auto____6901;
}
})()))
{return (this__6900.array[n]);
} else
{return not_found;
}
});
G__6915 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__6915__6916.call(this,coll,n);
case  3 :
return G__6915__6917.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6915;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6902 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__6902.meta);
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
vector.cljs$lang$applyTo = (function (arglist__6919){
var args = cljs.core.seq( arglist__6919 );;
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
var this__6920 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6948 = null;
var G__6948__6949 = (function (coll,k){
var this__6921 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__6948__6950 = (function (coll,k,not_found){
var this__6922 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__6948 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6948__6949.call(this,coll,k);
case  3 :
return G__6948__6950.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6948;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__6923 = this;
var v_pos__6924 = (this__6923.start + key);

return (new cljs.core.Subvec(this__6923.meta,cljs.core._assoc.call(null,this__6923.v,v_pos__6924,val),this__6923.start,((this__6923.end > (v_pos__6924 + 1)) ? this__6923.end : (v_pos__6924 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__6952 = null;
var G__6952__6953 = (function (tsym6925,k){
var this__6927 = this;
var tsym6925__6928 = this;

var coll__6929 = tsym6925__6928;

return cljs.core._lookup.call(null,coll__6929,k);
});
var G__6952__6954 = (function (tsym6926,k,not_found){
var this__6930 = this;
var tsym6926__6931 = this;

var coll__6932 = tsym6926__6931;

return cljs.core._lookup.call(null,coll__6932,k,not_found);
});
G__6952 = function(tsym6926,k,not_found){
switch(arguments.length){
case  2 :
return G__6952__6953.call(this,tsym6926,k);
case  3 :
return G__6952__6954.call(this,tsym6926,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6952;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6933 = this;
return (new cljs.core.Subvec(this__6933.meta,cljs.core._assoc_n.call(null,this__6933.v,this__6933.end,o),this__6933.start,(this__6933.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__6956 = null;
var G__6956__6957 = (function (coll,f){
var this__6934 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__6956__6958 = (function (coll,f,start){
var this__6935 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__6956 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__6956__6957.call(this,coll,f);
case  3 :
return G__6956__6958.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6956;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6936 = this;
var subvec_seq__6937 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__6936.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__6936.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__6937.call(null,this__6936.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6938 = this;
return (this__6938.end - this__6938.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__6939 = this;
return cljs.core._nth.call(null,this__6939.v,(this__6939.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__6940 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__6940.start,this__6940.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__6940.meta,this__6940.v,this__6940.start,(this__6940.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__6941 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6942 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6943 = this;
return (new cljs.core.Subvec(meta,this__6943.v,this__6943.start,this__6943.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6944 = this;
return this__6944.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__6960 = null;
var G__6960__6961 = (function (coll,n){
var this__6945 = this;
return cljs.core._nth.call(null,this__6945.v,(this__6945.start + n));
});
var G__6960__6962 = (function (coll,n,not_found){
var this__6946 = this;
return cljs.core._nth.call(null,this__6946.v,(this__6946.start + n),not_found);
});
G__6960 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__6960__6961.call(this,coll,n);
case  3 :
return G__6960__6962.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6960;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6947 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__6947.meta);
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
var subvec__6964 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__6965 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__6964.call(this,v,start);
case  3 :
return subvec__6965.call(this,v,start,end);
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
var this__6967 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__6968 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6969 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6970 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6970.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6971 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__6972 = this;
return cljs.core._first.call(null,this__6972.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__6973 = this;
var temp__3695__auto____6974 = cljs.core.next.call(null,this__6973.front);

if(cljs.core.truth_(temp__3695__auto____6974))
{var f1__6975 = temp__3695__auto____6974;

return (new cljs.core.PersistentQueueSeq(this__6973.meta,f1__6975,this__6973.rear));
} else
{if(cljs.core.truth_((this__6973.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__6973.meta,this__6973.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6976 = this;
return this__6976.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6977 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__6977.front,this__6977.rear));
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
var this__6978 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6979 = this;
if(cljs.core.truth_(this__6979.front))
{return (new cljs.core.PersistentQueue(this__6979.meta,(this__6979.count + 1),this__6979.front,cljs.core.conj.call(null,(function (){var or__3548__auto____6980 = this__6979.rear;

if(cljs.core.truth_(or__3548__auto____6980))
{return or__3548__auto____6980;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__6979.meta,(this__6979.count + 1),cljs.core.conj.call(null,this__6979.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6981 = this;
var rear__6982 = cljs.core.seq.call(null,this__6981.rear);

if(cljs.core.truth_((function (){var or__3548__auto____6983 = this__6981.front;

if(cljs.core.truth_(or__3548__auto____6983))
{return or__3548__auto____6983;
} else
{return rear__6982;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__6981.front,cljs.core.seq.call(null,rear__6982)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6984 = this;
return this__6984.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__6985 = this;
return cljs.core._first.call(null,this__6985.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__6986 = this;
if(cljs.core.truth_(this__6986.front))
{var temp__3695__auto____6987 = cljs.core.next.call(null,this__6986.front);

if(cljs.core.truth_(temp__3695__auto____6987))
{var f1__6988 = temp__3695__auto____6987;

return (new cljs.core.PersistentQueue(this__6986.meta,(this__6986.count - 1),f1__6988,this__6986.rear));
} else
{return (new cljs.core.PersistentQueue(this__6986.meta,(this__6986.count - 1),cljs.core.seq.call(null,this__6986.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__6989 = this;
return cljs.core.first.call(null,this__6989.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__6990 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6991 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6992 = this;
return (new cljs.core.PersistentQueue(meta,this__6992.count,this__6992.front,this__6992.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6993 = this;
return this__6993.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6994 = this;
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
var this__6995 = this;
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
var len__6996 = array.length;

var i__6997 = 0;

while(true){
if(cljs.core.truth_((i__6997 < len__6996)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__6997]))))
{return i__6997;
} else
{{
var G__6998 = (i__6997 + incr);
i__6997 = G__6998;
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
var obj_map_contains_key_QMARK___7000 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___7001 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____6999 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____6999))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____6999;
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
return obj_map_contains_key_QMARK___7000.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___7001.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__7004 = cljs.core.hash.call(null,a);
var b__7005 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__7004 < b__7005)))
{return -1;
} else
{if(cljs.core.truth_((a__7004 > b__7005)))
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
var this__7006 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__7033 = null;
var G__7033__7034 = (function (coll,k){
var this__7007 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__7033__7035 = (function (coll,k,not_found){
var this__7008 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__7008.strobj,(this__7008.strobj[k]),not_found);
});
G__7033 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__7033__7034.call(this,coll,k);
case  3 :
return G__7033__7035.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7033;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__7009 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__7010 = goog.object.clone.call(null,this__7009.strobj);
var overwrite_QMARK___7011 = new_strobj__7010.hasOwnProperty(k);

(new_strobj__7010[k] = v);
if(cljs.core.truth_(overwrite_QMARK___7011))
{return (new cljs.core.ObjMap(this__7009.meta,this__7009.keys,new_strobj__7010));
} else
{var new_keys__7012 = cljs.core.aclone.call(null,this__7009.keys);

new_keys__7012.push(k);
return (new cljs.core.ObjMap(this__7009.meta,new_keys__7012,new_strobj__7010));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__7009.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__7013 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__7013.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__7037 = null;
var G__7037__7038 = (function (tsym7014,k){
var this__7016 = this;
var tsym7014__7017 = this;

var coll__7018 = tsym7014__7017;

return cljs.core._lookup.call(null,coll__7018,k);
});
var G__7037__7039 = (function (tsym7015,k,not_found){
var this__7019 = this;
var tsym7015__7020 = this;

var coll__7021 = tsym7015__7020;

return cljs.core._lookup.call(null,coll__7021,k,not_found);
});
G__7037 = function(tsym7015,k,not_found){
switch(arguments.length){
case  2 :
return G__7037__7038.call(this,tsym7015,k);
case  3 :
return G__7037__7039.call(this,tsym7015,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7037;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__7022 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7023 = this;
if(cljs.core.truth_((this__7023.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__7003_SHARP_){
return cljs.core.vector.call(null,p1__7003_SHARP_,(this__7023.strobj[p1__7003_SHARP_]));
}),this__7023.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7024 = this;
return this__7024.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7025 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7026 = this;
return (new cljs.core.ObjMap(meta,this__7026.keys,this__7026.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7027 = this;
return this__7027.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7028 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__7028.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__7029 = this;
if(cljs.core.truth_((function (){var and__3546__auto____7030 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____7030))
{return this__7029.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____7030;
}
})()))
{var new_keys__7031 = cljs.core.aclone.call(null,this__7029.keys);
var new_strobj__7032 = goog.object.clone.call(null,this__7029.strobj);

new_keys__7031.splice(cljs.core.scan_array.call(null,1,k,new_keys__7031),1);
cljs.core.js_delete.call(null,new_strobj__7032,k);
return (new cljs.core.ObjMap(this__7029.meta,new_keys__7031,new_strobj__7032));
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
var this__7042 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__7080 = null;
var G__7080__7081 = (function (coll,k){
var this__7043 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__7080__7082 = (function (coll,k,not_found){
var this__7044 = this;
var bucket__7045 = (this__7044.hashobj[cljs.core.hash.call(null,k)]);
var i__7046 = (cljs.core.truth_(bucket__7045)?cljs.core.scan_array.call(null,2,k,bucket__7045):null);

if(cljs.core.truth_(i__7046))
{return (bucket__7045[(i__7046 + 1)]);
} else
{return not_found;
}
});
G__7080 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__7080__7081.call(this,coll,k);
case  3 :
return G__7080__7082.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7080;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__7047 = this;
var h__7048 = cljs.core.hash.call(null,k);
var bucket__7049 = (this__7047.hashobj[h__7048]);

if(cljs.core.truth_(bucket__7049))
{var new_bucket__7050 = cljs.core.aclone.call(null,bucket__7049);
var new_hashobj__7051 = goog.object.clone.call(null,this__7047.hashobj);

(new_hashobj__7051[h__7048] = new_bucket__7050);
var temp__3695__auto____7052 = cljs.core.scan_array.call(null,2,k,new_bucket__7050);

if(cljs.core.truth_(temp__3695__auto____7052))
{var i__7053 = temp__3695__auto____7052;

(new_bucket__7050[(i__7053 + 1)] = v);
return (new cljs.core.HashMap(this__7047.meta,this__7047.count,new_hashobj__7051));
} else
{new_bucket__7050.push(k,v);
return (new cljs.core.HashMap(this__7047.meta,(this__7047.count + 1),new_hashobj__7051));
}
} else
{var new_hashobj__7054 = goog.object.clone.call(null,this__7047.hashobj);

(new_hashobj__7054[h__7048] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__7047.meta,(this__7047.count + 1),new_hashobj__7054));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__7055 = this;
var bucket__7056 = (this__7055.hashobj[cljs.core.hash.call(null,k)]);
var i__7057 = (cljs.core.truth_(bucket__7056)?cljs.core.scan_array.call(null,2,k,bucket__7056):null);

if(cljs.core.truth_(i__7057))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__7084 = null;
var G__7084__7085 = (function (tsym7058,k){
var this__7060 = this;
var tsym7058__7061 = this;

var coll__7062 = tsym7058__7061;

return cljs.core._lookup.call(null,coll__7062,k);
});
var G__7084__7086 = (function (tsym7059,k,not_found){
var this__7063 = this;
var tsym7059__7064 = this;

var coll__7065 = tsym7059__7064;

return cljs.core._lookup.call(null,coll__7065,k,not_found);
});
G__7084 = function(tsym7059,k,not_found){
switch(arguments.length){
case  2 :
return G__7084__7085.call(this,tsym7059,k);
case  3 :
return G__7084__7086.call(this,tsym7059,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7084;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__7066 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7067 = this;
if(cljs.core.truth_((this__7067.count > 0)))
{var hashes__7068 = cljs.core.js_keys.call(null,this__7067.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__7041_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__7067.hashobj[p1__7041_SHARP_])));
}),hashes__7068);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7069 = this;
return this__7069.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7070 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7071 = this;
return (new cljs.core.HashMap(meta,this__7071.count,this__7071.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7072 = this;
return this__7072.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7073 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__7073.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__7074 = this;
var h__7075 = cljs.core.hash.call(null,k);
var bucket__7076 = (this__7074.hashobj[h__7075]);
var i__7077 = (cljs.core.truth_(bucket__7076)?cljs.core.scan_array.call(null,2,k,bucket__7076):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__7077)))
{return coll;
} else
{var new_hashobj__7078 = goog.object.clone.call(null,this__7074.hashobj);

if(cljs.core.truth_((3 > bucket__7076.length)))
{cljs.core.js_delete.call(null,new_hashobj__7078,h__7075);
} else
{var new_bucket__7079 = cljs.core.aclone.call(null,bucket__7076);

new_bucket__7079.splice(i__7077,2);
(new_hashobj__7078[h__7075] = new_bucket__7079);
}
return (new cljs.core.HashMap(this__7074.meta,(this__7074.count - 1),new_hashobj__7078));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__7088 = ks.length;

var i__7089 = 0;
var out__7090 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__7089 < len__7088)))
{{
var G__7091 = (i__7089 + 1);
var G__7092 = cljs.core.assoc.call(null,out__7090,(ks[i__7089]),(vs[i__7089]));
i__7089 = G__7091;
out__7090 = G__7092;
continue;
}
} else
{return out__7090;
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
var in$__7093 = cljs.core.seq.call(null,keyvals);
var out__7094 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__7093))
{{
var G__7095 = cljs.core.nnext.call(null,in$__7093);
var G__7096 = cljs.core.assoc.call(null,out__7094,cljs.core.first.call(null,in$__7093),cljs.core.second.call(null,in$__7093));
in$__7093 = G__7095;
out__7094 = G__7096;
continue;
}
} else
{return out__7094;
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
hash_map.cljs$lang$applyTo = (function (arglist__7097){
var keyvals = cljs.core.seq( arglist__7097 );;
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
{return cljs.core.reduce.call(null,(function (p1__7098_SHARP_,p2__7099_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____7100 = p1__7098_SHARP_;

if(cljs.core.truth_(or__3548__auto____7100))
{return or__3548__auto____7100;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__7099_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__7101){
var maps = cljs.core.seq( arglist__7101 );;
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
{var merge_entry__7104 = (function (m,e){
var k__7102 = cljs.core.first.call(null,e);
var v__7103 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__7102)))
{return cljs.core.assoc.call(null,m,k__7102,f.call(null,cljs.core.get.call(null,m,k__7102),v__7103));
} else
{return cljs.core.assoc.call(null,m,k__7102,v__7103);
}
});
var merge2__7106 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__7104,(function (){var or__3548__auto____7105 = m1;

if(cljs.core.truth_(or__3548__auto____7105))
{return or__3548__auto____7105;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__7106,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__7107){
var f = cljs.core.first(arglist__7107);
var maps = cljs.core.rest(arglist__7107);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__7109 = cljs.core.ObjMap.fromObject([],{});
var keys__7110 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__7110))
{var key__7111 = cljs.core.first.call(null,keys__7110);
var entry__7112 = cljs.core.get.call(null,map,key__7111,"\uFDD0'user/not-found");

{
var G__7113 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__7112,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__7109,key__7111,entry__7112):ret__7109);
var G__7114 = cljs.core.next.call(null,keys__7110);
ret__7109 = G__7113;
keys__7110 = G__7114;
continue;
}
} else
{return ret__7109;
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
var this__7115 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__7136 = null;
var G__7136__7137 = (function (coll,v){
var this__7116 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__7136__7138 = (function (coll,v,not_found){
var this__7117 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__7117.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__7136 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__7136__7137.call(this,coll,v);
case  3 :
return G__7136__7138.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7136;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__7140 = null;
var G__7140__7141 = (function (tsym7118,k){
var this__7120 = this;
var tsym7118__7121 = this;

var coll__7122 = tsym7118__7121;

return cljs.core._lookup.call(null,coll__7122,k);
});
var G__7140__7142 = (function (tsym7119,k,not_found){
var this__7123 = this;
var tsym7119__7124 = this;

var coll__7125 = tsym7119__7124;

return cljs.core._lookup.call(null,coll__7125,k,not_found);
});
G__7140 = function(tsym7119,k,not_found){
switch(arguments.length){
case  2 :
return G__7140__7141.call(this,tsym7119,k);
case  3 :
return G__7140__7142.call(this,tsym7119,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7140;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7126 = this;
return (new cljs.core.Set(this__7126.meta,cljs.core.assoc.call(null,this__7126.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7127 = this;
return cljs.core.keys.call(null,this__7127.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__7128 = this;
return (new cljs.core.Set(this__7128.meta,cljs.core.dissoc.call(null,this__7128.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7129 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7130 = this;
var and__3546__auto____7131 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____7131))
{var and__3546__auto____7132 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____7132))
{return cljs.core.every_QMARK_.call(null,(function (p1__7108_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__7108_SHARP_);
}),other);
} else
{return and__3546__auto____7132;
}
} else
{return and__3546__auto____7131;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7133 = this;
return (new cljs.core.Set(meta,this__7133.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7134 = this;
return this__7134.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7135 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__7135.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__7145 = cljs.core.seq.call(null,coll);
var out__7146 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__7145))))
{{
var G__7147 = cljs.core.rest.call(null,in$__7145);
var G__7148 = cljs.core.conj.call(null,out__7146,cljs.core.first.call(null,in$__7145));
in$__7145 = G__7147;
out__7146 = G__7148;
continue;
}
} else
{return out__7146;
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
{var n__7149 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____7150 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____7150))
{var e__7151 = temp__3695__auto____7150;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__7151));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__7149,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__7144_SHARP_){
var temp__3695__auto____7152 = cljs.core.find.call(null,smap,p1__7144_SHARP_);

if(cljs.core.truth_(temp__3695__auto____7152))
{var e__7153 = temp__3695__auto____7152;

return cljs.core.second.call(null,e__7153);
} else
{return p1__7144_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__7161 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__7154,seen){
while(true){
var vec__7155__7156 = p__7154;
var f__7157 = cljs.core.nth.call(null,vec__7155__7156,0,null);
var xs__7158 = vec__7155__7156;

var temp__3698__auto____7159 = cljs.core.seq.call(null,xs__7158);

if(cljs.core.truth_(temp__3698__auto____7159))
{var s__7160 = temp__3698__auto____7159;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__7157)))
{{
var G__7162 = cljs.core.rest.call(null,s__7160);
var G__7163 = seen;
p__7154 = G__7162;
seen = G__7163;
continue;
}
} else
{return cljs.core.cons.call(null,f__7157,step.call(null,cljs.core.rest.call(null,s__7160),cljs.core.conj.call(null,seen,f__7157)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__7161.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__7164 = cljs.core.Vector.fromArray([]);
var s__7165 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__7165)))
{{
var G__7166 = cljs.core.conj.call(null,ret__7164,cljs.core.first.call(null,s__7165));
var G__7167 = cljs.core.next.call(null,s__7165);
ret__7164 = G__7166;
s__7165 = G__7167;
continue;
}
} else
{return cljs.core.seq.call(null,ret__7164);
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
{if(cljs.core.truth_((function (){var or__3548__auto____7168 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____7168))
{return or__3548__auto____7168;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__7169 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__7169 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__7169 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____7170 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____7170))
{return or__3548__auto____7170;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__7171 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__7171 > -1)))
{return cljs.core.subs.call(null,x,2,i__7171);
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
var map__7174 = cljs.core.ObjMap.fromObject([],{});
var ks__7175 = cljs.core.seq.call(null,keys);
var vs__7176 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____7177 = ks__7175;

if(cljs.core.truth_(and__3546__auto____7177))
{return vs__7176;
} else
{return and__3546__auto____7177;
}
})()))
{{
var G__7178 = cljs.core.assoc.call(null,map__7174,cljs.core.first.call(null,ks__7175),cljs.core.first.call(null,vs__7176));
var G__7179 = cljs.core.next.call(null,ks__7175);
var G__7180 = cljs.core.next.call(null,vs__7176);
map__7174 = G__7178;
ks__7175 = G__7179;
vs__7176 = G__7180;
continue;
}
} else
{return map__7174;
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
var max_key__7183 = (function (k,x){
return x;
});
var max_key__7184 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__7185 = (function() { 
var G__7187__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__7172_SHARP_,p2__7173_SHARP_){
return max_key.call(null,k,p1__7172_SHARP_,p2__7173_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__7187 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7187__delegate.call(this, k, x, y, more);
};
G__7187.cljs$lang$maxFixedArity = 3;
G__7187.cljs$lang$applyTo = (function (arglist__7188){
var k = cljs.core.first(arglist__7188);
var x = cljs.core.first(cljs.core.next(arglist__7188));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7188)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7188)));
return G__7187__delegate.call(this, k, x, y, more);
});
return G__7187;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__7183.call(this,k,x);
case  3 :
return max_key__7184.call(this,k,x,y);
default:
return max_key__7185.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__7185.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__7189 = (function (k,x){
return x;
});
var min_key__7190 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__7191 = (function() { 
var G__7193__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__7181_SHARP_,p2__7182_SHARP_){
return min_key.call(null,k,p1__7181_SHARP_,p2__7182_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__7193 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7193__delegate.call(this, k, x, y, more);
};
G__7193.cljs$lang$maxFixedArity = 3;
G__7193.cljs$lang$applyTo = (function (arglist__7194){
var k = cljs.core.first(arglist__7194);
var x = cljs.core.first(cljs.core.next(arglist__7194));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7194)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7194)));
return G__7193__delegate.call(this, k, x, y, more);
});
return G__7193;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__7189.call(this,k,x);
case  3 :
return min_key__7190.call(this,k,x,y);
default:
return min_key__7191.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__7191.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__7197 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__7198 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7195 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7195))
{var s__7196 = temp__3698__auto____7195;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__7196),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__7196)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__7197.call(this,n,step);
case  3 :
return partition_all__7198.call(this,n,step,coll);
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
var temp__3698__auto____7200 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7200))
{var s__7201 = temp__3698__auto____7200;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__7201))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7201),take_while.call(null,pred,cljs.core.rest.call(null,s__7201)));
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
var this__7202 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__7203 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__7219 = null;
var G__7219__7220 = (function (rng,f){
var this__7204 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__7219__7221 = (function (rng,f,s){
var this__7205 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__7219 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__7219__7220.call(this,rng,f);
case  3 :
return G__7219__7221.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7219;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__7206 = this;
var comp__7207 = (cljs.core.truth_((this__7206.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__7207.call(null,this__7206.start,this__7206.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__7208 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__7208.end - this__7208.start) / this__7208.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__7209 = this;
return this__7209.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__7210 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__7210.meta,(this__7210.start + this__7210.step),this__7210.end,this__7210.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__7211 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__7212 = this;
return (new cljs.core.Range(meta,this__7212.start,this__7212.end,this__7212.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__7213 = this;
return this__7213.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7223 = null;
var G__7223__7224 = (function (rng,n){
var this__7214 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__7214.start + (n * this__7214.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____7215 = (this__7214.start > this__7214.end);

if(cljs.core.truth_(and__3546__auto____7215))
{return cljs.core._EQ_.call(null,this__7214.step,0);
} else
{return and__3546__auto____7215;
}
})()))
{return this__7214.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__7223__7225 = (function (rng,n,not_found){
var this__7216 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__7216.start + (n * this__7216.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____7217 = (this__7216.start > this__7216.end);

if(cljs.core.truth_(and__3546__auto____7217))
{return cljs.core._EQ_.call(null,this__7216.step,0);
} else
{return and__3546__auto____7217;
}
})()))
{return this__7216.start;
} else
{return not_found;
}
}
});
G__7223 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__7223__7224.call(this,rng,n);
case  3 :
return G__7223__7225.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7223;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__7218 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7218.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__7227 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__7228 = (function (end){
return range.call(null,0,end,1);
});
var range__7229 = (function (start,end){
return range.call(null,start,end,1);
});
var range__7230 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__7227.call(this);
case  1 :
return range__7228.call(this,start);
case  2 :
return range__7229.call(this,start,end);
case  3 :
return range__7230.call(this,start,end,step);
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
var temp__3698__auto____7232 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7232))
{var s__7233 = temp__3698__auto____7232;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__7233),take_nth.call(null,n,cljs.core.drop.call(null,n,s__7233)));
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
var temp__3698__auto____7235 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7235))
{var s__7236 = temp__3698__auto____7235;

var fst__7237 = cljs.core.first.call(null,s__7236);
var fv__7238 = f.call(null,fst__7237);
var run__7239 = cljs.core.cons.call(null,fst__7237,cljs.core.take_while.call(null,(function (p1__7234_SHARP_){
return cljs.core._EQ_.call(null,fv__7238,f.call(null,p1__7234_SHARP_));
}),cljs.core.next.call(null,s__7236)));

return cljs.core.cons.call(null,run__7239,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__7239),s__7236))));
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
var reductions__7254 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____7250 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____7250))
{var s__7251 = temp__3695__auto____7250;

return reductions.call(null,f,cljs.core.first.call(null,s__7251),cljs.core.rest.call(null,s__7251));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__7255 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7252 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7252))
{var s__7253 = temp__3698__auto____7252;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__7253)),cljs.core.rest.call(null,s__7253));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__7254.call(this,f,init);
case  3 :
return reductions__7255.call(this,f,init,coll);
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
var juxt__7258 = (function (f){
return (function() {
var G__7263 = null;
var G__7263__7264 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__7263__7265 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__7263__7266 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__7263__7267 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__7263__7268 = (function() { 
var G__7270__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__7270 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7270__delegate.call(this, x, y, z, args);
};
G__7270.cljs$lang$maxFixedArity = 3;
G__7270.cljs$lang$applyTo = (function (arglist__7271){
var x = cljs.core.first(arglist__7271);
var y = cljs.core.first(cljs.core.next(arglist__7271));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7271)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7271)));
return G__7270__delegate.call(this, x, y, z, args);
});
return G__7270;
})()
;
G__7263 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__7263__7264.call(this);
case  1 :
return G__7263__7265.call(this,x);
case  2 :
return G__7263__7266.call(this,x,y);
case  3 :
return G__7263__7267.call(this,x,y,z);
default:
return G__7263__7268.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7263.cljs$lang$maxFixedArity = 3;
G__7263.cljs$lang$applyTo = G__7263__7268.cljs$lang$applyTo;
return G__7263;
})()
});
var juxt__7259 = (function (f,g){
return (function() {
var G__7272 = null;
var G__7272__7273 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__7272__7274 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__7272__7275 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__7272__7276 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__7272__7277 = (function() { 
var G__7279__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7279 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7279__delegate.call(this, x, y, z, args);
};
G__7279.cljs$lang$maxFixedArity = 3;
G__7279.cljs$lang$applyTo = (function (arglist__7280){
var x = cljs.core.first(arglist__7280);
var y = cljs.core.first(cljs.core.next(arglist__7280));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7280)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7280)));
return G__7279__delegate.call(this, x, y, z, args);
});
return G__7279;
})()
;
G__7272 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__7272__7273.call(this);
case  1 :
return G__7272__7274.call(this,x);
case  2 :
return G__7272__7275.call(this,x,y);
case  3 :
return G__7272__7276.call(this,x,y,z);
default:
return G__7272__7277.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7272.cljs$lang$maxFixedArity = 3;
G__7272.cljs$lang$applyTo = G__7272__7277.cljs$lang$applyTo;
return G__7272;
})()
});
var juxt__7260 = (function (f,g,h){
return (function() {
var G__7281 = null;
var G__7281__7282 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__7281__7283 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__7281__7284 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__7281__7285 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__7281__7286 = (function() { 
var G__7288__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__7288 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7288__delegate.call(this, x, y, z, args);
};
G__7288.cljs$lang$maxFixedArity = 3;
G__7288.cljs$lang$applyTo = (function (arglist__7289){
var x = cljs.core.first(arglist__7289);
var y = cljs.core.first(cljs.core.next(arglist__7289));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7289)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7289)));
return G__7288__delegate.call(this, x, y, z, args);
});
return G__7288;
})()
;
G__7281 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__7281__7282.call(this);
case  1 :
return G__7281__7283.call(this,x);
case  2 :
return G__7281__7284.call(this,x,y);
case  3 :
return G__7281__7285.call(this,x,y,z);
default:
return G__7281__7286.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7281.cljs$lang$maxFixedArity = 3;
G__7281.cljs$lang$applyTo = G__7281__7286.cljs$lang$applyTo;
return G__7281;
})()
});
var juxt__7261 = (function() { 
var G__7290__delegate = function (f,g,h,fs){
var fs__7257 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__7291 = null;
var G__7291__7292 = (function (){
return cljs.core.reduce.call(null,(function (p1__7240_SHARP_,p2__7241_SHARP_){
return cljs.core.conj.call(null,p1__7240_SHARP_,p2__7241_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__7257);
});
var G__7291__7293 = (function (x){
return cljs.core.reduce.call(null,(function (p1__7242_SHARP_,p2__7243_SHARP_){
return cljs.core.conj.call(null,p1__7242_SHARP_,p2__7243_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__7257);
});
var G__7291__7294 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__7244_SHARP_,p2__7245_SHARP_){
return cljs.core.conj.call(null,p1__7244_SHARP_,p2__7245_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__7257);
});
var G__7291__7295 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__7246_SHARP_,p2__7247_SHARP_){
return cljs.core.conj.call(null,p1__7246_SHARP_,p2__7247_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__7257);
});
var G__7291__7296 = (function() { 
var G__7298__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__7248_SHARP_,p2__7249_SHARP_){
return cljs.core.conj.call(null,p1__7248_SHARP_,cljs.core.apply.call(null,p2__7249_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__7257);
};
var G__7298 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7298__delegate.call(this, x, y, z, args);
};
G__7298.cljs$lang$maxFixedArity = 3;
G__7298.cljs$lang$applyTo = (function (arglist__7299){
var x = cljs.core.first(arglist__7299);
var y = cljs.core.first(cljs.core.next(arglist__7299));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7299)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7299)));
return G__7298__delegate.call(this, x, y, z, args);
});
return G__7298;
})()
;
G__7291 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__7291__7292.call(this);
case  1 :
return G__7291__7293.call(this,x);
case  2 :
return G__7291__7294.call(this,x,y);
case  3 :
return G__7291__7295.call(this,x,y,z);
default:
return G__7291__7296.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7291.cljs$lang$maxFixedArity = 3;
G__7291.cljs$lang$applyTo = G__7291__7296.cljs$lang$applyTo;
return G__7291;
})()
};
var G__7290 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7290__delegate.call(this, f, g, h, fs);
};
G__7290.cljs$lang$maxFixedArity = 3;
G__7290.cljs$lang$applyTo = (function (arglist__7300){
var f = cljs.core.first(arglist__7300);
var g = cljs.core.first(cljs.core.next(arglist__7300));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7300)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7300)));
return G__7290__delegate.call(this, f, g, h, fs);
});
return G__7290;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__7258.call(this,f);
case  2 :
return juxt__7259.call(this,f,g);
case  3 :
return juxt__7260.call(this,f,g,h);
default:
return juxt__7261.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__7261.cljs$lang$applyTo;
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
var dorun__7302 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__7305 = cljs.core.next.call(null,coll);
coll = G__7305;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__7303 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____7301 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____7301))
{return (n > 0);
} else
{return and__3546__auto____7301;
}
})()))
{{
var G__7306 = (n - 1);
var G__7307 = cljs.core.next.call(null,coll);
n = G__7306;
coll = G__7307;
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
return dorun__7302.call(this,n);
case  2 :
return dorun__7303.call(this,n,coll);
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
var doall__7308 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__7309 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__7308.call(this,n);
case  2 :
return doall__7309.call(this,n,coll);
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
var matches__7311 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__7311),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__7311),1)))
{return cljs.core.first.call(null,matches__7311);
} else
{return cljs.core.vec.call(null,matches__7311);
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
var matches__7312 = re.exec(s);

if(cljs.core.truth_((matches__7312 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__7312),1)))
{return cljs.core.first.call(null,matches__7312);
} else
{return cljs.core.vec.call(null,matches__7312);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__7313 = cljs.core.re_find.call(null,re,s);
var match_idx__7314 = s.search(re);
var match_str__7315 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__7313))?cljs.core.first.call(null,match_data__7313):match_data__7313);
var post_match__7316 = cljs.core.subs.call(null,s,(match_idx__7314 + cljs.core.count.call(null,match_str__7315)));

if(cljs.core.truth_(match_data__7313))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__7313,re_seq.call(null,re,post_match__7316));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__7318__7319 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___7320 = cljs.core.nth.call(null,vec__7318__7319,0,null);
var flags__7321 = cljs.core.nth.call(null,vec__7318__7319,1,null);
var pattern__7322 = cljs.core.nth.call(null,vec__7318__7319,2,null);

return (new RegExp(pattern__7322,flags__7321));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__7317_SHARP_){
return print_one.call(null,p1__7317_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____7323 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____7323))
{var and__3546__auto____7327 = (function (){var x__2312__auto____7324 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____7325 = x__2312__auto____7324;

if(cljs.core.truth_(and__3546__auto____7325))
{var and__3546__auto____7326 = x__2312__auto____7324.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____7326))
{return cljs.core.not.call(null,x__2312__auto____7324.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____7326;
}
} else
{return and__3546__auto____7325;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__2312__auto____7324);
}
})();

if(cljs.core.truth_(and__3546__auto____7327))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____7327;
}
} else
{return and__3546__auto____7323;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__2312__auto____7328 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____7329 = x__2312__auto____7328;

if(cljs.core.truth_(and__3546__auto____7329))
{var and__3546__auto____7330 = x__2312__auto____7328.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____7330))
{return cljs.core.not.call(null,x__2312__auto____7328.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____7330;
}
} else
{return and__3546__auto____7329;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__2312__auto____7328);
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
var first_obj__7331 = cljs.core.first.call(null,objs);
var sb__7332 = (new goog.string.StringBuffer());

var G__7333__7334 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__7333__7334))
{var obj__7335 = cljs.core.first.call(null,G__7333__7334);
var G__7333__7336 = G__7333__7334;

while(true){
if(cljs.core.truth_((obj__7335 === first_obj__7331)))
{} else
{sb__7332.append(" ");
}
var G__7337__7338 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__7335,opts));

if(cljs.core.truth_(G__7337__7338))
{var string__7339 = cljs.core.first.call(null,G__7337__7338);
var G__7337__7340 = G__7337__7338;

while(true){
sb__7332.append(string__7339);
var temp__3698__auto____7341 = cljs.core.next.call(null,G__7337__7340);

if(cljs.core.truth_(temp__3698__auto____7341))
{var G__7337__7342 = temp__3698__auto____7341;

{
var G__7345 = cljs.core.first.call(null,G__7337__7342);
var G__7346 = G__7337__7342;
string__7339 = G__7345;
G__7337__7340 = G__7346;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____7343 = cljs.core.next.call(null,G__7333__7336);

if(cljs.core.truth_(temp__3698__auto____7343))
{var G__7333__7344 = temp__3698__auto____7343;

{
var G__7347 = cljs.core.first.call(null,G__7333__7344);
var G__7348 = G__7333__7344;
obj__7335 = G__7347;
G__7333__7336 = G__7348;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__7332);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__7349 = cljs.core.first.call(null,objs);

var G__7350__7351 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__7350__7351))
{var obj__7352 = cljs.core.first.call(null,G__7350__7351);
var G__7350__7353 = G__7350__7351;

while(true){
if(cljs.core.truth_((obj__7352 === first_obj__7349)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__7354__7355 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__7352,opts));

if(cljs.core.truth_(G__7354__7355))
{var string__7356 = cljs.core.first.call(null,G__7354__7355);
var G__7354__7357 = G__7354__7355;

while(true){
cljs.core.string_print.call(null,string__7356);
var temp__3698__auto____7358 = cljs.core.next.call(null,G__7354__7357);

if(cljs.core.truth_(temp__3698__auto____7358))
{var G__7354__7359 = temp__3698__auto____7358;

{
var G__7362 = cljs.core.first.call(null,G__7354__7359);
var G__7363 = G__7354__7359;
string__7356 = G__7362;
G__7354__7357 = G__7363;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____7360 = cljs.core.next.call(null,G__7350__7353);

if(cljs.core.truth_(temp__3698__auto____7360))
{var G__7350__7361 = temp__3698__auto____7360;

{
var G__7364 = cljs.core.first.call(null,G__7350__7361);
var G__7365 = G__7350__7361;
obj__7352 = G__7364;
G__7350__7353 = G__7365;
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
pr_str.cljs$lang$applyTo = (function (arglist__7366){
var objs = cljs.core.seq( arglist__7366 );;
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
pr.cljs$lang$applyTo = (function (arglist__7367){
var objs = cljs.core.seq( arglist__7367 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__7368){
var objs = cljs.core.seq( arglist__7368 );;
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
println.cljs$lang$applyTo = (function (arglist__7369){
var objs = cljs.core.seq( arglist__7369 );;
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
prn.cljs$lang$applyTo = (function (arglist__7370){
var objs = cljs.core.seq( arglist__7370 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__7371 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__7371,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____7372 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____7372))
{var nspc__7373 = temp__3698__auto____7372;

return cljs.core.str.call(null,nspc__7373,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____7374 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____7374))
{var nspc__7375 = temp__3698__auto____7374;

return cljs.core.str.call(null,nspc__7375,"\/");
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
var pr_pair__7376 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__7376,"{",", ","}",opts,coll);
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
var this__7377 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__7378 = this;
var G__7379__7380 = cljs.core.seq.call(null,this__7378.watches);

if(cljs.core.truth_(G__7379__7380))
{var G__7382__7384 = cljs.core.first.call(null,G__7379__7380);
var vec__7383__7385 = G__7382__7384;
var key__7386 = cljs.core.nth.call(null,vec__7383__7385,0,null);
var f__7387 = cljs.core.nth.call(null,vec__7383__7385,1,null);
var G__7379__7388 = G__7379__7380;

var G__7382__7389 = G__7382__7384;
var G__7379__7390 = G__7379__7388;

while(true){
var vec__7391__7392 = G__7382__7389;
var key__7393 = cljs.core.nth.call(null,vec__7391__7392,0,null);
var f__7394 = cljs.core.nth.call(null,vec__7391__7392,1,null);
var G__7379__7395 = G__7379__7390;

f__7394.call(null,key__7393,this$,oldval,newval);
var temp__3698__auto____7396 = cljs.core.next.call(null,G__7379__7395);

if(cljs.core.truth_(temp__3698__auto____7396))
{var G__7379__7397 = temp__3698__auto____7396;

{
var G__7404 = cljs.core.first.call(null,G__7379__7397);
var G__7405 = G__7379__7397;
G__7382__7389 = G__7404;
G__7379__7390 = G__7405;
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
var this__7398 = this;
return this$.watches = cljs.core.assoc.call(null,this__7398.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__7399 = this;
return this$.watches = cljs.core.dissoc.call(null,this__7399.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__7400 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__7400.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__7401 = this;
return this__7401.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__7402 = this;
return this__7402.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__7403 = this;
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
var atom__7412 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__7413 = (function() { 
var G__7415__delegate = function (x,p__7406){
var map__7407__7408 = p__7406;
var map__7407__7409 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7407__7408))?cljs.core.apply.call(null,cljs.core.hash_map,map__7407__7408):map__7407__7408);
var validator__7410 = cljs.core.get.call(null,map__7407__7409,"\uFDD0'validator");
var meta__7411 = cljs.core.get.call(null,map__7407__7409,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__7411,validator__7410,null));
};
var G__7415 = function (x,var_args){
var p__7406 = null;
if (goog.isDef(var_args)) {
  p__7406 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7415__delegate.call(this, x, p__7406);
};
G__7415.cljs$lang$maxFixedArity = 1;
G__7415.cljs$lang$applyTo = (function (arglist__7416){
var x = cljs.core.first(arglist__7416);
var p__7406 = cljs.core.rest(arglist__7416);
return G__7415__delegate.call(this, x, p__7406);
});
return G__7415;
})()
;
atom = function(x,var_args){
var p__7406 = var_args;
switch(arguments.length){
case  1 :
return atom__7412.call(this,x);
default:
return atom__7413.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__7413.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____7417 = a.validator;

if(cljs.core.truth_(temp__3698__auto____7417))
{var validate__7418 = temp__3698__auto____7417;

if(cljs.core.truth_(validate__7418.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3073))))));
}
} else
{}
var old_value__7419 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__7419,new_value);
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
var swap_BANG___7420 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___7421 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___7422 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___7423 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___7424 = (function() { 
var G__7426__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__7426 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7426__delegate.call(this, a, f, x, y, z, more);
};
G__7426.cljs$lang$maxFixedArity = 5;
G__7426.cljs$lang$applyTo = (function (arglist__7427){
var a = cljs.core.first(arglist__7427);
var f = cljs.core.first(cljs.core.next(arglist__7427));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7427)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7427))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7427)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7427)))));
return G__7426__delegate.call(this, a, f, x, y, z, more);
});
return G__7426;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___7420.call(this,a,f);
case  3 :
return swap_BANG___7421.call(this,a,f,x);
case  4 :
return swap_BANG___7422.call(this,a,f,x,y);
case  5 :
return swap_BANG___7423.call(this,a,f,x,y,z);
default:
return swap_BANG___7424.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___7424.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__7428){
var iref = cljs.core.first(arglist__7428);
var f = cljs.core.first(cljs.core.next(arglist__7428));
var args = cljs.core.rest(cljs.core.next(arglist__7428));
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
var gensym__7429 = (function (){
return gensym.call(null,"G__");
});
var gensym__7430 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__7429.call(this);
case  1 :
return gensym__7430.call(this,prefix_string);
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
var this__7432 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__7432.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__7433 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__7433.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__7433.state,this__7433.f);
}
return cljs.core.deref.call(null,this__7433.state);
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
delay.cljs$lang$applyTo = (function (arglist__7434){
var body = cljs.core.seq( arglist__7434 );;
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
var map__7435__7436 = options;
var map__7435__7437 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7435__7436))?cljs.core.apply.call(null,cljs.core.hash_map,map__7435__7436):map__7435__7436);
var keywordize_keys__7438 = cljs.core.get.call(null,map__7435__7437,"\uFDD0'keywordize-keys");
var keyfn__7439 = (cljs.core.truth_(keywordize_keys__7438)?cljs.core.keyword:cljs.core.str);
var f__7445 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__2376__auto____7444 = (function iter__7440(s__7441){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7441__7442 = s__7441;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__7441__7442)))
{var k__7443 = cljs.core.first.call(null,s__7441__7442);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__7439.call(null,k__7443),thisfn.call(null,(x[k__7443]))]),iter__7440.call(null,cljs.core.rest.call(null,s__7441__7442)));
} else
{return null;
}
break;
}
})));
});

return iter__2376__auto____7444.call(null,cljs.core.js_keys.call(null,x));
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

return f__7445.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__7446){
var x = cljs.core.first(arglist__7446);
var options = cljs.core.rest(arglist__7446);
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
var mem__7447 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__7451__delegate = function (args){
var temp__3695__auto____7448 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__7447),args);

if(cljs.core.truth_(temp__3695__auto____7448))
{var v__7449 = temp__3695__auto____7448;

return v__7449;
} else
{var ret__7450 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__7447,cljs.core.assoc,args,ret__7450);
return ret__7450;
}
};
var G__7451 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7451__delegate.call(this, args);
};
G__7451.cljs$lang$maxFixedArity = 0;
G__7451.cljs$lang$applyTo = (function (arglist__7452){
var args = cljs.core.seq( arglist__7452 );;
return G__7451__delegate.call(this, args);
});
return G__7451;
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
var trampoline__7454 = (function (f){
while(true){
var ret__7453 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__7453)))
{{
var G__7457 = ret__7453;
f = G__7457;
continue;
}
} else
{return ret__7453;
}
break;
}
});
var trampoline__7455 = (function() { 
var G__7458__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__7458 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7458__delegate.call(this, f, args);
};
G__7458.cljs$lang$maxFixedArity = 1;
G__7458.cljs$lang$applyTo = (function (arglist__7459){
var f = cljs.core.first(arglist__7459);
var args = cljs.core.rest(arglist__7459);
return G__7458__delegate.call(this, f, args);
});
return G__7458;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__7454.call(this,f);
default:
return trampoline__7455.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__7455.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__7460 = (function (){
return rand.call(null,1);
});
var rand__7461 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__7460.call(this);
case  1 :
return rand__7461.call(this,n);
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
var k__7463 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__7463,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__7463,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___7472 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___7473 = (function (h,child,parent){
var or__3548__auto____7464 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____7464))
{return or__3548__auto____7464;
} else
{var or__3548__auto____7465 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____7465))
{return or__3548__auto____7465;
} else
{var and__3546__auto____7466 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____7466))
{var and__3546__auto____7467 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____7467))
{var and__3546__auto____7468 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____7468))
{var ret__7469 = true;
var i__7470 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____7471 = cljs.core.not.call(null,ret__7469);

if(cljs.core.truth_(or__3548__auto____7471))
{return or__3548__auto____7471;
} else
{return cljs.core._EQ_.call(null,i__7470,cljs.core.count.call(null,parent));
}
})()))
{return ret__7469;
} else
{{
var G__7475 = isa_QMARK_.call(null,h,child.call(null,i__7470),parent.call(null,i__7470));
var G__7476 = (i__7470 + 1);
ret__7469 = G__7475;
i__7470 = G__7476;
continue;
}
}
break;
}
} else
{return and__3546__auto____7468;
}
} else
{return and__3546__auto____7467;
}
} else
{return and__3546__auto____7466;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___7472.call(this,h,child);
case  3 :
return isa_QMARK___7473.call(this,h,child,parent);
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
var parents__7477 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__7478 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__7477.call(this,h);
case  2 :
return parents__7478.call(this,h,tag);
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
var ancestors__7480 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__7481 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__7480.call(this,h);
case  2 :
return ancestors__7481.call(this,h,tag);
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
var descendants__7483 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__7484 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__7483.call(this,h);
case  2 :
return descendants__7484.call(this,h,tag);
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
var derive__7494 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__7495 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3369))))));
}
var tp__7489 = "\uFDD0'parents".call(null,h);
var td__7490 = "\uFDD0'descendants".call(null,h);
var ta__7491 = "\uFDD0'ancestors".call(null,h);
var tf__7492 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____7493 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__7489.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__7491.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__7491.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__7489,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__7492.call(null,"\uFDD0'ancestors".call(null,h),tag,td__7490,parent,ta__7491),"\uFDD0'descendants":tf__7492.call(null,"\uFDD0'descendants".call(null,h),parent,ta__7491,tag,td__7490)});
})());

if(cljs.core.truth_(or__3548__auto____7493))
{return or__3548__auto____7493;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__7494.call(this,h,tag);
case  3 :
return derive__7495.call(this,h,tag,parent);
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
var underive__7501 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__7502 = (function (h,tag,parent){
var parentMap__7497 = "\uFDD0'parents".call(null,h);
var childsParents__7498 = (cljs.core.truth_(parentMap__7497.call(null,tag))?cljs.core.disj.call(null,parentMap__7497.call(null,tag),parent):cljs.core.set([]));
var newParents__7499 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__7498))?cljs.core.assoc.call(null,parentMap__7497,tag,childsParents__7498):cljs.core.dissoc.call(null,parentMap__7497,tag));
var deriv_seq__7500 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__7486_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__7486_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__7486_SHARP_),cljs.core.second.call(null,p1__7486_SHARP_)));
}),cljs.core.seq.call(null,newParents__7499)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__7497.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__7487_SHARP_,p2__7488_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__7487_SHARP_,p2__7488_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__7500));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__7501.call(this,h,tag);
case  3 :
return underive__7502.call(this,h,tag,parent);
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
var xprefs__7504 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____7506 = (cljs.core.truth_((function (){var and__3546__auto____7505 = xprefs__7504;

if(cljs.core.truth_(and__3546__auto____7505))
{return xprefs__7504.call(null,y);
} else
{return and__3546__auto____7505;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____7506))
{return or__3548__auto____7506;
} else
{var or__3548__auto____7508 = (function (){var ps__7507 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__7507) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__7507),prefer_table)))
{} else
{}
{
var G__7511 = cljs.core.rest.call(null,ps__7507);
ps__7507 = G__7511;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____7508))
{return or__3548__auto____7508;
} else
{var or__3548__auto____7510 = (function (){var ps__7509 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__7509) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__7509),y,prefer_table)))
{} else
{}
{
var G__7512 = cljs.core.rest.call(null,ps__7509);
ps__7509 = G__7512;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____7510))
{return or__3548__auto____7510;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____7513 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____7513))
{return or__3548__auto____7513;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__7522 = cljs.core.reduce.call(null,(function (be,p__7514){
var vec__7515__7516 = p__7514;
var k__7517 = cljs.core.nth.call(null,vec__7515__7516,0,null);
var ___7518 = cljs.core.nth.call(null,vec__7515__7516,1,null);
var e__7519 = vec__7515__7516;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__7517)))
{var be2__7521 = (cljs.core.truth_((function (){var or__3548__auto____7520 = (be === null);

if(cljs.core.truth_(or__3548__auto____7520))
{return or__3548__auto____7520;
} else
{return cljs.core.dominates.call(null,k__7517,cljs.core.first.call(null,be),prefer_table);
}
})())?e__7519:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__7521),k__7517,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__7517," and ",cljs.core.first.call(null,be2__7521),", and neither is preferred")));
}
return be2__7521;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__7522))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__7522));
return cljs.core.second.call(null,best_entry__7522);
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
if(cljs.core.truth_((function (){var and__3546__auto____7523 = mf;

if(cljs.core.truth_(and__3546__auto____7523))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____7523;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____7524 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____7524))
{return or__3548__auto____7524;
} else
{var or__3548__auto____7525 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____7525))
{return or__3548__auto____7525;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____7526 = mf;

if(cljs.core.truth_(and__3546__auto____7526))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____7526;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____7527 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____7527))
{return or__3548__auto____7527;
} else
{var or__3548__auto____7528 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____7528))
{return or__3548__auto____7528;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____7529 = mf;

if(cljs.core.truth_(and__3546__auto____7529))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____7529;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____7530 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____7530))
{return or__3548__auto____7530;
} else
{var or__3548__auto____7531 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____7531))
{return or__3548__auto____7531;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____7532 = mf;

if(cljs.core.truth_(and__3546__auto____7532))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____7532;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____7533 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____7533))
{return or__3548__auto____7533;
} else
{var or__3548__auto____7534 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____7534))
{return or__3548__auto____7534;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____7535 = mf;

if(cljs.core.truth_(and__3546__auto____7535))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____7535;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____7536 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____7536))
{return or__3548__auto____7536;
} else
{var or__3548__auto____7537 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____7537))
{return or__3548__auto____7537;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____7538 = mf;

if(cljs.core.truth_(and__3546__auto____7538))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____7538;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____7539 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____7539))
{return or__3548__auto____7539;
} else
{var or__3548__auto____7540 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____7540))
{return or__3548__auto____7540;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____7541 = mf;

if(cljs.core.truth_(and__3546__auto____7541))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____7541;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____7542 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____7542))
{return or__3548__auto____7542;
} else
{var or__3548__auto____7543 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____7543))
{return or__3548__auto____7543;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____7544 = mf;

if(cljs.core.truth_(and__3546__auto____7544))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____7544;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____7545 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____7545))
{return or__3548__auto____7545;
} else
{var or__3548__auto____7546 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____7546))
{return or__3548__auto____7546;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__7547 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__7548 = cljs.core._get_method.call(null,mf,dispatch_val__7547);

if(cljs.core.truth_(target_fn__7548))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__7547)));
}
return cljs.core.apply.call(null,target_fn__7548,args);
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
var this__7549 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__7550 = this;
cljs.core.swap_BANG_.call(null,this__7550.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__7550.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__7550.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__7550.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__7551 = this;
cljs.core.swap_BANG_.call(null,this__7551.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__7551.method_cache,this__7551.method_table,this__7551.cached_hierarchy,this__7551.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__7552 = this;
cljs.core.swap_BANG_.call(null,this__7552.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__7552.method_cache,this__7552.method_table,this__7552.cached_hierarchy,this__7552.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__7553 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__7553.cached_hierarchy),cljs.core.deref.call(null,this__7553.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__7553.method_cache,this__7553.method_table,this__7553.cached_hierarchy,this__7553.hierarchy);
}
var temp__3695__auto____7554 = cljs.core.deref.call(null,this__7553.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____7554))
{var target_fn__7555 = temp__3695__auto____7554;

return target_fn__7555;
} else
{var temp__3695__auto____7556 = cljs.core.find_and_cache_best_method.call(null,this__7553.name,dispatch_val,this__7553.hierarchy,this__7553.method_table,this__7553.prefer_table,this__7553.method_cache,this__7553.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____7556))
{var target_fn__7557 = temp__3695__auto____7556;

return target_fn__7557;
} else
{return cljs.core.deref.call(null,this__7553.method_table).call(null,this__7553.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__7558 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__7558.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__7558.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__7558.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__7558.method_cache,this__7558.method_table,this__7558.cached_hierarchy,this__7558.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__7559 = this;
return cljs.core.deref.call(null,this__7559.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__7560 = this;
return cljs.core.deref.call(null,this__7560.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__7561 = this;
return cljs.core.do_dispatch.call(null,mf,this__7561.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__7562__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__7562 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7562__delegate.call(this, _, args);
};
G__7562.cljs$lang$maxFixedArity = 1;
G__7562.cljs$lang$applyTo = (function (arglist__7563){
var _ = cljs.core.first(arglist__7563);
var args = cljs.core.rest(arglist__7563);
return G__7562__delegate.call(this, _, args);
});
return G__7562;
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
