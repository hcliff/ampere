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
var or__3548__auto____5658 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____5658))
{return or__3548__auto____5658;
} else
{var or__3548__auto____5659 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____5659))
{return or__3548__auto____5659;
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
var _invoke__5723 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____5660 = this$;

if(cljs.core.truth_(and__3546__auto____5660))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5660;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____5661 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5661))
{return or__3548__auto____5661;
} else
{var or__3548__auto____5662 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5662))
{return or__3548__auto____5662;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__5724 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____5663 = this$;

if(cljs.core.truth_(and__3546__auto____5663))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5663;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____5664 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5664))
{return or__3548__auto____5664;
} else
{var or__3548__auto____5665 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5665))
{return or__3548__auto____5665;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__5725 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____5666 = this$;

if(cljs.core.truth_(and__3546__auto____5666))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5666;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____5667 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5667))
{return or__3548__auto____5667;
} else
{var or__3548__auto____5668 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5668))
{return or__3548__auto____5668;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__5726 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____5669 = this$;

if(cljs.core.truth_(and__3546__auto____5669))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5669;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____5670 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5670))
{return or__3548__auto____5670;
} else
{var or__3548__auto____5671 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5671))
{return or__3548__auto____5671;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5727 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____5672 = this$;

if(cljs.core.truth_(and__3546__auto____5672))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5672;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____5673 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5673))
{return or__3548__auto____5673;
} else
{var or__3548__auto____5674 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5674))
{return or__3548__auto____5674;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__5728 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____5675 = this$;

if(cljs.core.truth_(and__3546__auto____5675))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5675;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____5676 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5676))
{return or__3548__auto____5676;
} else
{var or__3548__auto____5677 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5677))
{return or__3548__auto____5677;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__5729 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____5678 = this$;

if(cljs.core.truth_(and__3546__auto____5678))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5678;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____5679 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5679))
{return or__3548__auto____5679;
} else
{var or__3548__auto____5680 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5680))
{return or__3548__auto____5680;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__5730 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____5681 = this$;

if(cljs.core.truth_(and__3546__auto____5681))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5681;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____5682 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5682))
{return or__3548__auto____5682;
} else
{var or__3548__auto____5683 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5683))
{return or__3548__auto____5683;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__5731 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____5684 = this$;

if(cljs.core.truth_(and__3546__auto____5684))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5684;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____5685 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5685))
{return or__3548__auto____5685;
} else
{var or__3548__auto____5686 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5686))
{return or__3548__auto____5686;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__5732 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____5687 = this$;

if(cljs.core.truth_(and__3546__auto____5687))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5687;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____5688 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5688))
{return or__3548__auto____5688;
} else
{var or__3548__auto____5689 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5689))
{return or__3548__auto____5689;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__5733 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____5690 = this$;

if(cljs.core.truth_(and__3546__auto____5690))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5690;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____5691 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5691))
{return or__3548__auto____5691;
} else
{var or__3548__auto____5692 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5692))
{return or__3548__auto____5692;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__5734 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____5693 = this$;

if(cljs.core.truth_(and__3546__auto____5693))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5693;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____5694 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5694))
{return or__3548__auto____5694;
} else
{var or__3548__auto____5695 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5695))
{return or__3548__auto____5695;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__5735 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____5696 = this$;

if(cljs.core.truth_(and__3546__auto____5696))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5696;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____5697 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5697))
{return or__3548__auto____5697;
} else
{var or__3548__auto____5698 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5698))
{return or__3548__auto____5698;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__5736 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____5699 = this$;

if(cljs.core.truth_(and__3546__auto____5699))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5699;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____5700 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5700))
{return or__3548__auto____5700;
} else
{var or__3548__auto____5701 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5701))
{return or__3548__auto____5701;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__5737 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____5702 = this$;

if(cljs.core.truth_(and__3546__auto____5702))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5702;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____5703 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5703))
{return or__3548__auto____5703;
} else
{var or__3548__auto____5704 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5704))
{return or__3548__auto____5704;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__5738 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____5705 = this$;

if(cljs.core.truth_(and__3546__auto____5705))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5705;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____5706 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5706))
{return or__3548__auto____5706;
} else
{var or__3548__auto____5707 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5707))
{return or__3548__auto____5707;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__5739 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____5708 = this$;

if(cljs.core.truth_(and__3546__auto____5708))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5708;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____5709 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5709))
{return or__3548__auto____5709;
} else
{var or__3548__auto____5710 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5710))
{return or__3548__auto____5710;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__5740 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____5711 = this$;

if(cljs.core.truth_(and__3546__auto____5711))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5711;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____5712 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5712))
{return or__3548__auto____5712;
} else
{var or__3548__auto____5713 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5713))
{return or__3548__auto____5713;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__5741 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____5714 = this$;

if(cljs.core.truth_(and__3546__auto____5714))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5714;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____5715 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5715))
{return or__3548__auto____5715;
} else
{var or__3548__auto____5716 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5716))
{return or__3548__auto____5716;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__5742 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____5717 = this$;

if(cljs.core.truth_(and__3546__auto____5717))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5717;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____5718 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5718))
{return or__3548__auto____5718;
} else
{var or__3548__auto____5719 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5719))
{return or__3548__auto____5719;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__5743 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____5720 = this$;

if(cljs.core.truth_(and__3546__auto____5720))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5720;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____5721 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5721))
{return or__3548__auto____5721;
} else
{var or__3548__auto____5722 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5722))
{return or__3548__auto____5722;
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
return _invoke__5723.call(this,this$);
case  2 :
return _invoke__5724.call(this,this$,a);
case  3 :
return _invoke__5725.call(this,this$,a,b);
case  4 :
return _invoke__5726.call(this,this$,a,b,c);
case  5 :
return _invoke__5727.call(this,this$,a,b,c,d);
case  6 :
return _invoke__5728.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__5729.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__5730.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__5731.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__5732.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__5733.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__5734.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__5735.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__5736.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__5737.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__5738.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__5739.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__5740.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__5741.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__5742.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__5743.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5745 = coll;

if(cljs.core.truth_(and__3546__auto____5745))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____5745;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____5746 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5746))
{return or__3548__auto____5746;
} else
{var or__3548__auto____5747 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____5747))
{return or__3548__auto____5747;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5748 = coll;

if(cljs.core.truth_(and__3546__auto____5748))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____5748;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____5749 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5749))
{return or__3548__auto____5749;
} else
{var or__3548__auto____5750 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____5750))
{return or__3548__auto____5750;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____5751 = coll;

if(cljs.core.truth_(and__3546__auto____5751))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____5751;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____5752 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5752))
{return or__3548__auto____5752;
} else
{var or__3548__auto____5753 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____5753))
{return or__3548__auto____5753;
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
var _nth__5760 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____5754 = coll;

if(cljs.core.truth_(and__3546__auto____5754))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____5754;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____5755 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5755))
{return or__3548__auto____5755;
} else
{var or__3548__auto____5756 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____5756))
{return or__3548__auto____5756;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__5761 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____5757 = coll;

if(cljs.core.truth_(and__3546__auto____5757))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____5757;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____5758 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5758))
{return or__3548__auto____5758;
} else
{var or__3548__auto____5759 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____5759))
{return or__3548__auto____5759;
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
return _nth__5760.call(this,coll,n);
case  3 :
return _nth__5761.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5763 = coll;

if(cljs.core.truth_(and__3546__auto____5763))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____5763;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____5764 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5764))
{return or__3548__auto____5764;
} else
{var or__3548__auto____5765 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____5765))
{return or__3548__auto____5765;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5766 = coll;

if(cljs.core.truth_(and__3546__auto____5766))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____5766;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____5767 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5767))
{return or__3548__auto____5767;
} else
{var or__3548__auto____5768 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____5768))
{return or__3548__auto____5768;
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
var _lookup__5775 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____5769 = o;

if(cljs.core.truth_(and__3546__auto____5769))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____5769;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____5770 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5770))
{return or__3548__auto____5770;
} else
{var or__3548__auto____5771 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____5771))
{return or__3548__auto____5771;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__5776 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____5772 = o;

if(cljs.core.truth_(and__3546__auto____5772))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____5772;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____5773 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5773))
{return or__3548__auto____5773;
} else
{var or__3548__auto____5774 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____5774))
{return or__3548__auto____5774;
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
return _lookup__5775.call(this,o,k);
case  3 :
return _lookup__5776.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____5778 = coll;

if(cljs.core.truth_(and__3546__auto____5778))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____5778;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____5779 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5779))
{return or__3548__auto____5779;
} else
{var or__3548__auto____5780 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____5780))
{return or__3548__auto____5780;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____5781 = coll;

if(cljs.core.truth_(and__3546__auto____5781))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____5781;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____5782 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5782))
{return or__3548__auto____5782;
} else
{var or__3548__auto____5783 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____5783))
{return or__3548__auto____5783;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____5784 = coll;

if(cljs.core.truth_(and__3546__auto____5784))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____5784;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____5785 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5785))
{return or__3548__auto____5785;
} else
{var or__3548__auto____5786 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____5786))
{return or__3548__auto____5786;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____5787 = coll;

if(cljs.core.truth_(and__3546__auto____5787))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____5787;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____5788 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5788))
{return or__3548__auto____5788;
} else
{var or__3548__auto____5789 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____5789))
{return or__3548__auto____5789;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5790 = coll;

if(cljs.core.truth_(and__3546__auto____5790))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____5790;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____5791 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5791))
{return or__3548__auto____5791;
} else
{var or__3548__auto____5792 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____5792))
{return or__3548__auto____5792;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5793 = coll;

if(cljs.core.truth_(and__3546__auto____5793))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____5793;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____5794 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5794))
{return or__3548__auto____5794;
} else
{var or__3548__auto____5795 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____5795))
{return or__3548__auto____5795;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____5796 = coll;

if(cljs.core.truth_(and__3546__auto____5796))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____5796;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____5797 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5797))
{return or__3548__auto____5797;
} else
{var or__3548__auto____5798 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____5798))
{return or__3548__auto____5798;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____5799 = o;

if(cljs.core.truth_(and__3546__auto____5799))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____5799;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____5800 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5800))
{return or__3548__auto____5800;
} else
{var or__3548__auto____5801 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____5801))
{return or__3548__auto____5801;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____5802 = o;

if(cljs.core.truth_(and__3546__auto____5802))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____5802;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____5803 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5803))
{return or__3548__auto____5803;
} else
{var or__3548__auto____5804 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____5804))
{return or__3548__auto____5804;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____5805 = o;

if(cljs.core.truth_(and__3546__auto____5805))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____5805;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____5806 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5806))
{return or__3548__auto____5806;
} else
{var or__3548__auto____5807 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____5807))
{return or__3548__auto____5807;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____5808 = o;

if(cljs.core.truth_(and__3546__auto____5808))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____5808;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____5809 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5809))
{return or__3548__auto____5809;
} else
{var or__3548__auto____5810 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____5810))
{return or__3548__auto____5810;
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
var _reduce__5817 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____5811 = coll;

if(cljs.core.truth_(and__3546__auto____5811))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____5811;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____5812 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5812))
{return or__3548__auto____5812;
} else
{var or__3548__auto____5813 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____5813))
{return or__3548__auto____5813;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__5818 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____5814 = coll;

if(cljs.core.truth_(and__3546__auto____5814))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____5814;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____5815 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5815))
{return or__3548__auto____5815;
} else
{var or__3548__auto____5816 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____5816))
{return or__3548__auto____5816;
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
return _reduce__5817.call(this,coll,f);
case  3 :
return _reduce__5818.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____5820 = o;

if(cljs.core.truth_(and__3546__auto____5820))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____5820;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____5821 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5821))
{return or__3548__auto____5821;
} else
{var or__3548__auto____5822 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____5822))
{return or__3548__auto____5822;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____5823 = o;

if(cljs.core.truth_(and__3546__auto____5823))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____5823;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____5824 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5824))
{return or__3548__auto____5824;
} else
{var or__3548__auto____5825 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____5825))
{return or__3548__auto____5825;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____5826 = o;

if(cljs.core.truth_(and__3546__auto____5826))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____5826;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____5827 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5827))
{return or__3548__auto____5827;
} else
{var or__3548__auto____5828 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____5828))
{return or__3548__auto____5828;
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
if(cljs.core.truth_((function (){var and__3546__auto____5829 = o;

if(cljs.core.truth_(and__3546__auto____5829))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____5829;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____5830 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5830))
{return or__3548__auto____5830;
} else
{var or__3548__auto____5831 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____5831))
{return or__3548__auto____5831;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____5832 = d;

if(cljs.core.truth_(and__3546__auto____5832))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____5832;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____5833 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____5833))
{return or__3548__auto____5833;
} else
{var or__3548__auto____5834 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____5834))
{return or__3548__auto____5834;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____5835 = this$;

if(cljs.core.truth_(and__3546__auto____5835))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____5835;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____5836 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5836))
{return or__3548__auto____5836;
} else
{var or__3548__auto____5837 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____5837))
{return or__3548__auto____5837;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____5838 = this$;

if(cljs.core.truth_(and__3546__auto____5838))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____5838;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____5839 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5839))
{return or__3548__auto____5839;
} else
{var or__3548__auto____5840 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____5840))
{return or__3548__auto____5840;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____5841 = this$;

if(cljs.core.truth_(and__3546__auto____5841))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____5841;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____5842 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5842))
{return or__3548__auto____5842;
} else
{var or__3548__auto____5843 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____5843))
{return or__3548__auto____5843;
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
var G__5844 = null;
var G__5844__5845 = (function (o,k){
return null;
});
var G__5844__5846 = (function (o,k,not_found){
return not_found;
});
G__5844 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__5844__5845.call(this,o,k);
case  3 :
return G__5844__5846.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5844;
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
var G__5848 = null;
var G__5848__5849 = (function (_,f){
return f.call(null);
});
var G__5848__5850 = (function (_,f,start){
return start;
});
G__5848 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__5848__5849.call(this,_,f);
case  3 :
return G__5848__5850.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5848;
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
var G__5852 = null;
var G__5852__5853 = (function (_,n){
return null;
});
var G__5852__5854 = (function (_,n,not_found){
return not_found;
});
G__5852 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__5852__5853.call(this,_,n);
case  3 :
return G__5852__5854.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5852;
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
var ci_reduce__5862 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__5856 = cljs.core._nth.call(null,cicoll,0);
var n__5857 = 1;

while(true){
if(cljs.core.truth_((n__5857 < cljs.core._count.call(null,cicoll))))
{{
var G__5866 = f.call(null,val__5856,cljs.core._nth.call(null,cicoll,n__5857));
var G__5867 = (n__5857 + 1);
val__5856 = G__5866;
n__5857 = G__5867;
continue;
}
} else
{return val__5856;
}
break;
}
}
});
var ci_reduce__5863 = (function (cicoll,f,val){
var val__5858 = val;
var n__5859 = 0;

while(true){
if(cljs.core.truth_((n__5859 < cljs.core._count.call(null,cicoll))))
{{
var G__5868 = f.call(null,val__5858,cljs.core._nth.call(null,cicoll,n__5859));
var G__5869 = (n__5859 + 1);
val__5858 = G__5868;
n__5859 = G__5869;
continue;
}
} else
{return val__5858;
}
break;
}
});
var ci_reduce__5864 = (function (cicoll,f,val,idx){
var val__5860 = val;
var n__5861 = idx;

while(true){
if(cljs.core.truth_((n__5861 < cljs.core._count.call(null,cicoll))))
{{
var G__5870 = f.call(null,val__5860,cljs.core._nth.call(null,cicoll,n__5861));
var G__5871 = (n__5861 + 1);
val__5860 = G__5870;
n__5861 = G__5871;
continue;
}
} else
{return val__5860;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__5862.call(this,cicoll,f);
case  3 :
return ci_reduce__5863.call(this,cicoll,f,val);
case  4 :
return ci_reduce__5864.call(this,cicoll,f,val,idx);
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
var this__5872 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__5885 = null;
var G__5885__5886 = (function (_,f){
var this__5873 = this;
return cljs.core.ci_reduce.call(null,this__5873.a,f,(this__5873.a[this__5873.i]),(this__5873.i + 1));
});
var G__5885__5887 = (function (_,f,start){
var this__5874 = this;
return cljs.core.ci_reduce.call(null,this__5874.a,f,start,this__5874.i);
});
G__5885 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__5885__5886.call(this,_,f);
case  3 :
return G__5885__5887.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5885;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5875 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5876 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__5889 = null;
var G__5889__5890 = (function (coll,n){
var this__5877 = this;
var i__5878 = (n + this__5877.i);

if(cljs.core.truth_((i__5878 < this__5877.a.length)))
{return (this__5877.a[i__5878]);
} else
{return null;
}
});
var G__5889__5891 = (function (coll,n,not_found){
var this__5879 = this;
var i__5880 = (n + this__5879.i);

if(cljs.core.truth_((i__5880 < this__5879.a.length)))
{return (this__5879.a[i__5880]);
} else
{return not_found;
}
});
G__5889 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__5889__5890.call(this,coll,n);
case  3 :
return G__5889__5891.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5889;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__5881 = this;
return (this__5881.a.length - this__5881.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__5882 = this;
return (this__5882.a[this__5882.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__5883 = this;
if(cljs.core.truth_(((this__5883.i + 1) < this__5883.a.length)))
{return (new cljs.core.IndexedSeq(this__5883.a,(this__5883.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__5884 = this;
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
var G__5893 = null;
var G__5893__5894 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__5893__5895 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__5893 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__5893__5894.call(this,array,f);
case  3 :
return G__5893__5895.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5893;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__5897 = null;
var G__5897__5898 = (function (array,k){
return (array[k]);
});
var G__5897__5899 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__5897 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__5897__5898.call(this,array,k);
case  3 :
return G__5897__5899.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5897;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__5901 = null;
var G__5901__5902 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__5901__5903 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__5901 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__5901__5902.call(this,array,n);
case  3 :
return G__5901__5903.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5901;
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
var temp__3698__auto____5905 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____5905))
{var s__5906 = temp__3698__auto____5905;

return cljs.core._first.call(null,s__5906);
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
var G__5907 = cljs.core.next.call(null,s);
s = G__5907;
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
var s__5908 = cljs.core.seq.call(null,x);
var n__5909 = 0;

while(true){
if(cljs.core.truth_(s__5908))
{{
var G__5910 = cljs.core.next.call(null,s__5908);
var G__5911 = (n__5909 + 1);
s__5908 = G__5910;
n__5909 = G__5911;
continue;
}
} else
{return n__5909;
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
var conj__5912 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__5913 = (function() { 
var G__5915__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__5916 = conj.call(null,coll,x);
var G__5917 = cljs.core.first.call(null,xs);
var G__5918 = cljs.core.next.call(null,xs);
coll = G__5916;
x = G__5917;
xs = G__5918;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__5915 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5915__delegate.call(this, coll, x, xs);
};
G__5915.cljs$lang$maxFixedArity = 2;
G__5915.cljs$lang$applyTo = (function (arglist__5919){
var coll = cljs.core.first(arglist__5919);
var x = cljs.core.first(cljs.core.next(arglist__5919));
var xs = cljs.core.rest(cljs.core.next(arglist__5919));
return G__5915__delegate.call(this, coll, x, xs);
});
return G__5915;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__5912.call(this,coll,x);
default:
return conj__5913.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__5913.cljs$lang$applyTo;
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
var nth__5920 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__5921 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__5920.call(this,coll,n);
case  3 :
return nth__5921.call(this,coll,n,not_found);
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
var get__5923 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__5924 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__5923.call(this,o,k);
case  3 :
return get__5924.call(this,o,k,not_found);
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
var assoc__5927 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__5928 = (function() { 
var G__5930__delegate = function (coll,k,v,kvs){
while(true){
var ret__5926 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__5931 = ret__5926;
var G__5932 = cljs.core.first.call(null,kvs);
var G__5933 = cljs.core.second.call(null,kvs);
var G__5934 = cljs.core.nnext.call(null,kvs);
coll = G__5931;
k = G__5932;
v = G__5933;
kvs = G__5934;
continue;
}
} else
{return ret__5926;
}
break;
}
};
var G__5930 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5930__delegate.call(this, coll, k, v, kvs);
};
G__5930.cljs$lang$maxFixedArity = 3;
G__5930.cljs$lang$applyTo = (function (arglist__5935){
var coll = cljs.core.first(arglist__5935);
var k = cljs.core.first(cljs.core.next(arglist__5935));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5935)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5935)));
return G__5930__delegate.call(this, coll, k, v, kvs);
});
return G__5930;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__5927.call(this,coll,k,v);
default:
return assoc__5928.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__5928.cljs$lang$applyTo;
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
var dissoc__5937 = (function (coll){
return coll;
});
var dissoc__5938 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__5939 = (function() { 
var G__5941__delegate = function (coll,k,ks){
while(true){
var ret__5936 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__5942 = ret__5936;
var G__5943 = cljs.core.first.call(null,ks);
var G__5944 = cljs.core.next.call(null,ks);
coll = G__5942;
k = G__5943;
ks = G__5944;
continue;
}
} else
{return ret__5936;
}
break;
}
};
var G__5941 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5941__delegate.call(this, coll, k, ks);
};
G__5941.cljs$lang$maxFixedArity = 2;
G__5941.cljs$lang$applyTo = (function (arglist__5945){
var coll = cljs.core.first(arglist__5945);
var k = cljs.core.first(cljs.core.next(arglist__5945));
var ks = cljs.core.rest(cljs.core.next(arglist__5945));
return G__5941__delegate.call(this, coll, k, ks);
});
return G__5941;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__5937.call(this,coll);
case  2 :
return dissoc__5938.call(this,coll,k);
default:
return dissoc__5939.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__5939.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__2312__auto____5946 = o;

if(cljs.core.truth_((function (){var and__3546__auto____5947 = x__2312__auto____5946;

if(cljs.core.truth_(and__3546__auto____5947))
{var and__3546__auto____5948 = x__2312__auto____5946.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____5948))
{return cljs.core.not.call(null,x__2312__auto____5946.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____5948;
}
} else
{return and__3546__auto____5947;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__2312__auto____5946);
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
var disj__5950 = (function (coll){
return coll;
});
var disj__5951 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__5952 = (function() { 
var G__5954__delegate = function (coll,k,ks){
while(true){
var ret__5949 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__5955 = ret__5949;
var G__5956 = cljs.core.first.call(null,ks);
var G__5957 = cljs.core.next.call(null,ks);
coll = G__5955;
k = G__5956;
ks = G__5957;
continue;
}
} else
{return ret__5949;
}
break;
}
};
var G__5954 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5954__delegate.call(this, coll, k, ks);
};
G__5954.cljs$lang$maxFixedArity = 2;
G__5954.cljs$lang$applyTo = (function (arglist__5958){
var coll = cljs.core.first(arglist__5958);
var k = cljs.core.first(cljs.core.next(arglist__5958));
var ks = cljs.core.rest(cljs.core.next(arglist__5958));
return G__5954__delegate.call(this, coll, k, ks);
});
return G__5954;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__5950.call(this,coll);
case  2 :
return disj__5951.call(this,coll,k);
default:
return disj__5952.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__5952.cljs$lang$applyTo;
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
{var x__2312__auto____5959 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5960 = x__2312__auto____5959;

if(cljs.core.truth_(and__3546__auto____5960))
{var and__3546__auto____5961 = x__2312__auto____5959.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____5961))
{return cljs.core.not.call(null,x__2312__auto____5959.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____5961;
}
} else
{return and__3546__auto____5960;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__2312__auto____5959);
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
{var x__2312__auto____5962 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5963 = x__2312__auto____5962;

if(cljs.core.truth_(and__3546__auto____5963))
{var and__3546__auto____5964 = x__2312__auto____5962.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____5964))
{return cljs.core.not.call(null,x__2312__auto____5962.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____5964;
}
} else
{return and__3546__auto____5963;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__2312__auto____5962);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__2312__auto____5965 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5966 = x__2312__auto____5965;

if(cljs.core.truth_(and__3546__auto____5966))
{var and__3546__auto____5967 = x__2312__auto____5965.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____5967))
{return cljs.core.not.call(null,x__2312__auto____5965.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____5967;
}
} else
{return and__3546__auto____5966;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__2312__auto____5965);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__2312__auto____5968 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5969 = x__2312__auto____5968;

if(cljs.core.truth_(and__3546__auto____5969))
{var and__3546__auto____5970 = x__2312__auto____5968.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____5970))
{return cljs.core.not.call(null,x__2312__auto____5968.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____5970;
}
} else
{return and__3546__auto____5969;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__2312__auto____5968);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__2312__auto____5971 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5972 = x__2312__auto____5971;

if(cljs.core.truth_(and__3546__auto____5972))
{var and__3546__auto____5973 = x__2312__auto____5971.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____5973))
{return cljs.core.not.call(null,x__2312__auto____5971.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____5973;
}
} else
{return and__3546__auto____5972;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__2312__auto____5971);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__2312__auto____5974 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5975 = x__2312__auto____5974;

if(cljs.core.truth_(and__3546__auto____5975))
{var and__3546__auto____5976 = x__2312__auto____5974.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____5976))
{return cljs.core.not.call(null,x__2312__auto____5974.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____5976;
}
} else
{return and__3546__auto____5975;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__2312__auto____5974);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__2312__auto____5977 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5978 = x__2312__auto____5977;

if(cljs.core.truth_(and__3546__auto____5978))
{var and__3546__auto____5979 = x__2312__auto____5977.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____5979))
{return cljs.core.not.call(null,x__2312__auto____5977.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____5979;
}
} else
{return and__3546__auto____5978;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__2312__auto____5977);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__5980 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__5980.push(key);
}));
return keys__5980;
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
{var x__2312__auto____5981 = s;

if(cljs.core.truth_((function (){var and__3546__auto____5982 = x__2312__auto____5981;

if(cljs.core.truth_(and__3546__auto____5982))
{var and__3546__auto____5983 = x__2312__auto____5981.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____5983))
{return cljs.core.not.call(null,x__2312__auto____5981.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____5983;
}
} else
{return and__3546__auto____5982;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__2312__auto____5981);
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
var and__3546__auto____5984 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____5984))
{return cljs.core.not.call(null,(function (){var or__3548__auto____5985 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____5985))
{return or__3548__auto____5985;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____5984;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____5986 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____5986))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____5986;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____5987 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____5987))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____5987;
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
var and__3546__auto____5988 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____5988))
{return (n == n.toFixed());
} else
{return and__3546__auto____5988;
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
if(cljs.core.truth_((function (){var and__3546__auto____5989 = coll;

if(cljs.core.truth_(and__3546__auto____5989))
{var and__3546__auto____5990 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____5990))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____5990;
}
} else
{return and__3546__auto____5989;
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
var distinct_QMARK___5995 = (function (x){
return true;
});
var distinct_QMARK___5996 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___5997 = (function() { 
var G__5999__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__5991 = cljs.core.set([y,x]);
var xs__5992 = more;

while(true){
var x__5993 = cljs.core.first.call(null,xs__5992);
var etc__5994 = cljs.core.next.call(null,xs__5992);

if(cljs.core.truth_(xs__5992))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__5991,x__5993)))
{return false;
} else
{{
var G__6000 = cljs.core.conj.call(null,s__5991,x__5993);
var G__6001 = etc__5994;
s__5991 = G__6000;
xs__5992 = G__6001;
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
var G__5999 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5999__delegate.call(this, x, y, more);
};
G__5999.cljs$lang$maxFixedArity = 2;
G__5999.cljs$lang$applyTo = (function (arglist__6002){
var x = cljs.core.first(arglist__6002);
var y = cljs.core.first(cljs.core.next(arglist__6002));
var more = cljs.core.rest(cljs.core.next(arglist__6002));
return G__5999__delegate.call(this, x, y, more);
});
return G__5999;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___5995.call(this,x);
case  2 :
return distinct_QMARK___5996.call(this,x,y);
default:
return distinct_QMARK___5997.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___5997.cljs$lang$applyTo;
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
var r__6003 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__6003)))
{return r__6003;
} else
{if(cljs.core.truth_(r__6003))
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
var sort__6005 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__6006 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__6004 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__6004,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__6004);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__6005.call(this,comp);
case  2 :
return sort__6006.call(this,comp,coll);
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
var sort_by__6008 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__6009 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__6008.call(this,keyfn,comp);
case  3 :
return sort_by__6009.call(this,keyfn,comp,coll);
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
var reduce__6011 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__6012 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__6011.call(this,f,val);
case  3 :
return reduce__6012.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__6018 = (function (f,coll){
var temp__3695__auto____6014 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____6014))
{var s__6015 = temp__3695__auto____6014;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__6015),cljs.core.next.call(null,s__6015));
} else
{return f.call(null);
}
});
var seq_reduce__6019 = (function (f,val,coll){
var val__6016 = val;
var coll__6017 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__6017))
{{
var G__6021 = f.call(null,val__6016,cljs.core.first.call(null,coll__6017));
var G__6022 = cljs.core.next.call(null,coll__6017);
val__6016 = G__6021;
coll__6017 = G__6022;
continue;
}
} else
{return val__6016;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__6018.call(this,f,val);
case  3 :
return seq_reduce__6019.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__6023 = null;
var G__6023__6024 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__6023__6025 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__6023 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__6023__6024.call(this,coll,f);
case  3 :
return G__6023__6025.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6023;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___6027 = (function (){
return 0;
});
var _PLUS___6028 = (function (x){
return x;
});
var _PLUS___6029 = (function (x,y){
return (x + y);
});
var _PLUS___6030 = (function() { 
var G__6032__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__6032 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6032__delegate.call(this, x, y, more);
};
G__6032.cljs$lang$maxFixedArity = 2;
G__6032.cljs$lang$applyTo = (function (arglist__6033){
var x = cljs.core.first(arglist__6033);
var y = cljs.core.first(cljs.core.next(arglist__6033));
var more = cljs.core.rest(cljs.core.next(arglist__6033));
return G__6032__delegate.call(this, x, y, more);
});
return G__6032;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___6027.call(this);
case  1 :
return _PLUS___6028.call(this,x);
case  2 :
return _PLUS___6029.call(this,x,y);
default:
return _PLUS___6030.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___6030.cljs$lang$applyTo;
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
var ___6034 = (function (x){
return (- x);
});
var ___6035 = (function (x,y){
return (x - y);
});
var ___6036 = (function() { 
var G__6038__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__6038 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6038__delegate.call(this, x, y, more);
};
G__6038.cljs$lang$maxFixedArity = 2;
G__6038.cljs$lang$applyTo = (function (arglist__6039){
var x = cljs.core.first(arglist__6039);
var y = cljs.core.first(cljs.core.next(arglist__6039));
var more = cljs.core.rest(cljs.core.next(arglist__6039));
return G__6038__delegate.call(this, x, y, more);
});
return G__6038;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___6034.call(this,x);
case  2 :
return ___6035.call(this,x,y);
default:
return ___6036.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___6036.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___6040 = (function (){
return 1;
});
var _STAR___6041 = (function (x){
return x;
});
var _STAR___6042 = (function (x,y){
return (x * y);
});
var _STAR___6043 = (function() { 
var G__6045__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__6045 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6045__delegate.call(this, x, y, more);
};
G__6045.cljs$lang$maxFixedArity = 2;
G__6045.cljs$lang$applyTo = (function (arglist__6046){
var x = cljs.core.first(arglist__6046);
var y = cljs.core.first(cljs.core.next(arglist__6046));
var more = cljs.core.rest(cljs.core.next(arglist__6046));
return G__6045__delegate.call(this, x, y, more);
});
return G__6045;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___6040.call(this);
case  1 :
return _STAR___6041.call(this,x);
case  2 :
return _STAR___6042.call(this,x,y);
default:
return _STAR___6043.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___6043.cljs$lang$applyTo;
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
var _SLASH___6047 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___6048 = (function (x,y){
return (x / y);
});
var _SLASH___6049 = (function() { 
var G__6051__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__6051 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6051__delegate.call(this, x, y, more);
};
G__6051.cljs$lang$maxFixedArity = 2;
G__6051.cljs$lang$applyTo = (function (arglist__6052){
var x = cljs.core.first(arglist__6052);
var y = cljs.core.first(cljs.core.next(arglist__6052));
var more = cljs.core.rest(cljs.core.next(arglist__6052));
return G__6051__delegate.call(this, x, y, more);
});
return G__6051;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___6047.call(this,x);
case  2 :
return _SLASH___6048.call(this,x,y);
default:
return _SLASH___6049.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___6049.cljs$lang$applyTo;
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
var _LT___6053 = (function (x){
return true;
});
var _LT___6054 = (function (x,y){
return (x < y);
});
var _LT___6055 = (function() { 
var G__6057__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__6058 = y;
var G__6059 = cljs.core.first.call(null,more);
var G__6060 = cljs.core.next.call(null,more);
x = G__6058;
y = G__6059;
more = G__6060;
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
var G__6057 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6057__delegate.call(this, x, y, more);
};
G__6057.cljs$lang$maxFixedArity = 2;
G__6057.cljs$lang$applyTo = (function (arglist__6061){
var x = cljs.core.first(arglist__6061);
var y = cljs.core.first(cljs.core.next(arglist__6061));
var more = cljs.core.rest(cljs.core.next(arglist__6061));
return G__6057__delegate.call(this, x, y, more);
});
return G__6057;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___6053.call(this,x);
case  2 :
return _LT___6054.call(this,x,y);
default:
return _LT___6055.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___6055.cljs$lang$applyTo;
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
var _LT__EQ___6062 = (function (x){
return true;
});
var _LT__EQ___6063 = (function (x,y){
return (x <= y);
});
var _LT__EQ___6064 = (function() { 
var G__6066__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__6067 = y;
var G__6068 = cljs.core.first.call(null,more);
var G__6069 = cljs.core.next.call(null,more);
x = G__6067;
y = G__6068;
more = G__6069;
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
var G__6066 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6066__delegate.call(this, x, y, more);
};
G__6066.cljs$lang$maxFixedArity = 2;
G__6066.cljs$lang$applyTo = (function (arglist__6070){
var x = cljs.core.first(arglist__6070);
var y = cljs.core.first(cljs.core.next(arglist__6070));
var more = cljs.core.rest(cljs.core.next(arglist__6070));
return G__6066__delegate.call(this, x, y, more);
});
return G__6066;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___6062.call(this,x);
case  2 :
return _LT__EQ___6063.call(this,x,y);
default:
return _LT__EQ___6064.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___6064.cljs$lang$applyTo;
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
var _GT___6071 = (function (x){
return true;
});
var _GT___6072 = (function (x,y){
return (x > y);
});
var _GT___6073 = (function() { 
var G__6075__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__6076 = y;
var G__6077 = cljs.core.first.call(null,more);
var G__6078 = cljs.core.next.call(null,more);
x = G__6076;
y = G__6077;
more = G__6078;
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
var G__6075 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6075__delegate.call(this, x, y, more);
};
G__6075.cljs$lang$maxFixedArity = 2;
G__6075.cljs$lang$applyTo = (function (arglist__6079){
var x = cljs.core.first(arglist__6079);
var y = cljs.core.first(cljs.core.next(arglist__6079));
var more = cljs.core.rest(cljs.core.next(arglist__6079));
return G__6075__delegate.call(this, x, y, more);
});
return G__6075;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___6071.call(this,x);
case  2 :
return _GT___6072.call(this,x,y);
default:
return _GT___6073.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___6073.cljs$lang$applyTo;
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
var _GT__EQ___6080 = (function (x){
return true;
});
var _GT__EQ___6081 = (function (x,y){
return (x >= y);
});
var _GT__EQ___6082 = (function() { 
var G__6084__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__6085 = y;
var G__6086 = cljs.core.first.call(null,more);
var G__6087 = cljs.core.next.call(null,more);
x = G__6085;
y = G__6086;
more = G__6087;
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
var G__6084 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6084__delegate.call(this, x, y, more);
};
G__6084.cljs$lang$maxFixedArity = 2;
G__6084.cljs$lang$applyTo = (function (arglist__6088){
var x = cljs.core.first(arglist__6088);
var y = cljs.core.first(cljs.core.next(arglist__6088));
var more = cljs.core.rest(cljs.core.next(arglist__6088));
return G__6084__delegate.call(this, x, y, more);
});
return G__6084;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___6080.call(this,x);
case  2 :
return _GT__EQ___6081.call(this,x,y);
default:
return _GT__EQ___6082.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___6082.cljs$lang$applyTo;
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
var max__6089 = (function (x){
return x;
});
var max__6090 = (function (x,y){
return ((x > y) ? x : y);
});
var max__6091 = (function() { 
var G__6093__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__6093 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6093__delegate.call(this, x, y, more);
};
G__6093.cljs$lang$maxFixedArity = 2;
G__6093.cljs$lang$applyTo = (function (arglist__6094){
var x = cljs.core.first(arglist__6094);
var y = cljs.core.first(cljs.core.next(arglist__6094));
var more = cljs.core.rest(cljs.core.next(arglist__6094));
return G__6093__delegate.call(this, x, y, more);
});
return G__6093;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__6089.call(this,x);
case  2 :
return max__6090.call(this,x,y);
default:
return max__6091.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__6091.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__6095 = (function (x){
return x;
});
var min__6096 = (function (x,y){
return ((x < y) ? x : y);
});
var min__6097 = (function() { 
var G__6099__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__6099 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6099__delegate.call(this, x, y, more);
};
G__6099.cljs$lang$maxFixedArity = 2;
G__6099.cljs$lang$applyTo = (function (arglist__6100){
var x = cljs.core.first(arglist__6100);
var y = cljs.core.first(cljs.core.next(arglist__6100));
var more = cljs.core.rest(cljs.core.next(arglist__6100));
return G__6099__delegate.call(this, x, y, more);
});
return G__6099;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__6095.call(this,x);
case  2 :
return min__6096.call(this,x,y);
default:
return min__6097.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__6097.cljs$lang$applyTo;
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
var rem__6101 = (n % d);

return cljs.core.fix.call(null,((n - rem__6101) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__6102 = cljs.core.quot.call(null,n,d);

return (n - (d * q__6102));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__6103 = (function (){
return Math.random.call(null);
});
var rand__6104 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__6103.call(this);
case  1 :
return rand__6104.call(this,n);
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
var _EQ__EQ___6106 = (function (x){
return true;
});
var _EQ__EQ___6107 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___6108 = (function() { 
var G__6110__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__6111 = y;
var G__6112 = cljs.core.first.call(null,more);
var G__6113 = cljs.core.next.call(null,more);
x = G__6111;
y = G__6112;
more = G__6113;
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
var G__6110 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6110__delegate.call(this, x, y, more);
};
G__6110.cljs$lang$maxFixedArity = 2;
G__6110.cljs$lang$applyTo = (function (arglist__6114){
var x = cljs.core.first(arglist__6114);
var y = cljs.core.first(cljs.core.next(arglist__6114));
var more = cljs.core.rest(cljs.core.next(arglist__6114));
return G__6110__delegate.call(this, x, y, more);
});
return G__6110;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___6106.call(this,x);
case  2 :
return _EQ__EQ___6107.call(this,x,y);
default:
return _EQ__EQ___6108.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___6108.cljs$lang$applyTo;
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
var n__6115 = n;
var xs__6116 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____6117 = xs__6116;

if(cljs.core.truth_(and__3546__auto____6117))
{return (n__6115 > 0);
} else
{return and__3546__auto____6117;
}
})()))
{{
var G__6118 = (n__6115 - 1);
var G__6119 = cljs.core.next.call(null,xs__6116);
n__6115 = G__6118;
xs__6116 = G__6119;
continue;
}
} else
{return xs__6116;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__6124 = null;
var G__6124__6125 = (function (coll,n){
var temp__3695__auto____6120 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____6120))
{var xs__6121 = temp__3695__auto____6120;

return cljs.core.first.call(null,xs__6121);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__6124__6126 = (function (coll,n,not_found){
var temp__3695__auto____6122 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____6122))
{var xs__6123 = temp__3695__auto____6122;

return cljs.core.first.call(null,xs__6123);
} else
{return not_found;
}
});
G__6124 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__6124__6125.call(this,coll,n);
case  3 :
return G__6124__6126.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6124;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___6128 = (function (){
return "";
});
var str_STAR___6129 = (function (x){
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
var str_STAR___6130 = (function() { 
var G__6132__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__6133 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__6134 = cljs.core.next.call(null,more);
sb = G__6133;
more = G__6134;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__6132 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6132__delegate.call(this, x, ys);
};
G__6132.cljs$lang$maxFixedArity = 1;
G__6132.cljs$lang$applyTo = (function (arglist__6135){
var x = cljs.core.first(arglist__6135);
var ys = cljs.core.rest(arglist__6135);
return G__6132__delegate.call(this, x, ys);
});
return G__6132;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___6128.call(this);
case  1 :
return str_STAR___6129.call(this,x);
default:
return str_STAR___6130.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___6130.cljs$lang$applyTo;
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
var str__6136 = (function (){
return "";
});
var str__6137 = (function (x){
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
var str__6138 = (function() { 
var G__6140__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__6140 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6140__delegate.call(this, x, ys);
};
G__6140.cljs$lang$maxFixedArity = 1;
G__6140.cljs$lang$applyTo = (function (arglist__6141){
var x = cljs.core.first(arglist__6141);
var ys = cljs.core.rest(arglist__6141);
return G__6140__delegate.call(this, x, ys);
});
return G__6140;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__6136.call(this);
case  1 :
return str__6137.call(this,x);
default:
return str__6138.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__6138.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__6142 = (function (s,start){
return s.substring(start);
});
var subs__6143 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__6142.call(this,s,start);
case  3 :
return subs__6143.call(this,s,start,end);
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
var symbol__6145 = (function (name){
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
var symbol__6146 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__6145.call(this,ns);
case  2 :
return symbol__6146.call(this,ns,name);
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
var keyword__6148 = (function (name){
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
var keyword__6149 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__6148.call(this,ns);
case  2 :
return keyword__6149.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__6151 = cljs.core.seq.call(null,x);
var ys__6152 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__6151 === null)))
{return (ys__6152 === null);
} else
{if(cljs.core.truth_((ys__6152 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__6151),cljs.core.first.call(null,ys__6152))))
{{
var G__6153 = cljs.core.next.call(null,xs__6151);
var G__6154 = cljs.core.next.call(null,ys__6152);
xs__6151 = G__6153;
ys__6152 = G__6154;
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
return cljs.core.reduce.call(null,(function (p1__6155_SHARP_,p2__6156_SHARP_){
return cljs.core.hash_combine.call(null,p1__6155_SHARP_,cljs.core.hash.call(null,p2__6156_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__6157__6158 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__6157__6158))
{var G__6160__6162 = cljs.core.first.call(null,G__6157__6158);
var vec__6161__6163 = G__6160__6162;
var key_name__6164 = cljs.core.nth.call(null,vec__6161__6163,0,null);
var f__6165 = cljs.core.nth.call(null,vec__6161__6163,1,null);
var G__6157__6166 = G__6157__6158;

var G__6160__6167 = G__6160__6162;
var G__6157__6168 = G__6157__6166;

while(true){
var vec__6169__6170 = G__6160__6167;
var key_name__6171 = cljs.core.nth.call(null,vec__6169__6170,0,null);
var f__6172 = cljs.core.nth.call(null,vec__6169__6170,1,null);
var G__6157__6173 = G__6157__6168;

var str_name__6174 = cljs.core.name.call(null,key_name__6171);

obj[str_name__6174] = f__6172;
var temp__3698__auto____6175 = cljs.core.next.call(null,G__6157__6173);

if(cljs.core.truth_(temp__3698__auto____6175))
{var G__6157__6176 = temp__3698__auto____6175;

{
var G__6177 = cljs.core.first.call(null,G__6157__6176);
var G__6178 = G__6157__6176;
G__6160__6167 = G__6177;
G__6157__6168 = G__6178;
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
var this__6179 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6180 = this;
return (new cljs.core.List(this__6180.meta,o,coll,(this__6180.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6181 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6182 = this;
return this__6182.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__6183 = this;
return this__6183.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__6184 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__6185 = this;
return this__6185.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__6186 = this;
return this__6186.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6187 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6188 = this;
return (new cljs.core.List(meta,this__6188.first,this__6188.rest,this__6188.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6189 = this;
return this__6189.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6190 = this;
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
var this__6191 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6192 = this;
return (new cljs.core.List(this__6192.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6193 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6194 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__6195 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__6196 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__6197 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__6198 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6199 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6200 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6201 = this;
return this__6201.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6202 = this;
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
list.cljs$lang$applyTo = (function (arglist__6203){
var items = cljs.core.seq( arglist__6203 );;
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
var this__6204 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__6205 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6206 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6207 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6207.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6208 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__6209 = this;
return this__6209.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__6210 = this;
if(cljs.core.truth_((this__6210.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__6210.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6211 = this;
return this__6211.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6212 = this;
return (new cljs.core.Cons(meta,this__6212.first,this__6212.rest));
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
var G__6213 = null;
var G__6213__6214 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__6213__6215 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__6213 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__6213__6214.call(this,string,f);
case  3 :
return G__6213__6215.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6213;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__6217 = null;
var G__6217__6218 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__6217__6219 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__6217 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__6217__6218.call(this,string,k);
case  3 :
return G__6217__6219.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6217;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__6221 = null;
var G__6221__6222 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__6221__6223 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__6221 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__6221__6222.call(this,string,n);
case  3 :
return G__6221__6223.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6221;
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
var G__6231 = null;
var G__6231__6232 = (function (tsym6225,coll){
var tsym6225__6227 = this;

var this$__6228 = tsym6225__6227;

return cljs.core.get.call(null,coll,this$__6228.toString());
});
var G__6231__6233 = (function (tsym6226,coll,not_found){
var tsym6226__6229 = this;

var this$__6230 = tsym6226__6229;

return cljs.core.get.call(null,coll,this$__6230.toString(),not_found);
});
G__6231 = function(tsym6226,coll,not_found){
switch(arguments.length){
case  2 :
return G__6231__6232.call(this,tsym6226,coll);
case  3 :
return G__6231__6233.call(this,tsym6226,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6231;
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
var x__6235 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__6235;
} else
{lazy_seq.x = x__6235.call(null);
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
var this__6236 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__6237 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6238 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6239 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6239.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6240 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__6241 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__6242 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6243 = this;
return this__6243.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6244 = this;
return (new cljs.core.LazySeq(meta,this__6244.realized,this__6244.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__6245 = cljs.core.array.call(null);

var s__6246 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__6246)))
{ary__6245.push(cljs.core.first.call(null,s__6246));
{
var G__6247 = cljs.core.next.call(null,s__6246);
s__6246 = G__6247;
continue;
}
} else
{return ary__6245;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__6248 = s;
var i__6249 = n;
var sum__6250 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____6251 = (i__6249 > 0);

if(cljs.core.truth_(and__3546__auto____6251))
{return cljs.core.seq.call(null,s__6248);
} else
{return and__3546__auto____6251;
}
})()))
{{
var G__6252 = cljs.core.next.call(null,s__6248);
var G__6253 = (i__6249 - 1);
var G__6254 = (sum__6250 + 1);
s__6248 = G__6252;
i__6249 = G__6253;
sum__6250 = G__6254;
continue;
}
} else
{return sum__6250;
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
var concat__6258 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__6259 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__6260 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__6255 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__6255))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__6255),concat.call(null,cljs.core.rest.call(null,s__6255),y));
} else
{return y;
}
})));
});
var concat__6261 = (function() { 
var G__6263__delegate = function (x,y,zs){
var cat__6257 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__6256 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__6256))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__6256),cat.call(null,cljs.core.rest.call(null,xys__6256),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__6257.call(null,concat.call(null,x,y),zs);
};
var G__6263 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6263__delegate.call(this, x, y, zs);
};
G__6263.cljs$lang$maxFixedArity = 2;
G__6263.cljs$lang$applyTo = (function (arglist__6264){
var x = cljs.core.first(arglist__6264);
var y = cljs.core.first(cljs.core.next(arglist__6264));
var zs = cljs.core.rest(cljs.core.next(arglist__6264));
return G__6263__delegate.call(this, x, y, zs);
});
return G__6263;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__6258.call(this);
case  1 :
return concat__6259.call(this,x);
case  2 :
return concat__6260.call(this,x,y);
default:
return concat__6261.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__6261.cljs$lang$applyTo;
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
var list_STAR___6265 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___6266 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___6267 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___6268 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___6269 = (function() { 
var G__6271__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__6271 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__6271__delegate.call(this, a, b, c, d, more);
};
G__6271.cljs$lang$maxFixedArity = 4;
G__6271.cljs$lang$applyTo = (function (arglist__6272){
var a = cljs.core.first(arglist__6272);
var b = cljs.core.first(cljs.core.next(arglist__6272));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6272)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6272))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6272))));
return G__6271__delegate.call(this, a, b, c, d, more);
});
return G__6271;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___6265.call(this,a);
case  2 :
return list_STAR___6266.call(this,a,b);
case  3 :
return list_STAR___6267.call(this,a,b,c);
case  4 :
return list_STAR___6268.call(this,a,b,c,d);
default:
return list_STAR___6269.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___6269.cljs$lang$applyTo;
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
var apply__6282 = (function (f,args){
var fixed_arity__6273 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__6273 + 1)) <= fixed_arity__6273)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__6283 = (function (f,x,args){
var arglist__6274 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__6275 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__6274,fixed_arity__6275) <= fixed_arity__6275)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__6274));
} else
{return f.cljs$lang$applyTo(arglist__6274);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__6274));
}
});
var apply__6284 = (function (f,x,y,args){
var arglist__6276 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__6277 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__6276,fixed_arity__6277) <= fixed_arity__6277)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__6276));
} else
{return f.cljs$lang$applyTo(arglist__6276);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__6276));
}
});
var apply__6285 = (function (f,x,y,z,args){
var arglist__6278 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__6279 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__6278,fixed_arity__6279) <= fixed_arity__6279)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__6278));
} else
{return f.cljs$lang$applyTo(arglist__6278);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__6278));
}
});
var apply__6286 = (function() { 
var G__6288__delegate = function (f,a,b,c,d,args){
var arglist__6280 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__6281 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__6280,fixed_arity__6281) <= fixed_arity__6281)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__6280));
} else
{return f.cljs$lang$applyTo(arglist__6280);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__6280));
}
};
var G__6288 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__6288__delegate.call(this, f, a, b, c, d, args);
};
G__6288.cljs$lang$maxFixedArity = 5;
G__6288.cljs$lang$applyTo = (function (arglist__6289){
var f = cljs.core.first(arglist__6289);
var a = cljs.core.first(cljs.core.next(arglist__6289));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6289)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6289))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6289)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6289)))));
return G__6288__delegate.call(this, f, a, b, c, d, args);
});
return G__6288;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__6282.call(this,f,a);
case  3 :
return apply__6283.call(this,f,a,b);
case  4 :
return apply__6284.call(this,f,a,b,c);
case  5 :
return apply__6285.call(this,f,a,b,c,d);
default:
return apply__6286.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6286.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__6290){
var obj = cljs.core.first(arglist__6290);
var f = cljs.core.first(cljs.core.next(arglist__6290));
var args = cljs.core.rest(cljs.core.next(arglist__6290));
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
var not_EQ___6291 = (function (x){
return false;
});
var not_EQ___6292 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___6293 = (function() { 
var G__6295__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__6295 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6295__delegate.call(this, x, y, more);
};
G__6295.cljs$lang$maxFixedArity = 2;
G__6295.cljs$lang$applyTo = (function (arglist__6296){
var x = cljs.core.first(arglist__6296);
var y = cljs.core.first(cljs.core.next(arglist__6296));
var more = cljs.core.rest(cljs.core.next(arglist__6296));
return G__6295__delegate.call(this, x, y, more);
});
return G__6295;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___6291.call(this,x);
case  2 :
return not_EQ___6292.call(this,x,y);
default:
return not_EQ___6293.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___6293.cljs$lang$applyTo;
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
var G__6297 = pred;
var G__6298 = cljs.core.next.call(null,coll);
pred = G__6297;
coll = G__6298;
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
{var or__3548__auto____6299 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____6299))
{return or__3548__auto____6299;
} else
{{
var G__6300 = pred;
var G__6301 = cljs.core.next.call(null,coll);
pred = G__6300;
coll = G__6301;
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
var G__6302 = null;
var G__6302__6303 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__6302__6304 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__6302__6305 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__6302__6306 = (function() { 
var G__6308__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__6308 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6308__delegate.call(this, x, y, zs);
};
G__6308.cljs$lang$maxFixedArity = 2;
G__6308.cljs$lang$applyTo = (function (arglist__6309){
var x = cljs.core.first(arglist__6309);
var y = cljs.core.first(cljs.core.next(arglist__6309));
var zs = cljs.core.rest(cljs.core.next(arglist__6309));
return G__6308__delegate.call(this, x, y, zs);
});
return G__6308;
})()
;
G__6302 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__6302__6303.call(this);
case  1 :
return G__6302__6304.call(this,x);
case  2 :
return G__6302__6305.call(this,x,y);
default:
return G__6302__6306.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6302.cljs$lang$maxFixedArity = 2;
G__6302.cljs$lang$applyTo = G__6302__6306.cljs$lang$applyTo;
return G__6302;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__6310__delegate = function (args){
return x;
};
var G__6310 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6310__delegate.call(this, args);
};
G__6310.cljs$lang$maxFixedArity = 0;
G__6310.cljs$lang$applyTo = (function (arglist__6311){
var args = cljs.core.seq( arglist__6311 );;
return G__6310__delegate.call(this, args);
});
return G__6310;
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
var comp__6315 = (function (){
return cljs.core.identity;
});
var comp__6316 = (function (f){
return f;
});
var comp__6317 = (function (f,g){
return (function() {
var G__6321 = null;
var G__6321__6322 = (function (){
return f.call(null,g.call(null));
});
var G__6321__6323 = (function (x){
return f.call(null,g.call(null,x));
});
var G__6321__6324 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__6321__6325 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__6321__6326 = (function() { 
var G__6328__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__6328 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6328__delegate.call(this, x, y, z, args);
};
G__6328.cljs$lang$maxFixedArity = 3;
G__6328.cljs$lang$applyTo = (function (arglist__6329){
var x = cljs.core.first(arglist__6329);
var y = cljs.core.first(cljs.core.next(arglist__6329));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6329)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6329)));
return G__6328__delegate.call(this, x, y, z, args);
});
return G__6328;
})()
;
G__6321 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6321__6322.call(this);
case  1 :
return G__6321__6323.call(this,x);
case  2 :
return G__6321__6324.call(this,x,y);
case  3 :
return G__6321__6325.call(this,x,y,z);
default:
return G__6321__6326.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6321.cljs$lang$maxFixedArity = 3;
G__6321.cljs$lang$applyTo = G__6321__6326.cljs$lang$applyTo;
return G__6321;
})()
});
var comp__6318 = (function (f,g,h){
return (function() {
var G__6330 = null;
var G__6330__6331 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__6330__6332 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__6330__6333 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__6330__6334 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__6330__6335 = (function() { 
var G__6337__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__6337 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6337__delegate.call(this, x, y, z, args);
};
G__6337.cljs$lang$maxFixedArity = 3;
G__6337.cljs$lang$applyTo = (function (arglist__6338){
var x = cljs.core.first(arglist__6338);
var y = cljs.core.first(cljs.core.next(arglist__6338));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6338)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6338)));
return G__6337__delegate.call(this, x, y, z, args);
});
return G__6337;
})()
;
G__6330 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6330__6331.call(this);
case  1 :
return G__6330__6332.call(this,x);
case  2 :
return G__6330__6333.call(this,x,y);
case  3 :
return G__6330__6334.call(this,x,y,z);
default:
return G__6330__6335.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6330.cljs$lang$maxFixedArity = 3;
G__6330.cljs$lang$applyTo = G__6330__6335.cljs$lang$applyTo;
return G__6330;
})()
});
var comp__6319 = (function() { 
var G__6339__delegate = function (f1,f2,f3,fs){
var fs__6312 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__6340__delegate = function (args){
var ret__6313 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__6312),args);
var fs__6314 = cljs.core.next.call(null,fs__6312);

while(true){
if(cljs.core.truth_(fs__6314))
{{
var G__6341 = cljs.core.first.call(null,fs__6314).call(null,ret__6313);
var G__6342 = cljs.core.next.call(null,fs__6314);
ret__6313 = G__6341;
fs__6314 = G__6342;
continue;
}
} else
{return ret__6313;
}
break;
}
};
var G__6340 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6340__delegate.call(this, args);
};
G__6340.cljs$lang$maxFixedArity = 0;
G__6340.cljs$lang$applyTo = (function (arglist__6343){
var args = cljs.core.seq( arglist__6343 );;
return G__6340__delegate.call(this, args);
});
return G__6340;
})()
;
};
var G__6339 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6339__delegate.call(this, f1, f2, f3, fs);
};
G__6339.cljs$lang$maxFixedArity = 3;
G__6339.cljs$lang$applyTo = (function (arglist__6344){
var f1 = cljs.core.first(arglist__6344);
var f2 = cljs.core.first(cljs.core.next(arglist__6344));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6344)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6344)));
return G__6339__delegate.call(this, f1, f2, f3, fs);
});
return G__6339;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__6315.call(this);
case  1 :
return comp__6316.call(this,f1);
case  2 :
return comp__6317.call(this,f1,f2);
case  3 :
return comp__6318.call(this,f1,f2,f3);
default:
return comp__6319.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__6319.cljs$lang$applyTo;
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
var partial__6345 = (function (f,arg1){
return (function() { 
var G__6350__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__6350 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6350__delegate.call(this, args);
};
G__6350.cljs$lang$maxFixedArity = 0;
G__6350.cljs$lang$applyTo = (function (arglist__6351){
var args = cljs.core.seq( arglist__6351 );;
return G__6350__delegate.call(this, args);
});
return G__6350;
})()
;
});
var partial__6346 = (function (f,arg1,arg2){
return (function() { 
var G__6352__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__6352 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6352__delegate.call(this, args);
};
G__6352.cljs$lang$maxFixedArity = 0;
G__6352.cljs$lang$applyTo = (function (arglist__6353){
var args = cljs.core.seq( arglist__6353 );;
return G__6352__delegate.call(this, args);
});
return G__6352;
})()
;
});
var partial__6347 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__6354__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__6354 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6354__delegate.call(this, args);
};
G__6354.cljs$lang$maxFixedArity = 0;
G__6354.cljs$lang$applyTo = (function (arglist__6355){
var args = cljs.core.seq( arglist__6355 );;
return G__6354__delegate.call(this, args);
});
return G__6354;
})()
;
});
var partial__6348 = (function() { 
var G__6356__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__6357__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__6357 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6357__delegate.call(this, args);
};
G__6357.cljs$lang$maxFixedArity = 0;
G__6357.cljs$lang$applyTo = (function (arglist__6358){
var args = cljs.core.seq( arglist__6358 );;
return G__6357__delegate.call(this, args);
});
return G__6357;
})()
;
};
var G__6356 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__6356__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__6356.cljs$lang$maxFixedArity = 4;
G__6356.cljs$lang$applyTo = (function (arglist__6359){
var f = cljs.core.first(arglist__6359);
var arg1 = cljs.core.first(cljs.core.next(arglist__6359));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6359)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6359))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6359))));
return G__6356__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__6356;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__6345.call(this,f,arg1);
case  3 :
return partial__6346.call(this,f,arg1,arg2);
case  4 :
return partial__6347.call(this,f,arg1,arg2,arg3);
default:
return partial__6348.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__6348.cljs$lang$applyTo;
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
var fnil__6360 = (function (f,x){
return (function() {
var G__6364 = null;
var G__6364__6365 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__6364__6366 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__6364__6367 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__6364__6368 = (function() { 
var G__6370__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__6370 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6370__delegate.call(this, a, b, c, ds);
};
G__6370.cljs$lang$maxFixedArity = 3;
G__6370.cljs$lang$applyTo = (function (arglist__6371){
var a = cljs.core.first(arglist__6371);
var b = cljs.core.first(cljs.core.next(arglist__6371));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6371)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6371)));
return G__6370__delegate.call(this, a, b, c, ds);
});
return G__6370;
})()
;
G__6364 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__6364__6365.call(this,a);
case  2 :
return G__6364__6366.call(this,a,b);
case  3 :
return G__6364__6367.call(this,a,b,c);
default:
return G__6364__6368.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6364.cljs$lang$maxFixedArity = 3;
G__6364.cljs$lang$applyTo = G__6364__6368.cljs$lang$applyTo;
return G__6364;
})()
});
var fnil__6361 = (function (f,x,y){
return (function() {
var G__6372 = null;
var G__6372__6373 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__6372__6374 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__6372__6375 = (function() { 
var G__6377__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__6377 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6377__delegate.call(this, a, b, c, ds);
};
G__6377.cljs$lang$maxFixedArity = 3;
G__6377.cljs$lang$applyTo = (function (arglist__6378){
var a = cljs.core.first(arglist__6378);
var b = cljs.core.first(cljs.core.next(arglist__6378));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6378)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6378)));
return G__6377__delegate.call(this, a, b, c, ds);
});
return G__6377;
})()
;
G__6372 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__6372__6373.call(this,a,b);
case  3 :
return G__6372__6374.call(this,a,b,c);
default:
return G__6372__6375.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6372.cljs$lang$maxFixedArity = 3;
G__6372.cljs$lang$applyTo = G__6372__6375.cljs$lang$applyTo;
return G__6372;
})()
});
var fnil__6362 = (function (f,x,y,z){
return (function() {
var G__6379 = null;
var G__6379__6380 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__6379__6381 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__6379__6382 = (function() { 
var G__6384__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__6384 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6384__delegate.call(this, a, b, c, ds);
};
G__6384.cljs$lang$maxFixedArity = 3;
G__6384.cljs$lang$applyTo = (function (arglist__6385){
var a = cljs.core.first(arglist__6385);
var b = cljs.core.first(cljs.core.next(arglist__6385));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6385)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6385)));
return G__6384__delegate.call(this, a, b, c, ds);
});
return G__6384;
})()
;
G__6379 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__6379__6380.call(this,a,b);
case  3 :
return G__6379__6381.call(this,a,b,c);
default:
return G__6379__6382.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6379.cljs$lang$maxFixedArity = 3;
G__6379.cljs$lang$applyTo = G__6379__6382.cljs$lang$applyTo;
return G__6379;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__6360.call(this,f,x);
case  3 :
return fnil__6361.call(this,f,x,y);
case  4 :
return fnil__6362.call(this,f,x,y,z);
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
var mapi__6388 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6386 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6386))
{var s__6387 = temp__3698__auto____6386;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__6387)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__6387)));
} else
{return null;
}
})));
});

