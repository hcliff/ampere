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
var or__3548__auto____5139 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____5139))
{return or__3548__auto____5139;
} else
{var or__3548__auto____5140 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____5140))
{return or__3548__auto____5140;
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
var _invoke__5204 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____5141 = this$;

if(cljs.core.truth_(and__3546__auto____5141))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5141;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____5142 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5142))
{return or__3548__auto____5142;
} else
{var or__3548__auto____5143 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5143))
{return or__3548__auto____5143;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__5205 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____5144 = this$;

if(cljs.core.truth_(and__3546__auto____5144))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5144;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____5145 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5145))
{return or__3548__auto____5145;
} else
{var or__3548__auto____5146 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5146))
{return or__3548__auto____5146;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__5206 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____5147 = this$;

if(cljs.core.truth_(and__3546__auto____5147))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5147;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____5148 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5148))
{return or__3548__auto____5148;
} else
{var or__3548__auto____5149 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5149))
{return or__3548__auto____5149;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__5207 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____5150 = this$;

if(cljs.core.truth_(and__3546__auto____5150))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5150;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____5151 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5151))
{return or__3548__auto____5151;
} else
{var or__3548__auto____5152 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5152))
{return or__3548__auto____5152;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5208 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____5153 = this$;

if(cljs.core.truth_(and__3546__auto____5153))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5153;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____5154 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5154))
{return or__3548__auto____5154;
} else
{var or__3548__auto____5155 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5155))
{return or__3548__auto____5155;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__5209 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____5156 = this$;

if(cljs.core.truth_(and__3546__auto____5156))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5156;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____5157 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5157))
{return or__3548__auto____5157;
} else
{var or__3548__auto____5158 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5158))
{return or__3548__auto____5158;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__5210 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____5159 = this$;

if(cljs.core.truth_(and__3546__auto____5159))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5159;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____5160 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5160))
{return or__3548__auto____5160;
} else
{var or__3548__auto____5161 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5161))
{return or__3548__auto____5161;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__5211 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____5162 = this$;

if(cljs.core.truth_(and__3546__auto____5162))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5162;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____5163 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5163))
{return or__3548__auto____5163;
} else
{var or__3548__auto____5164 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5164))
{return or__3548__auto____5164;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__5212 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____5165 = this$;

if(cljs.core.truth_(and__3546__auto____5165))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5165;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____5166 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5166))
{return or__3548__auto____5166;
} else
{var or__3548__auto____5167 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5167))
{return or__3548__auto____5167;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__5213 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____5168 = this$;

if(cljs.core.truth_(and__3546__auto____5168))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5168;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____5169 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5169))
{return or__3548__auto____5169;
} else
{var or__3548__auto____5170 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5170))
{return or__3548__auto____5170;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__5214 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____5171 = this$;

if(cljs.core.truth_(and__3546__auto____5171))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5171;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____5172 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5172))
{return or__3548__auto____5172;
} else
{var or__3548__auto____5173 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5173))
{return or__3548__auto____5173;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__5215 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____5174 = this$;

if(cljs.core.truth_(and__3546__auto____5174))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5174;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____5175 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5175))
{return or__3548__auto____5175;
} else
{var or__3548__auto____5176 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5176))
{return or__3548__auto____5176;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__5216 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____5177 = this$;

if(cljs.core.truth_(and__3546__auto____5177))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5177;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____5178 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5178))
{return or__3548__auto____5178;
} else
{var or__3548__auto____5179 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5179))
{return or__3548__auto____5179;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__5217 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____5180 = this$;

if(cljs.core.truth_(and__3546__auto____5180))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5180;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____5181 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5181))
{return or__3548__auto____5181;
} else
{var or__3548__auto____5182 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5182))
{return or__3548__auto____5182;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__5218 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____5183 = this$;

if(cljs.core.truth_(and__3546__auto____5183))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5183;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____5184 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5184))
{return or__3548__auto____5184;
} else
{var or__3548__auto____5185 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5185))
{return or__3548__auto____5185;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__5219 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____5186 = this$;

if(cljs.core.truth_(and__3546__auto____5186))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5186;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____5187 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5187))
{return or__3548__auto____5187;
} else
{var or__3548__auto____5188 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5188))
{return or__3548__auto____5188;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__5220 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____5189 = this$;

if(cljs.core.truth_(and__3546__auto____5189))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5189;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____5190 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5190))
{return or__3548__auto____5190;
} else
{var or__3548__auto____5191 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5191))
{return or__3548__auto____5191;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__5221 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____5192 = this$;

if(cljs.core.truth_(and__3546__auto____5192))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5192;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____5193 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5193))
{return or__3548__auto____5193;
} else
{var or__3548__auto____5194 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5194))
{return or__3548__auto____5194;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__5222 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____5195 = this$;

if(cljs.core.truth_(and__3546__auto____5195))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5195;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____5196 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5196))
{return or__3548__auto____5196;
} else
{var or__3548__auto____5197 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5197))
{return or__3548__auto____5197;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__5223 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____5198 = this$;

if(cljs.core.truth_(and__3546__auto____5198))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5198;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____5199 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5199))
{return or__3548__auto____5199;
} else
{var or__3548__auto____5200 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5200))
{return or__3548__auto____5200;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__5224 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____5201 = this$;

if(cljs.core.truth_(and__3546__auto____5201))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5201;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____5202 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5202))
{return or__3548__auto____5202;
} else
{var or__3548__auto____5203 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5203))
{return or__3548__auto____5203;
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
return _invoke__5204.call(this,this$);
case  2 :
return _invoke__5205.call(this,this$,a);
case  3 :
return _invoke__5206.call(this,this$,a,b);
case  4 :
return _invoke__5207.call(this,this$,a,b,c);
case  5 :
return _invoke__5208.call(this,this$,a,b,c,d);
case  6 :
return _invoke__5209.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__5210.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__5211.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__5212.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__5213.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__5214.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__5215.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__5216.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__5217.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__5218.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__5219.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__5220.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__5221.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__5222.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__5223.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__5224.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5226 = coll;

if(cljs.core.truth_(and__3546__auto____5226))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____5226;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____5227 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5227))
{return or__3548__auto____5227;
} else
{var or__3548__auto____5228 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____5228))
{return or__3548__auto____5228;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5229 = coll;

if(cljs.core.truth_(and__3546__auto____5229))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____5229;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____5230 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5230))
{return or__3548__auto____5230;
} else
{var or__3548__auto____5231 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____5231))
{return or__3548__auto____5231;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____5232 = coll;

if(cljs.core.truth_(and__3546__auto____5232))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____5232;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____5233 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5233))
{return or__3548__auto____5233;
} else
{var or__3548__auto____5234 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____5234))
{return or__3548__auto____5234;
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
var _nth__5241 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____5235 = coll;

if(cljs.core.truth_(and__3546__auto____5235))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____5235;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____5236 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5236))
{return or__3548__auto____5236;
} else
{var or__3548__auto____5237 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____5237))
{return or__3548__auto____5237;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__5242 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____5238 = coll;

if(cljs.core.truth_(and__3546__auto____5238))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____5238;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____5239 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5239))
{return or__3548__auto____5239;
} else
{var or__3548__auto____5240 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____5240))
{return or__3548__auto____5240;
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
return _nth__5241.call(this,coll,n);
case  3 :
return _nth__5242.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5244 = coll;

if(cljs.core.truth_(and__3546__auto____5244))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____5244;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____5245 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5245))
{return or__3548__auto____5245;
} else
{var or__3548__auto____5246 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____5246))
{return or__3548__auto____5246;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5247 = coll;

if(cljs.core.truth_(and__3546__auto____5247))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____5247;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____5248 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5248))
{return or__3548__auto____5248;
} else
{var or__3548__auto____5249 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____5249))
{return or__3548__auto____5249;
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
var _lookup__5256 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____5250 = o;

if(cljs.core.truth_(and__3546__auto____5250))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____5250;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____5251 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5251))
{return or__3548__auto____5251;
} else
{var or__3548__auto____5252 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____5252))
{return or__3548__auto____5252;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__5257 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____5253 = o;

if(cljs.core.truth_(and__3546__auto____5253))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____5253;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____5254 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5254))
{return or__3548__auto____5254;
} else
{var or__3548__auto____5255 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____5255))
{return or__3548__auto____5255;
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
return _lookup__5256.call(this,o,k);
case  3 :
return _lookup__5257.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____5259 = coll;

if(cljs.core.truth_(and__3546__auto____5259))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____5259;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____5260 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5260))
{return or__3548__auto____5260;
} else
{var or__3548__auto____5261 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____5261))
{return or__3548__auto____5261;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____5262 = coll;

if(cljs.core.truth_(and__3546__auto____5262))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____5262;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____5263 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5263))
{return or__3548__auto____5263;
} else
{var or__3548__auto____5264 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____5264))
{return or__3548__auto____5264;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____5265 = coll;

if(cljs.core.truth_(and__3546__auto____5265))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____5265;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____5266 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5266))
{return or__3548__auto____5266;
} else
{var or__3548__auto____5267 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____5267))
{return or__3548__auto____5267;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____5268 = coll;

if(cljs.core.truth_(and__3546__auto____5268))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____5268;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____5269 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5269))
{return or__3548__auto____5269;
} else
{var or__3548__auto____5270 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____5270))
{return or__3548__auto____5270;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5271 = coll;

if(cljs.core.truth_(and__3546__auto____5271))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____5271;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____5272 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5272))
{return or__3548__auto____5272;
} else
{var or__3548__auto____5273 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____5273))
{return or__3548__auto____5273;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5274 = coll;

if(cljs.core.truth_(and__3546__auto____5274))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____5274;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____5275 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5275))
{return or__3548__auto____5275;
} else
{var or__3548__auto____5276 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____5276))
{return or__3548__auto____5276;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____5277 = coll;

if(cljs.core.truth_(and__3546__auto____5277))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____5277;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____5278 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5278))
{return or__3548__auto____5278;
} else
{var or__3548__auto____5279 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____5279))
{return or__3548__auto____5279;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____5280 = o;

if(cljs.core.truth_(and__3546__auto____5280))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____5280;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____5281 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5281))
{return or__3548__auto____5281;
} else
{var or__3548__auto____5282 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____5282))
{return or__3548__auto____5282;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____5283 = o;

if(cljs.core.truth_(and__3546__auto____5283))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____5283;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____5284 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5284))
{return or__3548__auto____5284;
} else
{var or__3548__auto____5285 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____5285))
{return or__3548__auto____5285;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____5286 = o;

if(cljs.core.truth_(and__3546__auto____5286))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____5286;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____5287 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5287))
{return or__3548__auto____5287;
} else
{var or__3548__auto____5288 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____5288))
{return or__3548__auto____5288;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____5289 = o;

if(cljs.core.truth_(and__3546__auto____5289))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____5289;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____5290 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5290))
{return or__3548__auto____5290;
} else
{var or__3548__auto____5291 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____5291))
{return or__3548__auto____5291;
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
var _reduce__5298 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____5292 = coll;

if(cljs.core.truth_(and__3546__auto____5292))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____5292;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____5293 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5293))
{return or__3548__auto____5293;
} else
{var or__3548__auto____5294 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____5294))
{return or__3548__auto____5294;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__5299 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____5295 = coll;

if(cljs.core.truth_(and__3546__auto____5295))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____5295;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____5296 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5296))
{return or__3548__auto____5296;
} else
{var or__3548__auto____5297 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____5297))
{return or__3548__auto____5297;
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
return _reduce__5298.call(this,coll,f);
case  3 :
return _reduce__5299.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____5301 = o;

if(cljs.core.truth_(and__3546__auto____5301))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____5301;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____5302 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5302))
{return or__3548__auto____5302;
} else
{var or__3548__auto____5303 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____5303))
{return or__3548__auto____5303;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____5304 = o;

if(cljs.core.truth_(and__3546__auto____5304))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____5304;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____5305 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5305))
{return or__3548__auto____5305;
} else
{var or__3548__auto____5306 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____5306))
{return or__3548__auto____5306;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____5307 = o;

if(cljs.core.truth_(and__3546__auto____5307))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____5307;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____5308 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5308))
{return or__3548__auto____5308;
} else
{var or__3548__auto____5309 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____5309))
{return or__3548__auto____5309;
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
if(cljs.core.truth_((function (){var and__3546__auto____5310 = o;

if(cljs.core.truth_(and__3546__auto____5310))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____5310;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____5311 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5311))
{return or__3548__auto____5311;
} else
{var or__3548__auto____5312 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____5312))
{return or__3548__auto____5312;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____5313 = d;

if(cljs.core.truth_(and__3546__auto____5313))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____5313;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____5314 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____5314))
{return or__3548__auto____5314;
} else
{var or__3548__auto____5315 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____5315))
{return or__3548__auto____5315;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____5316 = this$;

if(cljs.core.truth_(and__3546__auto____5316))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____5316;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____5317 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5317))
{return or__3548__auto____5317;
} else
{var or__3548__auto____5318 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____5318))
{return or__3548__auto____5318;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____5319 = this$;

if(cljs.core.truth_(and__3546__auto____5319))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____5319;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____5320 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5320))
{return or__3548__auto____5320;
} else
{var or__3548__auto____5321 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____5321))
{return or__3548__auto____5321;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____5322 = this$;

if(cljs.core.truth_(and__3546__auto____5322))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____5322;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____5323 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5323))
{return or__3548__auto____5323;
} else
{var or__3548__auto____5324 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____5324))
{return or__3548__auto____5324;
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
var G__5325 = null;
var G__5325__5326 = (function (o,k){
return null;
});
var G__5325__5327 = (function (o,k,not_found){
return not_found;
});
G__5325 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__5325__5326.call(this,o,k);
case  3 :
return G__5325__5327.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5325;
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
var G__5329 = null;
var G__5329__5330 = (function (_,f){
return f.call(null);
});
var G__5329__5331 = (function (_,f,start){
return start;
});
G__5329 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__5329__5330.call(this,_,f);
case  3 :
return G__5329__5331.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5329;
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
var G__5333 = null;
var G__5333__5334 = (function (_,n){
return null;
});
var G__5333__5335 = (function (_,n,not_found){
return not_found;
});
G__5333 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__5333__5334.call(this,_,n);
case  3 :
return G__5333__5335.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5333;
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
var ci_reduce__5343 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__5337 = cljs.core._nth.call(null,cicoll,0);
var n__5338 = 1;

while(true){
if(cljs.core.truth_((n__5338 < cljs.core._count.call(null,cicoll))))
{{
var G__5347 = f.call(null,val__5337,cljs.core._nth.call(null,cicoll,n__5338));
var G__5348 = (n__5338 + 1);
val__5337 = G__5347;
n__5338 = G__5348;
continue;
}
} else
{return val__5337;
}
break;
}
}
});
var ci_reduce__5344 = (function (cicoll,f,val){
var val__5339 = val;
var n__5340 = 0;

while(true){
if(cljs.core.truth_((n__5340 < cljs.core._count.call(null,cicoll))))
{{
var G__5349 = f.call(null,val__5339,cljs.core._nth.call(null,cicoll,n__5340));
var G__5350 = (n__5340 + 1);
val__5339 = G__5349;
n__5340 = G__5350;
continue;
}
} else
{return val__5339;
}
break;
}
});
var ci_reduce__5345 = (function (cicoll,f,val,idx){
var val__5341 = val;
var n__5342 = idx;

while(true){
if(cljs.core.truth_((n__5342 < cljs.core._count.call(null,cicoll))))
{{
var G__5351 = f.call(null,val__5341,cljs.core._nth.call(null,cicoll,n__5342));
var G__5352 = (n__5342 + 1);
val__5341 = G__5351;
n__5342 = G__5352;
continue;
}
} else
{return val__5341;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__5343.call(this,cicoll,f);
case  3 :
return ci_reduce__5344.call(this,cicoll,f,val);
case  4 :
return ci_reduce__5345.call(this,cicoll,f,val,idx);
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
var this__5353 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__5366 = null;
var G__5366__5367 = (function (_,f){
var this__5354 = this;
return cljs.core.ci_reduce.call(null,this__5354.a,f,(this__5354.a[this__5354.i]),(this__5354.i + 1));
});
var G__5366__5368 = (function (_,f,start){
var this__5355 = this;
return cljs.core.ci_reduce.call(null,this__5355.a,f,start,this__5355.i);
});
G__5366 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__5366__5367.call(this,_,f);
case  3 :
return G__5366__5368.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5366;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5356 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5357 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__5370 = null;
var G__5370__5371 = (function (coll,n){
var this__5358 = this;
var i__5359 = (n + this__5358.i);

if(cljs.core.truth_((i__5359 < this__5358.a.length)))
{return (this__5358.a[i__5359]);
} else
{return null;
}
});
var G__5370__5372 = (function (coll,n,not_found){
var this__5360 = this;
var i__5361 = (n + this__5360.i);

if(cljs.core.truth_((i__5361 < this__5360.a.length)))
{return (this__5360.a[i__5361]);
} else
{return not_found;
}
});
G__5370 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__5370__5371.call(this,coll,n);
case  3 :
return G__5370__5372.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5370;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__5362 = this;
return (this__5362.a.length - this__5362.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__5363 = this;
return (this__5363.a[this__5363.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__5364 = this;
if(cljs.core.truth_(((this__5364.i + 1) < this__5364.a.length)))
{return (new cljs.core.IndexedSeq(this__5364.a,(this__5364.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__5365 = this;
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
var G__5374 = null;
var G__5374__5375 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__5374__5376 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__5374 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__5374__5375.call(this,array,f);
case  3 :
return G__5374__5376.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5374;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__5378 = null;
var G__5378__5379 = (function (array,k){
return (array[k]);
});
var G__5378__5380 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__5378 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__5378__5379.call(this,array,k);
case  3 :
return G__5378__5380.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5378;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__5382 = null;
var G__5382__5383 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__5382__5384 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__5382 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__5382__5383.call(this,array,n);
case  3 :
return G__5382__5384.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5382;
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
var temp__3698__auto____5386 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____5386))
{var s__5387 = temp__3698__auto____5386;

return cljs.core._first.call(null,s__5387);
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
var G__5388 = cljs.core.next.call(null,s);
s = G__5388;
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
var s__5389 = cljs.core.seq.call(null,x);
var n__5390 = 0;

while(true){
if(cljs.core.truth_(s__5389))
{{
var G__5391 = cljs.core.next.call(null,s__5389);
var G__5392 = (n__5390 + 1);
s__5389 = G__5391;
n__5390 = G__5392;
continue;
}
} else
{return n__5390;
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
var conj__5393 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__5394 = (function() { 
var G__5396__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__5397 = conj.call(null,coll,x);
var G__5398 = cljs.core.first.call(null,xs);
var G__5399 = cljs.core.next.call(null,xs);
coll = G__5397;
x = G__5398;
xs = G__5399;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__5396 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5396__delegate.call(this, coll, x, xs);
};
G__5396.cljs$lang$maxFixedArity = 2;
G__5396.cljs$lang$applyTo = (function (arglist__5400){
var coll = cljs.core.first(arglist__5400);
var x = cljs.core.first(cljs.core.next(arglist__5400));
var xs = cljs.core.rest(cljs.core.next(arglist__5400));
return G__5396__delegate.call(this, coll, x, xs);
});
return G__5396;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__5393.call(this,coll,x);
default:
return conj__5394.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__5394.cljs$lang$applyTo;
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
var nth__5401 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__5402 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__5401.call(this,coll,n);
case  3 :
return nth__5402.call(this,coll,n,not_found);
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
var get__5404 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__5405 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__5404.call(this,o,k);
case  3 :
return get__5405.call(this,o,k,not_found);
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
var assoc__5408 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__5409 = (function() { 
var G__5411__delegate = function (coll,k,v,kvs){
while(true){
var ret__5407 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__5412 = ret__5407;
var G__5413 = cljs.core.first.call(null,kvs);
var G__5414 = cljs.core.second.call(null,kvs);
var G__5415 = cljs.core.nnext.call(null,kvs);
coll = G__5412;
k = G__5413;
v = G__5414;
kvs = G__5415;
continue;
}
} else
{return ret__5407;
}
break;
}
};
var G__5411 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5411__delegate.call(this, coll, k, v, kvs);
};
G__5411.cljs$lang$maxFixedArity = 3;
G__5411.cljs$lang$applyTo = (function (arglist__5416){
var coll = cljs.core.first(arglist__5416);
var k = cljs.core.first(cljs.core.next(arglist__5416));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5416)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5416)));
return G__5411__delegate.call(this, coll, k, v, kvs);
});
return G__5411;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__5408.call(this,coll,k,v);
default:
return assoc__5409.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__5409.cljs$lang$applyTo;
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
var dissoc__5418 = (function (coll){
return coll;
});
var dissoc__5419 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__5420 = (function() { 
var G__5422__delegate = function (coll,k,ks){
while(true){
var ret__5417 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__5423 = ret__5417;
var G__5424 = cljs.core.first.call(null,ks);
var G__5425 = cljs.core.next.call(null,ks);
coll = G__5423;
k = G__5424;
ks = G__5425;
continue;
}
} else
{return ret__5417;
}
break;
}
};
var G__5422 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5422__delegate.call(this, coll, k, ks);
};
G__5422.cljs$lang$maxFixedArity = 2;
G__5422.cljs$lang$applyTo = (function (arglist__5426){
var coll = cljs.core.first(arglist__5426);
var k = cljs.core.first(cljs.core.next(arglist__5426));
var ks = cljs.core.rest(cljs.core.next(arglist__5426));
return G__5422__delegate.call(this, coll, k, ks);
});
return G__5422;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__5418.call(this,coll);
case  2 :
return dissoc__5419.call(this,coll,k);
default:
return dissoc__5420.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__5420.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__2312__auto____5427 = o;

if(cljs.core.truth_((function (){var and__3546__auto____5428 = x__2312__auto____5427;

if(cljs.core.truth_(and__3546__auto____5428))
{var and__3546__auto____5429 = x__2312__auto____5427.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____5429))
{return cljs.core.not.call(null,x__2312__auto____5427.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____5429;
}
} else
{return and__3546__auto____5428;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__2312__auto____5427);
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
var disj__5431 = (function (coll){
return coll;
});
var disj__5432 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__5433 = (function() { 
var G__5435__delegate = function (coll,k,ks){
while(true){
var ret__5430 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__5436 = ret__5430;
var G__5437 = cljs.core.first.call(null,ks);
var G__5438 = cljs.core.next.call(null,ks);
coll = G__5436;
k = G__5437;
ks = G__5438;
continue;
}
} else
{return ret__5430;
}
break;
}
};
var G__5435 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5435__delegate.call(this, coll, k, ks);
};
G__5435.cljs$lang$maxFixedArity = 2;
G__5435.cljs$lang$applyTo = (function (arglist__5439){
var coll = cljs.core.first(arglist__5439);
var k = cljs.core.first(cljs.core.next(arglist__5439));
var ks = cljs.core.rest(cljs.core.next(arglist__5439));
return G__5435__delegate.call(this, coll, k, ks);
});
return G__5435;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__5431.call(this,coll);
case  2 :
return disj__5432.call(this,coll,k);
default:
return disj__5433.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__5433.cljs$lang$applyTo;
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
{var x__2312__auto____5440 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5441 = x__2312__auto____5440;

if(cljs.core.truth_(and__3546__auto____5441))
{var and__3546__auto____5442 = x__2312__auto____5440.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____5442))
{return cljs.core.not.call(null,x__2312__auto____5440.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____5442;
}
} else
{return and__3546__auto____5441;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__2312__auto____5440);
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
{var x__2312__auto____5443 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5444 = x__2312__auto____5443;

if(cljs.core.truth_(and__3546__auto____5444))
{var and__3546__auto____5445 = x__2312__auto____5443.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____5445))
{return cljs.core.not.call(null,x__2312__auto____5443.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____5445;
}
} else
{return and__3546__auto____5444;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__2312__auto____5443);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__2312__auto____5446 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5447 = x__2312__auto____5446;

if(cljs.core.truth_(and__3546__auto____5447))
{var and__3546__auto____5448 = x__2312__auto____5446.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____5448))
{return cljs.core.not.call(null,x__2312__auto____5446.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____5448;
}
} else
{return and__3546__auto____5447;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__2312__auto____5446);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__2312__auto____5449 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5450 = x__2312__auto____5449;

if(cljs.core.truth_(and__3546__auto____5450))
{var and__3546__auto____5451 = x__2312__auto____5449.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____5451))
{return cljs.core.not.call(null,x__2312__auto____5449.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____5451;
}
} else
{return and__3546__auto____5450;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__2312__auto____5449);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__2312__auto____5452 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5453 = x__2312__auto____5452;

if(cljs.core.truth_(and__3546__auto____5453))
{var and__3546__auto____5454 = x__2312__auto____5452.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____5454))
{return cljs.core.not.call(null,x__2312__auto____5452.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____5454;
}
} else
{return and__3546__auto____5453;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__2312__auto____5452);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__2312__auto____5455 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5456 = x__2312__auto____5455;

if(cljs.core.truth_(and__3546__auto____5456))
{var and__3546__auto____5457 = x__2312__auto____5455.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____5457))
{return cljs.core.not.call(null,x__2312__auto____5455.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____5457;
}
} else
{return and__3546__auto____5456;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__2312__auto____5455);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__2312__auto____5458 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5459 = x__2312__auto____5458;

if(cljs.core.truth_(and__3546__auto____5459))
{var and__3546__auto____5460 = x__2312__auto____5458.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____5460))
{return cljs.core.not.call(null,x__2312__auto____5458.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____5460;
}
} else
{return and__3546__auto____5459;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__2312__auto____5458);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__5461 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__5461.push(key);
}));
return keys__5461;
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
{var x__2312__auto____5462 = s;

if(cljs.core.truth_((function (){var and__3546__auto____5463 = x__2312__auto____5462;

if(cljs.core.truth_(and__3546__auto____5463))
{var and__3546__auto____5464 = x__2312__auto____5462.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____5464))
{return cljs.core.not.call(null,x__2312__auto____5462.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____5464;
}
} else
{return and__3546__auto____5463;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__2312__auto____5462);
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
var and__3546__auto____5465 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____5465))
{return cljs.core.not.call(null,(function (){var or__3548__auto____5466 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____5466))
{return or__3548__auto____5466;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____5465;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____5467 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____5467))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____5467;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____5468 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____5468))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____5468;
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
var and__3546__auto____5469 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____5469))
{return (n == n.toFixed());
} else
{return and__3546__auto____5469;
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
if(cljs.core.truth_((function (){var and__3546__auto____5470 = coll;

if(cljs.core.truth_(and__3546__auto____5470))
{var and__3546__auto____5471 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____5471))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____5471;
}
} else
{return and__3546__auto____5470;
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
var distinct_QMARK___5476 = (function (x){
return true;
});
var distinct_QMARK___5477 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___5478 = (function() { 
var G__5480__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__5472 = cljs.core.set([y,x]);
var xs__5473 = more;

while(true){
var x__5474 = cljs.core.first.call(null,xs__5473);
var etc__5475 = cljs.core.next.call(null,xs__5473);

if(cljs.core.truth_(xs__5473))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__5472,x__5474)))
{return false;
} else
{{
var G__5481 = cljs.core.conj.call(null,s__5472,x__5474);
var G__5482 = etc__5475;
s__5472 = G__5481;
xs__5473 = G__5482;
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
var G__5480 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5480__delegate.call(this, x, y, more);
};
G__5480.cljs$lang$maxFixedArity = 2;
G__5480.cljs$lang$applyTo = (function (arglist__5483){
var x = cljs.core.first(arglist__5483);
var y = cljs.core.first(cljs.core.next(arglist__5483));
var more = cljs.core.rest(cljs.core.next(arglist__5483));
return G__5480__delegate.call(this, x, y, more);
});
return G__5480;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___5476.call(this,x);
case  2 :
return distinct_QMARK___5477.call(this,x,y);
default:
return distinct_QMARK___5478.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___5478.cljs$lang$applyTo;
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
var r__5484 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__5484)))
{return r__5484;
} else
{if(cljs.core.truth_(r__5484))
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
var sort__5486 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__5487 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__5485 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__5485,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__5485);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__5486.call(this,comp);
case  2 :
return sort__5487.call(this,comp,coll);
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
var sort_by__5489 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__5490 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__5489.call(this,keyfn,comp);
case  3 :
return sort_by__5490.call(this,keyfn,comp,coll);
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
var reduce__5492 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__5493 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__5492.call(this,f,val);
case  3 :
return reduce__5493.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__5499 = (function (f,coll){
var temp__3695__auto____5495 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____5495))
{var s__5496 = temp__3695__auto____5495;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__5496),cljs.core.next.call(null,s__5496));
} else
{return f.call(null);
}
});
var seq_reduce__5500 = (function (f,val,coll){
var val__5497 = val;
var coll__5498 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__5498))
{{
var G__5502 = f.call(null,val__5497,cljs.core.first.call(null,coll__5498));
var G__5503 = cljs.core.next.call(null,coll__5498);
val__5497 = G__5502;
coll__5498 = G__5503;
continue;
}
} else
{return val__5497;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__5499.call(this,f,val);
case  3 :
return seq_reduce__5500.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__5504 = null;
var G__5504__5505 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__5504__5506 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__5504 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__5504__5505.call(this,coll,f);
case  3 :
return G__5504__5506.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5504;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___5508 = (function (){
return 0;
});
var _PLUS___5509 = (function (x){
return x;
});
var _PLUS___5510 = (function (x,y){
return (x + y);
});
var _PLUS___5511 = (function() { 
var G__5513__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__5513 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5513__delegate.call(this, x, y, more);
};
G__5513.cljs$lang$maxFixedArity = 2;
G__5513.cljs$lang$applyTo = (function (arglist__5514){
var x = cljs.core.first(arglist__5514);
var y = cljs.core.first(cljs.core.next(arglist__5514));
var more = cljs.core.rest(cljs.core.next(arglist__5514));
return G__5513__delegate.call(this, x, y, more);
});
return G__5513;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___5508.call(this);
case  1 :
return _PLUS___5509.call(this,x);
case  2 :
return _PLUS___5510.call(this,x,y);
default:
return _PLUS___5511.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___5511.cljs$lang$applyTo;
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
var ___5515 = (function (x){
return (- x);
});
var ___5516 = (function (x,y){
return (x - y);
});
var ___5517 = (function() { 
var G__5519__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__5519 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5519__delegate.call(this, x, y, more);
};
G__5519.cljs$lang$maxFixedArity = 2;
G__5519.cljs$lang$applyTo = (function (arglist__5520){
var x = cljs.core.first(arglist__5520);
var y = cljs.core.first(cljs.core.next(arglist__5520));
var more = cljs.core.rest(cljs.core.next(arglist__5520));
return G__5519__delegate.call(this, x, y, more);
});
return G__5519;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___5515.call(this,x);
case  2 :
return ___5516.call(this,x,y);
default:
return ___5517.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___5517.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___5521 = (function (){
return 1;
});
var _STAR___5522 = (function (x){
return x;
});
var _STAR___5523 = (function (x,y){
return (x * y);
});
var _STAR___5524 = (function() { 
var G__5526__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__5526 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5526__delegate.call(this, x, y, more);
};
G__5526.cljs$lang$maxFixedArity = 2;
G__5526.cljs$lang$applyTo = (function (arglist__5527){
var x = cljs.core.first(arglist__5527);
var y = cljs.core.first(cljs.core.next(arglist__5527));
var more = cljs.core.rest(cljs.core.next(arglist__5527));
return G__5526__delegate.call(this, x, y, more);
});
return G__5526;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___5521.call(this);
case  1 :
return _STAR___5522.call(this,x);
case  2 :
return _STAR___5523.call(this,x,y);
default:
return _STAR___5524.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___5524.cljs$lang$applyTo;
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
var _SLASH___5528 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___5529 = (function (x,y){
return (x / y);
});
var _SLASH___5530 = (function() { 
var G__5532__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__5532 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5532__delegate.call(this, x, y, more);
};
G__5532.cljs$lang$maxFixedArity = 2;
G__5532.cljs$lang$applyTo = (function (arglist__5533){
var x = cljs.core.first(arglist__5533);
var y = cljs.core.first(cljs.core.next(arglist__5533));
var more = cljs.core.rest(cljs.core.next(arglist__5533));
return G__5532__delegate.call(this, x, y, more);
});
return G__5532;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___5528.call(this,x);
case  2 :
return _SLASH___5529.call(this,x,y);
default:
return _SLASH___5530.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___5530.cljs$lang$applyTo;
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
var _LT___5534 = (function (x){
return true;
});
var _LT___5535 = (function (x,y){
return (x < y);
});
var _LT___5536 = (function() { 
var G__5538__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5539 = y;
var G__5540 = cljs.core.first.call(null,more);
var G__5541 = cljs.core.next.call(null,more);
x = G__5539;
y = G__5540;
more = G__5541;
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
var G__5538 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5538__delegate.call(this, x, y, more);
};
G__5538.cljs$lang$maxFixedArity = 2;
G__5538.cljs$lang$applyTo = (function (arglist__5542){
var x = cljs.core.first(arglist__5542);
var y = cljs.core.first(cljs.core.next(arglist__5542));
var more = cljs.core.rest(cljs.core.next(arglist__5542));
return G__5538__delegate.call(this, x, y, more);
});
return G__5538;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___5534.call(this,x);
case  2 :
return _LT___5535.call(this,x,y);
default:
return _LT___5536.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___5536.cljs$lang$applyTo;
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
var _LT__EQ___5543 = (function (x){
return true;
});
var _LT__EQ___5544 = (function (x,y){
return (x <= y);
});
var _LT__EQ___5545 = (function() { 
var G__5547__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5548 = y;
var G__5549 = cljs.core.first.call(null,more);
var G__5550 = cljs.core.next.call(null,more);
x = G__5548;
y = G__5549;
more = G__5550;
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
var G__5547 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5547__delegate.call(this, x, y, more);
};
G__5547.cljs$lang$maxFixedArity = 2;
G__5547.cljs$lang$applyTo = (function (arglist__5551){
var x = cljs.core.first(arglist__5551);
var y = cljs.core.first(cljs.core.next(arglist__5551));
var more = cljs.core.rest(cljs.core.next(arglist__5551));
return G__5547__delegate.call(this, x, y, more);
});
return G__5547;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___5543.call(this,x);
case  2 :
return _LT__EQ___5544.call(this,x,y);
default:
return _LT__EQ___5545.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___5545.cljs$lang$applyTo;
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
var _GT___5552 = (function (x){
return true;
});
var _GT___5553 = (function (x,y){
return (x > y);
});
var _GT___5554 = (function() { 
var G__5556__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5557 = y;
var G__5558 = cljs.core.first.call(null,more);
var G__5559 = cljs.core.next.call(null,more);
x = G__5557;
y = G__5558;
more = G__5559;
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
var G__5556 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5556__delegate.call(this, x, y, more);
};
G__5556.cljs$lang$maxFixedArity = 2;
G__5556.cljs$lang$applyTo = (function (arglist__5560){
var x = cljs.core.first(arglist__5560);
var y = cljs.core.first(cljs.core.next(arglist__5560));
var more = cljs.core.rest(cljs.core.next(arglist__5560));
return G__5556__delegate.call(this, x, y, more);
});
return G__5556;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___5552.call(this,x);
case  2 :
return _GT___5553.call(this,x,y);
default:
return _GT___5554.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___5554.cljs$lang$applyTo;
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
var _GT__EQ___5561 = (function (x){
return true;
});
var _GT__EQ___5562 = (function (x,y){
return (x >= y);
});
var _GT__EQ___5563 = (function() { 
var G__5565__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5566 = y;
var G__5567 = cljs.core.first.call(null,more);
var G__5568 = cljs.core.next.call(null,more);
x = G__5566;
y = G__5567;
more = G__5568;
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
var G__5565 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5565__delegate.call(this, x, y, more);
};
G__5565.cljs$lang$maxFixedArity = 2;
G__5565.cljs$lang$applyTo = (function (arglist__5569){
var x = cljs.core.first(arglist__5569);
var y = cljs.core.first(cljs.core.next(arglist__5569));
var more = cljs.core.rest(cljs.core.next(arglist__5569));
return G__5565__delegate.call(this, x, y, more);
});
return G__5565;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___5561.call(this,x);
case  2 :
return _GT__EQ___5562.call(this,x,y);
default:
return _GT__EQ___5563.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___5563.cljs$lang$applyTo;
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
var max__5570 = (function (x){
return x;
});
var max__5571 = (function (x,y){
return ((x > y) ? x : y);
});
var max__5572 = (function() { 
var G__5574__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__5574 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5574__delegate.call(this, x, y, more);
};
G__5574.cljs$lang$maxFixedArity = 2;
G__5574.cljs$lang$applyTo = (function (arglist__5575){
var x = cljs.core.first(arglist__5575);
var y = cljs.core.first(cljs.core.next(arglist__5575));
var more = cljs.core.rest(cljs.core.next(arglist__5575));
return G__5574__delegate.call(this, x, y, more);
});
return G__5574;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__5570.call(this,x);
case  2 :
return max__5571.call(this,x,y);
default:
return max__5572.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__5572.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__5576 = (function (x){
return x;
});
var min__5577 = (function (x,y){
return ((x < y) ? x : y);
});
var min__5578 = (function() { 
var G__5580__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__5580 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5580__delegate.call(this, x, y, more);
};
G__5580.cljs$lang$maxFixedArity = 2;
G__5580.cljs$lang$applyTo = (function (arglist__5581){
var x = cljs.core.first(arglist__5581);
var y = cljs.core.first(cljs.core.next(arglist__5581));
var more = cljs.core.rest(cljs.core.next(arglist__5581));
return G__5580__delegate.call(this, x, y, more);
});
return G__5580;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__5576.call(this,x);
case  2 :
return min__5577.call(this,x,y);
default:
return min__5578.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__5578.cljs$lang$applyTo;
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
var rem__5582 = (n % d);

return cljs.core.fix.call(null,((n - rem__5582) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__5583 = cljs.core.quot.call(null,n,d);

return (n - (d * q__5583));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__5584 = (function (){
return Math.random.call(null);
});
var rand__5585 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__5584.call(this);
case  1 :
return rand__5585.call(this,n);
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
var _EQ__EQ___5587 = (function (x){
return true;
});
var _EQ__EQ___5588 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___5589 = (function() { 
var G__5591__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5592 = y;
var G__5593 = cljs.core.first.call(null,more);
var G__5594 = cljs.core.next.call(null,more);
x = G__5592;
y = G__5593;
more = G__5594;
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
var G__5591 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5591__delegate.call(this, x, y, more);
};
G__5591.cljs$lang$maxFixedArity = 2;
G__5591.cljs$lang$applyTo = (function (arglist__5595){
var x = cljs.core.first(arglist__5595);
var y = cljs.core.first(cljs.core.next(arglist__5595));
var more = cljs.core.rest(cljs.core.next(arglist__5595));
return G__5591__delegate.call(this, x, y, more);
});
return G__5591;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___5587.call(this,x);
case  2 :
return _EQ__EQ___5588.call(this,x,y);
default:
return _EQ__EQ___5589.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___5589.cljs$lang$applyTo;
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
var n__5596 = n;
var xs__5597 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____5598 = xs__5597;

if(cljs.core.truth_(and__3546__auto____5598))
{return (n__5596 > 0);
} else
{return and__3546__auto____5598;
}
})()))
{{
var G__5599 = (n__5596 - 1);
var G__5600 = cljs.core.next.call(null,xs__5597);
n__5596 = G__5599;
xs__5597 = G__5600;
continue;
}
} else
{return xs__5597;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__5605 = null;
var G__5605__5606 = (function (coll,n){
var temp__3695__auto____5601 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____5601))
{var xs__5602 = temp__3695__auto____5601;

return cljs.core.first.call(null,xs__5602);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__5605__5607 = (function (coll,n,not_found){
var temp__3695__auto____5603 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____5603))
{var xs__5604 = temp__3695__auto____5603;

return cljs.core.first.call(null,xs__5604);
} else
{return not_found;
}
});
G__5605 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__5605__5606.call(this,coll,n);
case  3 :
return G__5605__5607.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5605;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___5609 = (function (){
return "";
});
var str_STAR___5610 = (function (x){
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
var str_STAR___5611 = (function() { 
var G__5613__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__5614 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__5615 = cljs.core.next.call(null,more);
sb = G__5614;
more = G__5615;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__5613 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5613__delegate.call(this, x, ys);
};
G__5613.cljs$lang$maxFixedArity = 1;
G__5613.cljs$lang$applyTo = (function (arglist__5616){
var x = cljs.core.first(arglist__5616);
var ys = cljs.core.rest(arglist__5616);
return G__5613__delegate.call(this, x, ys);
});
return G__5613;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___5609.call(this);
case  1 :
return str_STAR___5610.call(this,x);
default:
return str_STAR___5611.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___5611.cljs$lang$applyTo;
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
var str__5617 = (function (){
return "";
});
var str__5618 = (function (x){
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
var str__5619 = (function() { 
var G__5621__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__5621 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5621__delegate.call(this, x, ys);
};
G__5621.cljs$lang$maxFixedArity = 1;
G__5621.cljs$lang$applyTo = (function (arglist__5622){
var x = cljs.core.first(arglist__5622);
var ys = cljs.core.rest(arglist__5622);
return G__5621__delegate.call(this, x, ys);
});
return G__5621;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__5617.call(this);
case  1 :
return str__5618.call(this,x);
default:
return str__5619.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__5619.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__5623 = (function (s,start){
return s.substring(start);
});
var subs__5624 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__5623.call(this,s,start);
case  3 :
return subs__5624.call(this,s,start,end);
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
var symbol__5626 = (function (name){
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
var symbol__5627 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__5626.call(this,ns);
case  2 :
return symbol__5627.call(this,ns,name);
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
var keyword__5629 = (function (name){
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
var keyword__5630 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__5629.call(this,ns);
case  2 :
return keyword__5630.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__5632 = cljs.core.seq.call(null,x);
var ys__5633 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__5632 === null)))
{return (ys__5633 === null);
} else
{if(cljs.core.truth_((ys__5633 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__5632),cljs.core.first.call(null,ys__5633))))
{{
var G__5634 = cljs.core.next.call(null,xs__5632);
var G__5635 = cljs.core.next.call(null,ys__5633);
xs__5632 = G__5634;
ys__5633 = G__5635;
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
return cljs.core.reduce.call(null,(function (p1__5636_SHARP_,p2__5637_SHARP_){
return cljs.core.hash_combine.call(null,p1__5636_SHARP_,cljs.core.hash.call(null,p2__5637_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__5638__5639 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__5638__5639))
{var G__5641__5643 = cljs.core.first.call(null,G__5638__5639);
var vec__5642__5644 = G__5641__5643;
var key_name__5645 = cljs.core.nth.call(null,vec__5642__5644,0,null);
var f__5646 = cljs.core.nth.call(null,vec__5642__5644,1,null);
var G__5638__5647 = G__5638__5639;

var G__5641__5648 = G__5641__5643;
var G__5638__5649 = G__5638__5647;

while(true){
var vec__5650__5651 = G__5641__5648;
var key_name__5652 = cljs.core.nth.call(null,vec__5650__5651,0,null);
var f__5653 = cljs.core.nth.call(null,vec__5650__5651,1,null);
var G__5638__5654 = G__5638__5649;

var str_name__5655 = cljs.core.name.call(null,key_name__5652);

obj[str_name__5655] = f__5653;
var temp__3698__auto____5656 = cljs.core.next.call(null,G__5638__5654);

if(cljs.core.truth_(temp__3698__auto____5656))
{var G__5638__5657 = temp__3698__auto____5656;

{
var G__5658 = cljs.core.first.call(null,G__5638__5657);
var G__5659 = G__5638__5657;
G__5641__5648 = G__5658;
G__5638__5649 = G__5659;
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
var this__5660 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5661 = this;
return (new cljs.core.List(this__5661.meta,o,coll,(this__5661.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5662 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5663 = this;
return this__5663.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__5664 = this;
return this__5664.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__5665 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5666 = this;
return this__5666.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5667 = this;
return this__5667.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5668 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5669 = this;
return (new cljs.core.List(meta,this__5669.first,this__5669.rest,this__5669.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5670 = this;
return this__5670.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5671 = this;
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
var this__5672 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5673 = this;
return (new cljs.core.List(this__5673.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5674 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5675 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__5676 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__5677 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5678 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5679 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5680 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5681 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5682 = this;
return this__5682.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5683 = this;
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
list.cljs$lang$applyTo = (function (arglist__5684){
var items = cljs.core.seq( arglist__5684 );;
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
var this__5685 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5686 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5687 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5688 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__5688.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5689 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5690 = this;
return this__5690.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5691 = this;
if(cljs.core.truth_((this__5691.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__5691.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5692 = this;
return this__5692.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5693 = this;
return (new cljs.core.Cons(meta,this__5693.first,this__5693.rest));
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
var G__5694 = null;
var G__5694__5695 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__5694__5696 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__5694 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__5694__5695.call(this,string,f);
case  3 :
return G__5694__5696.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5694;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__5698 = null;
var G__5698__5699 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__5698__5700 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__5698 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__5698__5699.call(this,string,k);
case  3 :
return G__5698__5700.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5698;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__5702 = null;
var G__5702__5703 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__5702__5704 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__5702 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__5702__5703.call(this,string,n);
case  3 :
return G__5702__5704.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5702;
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
var G__5712 = null;
var G__5712__5713 = (function (tsym5706,coll){
var tsym5706__5708 = this;

var this$__5709 = tsym5706__5708;

return cljs.core.get.call(null,coll,this$__5709.toString());
});
var G__5712__5714 = (function (tsym5707,coll,not_found){
var tsym5707__5710 = this;

var this$__5711 = tsym5707__5710;

return cljs.core.get.call(null,coll,this$__5711.toString(),not_found);
});
G__5712 = function(tsym5707,coll,not_found){
switch(arguments.length){
case  2 :
return G__5712__5713.call(this,tsym5707,coll);
case  3 :
return G__5712__5714.call(this,tsym5707,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5712;
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
var x__5716 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__5716;
} else
{lazy_seq.x = x__5716.call(null);
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
var this__5717 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5718 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5719 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5720 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__5720.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5721 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5722 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5723 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5724 = this;
return this__5724.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5725 = this;
return (new cljs.core.LazySeq(meta,this__5725.realized,this__5725.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__5726 = cljs.core.array.call(null);

var s__5727 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__5727)))
{ary__5726.push(cljs.core.first.call(null,s__5727));
{
var G__5728 = cljs.core.next.call(null,s__5727);
s__5727 = G__5728;
continue;
}
} else
{return ary__5726;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__5729 = s;
var i__5730 = n;
var sum__5731 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____5732 = (i__5730 > 0);

if(cljs.core.truth_(and__3546__auto____5732))
{return cljs.core.seq.call(null,s__5729);
} else
{return and__3546__auto____5732;
}
})()))
{{
var G__5733 = cljs.core.next.call(null,s__5729);
var G__5734 = (i__5730 - 1);
var G__5735 = (sum__5731 + 1);
s__5729 = G__5733;
i__5730 = G__5734;
sum__5731 = G__5735;
continue;
}
} else
{return sum__5731;
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
var concat__5739 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__5740 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__5741 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__5736 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__5736))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__5736),concat.call(null,cljs.core.rest.call(null,s__5736),y));
} else
{return y;
}
})));
});
var concat__5742 = (function() { 
var G__5744__delegate = function (x,y,zs){
var cat__5738 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__5737 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__5737))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__5737),cat.call(null,cljs.core.rest.call(null,xys__5737),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__5738.call(null,concat.call(null,x,y),zs);
};
var G__5744 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5744__delegate.call(this, x, y, zs);
};
G__5744.cljs$lang$maxFixedArity = 2;
G__5744.cljs$lang$applyTo = (function (arglist__5745){
var x = cljs.core.first(arglist__5745);
var y = cljs.core.first(cljs.core.next(arglist__5745));
var zs = cljs.core.rest(cljs.core.next(arglist__5745));
return G__5744__delegate.call(this, x, y, zs);
});
return G__5744;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__5739.call(this);
case  1 :
return concat__5740.call(this,x);
case  2 :
return concat__5741.call(this,x,y);
default:
return concat__5742.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__5742.cljs$lang$applyTo;
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
var list_STAR___5746 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___5747 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___5748 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___5749 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5750 = (function() { 
var G__5752__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__5752 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__5752__delegate.call(this, a, b, c, d, more);
};
G__5752.cljs$lang$maxFixedArity = 4;
G__5752.cljs$lang$applyTo = (function (arglist__5753){
var a = cljs.core.first(arglist__5753);
var b = cljs.core.first(cljs.core.next(arglist__5753));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5753)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5753))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5753))));
return G__5752__delegate.call(this, a, b, c, d, more);
});
return G__5752;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___5746.call(this,a);
case  2 :
return list_STAR___5747.call(this,a,b);
case  3 :
return list_STAR___5748.call(this,a,b,c);
case  4 :
return list_STAR___5749.call(this,a,b,c,d);
default:
return list_STAR___5750.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5750.cljs$lang$applyTo;
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
var apply__5763 = (function (f,args){
var fixed_arity__5754 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__5754 + 1)) <= fixed_arity__5754)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__5764 = (function (f,x,args){
var arglist__5755 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__5756 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__5755,fixed_arity__5756) <= fixed_arity__5756)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__5755));
} else
{return f.cljs$lang$applyTo(arglist__5755);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__5755));
}
});
var apply__5765 = (function (f,x,y,args){
var arglist__5757 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__5758 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__5757,fixed_arity__5758) <= fixed_arity__5758)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__5757));
} else
{return f.cljs$lang$applyTo(arglist__5757);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__5757));
}
});
var apply__5766 = (function (f,x,y,z,args){
var arglist__5759 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__5760 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__5759,fixed_arity__5760) <= fixed_arity__5760)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__5759));
} else
{return f.cljs$lang$applyTo(arglist__5759);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__5759));
}
});
var apply__5767 = (function() { 
var G__5769__delegate = function (f,a,b,c,d,args){
var arglist__5761 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__5762 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__5761,fixed_arity__5762) <= fixed_arity__5762)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__5761));
} else
{return f.cljs$lang$applyTo(arglist__5761);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__5761));
}
};
var G__5769 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__5769__delegate.call(this, f, a, b, c, d, args);
};
G__5769.cljs$lang$maxFixedArity = 5;
G__5769.cljs$lang$applyTo = (function (arglist__5770){
var f = cljs.core.first(arglist__5770);
var a = cljs.core.first(cljs.core.next(arglist__5770));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5770)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5770))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5770)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5770)))));
return G__5769__delegate.call(this, f, a, b, c, d, args);
});
return G__5769;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__5763.call(this,f,a);
case  3 :
return apply__5764.call(this,f,a,b);
case  4 :
return apply__5765.call(this,f,a,b,c);
case  5 :
return apply__5766.call(this,f,a,b,c,d);
default:
return apply__5767.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__5767.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__5771){
var obj = cljs.core.first(arglist__5771);
var f = cljs.core.first(cljs.core.next(arglist__5771));
var args = cljs.core.rest(cljs.core.next(arglist__5771));
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
var not_EQ___5772 = (function (x){
return false;
});
var not_EQ___5773 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___5774 = (function() { 
var G__5776__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__5776 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5776__delegate.call(this, x, y, more);
};
G__5776.cljs$lang$maxFixedArity = 2;
G__5776.cljs$lang$applyTo = (function (arglist__5777){
var x = cljs.core.first(arglist__5777);
var y = cljs.core.first(cljs.core.next(arglist__5777));
var more = cljs.core.rest(cljs.core.next(arglist__5777));
return G__5776__delegate.call(this, x, y, more);
});
return G__5776;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___5772.call(this,x);
case  2 :
return not_EQ___5773.call(this,x,y);
default:
return not_EQ___5774.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___5774.cljs$lang$applyTo;
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
var G__5778 = pred;
var G__5779 = cljs.core.next.call(null,coll);
pred = G__5778;
coll = G__5779;
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
{var or__3548__auto____5780 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____5780))
{return or__3548__auto____5780;
} else
{{
var G__5781 = pred;
var G__5782 = cljs.core.next.call(null,coll);
pred = G__5781;
coll = G__5782;
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
var G__5783 = null;
var G__5783__5784 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__5783__5785 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__5783__5786 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__5783__5787 = (function() { 
var G__5789__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__5789 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5789__delegate.call(this, x, y, zs);
};
G__5789.cljs$lang$maxFixedArity = 2;
G__5789.cljs$lang$applyTo = (function (arglist__5790){
var x = cljs.core.first(arglist__5790);
var y = cljs.core.first(cljs.core.next(arglist__5790));
var zs = cljs.core.rest(cljs.core.next(arglist__5790));
return G__5789__delegate.call(this, x, y, zs);
});
return G__5789;
})()
;
G__5783 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__5783__5784.call(this);
case  1 :
return G__5783__5785.call(this,x);
case  2 :
return G__5783__5786.call(this,x,y);
default:
return G__5783__5787.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5783.cljs$lang$maxFixedArity = 2;
G__5783.cljs$lang$applyTo = G__5783__5787.cljs$lang$applyTo;
return G__5783;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__5791__delegate = function (args){
return x;
};
var G__5791 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5791__delegate.call(this, args);
};
G__5791.cljs$lang$maxFixedArity = 0;
G__5791.cljs$lang$applyTo = (function (arglist__5792){
var args = cljs.core.seq( arglist__5792 );;
return G__5791__delegate.call(this, args);
});
return G__5791;
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
var comp__5796 = (function (){
return cljs.core.identity;
});
var comp__5797 = (function (f){
return f;
});
var comp__5798 = (function (f,g){
return (function() {
var G__5802 = null;
var G__5802__5803 = (function (){
return f.call(null,g.call(null));
});
var G__5802__5804 = (function (x){
return f.call(null,g.call(null,x));
});
var G__5802__5805 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__5802__5806 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__5802__5807 = (function() { 
var G__5809__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__5809 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5809__delegate.call(this, x, y, z, args);
};
G__5809.cljs$lang$maxFixedArity = 3;
G__5809.cljs$lang$applyTo = (function (arglist__5810){
var x = cljs.core.first(arglist__5810);
var y = cljs.core.first(cljs.core.next(arglist__5810));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5810)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5810)));
return G__5809__delegate.call(this, x, y, z, args);
});
return G__5809;
})()
;
G__5802 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__5802__5803.call(this);
case  1 :
return G__5802__5804.call(this,x);
case  2 :
return G__5802__5805.call(this,x,y);
case  3 :
return G__5802__5806.call(this,x,y,z);
default:
return G__5802__5807.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5802.cljs$lang$maxFixedArity = 3;
G__5802.cljs$lang$applyTo = G__5802__5807.cljs$lang$applyTo;
return G__5802;
})()
});
var comp__5799 = (function (f,g,h){
return (function() {
var G__5811 = null;
var G__5811__5812 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__5811__5813 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__5811__5814 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__5811__5815 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__5811__5816 = (function() { 
var G__5818__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__5818 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5818__delegate.call(this, x, y, z, args);
};
G__5818.cljs$lang$maxFixedArity = 3;
G__5818.cljs$lang$applyTo = (function (arglist__5819){
var x = cljs.core.first(arglist__5819);
var y = cljs.core.first(cljs.core.next(arglist__5819));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5819)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5819)));
return G__5818__delegate.call(this, x, y, z, args);
});
return G__5818;
})()
;
G__5811 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__5811__5812.call(this);
case  1 :
return G__5811__5813.call(this,x);
case  2 :
return G__5811__5814.call(this,x,y);
case  3 :
return G__5811__5815.call(this,x,y,z);
default:
return G__5811__5816.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5811.cljs$lang$maxFixedArity = 3;
G__5811.cljs$lang$applyTo = G__5811__5816.cljs$lang$applyTo;
return G__5811;
})()
});
var comp__5800 = (function() { 
var G__5820__delegate = function (f1,f2,f3,fs){
var fs__5793 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__5821__delegate = function (args){
var ret__5794 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__5793),args);
var fs__5795 = cljs.core.next.call(null,fs__5793);

while(true){
if(cljs.core.truth_(fs__5795))
{{
var G__5822 = cljs.core.first.call(null,fs__5795).call(null,ret__5794);
var G__5823 = cljs.core.next.call(null,fs__5795);
ret__5794 = G__5822;
fs__5795 = G__5823;
continue;
}
} else
{return ret__5794;
}
break;
}
};
var G__5821 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5821__delegate.call(this, args);
};
G__5821.cljs$lang$maxFixedArity = 0;
G__5821.cljs$lang$applyTo = (function (arglist__5824){
var args = cljs.core.seq( arglist__5824 );;
return G__5821__delegate.call(this, args);
});
return G__5821;
})()
;
};
var G__5820 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5820__delegate.call(this, f1, f2, f3, fs);
};
G__5820.cljs$lang$maxFixedArity = 3;
G__5820.cljs$lang$applyTo = (function (arglist__5825){
var f1 = cljs.core.first(arglist__5825);
var f2 = cljs.core.first(cljs.core.next(arglist__5825));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5825)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5825)));
return G__5820__delegate.call(this, f1, f2, f3, fs);
});
return G__5820;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__5796.call(this);
case  1 :
return comp__5797.call(this,f1);
case  2 :
return comp__5798.call(this,f1,f2);
case  3 :
return comp__5799.call(this,f1,f2,f3);
default:
return comp__5800.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__5800.cljs$lang$applyTo;
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
var partial__5826 = (function (f,arg1){
return (function() { 
var G__5831__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__5831 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5831__delegate.call(this, args);
};
G__5831.cljs$lang$maxFixedArity = 0;
G__5831.cljs$lang$applyTo = (function (arglist__5832){
var args = cljs.core.seq( arglist__5832 );;
return G__5831__delegate.call(this, args);
});
return G__5831;
})()
;
});
var partial__5827 = (function (f,arg1,arg2){
return (function() { 
var G__5833__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__5833 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5833__delegate.call(this, args);
};
G__5833.cljs$lang$maxFixedArity = 0;
G__5833.cljs$lang$applyTo = (function (arglist__5834){
var args = cljs.core.seq( arglist__5834 );;
return G__5833__delegate.call(this, args);
});
return G__5833;
})()
;
});
var partial__5828 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__5835__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__5835 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5835__delegate.call(this, args);
};
G__5835.cljs$lang$maxFixedArity = 0;
G__5835.cljs$lang$applyTo = (function (arglist__5836){
var args = cljs.core.seq( arglist__5836 );;
return G__5835__delegate.call(this, args);
});
return G__5835;
})()
;
});
var partial__5829 = (function() { 
var G__5837__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__5838__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__5838 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5838__delegate.call(this, args);
};
G__5838.cljs$lang$maxFixedArity = 0;
G__5838.cljs$lang$applyTo = (function (arglist__5839){
var args = cljs.core.seq( arglist__5839 );;
return G__5838__delegate.call(this, args);
});
return G__5838;
})()
;
};
var G__5837 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__5837__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__5837.cljs$lang$maxFixedArity = 4;
G__5837.cljs$lang$applyTo = (function (arglist__5840){
var f = cljs.core.first(arglist__5840);
var arg1 = cljs.core.first(cljs.core.next(arglist__5840));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5840)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5840))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5840))));
return G__5837__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__5837;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__5826.call(this,f,arg1);
case  3 :
return partial__5827.call(this,f,arg1,arg2);
case  4 :
return partial__5828.call(this,f,arg1,arg2,arg3);
default:
return partial__5829.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5829.cljs$lang$applyTo;
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
var fnil__5841 = (function (f,x){
return (function() {
var G__5845 = null;
var G__5845__5846 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__5845__5847 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__5845__5848 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__5845__5849 = (function() { 
var G__5851__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__5851 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5851__delegate.call(this, a, b, c, ds);
};
G__5851.cljs$lang$maxFixedArity = 3;
G__5851.cljs$lang$applyTo = (function (arglist__5852){
var a = cljs.core.first(arglist__5852);
var b = cljs.core.first(cljs.core.next(arglist__5852));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5852)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5852)));
return G__5851__delegate.call(this, a, b, c, ds);
});
return G__5851;
})()
;
G__5845 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__5845__5846.call(this,a);
case  2 :
return G__5845__5847.call(this,a,b);
case  3 :
return G__5845__5848.call(this,a,b,c);
default:
return G__5845__5849.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5845.cljs$lang$maxFixedArity = 3;
G__5845.cljs$lang$applyTo = G__5845__5849.cljs$lang$applyTo;
return G__5845;
})()
});
var fnil__5842 = (function (f,x,y){
return (function() {
var G__5853 = null;
var G__5853__5854 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__5853__5855 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__5853__5856 = (function() { 
var G__5858__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__5858 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5858__delegate.call(this, a, b, c, ds);
};
G__5858.cljs$lang$maxFixedArity = 3;
G__5858.cljs$lang$applyTo = (function (arglist__5859){
var a = cljs.core.first(arglist__5859);
var b = cljs.core.first(cljs.core.next(arglist__5859));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5859)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5859)));
return G__5858__delegate.call(this, a, b, c, ds);
});
return G__5858;
})()
;
G__5853 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__5853__5854.call(this,a,b);
case  3 :
return G__5853__5855.call(this,a,b,c);
default:
return G__5853__5856.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5853.cljs$lang$maxFixedArity = 3;
G__5853.cljs$lang$applyTo = G__5853__5856.cljs$lang$applyTo;
return G__5853;
})()
});
var fnil__5843 = (function (f,x,y,z){
return (function() {
var G__5860 = null;
var G__5860__5861 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__5860__5862 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__5860__5863 = (function() { 
var G__5865__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__5865 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5865__delegate.call(this, a, b, c, ds);
};
G__5865.cljs$lang$maxFixedArity = 3;
G__5865.cljs$lang$applyTo = (function (arglist__5866){
var a = cljs.core.first(arglist__5866);
var b = cljs.core.first(cljs.core.next(arglist__5866));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5866)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5866)));
return G__5865__delegate.call(this, a, b, c, ds);
});
return G__5865;
})()
;
G__5860 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__5860__5861.call(this,a,b);
case  3 :
return G__5860__5862.call(this,a,b,c);
default:
return G__5860__5863.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5860.cljs$lang$maxFixedArity = 3;
G__5860.cljs$lang$applyTo = G__5860__5863.cljs$lang$applyTo;
return G__5860;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__5841.call(this,f,x);
case  3 :
return fnil__5842.call(this,f,x,y);
case  4 :
return fnil__5843.call(this,f,x,y,z);
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
var mapi__5869 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____5867 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____5867))
{var s__5868 = temp__3698__auto____5867;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__5868)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__5868)));
} else
{return null;
}
})));
});

return mapi__5869.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____5870 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____5870))
{var s__5871 = temp__3698__auto____5870;

var x__5872 = f.call(null,cljs.core.first.call(null,s__5871));

if(cljs.core.truth_((x__5872 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__5871));
} else
{return cljs.core.cons.call(null,x__5872,keep.call(null,f,cljs.core.rest.call(null,s__5871)));
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
var keepi__5882 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____5879 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____5879))
{var s__5880 = temp__3698__auto____5879;

var x__5881 = f.call(null,idx,cljs.core.first.call(null,s__5880));

if(cljs.core.truth_((x__5881 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__5880));
} else
{return cljs.core.cons.call(null,x__5881,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__5880)));
}
} else
{return null;
}
})));
});

return keepi__5882.call(null,0,coll);
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
var every_pred__5927 = (function (p){
return (function() {
var ep1 = null;
var ep1__5932 = (function (){
return true;
});
var ep1__5933 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__5934 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5889 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____5889))
{return p.call(null,y);
} else
{return and__3546__auto____5889;
}
})());
});
var ep1__5935 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5890 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____5890))
{var and__3546__auto____5891 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____5891))
{return p.call(null,z);
} else
{return and__3546__auto____5891;
}
} else
{return and__3546__auto____5890;
}
})());
});
var ep1__5936 = (function() { 
var G__5938__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5892 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____5892))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____5892;
}
})());
};
var G__5938 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5938__delegate.call(this, x, y, z, args);
};
G__5938.cljs$lang$maxFixedArity = 3;
G__5938.cljs$lang$applyTo = (function (arglist__5939){
var x = cljs.core.first(arglist__5939);
var y = cljs.core.first(cljs.core.next(arglist__5939));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5939)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5939)));
return G__5938__delegate.call(this, x, y, z, args);
});
return G__5938;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__5932.call(this);
case  1 :
return ep1__5933.call(this,x);
case  2 :
return ep1__5934.call(this,x,y);
case  3 :
return ep1__5935.call(this,x,y,z);
default:
return ep1__5936.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__5936.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__5928 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__5940 = (function (){
return true;
});
var ep2__5941 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5893 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____5893))
{return p2.call(null,x);
} else
{return and__3546__auto____5893;
}
})());
});
var ep2__5942 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5894 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____5894))
{var and__3546__auto____5895 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____5895))
{var and__3546__auto____5896 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____5896))
{return p2.call(null,y);
} else
{return and__3546__auto____5896;
}
} else
{return and__3546__auto____5895;
}
} else
{return and__3546__auto____5894;
}
})());
});
var ep2__5943 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5897 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____5897))
{var and__3546__auto____5898 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____5898))
{var and__3546__auto____5899 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____5899))
{var and__3546__auto____5900 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____5900))
{var and__3546__auto____5901 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____5901))
{return p2.call(null,z);
} else
{return and__3546__auto____5901;
}
} else
{return and__3546__auto____5900;
}
} else
{return and__3546__auto____5899;
}
} else
{return and__3546__auto____5898;
}
} else
{return and__3546__auto____5897;
}
})());
});
var ep2__5944 = (function() { 
var G__5946__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5902 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____5902))
{return cljs.core.every_QMARK_.call(null,(function (p1__5873_SHARP_){
var and__3546__auto____5903 = p1.call(null,p1__5873_SHARP_);

if(cljs.core.truth_(and__3546__auto____5903))
{return p2.call(null,p1__5873_SHARP_);
} else
{return and__3546__auto____5903;
}
}),args);
} else
{return and__3546__auto____5902;
}
})());
};
var G__5946 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5946__delegate.call(this, x, y, z, args);
};
G__5946.cljs$lang$maxFixedArity = 3;
G__5946.cljs$lang$applyTo = (function (arglist__5947){
var x = cljs.core.first(arglist__5947);
var y = cljs.core.first(cljs.core.next(arglist__5947));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5947)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5947)));
return G__5946__delegate.call(this, x, y, z, args);
});
return G__5946;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__5940.call(this);
case  1 :
return ep2__5941.call(this,x);
case  2 :
return ep2__5942.call(this,x,y);
case  3 :
return ep2__5943.call(this,x,y,z);
default:
return ep2__5944.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__5944.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__5929 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__5948 = (function (){
return true;
});
var ep3__5949 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5904 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____5904))
{var and__3546__auto____5905 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____5905))
{return p3.call(null,x);
} else
{return and__3546__auto____5905;
}
} else
{return and__3546__auto____5904;
}
})());
});
var ep3__5950 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5906 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____5906))
{var and__3546__auto____5907 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____5907))
{var and__3546__auto____5908 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____5908))
{var and__3546__auto____5909 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____5909))
{var and__3546__auto____5910 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____5910))
{return p3.call(null,y);
} else
{return and__3546__auto____5910;
}
} else
{return and__3546__auto____5909;
}
} else
{return and__3546__auto____5908;
}
} else
{return and__3546__auto____5907;
}
} else
{return and__3546__auto____5906;
}
})());
});
var ep3__5951 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5911 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____5911))
{var and__3546__auto____5912 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____5912))
{var and__3546__auto____5913 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____5913))
{var and__3546__auto____5914 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____5914))
{var and__3546__auto____5915 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____5915))
{var and__3546__auto____5916 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____5916))
{var and__3546__auto____5917 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____5917))
{var and__3546__auto____5918 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____5918))
{return p3.call(null,z);
} else
{return and__3546__auto____5918;
}
} else
{return and__3546__auto____5917;
}
} else
{return and__3546__auto____5916;
}
} else
{return and__3546__auto____5915;
}
} else
{return and__3546__auto____5914;
}
} else
{return and__3546__auto____5913;
}
} else
{return and__3546__auto____5912;
}
} else
{return and__3546__auto____5911;
}
})());
});
var ep3__5952 = (function() { 
var G__5954__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5919 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____5919))
{return cljs.core.every_QMARK_.call(null,(function (p1__5874_SHARP_){
var and__3546__auto____5920 = p1.call(null,p1__5874_SHARP_);

if(cljs.core.truth_(and__3546__auto____5920))
{var and__3546__auto____5921 = p2.call(null,p1__5874_SHARP_);

if(cljs.core.truth_(and__3546__auto____5921))
{return p3.call(null,p1__5874_SHARP_);
} else
{return and__3546__auto____5921;
}
} else
{return and__3546__auto____5920;
}
}),args);
} else
{return and__3546__auto____5919;
}
})());
};
var G__5954 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5954__delegate.call(this, x, y, z, args);
};
G__5954.cljs$lang$maxFixedArity = 3;
G__5954.cljs$lang$applyTo = (function (arglist__5955){
var x = cljs.core.first(arglist__5955);
var y = cljs.core.first(cljs.core.next(arglist__5955));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5955)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5955)));
return G__5954__delegate.call(this, x, y, z, args);
});
return G__5954;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__5948.call(this);
case  1 :
return ep3__5949.call(this,x);
case  2 :
return ep3__5950.call(this,x,y);
case  3 :
return ep3__5951.call(this,x,y,z);
default:
return ep3__5952.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__5952.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__5930 = (function() { 
var G__5956__delegate = function (p1,p2,p3,ps){
var ps__5922 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__5957 = (function (){
return true;
});
var epn__5958 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__5875_SHARP_){
return p1__5875_SHARP_.call(null,x);
}),ps__5922);
});
var epn__5959 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__5876_SHARP_){
var and__3546__auto____5923 = p1__5876_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____5923))
{return p1__5876_SHARP_.call(null,y);
} else
{return and__3546__auto____5923;
}
}),ps__5922);
});
var epn__5960 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__5877_SHARP_){
var and__3546__auto____5924 = p1__5877_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____5924))
{var and__3546__auto____5925 = p1__5877_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____5925))
{return p1__5877_SHARP_.call(null,z);
} else
{return and__3546__auto____5925;
}
} else
{return and__3546__auto____5924;
}
}),ps__5922);
});
var epn__5961 = (function() { 
var G__5963__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5926 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____5926))
{return cljs.core.every_QMARK_.call(null,(function (p1__5878_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__5878_SHARP_,args);
}),ps__5922);
} else
{return and__3546__auto____5926;
}
})());
};
var G__5963 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5963__delegate.call(this, x, y, z, args);
};
G__5963.cljs$lang$maxFixedArity = 3;
G__5963.cljs$lang$applyTo = (function (arglist__5964){
var x = cljs.core.first(arglist__5964);
var y = cljs.core.first(cljs.core.next(arglist__5964));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5964)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5964)));
return G__5963__delegate.call(this, x, y, z, args);
});
return G__5963;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__5957.call(this);
case  1 :
return epn__5958.call(this,x);
case  2 :
return epn__5959.call(this,x,y);
case  3 :
return epn__5960.call(this,x,y,z);
default:
return epn__5961.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__5961.cljs$lang$applyTo;
return epn;
})()
};
var G__5956 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5956__delegate.call(this, p1, p2, p3, ps);
};
G__5956.cljs$lang$maxFixedArity = 3;
G__5956.cljs$lang$applyTo = (function (arglist__5965){
var p1 = cljs.core.first(arglist__5965);
var p2 = cljs.core.first(cljs.core.next(arglist__5965));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5965)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5965)));
return G__5956__delegate.call(this, p1, p2, p3, ps);
});
return G__5956;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__5927.call(this,p1);
case  2 :
return every_pred__5928.call(this,p1,p2);
case  3 :
return every_pred__5929.call(this,p1,p2,p3);
default:
return every_pred__5930.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__5930.cljs$lang$applyTo;
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
var some_fn__6005 = (function (p){
return (function() {
var sp1 = null;
var sp1__6010 = (function (){
return null;
});
var sp1__6011 = (function (x){
return p.call(null,x);
});
var sp1__6012 = (function (x,y){
var or__3548__auto____5967 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____5967))
{return or__3548__auto____5967;
} else
{return p.call(null,y);
}
});
var sp1__6013 = (function (x,y,z){
var or__3548__auto____5968 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____5968))
{return or__3548__auto____5968;
} else
{var or__3548__auto____5969 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____5969))
{return or__3548__auto____5969;
} else
{return p.call(null,z);
}
}
});
var sp1__6014 = (function() { 
var G__6016__delegate = function (x,y,z,args){
var or__3548__auto____5970 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____5970))
{return or__3548__auto____5970;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__6016 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6016__delegate.call(this, x, y, z, args);
};
G__6016.cljs$lang$maxFixedArity = 3;
G__6016.cljs$lang$applyTo = (function (arglist__6017){
var x = cljs.core.first(arglist__6017);
var y = cljs.core.first(cljs.core.next(arglist__6017));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6017)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6017)));
return G__6016__delegate.call(this, x, y, z, args);
});
return G__6016;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__6010.call(this);
case  1 :
return sp1__6011.call(this,x);
case  2 :
return sp1__6012.call(this,x,y);
case  3 :
return sp1__6013.call(this,x,y,z);
default:
return sp1__6014.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__6014.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__6006 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__6018 = (function (){
return null;
});
var sp2__6019 = (function (x){
var or__3548__auto____5971 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____5971))
{return or__3548__auto____5971;
} else
{return p2.call(null,x);
}
});
var sp2__6020 = (function (x,y){
var or__3548__auto____5972 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____5972))
{return or__3548__auto____5972;
} else
{var or__3548__auto____5973 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____5973))
{return or__3548__auto____5973;
} else
{var or__3548__auto____5974 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____5974))
{return or__3548__auto____5974;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__6021 = (function (x,y,z){
var or__3548__auto____5975 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____5975))
{return or__3548__auto____5975;
} else
{var or__3548__auto____5976 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____5976))
{return or__3548__auto____5976;
} else
{var or__3548__auto____5977 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____5977))
{return or__3548__auto____5977;
} else
{var or__3548__auto____5978 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____5978))
{return or__3548__auto____5978;
} else
{var or__3548__auto____5979 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____5979))
{return or__3548__auto____5979;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__6022 = (function() { 
var G__6024__delegate = function (x,y,z,args){
var or__3548__auto____5980 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____5980))
{return or__3548__auto____5980;
} else
{return cljs.core.some.call(null,(function (p1__5883_SHARP_){
var or__3548__auto____5981 = p1.call(null,p1__5883_SHARP_);

if(cljs.core.truth_(or__3548__auto____5981))
{return or__3548__auto____5981;
} else
{return p2.call(null,p1__5883_SHARP_);
}
}),args);
}
};
var G__6024 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6024__delegate.call(this, x, y, z, args);
};
G__6024.cljs$lang$maxFixedArity = 3;
G__6024.cljs$lang$applyTo = (function (arglist__6025){
var x = cljs.core.first(arglist__6025);
var y = cljs.core.first(cljs.core.next(arglist__6025));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6025)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6025)));
return G__6024__delegate.call(this, x, y, z, args);
});
return G__6024;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__6018.call(this);
case  1 :
return sp2__6019.call(this,x);
case  2 :
return sp2__6020.call(this,x,y);
case  3 :
return sp2__6021.call(this,x,y,z);
default:
return sp2__6022.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__6022.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__6007 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__6026 = (function (){
return null;
});
var sp3__6027 = (function (x){
var or__3548__auto____5982 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____5982))
{return or__3548__auto____5982;
} else
{var or__3548__auto____5983 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____5983))
{return or__3548__auto____5983;
} else
{return p3.call(null,x);
}
}
});
var sp3__6028 = (function (x,y){
var or__3548__auto____5984 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____5984))
{return or__3548__auto____5984;
} else
{var or__3548__auto____5985 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____5985))
{return or__3548__auto____5985;
} else
{var or__3548__auto____5986 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____5986))
{return or__3548__auto____5986;
} else
{var or__3548__auto____5987 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____5987))
{return or__3548__auto____5987;
} else
{var or__3548__auto____5988 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____5988))
{return or__3548__auto____5988;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__6029 = (function (x,y,z){
var or__3548__auto____5989 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____5989))
{return or__3548__auto____5989;
} else
{var or__3548__auto____5990 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____5990))
{return or__3548__auto____5990;
} else
{var or__3548__auto____5991 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____5991))
{return or__3548__auto____5991;
} else
{var or__3548__auto____5992 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____5992))
{return or__3548__auto____5992;
} else
{var or__3548__auto____5993 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____5993))
{return or__3548__auto____5993;
} else
{var or__3548__auto____5994 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____5994))
{return or__3548__auto____5994;
} else
{var or__3548__auto____5995 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____5995))
{return or__3548__auto____5995;
} else
{var or__3548__auto____5996 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____5996))
{return or__3548__auto____5996;
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
var sp3__6030 = (function() { 
var G__6032__delegate = function (x,y,z,args){
var or__3548__auto____5997 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____5997))
{return or__3548__auto____5997;
} else
{return cljs.core.some.call(null,(function (p1__5884_SHARP_){
var or__3548__auto____5998 = p1.call(null,p1__5884_SHARP_);

if(cljs.core.truth_(or__3548__auto____5998))
{return or__3548__auto____5998;
} else
{var or__3548__auto____5999 = p2.call(null,p1__5884_SHARP_);

if(cljs.core.truth_(or__3548__auto____5999))
{return or__3548__auto____5999;
} else
{return p3.call(null,p1__5884_SHARP_);
}
}
}),args);
}
};
var G__6032 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6032__delegate.call(this, x, y, z, args);
};
G__6032.cljs$lang$maxFixedArity = 3;
G__6032.cljs$lang$applyTo = (function (arglist__6033){
var x = cljs.core.first(arglist__6033);
var y = cljs.core.first(cljs.core.next(arglist__6033));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6033)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6033)));
return G__6032__delegate.call(this, x, y, z, args);
});
return G__6032;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__6026.call(this);
case  1 :
return sp3__6027.call(this,x);
case  2 :
return sp3__6028.call(this,x,y);
case  3 :
return sp3__6029.call(this,x,y,z);
default:
return sp3__6030.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__6030.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__6008 = (function() { 
var G__6034__delegate = function (p1,p2,p3,ps){
var ps__6000 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__6035 = (function (){
return null;
});
var spn__6036 = (function (x){
return cljs.core.some.call(null,(function (p1__5885_SHARP_){
return p1__5885_SHARP_.call(null,x);
}),ps__6000);
});
var spn__6037 = (function (x,y){
return cljs.core.some.call(null,(function (p1__5886_SHARP_){
var or__3548__auto____6001 = p1__5886_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____6001))
{return or__3548__auto____6001;
} else
{return p1__5886_SHARP_.call(null,y);
}
}),ps__6000);
});
var spn__6038 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__5887_SHARP_){
var or__3548__auto____6002 = p1__5887_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____6002))
{return or__3548__auto____6002;
} else
{var or__3548__auto____6003 = p1__5887_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____6003))
{return or__3548__auto____6003;
} else
{return p1__5887_SHARP_.call(null,z);
}
}
}),ps__6000);
});
var spn__6039 = (function() { 
var G__6041__delegate = function (x,y,z,args){
var or__3548__auto____6004 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____6004))
{return or__3548__auto____6004;
} else
{return cljs.core.some.call(null,(function (p1__5888_SHARP_){
return cljs.core.some.call(null,p1__5888_SHARP_,args);
}),ps__6000);
}
};
var G__6041 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6041__delegate.call(this, x, y, z, args);
};
G__6041.cljs$lang$maxFixedArity = 3;
G__6041.cljs$lang$applyTo = (function (arglist__6042){
var x = cljs.core.first(arglist__6042);
var y = cljs.core.first(cljs.core.next(arglist__6042));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6042)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6042)));
return G__6041__delegate.call(this, x, y, z, args);
});
return G__6041;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__6035.call(this);
case  1 :
return spn__6036.call(this,x);
case  2 :
return spn__6037.call(this,x,y);
case  3 :
return spn__6038.call(this,x,y,z);
default:
return spn__6039.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__6039.cljs$lang$applyTo;
return spn;
})()
};
var G__6034 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6034__delegate.call(this, p1, p2, p3, ps);
};
G__6034.cljs$lang$maxFixedArity = 3;
G__6034.cljs$lang$applyTo = (function (arglist__6043){
var p1 = cljs.core.first(arglist__6043);
var p2 = cljs.core.first(cljs.core.next(arglist__6043));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6043)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6043)));
return G__6034__delegate.call(this, p1, p2, p3, ps);
});
return G__6034;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__6005.call(this,p1);
case  2 :
return some_fn__6006.call(this,p1,p2);
case  3 :
return some_fn__6007.call(this,p1,p2,p3);
default:
return some_fn__6008.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__6008.cljs$lang$applyTo;
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
var map__6056 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6044 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6044))
{var s__6045 = temp__3698__auto____6044;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__6045)),map.call(null,f,cljs.core.rest.call(null,s__6045)));
} else
{return null;
}
})));
});
var map__6057 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__6046 = cljs.core.seq.call(null,c1);
var s2__6047 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____6048 = s1__6046;