return mapi__6388.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6389 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6389))
{var s__6390 = temp__3698__auto____6389;

var x__6391 = f.call(null,cljs.core.first.call(null,s__6390));

if(cljs.core.truth_((x__6391 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__6390));
} else
{return cljs.core.cons.call(null,x__6391,keep.call(null,f,cljs.core.rest.call(null,s__6390)));
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
var keepi__6401 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6398 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6398))
{var s__6399 = temp__3698__auto____6398;

var x__6400 = f.call(null,idx,cljs.core.first.call(null,s__6399));

if(cljs.core.truth_((x__6400 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__6399));
} else
{return cljs.core.cons.call(null,x__6400,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__6399)));
}
} else
{return null;
}
})));
});

return keepi__6401.call(null,0,coll);
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
var every_pred__6446 = (function (p){
return (function() {
var ep1 = null;
var ep1__6451 = (function (){
return true;
});
var ep1__6452 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__6453 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6408 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____6408))
{return p.call(null,y);
} else
{return and__3546__auto____6408;
}
})());
});
var ep1__6454 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6409 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____6409))
{var and__3546__auto____6410 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____6410))
{return p.call(null,z);
} else
{return and__3546__auto____6410;
}
} else
{return and__3546__auto____6409;
}
})());
});
var ep1__6455 = (function() { 
var G__6457__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6411 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____6411))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____6411;
}
})());
};
var G__6457 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6457__delegate.call(this, x, y, z, args);
};
G__6457.cljs$lang$maxFixedArity = 3;
G__6457.cljs$lang$applyTo = (function (arglist__6458){
var x = cljs.core.first(arglist__6458);
var y = cljs.core.first(cljs.core.next(arglist__6458));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6458)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6458)));
return G__6457__delegate.call(this, x, y, z, args);
});
return G__6457;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__6451.call(this);
case  1 :
return ep1__6452.call(this,x);
case  2 :
return ep1__6453.call(this,x,y);
case  3 :
return ep1__6454.call(this,x,y,z);
default:
return ep1__6455.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__6455.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__6447 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__6459 = (function (){
return true;
});
var ep2__6460 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6412 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____6412))
{return p2.call(null,x);
} else
{return and__3546__auto____6412;
}
})());
});
var ep2__6461 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6413 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____6413))
{var and__3546__auto____6414 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____6414))
{var and__3546__auto____6415 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____6415))
{return p2.call(null,y);
} else
{return and__3546__auto____6415;
}
} else
{return and__3546__auto____6414;
}
} else
{return and__3546__auto____6413;
}
})());
});
var ep2__6462 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6416 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____6416))
{var and__3546__auto____6417 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____6417))
{var and__3546__auto____6418 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____6418))
{var and__3546__auto____6419 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____6419))
{var and__3546__auto____6420 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____6420))
{return p2.call(null,z);
} else
{return and__3546__auto____6420;
}
} else
{return and__3546__auto____6419;
}
} else
{return and__3546__auto____6418;
}
} else
{return and__3546__auto____6417;
}
} else
{return and__3546__auto____6416;
}
})());
});
var ep2__6463 = (function() { 
var G__6465__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6421 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____6421))
{return cljs.core.every_QMARK_.call(null,(function (p1__6392_SHARP_){
var and__3546__auto____6422 = p1.call(null,p1__6392_SHARP_);

if(cljs.core.truth_(and__3546__auto____6422))
{return p2.call(null,p1__6392_SHARP_);
} else
{return and__3546__auto____6422;
}
}),args);
} else
{return and__3546__auto____6421;
}
})());
};
var G__6465 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6465__delegate.call(this, x, y, z, args);
};
G__6465.cljs$lang$maxFixedArity = 3;
G__6465.cljs$lang$applyTo = (function (arglist__6466){
var x = cljs.core.first(arglist__6466);
var y = cljs.core.first(cljs.core.next(arglist__6466));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6466)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6466)));
return G__6465__delegate.call(this, x, y, z, args);
});
return G__6465;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__6459.call(this);
case  1 :
return ep2__6460.call(this,x);
case  2 :
return ep2__6461.call(this,x,y);
case  3 :
return ep2__6462.call(this,x,y,z);
default:
return ep2__6463.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__6463.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__6448 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__6467 = (function (){
return true;
});
var ep3__6468 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6423 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____6423))
{var and__3546__auto____6424 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____6424))
{return p3.call(null,x);
} else
{return and__3546__auto____6424;
}
} else
{return and__3546__auto____6423;
}
})());
});
var ep3__6469 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6425 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____6425))
{var and__3546__auto____6426 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____6426))
{var and__3546__auto____6427 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____6427))
{var and__3546__auto____6428 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____6428))
{var and__3546__auto____6429 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____6429))
{return p3.call(null,y);
} else
{return and__3546__auto____6429;
}
} else
{return and__3546__auto____6428;
}
} else
{return and__3546__auto____6427;
}
} else
{return and__3546__auto____6426;
}
} else
{return and__3546__auto____6425;
}
})());
});
var ep3__6470 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6430 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____6430))
{var and__3546__auto____6431 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____6431))
{var and__3546__auto____6432 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____6432))
{var and__3546__auto____6433 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____6433))
{var and__3546__auto____6434 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____6434))
{var and__3546__auto____6435 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____6435))
{var and__3546__auto____6436 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____6436))
{var and__3546__auto____6437 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____6437))
{return p3.call(null,z);
} else
{return and__3546__auto____6437;
}
} else
{return and__3546__auto____6436;
}
} else
{return and__3546__auto____6435;
}
} else
{return and__3546__auto____6434;
}
} else
{return and__3546__auto____6433;
}
} else
{return and__3546__auto____6432;
}
} else
{return and__3546__auto____6431;
}
} else
{return and__3546__auto____6430;
}
})());
});
var ep3__6471 = (function() { 
var G__6473__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6438 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____6438))
{return cljs.core.every_QMARK_.call(null,(function (p1__6393_SHARP_){
var and__3546__auto____6439 = p1.call(null,p1__6393_SHARP_);

if(cljs.core.truth_(and__3546__auto____6439))
{var and__3546__auto____6440 = p2.call(null,p1__6393_SHARP_);

if(cljs.core.truth_(and__3546__auto____6440))
{return p3.call(null,p1__6393_SHARP_);
} else
{return and__3546__auto____6440;
}
} else
{return and__3546__auto____6439;
}
}),args);
} else
{return and__3546__auto____6438;
}
})());
};
var G__6473 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6473__delegate.call(this, x, y, z, args);
};
G__6473.cljs$lang$maxFixedArity = 3;
G__6473.cljs$lang$applyTo = (function (arglist__6474){
var x = cljs.core.first(arglist__6474);
var y = cljs.core.first(cljs.core.next(arglist__6474));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6474)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6474)));
return G__6473__delegate.call(this, x, y, z, args);
});
return G__6473;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__6467.call(this);
case  1 :
return ep3__6468.call(this,x);
case  2 :
return ep3__6469.call(this,x,y);
case  3 :
return ep3__6470.call(this,x,y,z);
default:
return ep3__6471.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__6471.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__6449 = (function() { 
var G__6475__delegate = function (p1,p2,p3,ps){
var ps__6441 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__6476 = (function (){
return true;
});
var epn__6477 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__6394_SHARP_){
return p1__6394_SHARP_.call(null,x);
}),ps__6441);
});
var epn__6478 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__6395_SHARP_){
var and__3546__auto____6442 = p1__6395_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____6442))
{return p1__6395_SHARP_.call(null,y);
} else
{return and__3546__auto____6442;
}
}),ps__6441);
});
var epn__6479 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__6396_SHARP_){
var and__3546__auto____6443 = p1__6396_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____6443))
{var and__3546__auto____6444 = p1__6396_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____6444))
{return p1__6396_SHARP_.call(null,z);
} else
{return and__3546__auto____6444;
}
} else
{return and__3546__auto____6443;
}
}),ps__6441);
});
var epn__6480 = (function() { 
var G__6482__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6445 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____6445))
{return cljs.core.every_QMARK_.call(null,(function (p1__6397_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__6397_SHARP_,args);
}),ps__6441);
} else
{return and__3546__auto____6445;
}
})());
};
var G__6482 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6482__delegate.call(this, x, y, z, args);
};
G__6482.cljs$lang$maxFixedArity = 3;
G__6482.cljs$lang$applyTo = (function (arglist__6483){
var x = cljs.core.first(arglist__6483);
var y = cljs.core.first(cljs.core.next(arglist__6483));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6483)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6483)));
return G__6482__delegate.call(this, x, y, z, args);
});
return G__6482;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__6476.call(this);
case  1 :
return epn__6477.call(this,x);
case  2 :
return epn__6478.call(this,x,y);
case  3 :
return epn__6479.call(this,x,y,z);
default:
return epn__6480.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__6480.cljs$lang$applyTo;
return epn;
})()
};
var G__6475 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6475__delegate.call(this, p1, p2, p3, ps);
};
G__6475.cljs$lang$maxFixedArity = 3;
G__6475.cljs$lang$applyTo = (function (arglist__6484){
var p1 = cljs.core.first(arglist__6484);
var p2 = cljs.core.first(cljs.core.next(arglist__6484));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6484)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6484)));
return G__6475__delegate.call(this, p1, p2, p3, ps);
});
return G__6475;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__6446.call(this,p1);
case  2 :
return every_pred__6447.call(this,p1,p2);
case  3 :
return every_pred__6448.call(this,p1,p2,p3);
default:
return every_pred__6449.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__6449.cljs$lang$applyTo;
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
var some_fn__6524 = (function (p){
return (function() {
var sp1 = null;
var sp1__6529 = (function (){
return null;
});
var sp1__6530 = (function (x){
return p.call(null,x);
});
var sp1__6531 = (function (x,y){
var or__3548__auto____6486 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____6486))
{return or__3548__auto____6486;
} else
{return p.call(null,y);
}
});
var sp1__6532 = (function (x,y,z){
var or__3548__auto____6487 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____6487))
{return or__3548__auto____6487;
} else
{var or__3548__auto____6488 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____6488))
{return or__3548__auto____6488;
} else
{return p.call(null,z);
}
}
});
var sp1__6533 = (function() { 
var G__6535__delegate = function (x,y,z,args){
var or__3548__auto____6489 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____6489))
{return or__3548__auto____6489;
} else
{return cljs.core.some.call(null,p,args);
}
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
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__6529.call(this);
case  1 :
return sp1__6530.call(this,x);
case  2 :
return sp1__6531.call(this,x,y);
case  3 :
return sp1__6532.call(this,x,y,z);
default:
return sp1__6533.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__6533.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__6525 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__6537 = (function (){
return null;
});
var sp2__6538 = (function (x){
var or__3548__auto____6490 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____6490))
{return or__3548__auto____6490;
} else
{return p2.call(null,x);
}
});
var sp2__6539 = (function (x,y){
var or__3548__auto____6491 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____6491))
{return or__3548__auto____6491;
} else
{var or__3548__auto____6492 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____6492))
{return or__3548__auto____6492;
} else
{var or__3548__auto____6493 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____6493))
{return or__3548__auto____6493;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__6540 = (function (x,y,z){
var or__3548__auto____6494 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____6494))
{return or__3548__auto____6494;
} else
{var or__3548__auto____6495 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____6495))
{return or__3548__auto____6495;
} else
{var or__3548__auto____6496 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____6496))
{return or__3548__auto____6496;
} else
{var or__3548__auto____6497 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____6497))
{return or__3548__auto____6497;
} else
{var or__3548__auto____6498 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____6498))
{return or__3548__auto____6498;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__6541 = (function() { 
var G__6543__delegate = function (x,y,z,args){
var or__3548__auto____6499 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____6499))
{return or__3548__auto____6499;
} else
{return cljs.core.some.call(null,(function (p1__6402_SHARP_){
var or__3548__auto____6500 = p1.call(null,p1__6402_SHARP_);

if(cljs.core.truth_(or__3548__auto____6500))
{return or__3548__auto____6500;
} else
{return p2.call(null,p1__6402_SHARP_);
}
}),args);
}
};
var G__6543 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6543__delegate.call(this, x, y, z, args);
};
G__6543.cljs$lang$maxFixedArity = 3;
G__6543.cljs$lang$applyTo = (function (arglist__6544){
var x = cljs.core.first(arglist__6544);
var y = cljs.core.first(cljs.core.next(arglist__6544));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6544)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6544)));
return G__6543__delegate.call(this, x, y, z, args);
});
return G__6543;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__6537.call(this);
case  1 :
return sp2__6538.call(this,x);
case  2 :
return sp2__6539.call(this,x,y);
case  3 :
return sp2__6540.call(this,x,y,z);
default:
return sp2__6541.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__6541.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__6526 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__6545 = (function (){
return null;
});
var sp3__6546 = (function (x){
var or__3548__auto____6501 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____6501))
{return or__3548__auto____6501;
} else
{var or__3548__auto____6502 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____6502))
{return or__3548__auto____6502;
} else
{return p3.call(null,x);
}
}
});
var sp3__6547 = (function (x,y){
var or__3548__auto____6503 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____6503))
{return or__3548__auto____6503;
} else
{var or__3548__auto____6504 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____6504))
{return or__3548__auto____6504;
} else
{var or__3548__auto____6505 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____6505))
{return or__3548__auto____6505;
} else
{var or__3548__auto____6506 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____6506))
{return or__3548__auto____6506;
} else
{var or__3548__auto____6507 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____6507))
{return or__3548__auto____6507;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__6548 = (function (x,y,z){
var or__3548__auto____6508 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____6508))
{return or__3548__auto____6508;
} else
{var or__3548__auto____6509 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____6509))
{return or__3548__auto____6509;
} else
{var or__3548__auto____6510 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____6510))
{return or__3548__auto____6510;
} else
{var or__3548__auto____6511 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____6511))
{return or__3548__auto____6511;
} else
{var or__3548__auto____6512 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____6512))
{return or__3548__auto____6512;
} else
{var or__3548__auto____6513 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____6513))
{return or__3548__auto____6513;
} else
{var or__3548__auto____6514 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____6514))
{return or__3548__auto____6514;
} else
{var or__3548__auto____6515 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____6515))
{return or__3548__auto____6515;
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
var sp3__6549 = (function() { 
var G__6551__delegate = function (x,y,z,args){
var or__3548__auto____6516 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____6516))
{return or__3548__auto____6516;
} else
{return cljs.core.some.call(null,(function (p1__6403_SHARP_){
var or__3548__auto____6517 = p1.call(null,p1__6403_SHARP_);

if(cljs.core.truth_(or__3548__auto____6517))
{return or__3548__auto____6517;
} else
{var or__3548__auto____6518 = p2.call(null,p1__6403_SHARP_);

if(cljs.core.truth_(or__3548__auto____6518))
{return or__3548__auto____6518;
} else
{return p3.call(null,p1__6403_SHARP_);
}
}
}),args);
}
};
var G__6551 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6551__delegate.call(this, x, y, z, args);
};
G__6551.cljs$lang$maxFixedArity = 3;
G__6551.cljs$lang$applyTo = (function (arglist__6552){
var x = cljs.core.first(arglist__6552);
var y = cljs.core.first(cljs.core.next(arglist__6552));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6552)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6552)));
return G__6551__delegate.call(this, x, y, z, args);
});
return G__6551;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__6545.call(this);
case  1 :
return sp3__6546.call(this,x);
case  2 :
return sp3__6547.call(this,x,y);
case  3 :
return sp3__6548.call(this,x,y,z);
default:
return sp3__6549.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__6549.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__6527 = (function() { 
var G__6553__delegate = function (p1,p2,p3,ps){
var ps__6519 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__6554 = (function (){
return null;
});
var spn__6555 = (function (x){
return cljs.core.some.call(null,(function (p1__6404_SHARP_){
return p1__6404_SHARP_.call(null,x);
}),ps__6519);
});
var spn__6556 = (function (x,y){
return cljs.core.some.call(null,(function (p1__6405_SHARP_){
var or__3548__auto____6520 = p1__6405_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____6520))
{return or__3548__auto____6520;
} else
{return p1__6405_SHARP_.call(null,y);
}
}),ps__6519);
});
var spn__6557 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__6406_SHARP_){
var or__3548__auto____6521 = p1__6406_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____6521))
{return or__3548__auto____6521;
} else
{var or__3548__auto____6522 = p1__6406_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____6522))
{return or__3548__auto____6522;
} else
{return p1__6406_SHARP_.call(null,z);
}
}
}),ps__6519);
});
var spn__6558 = (function() { 
var G__6560__delegate = function (x,y,z,args){
var or__3548__auto____6523 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____6523))
{return or__3548__auto____6523;
} else
{return cljs.core.some.call(null,(function (p1__6407_SHARP_){
return cljs.core.some.call(null,p1__6407_SHARP_,args);
}),ps__6519);
}
};
var G__6560 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6560__delegate.call(this, x, y, z, args);
};
G__6560.cljs$lang$maxFixedArity = 3;
G__6560.cljs$lang$applyTo = (function (arglist__6561){
var x = cljs.core.first(arglist__6561);
var y = cljs.core.first(cljs.core.next(arglist__6561));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6561)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6561)));
return G__6560__delegate.call(this, x, y, z, args);
});
return G__6560;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__6554.call(this);
case  1 :
return spn__6555.call(this,x);
case  2 :
return spn__6556.call(this,x,y);
case  3 :
return spn__6557.call(this,x,y,z);
default:
return spn__6558.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__6558.cljs$lang$applyTo;
return spn;
})()
};
var G__6553 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6553__delegate.call(this, p1, p2, p3, ps);
};
G__6553.cljs$lang$maxFixedArity = 3;
G__6553.cljs$lang$applyTo = (function (arglist__6562){
var p1 = cljs.core.first(arglist__6562);
var p2 = cljs.core.first(cljs.core.next(arglist__6562));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6562)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6562)));
return G__6553__delegate.call(this, p1, p2, p3, ps);
});
return G__6553;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__6524.call(this,p1);
case  2 :
return some_fn__6525.call(this,p1,p2);
case  3 :
return some_fn__6526.call(this,p1,p2,p3);
default:
return some_fn__6527.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__6527.cljs$lang$applyTo;
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
var map__6575 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6563 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6563))
{var s__6564 = temp__3698__auto____6563;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__6564)),map.call(null,f,cljs.core.rest.call(null,s__6564)));
} else
{return null;
}
})));
});
var map__6576 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__6565 = cljs.core.seq.call(null,c1);
var s2__6566 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____6567 = s1__6565;