if(cljs.core.truth_(and__3546__auto____6048))
{return s2__6047;
} else
{return and__3546__auto____6048;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__6046),cljs.core.first.call(null,s2__6047)),map.call(null,f,cljs.core.rest.call(null,s1__6046),cljs.core.rest.call(null,s2__6047)));
} else
{return null;
}
})));
});
var map__6058 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__6049 = cljs.core.seq.call(null,c1);
var s2__6050 = cljs.core.seq.call(null,c2);
var s3__6051 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____6052 = s1__6049;

if(cljs.core.truth_(and__3546__auto____6052))
{var and__3546__auto____6053 = s2__6050;

if(cljs.core.truth_(and__3546__auto____6053))
{return s3__6051;
} else
{return and__3546__auto____6053;
}
} else
{return and__3546__auto____6052;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__6049),cljs.core.first.call(null,s2__6050),cljs.core.first.call(null,s3__6051)),map.call(null,f,cljs.core.rest.call(null,s1__6049),cljs.core.rest.call(null,s2__6050),cljs.core.rest.call(null,s3__6051)));
} else
{return null;
}
})));
});
var map__6059 = (function() { 
var G__6061__delegate = function (f,c1,c2,c3,colls){
var step__6055 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__6054 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__6054)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__6054),step.call(null,map.call(null,cljs.core.rest,ss__6054)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__5966_SHARP_){
return cljs.core.apply.call(null,f,p1__5966_SHARP_);
}),step__6055.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__6061 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__6061__delegate.call(this, f, c1, c2, c3, colls);
};
G__6061.cljs$lang$maxFixedArity = 4;
G__6061.cljs$lang$applyTo = (function (arglist__6062){
var f = cljs.core.first(arglist__6062);
var c1 = cljs.core.first(cljs.core.next(arglist__6062));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6062)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6062))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6062))));
return G__6061__delegate.call(this, f, c1, c2, c3, colls);
});
return G__6061;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__6056.call(this,f,c1);
case  3 :
return map__6057.call(this,f,c1,c2);
case  4 :
return map__6058.call(this,f,c1,c2,c3);
default:
return map__6059.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__6059.cljs$lang$applyTo;
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
{var temp__3698__auto____6063 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6063))
{var s__6064 = temp__3698__auto____6063;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__6064),take.call(null,(n - 1),cljs.core.rest.call(null,s__6064)));
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
var step__6067 = (function (n,coll){
while(true){
var s__6065 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____6066 = (n > 0);

if(cljs.core.truth_(and__3546__auto____6066))
{return s__6065;
} else
{return and__3546__auto____6066;
}
})()))
{{
var G__6068 = (n - 1);
var G__6069 = cljs.core.rest.call(null,s__6065);
n = G__6068;
coll = G__6069;
continue;
}
} else
{return s__6065;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__6067.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__6070 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__6071 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__6070.call(this,n);
case  2 :
return drop_last__6071.call(this,n,s);
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
var s__6073 = cljs.core.seq.call(null,coll);
var lead__6074 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__6074))
{{
var G__6075 = cljs.core.next.call(null,s__6073);
var G__6076 = cljs.core.next.call(null,lead__6074);
s__6073 = G__6075;
lead__6074 = G__6076;
continue;
}
} else
{return s__6073;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__6079 = (function (pred,coll){
while(true){
var s__6077 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____6078 = s__6077;

if(cljs.core.truth_(and__3546__auto____6078))
{return pred.call(null,cljs.core.first.call(null,s__6077));
} else
{return and__3546__auto____6078;
}
})()))
{{
var G__6080 = pred;
var G__6081 = cljs.core.rest.call(null,s__6077);
pred = G__6080;
coll = G__6081;
continue;
}
} else
{return s__6077;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__6079.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6082 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6082))
{var s__6083 = temp__3698__auto____6082;

return cljs.core.concat.call(null,s__6083,cycle.call(null,s__6083));
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
var repeat__6084 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__6085 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__6084.call(this,n);
case  2 :
return repeat__6085.call(this,n,x);
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
var repeatedly__6087 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__6088 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__6087.call(this,n);
case  2 :
return repeatedly__6088.call(this,n,f);
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
var interleave__6094 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__6090 = cljs.core.seq.call(null,c1);
var s2__6091 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____6092 = s1__6090;

if(cljs.core.truth_(and__3546__auto____6092))
{return s2__6091;
} else
{return and__3546__auto____6092;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__6090),cljs.core.cons.call(null,cljs.core.first.call(null,s2__6091),interleave.call(null,cljs.core.rest.call(null,s1__6090),cljs.core.rest.call(null,s2__6091))));
} else
{return null;
}
})));
});
var interleave__6095 = (function() { 
var G__6097__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__6093 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__6093)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__6093),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__6093)));
} else
{return null;
}
})));
};
var G__6097 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6097__delegate.call(this, c1, c2, colls);
};
G__6097.cljs$lang$maxFixedArity = 2;
G__6097.cljs$lang$applyTo = (function (arglist__6098){
var c1 = cljs.core.first(arglist__6098);
var c2 = cljs.core.first(cljs.core.next(arglist__6098));
var colls = cljs.core.rest(cljs.core.next(arglist__6098));
return G__6097__delegate.call(this, c1, c2, colls);
});
return G__6097;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__6094.call(this,c1,c2);
default:
return interleave__6095.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__6095.cljs$lang$applyTo;
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
var cat__6101 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____6099 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____6099))
{var coll__6100 = temp__3695__auto____6099;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__6100),cat.call(null,cljs.core.rest.call(null,coll__6100),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__6101.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__6102 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__6103 = (function() { 
var G__6105__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__6105 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6105__delegate.call(this, f, coll, colls);
};
G__6105.cljs$lang$maxFixedArity = 2;
G__6105.cljs$lang$applyTo = (function (arglist__6106){
var f = cljs.core.first(arglist__6106);
var coll = cljs.core.first(cljs.core.next(arglist__6106));
var colls = cljs.core.rest(cljs.core.next(arglist__6106));
return G__6105__delegate.call(this, f, coll, colls);
});
return G__6105;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__6102.call(this,f,coll);
default:
return mapcat__6103.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__6103.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6107 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6107))
{var s__6108 = temp__3698__auto____6107;

var f__6109 = cljs.core.first.call(null,s__6108);
var r__6110 = cljs.core.rest.call(null,s__6108);

if(cljs.core.truth_(pred.call(null,f__6109)))
{return cljs.core.cons.call(null,f__6109,filter.call(null,pred,r__6110));
} else
{return filter.call(null,pred,r__6110);
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
var walk__6112 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__6112.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__6111_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__6111_SHARP_));
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
var partition__6119 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__6120 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6113 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6113))
{var s__6114 = temp__3698__auto____6113;

var p__6115 = cljs.core.take.call(null,n,s__6114);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__6115))))
{return cljs.core.cons.call(null,p__6115,partition.call(null,n,step,cljs.core.drop.call(null,step,s__6114)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__6121 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6116 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6116))
{var s__6117 = temp__3698__auto____6116;

var p__6118 = cljs.core.take.call(null,n,s__6117);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__6118))))
{return cljs.core.cons.call(null,p__6118,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__6117)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__6118,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__6119.call(this,n,step);
case  3 :
return partition__6120.call(this,n,step,pad);
case  4 :
return partition__6121.call(this,n,step,pad,coll);
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
var get_in__6127 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__6128 = (function (m,ks,not_found){
var sentinel__6123 = cljs.core.lookup_sentinel;
var m__6124 = m;
var ks__6125 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__6125))
{var m__6126 = cljs.core.get.call(null,m__6124,cljs.core.first.call(null,ks__6125),sentinel__6123);

if(cljs.core.truth_((sentinel__6123 === m__6126)))
{return not_found;
} else
{{
var G__6130 = sentinel__6123;
var G__6131 = m__6126;
var G__6132 = cljs.core.next.call(null,ks__6125);
sentinel__6123 = G__6130;
m__6124 = G__6131;
ks__6125 = G__6132;
continue;
}
}
} else
{return m__6124;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__6127.call(this,m,ks);
case  3 :
return get_in__6128.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__6133,v){
var vec__6134__6135 = p__6133;
var k__6136 = cljs.core.nth.call(null,vec__6134__6135,0,null);
var ks__6137 = cljs.core.nthnext.call(null,vec__6134__6135,1);

if(cljs.core.truth_(ks__6137))
{return cljs.core.assoc.call(null,m,k__6136,assoc_in.call(null,cljs.core.get.call(null,m,k__6136),ks__6137,v));
} else
{return cljs.core.assoc.call(null,m,k__6136,v);
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
var update_in__delegate = function (m,p__6138,f,args){
var vec__6139__6140 = p__6138;
var k__6141 = cljs.core.nth.call(null,vec__6139__6140,0,null);
var ks__6142 = cljs.core.nthnext.call(null,vec__6139__6140,1);

if(cljs.core.truth_(ks__6142))
{return cljs.core.assoc.call(null,m,k__6141,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__6141),ks__6142,f,args));
} else
{return cljs.core.assoc.call(null,m,k__6141,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__6141),args));
}
};
var update_in = function (m,p__6138,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__6138, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__6143){
var m = cljs.core.first(arglist__6143);
var p__6138 = cljs.core.first(cljs.core.next(arglist__6143));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6143)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6143)));
return update_in__delegate.call(this, m, p__6138, f, args);
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
var this__6144 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6177 = null;
var G__6177__6178 = (function (coll,k){
var this__6145 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__6177__6179 = (function (coll,k,not_found){
var this__6146 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__6177 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6177__6178.call(this,coll,k);
case  3 :
return G__6177__6179.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6177;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__6147 = this;
var new_array__6148 = cljs.core.aclone.call(null,this__6147.array);

(new_array__6148[k] = v);
return (new cljs.core.Vector(this__6147.meta,new_array__6148));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__6181 = null;
var G__6181__6182 = (function (tsym6149,k){
var this__6151 = this;
var tsym6149__6152 = this;

var coll__6153 = tsym6149__6152;

return cljs.core._lookup.call(null,coll__6153,k);
});
var G__6181__6183 = (function (tsym6150,k,not_found){
var this__6154 = this;
var tsym6150__6155 = this;

var coll__6156 = tsym6150__6155;

return cljs.core._lookup.call(null,coll__6156,k,not_found);
});
G__6181 = function(tsym6150,k,not_found){
switch(arguments.length){
case  2 :
return G__6181__6182.call(this,tsym6150,k);
case  3 :
return G__6181__6183.call(this,tsym6150,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6181;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6157 = this;
var new_array__6158 = cljs.core.aclone.call(null,this__6157.array);

new_array__6158.push(o);
return (new cljs.core.Vector(this__6157.meta,new_array__6158));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__6185 = null;
var G__6185__6186 = (function (v,f){
var this__6159 = this;
return cljs.core.ci_reduce.call(null,this__6159.array,f);
});
var G__6185__6187 = (function (v,f,start){
var this__6160 = this;
return cljs.core.ci_reduce.call(null,this__6160.array,f,start);
});
G__6185 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__6185__6186.call(this,v,f);
case  3 :
return G__6185__6187.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6185;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6161 = this;
if(cljs.core.truth_((this__6161.array.length > 0)))
{var vector_seq__6162 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__6161.array.length)))
{return cljs.core.cons.call(null,(this__6161.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__6162.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6163 = this;
return this__6163.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__6164 = this;
var count__6165 = this__6164.array.length;

if(cljs.core.truth_((count__6165 > 0)))
{return (this__6164.array[(count__6165 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__6166 = this;
if(cljs.core.truth_((this__6166.array.length > 0)))
{var new_array__6167 = cljs.core.aclone.call(null,this__6166.array);

new_array__6167.pop();
return (new cljs.core.Vector(this__6166.meta,new_array__6167));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__6168 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6169 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6170 = this;
return (new cljs.core.Vector(meta,this__6170.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6171 = this;
return this__6171.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__6189 = null;
var G__6189__6190 = (function (coll,n){
var this__6172 = this;
if(cljs.core.truth_((function (){var and__3546__auto____6173 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____6173))
{return (n < this__6172.array.length);
} else
{return and__3546__auto____6173;
}
})()))
{return (this__6172.array[n]);
} else
{return null;
}
});
var G__6189__6191 = (function (coll,n,not_found){
var this__6174 = this;
if(cljs.core.truth_((function (){var and__3546__auto____6175 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____6175))
{return (n < this__6174.array.length);
} else
{return and__3546__auto____6175;
}
})()))
{return (this__6174.array[n]);
} else
{return not_found;
}
});
G__6189 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__6189__6190.call(this,coll,n);
case  3 :
return G__6189__6191.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6189;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6176 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__6176.meta);
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
vector.cljs$lang$applyTo = (function (arglist__6193){
var args = cljs.core.seq( arglist__6193 );;
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
var this__6194 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6222 = null;
var G__6222__6223 = (function (coll,k){
var this__6195 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__6222__6224 = (function (coll,k,not_found){
var this__6196 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__6222 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6222__6223.call(this,coll,k);
case  3 :
return G__6222__6224.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6222;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__6197 = this;
var v_pos__6198 = (this__6197.start + key);

return (new cljs.core.Subvec(this__6197.meta,cljs.core._assoc.call(null,this__6197.v,v_pos__6198,val),this__6197.start,((this__6197.end > (v_pos__6198 + 1)) ? this__6197.end : (v_pos__6198 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__6226 = null;
var G__6226__6227 = (function (tsym6199,k){
var this__6201 = this;
var tsym6199__6202 = this;

var coll__6203 = tsym6199__6202;

return cljs.core._lookup.call(null,coll__6203,k);
});
var G__6226__6228 = (function (tsym6200,k,not_found){
var this__6204 = this;
var tsym6200__6205 = this;

var coll__6206 = tsym6200__6205;

return cljs.core._lookup.call(null,coll__6206,k,not_found);
});
G__6226 = function(tsym6200,k,not_found){
switch(arguments.length){
case  2 :
return G__6226__6227.call(this,tsym6200,k);
case  3 :
return G__6226__6228.call(this,tsym6200,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6226;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6207 = this;
return (new cljs.core.Subvec(this__6207.meta,cljs.core._assoc_n.call(null,this__6207.v,this__6207.end,o),this__6207.start,(this__6207.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__6230 = null;
var G__6230__6231 = (function (coll,f){
var this__6208 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__6230__6232 = (function (coll,f,start){
var this__6209 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
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
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6210 = this;
var subvec_seq__6211 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__6210.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__6210.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__6211.call(null,this__6210.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6212 = this;
return (this__6212.end - this__6212.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__6213 = this;
return cljs.core._nth.call(null,this__6213.v,(this__6213.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__6214 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__6214.start,this__6214.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__6214.meta,this__6214.v,this__6214.start,(this__6214.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__6215 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6216 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6217 = this;
return (new cljs.core.Subvec(meta,this__6217.v,this__6217.start,this__6217.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6218 = this;
return this__6218.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__6234 = null;
var G__6234__6235 = (function (coll,n){
var this__6219 = this;
return cljs.core._nth.call(null,this__6219.v,(this__6219.start + n));
});
var G__6234__6236 = (function (coll,n,not_found){
var this__6220 = this;
return cljs.core._nth.call(null,this__6220.v,(this__6220.start + n),not_found);
});
G__6234 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__6234__6235.call(this,coll,n);
case  3 :
return G__6234__6236.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6234;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6221 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__6221.meta);
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
var subvec__6238 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__6239 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__6238.call(this,v,start);
case  3 :
return subvec__6239.call(this,v,start,end);
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
var this__6241 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__6242 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6243 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6244 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6244.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6245 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__6246 = this;
return cljs.core._first.call(null,this__6246.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__6247 = this;
var temp__3695__auto____6248 = cljs.core.next.call(null,this__6247.front);

if(cljs.core.truth_(temp__3695__auto____6248))
{var f1__6249 = temp__3695__auto____6248;

return (new cljs.core.PersistentQueueSeq(this__6247.meta,f1__6249,this__6247.rear));
} else
{if(cljs.core.truth_((this__6247.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__6247.meta,this__6247.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6250 = this;
return this__6250.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6251 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__6251.front,this__6251.rear));
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
var this__6252 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6253 = this;
if(cljs.core.truth_(this__6253.front))
{return (new cljs.core.PersistentQueue(this__6253.meta,(this__6253.count + 1),this__6253.front,cljs.core.conj.call(null,(function (){var or__3548__auto____6254 = this__6253.rear;

if(cljs.core.truth_(or__3548__auto____6254))
{return or__3548__auto____6254;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__6253.meta,(this__6253.count + 1),cljs.core.conj.call(null,this__6253.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6255 = this;
var rear__6256 = cljs.core.seq.call(null,this__6255.rear);

if(cljs.core.truth_((function (){var or__3548__auto____6257 = this__6255.front;

if(cljs.core.truth_(or__3548__auto____6257))
{return or__3548__auto____6257;
} else
{return rear__6256;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__6255.front,cljs.core.seq.call(null,rear__6256)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6258 = this;
return this__6258.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__6259 = this;
return cljs.core._first.call(null,this__6259.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__6260 = this;
if(cljs.core.truth_(this__6260.front))
{var temp__3695__auto____6261 = cljs.core.next.call(null,this__6260.front);

if(cljs.core.truth_(temp__3695__auto____6261))
{var f1__6262 = temp__3695__auto____6261;

return (new cljs.core.PersistentQueue(this__6260.meta,(this__6260.count - 1),f1__6262,this__6260.rear));
} else
{return (new cljs.core.PersistentQueue(this__6260.meta,(this__6260.count - 1),cljs.core.seq.call(null,this__6260.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__6263 = this;
return cljs.core.first.call(null,this__6263.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__6264 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6265 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6266 = this;
return (new cljs.core.PersistentQueue(meta,this__6266.count,this__6266.front,this__6266.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6267 = this;
return this__6267.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6268 = this;
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
var this__6269 = this;
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
var len__6270 = array.length;

var i__6271 = 0;

while(true){
if(cljs.core.truth_((i__6271 < len__6270)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__6271]))))
{return i__6271;
} else
{{
var G__6272 = (i__6271 + incr);
i__6271 = G__6272;
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
var obj_map_contains_key_QMARK___6274 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___6275 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____6273 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____6273))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____6273;
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
return obj_map_contains_key_QMARK___6274.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___6275.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__6278 = cljs.core.hash.call(null,a);
var b__6279 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__6278 < b__6279)))
{return -1;
} else
{if(cljs.core.truth_((a__6278 > b__6279)))
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
var this__6280 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6307 = null;
var G__6307__6308 = (function (coll,k){
var this__6281 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__6307__6309 = (function (coll,k,not_found){
var this__6282 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__6282.strobj,(this__6282.strobj[k]),not_found);
});
G__6307 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6307__6308.call(this,coll,k);
case  3 :
return G__6307__6309.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6307;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__6283 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__6284 = goog.object.clone.call(null,this__6283.strobj);
var overwrite_QMARK___6285 = new_strobj__6284.hasOwnProperty(k);

(new_strobj__6284[k] = v);
if(cljs.core.truth_(overwrite_QMARK___6285))
{return (new cljs.core.ObjMap(this__6283.meta,this__6283.keys,new_strobj__6284));
} else
{var new_keys__6286 = cljs.core.aclone.call(null,this__6283.keys);

new_keys__6286.push(k);
return (new cljs.core.ObjMap(this__6283.meta,new_keys__6286,new_strobj__6284));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__6283.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__6287 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__6287.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__6311 = null;
var G__6311__6312 = (function (tsym6288,k){
var this__6290 = this;
var tsym6288__6291 = this;

var coll__6292 = tsym6288__6291;

return cljs.core._lookup.call(null,coll__6292,k);
});
var G__6311__6313 = (function (tsym6289,k,not_found){
var this__6293 = this;
var tsym6289__6294 = this;

var coll__6295 = tsym6289__6294;

return cljs.core._lookup.call(null,coll__6295,k,not_found);
});
G__6311 = function(tsym6289,k,not_found){
switch(arguments.length){
case  2 :
return G__6311__6312.call(this,tsym6289,k);
case  3 :
return G__6311__6313.call(this,tsym6289,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6311;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__6296 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6297 = this;
if(cljs.core.truth_((this__6297.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__6277_SHARP_){
return cljs.core.vector.call(null,p1__6277_SHARP_,(this__6297.strobj[p1__6277_SHARP_]));
}),this__6297.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6298 = this;
return this__6298.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6299 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6300 = this;
return (new cljs.core.ObjMap(meta,this__6300.keys,this__6300.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6301 = this;
return this__6301.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6302 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__6302.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__6303 = this;
if(cljs.core.truth_((function (){var and__3546__auto____6304 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____6304))
{return this__6303.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____6304;
}
})()))
{var new_keys__6305 = cljs.core.aclone.call(null,this__6303.keys);
var new_strobj__6306 = goog.object.clone.call(null,this__6303.strobj);

new_keys__6305.splice(cljs.core.scan_array.call(null,1,k,new_keys__6305),1);
cljs.core.js_delete.call(null,new_strobj__6306,k);
return (new cljs.core.ObjMap(this__6303.meta,new_keys__6305,new_strobj__6306));
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
var this__6316 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6354 = null;
var G__6354__6355 = (function (coll,k){
var this__6317 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__6354__6356 = (function (coll,k,not_found){
var this__6318 = this;
var bucket__6319 = (this__6318.hashobj[cljs.core.hash.call(null,k)]);
var i__6320 = (cljs.core.truth_(bucket__6319)?cljs.core.scan_array.call(null,2,k,bucket__6319):null);

if(cljs.core.truth_(i__6320))
{return (bucket__6319[(i__6320 + 1)]);
} else
{return not_found;
}
});
G__6354 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6354__6355.call(this,coll,k);
case  3 :
return G__6354__6356.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6354;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__6321 = this;
var h__6322 = cljs.core.hash.call(null,k);
var bucket__6323 = (this__6321.hashobj[h__6322]);

if(cljs.core.truth_(bucket__6323))
{var new_bucket__6324 = cljs.core.aclone.call(null,bucket__6323);
var new_hashobj__6325 = goog.object.clone.call(null,this__6321.hashobj);

(new_hashobj__6325[h__6322] = new_bucket__6324);
var temp__3695__auto____6326 = cljs.core.scan_array.call(null,2,k,new_bucket__6324);

if(cljs.core.truth_(temp__3695__auto____6326))
{var i__6327 = temp__3695__auto____6326;

(new_bucket__6324[(i__6327 + 1)] = v);
return (new cljs.core.HashMap(this__6321.meta,this__6321.count,new_hashobj__6325));
} else
{new_bucket__6324.push(k,v);
return (new cljs.core.HashMap(this__6321.meta,(this__6321.count + 1),new_hashobj__6325));
}
} else
{var new_hashobj__6328 = goog.object.clone.call(null,this__6321.hashobj);

(new_hashobj__6328[h__6322] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__6321.meta,(this__6321.count + 1),new_hashobj__6328));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__6329 = this;
var bucket__6330 = (this__6329.hashobj[cljs.core.hash.call(null,k)]);
var i__6331 = (cljs.core.truth_(bucket__6330)?cljs.core.scan_array.call(null,2,k,bucket__6330):null);

if(cljs.core.truth_(i__6331))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__6358 = null;
var G__6358__6359 = (function (tsym6332,k){
var this__6334 = this;
var tsym6332__6335 = this;

var coll__6336 = tsym6332__6335;

return cljs.core._lookup.call(null,coll__6336,k);
});
var G__6358__6360 = (function (tsym6333,k,not_found){
var this__6337 = this;
var tsym6333__6338 = this;

var coll__6339 = tsym6333__6338;

return cljs.core._lookup.call(null,coll__6339,k,not_found);
});
G__6358 = function(tsym6333,k,not_found){
switch(arguments.length){
case  2 :
return G__6358__6359.call(this,tsym6333,k);
case  3 :
return G__6358__6360.call(this,tsym6333,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6358;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__6340 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6341 = this;
if(cljs.core.truth_((this__6341.count > 0)))
{var hashes__6342 = cljs.core.js_keys.call(null,this__6341.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__6315_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__6341.hashobj[p1__6315_SHARP_])));
}),hashes__6342);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6343 = this;
return this__6343.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6344 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6345 = this;
return (new cljs.core.HashMap(meta,this__6345.count,this__6345.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6346 = this;
return this__6346.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6347 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__6347.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__6348 = this;
var h__6349 = cljs.core.hash.call(null,k);
var bucket__6350 = (this__6348.hashobj[h__6349]);
var i__6351 = (cljs.core.truth_(bucket__6350)?cljs.core.scan_array.call(null,2,k,bucket__6350):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__6351)))
{return coll;
} else
{var new_hashobj__6352 = goog.object.clone.call(null,this__6348.hashobj);

if(cljs.core.truth_((3 > bucket__6350.length)))
{cljs.core.js_delete.call(null,new_hashobj__6352,h__6349);
} else
{var new_bucket__6353 = cljs.core.aclone.call(null,bucket__6350);

new_bucket__6353.splice(i__6351,2);
(new_hashobj__6352[h__6349] = new_bucket__6353);
}
return (new cljs.core.HashMap(this__6348.meta,(this__6348.count - 1),new_hashobj__6352));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__6362 = ks.length;

var i__6363 = 0;
var out__6364 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__6363 < len__6362)))
{{
var G__6365 = (i__6363 + 1);
var G__6366 = cljs.core.assoc.call(null,out__6364,(ks[i__6363]),(vs[i__6363]));
i__6363 = G__6365;
out__6364 = G__6366;
continue;
}
} else
{return out__6364;
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
var in$__6367 = cljs.core.seq.call(null,keyvals);
var out__6368 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__6367))
{{
var G__6369 = cljs.core.nnext.call(null,in$__6367);
var G__6370 = cljs.core.assoc.call(null,out__6368,cljs.core.first.call(null,in$__6367),cljs.core.second.call(null,in$__6367));
in$__6367 = G__6369;
out__6368 = G__6370;
continue;
}
} else
{return out__6368;
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
hash_map.cljs$lang$applyTo = (function (arglist__6371){
var keyvals = cljs.core.seq( arglist__6371 );;
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
{return cljs.core.reduce.call(null,(function (p1__6372_SHARP_,p2__6373_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____6374 = p1__6372_SHARP_;

if(cljs.core.truth_(or__3548__auto____6374))
{return or__3548__auto____6374;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__6373_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__6375){
var maps = cljs.core.seq( arglist__6375 );;
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
{var merge_entry__6378 = (function (m,e){
var k__6376 = cljs.core.first.call(null,e);
var v__6377 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__6376)))
{return cljs.core.assoc.call(null,m,k__6376,f.call(null,cljs.core.get.call(null,m,k__6376),v__6377));
} else
{return cljs.core.assoc.call(null,m,k__6376,v__6377);
}
});
var merge2__6380 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__6378,(function (){var or__3548__auto____6379 = m1;

if(cljs.core.truth_(or__3548__auto____6379))
{return or__3548__auto____6379;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__6380,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__6381){
var f = cljs.core.first(arglist__6381);
var maps = cljs.core.rest(arglist__6381);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__6383 = cljs.core.ObjMap.fromObject([],{});
var keys__6384 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__6384))
{var key__6385 = cljs.core.first.call(null,keys__6384);
var entry__6386 = cljs.core.get.call(null,map,key__6385,"\uFDD0'user/not-found");

{
var G__6387 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__6386,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__6383,key__6385,entry__6386):ret__6383);
var G__6388 = cljs.core.next.call(null,keys__6384);
ret__6383 = G__6387;
keys__6384 = G__6388;
continue;
}
} else
{return ret__6383;
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
var this__6389 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6410 = null;
var G__6410__6411 = (function (coll,v){
var this__6390 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__6410__6412 = (function (coll,v,not_found){
var this__6391 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__6391.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__6410 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__6410__6411.call(this,coll,v);
case  3 :
return G__6410__6412.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6410;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__6414 = null;
var G__6414__6415 = (function (tsym6392,k){
var this__6394 = this;
var tsym6392__6395 = this;

var coll__6396 = tsym6392__6395;

return cljs.core._lookup.call(null,coll__6396,k);
});
var G__6414__6416 = (function (tsym6393,k,not_found){
var this__6397 = this;
var tsym6393__6398 = this;

var coll__6399 = tsym6393__6398;

return cljs.core._lookup.call(null,coll__6399,k,not_found);
});
G__6414 = function(tsym6393,k,not_found){
switch(arguments.length){
case  2 :
return G__6414__6415.call(this,tsym6393,k);
case  3 :
return G__6414__6416.call(this,tsym6393,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6414;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6400 = this;
return (new cljs.core.Set(this__6400.meta,cljs.core.assoc.call(null,this__6400.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6401 = this;
return cljs.core.keys.call(null,this__6401.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__6402 = this;
return (new cljs.core.Set(this__6402.meta,cljs.core.dissoc.call(null,this__6402.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6403 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6404 = this;
var and__3546__auto____6405 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____6405))
{var and__3546__auto____6406 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____6406))
{return cljs.core.every_QMARK_.call(null,(function (p1__6382_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__6382_SHARP_);
}),other);
} else
{return and__3546__auto____6406;
}
} else
{return and__3546__auto____6405;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6407 = this;
return (new cljs.core.Set(meta,this__6407.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6408 = this;
return this__6408.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6409 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__6409.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__6419 = cljs.core.seq.call(null,coll);
var out__6420 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__6419))))
{{
var G__6421 = cljs.core.rest.call(null,in$__6419);
var G__6422 = cljs.core.conj.call(null,out__6420,cljs.core.first.call(null,in$__6419));
in$__6419 = G__6421;
out__6420 = G__6422;
continue;
}
} else
{return out__6420;
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
{var n__6423 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____6424 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____6424))
{var e__6425 = temp__3695__auto____6424;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__6425));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__6423,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__6418_SHARP_){
var temp__3695__auto____6426 = cljs.core.find.call(null,smap,p1__6418_SHARP_);

if(cljs.core.truth_(temp__3695__auto____6426))
{var e__6427 = temp__3695__auto____6426;

return cljs.core.second.call(null,e__6427);
} else
{return p1__6418_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__6435 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__6428,seen){
while(true){
var vec__6429__6430 = p__6428;
var f__6431 = cljs.core.nth.call(null,vec__6429__6430,0,null);
var xs__6432 = vec__6429__6430;

var temp__3698__auto____6433 = cljs.core.seq.call(null,xs__6432);

if(cljs.core.truth_(temp__3698__auto____6433))
{var s__6434 = temp__3698__auto____6433;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__6431)))
{{
var G__6436 = cljs.core.rest.call(null,s__6434);
var G__6437 = seen;
p__6428 = G__6436;
seen = G__6437;
continue;
}
} else
{return cljs.core.cons.call(null,f__6431,step.call(null,cljs.core.rest.call(null,s__6434),cljs.core.conj.call(null,seen,f__6431)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__6435.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__6438 = cljs.core.Vector.fromArray([]);
var s__6439 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__6439)))
{{
var G__6440 = cljs.core.conj.call(null,ret__6438,cljs.core.first.call(null,s__6439));
var G__6441 = cljs.core.next.call(null,s__6439);
ret__6438 = G__6440;
s__6439 = G__6441;
continue;
}
} else
{return cljs.core.seq.call(null,ret__6438);
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
{if(cljs.core.truth_((function (){var or__3548__auto____6442 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____6442))
{return or__3548__auto____6442;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__6443 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__6443 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__6443 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____6444 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____6444))
{return or__3548__auto____6444;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__6445 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__6445 > -1)))
{return cljs.core.subs.call(null,x,2,i__6445);
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
var map__6448 = cljs.core.ObjMap.fromObject([],{});
var ks__6449 = cljs.core.seq.call(null,keys);
var vs__6450 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____6451 = ks__6449;

if(cljs.core.truth_(and__3546__auto____6451))
{return vs__6450;
} else
{return and__3546__auto____6451;
}
})()))
{{
var G__6452 = cljs.core.assoc.call(null,map__6448,cljs.core.first.call(null,ks__6449),cljs.core.first.call(null,vs__6450));
var G__6453 = cljs.core.next.call(null,ks__6449);
var G__6454 = cljs.core.next.call(null,vs__6450);
map__6448 = G__6452;
ks__6449 = G__6453;
vs__6450 = G__6454;
continue;
}
} else
{return map__6448;
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
var max_key__6457 = (function (k,x){
return x;
});
var max_key__6458 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__6459 = (function() { 
var G__6461__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__6446_SHARP_,p2__6447_SHARP_){
return max_key.call(null,k,p1__6446_SHARP_,p2__6447_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__6461 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6461__delegate.call(this, k, x, y, more);
};
G__6461.cljs$lang$maxFixedArity = 3;
G__6461.cljs$lang$applyTo = (function (arglist__6462){
var k = cljs.core.first(arglist__6462);
var x = cljs.core.first(cljs.core.next(arglist__6462));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6462)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6462)));
return G__6461__delegate.call(this, k, x, y, more);
});
return G__6461;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__6457.call(this,k,x);
case  3 :
return max_key__6458.call(this,k,x,y);
default:
return max_key__6459.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__6459.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__6463 = (function (k,x){
return x;
});
var min_key__6464 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__6465 = (function() { 
var G__6467__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__6455_SHARP_,p2__6456_SHARP_){
return min_key.call(null,k,p1__6455_SHARP_,p2__6456_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__6467 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6467__delegate.call(this, k, x, y, more);
};
G__6467.cljs$lang$maxFixedArity = 3;
G__6467.cljs$lang$applyTo = (function (arglist__6468){
var k = cljs.core.first(arglist__6468);
var x = cljs.core.first(cljs.core.next(arglist__6468));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6468)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6468)));
return G__6467__delegate.call(this, k, x, y, more);
});
return G__6467;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__6463.call(this,k,x);
case  3 :
return min_key__6464.call(this,k,x,y);
default:
return min_key__6465.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__6465.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__6471 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__6472 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6469 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6469))
{var s__6470 = temp__3698__auto____6469;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__6470),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__6470)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__6471.call(this,n,step);
case  3 :
return partition_all__6472.call(this,n,step,coll);
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
var temp__3698__auto____6474 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6474))
{var s__6475 = temp__3698__auto____6474;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__6475))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__6475),take_while.call(null,pred,cljs.core.rest.call(null,s__6475)));
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
var this__6476 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__6477 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__6493 = null;
var G__6493__6494 = (function (rng,f){
var this__6478 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__6493__6495 = (function (rng,f,s){
var this__6479 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__6493 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__6493__6494.call(this,rng,f);
case  3 :
return G__6493__6495.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6493;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__6480 = this;
var comp__6481 = (cljs.core.truth_((this__6480.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__6481.call(null,this__6480.start,this__6480.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__6482 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__6482.end - this__6482.start) / this__6482.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__6483 = this;
return this__6483.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__6484 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__6484.meta,(this__6484.start + this__6484.step),this__6484.end,this__6484.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__6485 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__6486 = this;
return (new cljs.core.Range(meta,this__6486.start,this__6486.end,this__6486.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__6487 = this;
return this__6487.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__6497 = null;
var G__6497__6498 = (function (rng,n){
var this__6488 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__6488.start + (n * this__6488.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____6489 = (this__6488.start > this__6488.end);

if(cljs.core.truth_(and__3546__auto____6489))
{return cljs.core._EQ_.call(null,this__6488.step,0);
} else
{return and__3546__auto____6489;
}
})()))
{return this__6488.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__6497__6499 = (function (rng,n,not_found){
var this__6490 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__6490.start + (n * this__6490.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____6491 = (this__6490.start > this__6490.end);

if(cljs.core.truth_(and__3546__auto____6491))
{return cljs.core._EQ_.call(null,this__6490.step,0);
} else
{return and__3546__auto____6491;
}
})()))
{return this__6490.start;
} else
{return not_found;
}
}
});
G__6497 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__6497__6498.call(this,rng,n);
case  3 :
return G__6497__6499.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6497;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__6492 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6492.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__6501 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__6502 = (function (end){
return range.call(null,0,end,1);
});
var range__6503 = (function (start,end){
return range.call(null,start,end,1);
});
var range__6504 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__6501.call(this);
case  1 :
return range__6502.call(this,start);
case  2 :
return range__6503.call(this,start,end);
case  3 :
return range__6504.call(this,start,end,step);
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
var temp__3698__auto____6506 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6506))
{var s__6507 = temp__3698__auto____6506;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__6507),take_nth.call(null,n,cljs.core.drop.call(null,n,s__6507)));
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
var temp__3698__auto____6509 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6509))
{var s__6510 = temp__3698__auto____6509;

var fst__6511 = cljs.core.first.call(null,s__6510);
var fv__6512 = f.call(null,fst__6511);
var run__6513 = cljs.core.cons.call(null,fst__6511,cljs.core.take_while.call(null,(function (p1__6508_SHARP_){
return cljs.core._EQ_.call(null,fv__6512,f.call(null,p1__6508_SHARP_));
}),cljs.core.next.call(null,s__6510)));

return cljs.core.cons.call(null,run__6513,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__6513),s__6510))));
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
var reductions__6528 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____6524 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____6524))
{var s__6525 = temp__3695__auto____6524;

return reductions.call(null,f,cljs.core.first.call(null,s__6525),cljs.core.rest.call(null,s__6525));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__6529 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6526 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6526))
{var s__6527 = temp__3698__auto____6526;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__6527)),cljs.core.rest.call(null,s__6527));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__6528.call(this,f,init);
case  3 :
return reductions__6529.call(this,f,init,coll);
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
var juxt__6532 = (function (f){
return (function() {
var G__6537 = null;
var G__6537__6538 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__6537__6539 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__6537__6540 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__6537__6541 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__6537__6542 = (function() { 
var G__6544__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
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
var juxt__6533 = (function (f,g){
return (function() {
var G__6546 = null;
var G__6546__6547 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__6546__6548 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__6546__6549 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__6546__6550 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__6546__6551 = (function() { 
var G__6553__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__6553 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6553__delegate.call(this, x, y, z, args);
};
G__6553.cljs$lang$maxFixedArity = 3;
G__6553.cljs$lang$applyTo = (function (arglist__6554){
var x = cljs.core.first(arglist__6554);
var y = cljs.core.first(cljs.core.next(arglist__6554));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6554)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6554)));
return G__6553__delegate.call(this, x, y, z, args);
});
return G__6553;
})()
;
G__6546 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6546__6547.call(this);
case  1 :
return G__6546__6548.call(this,x);
case  2 :
return G__6546__6549.call(this,x,y);
case  3 :
return G__6546__6550.call(this,x,y,z);
default:
return G__6546__6551.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6546.cljs$lang$maxFixedArity = 3;
G__6546.cljs$lang$applyTo = G__6546__6551.cljs$lang$applyTo;
return G__6546;
})()
});
var juxt__6534 = (function (f,g,h){
return (function() {
var G__6555 = null;
var G__6555__6556 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__6555__6557 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__6555__6558 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__6555__6559 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__6555__6560 = (function() { 
var G__6562__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__6562 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6562__delegate.call(this, x, y, z, args);
};
G__6562.cljs$lang$maxFixedArity = 3;
G__6562.cljs$lang$applyTo = (function (arglist__6563){
var x = cljs.core.first(arglist__6563);
var y = cljs.core.first(cljs.core.next(arglist__6563));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6563)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6563)));
return G__6562__delegate.call(this, x, y, z, args);
});
return G__6562;
})()
;
G__6555 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6555__6556.call(this);
case  1 :
return G__6555__6557.call(this,x);
case  2 :
return G__6555__6558.call(this,x,y);
case  3 :
return G__6555__6559.call(this,x,y,z);
default:
return G__6555__6560.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6555.cljs$lang$maxFixedArity = 3;
G__6555.cljs$lang$applyTo = G__6555__6560.cljs$lang$applyTo;
return G__6555;
})()
});
var juxt__6535 = (function() { 
var G__6564__delegate = function (f,g,h,fs){
var fs__6531 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__6565 = null;
var G__6565__6566 = (function (){
return cljs.core.reduce.call(null,(function (p1__6514_SHARP_,p2__6515_SHARP_){
return cljs.core.conj.call(null,p1__6514_SHARP_,p2__6515_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__6531);
});
var G__6565__6567 = (function (x){
return cljs.core.reduce.call(null,(function (p1__6516_SHARP_,p2__6517_SHARP_){
return cljs.core.conj.call(null,p1__6516_SHARP_,p2__6517_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__6531);
});
var G__6565__6568 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__6518_SHARP_,p2__6519_SHARP_){
return cljs.core.conj.call(null,p1__6518_SHARP_,p2__6519_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__6531);
});
var G__6565__6569 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__6520_SHARP_,p2__6521_SHARP_){
return cljs.core.conj.call(null,p1__6520_SHARP_,p2__6521_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__6531);
});
var G__6565__6570 = (function() { 
var G__6572__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__6522_SHARP_,p2__6523_SHARP_){
return cljs.core.conj.call(null,p1__6522_SHARP_,cljs.core.apply.call(null,p2__6523_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__6531);
};
var G__6572 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6572__delegate.call(this, x, y, z, args);
};
G__6572.cljs$lang$maxFixedArity = 3;
G__6572.cljs$lang$applyTo = (function (arglist__6573){
var x = cljs.core.first(arglist__6573);
var y = cljs.core.first(cljs.core.next(arglist__6573));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6573)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6573)));
return G__6572__delegate.call(this, x, y, z, args);
});
return G__6572;
})()
;
G__6565 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6565__6566.call(this);
case  1 :
return G__6565__6567.call(this,x);
case  2 :
return G__6565__6568.call(this,x,y);
case  3 :
return G__6565__6569.call(this,x,y,z);
default:
return G__6565__6570.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6565.cljs$lang$maxFixedArity = 3;
G__6565.cljs$lang$applyTo = G__6565__6570.cljs$lang$applyTo;
return G__6565;
})()
};
var G__6564 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6564__delegate.call(this, f, g, h, fs);
};
G__6564.cljs$lang$maxFixedArity = 3;
G__6564.cljs$lang$applyTo = (function (arglist__6574){
var f = cljs.core.first(arglist__6574);
var g = cljs.core.first(cljs.core.next(arglist__6574));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6574)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6574)));
return G__6564__delegate.call(this, f, g, h, fs);
});
return G__6564;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__6532.call(this,f);
case  2 :
return juxt__6533.call(this,f,g);
case  3 :
return juxt__6534.call(this,f,g,h);
default:
return juxt__6535.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__6535.cljs$lang$applyTo;
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
var dorun__6576 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__6579 = cljs.core.next.call(null,coll);
coll = G__6579;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__6577 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____6575 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____6575))
{return (n > 0);
} else
{return and__3546__auto____6575;
}
})()))
{{
var G__6580 = (n - 1);
var G__6581 = cljs.core.next.call(null,coll);
n = G__6580;
coll = G__6581;
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
return dorun__6576.call(this,n);
case  2 :
return dorun__6577.call(this,n,coll);
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
var doall__6582 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__6583 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__6582.call(this,n);
case  2 :
return doall__6583.call(this,n,coll);
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
var matches__6585 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__6585),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__6585),1)))
{return cljs.core.first.call(null,matches__6585);
} else
{return cljs.core.vec.call(null,matches__6585);
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
var matches__6586 = re.exec(s);

if(cljs.core.truth_((matches__6586 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__6586),1)))
{return cljs.core.first.call(null,matches__6586);
} else
{return cljs.core.vec.call(null,matches__6586);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__6587 = cljs.core.re_find.call(null,re,s);
var match_idx__6588 = s.search(re);
var match_str__6589 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__6587))?cljs.core.first.call(null,match_data__6587):match_data__6587);
var post_match__6590 = cljs.core.subs.call(null,s,(match_idx__6588 + cljs.core.count.call(null,match_str__6589)));

if(cljs.core.truth_(match_data__6587))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__6587,re_seq.call(null,re,post_match__6590));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__6592__6593 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___6594 = cljs.core.nth.call(null,vec__6592__6593,0,null);
var flags__6595 = cljs.core.nth.call(null,vec__6592__6593,1,null);
var pattern__6596 = cljs.core.nth.call(null,vec__6592__6593,2,null);

return (new RegExp(pattern__6596,flags__6595));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__6591_SHARP_){
return print_one.call(null,p1__6591_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____6597 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____6597))
{var and__3546__auto____6601 = (function (){var x__2312__auto____6598 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____6599 = x__2312__auto____6598;

if(cljs.core.truth_(and__3546__auto____6599))
{var and__3546__auto____6600 = x__2312__auto____6598.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____6600))
{return cljs.core.not.call(null,x__2312__auto____6598.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____6600;
}
} else
{return and__3546__auto____6599;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__2312__auto____6598);
}
})();

if(cljs.core.truth_(and__3546__auto____6601))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____6601;
}
} else
{return and__3546__auto____6597;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__2312__auto____6602 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____6603 = x__2312__auto____6602;

if(cljs.core.truth_(and__3546__auto____6603))
{var and__3546__auto____6604 = x__2312__auto____6602.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____6604))
{return cljs.core.not.call(null,x__2312__auto____6602.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____6604;
}
} else
{return and__3546__auto____6603;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__2312__auto____6602);
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
var first_obj__6605 = cljs.core.first.call(null,objs);
var sb__6606 = (new goog.string.StringBuffer());

var G__6607__6608 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__6607__6608))
{var obj__6609 = cljs.core.first.call(null,G__6607__6608);
var G__6607__6610 = G__6607__6608;

while(true){
if(cljs.core.truth_((obj__6609 === first_obj__6605)))
{} else
{sb__6606.append(" ");
}
var G__6611__6612 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__6609,opts));

if(cljs.core.truth_(G__6611__6612))
{var string__6613 = cljs.core.first.call(null,G__6611__6612);
var G__6611__6614 = G__6611__6612;

while(true){
sb__6606.append(string__6613);
var temp__3698__auto____6615 = cljs.core.next.call(null,G__6611__6614);

if(cljs.core.truth_(temp__3698__auto____6615))
{var G__6611__6616 = temp__3698__auto____6615;

{
var G__6619 = cljs.core.first.call(null,G__6611__6616);
var G__6620 = G__6611__6616;
string__6613 = G__6619;
G__6611__6614 = G__6620;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____6617 = cljs.core.next.call(null,G__6607__6610);

if(cljs.core.truth_(temp__3698__auto____6617))
{var G__6607__6618 = temp__3698__auto____6617;

{
var G__6621 = cljs.core.first.call(null,G__6607__6618);
var G__6622 = G__6607__6618;
obj__6609 = G__6621;
G__6607__6610 = G__6622;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__6606);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__6623 = cljs.core.first.call(null,objs);

var G__6624__6625 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__6624__6625))
{var obj__6626 = cljs.core.first.call(null,G__6624__6625);
var G__6624__6627 = G__6624__6625;

while(true){
if(cljs.core.truth_((obj__6626 === first_obj__6623)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__6628__6629 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__6626,opts));

if(cljs.core.truth_(G__6628__6629))
{var string__6630 = cljs.core.first.call(null,G__6628__6629);
var G__6628__6631 = G__6628__6629;

while(true){
cljs.core.string_print.call(null,string__6630);
var temp__3698__auto____6632 = cljs.core.next.call(null,G__6628__6631);

if(cljs.core.truth_(temp__3698__auto____6632))
{var G__6628__6633 = temp__3698__auto____6632;

{
var G__6636 = cljs.core.first.call(null,G__6628__6633);
var G__6637 = G__6628__6633;
string__6630 = G__6636;
G__6628__6631 = G__6637;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____6634 = cljs.core.next.call(null,G__6624__6627);

if(cljs.core.truth_(temp__3698__auto____6634))
{var G__6624__6635 = temp__3698__auto____6634;

{
var G__6638 = cljs.core.first.call(null,G__6624__6635);
var G__6639 = G__6624__6635;
obj__6626 = G__6638;
G__6624__6627 = G__6639;
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
pr_str.cljs$lang$applyTo = (function (arglist__6640){
var objs = cljs.core.seq( arglist__6640 );;
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
pr.cljs$lang$applyTo = (function (arglist__6641){
var objs = cljs.core.seq( arglist__6641 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__6642){
var objs = cljs.core.seq( arglist__6642 );;
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
println.cljs$lang$applyTo = (function (arglist__6643){
var objs = cljs.core.seq( arglist__6643 );;
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
prn.cljs$lang$applyTo = (function (arglist__6644){
var objs = cljs.core.seq( arglist__6644 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__6645 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__6645,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____6646 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____6646))
{var nspc__6647 = temp__3698__auto____6646;

return cljs.core.str.call(null,nspc__6647,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____6648 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____6648))
{var nspc__6649 = temp__3698__auto____6648;

return cljs.core.str.call(null,nspc__6649,"\/");
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
var pr_pair__6650 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__6650,"{",", ","}",opts,coll);
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
var this__6651 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__6652 = this;
var G__6653__6654 = cljs.core.seq.call(null,this__6652.watches);

if(cljs.core.truth_(G__6653__6654))
{var G__6656__6658 = cljs.core.first.call(null,G__6653__6654);
var vec__6657__6659 = G__6656__6658;
var key__6660 = cljs.core.nth.call(null,vec__6657__6659,0,null);
var f__6661 = cljs.core.nth.call(null,vec__6657__6659,1,null);
var G__6653__6662 = G__6653__6654;

var G__6656__6663 = G__6656__6658;
var G__6653__6664 = G__6653__6662;

while(true){
var vec__6665__6666 = G__6656__6663;
var key__6667 = cljs.core.nth.call(null,vec__6665__6666,0,null);
var f__6668 = cljs.core.nth.call(null,vec__6665__6666,1,null);
var G__6653__6669 = G__6653__6664;

f__6668.call(null,key__6667,this$,oldval,newval);
var temp__3698__auto____6670 = cljs.core.next.call(null,G__6653__6669);

if(cljs.core.truth_(temp__3698__auto____6670))
{var G__6653__6671 = temp__3698__auto____6670;

{
var G__6678 = cljs.core.first.call(null,G__6653__6671);
var G__6679 = G__6653__6671;
G__6656__6663 = G__6678;
G__6653__6664 = G__6679;
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
var this__6672 = this;
return this$.watches = cljs.core.assoc.call(null,this__6672.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__6673 = this;
return this$.watches = cljs.core.dissoc.call(null,this__6673.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__6674 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__6674.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__6675 = this;
return this__6675.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__6676 = this;
return this__6676.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__6677 = this;
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
var atom__6686 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__6687 = (function() { 
var G__6689__delegate = function (x,p__6680){
var map__6681__6682 = p__6680;
var map__6681__6683 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6681__6682))?cljs.core.apply.call(null,cljs.core.hash_map,map__6681__6682):map__6681__6682);
var validator__6684 = cljs.core.get.call(null,map__6681__6683,"\uFDD0'validator");
var meta__6685 = cljs.core.get.call(null,map__6681__6683,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__6685,validator__6684,null));
};
var G__6689 = function (x,var_args){
var p__6680 = null;
if (goog.isDef(var_args)) {
  p__6680 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6689__delegate.call(this, x, p__6680);
};
G__6689.cljs$lang$maxFixedArity = 1;
G__6689.cljs$lang$applyTo = (function (arglist__6690){
var x = cljs.core.first(arglist__6690);
var p__6680 = cljs.core.rest(arglist__6690);
return G__6689__delegate.call(this, x, p__6680);
});
return G__6689;
})()
;
atom = function(x,var_args){
var p__6680 = var_args;
switch(arguments.length){
case  1 :
return atom__6686.call(this,x);
default:
return atom__6687.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__6687.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____6691 = a.validator;

if(cljs.core.truth_(temp__3698__auto____6691))
{var validate__6692 = temp__3698__auto____6691;

if(cljs.core.truth_(validate__6692.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3073))))));
}
} else
{}
var old_value__6693 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__6693,new_value);
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
var swap_BANG___6694 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___6695 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___6696 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___6697 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6698 = (function() { 
var G__6700__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__6700 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__6700__delegate.call(this, a, f, x, y, z, more);
};
G__6700.cljs$lang$maxFixedArity = 5;
G__6700.cljs$lang$applyTo = (function (arglist__6701){
var a = cljs.core.first(arglist__6701);
var f = cljs.core.first(cljs.core.next(arglist__6701));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6701)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6701))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6701)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6701)))));
return G__6700__delegate.call(this, a, f, x, y, z, more);
});
return G__6700;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___6694.call(this,a,f);
case  3 :
return swap_BANG___6695.call(this,a,f,x);
case  4 :
return swap_BANG___6696.call(this,a,f,x,y);
case  5 :
return swap_BANG___6697.call(this,a,f,x,y,z);
default:
return swap_BANG___6698.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6698.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__6702){
var iref = cljs.core.first(arglist__6702);
var f = cljs.core.first(cljs.core.next(arglist__6702));
var args = cljs.core.rest(cljs.core.next(arglist__6702));
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
var gensym__6703 = (function (){
return gensym.call(null,"G__");
});
var gensym__6704 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__6703.call(this);
case  1 :
return gensym__6704.call(this,prefix_string);
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
var this__6706 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__6706.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__6707 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__6707.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__6707.state,this__6707.f);
}
return cljs.core.deref.call(null,this__6707.state);
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
delay.cljs$lang$applyTo = (function (arglist__6708){
var body = cljs.core.seq( arglist__6708 );;
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
var map__6709__6710 = options;
var map__6709__6711 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6709__6710))?cljs.core.apply.call(null,cljs.core.hash_map,map__6709__6710):map__6709__6710);
var keywordize_keys__6712 = cljs.core.get.call(null,map__6709__6711,"\uFDD0'keywordize-keys");
var keyfn__6713 = (cljs.core.truth_(keywordize_keys__6712)?cljs.core.keyword:cljs.core.str);
var f__6719 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__2376__auto____6718 = (function iter__6714(s__6715){
return (new cljs.core.LazySeq(null,false,(function (){
var s__6715__6716 = s__6715;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__6715__6716)))
{var k__6717 = cljs.core.first.call(null,s__6715__6716);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__6713.call(null,k__6717),thisfn.call(null,(x[k__6717]))]),iter__6714.call(null,cljs.core.rest.call(null,s__6715__6716)));
} else
{return null;
}
break;
}
})));
});

return iter__2376__auto____6718.call(null,cljs.core.js_keys.call(null,x));
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

return f__6719.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__6720){
var x = cljs.core.first(arglist__6720);
var options = cljs.core.rest(arglist__6720);
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
var mem__6721 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__6725__delegate = function (args){
var temp__3695__auto____6722 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__6721),args);

if(cljs.core.truth_(temp__3695__auto____6722))
{var v__6723 = temp__3695__auto____6722;

return v__6723;
} else
{var ret__6724 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__6721,cljs.core.assoc,args,ret__6724);
return ret__6724;
}
};
var G__6725 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6725__delegate.call(this, args);
};
G__6725.cljs$lang$maxFixedArity = 0;
G__6725.cljs$lang$applyTo = (function (arglist__6726){
var args = cljs.core.seq( arglist__6726 );;
return G__6725__delegate.call(this, args);
});
return G__6725;
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
var trampoline__6728 = (function (f){
while(true){
var ret__6727 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__6727)))
{{
var G__6731 = ret__6727;
f = G__6731;
continue;
}
} else
{return ret__6727;
}
break;
}
});
var trampoline__6729 = (function() { 
var G__6732__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__6732 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6732__delegate.call(this, f, args);
};
G__6732.cljs$lang$maxFixedArity = 1;
G__6732.cljs$lang$applyTo = (function (arglist__6733){
var f = cljs.core.first(arglist__6733);
var args = cljs.core.rest(arglist__6733);
return G__6732__delegate.call(this, f, args);
});
return G__6732;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__6728.call(this,f);
default:
return trampoline__6729.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__6729.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__6734 = (function (){
return rand.call(null,1);
});
var rand__6735 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__6734.call(this);
case  1 :
return rand__6735.call(this,n);
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
var k__6737 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__6737,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__6737,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___6746 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___6747 = (function (h,child,parent){
var or__3548__auto____6738 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____6738))
{return or__3548__auto____6738;
} else
{var or__3548__auto____6739 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____6739))
{return or__3548__auto____6739;
} else
{var and__3546__auto____6740 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____6740))
{var and__3546__auto____6741 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____6741))
{var and__3546__auto____6742 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____6742))
{var ret__6743 = true;
var i__6744 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____6745 = cljs.core.not.call(null,ret__6743);

if(cljs.core.truth_(or__3548__auto____6745))
{return or__3548__auto____6745;
} else
{return cljs.core._EQ_.call(null,i__6744,cljs.core.count.call(null,parent));
}
})()))
{return ret__6743;
} else
{{
var G__6749 = isa_QMARK_.call(null,h,child.call(null,i__6744),parent.call(null,i__6744));
var G__6750 = (i__6744 + 1);
ret__6743 = G__6749;
i__6744 = G__6750;
continue;
}
}
break;
}
} else
{return and__3546__auto____6742;
}
} else
{return and__3546__auto____6741;
}
} else
{return and__3546__auto____6740;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___6746.call(this,h,child);
case  3 :
return isa_QMARK___6747.call(this,h,child,parent);
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
var parents__6751 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__6752 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__6751.call(this,h);
case  2 :
return parents__6752.call(this,h,tag);
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
var ancestors__6754 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__6755 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__6754.call(this,h);
case  2 :
return ancestors__6755.call(this,h,tag);
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
var descendants__6757 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__6758 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__6757.call(this,h);
case  2 :
return descendants__6758.call(this,h,tag);
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
var derive__6768 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__6769 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3369))))));
}
var tp__6763 = "\uFDD0'parents".call(null,h);
var td__6764 = "\uFDD0'descendants".call(null,h);
var ta__6765 = "\uFDD0'ancestors".call(null,h);
var tf__6766 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____6767 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__6763.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__6765.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__6765.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__6763,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__6766.call(null,"\uFDD0'ancestors".call(null,h),tag,td__6764,parent,ta__6765),"\uFDD0'descendants":tf__6766.call(null,"\uFDD0'descendants".call(null,h),parent,ta__6765,tag,td__6764)});
})());