if(cljs.core.truth_(and__3546__auto____6567))
{return s2__6566;
} else
{return and__3546__auto____6567;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__6565),cljs.core.first.call(null,s2__6566)),map.call(null,f,cljs.core.rest.call(null,s1__6565),cljs.core.rest.call(null,s2__6566)));
} else
{return null;
}
})));
});
var map__6577 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__6568 = cljs.core.seq.call(null,c1);
var s2__6569 = cljs.core.seq.call(null,c2);
var s3__6570 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____6571 = s1__6568;

if(cljs.core.truth_(and__3546__auto____6571))
{var and__3546__auto____6572 = s2__6569;

if(cljs.core.truth_(and__3546__auto____6572))
{return s3__6570;
} else
{return and__3546__auto____6572;
}
} else
{return and__3546__auto____6571;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__6568),cljs.core.first.call(null,s2__6569),cljs.core.first.call(null,s3__6570)),map.call(null,f,cljs.core.rest.call(null,s1__6568),cljs.core.rest.call(null,s2__6569),cljs.core.rest.call(null,s3__6570)));
} else
{return null;
}
})));
});
var map__6578 = (function() { 
var G__6580__delegate = function (f,c1,c2,c3,colls){
var step__6574 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__6573 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__6573)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__6573),step.call(null,map.call(null,cljs.core.rest,ss__6573)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__6485_SHARP_){
return cljs.core.apply.call(null,f,p1__6485_SHARP_);
}),step__6574.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__6580 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__6580__delegate.call(this, f, c1, c2, c3, colls);
};
G__6580.cljs$lang$maxFixedArity = 4;
G__6580.cljs$lang$applyTo = (function (arglist__6581){
var f = cljs.core.first(arglist__6581);
var c1 = cljs.core.first(cljs.core.next(arglist__6581));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6581)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6581))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6581))));
return G__6580__delegate.call(this, f, c1, c2, c3, colls);
});
return G__6580;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__6575.call(this,f,c1);
case  3 :
return map__6576.call(this,f,c1,c2);
case  4 :
return map__6577.call(this,f,c1,c2,c3);
default:
return map__6578.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__6578.cljs$lang$applyTo;
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
{var temp__3698__auto____6582 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6582))
{var s__6583 = temp__3698__auto____6582;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__6583),take.call(null,(n - 1),cljs.core.rest.call(null,s__6583)));
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
var step__6586 = (function (n,coll){
while(true){
var s__6584 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____6585 = (n > 0);

if(cljs.core.truth_(and__3546__auto____6585))
{return s__6584;
} else
{return and__3546__auto____6585;
}
})()))
{{
var G__6587 = (n - 1);
var G__6588 = cljs.core.rest.call(null,s__6584);
n = G__6587;
coll = G__6588;
continue;
}
} else
{return s__6584;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__6586.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__6589 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__6590 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__6589.call(this,n);
case  2 :
return drop_last__6590.call(this,n,s);
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
var s__6592 = cljs.core.seq.call(null,coll);
var lead__6593 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__6593))
{{
var G__6594 = cljs.core.next.call(null,s__6592);
var G__6595 = cljs.core.next.call(null,lead__6593);
s__6592 = G__6594;
lead__6593 = G__6595;
continue;
}
} else
{return s__6592;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__6598 = (function (pred,coll){
while(true){
var s__6596 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____6597 = s__6596;

if(cljs.core.truth_(and__3546__auto____6597))
{return pred.call(null,cljs.core.first.call(null,s__6596));
} else
{return and__3546__auto____6597;
}
})()))
{{
var G__6599 = pred;
var G__6600 = cljs.core.rest.call(null,s__6596);
pred = G__6599;
coll = G__6600;
continue;
}
} else
{return s__6596;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__6598.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6601 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6601))
{var s__6602 = temp__3698__auto____6601;

return cljs.core.concat.call(null,s__6602,cycle.call(null,s__6602));
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
var repeat__6603 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__6604 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__6603.call(this,n);
case  2 :
return repeat__6604.call(this,n,x);
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
var repeatedly__6606 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__6607 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__6606.call(this,n);
case  2 :
return repeatedly__6607.call(this,n,f);
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
var interleave__6613 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__6609 = cljs.core.seq.call(null,c1);
var s2__6610 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____6611 = s1__6609;

if(cljs.core.truth_(and__3546__auto____6611))
{return s2__6610;
} else
{return and__3546__auto____6611;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__6609),cljs.core.cons.call(null,cljs.core.first.call(null,s2__6610),interleave.call(null,cljs.core.rest.call(null,s1__6609),cljs.core.rest.call(null,s2__6610))));
} else
{return null;
}
})));
});
var interleave__6614 = (function() { 
var G__6616__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__6612 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__6612)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__6612),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__6612)));
} else
{return null;
}
})));
};
var G__6616 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6616__delegate.call(this, c1, c2, colls);
};
G__6616.cljs$lang$maxFixedArity = 2;
G__6616.cljs$lang$applyTo = (function (arglist__6617){
var c1 = cljs.core.first(arglist__6617);
var c2 = cljs.core.first(cljs.core.next(arglist__6617));
var colls = cljs.core.rest(cljs.core.next(arglist__6617));
return G__6616__delegate.call(this, c1, c2, colls);
});
return G__6616;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__6613.call(this,c1,c2);
default:
return interleave__6614.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__6614.cljs$lang$applyTo;
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
var cat__6620 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____6618 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____6618))
{var coll__6619 = temp__3695__auto____6618;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__6619),cat.call(null,cljs.core.rest.call(null,coll__6619),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__6620.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__6621 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__6622 = (function() { 
var G__6624__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__6624 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6624__delegate.call(this, f, coll, colls);
};
G__6624.cljs$lang$maxFixedArity = 2;
G__6624.cljs$lang$applyTo = (function (arglist__6625){
var f = cljs.core.first(arglist__6625);
var coll = cljs.core.first(cljs.core.next(arglist__6625));
var colls = cljs.core.rest(cljs.core.next(arglist__6625));
return G__6624__delegate.call(this, f, coll, colls);
});
return G__6624;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__6621.call(this,f,coll);
default:
return mapcat__6622.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__6622.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6626 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6626))
{var s__6627 = temp__3698__auto____6626;

var f__6628 = cljs.core.first.call(null,s__6627);
var r__6629 = cljs.core.rest.call(null,s__6627);

if(cljs.core.truth_(pred.call(null,f__6628)))
{return cljs.core.cons.call(null,f__6628,filter.call(null,pred,r__6629));
} else
{return filter.call(null,pred,r__6629);
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
var walk__6631 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__6631.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__6630_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__6630_SHARP_));
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
var partition__6638 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__6639 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6632 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6632))
{var s__6633 = temp__3698__auto____6632;

var p__6634 = cljs.core.take.call(null,n,s__6633);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__6634))))
{return cljs.core.cons.call(null,p__6634,partition.call(null,n,step,cljs.core.drop.call(null,step,s__6633)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__6640 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6635 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6635))
{var s__6636 = temp__3698__auto____6635;

var p__6637 = cljs.core.take.call(null,n,s__6636);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__6637))))
{return cljs.core.cons.call(null,p__6637,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__6636)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__6637,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__6638.call(this,n,step);
case  3 :
return partition__6639.call(this,n,step,pad);
case  4 :
return partition__6640.call(this,n,step,pad,coll);
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
var get_in__6646 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__6647 = (function (m,ks,not_found){
var sentinel__6642 = cljs.core.lookup_sentinel;
var m__6643 = m;
var ks__6644 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__6644))
{var m__6645 = cljs.core.get.call(null,m__6643,cljs.core.first.call(null,ks__6644),sentinel__6642);

if(cljs.core.truth_((sentinel__6642 === m__6645)))
{return not_found;
} else
{{
var G__6649 = sentinel__6642;
var G__6650 = m__6645;
var G__6651 = cljs.core.next.call(null,ks__6644);
sentinel__6642 = G__6649;
m__6643 = G__6650;
ks__6644 = G__6651;
continue;
}
}
} else
{return m__6643;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__6646.call(this,m,ks);
case  3 :
return get_in__6647.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__6652,v){
var vec__6653__6654 = p__6652;
var k__6655 = cljs.core.nth.call(null,vec__6653__6654,0,null);
var ks__6656 = cljs.core.nthnext.call(null,vec__6653__6654,1);

if(cljs.core.truth_(ks__6656))
{return cljs.core.assoc.call(null,m,k__6655,assoc_in.call(null,cljs.core.get.call(null,m,k__6655),ks__6656,v));
} else
{return cljs.core.assoc.call(null,m,k__6655,v);
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
var update_in__delegate = function (m,p__6657,f,args){
var vec__6658__6659 = p__6657;
var k__6660 = cljs.core.nth.call(null,vec__6658__6659,0,null);
var ks__6661 = cljs.core.nthnext.call(null,vec__6658__6659,1);

if(cljs.core.truth_(ks__6661))
{return cljs.core.assoc.call(null,m,k__6660,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__6660),ks__6661,f,args));
} else
{return cljs.core.assoc.call(null,m,k__6660,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__6660),args));
}
};
var update_in = function (m,p__6657,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__6657, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__6662){
var m = cljs.core.first(arglist__6662);
var p__6657 = cljs.core.first(cljs.core.next(arglist__6662));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6662)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6662)));
return update_in__delegate.call(this, m, p__6657, f, args);
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
var this__6663 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6696 = null;
var G__6696__6697 = (function (coll,k){
var this__6664 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__6696__6698 = (function (coll,k,not_found){
var this__6665 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__6696 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6696__6697.call(this,coll,k);
case  3 :
return G__6696__6698.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6696;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__6666 = this;
var new_array__6667 = cljs.core.aclone.call(null,this__6666.array);

(new_array__6667[k] = v);
return (new cljs.core.Vector(this__6666.meta,new_array__6667));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__6700 = null;
var G__6700__6701 = (function (tsym6668,k){
var this__6670 = this;
var tsym6668__6671 = this;

var coll__6672 = tsym6668__6671;

return cljs.core._lookup.call(null,coll__6672,k);
});
var G__6700__6702 = (function (tsym6669,k,not_found){
var this__6673 = this;
var tsym6669__6674 = this;

var coll__6675 = tsym6669__6674;

return cljs.core._lookup.call(null,coll__6675,k,not_found);
});
G__6700 = function(tsym6669,k,not_found){
switch(arguments.length){
case  2 :
return G__6700__6701.call(this,tsym6669,k);
case  3 :
return G__6700__6702.call(this,tsym6669,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6700;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6676 = this;
var new_array__6677 = cljs.core.aclone.call(null,this__6676.array);

new_array__6677.push(o);
return (new cljs.core.Vector(this__6676.meta,new_array__6677));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__6704 = null;
var G__6704__6705 = (function (v,f){
var this__6678 = this;
return cljs.core.ci_reduce.call(null,this__6678.array,f);
});
var G__6704__6706 = (function (v,f,start){
var this__6679 = this;
return cljs.core.ci_reduce.call(null,this__6679.array,f,start);
});
G__6704 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__6704__6705.call(this,v,f);
case  3 :
return G__6704__6706.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6704;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6680 = this;
if(cljs.core.truth_((this__6680.array.length > 0)))
{var vector_seq__6681 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__6680.array.length)))
{return cljs.core.cons.call(null,(this__6680.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__6681.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6682 = this;
return this__6682.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__6683 = this;
var count__6684 = this__6683.array.length;

if(cljs.core.truth_((count__6684 > 0)))
{return (this__6683.array[(count__6684 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__6685 = this;
if(cljs.core.truth_((this__6685.array.length > 0)))
{var new_array__6686 = cljs.core.aclone.call(null,this__6685.array);

new_array__6686.pop();
return (new cljs.core.Vector(this__6685.meta,new_array__6686));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__6687 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6688 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6689 = this;
return (new cljs.core.Vector(meta,this__6689.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6690 = this;
return this__6690.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__6708 = null;
var G__6708__6709 = (function (coll,n){
var this__6691 = this;
if(cljs.core.truth_((function (){var and__3546__auto____6692 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____6692))
{return (n < this__6691.array.length);
} else
{return and__3546__auto____6692;
}
})()))
{return (this__6691.array[n]);
} else
{return null;
}
});
var G__6708__6710 = (function (coll,n,not_found){
var this__6693 = this;
if(cljs.core.truth_((function (){var and__3546__auto____6694 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____6694))
{return (n < this__6693.array.length);
} else
{return and__3546__auto____6694;
}
})()))
{return (this__6693.array[n]);
} else
{return not_found;
}
});
G__6708 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__6708__6709.call(this,coll,n);
case  3 :
return G__6708__6710.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6708;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6695 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__6695.meta);
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
vector.cljs$lang$applyTo = (function (arglist__6712){
var args = cljs.core.seq( arglist__6712 );;
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
var this__6713 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6741 = null;
var G__6741__6742 = (function (coll,k){
var this__6714 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__6741__6743 = (function (coll,k,not_found){
var this__6715 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__6741 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6741__6742.call(this,coll,k);
case  3 :
return G__6741__6743.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6741;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__6716 = this;
var v_pos__6717 = (this__6716.start + key);

return (new cljs.core.Subvec(this__6716.meta,cljs.core._assoc.call(null,this__6716.v,v_pos__6717,val),this__6716.start,((this__6716.end > (v_pos__6717 + 1)) ? this__6716.end : (v_pos__6717 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__6745 = null;
var G__6745__6746 = (function (tsym6718,k){
var this__6720 = this;
var tsym6718__6721 = this;

var coll__6722 = tsym6718__6721;

return cljs.core._lookup.call(null,coll__6722,k);
});
var G__6745__6747 = (function (tsym6719,k,not_found){
var this__6723 = this;
var tsym6719__6724 = this;

var coll__6725 = tsym6719__6724;

return cljs.core._lookup.call(null,coll__6725,k,not_found);
});
G__6745 = function(tsym6719,k,not_found){
switch(arguments.length){
case  2 :
return G__6745__6746.call(this,tsym6719,k);
case  3 :
return G__6745__6747.call(this,tsym6719,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6745;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6726 = this;
return (new cljs.core.Subvec(this__6726.meta,cljs.core._assoc_n.call(null,this__6726.v,this__6726.end,o),this__6726.start,(this__6726.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__6749 = null;
var G__6749__6750 = (function (coll,f){
var this__6727 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__6749__6751 = (function (coll,f,start){
var this__6728 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__6749 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__6749__6750.call(this,coll,f);
case  3 :
return G__6749__6751.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6749;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6729 = this;
var subvec_seq__6730 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__6729.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__6729.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__6730.call(null,this__6729.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6731 = this;
return (this__6731.end - this__6731.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__6732 = this;
return cljs.core._nth.call(null,this__6732.v,(this__6732.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__6733 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__6733.start,this__6733.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__6733.meta,this__6733.v,this__6733.start,(this__6733.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__6734 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6735 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6736 = this;
return (new cljs.core.Subvec(meta,this__6736.v,this__6736.start,this__6736.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6737 = this;
return this__6737.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__6753 = null;
var G__6753__6754 = (function (coll,n){
var this__6738 = this;
return cljs.core._nth.call(null,this__6738.v,(this__6738.start + n));
});
var G__6753__6755 = (function (coll,n,not_found){
var this__6739 = this;
return cljs.core._nth.call(null,this__6739.v,(this__6739.start + n),not_found);
});
G__6753 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__6753__6754.call(this,coll,n);
case  3 :
return G__6753__6755.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6753;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6740 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__6740.meta);
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
var subvec__6757 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__6758 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__6757.call(this,v,start);
case  3 :
return subvec__6758.call(this,v,start,end);
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
var this__6760 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__6761 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6762 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6763 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6763.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6764 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__6765 = this;
return cljs.core._first.call(null,this__6765.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__6766 = this;
var temp__3695__auto____6767 = cljs.core.next.call(null,this__6766.front);

if(cljs.core.truth_(temp__3695__auto____6767))
{var f1__6768 = temp__3695__auto____6767;

return (new cljs.core.PersistentQueueSeq(this__6766.meta,f1__6768,this__6766.rear));
} else
{if(cljs.core.truth_((this__6766.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__6766.meta,this__6766.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6769 = this;
return this__6769.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6770 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__6770.front,this__6770.rear));
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
var this__6771 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6772 = this;
if(cljs.core.truth_(this__6772.front))
{return (new cljs.core.PersistentQueue(this__6772.meta,(this__6772.count + 1),this__6772.front,cljs.core.conj.call(null,(function (){var or__3548__auto____6773 = this__6772.rear;

if(cljs.core.truth_(or__3548__auto____6773))
{return or__3548__auto____6773;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__6772.meta,(this__6772.count + 1),cljs.core.conj.call(null,this__6772.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6774 = this;
var rear__6775 = cljs.core.seq.call(null,this__6774.rear);

if(cljs.core.truth_((function (){var or__3548__auto____6776 = this__6774.front;

if(cljs.core.truth_(or__3548__auto____6776))
{return or__3548__auto____6776;
} else
{return rear__6775;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__6774.front,cljs.core.seq.call(null,rear__6775)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6777 = this;
return this__6777.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__6778 = this;
return cljs.core._first.call(null,this__6778.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__6779 = this;
if(cljs.core.truth_(this__6779.front))
{var temp__3695__auto____6780 = cljs.core.next.call(null,this__6779.front);

if(cljs.core.truth_(temp__3695__auto____6780))
{var f1__6781 = temp__3695__auto____6780;

return (new cljs.core.PersistentQueue(this__6779.meta,(this__6779.count - 1),f1__6781,this__6779.rear));
} else
{return (new cljs.core.PersistentQueue(this__6779.meta,(this__6779.count - 1),cljs.core.seq.call(null,this__6779.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__6782 = this;
return cljs.core.first.call(null,this__6782.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__6783 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6784 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6785 = this;
return (new cljs.core.PersistentQueue(meta,this__6785.count,this__6785.front,this__6785.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6786 = this;
return this__6786.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6787 = this;
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
var this__6788 = this;
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
var len__6789 = array.length;

var i__6790 = 0;

while(true){
if(cljs.core.truth_((i__6790 < len__6789)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__6790]))))
{return i__6790;
} else
{{
var G__6791 = (i__6790 + incr);
i__6790 = G__6791;
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
var obj_map_contains_key_QMARK___6793 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___6794 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____6792 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____6792))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____6792;
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
return obj_map_contains_key_QMARK___6793.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___6794.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__6797 = cljs.core.hash.call(null,a);
var b__6798 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__6797 < b__6798)))
{return -1;
} else
{if(cljs.core.truth_((a__6797 > b__6798)))
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
var this__6799 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6826 = null;
var G__6826__6827 = (function (coll,k){
var this__6800 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__6826__6828 = (function (coll,k,not_found){
var this__6801 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__6801.strobj,(this__6801.strobj[k]),not_found);
});
G__6826 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6826__6827.call(this,coll,k);
case  3 :
return G__6826__6828.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6826;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__6802 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__6803 = goog.object.clone.call(null,this__6802.strobj);
var overwrite_QMARK___6804 = new_strobj__6803.hasOwnProperty(k);

(new_strobj__6803[k] = v);
if(cljs.core.truth_(overwrite_QMARK___6804))
{return (new cljs.core.ObjMap(this__6802.meta,this__6802.keys,new_strobj__6803));
} else
{var new_keys__6805 = cljs.core.aclone.call(null,this__6802.keys);

new_keys__6805.push(k);
return (new cljs.core.ObjMap(this__6802.meta,new_keys__6805,new_strobj__6803));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__6802.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__6806 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__6806.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__6830 = null;
var G__6830__6831 = (function (tsym6807,k){
var this__6809 = this;
var tsym6807__6810 = this;

var coll__6811 = tsym6807__6810;

return cljs.core._lookup.call(null,coll__6811,k);
});
var G__6830__6832 = (function (tsym6808,k,not_found){
var this__6812 = this;
var tsym6808__6813 = this;

var coll__6814 = tsym6808__6813;

return cljs.core._lookup.call(null,coll__6814,k,not_found);
});
G__6830 = function(tsym6808,k,not_found){
switch(arguments.length){
case  2 :
return G__6830__6831.call(this,tsym6808,k);
case  3 :
return G__6830__6832.call(this,tsym6808,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6830;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__6815 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6816 = this;
if(cljs.core.truth_((this__6816.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__6796_SHARP_){
return cljs.core.vector.call(null,p1__6796_SHARP_,(this__6816.strobj[p1__6796_SHARP_]));
}),this__6816.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6817 = this;
return this__6817.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6818 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6819 = this;
return (new cljs.core.ObjMap(meta,this__6819.keys,this__6819.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6820 = this;
return this__6820.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6821 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__6821.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__6822 = this;
if(cljs.core.truth_((function (){var and__3546__auto____6823 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____6823))
{return this__6822.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____6823;
}
})()))
{var new_keys__6824 = cljs.core.aclone.call(null,this__6822.keys);
var new_strobj__6825 = goog.object.clone.call(null,this__6822.strobj);

new_keys__6824.splice(cljs.core.scan_array.call(null,1,k,new_keys__6824),1);
cljs.core.js_delete.call(null,new_strobj__6825,k);
return (new cljs.core.ObjMap(this__6822.meta,new_keys__6824,new_strobj__6825));
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
var this__6835 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6873 = null;
var G__6873__6874 = (function (coll,k){
var this__6836 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__6873__6875 = (function (coll,k,not_found){
var this__6837 = this;
var bucket__6838 = (this__6837.hashobj[cljs.core.hash.call(null,k)]);
var i__6839 = (cljs.core.truth_(bucket__6838)?cljs.core.scan_array.call(null,2,k,bucket__6838):null);

if(cljs.core.truth_(i__6839))
{return (bucket__6838[(i__6839 + 1)]);
} else
{return not_found;
}
});
G__6873 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6873__6874.call(this,coll,k);
case  3 :
return G__6873__6875.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6873;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__6840 = this;
var h__6841 = cljs.core.hash.call(null,k);
var bucket__6842 = (this__6840.hashobj[h__6841]);

if(cljs.core.truth_(bucket__6842))
{var new_bucket__6843 = cljs.core.aclone.call(null,bucket__6842);
var new_hashobj__6844 = goog.object.clone.call(null,this__6840.hashobj);

(new_hashobj__6844[h__6841] = new_bucket__6843);
var temp__3695__auto____6845 = cljs.core.scan_array.call(null,2,k,new_bucket__6843);

if(cljs.core.truth_(temp__3695__auto____6845))
{var i__6846 = temp__3695__auto____6845;

(new_bucket__6843[(i__6846 + 1)] = v);
return (new cljs.core.HashMap(this__6840.meta,this__6840.count,new_hashobj__6844));
} else
{new_bucket__6843.push(k,v);
return (new cljs.core.HashMap(this__6840.meta,(this__6840.count + 1),new_hashobj__6844));
}
} else
{var new_hashobj__6847 = goog.object.clone.call(null,this__6840.hashobj);

(new_hashobj__6847[h__6841] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__6840.meta,(this__6840.count + 1),new_hashobj__6847));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__6848 = this;
var bucket__6849 = (this__6848.hashobj[cljs.core.hash.call(null,k)]);
var i__6850 = (cljs.core.truth_(bucket__6849)?cljs.core.scan_array.call(null,2,k,bucket__6849):null);

if(cljs.core.truth_(i__6850))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__6877 = null;
var G__6877__6878 = (function (tsym6851,k){
var this__6853 = this;
var tsym6851__6854 = this;

var coll__6855 = tsym6851__6854;

return cljs.core._lookup.call(null,coll__6855,k);
});
var G__6877__6879 = (function (tsym6852,k,not_found){
var this__6856 = this;
var tsym6852__6857 = this;

var coll__6858 = tsym6852__6857;

return cljs.core._lookup.call(null,coll__6858,k,not_found);
});
G__6877 = function(tsym6852,k,not_found){
switch(arguments.length){
case  2 :
return G__6877__6878.call(this,tsym6852,k);
case  3 :
return G__6877__6879.call(this,tsym6852,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6877;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__6859 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6860 = this;
if(cljs.core.truth_((this__6860.count > 0)))
{var hashes__6861 = cljs.core.js_keys.call(null,this__6860.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__6834_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__6860.hashobj[p1__6834_SHARP_])));
}),hashes__6861);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6862 = this;
return this__6862.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6863 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6864 = this;
return (new cljs.core.HashMap(meta,this__6864.count,this__6864.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6865 = this;
return this__6865.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6866 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__6866.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__6867 = this;
var h__6868 = cljs.core.hash.call(null,k);
var bucket__6869 = (this__6867.hashobj[h__6868]);
var i__6870 = (cljs.core.truth_(bucket__6869)?cljs.core.scan_array.call(null,2,k,bucket__6869):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__6870)))
{return coll;
} else
{var new_hashobj__6871 = goog.object.clone.call(null,this__6867.hashobj);

if(cljs.core.truth_((3 > bucket__6869.length)))
{cljs.core.js_delete.call(null,new_hashobj__6871,h__6868);
} else
{var new_bucket__6872 = cljs.core.aclone.call(null,bucket__6869);

new_bucket__6872.splice(i__6870,2);
(new_hashobj__6871[h__6868] = new_bucket__6872);
}
return (new cljs.core.HashMap(this__6867.meta,(this__6867.count - 1),new_hashobj__6871));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__6881 = ks.length;

var i__6882 = 0;
var out__6883 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__6882 < len__6881)))
{{
var G__6884 = (i__6882 + 1);
var G__6885 = cljs.core.assoc.call(null,out__6883,(ks[i__6882]),(vs[i__6882]));
i__6882 = G__6884;
out__6883 = G__6885;
continue;
}
} else
{return out__6883;
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
var in$__6886 = cljs.core.seq.call(null,keyvals);
var out__6887 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__6886))
{{
var G__6888 = cljs.core.nnext.call(null,in$__6886);
var G__6889 = cljs.core.assoc.call(null,out__6887,cljs.core.first.call(null,in$__6886),cljs.core.second.call(null,in$__6886));
in$__6886 = G__6888;
out__6887 = G__6889;
continue;
}
} else
{return out__6887;
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
hash_map.cljs$lang$applyTo = (function (arglist__6890){
var keyvals = cljs.core.seq( arglist__6890 );;
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
{return cljs.core.reduce.call(null,(function (p1__6891_SHARP_,p2__6892_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____6893 = p1__6891_SHARP_;

if(cljs.core.truth_(or__3548__auto____6893))
{return or__3548__auto____6893;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__6892_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__6894){
var maps = cljs.core.seq( arglist__6894 );;
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
{var merge_entry__6897 = (function (m,e){
var k__6895 = cljs.core.first.call(null,e);
var v__6896 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__6895)))
{return cljs.core.assoc.call(null,m,k__6895,f.call(null,cljs.core.get.call(null,m,k__6895),v__6896));
} else
{return cljs.core.assoc.call(null,m,k__6895,v__6896);
}
});
var merge2__6899 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__6897,(function (){var or__3548__auto____6898 = m1;

if(cljs.core.truth_(or__3548__auto____6898))
{return or__3548__auto____6898;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__6899,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__6900){
var f = cljs.core.first(arglist__6900);
var maps = cljs.core.rest(arglist__6900);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__6902 = cljs.core.ObjMap.fromObject([],{});
var keys__6903 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__6903))
{var key__6904 = cljs.core.first.call(null,keys__6903);
var entry__6905 = cljs.core.get.call(null,map,key__6904,"\uFDD0'user/not-found");

{
var G__6906 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__6905,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__6902,key__6904,entry__6905):ret__6902);
var G__6907 = cljs.core.next.call(null,keys__6903);
ret__6902 = G__6906;
keys__6903 = G__6907;
continue;
}
} else
{return ret__6902;
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
var this__6908 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6929 = null;
var G__6929__6930 = (function (coll,v){
var this__6909 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__6929__6931 = (function (coll,v,not_found){
var this__6910 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__6910.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__6929 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__6929__6930.call(this,coll,v);
case  3 :
return G__6929__6931.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6929;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__6933 = null;
var G__6933__6934 = (function (tsym6911,k){
var this__6913 = this;
var tsym6911__6914 = this;

var coll__6915 = tsym6911__6914;

return cljs.core._lookup.call(null,coll__6915,k);
});
var G__6933__6935 = (function (tsym6912,k,not_found){
var this__6916 = this;
var tsym6912__6917 = this;

var coll__6918 = tsym6912__6917;

return cljs.core._lookup.call(null,coll__6918,k,not_found);
});
G__6933 = function(tsym6912,k,not_found){
switch(arguments.length){
case  2 :
return G__6933__6934.call(this,tsym6912,k);
case  3 :
return G__6933__6935.call(this,tsym6912,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6933;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6919 = this;
return (new cljs.core.Set(this__6919.meta,cljs.core.assoc.call(null,this__6919.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6920 = this;
return cljs.core.keys.call(null,this__6920.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__6921 = this;
return (new cljs.core.Set(this__6921.meta,cljs.core.dissoc.call(null,this__6921.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6922 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6923 = this;
var and__3546__auto____6924 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____6924))
{var and__3546__auto____6925 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____6925))
{return cljs.core.every_QMARK_.call(null,(function (p1__6901_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__6901_SHARP_);
}),other);
} else
{return and__3546__auto____6925;
}
} else
{return and__3546__auto____6924;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6926 = this;
return (new cljs.core.Set(meta,this__6926.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6927 = this;
return this__6927.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6928 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__6928.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__6938 = cljs.core.seq.call(null,coll);
var out__6939 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__6938))))
{{
var G__6940 = cljs.core.rest.call(null,in$__6938);
var G__6941 = cljs.core.conj.call(null,out__6939,cljs.core.first.call(null,in$__6938));
in$__6938 = G__6940;
out__6939 = G__6941;
continue;
}
} else
{return out__6939;
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
{var n__6942 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____6943 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____6943))
{var e__6944 = temp__3695__auto____6943;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__6944));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__6942,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__6937_SHARP_){
var temp__3695__auto____6945 = cljs.core.find.call(null,smap,p1__6937_SHARP_);

if(cljs.core.truth_(temp__3695__auto____6945))
{var e__6946 = temp__3695__auto____6945;

return cljs.core.second.call(null,e__6946);
} else
{return p1__6937_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__6954 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__6947,seen){
while(true){
var vec__6948__6949 = p__6947;
var f__6950 = cljs.core.nth.call(null,vec__6948__6949,0,null);
var xs__6951 = vec__6948__6949;

var temp__3698__auto____6952 = cljs.core.seq.call(null,xs__6951);

if(cljs.core.truth_(temp__3698__auto____6952))
{var s__6953 = temp__3698__auto____6952;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__6950)))
{{
var G__6955 = cljs.core.rest.call(null,s__6953);
var G__6956 = seen;
p__6947 = G__6955;
seen = G__6956;
continue;
}
} else
{return cljs.core.cons.call(null,f__6950,step.call(null,cljs.core.rest.call(null,s__6953),cljs.core.conj.call(null,seen,f__6950)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__6954.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__6957 = cljs.core.Vector.fromArray([]);
var s__6958 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__6958)))
{{
var G__6959 = cljs.core.conj.call(null,ret__6957,cljs.core.first.call(null,s__6958));
var G__6960 = cljs.core.next.call(null,s__6958);
ret__6957 = G__6959;
s__6958 = G__6960;
continue;
}
} else
{return cljs.core.seq.call(null,ret__6957);
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
{if(cljs.core.truth_((function (){var or__3548__auto____6961 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____6961))
{return or__3548__auto____6961;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__6962 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__6962 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__6962 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____6963 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____6963))
{return or__3548__auto____6963;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__6964 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__6964 > -1)))
{return cljs.core.subs.call(null,x,2,i__6964);
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
var map__6967 = cljs.core.ObjMap.fromObject([],{});
var ks__6968 = cljs.core.seq.call(null,keys);
var vs__6969 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____6970 = ks__6968;

if(cljs.core.truth_(and__3546__auto____6970))
{return vs__6969;
} else
{return and__3546__auto____6970;
}
})()))
{{
var G__6971 = cljs.core.assoc.call(null,map__6967,cljs.core.first.call(null,ks__6968),cljs.core.first.call(null,vs__6969));
var G__6972 = cljs.core.next.call(null,ks__6968);
var G__6973 = cljs.core.next.call(null,vs__6969);
map__6967 = G__6971;
ks__6968 = G__6972;
vs__6969 = G__6973;
continue;
}
} else
{return map__6967;
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
var max_key__6976 = (function (k,x){
return x;
});
var max_key__6977 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__6978 = (function() { 
var G__6980__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__6965_SHARP_,p2__6966_SHARP_){
return max_key.call(null,k,p1__6965_SHARP_,p2__6966_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__6980 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6980__delegate.call(this, k, x, y, more);
};
G__6980.cljs$lang$maxFixedArity = 3;
G__6980.cljs$lang$applyTo = (function (arglist__6981){
var k = cljs.core.first(arglist__6981);
var x = cljs.core.first(cljs.core.next(arglist__6981));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6981)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6981)));
return G__6980__delegate.call(this, k, x, y, more);
});
return G__6980;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__6976.call(this,k,x);
case  3 :
return max_key__6977.call(this,k,x,y);
default:
return max_key__6978.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__6978.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__6982 = (function (k,x){
return x;
});
var min_key__6983 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__6984 = (function() { 
var G__6986__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__6974_SHARP_,p2__6975_SHARP_){
return min_key.call(null,k,p1__6974_SHARP_,p2__6975_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__6986 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6986__delegate.call(this, k, x, y, more);
};
G__6986.cljs$lang$maxFixedArity = 3;
G__6986.cljs$lang$applyTo = (function (arglist__6987){
var k = cljs.core.first(arglist__6987);
var x = cljs.core.first(cljs.core.next(arglist__6987));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6987)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6987)));
return G__6986__delegate.call(this, k, x, y, more);
});
return G__6986;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__6982.call(this,k,x);
case  3 :
return min_key__6983.call(this,k,x,y);
default:
return min_key__6984.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__6984.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__6990 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__6991 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6988 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6988))
{var s__6989 = temp__3698__auto____6988;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__6989),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__6989)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__6990.call(this,n,step);
case  3 :
return partition_all__6991.call(this,n,step,coll);
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
var temp__3698__auto____6993 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6993))
{var s__6994 = temp__3698__auto____6993;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__6994))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__6994),take_while.call(null,pred,cljs.core.rest.call(null,s__6994)));
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
var this__6995 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__6996 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__7012 = null;
var G__7012__7013 = (function (rng,f){
var this__6997 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__7012__7014 = (function (rng,f,s){
var this__6998 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__7012 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__7012__7013.call(this,rng,f);
case  3 :
return G__7012__7014.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7012;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__6999 = this;
var comp__7000 = (cljs.core.truth_((this__6999.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__7000.call(null,this__6999.start,this__6999.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__7001 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__7001.end - this__7001.start) / this__7001.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__7002 = this;
return this__7002.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__7003 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__7003.meta,(this__7003.start + this__7003.step),this__7003.end,this__7003.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__7004 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__7005 = this;
return (new cljs.core.Range(meta,this__7005.start,this__7005.end,this__7005.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__7006 = this;
return this__7006.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7016 = null;
var G__7016__7017 = (function (rng,n){
var this__7007 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__7007.start + (n * this__7007.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____7008 = (this__7007.start > this__7007.end);

if(cljs.core.truth_(and__3546__auto____7008))
{return cljs.core._EQ_.call(null,this__7007.step,0);
} else
{return and__3546__auto____7008;
}
})()))
{return this__7007.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__7016__7018 = (function (rng,n,not_found){
var this__7009 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__7009.start + (n * this__7009.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____7010 = (this__7009.start > this__7009.end);

if(cljs.core.truth_(and__3546__auto____7010))
{return cljs.core._EQ_.call(null,this__7009.step,0);
} else
{return and__3546__auto____7010;
}
})()))
{return this__7009.start;
} else
{return not_found;
}
}
});
G__7016 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__7016__7017.call(this,rng,n);
case  3 :
return G__7016__7018.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7016;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__7011 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7011.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__7020 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__7021 = (function (end){
return range.call(null,0,end,1);
});
var range__7022 = (function (start,end){
return range.call(null,start,end,1);
});
var range__7023 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__7020.call(this);
case  1 :
return range__7021.call(this,start);
case  2 :
return range__7022.call(this,start,end);
case  3 :
return range__7023.call(this,start,end,step);
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
var temp__3698__auto____7025 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7025))
{var s__7026 = temp__3698__auto____7025;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__7026),take_nth.call(null,n,cljs.core.drop.call(null,n,s__7026)));
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
var temp__3698__auto____7028 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7028))
{var s__7029 = temp__3698__auto____7028;

var fst__7030 = cljs.core.first.call(null,s__7029);
var fv__7031 = f.call(null,fst__7030);
var run__7032 = cljs.core.cons.call(null,fst__7030,cljs.core.take_while.call(null,(function (p1__7027_SHARP_){
return cljs.core._EQ_.call(null,fv__7031,f.call(null,p1__7027_SHARP_));
}),cljs.core.next.call(null,s__7029)));

return cljs.core.cons.call(null,run__7032,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__7032),s__7029))));
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
var reductions__7047 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____7043 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____7043))
{var s__7044 = temp__3695__auto____7043;

return reductions.call(null,f,cljs.core.first.call(null,s__7044),cljs.core.rest.call(null,s__7044));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__7048 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7045 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7045))
{var s__7046 = temp__3698__auto____7045;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__7046)),cljs.core.rest.call(null,s__7046));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__7047.call(this,f,init);
case  3 :
return reductions__7048.call(this,f,init,coll);
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
var juxt__7051 = (function (f){
return (function() {
var G__7056 = null;
var G__7056__7057 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__7056__7058 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__7056__7059 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__7056__7060 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__7056__7061 = (function() { 
var G__7063__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__7063 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7063__delegate.call(this, x, y, z, args);
};
G__7063.cljs$lang$maxFixedArity = 3;
G__7063.cljs$lang$applyTo = (function (arglist__7064){
var x = cljs.core.first(arglist__7064);
var y = cljs.core.first(cljs.core.next(arglist__7064));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7064)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7064)));
return G__7063__delegate.call(this, x, y, z, args);
});
return G__7063;
})()
;
G__7056 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__7056__7057.call(this);
case  1 :
return G__7056__7058.call(this,x);
case  2 :
return G__7056__7059.call(this,x,y);
case  3 :
return G__7056__7060.call(this,x,y,z);
default:
return G__7056__7061.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7056.cljs$lang$maxFixedArity = 3;
G__7056.cljs$lang$applyTo = G__7056__7061.cljs$lang$applyTo;
return G__7056;
})()
});
var juxt__7052 = (function (f,g){
return (function() {
var G__7065 = null;
var G__7065__7066 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__7065__7067 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__7065__7068 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__7065__7069 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__7065__7070 = (function() { 
var G__7072__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7072 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7072__delegate.call(this, x, y, z, args);
};
G__7072.cljs$lang$maxFixedArity = 3;
G__7072.cljs$lang$applyTo = (function (arglist__7073){
var x = cljs.core.first(arglist__7073);
var y = cljs.core.first(cljs.core.next(arglist__7073));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7073)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7073)));
return G__7072__delegate.call(this, x, y, z, args);
});
return G__7072;
})()
;
G__7065 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__7065__7066.call(this);
case  1 :
return G__7065__7067.call(this,x);
case  2 :
return G__7065__7068.call(this,x,y);
case  3 :
return G__7065__7069.call(this,x,y,z);
default:
return G__7065__7070.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7065.cljs$lang$maxFixedArity = 3;
G__7065.cljs$lang$applyTo = G__7065__7070.cljs$lang$applyTo;
return G__7065;
})()
});
var juxt__7053 = (function (f,g,h){
return (function() {
var G__7074 = null;
var G__7074__7075 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__7074__7076 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__7074__7077 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__7074__7078 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__7074__7079 = (function() { 
var G__7081__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__7081 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7081__delegate.call(this, x, y, z, args);
};
G__7081.cljs$lang$maxFixedArity = 3;
G__7081.cljs$lang$applyTo = (function (arglist__7082){
var x = cljs.core.first(arglist__7082);
var y = cljs.core.first(cljs.core.next(arglist__7082));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7082)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7082)));
return G__7081__delegate.call(this, x, y, z, args);
});
return G__7081;
})()
;
G__7074 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__7074__7075.call(this);
case  1 :
return G__7074__7076.call(this,x);
case  2 :
return G__7074__7077.call(this,x,y);
case  3 :
return G__7074__7078.call(this,x,y,z);
default:
return G__7074__7079.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7074.cljs$lang$maxFixedArity = 3;
G__7074.cljs$lang$applyTo = G__7074__7079.cljs$lang$applyTo;
return G__7074;
})()
});
var juxt__7054 = (function() { 
var G__7083__delegate = function (f,g,h,fs){
var fs__7050 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__7084 = null;
var G__7084__7085 = (function (){
return cljs.core.reduce.call(null,(function (p1__7033_SHARP_,p2__7034_SHARP_){
return cljs.core.conj.call(null,p1__7033_SHARP_,p2__7034_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__7050);
});
var G__7084__7086 = (function (x){
return cljs.core.reduce.call(null,(function (p1__7035_SHARP_,p2__7036_SHARP_){
return cljs.core.conj.call(null,p1__7035_SHARP_,p2__7036_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__7050);
});
var G__7084__7087 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__7037_SHARP_,p2__7038_SHARP_){
return cljs.core.conj.call(null,p1__7037_SHARP_,p2__7038_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__7050);
});
var G__7084__7088 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__7039_SHARP_,p2__7040_SHARP_){
return cljs.core.conj.call(null,p1__7039_SHARP_,p2__7040_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__7050);
});
var G__7084__7089 = (function() { 
var G__7091__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__7041_SHARP_,p2__7042_SHARP_){
return cljs.core.conj.call(null,p1__7041_SHARP_,cljs.core.apply.call(null,p2__7042_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__7050);
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
G__7084 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__7084__7085.call(this);
case  1 :
return G__7084__7086.call(this,x);
case  2 :
return G__7084__7087.call(this,x,y);
case  3 :
return G__7084__7088.call(this,x,y,z);
default:
return G__7084__7089.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7084.cljs$lang$maxFixedArity = 3;
G__7084.cljs$lang$applyTo = G__7084__7089.cljs$lang$applyTo;
return G__7084;
})()
};
var G__7083 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7083__delegate.call(this, f, g, h, fs);
};
G__7083.cljs$lang$maxFixedArity = 3;
G__7083.cljs$lang$applyTo = (function (arglist__7093){
var f = cljs.core.first(arglist__7093);
var g = cljs.core.first(cljs.core.next(arglist__7093));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7093)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7093)));
return G__7083__delegate.call(this, f, g, h, fs);
});
return G__7083;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__7051.call(this,f);
case  2 :
return juxt__7052.call(this,f,g);
case  3 :
return juxt__7053.call(this,f,g,h);
default:
return juxt__7054.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__7054.cljs$lang$applyTo;
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
var dorun__7095 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__7098 = cljs.core.next.call(null,coll);
coll = G__7098;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__7096 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____7094 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____7094))
{return (n > 0);
} else
{return and__3546__auto____7094;
}
})()))
{{
var G__7099 = (n - 1);
var G__7100 = cljs.core.next.call(null,coll);
n = G__7099;
coll = G__7100;
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
return dorun__7095.call(this,n);
case  2 :
return dorun__7096.call(this,n,coll);
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
var doall__7101 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__7102 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__7101.call(this,n);
case  2 :
return doall__7102.call(this,n,coll);
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
var matches__7104 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__7104),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__7104),1)))
{return cljs.core.first.call(null,matches__7104);
} else
{return cljs.core.vec.call(null,matches__7104);
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
var matches__7105 = re.exec(s);

if(cljs.core.truth_((matches__7105 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__7105),1)))
{return cljs.core.first.call(null,matches__7105);
} else
{return cljs.core.vec.call(null,matches__7105);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__7106 = cljs.core.re_find.call(null,re,s);
var match_idx__7107 = s.search(re);
var match_str__7108 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__7106))?cljs.core.first.call(null,match_data__7106):match_data__7106);
var post_match__7109 = cljs.core.subs.call(null,s,(match_idx__7107 + cljs.core.count.call(null,match_str__7108)));

if(cljs.core.truth_(match_data__7106))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__7106,re_seq.call(null,re,post_match__7109));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__7111__7112 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___7113 = cljs.core.nth.call(null,vec__7111__7112,0,null);
var flags__7114 = cljs.core.nth.call(null,vec__7111__7112,1,null);
var pattern__7115 = cljs.core.nth.call(null,vec__7111__7112,2,null);

return (new RegExp(pattern__7115,flags__7114));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__7110_SHARP_){
return print_one.call(null,p1__7110_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____7116 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____7116))
{var and__3546__auto____7120 = (function (){var x__2312__auto____7117 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____7118 = x__2312__auto____7117;

if(cljs.core.truth_(and__3546__auto____7118))
{var and__3546__auto____7119 = x__2312__auto____7117.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____7119))
{return cljs.core.not.call(null,x__2312__auto____7117.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____7119;
}
} else
{return and__3546__auto____7118;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__2312__auto____7117);
}
})();

if(cljs.core.truth_(and__3546__auto____7120))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____7120;
}
} else
{return and__3546__auto____7116;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__2312__auto____7121 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____7122 = x__2312__auto____7121;

if(cljs.core.truth_(and__3546__auto____7122))
{var and__3546__auto____7123 = x__2312__auto____7121.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____7123))
{return cljs.core.not.call(null,x__2312__auto____7121.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____7123;
}
} else
{return and__3546__auto____7122;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__2312__auto____7121);
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
var first_obj__7124 = cljs.core.first.call(null,objs);
var sb__7125 = (new goog.string.StringBuffer());

var G__7126__7127 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__7126__7127))
{var obj__7128 = cljs.core.first.call(null,G__7126__7127);
var G__7126__7129 = G__7126__7127;

while(true){
if(cljs.core.truth_((obj__7128 === first_obj__7124)))
{} else
{sb__7125.append(" ");
}
var G__7130__7131 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__7128,opts));

if(cljs.core.truth_(G__7130__7131))
{var string__7132 = cljs.core.first.call(null,G__7130__7131);
var G__7130__7133 = G__7130__7131;

while(true){
sb__7125.append(string__7132);
var temp__3698__auto____7134 = cljs.core.next.call(null,G__7130__7133);

if(cljs.core.truth_(temp__3698__auto____7134))
{var G__7130__7135 = temp__3698__auto____7134;

{
var G__7138 = cljs.core.first.call(null,G__7130__7135);
var G__7139 = G__7130__7135;
string__7132 = G__7138;
G__7130__7133 = G__7139;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____7136 = cljs.core.next.call(null,G__7126__7129);

if(cljs.core.truth_(temp__3698__auto____7136))
{var G__7126__7137 = temp__3698__auto____7136;

{
var G__7140 = cljs.core.first.call(null,G__7126__7137);
var G__7141 = G__7126__7137;
obj__7128 = G__7140;
G__7126__7129 = G__7141;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__7125);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__7142 = cljs.core.first.call(null,objs);

var G__7143__7144 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__7143__7144))
{var obj__7145 = cljs.core.first.call(null,G__7143__7144);
var G__7143__7146 = G__7143__7144;

while(true){
if(cljs.core.truth_((obj__7145 === first_obj__7142)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__7147__7148 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__7145,opts));

if(cljs.core.truth_(G__7147__7148))
{var string__7149 = cljs.core.first.call(null,G__7147__7148);
var G__7147__7150 = G__7147__7148;

while(true){
cljs.core.string_print.call(null,string__7149);
var temp__3698__auto____7151 = cljs.core.next.call(null,G__7147__7150);

if(cljs.core.truth_(temp__3698__auto____7151))
{var G__7147__7152 = temp__3698__auto____7151;

{
var G__7155 = cljs.core.first.call(null,G__7147__7152);
var G__7156 = G__7147__7152;
string__7149 = G__7155;
G__7147__7150 = G__7156;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____7153 = cljs.core.next.call(null,G__7143__7146);

if(cljs.core.truth_(temp__3698__auto____7153))
{var G__7143__7154 = temp__3698__auto____7153;

{
var G__7157 = cljs.core.first.call(null,G__7143__7154);
var G__7158 = G__7143__7154;
obj__7145 = G__7157;
G__7143__7146 = G__7158;
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
pr_str.cljs$lang$applyTo = (function (arglist__7159){
var objs = cljs.core.seq( arglist__7159 );;
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
pr.cljs$lang$applyTo = (function (arglist__7160){
var objs = cljs.core.seq( arglist__7160 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__7161){
var objs = cljs.core.seq( arglist__7161 );;
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
println.cljs$lang$applyTo = (function (arglist__7162){
var objs = cljs.core.seq( arglist__7162 );;
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
prn.cljs$lang$applyTo = (function (arglist__7163){
var objs = cljs.core.seq( arglist__7163 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__7164 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__7164,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____7165 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____7165))
{var nspc__7166 = temp__3698__auto____7165;

return cljs.core.str.call(null,nspc__7166,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____7167 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____7167))
{var nspc__7168 = temp__3698__auto____7167;

return cljs.core.str.call(null,nspc__7168,"\/");
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
var pr_pair__7169 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__7169,"{",", ","}",opts,coll);
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
var this__7170 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__7171 = this;
var G__7172__7173 = cljs.core.seq.call(null,this__7171.watches);

if(cljs.core.truth_(G__7172__7173))
{var G__7175__7177 = cljs.core.first.call(null,G__7172__7173);
var vec__7176__7178 = G__7175__7177;
var key__7179 = cljs.core.nth.call(null,vec__7176__7178,0,null);
var f__7180 = cljs.core.nth.call(null,vec__7176__7178,1,null);
var G__7172__7181 = G__7172__7173;

var G__7175__7182 = G__7175__7177;
var G__7172__7183 = G__7172__7181;

while(true){
var vec__7184__7185 = G__7175__7182;
var key__7186 = cljs.core.nth.call(null,vec__7184__7185,0,null);
var f__7187 = cljs.core.nth.call(null,vec__7184__7185,1,null);
var G__7172__7188 = G__7172__7183;

f__7187.call(null,key__7186,this$,oldval,newval);
var temp__3698__auto____7189 = cljs.core.next.call(null,G__7172__7188);

if(cljs.core.truth_(temp__3698__auto____7189))
{var G__7172__7190 = temp__3698__auto____7189;

{
var G__7197 = cljs.core.first.call(null,G__7172__7190);
var G__7198 = G__7172__7190;
G__7175__7182 = G__7197;
G__7172__7183 = G__7198;
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
var this__7191 = this;
return this$.watches = cljs.core.assoc.call(null,this__7191.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__7192 = this;
return this$.watches = cljs.core.dissoc.call(null,this__7192.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__7193 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__7193.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__7194 = this;
return this__7194.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__7195 = this;
return this__7195.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__7196 = this;
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
var atom__7205 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__7206 = (function() { 
var G__7208__delegate = function (x,p__7199){
var map__7200__7201 = p__7199;
var map__7200__7202 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7200__7201))?cljs.core.apply.call(null,cljs.core.hash_map,map__7200__7201):map__7200__7201);
var validator__7203 = cljs.core.get.call(null,map__7200__7202,"\uFDD0'validator");
var meta__7204 = cljs.core.get.call(null,map__7200__7202,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__7204,validator__7203,null));
};
var G__7208 = function (x,var_args){
var p__7199 = null;
if (goog.isDef(var_args)) {
  p__7199 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7208__delegate.call(this, x, p__7199);
};
G__7208.cljs$lang$maxFixedArity = 1;
G__7208.cljs$lang$applyTo = (function (arglist__7209){
var x = cljs.core.first(arglist__7209);
var p__7199 = cljs.core.rest(arglist__7209);
return G__7208__delegate.call(this, x, p__7199);
});
return G__7208;
})()
;
atom = function(x,var_args){
var p__7199 = var_args;
switch(arguments.length){
case  1 :
return atom__7205.call(this,x);
default:
return atom__7206.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__7206.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____7210 = a.validator;

if(cljs.core.truth_(temp__3698__auto____7210))
{var validate__7211 = temp__3698__auto____7210;

if(cljs.core.truth_(validate__7211.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3073))))));
}
} else
{}
var old_value__7212 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__7212,new_value);
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
var swap_BANG___7213 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___7214 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___7215 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___7216 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___7217 = (function() { 
var G__7219__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__7219 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7219__delegate.call(this, a, f, x, y, z, more);
};
G__7219.cljs$lang$maxFixedArity = 5;
G__7219.cljs$lang$applyTo = (function (arglist__7220){
var a = cljs.core.first(arglist__7220);
var f = cljs.core.first(cljs.core.next(arglist__7220));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7220)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7220))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7220)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7220)))));
return G__7219__delegate.call(this, a, f, x, y, z, more);
});
return G__7219;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___7213.call(this,a,f);
case  3 :
return swap_BANG___7214.call(this,a,f,x);
case  4 :
return swap_BANG___7215.call(this,a,f,x,y);
case  5 :
return swap_BANG___7216.call(this,a,f,x,y,z);
default:
return swap_BANG___7217.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___7217.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__7221){
var iref = cljs.core.first(arglist__7221);
var f = cljs.core.first(cljs.core.next(arglist__7221));
var args = cljs.core.rest(cljs.core.next(arglist__7221));
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
var gensym__7222 = (function (){
return gensym.call(null,"G__");
});
var gensym__7223 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__7222.call(this);
case  1 :
return gensym__7223.call(this,prefix_string);
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
var this__7225 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__7225.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__7226 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__7226.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__7226.state,this__7226.f);
}
return cljs.core.deref.call(null,this__7226.state);
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
delay.cljs$lang$applyTo = (function (arglist__7227){
var body = cljs.core.seq( arglist__7227 );;
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
var map__7228__7229 = options;
var map__7228__7230 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7228__7229))?cljs.core.apply.call(null,cljs.core.hash_map,map__7228__7229):map__7228__7229);
var keywordize_keys__7231 = cljs.core.get.call(null,map__7228__7230,"\uFDD0'keywordize-keys");
var keyfn__7232 = (cljs.core.truth_(keywordize_keys__7231)?cljs.core.keyword:cljs.core.str);
var f__7238 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__2376__auto____7237 = (function iter__7233(s__7234){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7234__7235 = s__7234;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__7234__7235)))
{var k__7236 = cljs.core.first.call(null,s__7234__7235);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__7232.call(null,k__7236),thisfn.call(null,(x[k__7236]))]),iter__7233.call(null,cljs.core.rest.call(null,s__7234__7235)));
} else
{return null;
}
break;
}
})));
});

return iter__2376__auto____7237.call(null,cljs.core.js_keys.call(null,x));
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

return f__7238.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__7239){
var x = cljs.core.first(arglist__7239);
var options = cljs.core.rest(arglist__7239);
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
var mem__7240 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__7244__delegate = function (args){
var temp__3695__auto____7241 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__7240),args);

if(cljs.core.truth_(temp__3695__auto____7241))
{var v__7242 = temp__3695__auto____7241;

return v__7242;
} else
{var ret__7243 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__7240,cljs.core.assoc,args,ret__7243);
return ret__7243;
}
};
var G__7244 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7244__delegate.call(this, args);
};
G__7244.cljs$lang$maxFixedArity = 0;
G__7244.cljs$lang$applyTo = (function (arglist__7245){
var args = cljs.core.seq( arglist__7245 );;
return G__7244__delegate.call(this, args);
});
return G__7244;
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
var trampoline__7247 = (function (f){
while(true){
var ret__7246 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__7246)))
{{
var G__7250 = ret__7246;
f = G__7250;
continue;
}
} else
{return ret__7246;
}
break;
}
});
var trampoline__7248 = (function() { 
var G__7251__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__7251 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7251__delegate.call(this, f, args);
};
G__7251.cljs$lang$maxFixedArity = 1;
G__7251.cljs$lang$applyTo = (function (arglist__7252){
var f = cljs.core.first(arglist__7252);
var args = cljs.core.rest(arglist__7252);
return G__7251__delegate.call(this, f, args);
});
return G__7251;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__7247.call(this,f);
default:
return trampoline__7248.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__7248.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__7253 = (function (){
return rand.call(null,1);
});
var rand__7254 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__7253.call(this);
case  1 :
return rand__7254.call(this,n);
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
var k__7256 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__7256,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__7256,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___7265 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___7266 = (function (h,child,parent){
var or__3548__auto____7257 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____7257))
{return or__3548__auto____7257;
} else
{var or__3548__auto____7258 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____7258))
{return or__3548__auto____7258;
} else
{var and__3546__auto____7259 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____7259))
{var and__3546__auto____7260 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____7260))
{var and__3546__auto____7261 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____7261))
{var ret__7262 = true;
var i__7263 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____7264 = cljs.core.not.call(null,ret__7262);

if(cljs.core.truth_(or__3548__auto____7264))
{return or__3548__auto____7264;
} else
{return cljs.core._EQ_.call(null,i__7263,cljs.core.count.call(null,parent));
}
})()))
{return ret__7262;
} else
{{
var G__7268 = isa_QMARK_.call(null,h,child.call(null,i__7263),parent.call(null,i__7263));
var G__7269 = (i__7263 + 1);
ret__7262 = G__7268;
i__7263 = G__7269;
continue;
}
}
break;
}
} else
{return and__3546__auto____7261;
}
} else
{return and__3546__auto____7260;
}
} else
{return and__3546__auto____7259;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___7265.call(this,h,child);
case  3 :
return isa_QMARK___7266.call(this,h,child,parent);
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
var parents__7270 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__7271 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__7270.call(this,h);
case  2 :
return parents__7271.call(this,h,tag);
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
var ancestors__7273 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__7274 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__7273.call(this,h);
case  2 :
return ancestors__7274.call(this,h,tag);
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
var descendants__7276 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__7277 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__7276.call(this,h);
case  2 :
return descendants__7277.call(this,h,tag);
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
var derive__7287 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__7288 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3369))))));
}
var tp__7282 = "\uFDD0'parents".call(null,h);
var td__7283 = "\uFDD0'descendants".call(null,h);
var ta__7284 = "\uFDD0'ancestors".call(null,h);
var tf__7285 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____7286 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__7282.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__7284.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__7284.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__7282,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__7285.call(null,"\uFDD0'ancestors".call(null,h),tag,td__7283,parent,ta__7284),"\uFDD0'descendants":tf__7285.call(null,"\uFDD0'descendants".call(null,h),parent,ta__7284,tag,td__7283)});
})());