if(cljs.core.truth_(or__3548__auto____6767))
{return or__3548__auto____6767;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__6768.call(this,h,tag);
case  3 :
return derive__6769.call(this,h,tag,parent);
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
var underive__6775 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__6776 = (function (h,tag,parent){
var parentMap__6771 = "\uFDD0'parents".call(null,h);
var childsParents__6772 = (cljs.core.truth_(parentMap__6771.call(null,tag))?cljs.core.disj.call(null,parentMap__6771.call(null,tag),parent):cljs.core.set([]));
var newParents__6773 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__6772))?cljs.core.assoc.call(null,parentMap__6771,tag,childsParents__6772):cljs.core.dissoc.call(null,parentMap__6771,tag));
var deriv_seq__6774 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__6760_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__6760_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__6760_SHARP_),cljs.core.second.call(null,p1__6760_SHARP_)));
}),cljs.core.seq.call(null,newParents__6773)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__6771.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__6761_SHARP_,p2__6762_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__6761_SHARP_,p2__6762_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__6774));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__6775.call(this,h,tag);
case  3 :
return underive__6776.call(this,h,tag,parent);
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
var xprefs__6778 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____6780 = (cljs.core.truth_((function (){var and__3546__auto____6779 = xprefs__6778;

if(cljs.core.truth_(and__3546__auto____6779))
{return xprefs__6778.call(null,y);
} else
{return and__3546__auto____6779;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____6780))
{return or__3548__auto____6780;
} else
{var or__3548__auto____6782 = (function (){var ps__6781 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__6781) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__6781),prefer_table)))
{} else
{}
{
var G__6785 = cljs.core.rest.call(null,ps__6781);
ps__6781 = G__6785;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____6782))
{return or__3548__auto____6782;
} else
{var or__3548__auto____6784 = (function (){var ps__6783 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__6783) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__6783),y,prefer_table)))
{} else
{}
{
var G__6786 = cljs.core.rest.call(null,ps__6783);
ps__6783 = G__6786;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____6784))
{return or__3548__auto____6784;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____6787 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____6787))
{return or__3548__auto____6787;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__6796 = cljs.core.reduce.call(null,(function (be,p__6788){
var vec__6789__6790 = p__6788;
var k__6791 = cljs.core.nth.call(null,vec__6789__6790,0,null);
var ___6792 = cljs.core.nth.call(null,vec__6789__6790,1,null);
var e__6793 = vec__6789__6790;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__6791)))
{var be2__6795 = (cljs.core.truth_((function (){var or__3548__auto____6794 = (be === null);

if(cljs.core.truth_(or__3548__auto____6794))
{return or__3548__auto____6794;
} else
{return cljs.core.dominates.call(null,k__6791,cljs.core.first.call(null,be),prefer_table);
}
})())?e__6793:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__6795),k__6791,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__6791," and ",cljs.core.first.call(null,be2__6795),", and neither is preferred")));
}
return be2__6795;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__6796))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__6796));
return cljs.core.second.call(null,best_entry__6796);
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
if(cljs.core.truth_((function (){var and__3546__auto____6797 = mf;

if(cljs.core.truth_(and__3546__auto____6797))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____6797;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____6798 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6798))
{return or__3548__auto____6798;
} else
{var or__3548__auto____6799 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____6799))
{return or__3548__auto____6799;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____6800 = mf;

if(cljs.core.truth_(and__3546__auto____6800))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____6800;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____6801 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6801))
{return or__3548__auto____6801;
} else
{var or__3548__auto____6802 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____6802))
{return or__3548__auto____6802;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____6803 = mf;

if(cljs.core.truth_(and__3546__auto____6803))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____6803;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____6804 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6804))
{return or__3548__auto____6804;
} else
{var or__3548__auto____6805 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____6805))
{return or__3548__auto____6805;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____6806 = mf;

if(cljs.core.truth_(and__3546__auto____6806))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____6806;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____6807 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6807))
{return or__3548__auto____6807;
} else
{var or__3548__auto____6808 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____6808))
{return or__3548__auto____6808;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____6809 = mf;

if(cljs.core.truth_(and__3546__auto____6809))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____6809;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____6810 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6810))
{return or__3548__auto____6810;
} else
{var or__3548__auto____6811 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____6811))
{return or__3548__auto____6811;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____6812 = mf;

if(cljs.core.truth_(and__3546__auto____6812))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____6812;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____6813 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6813))
{return or__3548__auto____6813;
} else
{var or__3548__auto____6814 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____6814))
{return or__3548__auto____6814;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____6815 = mf;

if(cljs.core.truth_(and__3546__auto____6815))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____6815;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____6816 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6816))
{return or__3548__auto____6816;
} else
{var or__3548__auto____6817 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____6817))
{return or__3548__auto____6817;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____6818 = mf;

if(cljs.core.truth_(and__3546__auto____6818))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____6818;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____6819 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6819))
{return or__3548__auto____6819;
} else
{var or__3548__auto____6820 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____6820))
{return or__3548__auto____6820;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__6821 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__6822 = cljs.core._get_method.call(null,mf,dispatch_val__6821);

if(cljs.core.truth_(target_fn__6822))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__6821)));
}
return cljs.core.apply.call(null,target_fn__6822,args);
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
var this__6823 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__6824 = this;
cljs.core.swap_BANG_.call(null,this__6824.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__6824.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__6824.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__6824.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__6825 = this;
cljs.core.swap_BANG_.call(null,this__6825.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__6825.method_cache,this__6825.method_table,this__6825.cached_hierarchy,this__6825.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__6826 = this;
cljs.core.swap_BANG_.call(null,this__6826.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__6826.method_cache,this__6826.method_table,this__6826.cached_hierarchy,this__6826.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__6827 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__6827.cached_hierarchy),cljs.core.deref.call(null,this__6827.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__6827.method_cache,this__6827.method_table,this__6827.cached_hierarchy,this__6827.hierarchy);
}
var temp__3695__auto____6828 = cljs.core.deref.call(null,this__6827.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____6828))
{var target_fn__6829 = temp__3695__auto____6828;

return target_fn__6829;
} else
{var temp__3695__auto____6830 = cljs.core.find_and_cache_best_method.call(null,this__6827.name,dispatch_val,this__6827.hierarchy,this__6827.method_table,this__6827.prefer_table,this__6827.method_cache,this__6827.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____6830))
{var target_fn__6831 = temp__3695__auto____6830;

return target_fn__6831;
} else
{return cljs.core.deref.call(null,this__6827.method_table).call(null,this__6827.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__6832 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__6832.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__6832.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__6832.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__6832.method_cache,this__6832.method_table,this__6832.cached_hierarchy,this__6832.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__6833 = this;
return cljs.core.deref.call(null,this__6833.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__6834 = this;
return cljs.core.deref.call(null,this__6834.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__6835 = this;
return cljs.core.do_dispatch.call(null,mf,this__6835.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__6836__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__6836 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6836__delegate.call(this, _, args);
};
G__6836.cljs$lang$maxFixedArity = 1;
G__6836.cljs$lang$applyTo = (function (arglist__6837){
var _ = cljs.core.first(arglist__6837);
var args = cljs.core.rest(arglist__6837);
return G__6836__delegate.call(this, _, args);
});
return G__6836;
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