if(cljs.core.truth_(or__3548__auto____7286))
{return or__3548__auto____7286;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__7287.call(this,h,tag);
case  3 :
return derive__7288.call(this,h,tag,parent);
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
var underive__7294 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__7295 = (function (h,tag,parent){
var parentMap__7290 = "\uFDD0'parents".call(null,h);
var childsParents__7291 = (cljs.core.truth_(parentMap__7290.call(null,tag))?cljs.core.disj.call(null,parentMap__7290.call(null,tag),parent):cljs.core.set([]));
var newParents__7292 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__7291))?cljs.core.assoc.call(null,parentMap__7290,tag,childsParents__7291):cljs.core.dissoc.call(null,parentMap__7290,tag));
var deriv_seq__7293 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__7279_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__7279_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__7279_SHARP_),cljs.core.second.call(null,p1__7279_SHARP_)));
}),cljs.core.seq.call(null,newParents__7292)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__7290.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__7280_SHARP_,p2__7281_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__7280_SHARP_,p2__7281_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__7293));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__7294.call(this,h,tag);
case  3 :
return underive__7295.call(this,h,tag,parent);
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
var xprefs__7297 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____7299 = (cljs.core.truth_((function (){var and__3546__auto____7298 = xprefs__7297;

if(cljs.core.truth_(and__3546__auto____7298))
{return xprefs__7297.call(null,y);
} else
{return and__3546__auto____7298;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____7299))
{return or__3548__auto____7299;
} else
{var or__3548__auto____7301 = (function (){var ps__7300 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__7300) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__7300),prefer_table)))
{} else
{}
{
var G__7304 = cljs.core.rest.call(null,ps__7300);
ps__7300 = G__7304;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____7301))
{return or__3548__auto____7301;
} else
{var or__3548__auto____7303 = (function (){var ps__7302 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__7302) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__7302),y,prefer_table)))
{} else
{}
{
var G__7305 = cljs.core.rest.call(null,ps__7302);
ps__7302 = G__7305;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____7303))
{return or__3548__auto____7303;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____7306 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____7306))
{return or__3548__auto____7306;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__7315 = cljs.core.reduce.call(null,(function (be,p__7307){
var vec__7308__7309 = p__7307;
var k__7310 = cljs.core.nth.call(null,vec__7308__7309,0,null);
var ___7311 = cljs.core.nth.call(null,vec__7308__7309,1,null);
var e__7312 = vec__7308__7309;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__7310)))
{var be2__7314 = (cljs.core.truth_((function (){var or__3548__auto____7313 = (be === null);

if(cljs.core.truth_(or__3548__auto____7313))
{return or__3548__auto____7313;
} else
{return cljs.core.dominates.call(null,k__7310,cljs.core.first.call(null,be),prefer_table);
}
})())?e__7312:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__7314),k__7310,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__7310," and ",cljs.core.first.call(null,be2__7314),", and neither is preferred")));
}
return be2__7314;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__7315))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__7315));
return cljs.core.second.call(null,best_entry__7315);
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
if(cljs.core.truth_((function (){var and__3546__auto____7316 = mf;

if(cljs.core.truth_(and__3546__auto____7316))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____7316;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____7317 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____7317))
{return or__3548__auto____7317;
} else
{var or__3548__auto____7318 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____7318))
{return or__3548__auto____7318;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____7319 = mf;

if(cljs.core.truth_(and__3546__auto____7319))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____7319;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____7320 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____7320))
{return or__3548__auto____7320;
} else
{var or__3548__auto____7321 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____7321))
{return or__3548__auto____7321;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____7322 = mf;

if(cljs.core.truth_(and__3546__auto____7322))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____7322;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____7323 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____7323))
{return or__3548__auto____7323;
} else
{var or__3548__auto____7324 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____7324))
{return or__3548__auto____7324;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____7325 = mf;

if(cljs.core.truth_(and__3546__auto____7325))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____7325;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____7326 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____7326))
{return or__3548__auto____7326;
} else
{var or__3548__auto____7327 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____7327))
{return or__3548__auto____7327;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____7328 = mf;

if(cljs.core.truth_(and__3546__auto____7328))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____7328;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____7329 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____7329))
{return or__3548__auto____7329;
} else
{var or__3548__auto____7330 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____7330))
{return or__3548__auto____7330;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____7331 = mf;

if(cljs.core.truth_(and__3546__auto____7331))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____7331;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____7332 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____7332))
{return or__3548__auto____7332;
} else
{var or__3548__auto____7333 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____7333))
{return or__3548__auto____7333;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____7334 = mf;

if(cljs.core.truth_(and__3546__auto____7334))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____7334;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____7335 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____7335))
{return or__3548__auto____7335;
} else
{var or__3548__auto____7336 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____7336))
{return or__3548__auto____7336;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____7337 = mf;

if(cljs.core.truth_(and__3546__auto____7337))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____7337;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____7338 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____7338))
{return or__3548__auto____7338;
} else
{var or__3548__auto____7339 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____7339))
{return or__3548__auto____7339;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__7340 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__7341 = cljs.core._get_method.call(null,mf,dispatch_val__7340);

if(cljs.core.truth_(target_fn__7341))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__7340)));
}
return cljs.core.apply.call(null,target_fn__7341,args);
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
var this__7342 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__7343 = this;
cljs.core.swap_BANG_.call(null,this__7343.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__7343.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__7343.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__7343.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__7344 = this;
cljs.core.swap_BANG_.call(null,this__7344.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__7344.method_cache,this__7344.method_table,this__7344.cached_hierarchy,this__7344.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__7345 = this;
cljs.core.swap_BANG_.call(null,this__7345.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__7345.method_cache,this__7345.method_table,this__7345.cached_hierarchy,this__7345.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__7346 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__7346.cached_hierarchy),cljs.core.deref.call(null,this__7346.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__7346.method_cache,this__7346.method_table,this__7346.cached_hierarchy,this__7346.hierarchy);
}
var temp__3695__auto____7347 = cljs.core.deref.call(null,this__7346.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____7347))
{var target_fn__7348 = temp__3695__auto____7347;

return target_fn__7348;
} else
{var temp__3695__auto____7349 = cljs.core.find_and_cache_best_method.call(null,this__7346.name,dispatch_val,this__7346.hierarchy,this__7346.method_table,this__7346.prefer_table,this__7346.method_cache,this__7346.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____7349))
{var target_fn__7350 = temp__3695__auto____7349;

return target_fn__7350;
} else
{return cljs.core.deref.call(null,this__7346.method_table).call(null,this__7346.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__7351 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__7351.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__7351.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__7351.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__7351.method_cache,this__7351.method_table,this__7351.cached_hierarchy,this__7351.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__7352 = this;
return cljs.core.deref.call(null,this__7352.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__7353 = this;
return cljs.core.deref.call(null,this__7353.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__7354 = this;
return cljs.core.do_dispatch.call(null,mf,this__7354.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__7355__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__7355 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7355__delegate.call(this, _, args);
};
G__7355.cljs$lang$maxFixedArity = 1;
G__7355.cljs$lang$applyTo = (function (arglist__7356){
var _ = cljs.core.first(arglist__7356);
var args = cljs.core.rest(arglist__7356);
return G__7355__delegate.call(this, _, args);
});
return G__7355;
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
