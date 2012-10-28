goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
void 0;
void 0;
void 0;
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
void 0;/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
if((p[goog.typeOf.call(null,x)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
void 0;cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error("No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
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
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return new Array(size);
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
void 0;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__7106__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__7106 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7106__delegate.call(this, array, i, idxs);
};
G__7106.cljs$lang$maxFixedArity = 2;
G__7106.cljs$lang$applyTo = (function (arglist__7107){
var array = cljs.core.first(arglist__7107);
var i = cljs.core.first(cljs.core.next(arglist__7107));
var idxs = cljs.core.rest(cljs.core.next(arglist__7107));
return G__7106__delegate(array, i, idxs);
});
G__7106.cljs$lang$arity$variadic = G__7106__delegate;
return G__7106;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
void 0;
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
void 0;cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3546__auto____7108 = this$;
if(and__3546__auto____7108)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3546__auto____7108;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{return (function (){var or__3548__auto____7109 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7109)
{return or__3548__auto____7109;
} else
{var or__3548__auto____7110 = (cljs.core._invoke["_"]);
if(or__3548__auto____7110)
{return or__3548__auto____7110;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3546__auto____7111 = this$;
if(and__3546__auto____7111)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3546__auto____7111;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{return (function (){var or__3548__auto____7112 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7112)
{return or__3548__auto____7112;
} else
{var or__3548__auto____7113 = (cljs.core._invoke["_"]);
if(or__3548__auto____7113)
{return or__3548__auto____7113;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3546__auto____7114 = this$;
if(and__3546__auto____7114)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3546__auto____7114;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{return (function (){var or__3548__auto____7115 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7115)
{return or__3548__auto____7115;
} else
{var or__3548__auto____7116 = (cljs.core._invoke["_"]);
if(or__3548__auto____7116)
{return or__3548__auto____7116;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3546__auto____7117 = this$;
if(and__3546__auto____7117)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3546__auto____7117;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7118 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7118)
{return or__3548__auto____7118;
} else
{var or__3548__auto____7119 = (cljs.core._invoke["_"]);
if(or__3548__auto____7119)
{return or__3548__auto____7119;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3546__auto____7120 = this$;
if(and__3546__auto____7120)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3546__auto____7120;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7121 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7121)
{return or__3548__auto____7121;
} else
{var or__3548__auto____7122 = (cljs.core._invoke["_"]);
if(or__3548__auto____7122)
{return or__3548__auto____7122;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3546__auto____7123 = this$;
if(and__3546__auto____7123)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3546__auto____7123;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7124 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7124)
{return or__3548__auto____7124;
} else
{var or__3548__auto____7125 = (cljs.core._invoke["_"]);
if(or__3548__auto____7125)
{return or__3548__auto____7125;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3546__auto____7126 = this$;
if(and__3546__auto____7126)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3546__auto____7126;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7127 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7127)
{return or__3548__auto____7127;
} else
{var or__3548__auto____7128 = (cljs.core._invoke["_"]);
if(or__3548__auto____7128)
{return or__3548__auto____7128;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3546__auto____7129 = this$;
if(and__3546__auto____7129)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3546__auto____7129;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7130 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7130)
{return or__3548__auto____7130;
} else
{var or__3548__auto____7131 = (cljs.core._invoke["_"]);
if(or__3548__auto____7131)
{return or__3548__auto____7131;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3546__auto____7132 = this$;
if(and__3546__auto____7132)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3546__auto____7132;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7133 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7133)
{return or__3548__auto____7133;
} else
{var or__3548__auto____7134 = (cljs.core._invoke["_"]);
if(or__3548__auto____7134)
{return or__3548__auto____7134;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3546__auto____7135 = this$;
if(and__3546__auto____7135)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3546__auto____7135;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7136 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7136)
{return or__3548__auto____7136;
} else
{var or__3548__auto____7137 = (cljs.core._invoke["_"]);
if(or__3548__auto____7137)
{return or__3548__auto____7137;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3546__auto____7138 = this$;
if(and__3546__auto____7138)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3546__auto____7138;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7139 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7139)
{return or__3548__auto____7139;
} else
{var or__3548__auto____7140 = (cljs.core._invoke["_"]);
if(or__3548__auto____7140)
{return or__3548__auto____7140;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3546__auto____7141 = this$;
if(and__3546__auto____7141)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3546__auto____7141;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7142 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7142)
{return or__3548__auto____7142;
} else
{var or__3548__auto____7143 = (cljs.core._invoke["_"]);
if(or__3548__auto____7143)
{return or__3548__auto____7143;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3546__auto____7144 = this$;
if(and__3546__auto____7144)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3546__auto____7144;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7145 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7145)
{return or__3548__auto____7145;
} else
{var or__3548__auto____7146 = (cljs.core._invoke["_"]);
if(or__3548__auto____7146)
{return or__3548__auto____7146;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3546__auto____7147 = this$;
if(and__3546__auto____7147)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3546__auto____7147;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7148 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7148)
{return or__3548__auto____7148;
} else
{var or__3548__auto____7149 = (cljs.core._invoke["_"]);
if(or__3548__auto____7149)
{return or__3548__auto____7149;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3546__auto____7150 = this$;
if(and__3546__auto____7150)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3546__auto____7150;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7151 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7151)
{return or__3548__auto____7151;
} else
{var or__3548__auto____7152 = (cljs.core._invoke["_"]);
if(or__3548__auto____7152)
{return or__3548__auto____7152;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3546__auto____7153 = this$;
if(and__3546__auto____7153)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3546__auto____7153;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7154 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7154)
{return or__3548__auto____7154;
} else
{var or__3548__auto____7155 = (cljs.core._invoke["_"]);
if(or__3548__auto____7155)
{return or__3548__auto____7155;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3546__auto____7156 = this$;
if(and__3546__auto____7156)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3546__auto____7156;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7157 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7157)
{return or__3548__auto____7157;
} else
{var or__3548__auto____7158 = (cljs.core._invoke["_"]);
if(or__3548__auto____7158)
{return or__3548__auto____7158;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3546__auto____7159 = this$;
if(and__3546__auto____7159)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3546__auto____7159;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7160 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7160)
{return or__3548__auto____7160;
} else
{var or__3548__auto____7161 = (cljs.core._invoke["_"]);
if(or__3548__auto____7161)
{return or__3548__auto____7161;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3546__auto____7162 = this$;
if(and__3546__auto____7162)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3546__auto____7162;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7163 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7163)
{return or__3548__auto____7163;
} else
{var or__3548__auto____7164 = (cljs.core._invoke["_"]);
if(or__3548__auto____7164)
{return or__3548__auto____7164;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3546__auto____7165 = this$;
if(and__3546__auto____7165)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3546__auto____7165;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7166 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7166)
{return or__3548__auto____7166;
} else
{var or__3548__auto____7167 = (cljs.core._invoke["_"]);
if(or__3548__auto____7167)
{return or__3548__auto____7167;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3546__auto____7168 = this$;
if(and__3546__auto____7168)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3546__auto____7168;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7169 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7169)
{return or__3548__auto____7169;
} else
{var or__3548__auto____7170 = (cljs.core._invoke["_"]);
if(or__3548__auto____7170)
{return or__3548__auto____7170;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
void 0;void 0;cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3546__auto____7171 = coll;
if(and__3546__auto____7171)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3546__auto____7171;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{return (function (){var or__3548__auto____7172 = (cljs.core._count[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7172)
{return or__3548__auto____7172;
} else
{var or__3548__auto____7173 = (cljs.core._count["_"]);
if(or__3548__auto____7173)
{return or__3548__auto____7173;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3546__auto____7174 = coll;
if(and__3546__auto____7174)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3546__auto____7174;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (function (){var or__3548__auto____7175 = (cljs.core._empty[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7175)
{return or__3548__auto____7175;
} else
{var or__3548__auto____7176 = (cljs.core._empty["_"]);
if(or__3548__auto____7176)
{return or__3548__auto____7176;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3546__auto____7177 = coll;
if(and__3546__auto____7177)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3546__auto____7177;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{return (function (){var or__3548__auto____7178 = (cljs.core._conj[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7178)
{return or__3548__auto____7178;
} else
{var or__3548__auto____7179 = (cljs.core._conj["_"]);
if(or__3548__auto____7179)
{return or__3548__auto____7179;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
void 0;void 0;cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3546__auto____7180 = coll;
if(and__3546__auto____7180)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3546__auto____7180;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return (function (){var or__3548__auto____7181 = (cljs.core._nth[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7181)
{return or__3548__auto____7181;
} else
{var or__3548__auto____7182 = (cljs.core._nth["_"]);
if(or__3548__auto____7182)
{return or__3548__auto____7182;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3546__auto____7183 = coll;
if(and__3546__auto____7183)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3546__auto____7183;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7184 = (cljs.core._nth[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7184)
{return or__3548__auto____7184;
} else
{var or__3548__auto____7185 = (cljs.core._nth["_"]);
if(or__3548__auto____7185)
{return or__3548__auto____7185;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
void 0;void 0;cljs.core.ASeq = {};
void 0;void 0;cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3546__auto____7186 = coll;
if(and__3546__auto____7186)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3546__auto____7186;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{return (function (){var or__3548__auto____7187 = (cljs.core._first[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7187)
{return or__3548__auto____7187;
} else
{var or__3548__auto____7188 = (cljs.core._first["_"]);
if(or__3548__auto____7188)
{return or__3548__auto____7188;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3546__auto____7189 = coll;
if(and__3546__auto____7189)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3546__auto____7189;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{return (function (){var or__3548__auto____7190 = (cljs.core._rest[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7190)
{return or__3548__auto____7190;
} else
{var or__3548__auto____7191 = (cljs.core._rest["_"]);
if(or__3548__auto____7191)
{return or__3548__auto____7191;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3546__auto____7192 = o;
if(and__3546__auto____7192)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3546__auto____7192;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{return (function (){var or__3548__auto____7193 = (cljs.core._lookup[goog.typeOf.call(null,o)]);
if(or__3548__auto____7193)
{return or__3548__auto____7193;
} else
{var or__3548__auto____7194 = (cljs.core._lookup["_"]);
if(or__3548__auto____7194)
{return or__3548__auto____7194;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3546__auto____7195 = o;
if(and__3546__auto____7195)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3546__auto____7195;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{return (function (){var or__3548__auto____7196 = (cljs.core._lookup[goog.typeOf.call(null,o)]);
if(or__3548__auto____7196)
{return or__3548__auto____7196;
} else
{var or__3548__auto____7197 = (cljs.core._lookup["_"]);
if(or__3548__auto____7197)
{return or__3548__auto____7197;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
void 0;void 0;cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3546__auto____7198 = coll;
if(and__3546__auto____7198)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3546__auto____7198;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{return (function (){var or__3548__auto____7199 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7199)
{return or__3548__auto____7199;
} else
{var or__3548__auto____7200 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3548__auto____7200)
{return or__3548__auto____7200;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3546__auto____7201 = coll;
if(and__3546__auto____7201)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3546__auto____7201;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{return (function (){var or__3548__auto____7202 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7202)
{return or__3548__auto____7202;
} else
{var or__3548__auto____7203 = (cljs.core._assoc["_"]);
if(or__3548__auto____7203)
{return or__3548__auto____7203;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
void 0;void 0;cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3546__auto____7204 = coll;
if(and__3546__auto____7204)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3546__auto____7204;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{return (function (){var or__3548__auto____7205 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7205)
{return or__3548__auto____7205;
} else
{var or__3548__auto____7206 = (cljs.core._dissoc["_"]);
if(or__3548__auto____7206)
{return or__3548__auto____7206;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
void 0;void 0;cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3546__auto____7207 = coll;
if(and__3546__auto____7207)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3546__auto____7207;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{return (function (){var or__3548__auto____7208 = (cljs.core._key[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7208)
{return or__3548__auto____7208;
} else
{var or__3548__auto____7209 = (cljs.core._key["_"]);
if(or__3548__auto____7209)
{return or__3548__auto____7209;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3546__auto____7210 = coll;
if(and__3546__auto____7210)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3546__auto____7210;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{return (function (){var or__3548__auto____7211 = (cljs.core._val[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7211)
{return or__3548__auto____7211;
} else
{var or__3548__auto____7212 = (cljs.core._val["_"]);
if(or__3548__auto____7212)
{return or__3548__auto____7212;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3546__auto____7213 = coll;
if(and__3546__auto____7213)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3546__auto____7213;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{return (function (){var or__3548__auto____7214 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7214)
{return or__3548__auto____7214;
} else
{var or__3548__auto____7215 = (cljs.core._disjoin["_"]);
if(or__3548__auto____7215)
{return or__3548__auto____7215;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
void 0;void 0;cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3546__auto____7216 = coll;
if(and__3546__auto____7216)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3546__auto____7216;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{return (function (){var or__3548__auto____7217 = (cljs.core._peek[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7217)
{return or__3548__auto____7217;
} else
{var or__3548__auto____7218 = (cljs.core._peek["_"]);
if(or__3548__auto____7218)
{return or__3548__auto____7218;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3546__auto____7219 = coll;
if(and__3546__auto____7219)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3546__auto____7219;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{return (function (){var or__3548__auto____7220 = (cljs.core._pop[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7220)
{return or__3548__auto____7220;
} else
{var or__3548__auto____7221 = (cljs.core._pop["_"]);
if(or__3548__auto____7221)
{return or__3548__auto____7221;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3546__auto____7222 = coll;
if(and__3546__auto____7222)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3546__auto____7222;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{return (function (){var or__3548__auto____7223 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7223)
{return or__3548__auto____7223;
} else
{var or__3548__auto____7224 = (cljs.core._assoc_n["_"]);
if(or__3548__auto____7224)
{return or__3548__auto____7224;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
void 0;void 0;cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3546__auto____7225 = o;
if(and__3546__auto____7225)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3546__auto____7225;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{return (function (){var or__3548__auto____7226 = (cljs.core._deref[goog.typeOf.call(null,o)]);
if(or__3548__auto____7226)
{return or__3548__auto____7226;
} else
{var or__3548__auto____7227 = (cljs.core._deref["_"]);
if(or__3548__auto____7227)
{return or__3548__auto____7227;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3546__auto____7228 = o;
if(and__3546__auto____7228)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3546__auto____7228;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7229 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);
if(or__3548__auto____7229)
{return or__3548__auto____7229;
} else
{var or__3548__auto____7230 = (cljs.core._deref_with_timeout["_"]);
if(or__3548__auto____7230)
{return or__3548__auto____7230;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
void 0;void 0;cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3546__auto____7231 = o;
if(and__3546__auto____7231)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3546__auto____7231;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{return (function (){var or__3548__auto____7232 = (cljs.core._meta[goog.typeOf.call(null,o)]);
if(or__3548__auto____7232)
{return or__3548__auto____7232;
} else
{var or__3548__auto____7233 = (cljs.core._meta["_"]);
if(or__3548__auto____7233)
{return or__3548__auto____7233;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3546__auto____7234 = o;
if(and__3546__auto____7234)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3546__auto____7234;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{return (function (){var or__3548__auto____7235 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);
if(or__3548__auto____7235)
{return or__3548__auto____7235;
} else
{var or__3548__auto____7236 = (cljs.core._with_meta["_"]);
if(or__3548__auto____7236)
{return or__3548__auto____7236;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
void 0;void 0;cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3546__auto____7237 = coll;
if(and__3546__auto____7237)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3546__auto____7237;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{return (function (){var or__3548__auto____7238 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7238)
{return or__3548__auto____7238;
} else
{var or__3548__auto____7239 = (cljs.core._reduce["_"]);
if(or__3548__auto____7239)
{return or__3548__auto____7239;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3546__auto____7240 = coll;
if(and__3546__auto____7240)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3546__auto____7240;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{return (function (){var or__3548__auto____7241 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7241)
{return or__3548__auto____7241;
} else
{var or__3548__auto____7242 = (cljs.core._reduce["_"]);
if(or__3548__auto____7242)
{return or__3548__auto____7242;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
void 0;void 0;cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3546__auto____7243 = coll;
if(and__3546__auto____7243)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3546__auto____7243;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{return (function (){var or__3548__auto____7244 = (cljs.core._kv_reduce[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7244)
{return or__3548__auto____7244;
} else
{var or__3548__auto____7245 = (cljs.core._kv_reduce["_"]);
if(or__3548__auto____7245)
{return or__3548__auto____7245;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
void 0;void 0;cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3546__auto____7246 = o;
if(and__3546__auto____7246)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3546__auto____7246;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{return (function (){var or__3548__auto____7247 = (cljs.core._equiv[goog.typeOf.call(null,o)]);
if(or__3548__auto____7247)
{return or__3548__auto____7247;
} else
{var or__3548__auto____7248 = (cljs.core._equiv["_"]);
if(or__3548__auto____7248)
{return or__3548__auto____7248;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
void 0;void 0;cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3546__auto____7249 = o;
if(and__3546__auto____7249)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3546__auto____7249;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{return (function (){var or__3548__auto____7250 = (cljs.core._hash[goog.typeOf.call(null,o)]);
if(or__3548__auto____7250)
{return or__3548__auto____7250;
} else
{var or__3548__auto____7251 = (cljs.core._hash["_"]);
if(or__3548__auto____7251)
{return or__3548__auto____7251;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3546__auto____7252 = o;
if(and__3546__auto____7252)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3546__auto____7252;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{return (function (){var or__3548__auto____7253 = (cljs.core._seq[goog.typeOf.call(null,o)]);
if(or__3548__auto____7253)
{return or__3548__auto____7253;
} else
{var or__3548__auto____7254 = (cljs.core._seq["_"]);
if(or__3548__auto____7254)
{return or__3548__auto____7254;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISequential = {};
void 0;void 0;cljs.core.IList = {};
void 0;void 0;cljs.core.IRecord = {};
void 0;void 0;cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3546__auto____7255 = coll;
if(and__3546__auto____7255)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3546__auto____7255;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{return (function (){var or__3548__auto____7256 = (cljs.core._rseq[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7256)
{return or__3548__auto____7256;
} else
{var or__3548__auto____7257 = (cljs.core._rseq["_"]);
if(or__3548__auto____7257)
{return or__3548__auto____7257;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3546__auto____7258 = coll;
if(and__3546__auto____7258)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3546__auto____7258;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{return (function (){var or__3548__auto____7259 = (cljs.core._sorted_seq[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7259)
{return or__3548__auto____7259;
} else
{var or__3548__auto____7260 = (cljs.core._sorted_seq["_"]);
if(or__3548__auto____7260)
{return or__3548__auto____7260;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3546__auto____7261 = coll;
if(and__3546__auto____7261)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3546__auto____7261;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{return (function (){var or__3548__auto____7262 = (cljs.core._sorted_seq_from[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7262)
{return or__3548__auto____7262;
} else
{var or__3548__auto____7263 = (cljs.core._sorted_seq_from["_"]);
if(or__3548__auto____7263)
{return or__3548__auto____7263;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3546__auto____7264 = coll;
if(and__3546__auto____7264)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3546__auto____7264;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{return (function (){var or__3548__auto____7265 = (cljs.core._entry_key[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7265)
{return or__3548__auto____7265;
} else
{var or__3548__auto____7266 = (cljs.core._entry_key["_"]);
if(or__3548__auto____7266)
{return or__3548__auto____7266;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3546__auto____7267 = coll;
if(and__3546__auto____7267)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3546__auto____7267;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{return (function (){var or__3548__auto____7268 = (cljs.core._comparator[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7268)
{return or__3548__auto____7268;
} else
{var or__3548__auto____7269 = (cljs.core._comparator["_"]);
if(or__3548__auto____7269)
{return or__3548__auto____7269;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3546__auto____7270 = o;
if(and__3546__auto____7270)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3546__auto____7270;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{return (function (){var or__3548__auto____7271 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);
if(or__3548__auto____7271)
{return or__3548__auto____7271;
} else
{var or__3548__auto____7272 = (cljs.core._pr_seq["_"]);
if(or__3548__auto____7272)
{return or__3548__auto____7272;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
void 0;void 0;cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3546__auto____7273 = d;
if(and__3546__auto____7273)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3546__auto____7273;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{return (function (){var or__3548__auto____7274 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);
if(or__3548__auto____7274)
{return or__3548__auto____7274;
} else
{var or__3548__auto____7275 = (cljs.core._realized_QMARK_["_"]);
if(or__3548__auto____7275)
{return or__3548__auto____7275;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
void 0;void 0;cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3546__auto____7276 = this$;
if(and__3546__auto____7276)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3546__auto____7276;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____7277 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7277)
{return or__3548__auto____7277;
} else
{var or__3548__auto____7278 = (cljs.core._notify_watches["_"]);
if(or__3548__auto____7278)
{return or__3548__auto____7278;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3546__auto____7279 = this$;
if(and__3546__auto____7279)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3546__auto____7279;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{return (function (){var or__3548__auto____7280 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7280)
{return or__3548__auto____7280;
} else
{var or__3548__auto____7281 = (cljs.core._add_watch["_"]);
if(or__3548__auto____7281)
{return or__3548__auto____7281;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3546__auto____7282 = this$;
if(and__3546__auto____7282)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3546__auto____7282;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{return (function (){var or__3548__auto____7283 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7283)
{return or__3548__auto____7283;
} else
{var or__3548__auto____7284 = (cljs.core._remove_watch["_"]);
if(or__3548__auto____7284)
{return or__3548__auto____7284;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
void 0;void 0;cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3546__auto____7285 = coll;
if(and__3546__auto____7285)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3546__auto____7285;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{return (function (){var or__3548__auto____7286 = (cljs.core._as_transient[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7286)
{return or__3548__auto____7286;
} else
{var or__3548__auto____7287 = (cljs.core._as_transient["_"]);
if(or__3548__auto____7287)
{return or__3548__auto____7287;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3546__auto____7288 = tcoll;
if(and__3546__auto____7288)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3546__auto____7288;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{return (function (){var or__3548__auto____7289 = (cljs.core._conj_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____7289)
{return or__3548__auto____7289;
} else
{var or__3548__auto____7290 = (cljs.core._conj_BANG_["_"]);
if(or__3548__auto____7290)
{return or__3548__auto____7290;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3546__auto____7291 = tcoll;
if(and__3546__auto____7291)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3546__auto____7291;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3548__auto____7292 = (cljs.core._persistent_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____7292)
{return or__3548__auto____7292;
} else
{var or__3548__auto____7293 = (cljs.core._persistent_BANG_["_"]);
if(or__3548__auto____7293)
{return or__3548__auto____7293;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3546__auto____7294 = tcoll;
if(and__3546__auto____7294)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3546__auto____7294;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{return (function (){var or__3548__auto____7295 = (cljs.core._assoc_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____7295)
{return or__3548__auto____7295;
} else
{var or__3548__auto____7296 = (cljs.core._assoc_BANG_["_"]);
if(or__3548__auto____7296)
{return or__3548__auto____7296;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
void 0;void 0;cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3546__auto____7297 = tcoll;
if(and__3546__auto____7297)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3546__auto____7297;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{return (function (){var or__3548__auto____7298 = (cljs.core._dissoc_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____7298)
{return or__3548__auto____7298;
} else
{var or__3548__auto____7299 = (cljs.core._dissoc_BANG_["_"]);
if(or__3548__auto____7299)
{return or__3548__auto____7299;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
void 0;void 0;cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3546__auto____7300 = tcoll;
if(and__3546__auto____7300)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3546__auto____7300;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{return (function (){var or__3548__auto____7301 = (cljs.core._assoc_n_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____7301)
{return or__3548__auto____7301;
} else
{var or__3548__auto____7302 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3548__auto____7302)
{return or__3548__auto____7302;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3546__auto____7303 = tcoll;
if(and__3546__auto____7303)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3546__auto____7303;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3548__auto____7304 = (cljs.core._pop_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____7304)
{return or__3548__auto____7304;
} else
{var or__3548__auto____7305 = (cljs.core._pop_BANG_["_"]);
if(or__3548__auto____7305)
{return or__3548__auto____7305;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3546__auto____7306 = tcoll;
if(and__3546__auto____7306)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3546__auto____7306;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{return (function (){var or__3548__auto____7307 = (cljs.core._disjoin_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____7307)
{return or__3548__auto____7307;
} else
{var or__3548__auto____7308 = (cljs.core._disjoin_BANG_["_"]);
if(or__3548__auto____7308)
{return or__3548__auto____7308;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
void 0;/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
void 0;
void 0;
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3548__auto____7309 = (x === y);
if(or__3548__auto____7309)
{return or__3548__auto____7309;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__7310__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7311 = y;
var G__7312 = cljs.core.first.call(null,more);
var G__7313 = cljs.core.next.call(null,more);
x = G__7311;
y = G__7312;
more = G__7313;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7310 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7310__delegate.call(this, x, y, more);
};
G__7310.cljs$lang$maxFixedArity = 2;
G__7310.cljs$lang$applyTo = (function (arglist__7314){
var x = cljs.core.first(arglist__7314);
var y = cljs.core.first(cljs.core.next(arglist__7314));
var more = cljs.core.rest(cljs.core.next(arglist__7314));
return G__7310__delegate(x, y, more);
});
G__7310.cljs$lang$arity$variadic = G__7310__delegate;
return G__7310;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((function (){var or__3548__auto____7315 = (x == null);
if(or__3548__auto____7315)
{return or__3548__auto____7315;
} else
{return (void 0 === x);
}
})())
{return null;
} else
{return (x).constructor;
}
});
void 0;
void 0;
void 0;
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__7316 = null;
var G__7316__2 = (function (o,k){
return null;
});
var G__7316__3 = (function (o,k,not_found){
return not_found;
});
G__7316 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__7316__2.call(this,o,k);
case 3:
return G__7316__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7316;
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
var G__7317 = null;
var G__7317__2 = (function (_,f){
return f.call(null);
});
var G__7317__3 = (function (_,f,start){
return start;
});
G__7317 = function(_,f,start){
switch(arguments.length){
case 2:
return G__7317__2.call(this,_,f);
case 3:
return G__7317__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7317;
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
return (o == null);
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
var G__7318 = null;
var G__7318__2 = (function (_,n){
return null;
});
var G__7318__3 = (function (_,n,not_found){
return not_found;
});
G__7318 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__7318__2.call(this,_,n);
case 3:
return G__7318__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7318;
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
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
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
void 0;
void 0;
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
if((cljs.core._count.call(null,cicoll) === 0))
{return f.call(null);
} else
{var val__7319 = cljs.core._nth.call(null,cicoll,0);
var n__7320 = 1;
while(true){
if((n__7320 < cljs.core._count.call(null,cicoll)))
{var nval__7321 = f.call(null,val__7319,cljs.core._nth.call(null,cicoll,n__7320));
if(cljs.core.reduced_QMARK_.call(null,nval__7321))
{return cljs.core.deref.call(null,nval__7321);
} else
{{
var G__7328 = nval__7321;
var G__7329 = (n__7320 + 1);
val__7319 = G__7328;
n__7320 = G__7329;
continue;
}
}
} else
{return val__7319;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var val__7322 = val;
var n__7323 = 0;
while(true){
if((n__7323 < cljs.core._count.call(null,cicoll)))
{var nval__7324 = f.call(null,val__7322,cljs.core._nth.call(null,cicoll,n__7323));
if(cljs.core.reduced_QMARK_.call(null,nval__7324))
{return cljs.core.deref.call(null,nval__7324);
} else
{{
var G__7330 = nval__7324;
var G__7331 = (n__7323 + 1);
val__7322 = G__7330;
n__7323 = G__7331;
continue;
}
}
} else
{return val__7322;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var val__7325 = val;
var n__7326 = idx;
while(true){
if((n__7326 < cljs.core._count.call(null,cicoll)))
{var nval__7327 = f.call(null,val__7325,cljs.core._nth.call(null,cicoll,n__7326));
if(cljs.core.reduced_QMARK_.call(null,nval__7327))
{return cljs.core.deref.call(null,nval__7327);
} else
{{
var G__7332 = nval__7327;
var G__7333 = (n__7326 + 1);
val__7325 = G__7332;
n__7326 = G__7333;
continue;
}
}
} else
{return val__7325;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
void 0;
void 0;
void 0;
void 0;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15990906;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7334 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7335 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$ASeq$ = true;
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__7336 = this;
var this$__7337 = this;
return cljs.core.pr_str.call(null,this$__7337);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7338 = this;
if(cljs.core.counted_QMARK_.call(null,this__7338.a))
{return cljs.core.ci_reduce.call(null,this__7338.a,f,(this__7338.a[this__7338.i]),(this__7338.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__7338.a[this__7338.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7339 = this;
if(cljs.core.counted_QMARK_.call(null,this__7339.a))
{return cljs.core.ci_reduce.call(null,this__7339.a,f,start,this__7339.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__7340 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7341 = this;
return (this__7341.a.length - this__7341.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__7342 = this;
return (this__7342.a[this__7342.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__7343 = this;
if(((this__7343.i + 1) < this__7343.a.length))
{return (new cljs.core.IndexedSeq(this__7343.a,(this__7343.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7344 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7345 = this;
var i__7346 = (n + this__7345.i);
if((i__7346 < this__7345.a.length))
{return (this__7345.a[i__7346]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7347 = this;
var i__7348 = (n + this__7347.i);
if((i__7348 < this__7347.a.length))
{return (this__7347.a[i__7348]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if((prim.length === 0))
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
var G__7349 = null;
var G__7349__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7349__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7349 = function(array,f,start){
switch(arguments.length){
case 2:
return G__7349__2.call(this,array,f);
case 3:
return G__7349__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7349;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7350 = null;
var G__7350__2 = (function (array,k){
return (array[k]);
});
var G__7350__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7350 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__7350__2.call(this,array,k);
case 3:
return G__7350__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7350;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7351 = null;
var G__7351__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__7351__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__7351 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__7351__2.call(this,array,n);
case 3:
return G__7351__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7351;
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
if((coll != null))
{if((function (){var G__7352__7353 = coll;
if((G__7352__7353 != null))
{if((function (){var or__3548__auto____7354 = (G__7352__7353.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3548__auto____7354)
{return or__3548__auto____7354;
} else
{return G__7352__7353.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__7352__7353.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7352__7353);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7352__7353);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll != null))
{if((function (){var G__7355__7356 = coll;
if((G__7355__7356 != null))
{if((function (){var or__3548__auto____7357 = (G__7355__7356.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3548__auto____7357)
{return or__3548__auto____7357;
} else
{return G__7355__7356.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7355__7356.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7355__7356);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7355__7356);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__7358 = cljs.core.seq.call(null,coll);
if((s__7358 != null))
{return cljs.core._first.call(null,s__7358);
} else
{return null;
}
}
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if((coll != null))
{if((function (){var G__7359__7360 = coll;
if((G__7359__7360 != null))
{if((function (){var or__3548__auto____7361 = (G__7359__7360.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3548__auto____7361)
{return or__3548__auto____7361;
} else
{return G__7359__7360.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7359__7360.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7359__7360);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7359__7360);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__7362 = cljs.core.seq.call(null,coll);
if((s__7362 != null))
{return cljs.core._rest.call(null,s__7362);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll != null))
{if((function (){var G__7363__7364 = coll;
if((G__7363__7364 != null))
{if((function (){var or__3548__auto____7365 = (G__7363__7364.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3548__auto____7365)
{return or__3548__auto____7365;
} else
{return G__7363__7364.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7363__7364.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7363__7364);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7363__7364);
}
})())
{var coll__7366 = cljs.core._rest.call(null,coll);
if((coll__7366 != null))
{if((function (){var G__7367__7368 = coll__7366;
if((G__7367__7368 != null))
{if((function (){var or__3548__auto____7369 = (G__7367__7368.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3548__auto____7369)
{return or__3548__auto____7369;
} else
{return G__7367__7368.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__7367__7368.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7367__7368);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7367__7368);
}
})())
{return coll__7366;
} else
{return cljs.core._seq.call(null,coll__7366);
}
} else
{return null;
}
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
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
var G__7370 = cljs.core.next.call(null,s);
s = G__7370;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
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
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__7371__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7372 = conj.call(null,coll,x);
var G__7373 = cljs.core.first.call(null,xs);
var G__7374 = cljs.core.next.call(null,xs);
coll = G__7372;
x = G__7373;
xs = G__7374;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7371 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7371__delegate.call(this, coll, x, xs);
};
G__7371.cljs$lang$maxFixedArity = 2;
G__7371.cljs$lang$applyTo = (function (arglist__7375){
var coll = cljs.core.first(arglist__7375);
var x = cljs.core.first(cljs.core.next(arglist__7375));
var xs = cljs.core.rest(cljs.core.next(arglist__7375));
return G__7371__delegate(coll, x, xs);
});
G__7371.cljs$lang$arity$variadic = G__7371__delegate;
return G__7371;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
void 0;
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll,acc){
while(true){
if(cljs.core.counted_QMARK_.call(null,coll))
{return (acc + cljs.core._count.call(null,coll));
} else
{{
var G__7376 = cljs.core.next.call(null,coll);
var G__7377 = (acc + 1);
coll = G__7376;
acc = G__7377;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll,0);
}
});
void 0;
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((n === 0))
{if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((n === 0))
{if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((function (){var G__7378__7379 = coll;
if((G__7378__7379 != null))
{if((function (){var or__3548__auto____7380 = (G__7378__7379.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3548__auto____7380)
{return or__3548__auto____7380;
} else
{return G__7378__7379.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7378__7379.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7378__7379);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7378__7379);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
});
var nth__3 = (function (coll,n,not_found){
if((function (){var G__7381__7382 = coll;
if((G__7381__7382 != null))
{if((function (){var or__3548__auto____7383 = (G__7381__7382.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3548__auto____7383)
{return or__3548__auto____7383;
} else
{return G__7381__7382.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7381__7382.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7381__7382);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7381__7382);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
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
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__7385__delegate = function (coll,k,v,kvs){
while(true){
var ret__7384 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__7386 = ret__7384;
var G__7387 = cljs.core.first.call(null,kvs);
var G__7388 = cljs.core.second.call(null,kvs);
var G__7389 = cljs.core.nnext.call(null,kvs);
coll = G__7386;
k = G__7387;
v = G__7388;
kvs = G__7389;
continue;
}
} else
{return ret__7384;
}
break;
}
};
var G__7385 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7385__delegate.call(this, coll, k, v, kvs);
};
G__7385.cljs$lang$maxFixedArity = 3;
G__7385.cljs$lang$applyTo = (function (arglist__7390){
var coll = cljs.core.first(arglist__7390);
var k = cljs.core.first(cljs.core.next(arglist__7390));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7390)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7390)));
return G__7385__delegate(coll, k, v, kvs);
});
G__7385.cljs$lang$arity$variadic = G__7385__delegate;
return G__7385;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
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
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__7392__delegate = function (coll,k,ks){
while(true){
var ret__7391 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7393 = ret__7391;
var G__7394 = cljs.core.first.call(null,ks);
var G__7395 = cljs.core.next.call(null,ks);
coll = G__7393;
k = G__7394;
ks = G__7395;
continue;
}
} else
{return ret__7391;
}
break;
}
};
var G__7392 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7392__delegate.call(this, coll, k, ks);
};
G__7392.cljs$lang$maxFixedArity = 2;
G__7392.cljs$lang$applyTo = (function (arglist__7396){
var coll = cljs.core.first(arglist__7396);
var k = cljs.core.first(cljs.core.next(arglist__7396));
var ks = cljs.core.rest(cljs.core.next(arglist__7396));
return G__7392__delegate(coll, k, ks);
});
G__7392.cljs$lang$arity$variadic = G__7392__delegate;
return G__7392;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
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
if((function (){var G__7397__7398 = o;
if((G__7397__7398 != null))
{if((function (){var or__3548__auto____7399 = (G__7397__7398.cljs$lang$protocol_mask$partition0$ & 65536);
if(or__3548__auto____7399)
{return or__3548__auto____7399;
} else
{return G__7397__7398.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__7397__7398.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7397__7398);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7397__7398);
}
})())
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
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__7401__delegate = function (coll,k,ks){
while(true){
var ret__7400 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7402 = ret__7400;
var G__7403 = cljs.core.first.call(null,ks);
var G__7404 = cljs.core.next.call(null,ks);
coll = G__7402;
k = G__7403;
ks = G__7404;
continue;
}
} else
{return ret__7400;
}
break;
}
};
var G__7401 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7401__delegate.call(this, coll, k, ks);
};
G__7401.cljs$lang$maxFixedArity = 2;
G__7401.cljs$lang$applyTo = (function (arglist__7405){
var coll = cljs.core.first(arglist__7405);
var k = cljs.core.first(cljs.core.next(arglist__7405));
var ks = cljs.core.rest(cljs.core.next(arglist__7405));
return G__7401__delegate(coll, k, ks);
});
G__7401.cljs$lang$arity$variadic = G__7401__delegate;
return G__7401;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
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
if((x == null))
{return false;
} else
{var G__7406__7407 = x;
if((G__7406__7407 != null))
{if((function (){var or__3548__auto____7408 = (G__7406__7407.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3548__auto____7408)
{return or__3548__auto____7408;
} else
{return G__7406__7407.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__7406__7407.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7406__7407);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7406__7407);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7409__7410 = x;
if((G__7409__7410 != null))
{if((function (){var or__3548__auto____7411 = (G__7409__7410.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3548__auto____7411)
{return or__3548__auto____7411;
} else
{return G__7409__7410.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__7409__7410.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7409__7410);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7409__7410);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__7412__7413 = x;
if((G__7412__7413 != null))
{if((function (){var or__3548__auto____7414 = (G__7412__7413.cljs$lang$protocol_mask$partition0$ & 256);
if(or__3548__auto____7414)
{return or__3548__auto____7414;
} else
{return G__7412__7413.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__7412__7413.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7412__7413);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7412__7413);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__7415__7416 = x;
if((G__7415__7416 != null))
{if((function (){var or__3548__auto____7417 = (G__7415__7416.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3548__auto____7417)
{return or__3548__auto____7417;
} else
{return G__7415__7416.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__7415__7416.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7415__7416);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7415__7416);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__7418__7419 = x;
if((G__7418__7419 != null))
{if((function (){var or__3548__auto____7420 = (G__7418__7419.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3548__auto____7420)
{return or__3548__auto____7420;
} else
{return G__7418__7419.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__7418__7419.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7418__7419);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7418__7419);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__7421__7422 = x;
if((G__7421__7422 != null))
{if((function (){var or__3548__auto____7423 = (G__7421__7422.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3548__auto____7423)
{return or__3548__auto____7423;
} else
{return G__7421__7422.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7421__7422.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7421__7422);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7421__7422);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__7424__7425 = x;
if((G__7424__7425 != null))
{if((function (){var or__3548__auto____7426 = (G__7424__7425.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3548__auto____7426)
{return or__3548__auto____7426;
} else
{return G__7424__7425.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7424__7425.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7424__7425);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7424__7425);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7427__7428 = x;
if((G__7427__7428 != null))
{if((function (){var or__3548__auto____7429 = (G__7427__7428.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3548__auto____7429)
{return or__3548__auto____7429;
} else
{return G__7427__7428.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__7427__7428.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7427__7428);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7427__7428);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__7430__7431 = x;
if((G__7430__7431 != null))
{if((function (){var or__3548__auto____7432 = (G__7430__7431.cljs$lang$protocol_mask$partition0$ & 8192);
if(or__3548__auto____7432)
{return or__3548__auto____7432;
} else
{return G__7430__7431.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__7430__7431.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7430__7431);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7430__7431);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__7433__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__7433 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7433__delegate.call(this, keyvals);
};
G__7433.cljs$lang$maxFixedArity = 0;
G__7433.cljs$lang$applyTo = (function (arglist__7434){
var keyvals = cljs.core.seq(arglist__7434);;
return G__7433__delegate(keyvals);
});
G__7433.cljs$lang$arity$variadic = G__7433__delegate;
return G__7433;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(falsecljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__7435 = [];
goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__7435.push(key);
}));
return keys__7435;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__7436 = i;
var j__7437 = j;
var len__7438 = len;
while(true){
if((len__7438 === 0))
{return to;
} else
{(to[j__7437] = (from[i__7436]));
{
var G__7439 = (i__7436 + 1);
var G__7440 = (j__7437 + 1);
var G__7441 = (len__7438 - 1);
i__7436 = G__7439;
j__7437 = G__7440;
len__7438 = G__7441;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__7442 = (i + (len - 1));
var j__7443 = (j + (len - 1));
var len__7444 = len;
while(true){
if((len__7444 === 0))
{return to;
} else
{(to[j__7443] = (from[i__7442]));
{
var G__7445 = (i__7442 - 1);
var G__7446 = (j__7443 - 1);
var G__7447 = (len__7444 - 1);
i__7442 = G__7445;
j__7443 = G__7446;
len__7444 = G__7447;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
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
if((s == null))
{return false;
} else
{var G__7448__7449 = s;
if((G__7448__7449 != null))
{if((function (){var or__3548__auto____7450 = (G__7448__7449.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3548__auto____7450)
{return or__3548__auto____7450;
} else
{return G__7448__7449.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7448__7449.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7448__7449);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7448__7449);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__7451__7452 = s;
if((G__7451__7452 != null))
{if((function (){var or__3548__auto____7453 = (G__7451__7452.cljs$lang$protocol_mask$partition0$ & 4194304);
if(or__3548__auto____7453)
{return or__3548__auto____7453;
} else
{return G__7451__7452.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__7451__7452.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7451__7452);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7451__7452);
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
var and__3546__auto____7454 = goog.isString.call(null,x);
if(cljs.core.truth_(and__3546__auto____7454))
{return cljs.core.not.call(null,(function (){var or__3548__auto____7455 = (x.charAt(0) === "\uFDD0");
if(or__3548__auto____7455)
{return or__3548__auto____7455;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3546__auto____7454;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____7456 = goog.isString.call(null,x);
if(cljs.core.truth_(and__3546__auto____7456))
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3546__auto____7456;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____7457 = goog.isString.call(null,x);
if(cljs.core.truth_(and__3546__auto____7457))
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3546__auto____7457;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3548__auto____7458 = cljs.core.fn_QMARK_.call(null,f);
if(or__3548__auto____7458)
{return or__3548__auto____7458;
} else
{var G__7459__7460 = f;
if((G__7459__7460 != null))
{if((function (){var or__3548__auto____7461 = (G__7459__7460.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3548__auto____7461)
{return or__3548__auto____7461;
} else
{return G__7459__7460.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__7459__7460.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7459__7460);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7459__7460);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____7462 = cljs.core.number_QMARK_.call(null,n);
if(and__3546__auto____7462)
{return (n == n.toFixed());
} else
{return and__3546__auto____7462;
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
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7463 = coll;
if(cljs.core.truth_(and__3546__auto____7463))
{var and__3546__auto____7464 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3546__auto____7464)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____7464;
}
} else
{return and__3546__auto____7463;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
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
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__7469__delegate = function (x,y,more){
if(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y)))
{var s__7465 = cljs.core.set([y,x]);
var xs__7466 = more;
while(true){
var x__7467 = cljs.core.first.call(null,xs__7466);
var etc__7468 = cljs.core.next.call(null,xs__7466);
if(cljs.core.truth_(xs__7466))
{if(cljs.core.contains_QMARK_.call(null,s__7465,x__7467))
{return false;
} else
{{
var G__7470 = cljs.core.conj.call(null,s__7465,x__7467);
var G__7471 = etc__7468;
s__7465 = G__7470;
xs__7466 = G__7471;
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
var G__7469 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7469__delegate.call(this, x, y, more);
};
G__7469.cljs$lang$maxFixedArity = 2;
G__7469.cljs$lang$applyTo = (function (arglist__7472){
var x = cljs.core.first(arglist__7472);
var y = cljs.core.first(cljs.core.next(arglist__7472));
var more = cljs.core.rest(cljs.core.next(arglist__7472));
return G__7469__delegate(x, y, more);
});
G__7469.cljs$lang$arity$variadic = G__7469__delegate;
return G__7469;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare for objects of the same type
* and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{return goog.array.defaultCompare.call(null,x,y);
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__7473 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__7473))
{return r__7473;
} else
{if(cljs.core.truth_(r__7473))
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
void 0;
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__7474 = cljs.core.to_array.call(null,coll);
goog.array.stableSort.call(null,a__7474,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7474);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
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
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3695__auto____7475 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3695__auto____7475))
{var s__7476 = temp__3695__auto____7475;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7476),cljs.core.next.call(null,s__7476));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__7477 = val;
var coll__7478 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_(coll__7478))
{var nval__7479 = f.call(null,val__7477,cljs.core.first.call(null,coll__7478));
if(cljs.core.reduced_QMARK_.call(null,nval__7479))
{return cljs.core.deref.call(null,nval__7479);
} else
{{
var G__7480 = nval__7479;
var G__7481 = cljs.core.next.call(null,coll__7478);
val__7477 = G__7480;
coll__7478 = G__7481;
continue;
}
}
} else
{return val__7477;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
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
var reduce__2 = (function (f,coll){
if((function (){var G__7482__7483 = coll;
if((G__7482__7483 != null))
{if((function (){var or__3548__auto____7484 = (G__7482__7483.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3548__auto____7484)
{return or__3548__auto____7484;
} else
{return G__7482__7483.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7482__7483.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7482__7483);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7482__7483);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__7485__7486 = coll;
if((G__7485__7486 != null))
{if((function (){var or__3548__auto____7487 = (G__7485__7486.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3548__auto____7487)
{return or__3548__auto____7487;
} else
{return G__7485__7486.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7485__7486.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7485__7486);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7485__7486);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16384;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$ = true;
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__7488 = this;
return this__7488.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__7489__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7489 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7489__delegate.call(this, x, y, more);
};
G__7489.cljs$lang$maxFixedArity = 2;
G__7489.cljs$lang$applyTo = (function (arglist__7490){
var x = cljs.core.first(arglist__7490);
var y = cljs.core.first(cljs.core.next(arglist__7490));
var more = cljs.core.rest(cljs.core.next(arglist__7490));
return G__7489__delegate(x, y, more);
});
G__7489.cljs$lang$arity$variadic = G__7489__delegate;
return G__7489;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
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
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__7491__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7491 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7491__delegate.call(this, x, y, more);
};
G__7491.cljs$lang$maxFixedArity = 2;
G__7491.cljs$lang$applyTo = (function (arglist__7492){
var x = cljs.core.first(arglist__7492);
var y = cljs.core.first(cljs.core.next(arglist__7492));
var more = cljs.core.rest(cljs.core.next(arglist__7492));
return G__7491__delegate(x, y, more);
});
G__7491.cljs$lang$arity$variadic = G__7491__delegate;
return G__7491;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__7493__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7493 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7493__delegate.call(this, x, y, more);
};
G__7493.cljs$lang$maxFixedArity = 2;
G__7493.cljs$lang$applyTo = (function (arglist__7494){
var x = cljs.core.first(arglist__7494);
var y = cljs.core.first(cljs.core.next(arglist__7494));
var more = cljs.core.rest(cljs.core.next(arglist__7494));
return G__7493__delegate(x, y, more);
});
G__7493.cljs$lang$arity$variadic = G__7493__delegate;
return G__7493;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
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
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__7495__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7495 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7495__delegate.call(this, x, y, more);
};
G__7495.cljs$lang$maxFixedArity = 2;
G__7495.cljs$lang$applyTo = (function (arglist__7496){
var x = cljs.core.first(arglist__7496);
var y = cljs.core.first(cljs.core.next(arglist__7496));
var more = cljs.core.rest(cljs.core.next(arglist__7496));
return G__7495__delegate(x, y, more);
});
G__7495.cljs$lang$arity$variadic = G__7495__delegate;
return G__7495;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
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
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__7497__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7498 = y;
var G__7499 = cljs.core.first.call(null,more);
var G__7500 = cljs.core.next.call(null,more);
x = G__7498;
y = G__7499;
more = G__7500;
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
var G__7497 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7497__delegate.call(this, x, y, more);
};
G__7497.cljs$lang$maxFixedArity = 2;
G__7497.cljs$lang$applyTo = (function (arglist__7501){
var x = cljs.core.first(arglist__7501);
var y = cljs.core.first(cljs.core.next(arglist__7501));
var more = cljs.core.rest(cljs.core.next(arglist__7501));
return G__7497__delegate(x, y, more);
});
G__7497.cljs$lang$arity$variadic = G__7497__delegate;
return G__7497;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
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
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__7502__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7503 = y;
var G__7504 = cljs.core.first.call(null,more);
var G__7505 = cljs.core.next.call(null,more);
x = G__7503;
y = G__7504;
more = G__7505;
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
var G__7502 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7502__delegate.call(this, x, y, more);
};
G__7502.cljs$lang$maxFixedArity = 2;
G__7502.cljs$lang$applyTo = (function (arglist__7506){
var x = cljs.core.first(arglist__7506);
var y = cljs.core.first(cljs.core.next(arglist__7506));
var more = cljs.core.rest(cljs.core.next(arglist__7506));
return G__7502__delegate(x, y, more);
});
G__7502.cljs$lang$arity$variadic = G__7502__delegate;
return G__7502;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
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
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__7507__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7508 = y;
var G__7509 = cljs.core.first.call(null,more);
var G__7510 = cljs.core.next.call(null,more);
x = G__7508;
y = G__7509;
more = G__7510;
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
var G__7507 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7507__delegate.call(this, x, y, more);
};
G__7507.cljs$lang$maxFixedArity = 2;
G__7507.cljs$lang$applyTo = (function (arglist__7511){
var x = cljs.core.first(arglist__7511);
var y = cljs.core.first(cljs.core.next(arglist__7511));
var more = cljs.core.rest(cljs.core.next(arglist__7511));
return G__7507__delegate(x, y, more);
});
G__7507.cljs$lang$arity$variadic = G__7507__delegate;
return G__7507;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
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
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__7512__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7513 = y;
var G__7514 = cljs.core.first.call(null,more);
var G__7515 = cljs.core.next.call(null,more);
x = G__7513;
y = G__7514;
more = G__7515;
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
var G__7512 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7512__delegate.call(this, x, y, more);
};
G__7512.cljs$lang$maxFixedArity = 2;
G__7512.cljs$lang$applyTo = (function (arglist__7516){
var x = cljs.core.first(arglist__7516);
var y = cljs.core.first(cljs.core.next(arglist__7516));
var more = cljs.core.rest(cljs.core.next(arglist__7516));
return G__7512__delegate(x, y, more);
});
G__7512.cljs$lang$arity$variadic = G__7512__delegate;
return G__7512;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
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
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__7517__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7517 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7517__delegate.call(this, x, y, more);
};
G__7517.cljs$lang$maxFixedArity = 2;
G__7517.cljs$lang$applyTo = (function (arglist__7518){
var x = cljs.core.first(arglist__7518);
var y = cljs.core.first(cljs.core.next(arglist__7518));
var more = cljs.core.rest(cljs.core.next(arglist__7518));
return G__7517__delegate(x, y, more);
});
G__7517.cljs$lang$arity$variadic = G__7517__delegate;
return G__7517;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__7519__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7519 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7519__delegate.call(this, x, y, more);
};
G__7519.cljs$lang$maxFixedArity = 2;
G__7519.cljs$lang$applyTo = (function (arglist__7520){
var x = cljs.core.first(arglist__7520);
var y = cljs.core.first(cljs.core.next(arglist__7520));
var more = cljs.core.rest(cljs.core.next(arglist__7520));
return G__7519__delegate(x, y, more);
});
G__7519.cljs$lang$arity$variadic = G__7519__delegate;
return G__7519;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
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
var rem__7521 = (n % d);
return cljs.core.fix.call(null,((n - rem__7521) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7522 = cljs.core.quot.call(null,n,d);
return (n - (d * q__7522));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
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
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(n){
var c__7523 = 0;
var n__7524 = n;
while(true){
if((n__7524 === 0))
{return c__7523;
} else
{{
var G__7525 = (c__7523 + 1);
var G__7526 = (n__7524 & (n__7524 - 1));
c__7523 = G__7525;
n__7524 = G__7526;
continue;
}
}
break;
}
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__7527__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7528 = y;
var G__7529 = cljs.core.first.call(null,more);
var G__7530 = cljs.core.next.call(null,more);
x = G__7528;
y = G__7529;
more = G__7530;
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
var G__7527 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7527__delegate.call(this, x, y, more);
};
G__7527.cljs$lang$maxFixedArity = 2;
G__7527.cljs$lang$applyTo = (function (arglist__7531){
var x = cljs.core.first(arglist__7531);
var y = cljs.core.first(cljs.core.next(arglist__7531));
var more = cljs.core.rest(cljs.core.next(arglist__7531));
return G__7527__delegate(x, y, more);
});
G__7527.cljs$lang$arity$variadic = G__7527__delegate;
return G__7527;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
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
var n__7532 = n;
var xs__7533 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____7534 = xs__7533;
if(cljs.core.truth_(and__3546__auto____7534))
{return (n__7532 > 0);
} else
{return and__3546__auto____7534;
}
})()))
{{
var G__7535 = (n__7532 - 1);
var G__7536 = cljs.core.next.call(null,xs__7533);
n__7532 = G__7535;
xs__7533 = G__7536;
continue;
}
} else
{return xs__7533;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__7537__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7538 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7539 = cljs.core.next.call(null,more);
sb = G__7538;
more = G__7539;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7537 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7537__delegate.call(this, x, ys);
};
G__7537.cljs$lang$maxFixedArity = 1;
G__7537.cljs$lang$applyTo = (function (arglist__7540){
var x = cljs.core.first(arglist__7540);
var ys = cljs.core.rest(arglist__7540);
return G__7537__delegate(x, ys);
});
G__7537.cljs$lang$arity$variadic = G__7537__delegate;
return G__7537;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
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
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__7541__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7542 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__7543 = cljs.core.next.call(null,more);
sb = G__7542;
more = G__7543;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__7541 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7541__delegate.call(this, x, ys);
};
G__7541.cljs$lang$maxFixedArity = 1;
G__7541.cljs$lang$applyTo = (function (arglist__7544){
var x = cljs.core.first(arglist__7544);
var ys = cljs.core.rest(arglist__7544);
return G__7541__delegate(x, ys);
});
G__7541.cljs$lang$arity$variadic = G__7541__delegate;
return G__7541;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7545 = cljs.core.seq.call(null,x);
var ys__7546 = cljs.core.seq.call(null,y);
while(true){
if((xs__7545 == null))
{return (ys__7546 == null);
} else
{if((ys__7546 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7545),cljs.core.first.call(null,ys__7546)))
{{
var G__7547 = cljs.core.next.call(null,xs__7545);
var G__7548 = cljs.core.next.call(null,ys__7546);
xs__7545 = G__7547;
ys__7546 = G__7548;
continue;
}
} else
{if("\uFDD0'else")
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
return cljs.core.reduce.call(null,(function (p1__7549_SHARP_,p2__7550_SHARP_){
return cljs.core.hash_combine.call(null,p1__7549_SHARP_,cljs.core.hash.call(null,p2__7550_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
void 0;
void 0;
cljs.core.hash_imap = (function hash_imap(m){
var h__7551 = 0;
var s__7552 = cljs.core.seq.call(null,m);
while(true){
if(cljs.core.truth_(s__7552))
{var e__7553 = cljs.core.first.call(null,s__7552);
{
var G__7554 = ((h__7551 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__7553)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__7553)))) % 4503599627370496);
var G__7555 = cljs.core.next.call(null,s__7552);
h__7551 = G__7554;
s__7552 = G__7555;
continue;
}
} else
{return h__7551;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__7556 = 0;
var s__7557 = cljs.core.seq.call(null,s);
while(true){
if(cljs.core.truth_(s__7557))
{var e__7558 = cljs.core.first.call(null,s__7557);
{
var G__7559 = ((h__7556 + cljs.core.hash.call(null,e__7558)) % 4503599627370496);
var G__7560 = cljs.core.next.call(null,s__7557);
h__7556 = G__7559;
s__7557 = G__7560;
continue;
}
} else
{return h__7556;
}
break;
}
});
void 0;
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__7561__7562 = cljs.core.seq.call(null,fn_map);
if(cljs.core.truth_(G__7561__7562))
{var G__7564__7566 = cljs.core.first.call(null,G__7561__7562);
var vec__7565__7567 = G__7564__7566;
var key_name__7568 = cljs.core.nth.call(null,vec__7565__7567,0,null);
var f__7569 = cljs.core.nth.call(null,vec__7565__7567,1,null);
var G__7561__7570 = G__7561__7562;
var G__7564__7571 = G__7564__7566;
var G__7561__7572 = G__7561__7570;
while(true){
var vec__7573__7574 = G__7564__7571;
var key_name__7575 = cljs.core.nth.call(null,vec__7573__7574,0,null);
var f__7576 = cljs.core.nth.call(null,vec__7573__7574,1,null);
var G__7561__7577 = G__7561__7572;
var str_name__7578 = cljs.core.name.call(null,key_name__7575);
obj[str_name__7578] = f__7576;
var temp__3698__auto____7579 = cljs.core.next.call(null,G__7561__7577);
if(cljs.core.truth_(temp__3698__auto____7579))
{var G__7561__7580 = temp__3698__auto____7579;
{
var G__7581 = cljs.core.first.call(null,G__7561__7580);
var G__7582 = G__7561__7580;
G__7564__7571 = G__7581;
G__7561__7572 = G__7582;
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
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32706670;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7583 = this;
var h__2226__auto____7584 = this__7583.__hash;
if((h__2226__auto____7584 != null))
{return h__2226__auto____7584;
} else
{var h__2226__auto____7585 = cljs.core.hash_coll.call(null,coll);
this__7583.__hash = h__2226__auto____7585;
return h__2226__auto____7585;
}
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7586 = this;
return (new cljs.core.List(this__7586.meta,o,coll,(this__7586.count + 1),null));
});
cljs.core.List.prototype.cljs$core$ASeq$ = true;
cljs.core.List.prototype.toString = (function (){
var this__7587 = this;
var this$__7588 = this;
return cljs.core.pr_str.call(null,this$__7588);
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7589 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7590 = this;
return this__7590.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7591 = this;
return this__7591.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7592 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7593 = this;
return this__7593.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7594 = this;
return this__7594.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7595 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7596 = this;
return (new cljs.core.List(meta,this__7596.first,this__7596.rest,this__7596.count,this__7596.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7597 = this;
return this__7597.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7598 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IList$ = true;
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32706638;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7599 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7600 = this;
return (new cljs.core.List(this__7600.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__7601 = this;
var this$__7602 = this;
return cljs.core.pr_str.call(null,this$__7602);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7603 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7604 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7605 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7606 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7607 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7608 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7609 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7610 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7611 = this;
return this__7611.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7612 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IList$ = true;
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__7613__7614 = coll;
if((G__7613__7614 != null))
{if((function (){var or__3548__auto____7615 = (G__7613__7614.cljs$lang$protocol_mask$partition0$ & 67108864);
if(or__3548__auto____7615)
{return or__3548__auto____7615;
} else
{return G__7613__7614.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__7613__7614.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7613__7614);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7613__7614);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
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
list.cljs$lang$applyTo = (function (arglist__7616){
var items = cljs.core.seq(arglist__7616);;
return list__delegate(items);
});
list.cljs$lang$arity$variadic = list__delegate;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32702572;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7617 = this;
var h__2226__auto____7618 = this__7617.__hash;
if((h__2226__auto____7618 != null))
{return h__2226__auto____7618;
} else
{var h__2226__auto____7619 = cljs.core.hash_coll.call(null,coll);
this__7617.__hash = h__2226__auto____7619;
return h__2226__auto____7619;
}
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7620 = this;
return (new cljs.core.Cons(null,o,coll,this__7620.__hash));
});
cljs.core.Cons.prototype.cljs$core$ASeq$ = true;
cljs.core.Cons.prototype.toString = (function (){
var this__7621 = this;
var this$__7622 = this;
return cljs.core.pr_str.call(null,this$__7622);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7623 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7624 = this;
return this__7624.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7625 = this;
if((this__7625.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__7625.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7626 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7627 = this;
return (new cljs.core.Cons(meta,this__7627.first,this__7627.rest,this__7627.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7628 = this;
return this__7628.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7629 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7629.meta);
});
cljs.core.Cons.prototype.cljs$core$IList$ = true;
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3548__auto____7630 = (coll == null);
if(or__3548__auto____7630)
{return or__3548__auto____7630;
} else
{var G__7631__7632 = coll;
if((G__7631__7632 != null))
{if((function (){var or__3548__auto____7633 = (G__7631__7632.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3548__auto____7633)
{return or__3548__auto____7633;
} else
{return G__7631__7632.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7631__7632.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7631__7632);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7631__7632);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__7634__7635 = x;
if((G__7634__7635 != null))
{if((function (){var or__3548__auto____7636 = (G__7634__7635.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3548__auto____7636)
{return or__3548__auto____7636;
} else
{return G__7634__7635.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__7634__7635.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7634__7635);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7634__7635);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__7637 = null;
var G__7637__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7637__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7637 = function(string,f,start){
switch(arguments.length){
case 2:
return G__7637__2.call(this,string,f);
case 3:
return G__7637__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7637;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7638 = null;
var G__7638__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7638__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7638 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__7638__2.call(this,string,k);
case 3:
return G__7638__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7638;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7639 = null;
var G__7639__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__7639__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7639 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__7639__2.call(this,string,n);
case 3:
return G__7639__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7639;
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
var G__7648 = null;
var G__7648__2 = (function (tsym7642,coll){
var tsym7642__7644 = this;
var this$__7645 = tsym7642__7644;
return cljs.core.get.call(null,coll,this$__7645.toString());
});
var G__7648__3 = (function (tsym7643,coll,not_found){
var tsym7643__7646 = this;
var this$__7647 = tsym7643__7646;
return cljs.core.get.call(null,coll,this$__7647.toString(),not_found);
});
G__7648 = function(tsym7643,coll,not_found){
switch(arguments.length){
case 2:
return G__7648__2.call(this,tsym7643,coll);
case 3:
return G__7648__3.call(this,tsym7643,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7648;
})()
;
String.prototype.apply = (function (tsym7640,args7641){
return tsym7640.call.apply(tsym7640,[tsym7640].concat(cljs.core.aclone.call(null,args7641)));
});
String['prototype']['apply'] = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__7649 = lazy_seq.x;
if(cljs.core.truth_(lazy_seq.realized))
{return x__7649;
} else
{lazy_seq.x = x__7649.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925324;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7650 = this;
var h__2226__auto____7651 = this__7650.__hash;
if((h__2226__auto____7651 != null))
{return h__2226__auto____7651;
} else
{var h__2226__auto____7652 = cljs.core.hash_coll.call(null,coll);
this__7650.__hash = h__2226__auto____7652;
return h__2226__auto____7652;
}
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7653 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__7654 = this;
var this$__7655 = this;
return cljs.core.pr_str.call(null,this$__7655);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7656 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7657 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7658 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7659 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7660 = this;
return (new cljs.core.LazySeq(meta,this__7660.realized,this__7660.x,this__7660.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7661 = this;
return this__7661.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7662 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7662.meta);
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__7663 = [];
var s__7664 = s;
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__7664)))
{ary__7663.push(cljs.core.first.call(null,s__7664));
{
var G__7665 = cljs.core.next.call(null,s__7664);
s__7664 = G__7665;
continue;
}
} else
{return ary__7663;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__7666 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__7667 = 0;
var xs__7668 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_(xs__7668))
{(ret__7666[i__7667] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__7668)));
{
var G__7669 = (i__7667 + 1);
var G__7670 = cljs.core.next.call(null,xs__7668);
i__7667 = G__7669;
xs__7668 = G__7670;
continue;
}
} else
{}
break;
}
return ret__7666;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__7671 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7672 = cljs.core.seq.call(null,init_val_or_seq);
var i__7673 = 0;
var s__7674 = s__7672;
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____7675 = s__7674;
if(cljs.core.truth_(and__3546__auto____7675))
{return (i__7673 < size);
} else
{return and__3546__auto____7675;
}
})()))
{(a__7671[i__7673] = cljs.core.first.call(null,s__7674));
{
var G__7678 = (i__7673 + 1);
var G__7679 = cljs.core.next.call(null,s__7674);
i__7673 = G__7678;
s__7674 = G__7679;
continue;
}
} else
{return a__7671;
}
break;
}
} else
{var n__2515__auto____7676 = size;
var i__7677 = 0;
while(true){
if((i__7677 < n__2515__auto____7676))
{(a__7671[i__7677] = init_val_or_seq);
{
var G__7680 = (i__7677 + 1);
i__7677 = G__7680;
continue;
}
} else
{}
break;
}
return a__7671;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__7681 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7682 = cljs.core.seq.call(null,init_val_or_seq);
var i__7683 = 0;
var s__7684 = s__7682;
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____7685 = s__7684;
if(cljs.core.truth_(and__3546__auto____7685))
{return (i__7683 < size);
} else
{return and__3546__auto____7685;
}
})()))
{(a__7681[i__7683] = cljs.core.first.call(null,s__7684));
{
var G__7688 = (i__7683 + 1);
var G__7689 = cljs.core.next.call(null,s__7684);
i__7683 = G__7688;
s__7684 = G__7689;
continue;
}
} else
{return a__7681;
}
break;
}
} else
{var n__2515__auto____7686 = size;
var i__7687 = 0;
while(true){
if((i__7687 < n__2515__auto____7686))
{(a__7681[i__7687] = init_val_or_seq);
{
var G__7690 = (i__7687 + 1);
i__7687 = G__7690;
continue;
}
} else
{}
break;
}
return a__7681;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__7691 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7692 = cljs.core.seq.call(null,init_val_or_seq);
var i__7693 = 0;
var s__7694 = s__7692;
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____7695 = s__7694;
if(cljs.core.truth_(and__3546__auto____7695))
{return (i__7693 < size);
} else
{return and__3546__auto____7695;
}
})()))
{(a__7691[i__7693] = cljs.core.first.call(null,s__7694));
{
var G__7698 = (i__7693 + 1);
var G__7699 = cljs.core.next.call(null,s__7694);
i__7693 = G__7698;
s__7694 = G__7699;
continue;
}
} else
{return a__7691;
}
break;
}
} else
{var n__2515__auto____7696 = size;
var i__7697 = 0;
while(true){
if((i__7697 < n__2515__auto____7696))
{(a__7691[i__7697] = init_val_or_seq);
{
var G__7700 = (i__7697 + 1);
i__7697 = G__7700;
continue;
}
} else
{}
break;
}
return a__7691;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__7701 = s;
var i__7702 = n;
var sum__7703 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____7704 = (i__7702 > 0);
if(and__3546__auto____7704)
{return cljs.core.seq.call(null,s__7701);
} else
{return and__3546__auto____7704;
}
})()))
{{
var G__7705 = cljs.core.next.call(null,s__7701);
var G__7706 = (i__7702 - 1);
var G__7707 = (sum__7703 + 1);
s__7701 = G__7705;
i__7702 = G__7706;
sum__7703 = G__7707;
continue;
}
} else
{return sum__7703;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
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
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7708 = cljs.core.seq.call(null,x);
if(cljs.core.truth_(s__7708))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7708),concat.call(null,cljs.core.rest.call(null,s__7708),y));
} else
{return y;
}
})));
});
var concat__3 = (function() { 
var G__7711__delegate = function (x,y,zs){
var cat__7710 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7709 = cljs.core.seq.call(null,xys);
if(cljs.core.truth_(xys__7709))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7709),cat.call(null,cljs.core.rest.call(null,xys__7709),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});
return cat__7710.call(null,concat.call(null,x,y),zs);
};
var G__7711 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7711__delegate.call(this, x, y, zs);
};
G__7711.cljs$lang$maxFixedArity = 2;
G__7711.cljs$lang$applyTo = (function (arglist__7712){
var x = cljs.core.first(arglist__7712);
var y = cljs.core.first(cljs.core.next(arglist__7712));
var zs = cljs.core.rest(cljs.core.next(arglist__7712));
return G__7711__delegate(x, y, zs);
});
G__7711.cljs$lang$arity$variadic = G__7711__delegate;
return G__7711;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
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
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__7713__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7713 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7713__delegate.call(this, a, b, c, d, more);
};
G__7713.cljs$lang$maxFixedArity = 4;
G__7713.cljs$lang$applyTo = (function (arglist__7714){
var a = cljs.core.first(arglist__7714);
var b = cljs.core.first(cljs.core.next(arglist__7714));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7714)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7714))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7714))));
return G__7713__delegate(a, b, c, d, more);
});
G__7713.cljs$lang$arity$variadic = G__7713__delegate;
return G__7713;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
void 0;cljs.core.apply_to = (function apply_to(f,argc,args){
var args__7715 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__7716 = cljs.core._first.call(null,args__7715);
var args__7717 = cljs.core._rest.call(null,args__7715);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__7716);
} else
{return f.call(null,a__7716);
}
} else
{var b__7718 = cljs.core._first.call(null,args__7717);
var args__7719 = cljs.core._rest.call(null,args__7717);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__7716,b__7718);
} else
{return f.call(null,a__7716,b__7718);
}
} else
{var c__7720 = cljs.core._first.call(null,args__7719);
var args__7721 = cljs.core._rest.call(null,args__7719);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__7716,b__7718,c__7720);
} else
{return f.call(null,a__7716,b__7718,c__7720);
}
} else
{var d__7722 = cljs.core._first.call(null,args__7721);
var args__7723 = cljs.core._rest.call(null,args__7721);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__7716,b__7718,c__7720,d__7722);
} else
{return f.call(null,a__7716,b__7718,c__7720,d__7722);
}
} else
{var e__7724 = cljs.core._first.call(null,args__7723);
var args__7725 = cljs.core._rest.call(null,args__7723);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__7716,b__7718,c__7720,d__7722,e__7724);
} else
{return f.call(null,a__7716,b__7718,c__7720,d__7722,e__7724);
}
} else
{var f__7726 = cljs.core._first.call(null,args__7725);
var args__7727 = cljs.core._rest.call(null,args__7725);
if((argc === 6))
{if(f__7726.cljs$lang$arity$6)
{return f__7726.cljs$lang$arity$6(a__7716,b__7718,c__7720,d__7722,e__7724,f__7726);
} else
{return f__7726.call(null,a__7716,b__7718,c__7720,d__7722,e__7724,f__7726);
}
} else
{var g__7728 = cljs.core._first.call(null,args__7727);
var args__7729 = cljs.core._rest.call(null,args__7727);
if((argc === 7))
{if(f__7726.cljs$lang$arity$7)
{return f__7726.cljs$lang$arity$7(a__7716,b__7718,c__7720,d__7722,e__7724,f__7726,g__7728);
} else
{return f__7726.call(null,a__7716,b__7718,c__7720,d__7722,e__7724,f__7726,g__7728);
}
} else
{var h__7730 = cljs.core._first.call(null,args__7729);
var args__7731 = cljs.core._rest.call(null,args__7729);
if((argc === 8))
{if(f__7726.cljs$lang$arity$8)
{return f__7726.cljs$lang$arity$8(a__7716,b__7718,c__7720,d__7722,e__7724,f__7726,g__7728,h__7730);
} else
{return f__7726.call(null,a__7716,b__7718,c__7720,d__7722,e__7724,f__7726,g__7728,h__7730);
}
} else
{var i__7732 = cljs.core._first.call(null,args__7731);
var args__7733 = cljs.core._rest.call(null,args__7731);
if((argc === 9))
{if(f__7726.cljs$lang$arity$9)
{return f__7726.cljs$lang$arity$9(a__7716,b__7718,c__7720,d__7722,e__7724,f__7726,g__7728,h__7730,i__7732);
} else
{return f__7726.call(null,a__7716,b__7718,c__7720,d__7722,e__7724,f__7726,g__7728,h__7730,i__7732);
}
} else
{var j__7734 = cljs.core._first.call(null,args__7733);
var args__7735 = cljs.core._rest.call(null,args__7733);
if((argc === 10))
{if(f__7726.cljs$lang$arity$10)
{return f__7726.cljs$lang$arity$10(a__7716,b__7718,c__7720,d__7722,e__7724,f__7726,g__7728,h__7730,i__7732,j__7734);
} else
{return f__7726.call(null,a__7716,b__7718,c__7720,d__7722,e__7724,f__7726,g__7728,h__7730,i__7732,j__7734);
}
} else
{var k__7736 = cljs.core._first.call(null,args__7735);
var args__7737 = cljs.core._rest.call(null,args__7735);
if((argc === 11))
{if(f__7726.cljs$lang$arity$11)
{return f__7726.cljs$lang$arity$11(a__7716,b__7718,c__7720,d__7722,e__7724,f__7726,g__7728,h__7730,i__7732,j__7734,k__7736);
} else
{return f__7726.call(null,a__7716,b__7718,c__7720,d__7722,e__7724,f__7726,g__7728,h__7730,i__7732,j__7734,k__7736);
}
} else
{var l__7738 = cljs.core._first.call(null,args__7737);
var args__7739 = cljs.core._rest.call(null,args__7737);
if((argc === 12))
{if(f__7726.cljs$lang$arity$12)
{return f__7726.cljs$lang$arity$12(a__7716,b__7718,c__7720,d__7722,e__7724,f__7726,g__7728,h__7730,i__7732,j__7734,k__7736,l__7738);
} else
{return f__7726.call(null,a__7716,b__7718,c__7720,d__7722,e__7724,f__7726,g__7728,h__7730,i__7732,j__7734,k__7736,l__7738);
}
} else
{var m__7740 = cljs.core._first.call(null,args__7739);
var args__7741 = cljs.core._rest.call(null,args__7739);
if((argc === 13))
{if(f__7726.cljs$lang$arity$13)
{return f__7726.cljs$lang$arity$13(a__7716,b__7718,c__7720,d__7722,e__7724,f__7726,g__7728,h__7730,i__7732,j__7734,k__7736,l__7738,m__7740);
} else
{return f__7726.call(null,a__7716,b__7718,c__7720,d__7722,e__7724,f__7726,g__7728,h__7730,i__7732,j__7734,k__7736,l__7738,m__7740);
}
} else
{var n__7742 = cljs.core._first.call(null,args__7741);
var args__7743 = cljs.core._rest.call(null,args__7741);
if((argc === 14))
{if(f__7726.cljs$lang$arity$14)
{return f__7726.cljs$lang$arity$14(a__7716,b__7718,c__7720,d__7722,e__7724,f__7726,g__7728,h__7730,i__7732,j__7734,k__7736,l__7738,m__7740,n__7742);
} else
{return f__7726.call(null,a__7716,b__7718,c__7720,d__7722,e__7724,f__7726,g__7728,h__7730,i__7732,j__7734,k__7736,l__7738,m__7740,n__7742);
}
} else
{var o__7744 = cljs.core._first.call(null,args__7743);
var args__7745 = cljs.core._rest.call(null,args__7743);
if((argc === 15))
{if(f__7726.cljs$lang$arity$15)
{return f__7726.cljs$lang$arity$15(a__7716,b__7718,c__7720,d__7722,e__7724,f__7726,g__7728,h__7730,i__7732,j__7734,k__7736,l__7738,m__7740,n__7742,o__7744);
} else
{return f__7726.call(null,a__7716,b__7718,c__7720,d__7722,e__7724,f__7726,g__7728,h__7730,i__7732,j__7734,k__7736,l__7738,m__7740,n__7742,o__7744);
}
} else
{var p__7746 = cljs.core._first.call(null,args__7745);
var args__7747 = cljs.core._rest.call(null,args__7745);
if((argc === 16))
{if(f__7726.cljs$lang$arity$16)
{return f__7726.cljs$lang$arity$16(a__7716,b__7718,c__7720,d__7722,e__7724,f__7726,g__7728,h__7730,i__7732,j__7734,k__7736,l__7738,m__7740,n__7742,o__7744,p__7746);
} else
{return f__7726.call(null,a__7716,b__7718,c__7720,d__7722,e__7724,f__7726,g__7728,h__7730,i__7732,j__7734,k__7736,l__7738,m__7740,n__7742,o__7744,p__7746);
}
} else
{var q__7748 = cljs.core._first.call(null,args__7747);
var args__7749 = cljs.core._rest.call(null,args__7747);
if((argc === 17))
{if(f__7726.cljs$lang$arity$17)
{return f__7726.cljs$lang$arity$17(a__7716,b__7718,c__7720,d__7722,e__7724,f__7726,g__7728,h__7730,i__7732,j__7734,k__7736,l__7738,m__7740,n__7742,o__7744,p__7746,q__7748);
} else
{return f__7726.call(null,a__7716,b__7718,c__7720,d__7722,e__7724,f__7726,g__7728,h__7730,i__7732,j__7734,k__7736,l__7738,m__7740,n__7742,o__7744,p__7746,q__7748);
}
} else
{var r__7750 = cljs.core._first.call(null,args__7749);
var args__7751 = cljs.core._rest.call(null,args__7749);
if((argc === 18))
{if(f__7726.cljs$lang$arity$18)
{return f__7726.cljs$lang$arity$18(a__7716,b__7718,c__7720,d__7722,e__7724,f__7726,g__7728,h__7730,i__7732,j__7734,k__7736,l__7738,m__7740,n__7742,o__7744,p__7746,q__7748,r__7750);
} else
{return f__7726.call(null,a__7716,b__7718,c__7720,d__7722,e__7724,f__7726,g__7728,h__7730,i__7732,j__7734,k__7736,l__7738,m__7740,n__7742,o__7744,p__7746,q__7748,r__7750);
}
} else
{var s__7752 = cljs.core._first.call(null,args__7751);
var args__7753 = cljs.core._rest.call(null,args__7751);
if((argc === 19))
{if(f__7726.cljs$lang$arity$19)
{return f__7726.cljs$lang$arity$19(a__7716,b__7718,c__7720,d__7722,e__7724,f__7726,g__7728,h__7730,i__7732,j__7734,k__7736,l__7738,m__7740,n__7742,o__7744,p__7746,q__7748,r__7750,s__7752);
} else
{return f__7726.call(null,a__7716,b__7718,c__7720,d__7722,e__7724,f__7726,g__7728,h__7730,i__7732,j__7734,k__7736,l__7738,m__7740,n__7742,o__7744,p__7746,q__7748,r__7750,s__7752);
}
} else
{var t__7754 = cljs.core._first.call(null,args__7753);
var args__7755 = cljs.core._rest.call(null,args__7753);
if((argc === 20))
{if(f__7726.cljs$lang$arity$20)
{return f__7726.cljs$lang$arity$20(a__7716,b__7718,c__7720,d__7722,e__7724,f__7726,g__7728,h__7730,i__7732,j__7734,k__7736,l__7738,m__7740,n__7742,o__7744,p__7746,q__7748,r__7750,s__7752,t__7754);
} else
{return f__7726.call(null,a__7716,b__7718,c__7720,d__7722,e__7724,f__7726,g__7728,h__7730,i__7732,j__7734,k__7736,l__7738,m__7740,n__7742,o__7744,p__7746,q__7748,r__7750,s__7752,t__7754);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
void 0;/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__7756 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7757 = cljs.core.bounded_count.call(null,args,(fixed_arity__7756 + 1));
if((bc__7757 <= fixed_arity__7756))
{return cljs.core.apply_to.call(null,f,bc__7757,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__7758 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7759 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7760 = cljs.core.bounded_count.call(null,arglist__7758,(fixed_arity__7759 + 1));
if((bc__7760 <= fixed_arity__7759))
{return cljs.core.apply_to.call(null,f,bc__7760,arglist__7758);
} else
{return f.cljs$lang$applyTo(arglist__7758);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7758));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__7761 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7762 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7763 = cljs.core.bounded_count.call(null,arglist__7761,(fixed_arity__7762 + 1));
if((bc__7763 <= fixed_arity__7762))
{return cljs.core.apply_to.call(null,f,bc__7763,arglist__7761);
} else
{return f.cljs$lang$applyTo(arglist__7761);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7761));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__7764 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7765 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7766 = cljs.core.bounded_count.call(null,arglist__7764,(fixed_arity__7765 + 1));
if((bc__7766 <= fixed_arity__7765))
{return cljs.core.apply_to.call(null,f,bc__7766,arglist__7764);
} else
{return f.cljs$lang$applyTo(arglist__7764);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7764));
}
});
var apply__6 = (function() { 
var G__7770__delegate = function (f,a,b,c,d,args){
var arglist__7767 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7768 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7769 = cljs.core.bounded_count.call(null,arglist__7767,(fixed_arity__7768 + 1));
if((bc__7769 <= fixed_arity__7768))
{return cljs.core.apply_to.call(null,f,bc__7769,arglist__7767);
} else
{return f.cljs$lang$applyTo(arglist__7767);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7767));
}
};
var G__7770 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7770__delegate.call(this, f, a, b, c, d, args);
};
G__7770.cljs$lang$maxFixedArity = 5;
G__7770.cljs$lang$applyTo = (function (arglist__7771){
var f = cljs.core.first(arglist__7771);
var a = cljs.core.first(cljs.core.next(arglist__7771));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7771)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7771))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7771)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7771)))));
return G__7770__delegate(f, a, b, c, d, args);
});
G__7770.cljs$lang$arity$variadic = G__7770__delegate;
return G__7770;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
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
vary_meta.cljs$lang$applyTo = (function (arglist__7772){
var obj = cljs.core.first(arglist__7772);
var f = cljs.core.first(cljs.core.next(arglist__7772));
var args = cljs.core.rest(cljs.core.next(arglist__7772));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__7773__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7773 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7773__delegate.call(this, x, y, more);
};
G__7773.cljs$lang$maxFixedArity = 2;
G__7773.cljs$lang$applyTo = (function (arglist__7774){
var x = cljs.core.first(arglist__7774);
var y = cljs.core.first(cljs.core.next(arglist__7774));
var more = cljs.core.rest(cljs.core.next(arglist__7774));
return G__7773__delegate(x, y, more);
});
G__7773.cljs$lang$arity$variadic = G__7773__delegate;
return G__7773;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
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
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__7775 = pred;
var G__7776 = cljs.core.next.call(null,coll);
pred = G__7775;
coll = G__7776;
continue;
}
} else
{if("\uFDD0'else")
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
{var or__3548__auto____7777 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3548__auto____7777))
{return or__3548__auto____7777;
} else
{{
var G__7778 = pred;
var G__7779 = cljs.core.next.call(null,coll);
pred = G__7778;
coll = G__7779;
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
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
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
var G__7780 = null;
var G__7780__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7780__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7780__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7780__3 = (function() { 
var G__7781__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7781 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7781__delegate.call(this, x, y, zs);
};
G__7781.cljs$lang$maxFixedArity = 2;
G__7781.cljs$lang$applyTo = (function (arglist__7782){
var x = cljs.core.first(arglist__7782);
var y = cljs.core.first(cljs.core.next(arglist__7782));
var zs = cljs.core.rest(cljs.core.next(arglist__7782));
return G__7781__delegate(x, y, zs);
});
G__7781.cljs$lang$arity$variadic = G__7781__delegate;
return G__7781;
})()
;
G__7780 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7780__0.call(this);
case 1:
return G__7780__1.call(this,x);
case 2:
return G__7780__2.call(this,x,y);
default:
return G__7780__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__7780.cljs$lang$maxFixedArity = 2;
G__7780.cljs$lang$applyTo = G__7780__3.cljs$lang$applyTo;
return G__7780;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7783__delegate = function (args){
return x;
};
var G__7783 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7783__delegate.call(this, args);
};
G__7783.cljs$lang$maxFixedArity = 0;
G__7783.cljs$lang$applyTo = (function (arglist__7784){
var args = cljs.core.seq(arglist__7784);;
return G__7783__delegate(args);
});
G__7783.cljs$lang$arity$variadic = G__7783__delegate;
return G__7783;
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
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__7788 = null;
var G__7788__0 = (function (){
return f.call(null,g.call(null));
});
var G__7788__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7788__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7788__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7788__4 = (function() { 
var G__7789__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7789 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7789__delegate.call(this, x, y, z, args);
};
G__7789.cljs$lang$maxFixedArity = 3;
G__7789.cljs$lang$applyTo = (function (arglist__7790){
var x = cljs.core.first(arglist__7790);
var y = cljs.core.first(cljs.core.next(arglist__7790));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7790)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7790)));
return G__7789__delegate(x, y, z, args);
});
G__7789.cljs$lang$arity$variadic = G__7789__delegate;
return G__7789;
})()
;
G__7788 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7788__0.call(this);
case 1:
return G__7788__1.call(this,x);
case 2:
return G__7788__2.call(this,x,y);
case 3:
return G__7788__3.call(this,x,y,z);
default:
return G__7788__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7788.cljs$lang$maxFixedArity = 3;
G__7788.cljs$lang$applyTo = G__7788__4.cljs$lang$applyTo;
return G__7788;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__7791 = null;
var G__7791__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7791__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7791__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7791__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7791__4 = (function() { 
var G__7792__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7792 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7792__delegate.call(this, x, y, z, args);
};
G__7792.cljs$lang$maxFixedArity = 3;
G__7792.cljs$lang$applyTo = (function (arglist__7793){
var x = cljs.core.first(arglist__7793);
var y = cljs.core.first(cljs.core.next(arglist__7793));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7793)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7793)));
return G__7792__delegate(x, y, z, args);
});
G__7792.cljs$lang$arity$variadic = G__7792__delegate;
return G__7792;
})()
;
G__7791 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7791__0.call(this);
case 1:
return G__7791__1.call(this,x);
case 2:
return G__7791__2.call(this,x,y);
case 3:
return G__7791__3.call(this,x,y,z);
default:
return G__7791__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7791.cljs$lang$maxFixedArity = 3;
G__7791.cljs$lang$applyTo = G__7791__4.cljs$lang$applyTo;
return G__7791;
})()
});
var comp__4 = (function() { 
var G__7794__delegate = function (f1,f2,f3,fs){
var fs__7785 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__7795__delegate = function (args){
var ret__7786 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7785),args);
var fs__7787 = cljs.core.next.call(null,fs__7785);
while(true){
if(cljs.core.truth_(fs__7787))
{{
var G__7796 = cljs.core.first.call(null,fs__7787).call(null,ret__7786);
var G__7797 = cljs.core.next.call(null,fs__7787);
ret__7786 = G__7796;
fs__7787 = G__7797;
continue;
}
} else
{return ret__7786;
}
break;
}
};
var G__7795 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7795__delegate.call(this, args);
};
G__7795.cljs$lang$maxFixedArity = 0;
G__7795.cljs$lang$applyTo = (function (arglist__7798){
var args = cljs.core.seq(arglist__7798);;
return G__7795__delegate(args);
});
G__7795.cljs$lang$arity$variadic = G__7795__delegate;
return G__7795;
})()
;
};
var G__7794 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7794__delegate.call(this, f1, f2, f3, fs);
};
G__7794.cljs$lang$maxFixedArity = 3;
G__7794.cljs$lang$applyTo = (function (arglist__7799){
var f1 = cljs.core.first(arglist__7799);
var f2 = cljs.core.first(cljs.core.next(arglist__7799));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7799)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7799)));
return G__7794__delegate(f1, f2, f3, fs);
});
G__7794.cljs$lang$arity$variadic = G__7794__delegate;
return G__7794;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
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
var partial__2 = (function (f,arg1){
return (function() { 
var G__7800__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7800 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7800__delegate.call(this, args);
};
G__7800.cljs$lang$maxFixedArity = 0;
G__7800.cljs$lang$applyTo = (function (arglist__7801){
var args = cljs.core.seq(arglist__7801);;
return G__7800__delegate(args);
});
G__7800.cljs$lang$arity$variadic = G__7800__delegate;
return G__7800;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7802__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7802 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7802__delegate.call(this, args);
};
G__7802.cljs$lang$maxFixedArity = 0;
G__7802.cljs$lang$applyTo = (function (arglist__7803){
var args = cljs.core.seq(arglist__7803);;
return G__7802__delegate(args);
});
G__7802.cljs$lang$arity$variadic = G__7802__delegate;
return G__7802;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7804__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7804 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7804__delegate.call(this, args);
};
G__7804.cljs$lang$maxFixedArity = 0;
G__7804.cljs$lang$applyTo = (function (arglist__7805){
var args = cljs.core.seq(arglist__7805);;
return G__7804__delegate(args);
});
G__7804.cljs$lang$arity$variadic = G__7804__delegate;
return G__7804;
})()
;
});
var partial__5 = (function() { 
var G__7806__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7807__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7807 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7807__delegate.call(this, args);
};
G__7807.cljs$lang$maxFixedArity = 0;
G__7807.cljs$lang$applyTo = (function (arglist__7808){
var args = cljs.core.seq(arglist__7808);;
return G__7807__delegate(args);
});
G__7807.cljs$lang$arity$variadic = G__7807__delegate;
return G__7807;
})()
;
};
var G__7806 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7806__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7806.cljs$lang$maxFixedArity = 4;
G__7806.cljs$lang$applyTo = (function (arglist__7809){
var f = cljs.core.first(arglist__7809);
var arg1 = cljs.core.first(cljs.core.next(arglist__7809));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7809)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7809))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7809))));
return G__7806__delegate(f, arg1, arg2, arg3, more);
});
G__7806.cljs$lang$arity$variadic = G__7806__delegate;
return G__7806;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
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
var fnil__2 = (function (f,x){
return (function() {
var G__7810 = null;
var G__7810__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__7810__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__7810__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__7810__4 = (function() { 
var G__7811__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__7811 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7811__delegate.call(this, a, b, c, ds);
};
G__7811.cljs$lang$maxFixedArity = 3;
G__7811.cljs$lang$applyTo = (function (arglist__7812){
var a = cljs.core.first(arglist__7812);
var b = cljs.core.first(cljs.core.next(arglist__7812));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7812)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7812)));
return G__7811__delegate(a, b, c, ds);
});
G__7811.cljs$lang$arity$variadic = G__7811__delegate;
return G__7811;
})()
;
G__7810 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__7810__1.call(this,a);
case 2:
return G__7810__2.call(this,a,b);
case 3:
return G__7810__3.call(this,a,b,c);
default:
return G__7810__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7810.cljs$lang$maxFixedArity = 3;
G__7810.cljs$lang$applyTo = G__7810__4.cljs$lang$applyTo;
return G__7810;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__7813 = null;
var G__7813__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7813__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__7813__4 = (function() { 
var G__7814__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__7814 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7814__delegate.call(this, a, b, c, ds);
};
G__7814.cljs$lang$maxFixedArity = 3;
G__7814.cljs$lang$applyTo = (function (arglist__7815){
var a = cljs.core.first(arglist__7815);
var b = cljs.core.first(cljs.core.next(arglist__7815));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7815)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7815)));
return G__7814__delegate(a, b, c, ds);
});
G__7814.cljs$lang$arity$variadic = G__7814__delegate;
return G__7814;
})()
;
G__7813 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7813__2.call(this,a,b);
case 3:
return G__7813__3.call(this,a,b,c);
default:
return G__7813__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7813.cljs$lang$maxFixedArity = 3;
G__7813.cljs$lang$applyTo = G__7813__4.cljs$lang$applyTo;
return G__7813;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__7816 = null;
var G__7816__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7816__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__7816__4 = (function() { 
var G__7817__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__7817 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7817__delegate.call(this, a, b, c, ds);
};
G__7817.cljs$lang$maxFixedArity = 3;
G__7817.cljs$lang$applyTo = (function (arglist__7818){
var a = cljs.core.first(arglist__7818);
var b = cljs.core.first(cljs.core.next(arglist__7818));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7818)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7818)));
return G__7817__delegate(a, b, c, ds);
});
G__7817.cljs$lang$arity$variadic = G__7817__delegate;
return G__7817;
})()
;
G__7816 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7816__2.call(this,a,b);
case 3:
return G__7816__3.call(this,a,b,c);
default:
return G__7816__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7816.cljs$lang$maxFixedArity = 3;
G__7816.cljs$lang$applyTo = G__7816__4.cljs$lang$applyTo;
return G__7816;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
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
var mapi__7821 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7819 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____7819))
{var s__7820 = temp__3698__auto____7819;
return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7820)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__7820)));
} else
{return null;
}
})));
});
return mapi__7821.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7822 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____7822))
{var s__7823 = temp__3698__auto____7822;
var x__7824 = f.call(null,cljs.core.first.call(null,s__7823));
if((x__7824 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__7823));
} else
{return cljs.core.cons.call(null,x__7824,keep.call(null,f,cljs.core.rest.call(null,s__7823)));
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
var keepi__7834 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7831 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____7831))
{var s__7832 = temp__3698__auto____7831;
var x__7833 = f.call(null,idx,cljs.core.first.call(null,s__7832));
if((x__7833 == null))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__7832));
} else
{return cljs.core.cons.call(null,x__7833,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__7832)));
}
} else
{return null;
}
})));
});
return keepi__7834.call(null,0,coll);
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
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7841 = p.call(null,x);
if(cljs.core.truth_(and__3546__auto____7841))
{return p.call(null,y);
} else
{return and__3546__auto____7841;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7842 = p.call(null,x);
if(cljs.core.truth_(and__3546__auto____7842))
{var and__3546__auto____7843 = p.call(null,y);
if(cljs.core.truth_(and__3546__auto____7843))
{return p.call(null,z);
} else
{return and__3546__auto____7843;
}
} else
{return and__3546__auto____7842;
}
})());
});
var ep1__4 = (function() { 
var G__7879__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7844 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3546__auto____7844))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____7844;
}
})());
};
var G__7879 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7879__delegate.call(this, x, y, z, args);
};
G__7879.cljs$lang$maxFixedArity = 3;
G__7879.cljs$lang$applyTo = (function (arglist__7880){
var x = cljs.core.first(arglist__7880);
var y = cljs.core.first(cljs.core.next(arglist__7880));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7880)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7880)));
return G__7879__delegate(x, y, z, args);
});
G__7879.cljs$lang$arity$variadic = G__7879__delegate;
return G__7879;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7845 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____7845))
{return p2.call(null,x);
} else
{return and__3546__auto____7845;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7846 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____7846))
{var and__3546__auto____7847 = p1.call(null,y);
if(cljs.core.truth_(and__3546__auto____7847))
{var and__3546__auto____7848 = p2.call(null,x);
if(cljs.core.truth_(and__3546__auto____7848))
{return p2.call(null,y);
} else
{return and__3546__auto____7848;
}
} else
{return and__3546__auto____7847;
}
} else
{return and__3546__auto____7846;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7849 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____7849))
{var and__3546__auto____7850 = p1.call(null,y);
if(cljs.core.truth_(and__3546__auto____7850))
{var and__3546__auto____7851 = p1.call(null,z);
if(cljs.core.truth_(and__3546__auto____7851))
{var and__3546__auto____7852 = p2.call(null,x);
if(cljs.core.truth_(and__3546__auto____7852))
{var and__3546__auto____7853 = p2.call(null,y);
if(cljs.core.truth_(and__3546__auto____7853))
{return p2.call(null,z);
} else
{return and__3546__auto____7853;
}
} else
{return and__3546__auto____7852;
}
} else
{return and__3546__auto____7851;
}
} else
{return and__3546__auto____7850;
}
} else
{return and__3546__auto____7849;
}
})());
});
var ep2__4 = (function() { 
var G__7881__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7854 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3546__auto____7854))
{return cljs.core.every_QMARK_.call(null,(function (p1__7825_SHARP_){
var and__3546__auto____7855 = p1.call(null,p1__7825_SHARP_);
if(cljs.core.truth_(and__3546__auto____7855))
{return p2.call(null,p1__7825_SHARP_);
} else
{return and__3546__auto____7855;
}
}),args);
} else
{return and__3546__auto____7854;
}
})());
};
var G__7881 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7881__delegate.call(this, x, y, z, args);
};
G__7881.cljs$lang$maxFixedArity = 3;
G__7881.cljs$lang$applyTo = (function (arglist__7882){
var x = cljs.core.first(arglist__7882);
var y = cljs.core.first(cljs.core.next(arglist__7882));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7882)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7882)));
return G__7881__delegate(x, y, z, args);
});
G__7881.cljs$lang$arity$variadic = G__7881__delegate;
return G__7881;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7856 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____7856))
{var and__3546__auto____7857 = p2.call(null,x);
if(cljs.core.truth_(and__3546__auto____7857))
{return p3.call(null,x);
} else
{return and__3546__auto____7857;
}
} else
{return and__3546__auto____7856;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7858 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____7858))
{var and__3546__auto____7859 = p2.call(null,x);
if(cljs.core.truth_(and__3546__auto____7859))
{var and__3546__auto____7860 = p3.call(null,x);
if(cljs.core.truth_(and__3546__auto____7860))
{var and__3546__auto____7861 = p1.call(null,y);
if(cljs.core.truth_(and__3546__auto____7861))
{var and__3546__auto____7862 = p2.call(null,y);
if(cljs.core.truth_(and__3546__auto____7862))
{return p3.call(null,y);
} else
{return and__3546__auto____7862;
}
} else
{return and__3546__auto____7861;
}
} else
{return and__3546__auto____7860;
}
} else
{return and__3546__auto____7859;
}
} else
{return and__3546__auto____7858;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7863 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____7863))
{var and__3546__auto____7864 = p2.call(null,x);
if(cljs.core.truth_(and__3546__auto____7864))
{var and__3546__auto____7865 = p3.call(null,x);
if(cljs.core.truth_(and__3546__auto____7865))
{var and__3546__auto____7866 = p1.call(null,y);
if(cljs.core.truth_(and__3546__auto____7866))
{var and__3546__auto____7867 = p2.call(null,y);
if(cljs.core.truth_(and__3546__auto____7867))
{var and__3546__auto____7868 = p3.call(null,y);
if(cljs.core.truth_(and__3546__auto____7868))
{var and__3546__auto____7869 = p1.call(null,z);
if(cljs.core.truth_(and__3546__auto____7869))
{var and__3546__auto____7870 = p2.call(null,z);
if(cljs.core.truth_(and__3546__auto____7870))
{return p3.call(null,z);
} else
{return and__3546__auto____7870;
}
} else
{return and__3546__auto____7869;
}
} else
{return and__3546__auto____7868;
}
} else
{return and__3546__auto____7867;
}
} else
{return and__3546__auto____7866;
}
} else
{return and__3546__auto____7865;
}
} else
{return and__3546__auto____7864;
}
} else
{return and__3546__auto____7863;
}
})());
});
var ep3__4 = (function() { 
var G__7883__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7871 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3546__auto____7871))
{return cljs.core.every_QMARK_.call(null,(function (p1__7826_SHARP_){
var and__3546__auto____7872 = p1.call(null,p1__7826_SHARP_);
if(cljs.core.truth_(and__3546__auto____7872))
{var and__3546__auto____7873 = p2.call(null,p1__7826_SHARP_);
if(cljs.core.truth_(and__3546__auto____7873))
{return p3.call(null,p1__7826_SHARP_);
} else
{return and__3546__auto____7873;
}
} else
{return and__3546__auto____7872;
}
}),args);
} else
{return and__3546__auto____7871;
}
})());
};
var G__7883 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7883__delegate.call(this, x, y, z, args);
};
G__7883.cljs$lang$maxFixedArity = 3;
G__7883.cljs$lang$applyTo = (function (arglist__7884){
var x = cljs.core.first(arglist__7884);
var y = cljs.core.first(cljs.core.next(arglist__7884));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7884)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7884)));
return G__7883__delegate(x, y, z, args);
});
G__7883.cljs$lang$arity$variadic = G__7883__delegate;
return G__7883;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__7885__delegate = function (p1,p2,p3,ps){
var ps__7874 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7827_SHARP_){
return p1__7827_SHARP_.call(null,x);
}),ps__7874);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7828_SHARP_){
var and__3546__auto____7875 = p1__7828_SHARP_.call(null,x);
if(cljs.core.truth_(and__3546__auto____7875))
{return p1__7828_SHARP_.call(null,y);
} else
{return and__3546__auto____7875;
}
}),ps__7874);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7829_SHARP_){
var and__3546__auto____7876 = p1__7829_SHARP_.call(null,x);
if(cljs.core.truth_(and__3546__auto____7876))
{var and__3546__auto____7877 = p1__7829_SHARP_.call(null,y);
if(cljs.core.truth_(and__3546__auto____7877))
{return p1__7829_SHARP_.call(null,z);
} else
{return and__3546__auto____7877;
}
} else
{return and__3546__auto____7876;
}
}),ps__7874);
});
var epn__4 = (function() { 
var G__7886__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7878 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3546__auto____7878))
{return cljs.core.every_QMARK_.call(null,(function (p1__7830_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7830_SHARP_,args);
}),ps__7874);
} else
{return and__3546__auto____7878;
}
})());
};
var G__7886 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7886__delegate.call(this, x, y, z, args);
};
G__7886.cljs$lang$maxFixedArity = 3;
G__7886.cljs$lang$applyTo = (function (arglist__7887){
var x = cljs.core.first(arglist__7887);
var y = cljs.core.first(cljs.core.next(arglist__7887));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7887)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7887)));
return G__7886__delegate(x, y, z, args);
});
G__7886.cljs$lang$arity$variadic = G__7886__delegate;
return G__7886;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__7885 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7885__delegate.call(this, p1, p2, p3, ps);
};
G__7885.cljs$lang$maxFixedArity = 3;
G__7885.cljs$lang$applyTo = (function (arglist__7888){
var p1 = cljs.core.first(arglist__7888);
var p2 = cljs.core.first(cljs.core.next(arglist__7888));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7888)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7888)));
return G__7885__delegate(p1, p2, p3, ps);
});
G__7885.cljs$lang$arity$variadic = G__7885__delegate;
return G__7885;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
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
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3548__auto____7890 = p.call(null,x);
if(cljs.core.truth_(or__3548__auto____7890))
{return or__3548__auto____7890;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3548__auto____7891 = p.call(null,x);
if(cljs.core.truth_(or__3548__auto____7891))
{return or__3548__auto____7891;
} else
{var or__3548__auto____7892 = p.call(null,y);
if(cljs.core.truth_(or__3548__auto____7892))
{return or__3548__auto____7892;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__7928__delegate = function (x,y,z,args){
var or__3548__auto____7893 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3548__auto____7893))
{return or__3548__auto____7893;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__7928 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7928__delegate.call(this, x, y, z, args);
};
G__7928.cljs$lang$maxFixedArity = 3;
G__7928.cljs$lang$applyTo = (function (arglist__7929){
var x = cljs.core.first(arglist__7929);
var y = cljs.core.first(cljs.core.next(arglist__7929));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7929)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7929)));
return G__7928__delegate(x, y, z, args);
});
G__7928.cljs$lang$arity$variadic = G__7928__delegate;
return G__7928;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3548__auto____7894 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____7894))
{return or__3548__auto____7894;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3548__auto____7895 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____7895))
{return or__3548__auto____7895;
} else
{var or__3548__auto____7896 = p1.call(null,y);
if(cljs.core.truth_(or__3548__auto____7896))
{return or__3548__auto____7896;
} else
{var or__3548__auto____7897 = p2.call(null,x);
if(cljs.core.truth_(or__3548__auto____7897))
{return or__3548__auto____7897;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3548__auto____7898 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____7898))
{return or__3548__auto____7898;
} else
{var or__3548__auto____7899 = p1.call(null,y);
if(cljs.core.truth_(or__3548__auto____7899))
{return or__3548__auto____7899;
} else
{var or__3548__auto____7900 = p1.call(null,z);
if(cljs.core.truth_(or__3548__auto____7900))
{return or__3548__auto____7900;
} else
{var or__3548__auto____7901 = p2.call(null,x);
if(cljs.core.truth_(or__3548__auto____7901))
{return or__3548__auto____7901;
} else
{var or__3548__auto____7902 = p2.call(null,y);
if(cljs.core.truth_(or__3548__auto____7902))
{return or__3548__auto____7902;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__7930__delegate = function (x,y,z,args){
var or__3548__auto____7903 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3548__auto____7903))
{return or__3548__auto____7903;
} else
{return cljs.core.some.call(null,(function (p1__7835_SHARP_){
var or__3548__auto____7904 = p1.call(null,p1__7835_SHARP_);
if(cljs.core.truth_(or__3548__auto____7904))
{return or__3548__auto____7904;
} else
{return p2.call(null,p1__7835_SHARP_);
}
}),args);
}
};
var G__7930 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7930__delegate.call(this, x, y, z, args);
};
G__7930.cljs$lang$maxFixedArity = 3;
G__7930.cljs$lang$applyTo = (function (arglist__7931){
var x = cljs.core.first(arglist__7931);
var y = cljs.core.first(cljs.core.next(arglist__7931));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7931)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7931)));
return G__7930__delegate(x, y, z, args);
});
G__7930.cljs$lang$arity$variadic = G__7930__delegate;
return G__7930;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3548__auto____7905 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____7905))
{return or__3548__auto____7905;
} else
{var or__3548__auto____7906 = p2.call(null,x);
if(cljs.core.truth_(or__3548__auto____7906))
{return or__3548__auto____7906;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3548__auto____7907 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____7907))
{return or__3548__auto____7907;
} else
{var or__3548__auto____7908 = p2.call(null,x);
if(cljs.core.truth_(or__3548__auto____7908))
{return or__3548__auto____7908;
} else
{var or__3548__auto____7909 = p3.call(null,x);
if(cljs.core.truth_(or__3548__auto____7909))
{return or__3548__auto____7909;
} else
{var or__3548__auto____7910 = p1.call(null,y);
if(cljs.core.truth_(or__3548__auto____7910))
{return or__3548__auto____7910;
} else
{var or__3548__auto____7911 = p2.call(null,y);
if(cljs.core.truth_(or__3548__auto____7911))
{return or__3548__auto____7911;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3548__auto____7912 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____7912))
{return or__3548__auto____7912;
} else
{var or__3548__auto____7913 = p2.call(null,x);
if(cljs.core.truth_(or__3548__auto____7913))
{return or__3548__auto____7913;
} else
{var or__3548__auto____7914 = p3.call(null,x);
if(cljs.core.truth_(or__3548__auto____7914))
{return or__3548__auto____7914;
} else
{var or__3548__auto____7915 = p1.call(null,y);
if(cljs.core.truth_(or__3548__auto____7915))
{return or__3548__auto____7915;
} else
{var or__3548__auto____7916 = p2.call(null,y);
if(cljs.core.truth_(or__3548__auto____7916))
{return or__3548__auto____7916;
} else
{var or__3548__auto____7917 = p3.call(null,y);
if(cljs.core.truth_(or__3548__auto____7917))
{return or__3548__auto____7917;
} else
{var or__3548__auto____7918 = p1.call(null,z);
if(cljs.core.truth_(or__3548__auto____7918))
{return or__3548__auto____7918;
} else
{var or__3548__auto____7919 = p2.call(null,z);
if(cljs.core.truth_(or__3548__auto____7919))
{return or__3548__auto____7919;
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
var sp3__4 = (function() { 
var G__7932__delegate = function (x,y,z,args){
var or__3548__auto____7920 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3548__auto____7920))
{return or__3548__auto____7920;
} else
{return cljs.core.some.call(null,(function (p1__7836_SHARP_){
var or__3548__auto____7921 = p1.call(null,p1__7836_SHARP_);
if(cljs.core.truth_(or__3548__auto____7921))
{return or__3548__auto____7921;
} else
{var or__3548__auto____7922 = p2.call(null,p1__7836_SHARP_);
if(cljs.core.truth_(or__3548__auto____7922))
{return or__3548__auto____7922;
} else
{return p3.call(null,p1__7836_SHARP_);
}
}
}),args);
}
};
var G__7932 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7932__delegate.call(this, x, y, z, args);
};
G__7932.cljs$lang$maxFixedArity = 3;
G__7932.cljs$lang$applyTo = (function (arglist__7933){
var x = cljs.core.first(arglist__7933);
var y = cljs.core.first(cljs.core.next(arglist__7933));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7933)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7933)));
return G__7932__delegate(x, y, z, args);
});
G__7932.cljs$lang$arity$variadic = G__7932__delegate;
return G__7932;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__7934__delegate = function (p1,p2,p3,ps){
var ps__7923 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__7837_SHARP_){
return p1__7837_SHARP_.call(null,x);
}),ps__7923);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__7838_SHARP_){
var or__3548__auto____7924 = p1__7838_SHARP_.call(null,x);
if(cljs.core.truth_(or__3548__auto____7924))
{return or__3548__auto____7924;
} else
{return p1__7838_SHARP_.call(null,y);
}
}),ps__7923);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__7839_SHARP_){
var or__3548__auto____7925 = p1__7839_SHARP_.call(null,x);
if(cljs.core.truth_(or__3548__auto____7925))
{return or__3548__auto____7925;
} else
{var or__3548__auto____7926 = p1__7839_SHARP_.call(null,y);
if(cljs.core.truth_(or__3548__auto____7926))
{return or__3548__auto____7926;
} else
{return p1__7839_SHARP_.call(null,z);
}
}
}),ps__7923);
});
var spn__4 = (function() { 
var G__7935__delegate = function (x,y,z,args){
var or__3548__auto____7927 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3548__auto____7927))
{return or__3548__auto____7927;
} else
{return cljs.core.some.call(null,(function (p1__7840_SHARP_){
return cljs.core.some.call(null,p1__7840_SHARP_,args);
}),ps__7923);
}
};
var G__7935 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7935__delegate.call(this, x, y, z, args);
};
G__7935.cljs$lang$maxFixedArity = 3;
G__7935.cljs$lang$applyTo = (function (arglist__7936){
var x = cljs.core.first(arglist__7936);
var y = cljs.core.first(cljs.core.next(arglist__7936));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7936)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7936)));
return G__7935__delegate(x, y, z, args);
});
G__7935.cljs$lang$arity$variadic = G__7935__delegate;
return G__7935;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__7934 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7934__delegate.call(this, p1, p2, p3, ps);
};
G__7934.cljs$lang$maxFixedArity = 3;
G__7934.cljs$lang$applyTo = (function (arglist__7937){
var p1 = cljs.core.first(arglist__7937);
var p2 = cljs.core.first(cljs.core.next(arglist__7937));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7937)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7937)));
return G__7934__delegate(p1, p2, p3, ps);
});
G__7934.cljs$lang$arity$variadic = G__7934__delegate;
return G__7934;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
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
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7938 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____7938))
{var s__7939 = temp__3698__auto____7938;
return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__7939)),map.call(null,f,cljs.core.rest.call(null,s__7939)));
} else
{return null;
}
})));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7940 = cljs.core.seq.call(null,c1);
var s2__7941 = cljs.core.seq.call(null,c2);
if(cljs.core.truth_((function (){var and__3546__auto____7942 = s1__7940;
if(cljs.core.truth_(and__3546__auto____7942))
{return s2__7941;
} else
{return and__3546__auto____7942;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__7940),cljs.core.first.call(null,s2__7941)),map.call(null,f,cljs.core.rest.call(null,s1__7940),cljs.core.rest.call(null,s2__7941)));
} else
{return null;
}
})));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7943 = cljs.core.seq.call(null,c1);
var s2__7944 = cljs.core.seq.call(null,c2);
var s3__7945 = cljs.core.seq.call(null,c3);
if(cljs.core.truth_((function (){var and__3546__auto____7946 = s1__7943;
if(cljs.core.truth_(and__3546__auto____7946))
{var and__3546__auto____7947 = s2__7944;
if(cljs.core.truth_(and__3546__auto____7947))
{return s3__7945;
} else
{return and__3546__auto____7947;
}
} else
{return and__3546__auto____7946;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__7943),cljs.core.first.call(null,s2__7944),cljs.core.first.call(null,s3__7945)),map.call(null,f,cljs.core.rest.call(null,s1__7943),cljs.core.rest.call(null,s2__7944),cljs.core.rest.call(null,s3__7945)));
} else
{return null;
}
})));
});
var map__5 = (function() { 
var G__7950__delegate = function (f,c1,c2,c3,colls){
var step__7949 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__7948 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__7948))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__7948),step.call(null,map.call(null,cljs.core.rest,ss__7948)));
} else
{return null;
}
})));
});
return map.call(null,(function (p1__7889_SHARP_){
return cljs.core.apply.call(null,f,p1__7889_SHARP_);
}),step__7949.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__7950 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7950__delegate.call(this, f, c1, c2, c3, colls);
};
G__7950.cljs$lang$maxFixedArity = 4;
G__7950.cljs$lang$applyTo = (function (arglist__7951){
var f = cljs.core.first(arglist__7951);
var c1 = cljs.core.first(cljs.core.next(arglist__7951));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7951)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7951))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7951))));
return G__7950__delegate(f, c1, c2, c3, colls);
});
G__7950.cljs$lang$arity$variadic = G__7950__delegate;
return G__7950;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3698__auto____7952 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____7952))
{var s__7953 = temp__3698__auto____7952;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__7953),take.call(null,(n - 1),cljs.core.rest.call(null,s__7953)));
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
var step__7956 = (function (n,coll){
while(true){
var s__7954 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3546__auto____7955 = (n > 0);
if(and__3546__auto____7955)
{return s__7954;
} else
{return and__3546__auto____7955;
}
})()))
{{
var G__7957 = (n - 1);
var G__7958 = cljs.core.rest.call(null,s__7954);
n = G__7957;
coll = G__7958;
continue;
}
} else
{return s__7954;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__7956.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__7959 = cljs.core.seq.call(null,coll);
var lead__7960 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(cljs.core.truth_(lead__7960))
{{
var G__7961 = cljs.core.next.call(null,s__7959);
var G__7962 = cljs.core.next.call(null,lead__7960);
s__7959 = G__7961;
lead__7960 = G__7962;
continue;
}
} else
{return s__7959;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__7965 = (function (pred,coll){
while(true){
var s__7963 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3546__auto____7964 = s__7963;
if(cljs.core.truth_(and__3546__auto____7964))
{return pred.call(null,cljs.core.first.call(null,s__7963));
} else
{return and__3546__auto____7964;
}
})()))
{{
var G__7966 = pred;
var G__7967 = cljs.core.rest.call(null,s__7963);
pred = G__7966;
coll = G__7967;
continue;
}
} else
{return s__7963;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__7965.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7968 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____7968))
{var s__7969 = temp__3698__auto____7968;
return cljs.core.concat.call(null,s__7969,cycle.call(null,s__7969));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
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
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
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
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7970 = cljs.core.seq.call(null,c1);
var s2__7971 = cljs.core.seq.call(null,c2);
if(cljs.core.truth_((function (){var and__3546__auto____7972 = s1__7970;
if(cljs.core.truth_(and__3546__auto____7972))
{return s2__7971;
} else
{return and__3546__auto____7972;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__7970),cljs.core.cons.call(null,cljs.core.first.call(null,s2__7971),interleave.call(null,cljs.core.rest.call(null,s1__7970),cljs.core.rest.call(null,s2__7971))));
} else
{return null;
}
})));
});
var interleave__3 = (function() { 
var G__7974__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__7973 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__7973))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__7973),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__7973)));
} else
{return null;
}
})));
};
var G__7974 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7974__delegate.call(this, c1, c2, colls);
};
G__7974.cljs$lang$maxFixedArity = 2;
G__7974.cljs$lang$applyTo = (function (arglist__7975){
var c1 = cljs.core.first(arglist__7975);
var c2 = cljs.core.first(cljs.core.next(arglist__7975));
var colls = cljs.core.rest(cljs.core.next(arglist__7975));
return G__7974__delegate(c1, c2, colls);
});
G__7974.cljs$lang$arity$variadic = G__7974__delegate;
return G__7974;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
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
var cat__7978 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____7976 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3695__auto____7976))
{var coll__7977 = temp__3695__auto____7976;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__7977),cat.call(null,cljs.core.rest.call(null,coll__7977),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});
return cat__7978.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__7979__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__7979 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7979__delegate.call(this, f, coll, colls);
};
G__7979.cljs$lang$maxFixedArity = 2;
G__7979.cljs$lang$applyTo = (function (arglist__7980){
var f = cljs.core.first(arglist__7980);
var coll = cljs.core.first(cljs.core.next(arglist__7980));
var colls = cljs.core.rest(cljs.core.next(arglist__7980));
return G__7979__delegate(f, coll, colls);
});
G__7979.cljs$lang$arity$variadic = G__7979__delegate;
return G__7979;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7981 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____7981))
{var s__7982 = temp__3698__auto____7981;
var f__7983 = cljs.core.first.call(null,s__7982);
var r__7984 = cljs.core.rest.call(null,s__7982);
if(cljs.core.truth_(pred.call(null,f__7983)))
{return cljs.core.cons.call(null,f__7983,filter.call(null,pred,r__7984));
} else
{return filter.call(null,pred,r__7984);
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
var walk__7986 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});
return walk__7986.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__7985_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__7985_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__7987__7988 = to;
if((G__7987__7988 != null))
{if((function (){var or__3548__auto____7989 = (G__7987__7988.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3548__auto____7989)
{return or__3548__auto____7989;
} else
{return G__7987__7988.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__7987__7988.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__7987__7988);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__7987__7988);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.fromArray([])),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([]),cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([]),cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__7990__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([]),cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__7990 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7990__delegate.call(this, f, c1, c2, c3, colls);
};
G__7990.cljs$lang$maxFixedArity = 4;
G__7990.cljs$lang$applyTo = (function (arglist__7991){
var f = cljs.core.first(arglist__7991);
var c1 = cljs.core.first(cljs.core.next(arglist__7991));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7991)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7991))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7991))));
return G__7990__delegate(f, c1, c2, c3, colls);
});
G__7990.cljs$lang$arity$variadic = G__7990__delegate;
return G__7990;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.fromArray([])),coll));
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
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7992 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____7992))
{var s__7993 = temp__3698__auto____7992;
var p__7994 = cljs.core.take.call(null,n,s__7993);
if((n === cljs.core.count.call(null,p__7994)))
{return cljs.core.cons.call(null,p__7994,partition.call(null,n,step,cljs.core.drop.call(null,step,s__7993)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7995 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____7995))
{var s__7996 = temp__3698__auto____7995;
var p__7997 = cljs.core.take.call(null,n,s__7996);
if((n === cljs.core.count.call(null,p__7997)))
{return cljs.core.cons.call(null,p__7997,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__7996)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__7997,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
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
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__7998 = cljs.core.lookup_sentinel;
var m__7999 = m;
var ks__8000 = cljs.core.seq.call(null,ks);
while(true){
if(cljs.core.truth_(ks__8000))
{var m__8001 = cljs.core.get.call(null,m__7999,cljs.core.first.call(null,ks__8000),sentinel__7998);
if((sentinel__7998 === m__8001))
{return not_found;
} else
{{
var G__8002 = sentinel__7998;
var G__8003 = m__8001;
var G__8004 = cljs.core.next.call(null,ks__8000);
sentinel__7998 = G__8002;
m__7999 = G__8003;
ks__8000 = G__8004;
continue;
}
}
} else
{return m__7999;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__8005,v){
var vec__8006__8007 = p__8005;
var k__8008 = cljs.core.nth.call(null,vec__8006__8007,0,null);
var ks__8009 = cljs.core.nthnext.call(null,vec__8006__8007,1);
if(cljs.core.truth_(ks__8009))
{return cljs.core.assoc.call(null,m,k__8008,assoc_in.call(null,cljs.core.get.call(null,m,k__8008),ks__8009,v));
} else
{return cljs.core.assoc.call(null,m,k__8008,v);
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
var update_in__delegate = function (m,p__8010,f,args){
var vec__8011__8012 = p__8010;
var k__8013 = cljs.core.nth.call(null,vec__8011__8012,0,null);
var ks__8014 = cljs.core.nthnext.call(null,vec__8011__8012,1);
if(cljs.core.truth_(ks__8014))
{return cljs.core.assoc.call(null,m,k__8013,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__8013),ks__8014,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8013,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__8013),args));
}
};
var update_in = function (m,p__8010,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8010, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8015){
var m = cljs.core.first(arglist__8015);
var p__8010 = cljs.core.first(cljs.core.next(arglist__8015));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8015)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8015)));
return update_in__delegate(m, p__8010, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16200095;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8020 = this;
var h__2226__auto____8021 = this__8020.__hash;
if((h__2226__auto____8021 != null))
{return h__2226__auto____8021;
} else
{var h__2226__auto____8022 = cljs.core.hash_coll.call(null,coll);
this__8020.__hash = h__2226__auto____8022;
return h__2226__auto____8022;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8023 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8024 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8025 = this;
var new_array__8026 = cljs.core.aclone.call(null,this__8025.array);
(new_array__8026[k] = v);
return (new cljs.core.Vector(this__8025.meta,new_array__8026,null));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__8055 = null;
var G__8055__2 = (function (tsym8018,k){
var this__8027 = this;
var tsym8018__8028 = this;
var coll__8029 = tsym8018__8028;
return cljs.core._lookup.call(null,coll__8029,k);
});
var G__8055__3 = (function (tsym8019,k,not_found){
var this__8030 = this;
var tsym8019__8031 = this;
var coll__8032 = tsym8019__8031;
return cljs.core._lookup.call(null,coll__8032,k,not_found);
});
G__8055 = function(tsym8019,k,not_found){
switch(arguments.length){
case 2:
return G__8055__2.call(this,tsym8019,k);
case 3:
return G__8055__3.call(this,tsym8019,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8055;
})()
;
cljs.core.Vector.prototype.apply = (function (tsym8016,args8017){
return tsym8016.call.apply(tsym8016,[tsym8016].concat(cljs.core.aclone.call(null,args8017)));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8033 = this;
var new_array__8034 = cljs.core.aclone.call(null,this__8033.array);
new_array__8034.push(o);
return (new cljs.core.Vector(this__8033.meta,new_array__8034,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__8035 = this;
var this$__8036 = this;
return cljs.core.pr_str.call(null,this$__8036);
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8037 = this;
return cljs.core.ci_reduce.call(null,this__8037.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8038 = this;
return cljs.core.ci_reduce.call(null,this__8038.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8039 = this;
if((this__8039.array.length > 0))
{var vector_seq__8040 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__8039.array.length))
{return cljs.core.cons.call(null,(this__8039.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});
return vector_seq__8040.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8041 = this;
return this__8041.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8042 = this;
var count__8043 = this__8042.array.length;
if((count__8043 > 0))
{return (this__8042.array[(count__8043 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8044 = this;
if((this__8044.array.length > 0))
{var new_array__8045 = cljs.core.aclone.call(null,this__8044.array);
new_array__8045.pop();
return (new cljs.core.Vector(this__8044.meta,new_array__8045,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8046 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8047 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8048 = this;
return (new cljs.core.Vector(meta,this__8048.array,this__8048.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8049 = this;
return this__8049.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8051 = this;
if((function (){var and__3546__auto____8052 = (0 <= n);
if(and__3546__auto____8052)
{return (n < this__8051.array.length);
} else
{return and__3546__auto____8052;
}
})())
{return (this__8051.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8053 = this;
if((function (){var and__3546__auto____8054 = (0 <= n);
if(and__3546__auto____8054)
{return (n < this__8053.array.length);
} else
{return and__3546__auto____8054;
}
})())
{return (this__8053.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8050 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8050.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2299__auto__){
return cljs.core.list.call(null,"cljs.core.VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,cljs.core.aclone.call(null,node.arr)));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__8056 = pv.cnt;
if((cnt__8056 < 32))
{return 0;
} else
{return (((cnt__8056 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__8057 = level;
var ret__8058 = node;
while(true){
if((ll__8057 === 0))
{return ret__8058;
} else
{var embed__8059 = ret__8058;
var r__8060 = cljs.core.pv_fresh_node.call(null,edit);
var ___8061 = cljs.core.pv_aset.call(null,r__8060,0,embed__8059);
{
var G__8062 = (ll__8057 - 5);
var G__8063 = r__8060;
ll__8057 = G__8062;
ret__8058 = G__8063;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8064 = cljs.core.pv_clone_node.call(null,parent);
var subidx__8065 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__8064,subidx__8065,tailnode);
return ret__8064;
} else
{var temp__3695__auto____8066 = cljs.core.pv_aget.call(null,parent,subidx__8065);
if(cljs.core.truth_(temp__3695__auto____8066))
{var child__8067 = temp__3695__auto____8066;
var node_to_insert__8068 = push_tail.call(null,pv,(level - 5),child__8067,tailnode);
cljs.core.pv_aset.call(null,ret__8064,subidx__8065,node_to_insert__8068);
return ret__8064;
} else
{var node_to_insert__8069 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__8064,subidx__8065,node_to_insert__8069);
return ret__8064;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3546__auto____8070 = (0 <= i);
if(and__3546__auto____8070)
{return (i < pv.cnt);
} else
{return and__3546__auto____8070;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__8071 = pv.root;
var level__8072 = pv.shift;
while(true){
if((level__8072 > 0))
{{
var G__8073 = cljs.core.pv_aget.call(null,node__8071,((i >>> level__8072) & 31));
var G__8074 = (level__8072 - 5);
node__8071 = G__8073;
level__8072 = G__8074;
continue;
}
} else
{return node__8071.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8075 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__8075,(i & 31),val);
return ret__8075;
} else
{var subidx__8076 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8075,subidx__8076,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8076),i,val));
return ret__8075;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8077 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8078 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8077));
if((function (){var and__3546__auto____8079 = (new_child__8078 == null);
if(and__3546__auto____8079)
{return (subidx__8077 === 0);
} else
{return and__3546__auto____8079;
}
})())
{return null;
} else
{var ret__8080 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8080,subidx__8077,new_child__8078);
return ret__8080;
}
} else
{if((subidx__8077 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__8081 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8081,subidx__8077,null);
return ret__8081;
} else
{return null;
}
}
}
});
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
cljs.core.vector_seq = (function vector_seq(v,offset){
var c__8082 = cljs.core._count.call(null,v);
if((c__8082 > 0))
{if((void 0 === cljs.core.t8083))
{
/**
* @constructor
*/
cljs.core.t8083 = (function (c,offset,v,vector_seq,__meta__2233__auto__){
this.c = c;
this.offset = offset;
this.v = v;
this.vector_seq = vector_seq;
this.__meta__2233__auto__ = __meta__2233__auto__;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 282263648;
})
cljs.core.t8083.cljs$lang$type = true;
cljs.core.t8083.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.t8083");
});
cljs.core.t8083.prototype.cljs$core$ISeqable$ = true;
cljs.core.t8083.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (vseq){
var this__8084 = this;
return vseq;
});
cljs.core.t8083.prototype.cljs$core$ISeq$ = true;
cljs.core.t8083.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__8085 = this;
return cljs.core._nth.call(null,this__8085.v,this__8085.offset);
});
cljs.core.t8083.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__8086 = this;
var offset__8087 = (this__8086.offset + 1);
if((offset__8087 < this__8086.c))
{return this__8086.vector_seq.call(null,this__8086.v,offset__8087);
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.t8083.prototype.cljs$core$ASeq$ = true;
cljs.core.t8083.prototype.cljs$core$IEquiv$ = true;
cljs.core.t8083.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (vseq,other){
var this__8088 = this;
return cljs.core.equiv_sequential.call(null,vseq,other);
});
cljs.core.t8083.prototype.cljs$core$ISequential$ = true;
cljs.core.t8083.prototype.cljs$core$IPrintable$ = true;
cljs.core.t8083.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (vseq,opts){
var this__8089 = this;
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,vseq);
});
cljs.core.t8083.prototype.cljs$core$IMeta$ = true;
cljs.core.t8083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (___2234__auto__){
var this__8090 = this;
return this__8090.__meta__2233__auto__;
});
cljs.core.t8083.prototype.cljs$core$IWithMeta$ = true;
cljs.core.t8083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (___2234__auto__,__meta__2233__auto__){
var this__8091 = this;
return (new cljs.core.t8083(this__8091.c,this__8091.offset,this__8091.v,this__8091.vector_seq,__meta__2233__auto__));
});
cljs.core.t8083;
} else
{}
return (new cljs.core.t8083(c__8082,offset,v,vector_seq,null));
} else
{return null;
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2164209055;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8096 = this;
return (new cljs.core.TransientVector(this__8096.cnt,this__8096.shift,cljs.core.tv_editable_root.call(null,this__8096.root),cljs.core.tv_editable_tail.call(null,this__8096.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8097 = this;
var h__2226__auto____8098 = this__8097.__hash;
if((h__2226__auto____8098 != null))
{return h__2226__auto____8098;
} else
{var h__2226__auto____8099 = cljs.core.hash_coll.call(null,coll);
this__8097.__hash = h__2226__auto____8099;
return h__2226__auto____8099;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8100 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8101 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8102 = this;
if((function (){var and__3546__auto____8103 = (0 <= k);
if(and__3546__auto____8103)
{return (k < this__8102.cnt);
} else
{return and__3546__auto____8103;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__8104 = cljs.core.aclone.call(null,this__8102.tail);
(new_tail__8104[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8102.meta,this__8102.cnt,this__8102.shift,this__8102.root,new_tail__8104,null));
} else
{return (new cljs.core.PersistentVector(this__8102.meta,this__8102.cnt,this__8102.shift,cljs.core.do_assoc.call(null,coll,this__8102.shift,this__8102.root,k,v),this__8102.tail,null));
}
} else
{if((k === this__8102.cnt))
{return cljs.core._conj.call(null,coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__8102.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__8149 = null;
var G__8149__2 = (function (tsym8094,k){
var this__8105 = this;
var tsym8094__8106 = this;
var coll__8107 = tsym8094__8106;
return cljs.core._lookup.call(null,coll__8107,k);
});
var G__8149__3 = (function (tsym8095,k,not_found){
var this__8108 = this;
var tsym8095__8109 = this;
var coll__8110 = tsym8095__8109;
return cljs.core._lookup.call(null,coll__8110,k,not_found);
});
G__8149 = function(tsym8095,k,not_found){
switch(arguments.length){
case 2:
return G__8149__2.call(this,tsym8095,k);
case 3:
return G__8149__3.call(this,tsym8095,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8149;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (tsym8092,args8093){
return tsym8092.call.apply(tsym8092,[tsym8092].concat(cljs.core.aclone.call(null,args8093)));
});
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__8111 = this;
var step_init__8112 = [0,init];
var i__8113 = 0;
while(true){
if((i__8113 < this__8111.cnt))
{var arr__8114 = cljs.core.array_for.call(null,v,i__8113);
var len__8115 = arr__8114.length;
var init__8119 = (function (){var j__8116 = 0;
var init__8117 = (step_init__8112[1]);
while(true){
if((j__8116 < len__8115))
{var init__8118 = f.call(null,init__8117,(j__8116 + i__8113),(arr__8114[j__8116]));
if(cljs.core.reduced_QMARK_.call(null,init__8118))
{return init__8118;
} else
{{
var G__8150 = (j__8116 + 1);
var G__8151 = init__8118;
j__8116 = G__8150;
init__8117 = G__8151;
continue;
}
}
} else
{(step_init__8112[0] = len__8115);
(step_init__8112[1] = init__8117);
return init__8117;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8119))
{return cljs.core.deref.call(null,init__8119);
} else
{{
var G__8152 = (i__8113 + (step_init__8112[0]));
i__8113 = G__8152;
continue;
}
}
} else
{return (step_init__8112[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8120 = this;
if(((this__8120.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__8121 = cljs.core.aclone.call(null,this__8120.tail);
new_tail__8121.push(o);
return (new cljs.core.PersistentVector(this__8120.meta,(this__8120.cnt + 1),this__8120.shift,this__8120.root,new_tail__8121,null));
} else
{var root_overflow_QMARK___8122 = ((this__8120.cnt >>> 5) > (1 << this__8120.shift));
var new_shift__8123 = ((root_overflow_QMARK___8122)?(this__8120.shift + 5):this__8120.shift);
var new_root__8125 = ((root_overflow_QMARK___8122)?(function (){var n_r__8124 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__8124,0,this__8120.root);
cljs.core.pv_aset.call(null,n_r__8124,1,cljs.core.new_path.call(null,null,this__8120.shift,(new cljs.core.VectorNode(null,this__8120.tail))));
return n_r__8124;
})():cljs.core.push_tail.call(null,coll,this__8120.shift,this__8120.root,(new cljs.core.VectorNode(null,this__8120.tail))));
return (new cljs.core.PersistentVector(this__8120.meta,(this__8120.cnt + 1),new_shift__8123,new_root__8125,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__8126 = this;
return cljs.core._nth.call(null,coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__8127 = this;
return cljs.core._nth.call(null,coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__8128 = this;
var this$__8129 = this;
return cljs.core.pr_str.call(null,this$__8129);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8130 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8131 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8132 = this;
return cljs.core.vector_seq.call(null,coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8133 = this;
return this__8133.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8134 = this;
if((this__8134.cnt > 0))
{return cljs.core._nth.call(null,coll,(this__8134.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8135 = this;
if((this__8135.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8135.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8135.meta);
} else
{if((1 < (this__8135.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__8135.meta,(this__8135.cnt - 1),this__8135.shift,this__8135.root,this__8135.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__8136 = cljs.core.array_for.call(null,coll,(this__8135.cnt - 2));
var nr__8137 = cljs.core.pop_tail.call(null,coll,this__8135.shift,this__8135.root);
var new_root__8138 = (((nr__8137 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8137);
var cnt_1__8139 = (this__8135.cnt - 1);
if((function (){var and__3546__auto____8140 = (5 < this__8135.shift);
if(and__3546__auto____8140)
{return (cljs.core.pv_aget.call(null,new_root__8138,1) == null);
} else
{return and__3546__auto____8140;
}
})())
{return (new cljs.core.PersistentVector(this__8135.meta,cnt_1__8139,(this__8135.shift - 5),cljs.core.pv_aget.call(null,new_root__8138,0),new_tail__8136,null));
} else
{return (new cljs.core.PersistentVector(this__8135.meta,cnt_1__8139,this__8135.shift,new_root__8138,new_tail__8136,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8142 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8143 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8144 = this;
return (new cljs.core.PersistentVector(meta,this__8144.cnt,this__8144.shift,this__8144.root,this__8144.tail,this__8144.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8145 = this;
return this__8145.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8146 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8147 = this;
if((function (){var and__3546__auto____8148 = (0 <= n);
if(and__3546__auto____8148)
{return (n < this__8147.cnt);
} else
{return and__3546__auto____8148;
}
})())
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8141 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8141.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs){
var xs__8153 = cljs.core.seq.call(null,xs);
var out__8154 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.truth_(xs__8153))
{{
var G__8155 = cljs.core.next.call(null,xs__8153);
var G__8156 = cljs.core.conj_BANG_.call(null,out__8154,cljs.core.first.call(null,xs__8153));
xs__8153 = G__8155;
out__8154 = G__8156;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8154);
}
break;
}
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY,coll);
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
vector.cljs$lang$applyTo = (function (arglist__8157){
var args = cljs.core.seq(arglist__8157);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16200095;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8162 = this;
var h__2226__auto____8163 = this__8162.__hash;
if((h__2226__auto____8163 != null))
{return h__2226__auto____8163;
} else
{var h__2226__auto____8164 = cljs.core.hash_coll.call(null,coll);
this__8162.__hash = h__2226__auto____8164;
return h__2226__auto____8164;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8165 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8166 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__8167 = this;
var v_pos__8168 = (this__8167.start + key);
return (new cljs.core.Subvec(this__8167.meta,cljs.core._assoc.call(null,this__8167.v,v_pos__8168,val),this__8167.start,((this__8167.end > (v_pos__8168 + 1)) ? this__8167.end : (v_pos__8168 + 1)),null));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__8192 = null;
var G__8192__2 = (function (tsym8160,k){
var this__8169 = this;
var tsym8160__8170 = this;
var coll__8171 = tsym8160__8170;
return cljs.core._lookup.call(null,coll__8171,k);
});
var G__8192__3 = (function (tsym8161,k,not_found){
var this__8172 = this;
var tsym8161__8173 = this;
var coll__8174 = tsym8161__8173;
return cljs.core._lookup.call(null,coll__8174,k,not_found);
});
G__8192 = function(tsym8161,k,not_found){
switch(arguments.length){
case 2:
return G__8192__2.call(this,tsym8161,k);
case 3:
return G__8192__3.call(this,tsym8161,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8192;
})()
;
cljs.core.Subvec.prototype.apply = (function (tsym8158,args8159){
return tsym8158.call.apply(tsym8158,[tsym8158].concat(cljs.core.aclone.call(null,args8159)));
});
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8175 = this;
return (new cljs.core.Subvec(this__8175.meta,cljs.core._assoc_n.call(null,this__8175.v,this__8175.end,o),this__8175.start,(this__8175.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__8176 = this;
var this$__8177 = this;
return cljs.core.pr_str.call(null,this$__8177);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8178 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8179 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8180 = this;
var subvec_seq__8181 = (function subvec_seq(i){
if((i === this__8180.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8180.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});
return subvec_seq__8181.call(null,this__8180.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8182 = this;
return (this__8182.end - this__8182.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8183 = this;
return cljs.core._nth.call(null,this__8183.v,(this__8183.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8184 = this;
if((this__8184.start === this__8184.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8184.meta,this__8184.v,this__8184.start,(this__8184.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8185 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8186 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8187 = this;
return (new cljs.core.Subvec(meta,this__8187.v,this__8187.start,this__8187.end,this__8187.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8188 = this;
return this__8188.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8190 = this;
return cljs.core._nth.call(null,this__8190.v,(this__8190.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8191 = this;
return cljs.core._nth.call(null,this__8191.v,(this__8191.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8189 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8189.meta);
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
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,cljs.core.aclone.call(null,node.arr)));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},cljs.core.aclone.call(null,node.arr)));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__8193 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__8193,0,tl.length);
return ret__8193;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__8194 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__8195 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8194,subidx__8195,(((level === 5))?tail_node:(function (){var child__8196 = cljs.core.pv_aget.call(null,ret__8194,subidx__8195);
if((child__8196 != null))
{return tv_push_tail.call(null,tv,(level - 5),child__8196,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__8194;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__8197 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__8198 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8199 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__8197,subidx__8198));
if((function (){var and__3546__auto____8200 = (new_child__8199 == null);
if(and__3546__auto____8200)
{return (subidx__8198 === 0);
} else
{return and__3546__auto____8200;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__8197,subidx__8198,new_child__8199);
return node__8197;
}
} else
{if((subidx__8198 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__8197,subidx__8198,null);
return node__8197;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3546__auto____8201 = (0 <= i);
if(and__3546__auto____8201)
{return (i < tv.cnt);
} else
{return and__3546__auto____8201;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__8202 = tv.root;
var node__8203 = root__8202;
var level__8204 = tv.shift;
while(true){
if((level__8204 > 0))
{{
var G__8205 = cljs.core.tv_ensure_editable.call(null,root__8202.edit,cljs.core.pv_aget.call(null,node__8203,((i >>> level__8204) & 31)));
var G__8206 = (level__8204 - 5);
node__8203 = G__8205;
level__8204 = G__8206;
continue;
}
} else
{return node__8203.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 147;
this.cljs$lang$protocol_mask$partition1$ = 11;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.TransientVector");
});
cljs.core.TransientVector.prototype.cljs$core$IFn$ = true;
cljs.core.TransientVector.prototype.call = (function() {
var G__8244 = null;
var G__8244__2 = (function (tsym8209,k){
var this__8211 = this;
var tsym8209__8212 = this;
var coll__8213 = tsym8209__8212;
return cljs.core._lookup.call(null,coll__8213,k);
});
var G__8244__3 = (function (tsym8210,k,not_found){
var this__8214 = this;
var tsym8210__8215 = this;
var coll__8216 = tsym8210__8215;
return cljs.core._lookup.call(null,coll__8216,k,not_found);
});
G__8244 = function(tsym8210,k,not_found){
switch(arguments.length){
case 2:
return G__8244__2.call(this,tsym8210,k);
case 3:
return G__8244__3.call(this,tsym8210,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8244;
})()
;
cljs.core.TransientVector.prototype.apply = (function (tsym8207,args8208){
return tsym8207.call.apply(tsym8207,[tsym8207].concat(cljs.core.aclone.call(null,args8208)));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8217 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8218 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8219 = this;
if(cljs.core.truth_(this__8219.root.edit))
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8220 = this;
if((function (){var and__3546__auto____8221 = (0 <= n);
if(and__3546__auto____8221)
{return (n < this__8220.cnt);
} else
{return and__3546__auto____8221;
}
})())
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8222 = this;
if(cljs.core.truth_(this__8222.root.edit))
{return this__8222.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$ = true;
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__8223 = this;
if(cljs.core.truth_(this__8223.root.edit))
{if((function (){var and__3546__auto____8224 = (0 <= n);
if(and__3546__auto____8224)
{return (n < this__8223.cnt);
} else
{return and__3546__auto____8224;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__8223.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__8227 = (function go(level,node){
var node__8225 = cljs.core.tv_ensure_editable.call(null,this__8223.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__8225,(n & 31),val);
return node__8225;
} else
{var subidx__8226 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__8225,subidx__8226,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__8225,subidx__8226)));
return node__8225;
}
}).call(null,this__8223.shift,this__8223.root);
this__8223.root = new_root__8227;
return tcoll;
}
} else
{if((n === this__8223.cnt))
{return cljs.core._conj_BANG_.call(null,tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__8223.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__8228 = this;
if(cljs.core.truth_(this__8228.root.edit))
{if((this__8228.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8228.cnt))
{this__8228.cnt = 0;
return tcoll;
} else
{if((((this__8228.cnt - 1) & 31) > 0))
{this__8228.cnt = (this__8228.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__8229 = cljs.core.editable_array_for.call(null,tcoll,(this__8228.cnt - 2));
var new_root__8231 = (function (){var nr__8230 = cljs.core.tv_pop_tail.call(null,tcoll,this__8228.shift,this__8228.root);
if((nr__8230 != null))
{return nr__8230;
} else
{return (new cljs.core.VectorNode(this__8228.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3546__auto____8232 = (5 < this__8228.shift);
if(and__3546__auto____8232)
{return (cljs.core.pv_aget.call(null,new_root__8231,1) == null);
} else
{return and__3546__auto____8232;
}
})())
{var new_root__8233 = cljs.core.tv_ensure_editable.call(null,this__8228.root.edit,cljs.core.pv_aget.call(null,new_root__8231,0));
this__8228.root = new_root__8233;
this__8228.shift = (this__8228.shift - 5);
this__8228.cnt = (this__8228.cnt - 1);
this__8228.tail = new_tail__8229;
return tcoll;
} else
{this__8228.root = new_root__8231;
this__8228.cnt = (this__8228.cnt - 1);
this__8228.tail = new_tail__8229;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$ = true;
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8234 = this;
return cljs.core._assoc_n_BANG_.call(null,tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8235 = this;
if(cljs.core.truth_(this__8235.root.edit))
{if(((this__8235.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__8235.tail[(this__8235.cnt & 31)] = o);
this__8235.cnt = (this__8235.cnt + 1);
return tcoll;
} else
{var tail_node__8236 = (new cljs.core.VectorNode(this__8235.root.edit,this__8235.tail));
var new_tail__8237 = cljs.core.make_array.call(null,32);
(new_tail__8237[0] = o);
this__8235.tail = new_tail__8237;
if(((this__8235.cnt >>> 5) > (1 << this__8235.shift)))
{var new_root_array__8238 = cljs.core.make_array.call(null,32);
var new_shift__8239 = (this__8235.shift + 5);
(new_root_array__8238[0] = this__8235.root);
(new_root_array__8238[1] = cljs.core.new_path.call(null,this__8235.root.edit,this__8235.shift,tail_node__8236));
this__8235.root = (new cljs.core.VectorNode(this__8235.root.edit,new_root_array__8238));
this__8235.shift = new_shift__8239;
this__8235.cnt = (this__8235.cnt + 1);
return tcoll;
} else
{var new_root__8240 = cljs.core.tv_push_tail.call(null,tcoll,this__8235.shift,this__8235.root,tail_node__8236);
this__8235.root = new_root__8240;
this__8235.cnt = (this__8235.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8241 = this;
if(cljs.core.truth_(this__8241.root.edit))
{this__8241.root.edit = null;
var len__8242 = (this__8241.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__8243 = cljs.core.make_array.call(null,len__8242);
cljs.core.array_copy.call(null,this__8241.tail,0,trimmed_tail__8243,0,len__8242);
return (new cljs.core.PersistentVector(null,this__8241.cnt,this__8241.shift,this__8241.root,trimmed_tail__8243,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925324;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8245 = this;
var h__2226__auto____8246 = this__8245.__hash;
if((h__2226__auto____8246 != null))
{return h__2226__auto____8246;
} else
{var h__2226__auto____8247 = cljs.core.hash_coll.call(null,coll);
this__8245.__hash = h__2226__auto____8247;
return h__2226__auto____8247;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8248 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__8249 = this;
var this$__8250 = this;
return cljs.core.pr_str.call(null,this$__8250);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8251 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8252 = this;
return cljs.core._first.call(null,this__8252.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8253 = this;
var temp__3695__auto____8254 = cljs.core.next.call(null,this__8253.front);
if(cljs.core.truth_(temp__3695__auto____8254))
{var f1__8255 = temp__3695__auto____8254;
return (new cljs.core.PersistentQueueSeq(this__8253.meta,f1__8255,this__8253.rear,null));
} else
{if((this__8253.rear == null))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8253.meta,this__8253.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8256 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8257 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8257.front,this__8257.rear,this__8257.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8258 = this;
return this__8258.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8259 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8259.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15929422;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8260 = this;
var h__2226__auto____8261 = this__8260.__hash;
if((h__2226__auto____8261 != null))
{return h__2226__auto____8261;
} else
{var h__2226__auto____8262 = cljs.core.hash_coll.call(null,coll);
this__8260.__hash = h__2226__auto____8262;
return h__2226__auto____8262;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8263 = this;
if(cljs.core.truth_(this__8263.front))
{return (new cljs.core.PersistentQueue(this__8263.meta,(this__8263.count + 1),this__8263.front,cljs.core.conj.call(null,(function (){var or__3548__auto____8264 = this__8263.rear;
if(cljs.core.truth_(or__3548__auto____8264))
{return or__3548__auto____8264;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__8263.meta,(this__8263.count + 1),cljs.core.conj.call(null,this__8263.front,o),cljs.core.PersistentVector.fromArray([]),null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__8265 = this;
var this$__8266 = this;
return cljs.core.pr_str.call(null,this$__8266);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8267 = this;
var rear__8268 = cljs.core.seq.call(null,this__8267.rear);
if(cljs.core.truth_((function (){var or__3548__auto____8269 = this__8267.front;
if(cljs.core.truth_(or__3548__auto____8269))
{return or__3548__auto____8269;
} else
{return rear__8268;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8267.front,cljs.core.seq.call(null,rear__8268),null,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8270 = this;
return this__8270.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8271 = this;
return cljs.core._first.call(null,this__8271.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8272 = this;
if(cljs.core.truth_(this__8272.front))
{var temp__3695__auto____8273 = cljs.core.next.call(null,this__8272.front);
if(cljs.core.truth_(temp__3695__auto____8273))
{var f1__8274 = temp__3695__auto____8273;
return (new cljs.core.PersistentQueue(this__8272.meta,(this__8272.count - 1),f1__8274,this__8272.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__8272.meta,(this__8272.count - 1),cljs.core.seq.call(null,this__8272.rear),cljs.core.PersistentVector.fromArray([]),null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8275 = this;
return cljs.core.first.call(null,this__8275.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8276 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8277 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8278 = this;
return (new cljs.core.PersistentQueue(meta,this__8278.count,this__8278.front,this__8278.rear,this__8278.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8279 = this;
return this__8279.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8280 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.fromArray([]),0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1048576;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__8281 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__8282 = array.length;
var i__8283 = 0;
while(true){
if((i__8283 < len__8282))
{if(cljs.core._EQ_.call(null,k,(array[i__8283])))
{return i__8283;
} else
{{
var G__8284 = (i__8283 + incr);
i__8283 = G__8284;
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
var obj_map_contains_key_QMARK___2 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___4 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____8285 = goog.isString.call(null,k);
if(cljs.core.truth_(and__3546__auto____8285))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____8285;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case 2:
return obj_map_contains_key_QMARK___2.call(this,k,strobj);
case 4:
return obj_map_contains_key_QMARK___4.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
obj_map_contains_key_QMARK_.cljs$lang$arity$2 = obj_map_contains_key_QMARK___2;
obj_map_contains_key_QMARK_.cljs$lang$arity$4 = obj_map_contains_key_QMARK___4;
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__8286 = cljs.core.hash.call(null,a);
var b__8287 = cljs.core.hash.call(null,b);
if((a__8286 < b__8287))
{return -1;
} else
{if((a__8286 > b__8287))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__8289 = m.keys;
var len__8290 = ks__8289.length;
var so__8291 = m.strobj;
var out__8292 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__8293 = 0;
var out__8294 = cljs.core.transient$.call(null,out__8292);
while(true){
if((i__8293 < len__8290))
{var k__8295 = (ks__8289[i__8293]);
{
var G__8296 = (i__8293 + 1);
var G__8297 = cljs.core.assoc_BANG_.call(null,out__8294,k__8295,(so__8291[k__8295]));
i__8293 = G__8296;
out__8294 = G__8297;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__8294,k,v));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155021199;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8302 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8303 = this;
var h__2226__auto____8304 = this__8303.__hash;
if((h__2226__auto____8304 != null))
{return h__2226__auto____8304;
} else
{var h__2226__auto____8305 = cljs.core.hash_imap.call(null,coll);
this__8303.__hash = h__2226__auto____8305;
return h__2226__auto____8305;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8306 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8307 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__8307.strobj,(this__8307.strobj[k]),not_found);
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8308 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var overwrite_QMARK___8309 = this__8308.strobj.hasOwnProperty(k);
if(cljs.core.truth_(overwrite_QMARK___8309))
{var new_strobj__8310 = goog.object.clone.call(null,this__8308.strobj);
(new_strobj__8310[k] = v);
return (new cljs.core.ObjMap(this__8308.meta,this__8308.keys,new_strobj__8310,(this__8308.update_count + 1),null));
} else
{if((this__8308.update_count < cljs.core.ObjMap.HASHMAP_THRESHOLD))
{var new_strobj__8311 = goog.object.clone.call(null,this__8308.strobj);
var new_keys__8312 = cljs.core.aclone.call(null,this__8308.keys);
(new_strobj__8311[k] = v);
new_keys__8312.push(k);
return (new cljs.core.ObjMap(this__8308.meta,new_keys__8312,new_strobj__8311,(this__8308.update_count + 1),null));
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8313 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__8313.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__8333 = null;
var G__8333__2 = (function (tsym8300,k){
var this__8314 = this;
var tsym8300__8315 = this;
var coll__8316 = tsym8300__8315;
return cljs.core._lookup.call(null,coll__8316,k);
});
var G__8333__3 = (function (tsym8301,k,not_found){
var this__8317 = this;
var tsym8301__8318 = this;
var coll__8319 = tsym8301__8318;
return cljs.core._lookup.call(null,coll__8319,k,not_found);
});
G__8333 = function(tsym8301,k,not_found){
switch(arguments.length){
case 2:
return G__8333__2.call(this,tsym8301,k);
case 3:
return G__8333__3.call(this,tsym8301,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8333;
})()
;
cljs.core.ObjMap.prototype.apply = (function (tsym8298,args8299){
return tsym8298.call.apply(tsym8298,[tsym8298].concat(cljs.core.aclone.call(null,args8299)));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8320 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__8321 = this;
var this$__8322 = this;
return cljs.core.pr_str.call(null,this$__8322);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8323 = this;
if((this__8323.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__8288_SHARP_){
return cljs.core.vector.call(null,p1__8288_SHARP_,(this__8323.strobj[p1__8288_SHARP_]));
}),this__8323.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8324 = this;
return this__8324.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8325 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8326 = this;
return (new cljs.core.ObjMap(meta,this__8326.keys,this__8326.strobj,this__8326.update_count,this__8326.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8327 = this;
return this__8327.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8328 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8328.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8329 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8330 = goog.isString.call(null,k);
if(cljs.core.truth_(and__3546__auto____8330))
{return this__8329.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____8330;
}
})()))
{var new_keys__8331 = cljs.core.aclone.call(null,this__8329.keys);
var new_strobj__8332 = goog.object.clone.call(null,this__8329.strobj);
new_keys__8331.splice(cljs.core.scan_array.call(null,1,k,new_keys__8331),1);
cljs.core.js_delete.call(null,new_strobj__8332,k);
return (new cljs.core.ObjMap(this__8329.meta,new_keys__8331,new_strobj__8332,(this__8329.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 7537551;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8339 = this;
var h__2226__auto____8340 = this__8339.__hash;
if((h__2226__auto____8340 != null))
{return h__2226__auto____8340;
} else
{var h__2226__auto____8341 = cljs.core.hash_imap.call(null,coll);
this__8339.__hash = h__2226__auto____8341;
return h__2226__auto____8341;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8342 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8343 = this;
var bucket__8344 = (this__8343.hashobj[cljs.core.hash.call(null,k)]);
var i__8345 = (cljs.core.truth_(bucket__8344)?cljs.core.scan_array.call(null,2,k,bucket__8344):null);
if(cljs.core.truth_(i__8345))
{return (bucket__8344[(i__8345 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8346 = this;
var h__8347 = cljs.core.hash.call(null,k);
var bucket__8348 = (this__8346.hashobj[h__8347]);
if(cljs.core.truth_(bucket__8348))
{var new_bucket__8349 = cljs.core.aclone.call(null,bucket__8348);
var new_hashobj__8350 = goog.object.clone.call(null,this__8346.hashobj);
(new_hashobj__8350[h__8347] = new_bucket__8349);
var temp__3695__auto____8351 = cljs.core.scan_array.call(null,2,k,new_bucket__8349);
if(cljs.core.truth_(temp__3695__auto____8351))
{var i__8352 = temp__3695__auto____8351;
(new_bucket__8349[(i__8352 + 1)] = v);
return (new cljs.core.HashMap(this__8346.meta,this__8346.count,new_hashobj__8350,null));
} else
{new_bucket__8349.push(k,v);
return (new cljs.core.HashMap(this__8346.meta,(this__8346.count + 1),new_hashobj__8350,null));
}
} else
{var new_hashobj__8353 = goog.object.clone.call(null,this__8346.hashobj);
(new_hashobj__8353[h__8347] = [k,v]);
return (new cljs.core.HashMap(this__8346.meta,(this__8346.count + 1),new_hashobj__8353,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8354 = this;
var bucket__8355 = (this__8354.hashobj[cljs.core.hash.call(null,k)]);
var i__8356 = (cljs.core.truth_(bucket__8355)?cljs.core.scan_array.call(null,2,k,bucket__8355):null);
if(cljs.core.truth_(i__8356))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__8379 = null;
var G__8379__2 = (function (tsym8337,k){
var this__8357 = this;
var tsym8337__8358 = this;
var coll__8359 = tsym8337__8358;
return cljs.core._lookup.call(null,coll__8359,k);
});
var G__8379__3 = (function (tsym8338,k,not_found){
var this__8360 = this;
var tsym8338__8361 = this;
var coll__8362 = tsym8338__8361;
return cljs.core._lookup.call(null,coll__8362,k,not_found);
});
G__8379 = function(tsym8338,k,not_found){
switch(arguments.length){
case 2:
return G__8379__2.call(this,tsym8338,k);
case 3:
return G__8379__3.call(this,tsym8338,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8379;
})()
;
cljs.core.HashMap.prototype.apply = (function (tsym8335,args8336){
return tsym8335.call.apply(tsym8335,[tsym8335].concat(cljs.core.aclone.call(null,args8336)));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8363 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__8364 = this;
var this$__8365 = this;
return cljs.core.pr_str.call(null,this$__8365);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8366 = this;
if((this__8366.count > 0))
{var hashes__8367 = cljs.core.js_keys.call(null,this__8366.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__8334_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8366.hashobj[p1__8334_SHARP_])));
}),hashes__8367);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8368 = this;
return this__8368.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8369 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8370 = this;
return (new cljs.core.HashMap(meta,this__8370.count,this__8370.hashobj,this__8370.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8371 = this;
return this__8371.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8372 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8372.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8373 = this;
var h__8374 = cljs.core.hash.call(null,k);
var bucket__8375 = (this__8373.hashobj[h__8374]);
var i__8376 = (cljs.core.truth_(bucket__8375)?cljs.core.scan_array.call(null,2,k,bucket__8375):null);
if(cljs.core.not.call(null,i__8376))
{return coll;
} else
{var new_hashobj__8377 = goog.object.clone.call(null,this__8373.hashobj);
if((3 > bucket__8375.length))
{cljs.core.js_delete.call(null,new_hashobj__8377,h__8374);
} else
{var new_bucket__8378 = cljs.core.aclone.call(null,bucket__8375);
new_bucket__8378.splice(i__8376,2);
(new_hashobj__8377[h__8374] = new_bucket__8378);
}
return (new cljs.core.HashMap(this__8373.meta,(this__8373.count - 1),new_hashobj__8377,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8380 = ks.length;
var i__8381 = 0;
var out__8382 = cljs.core.HashMap.EMPTY;
while(true){
if((i__8381 < len__8380))
{{
var G__8383 = (i__8381 + 1);
var G__8384 = cljs.core.assoc.call(null,out__8382,(ks[i__8381]),(vs[i__8381]));
i__8381 = G__8383;
out__8382 = G__8384;
continue;
}
} else
{return out__8382;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__8385 = m.arr;
var len__8386 = arr__8385.length;
var i__8387 = 0;
while(true){
if((len__8386 <= i__8387))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__8385[i__8387]),k))
{return i__8387;
} else
{if("\uFDD0'else")
{{
var G__8388 = (i__8387 + 2);
i__8387 = G__8388;
continue;
}
} else
{return null;
}
}
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155545487;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8393 = this;
return (new cljs.core.TransientArrayMap({},this__8393.arr.length,cljs.core.aclone.call(null,this__8393.arr)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8394 = this;
var h__2226__auto____8395 = this__8394.__hash;
if((h__2226__auto____8395 != null))
{return h__2226__auto____8395;
} else
{var h__2226__auto____8396 = cljs.core.hash_imap.call(null,coll);
this__8394.__hash = h__2226__auto____8396;
return h__2226__auto____8396;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8397 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8398 = this;
var idx__8399 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8399 === -1))
{return not_found;
} else
{return (this__8398.arr[(idx__8399 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8400 = this;
var idx__8401 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8401 === -1))
{if((this__8400.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__8400.meta,(this__8400.cnt + 1),(function (){var G__8402__8403 = cljs.core.aclone.call(null,this__8400.arr);
G__8402__8403.push(k);
G__8402__8403.push(v);
return G__8402__8403;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__8400.arr[(idx__8401 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__8400.meta,this__8400.cnt,(function (){var G__8404__8405 = cljs.core.aclone.call(null,this__8400.arr);
(G__8404__8405[(idx__8401 + 1)] = v);
return G__8404__8405;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8406 = this;
return (cljs.core.array_map_index_of.call(null,coll,k) != -1);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__8436 = null;
var G__8436__2 = (function (tsym8391,k){
var this__8407 = this;
var tsym8391__8408 = this;
var coll__8409 = tsym8391__8408;
return cljs.core._lookup.call(null,coll__8409,k);
});
var G__8436__3 = (function (tsym8392,k,not_found){
var this__8410 = this;
var tsym8392__8411 = this;
var coll__8412 = tsym8392__8411;
return cljs.core._lookup.call(null,coll__8412,k,not_found);
});
G__8436 = function(tsym8392,k,not_found){
switch(arguments.length){
case 2:
return G__8436__2.call(this,tsym8392,k);
case 3:
return G__8436__3.call(this,tsym8392,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8436;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (tsym8389,args8390){
return tsym8389.call.apply(tsym8389,[tsym8389].concat(cljs.core.aclone.call(null,args8390)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8413 = this;
var len__8414 = this__8413.arr.length;
var i__8415 = 0;
var init__8416 = init;
while(true){
if((i__8415 < len__8414))
{var init__8417 = f.call(null,init__8416,(this__8413.arr[i__8415]),(this__8413.arr[(i__8415 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__8417))
{return cljs.core.deref.call(null,init__8417);
} else
{{
var G__8437 = (i__8415 + 2);
var G__8438 = init__8417;
i__8415 = G__8437;
init__8416 = G__8438;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8418 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__8419 = this;
var this$__8420 = this;
return cljs.core.pr_str.call(null,this$__8420);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8421 = this;
if((this__8421.cnt > 0))
{var len__8422 = this__8421.arr.length;
var array_map_seq__8423 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__8422))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__8421.arr[i]),(this__8421.arr[(i + 1)])]),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
})));
});
return array_map_seq__8423.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8424 = this;
return this__8424.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8425 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8426 = this;
return (new cljs.core.PersistentArrayMap(meta,this__8426.cnt,this__8426.arr,this__8426.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8427 = this;
return this__8427.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8428 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8428.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8429 = this;
var idx__8430 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8430 >= 0))
{var len__8431 = this__8429.arr.length;
var new_len__8432 = (len__8431 - 2);
if((new_len__8432 === 0))
{return cljs.core._empty.call(null,coll);
} else
{var new_arr__8433 = cljs.core.make_array.call(null,new_len__8432);
var s__8434 = 0;
var d__8435 = 0;
while(true){
if((s__8434 >= len__8431))
{return (new cljs.core.PersistentArrayMap(this__8429.meta,(this__8429.cnt - 1),new_arr__8433,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__8429.arr[s__8434])))
{{
var G__8439 = (s__8434 + 2);
var G__8440 = d__8435;
s__8434 = G__8439;
d__8435 = G__8440;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__8433[d__8435] = (this__8429.arr[s__8434]));
(new_arr__8433[(d__8435 + 1)] = (this__8429.arr[(s__8434 + 1)]));
{
var G__8441 = (s__8434 + 2);
var G__8442 = (d__8435 + 2);
s__8434 = G__8441;
d__8435 = G__8442;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__8443 = cljs.core.count.call(null,ks);
var i__8444 = 0;
var out__8445 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__8444 < len__8443))
{{
var G__8446 = (i__8444 + 1);
var G__8447 = cljs.core.assoc_BANG_.call(null,out__8445,(ks[i__8444]),(vs[i__8444]));
i__8444 = G__8446;
out__8445 = G__8447;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8445);
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 7;
this.cljs$lang$protocol_mask$partition0$ = 130;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__8448 = this;
if(cljs.core.truth_(this__8448.editable_QMARK_))
{var idx__8449 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8449 >= 0))
{(this__8448.arr[idx__8449] = (this__8448.arr[(this__8448.len - 2)]));
(this__8448.arr[(idx__8449 + 1)] = (this__8448.arr[(this__8448.len - 1)]));
var G__8450__8451 = this__8448.arr;
G__8450__8451.pop();
G__8450__8451.pop();
G__8450__8451;
this__8448.len = (this__8448.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8452 = this;
if(cljs.core.truth_(this__8452.editable_QMARK_))
{var idx__8453 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8453 === -1))
{if(((this__8452.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__8452.len = (this__8452.len + 2);
this__8452.arr.push(key);
this__8452.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__8452.len,this__8452.arr),key,val);
}
} else
{if((val === (this__8452.arr[(idx__8453 + 1)])))
{return tcoll;
} else
{(this__8452.arr[(idx__8453 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8454 = this;
if(cljs.core.truth_(this__8454.editable_QMARK_))
{if((function (){var G__8455__8456 = o;
if((G__8455__8456 != null))
{if((function (){var or__3548__auto____8457 = (G__8455__8456.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3548__auto____8457)
{return or__3548__auto____8457;
} else
{return G__8455__8456.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__8455__8456.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8455__8456);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8455__8456);
}
})())
{return cljs.core._assoc_BANG_.call(null,tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__8458 = cljs.core.seq.call(null,o);
var tcoll__8459 = tcoll;
while(true){
var temp__3695__auto____8460 = cljs.core.first.call(null,es__8458);
if(cljs.core.truth_(temp__3695__auto____8460))
{var e__8461 = temp__3695__auto____8460;
{
var G__8467 = cljs.core.next.call(null,es__8458);
var G__8468 = cljs.core._assoc_BANG_.call(null,tcoll__8459,cljs.core.key.call(null,e__8461),cljs.core.val.call(null,e__8461));
es__8458 = G__8467;
tcoll__8459 = G__8468;
continue;
}
} else
{return tcoll__8459;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8462 = this;
if(cljs.core.truth_(this__8462.editable_QMARK_))
{this__8462.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__8462.len,2),this__8462.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__8463 = this;
return cljs.core._lookup.call(null,tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__8464 = this;
if(cljs.core.truth_(this__8464.editable_QMARK_))
{var idx__8465 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__8465 === -1))
{return not_found;
} else
{return (this__8464.arr[(idx__8465 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__8466 = this;
if(cljs.core.truth_(this__8466.editable_QMARK_))
{return cljs.core.quot.call(null,this__8466.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
void 0;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__8469 = cljs.core.transient$.call(null,cljs.core.ObjMap.fromObject([],{}));
var i__8470 = 0;
while(true){
if((i__8470 < len))
{{
var G__8471 = cljs.core.assoc_BANG_.call(null,out__8469,(arr[i__8470]),(arr[(i__8470 + 1)]));
var G__8472 = (i__8470 + 2);
out__8469 = G__8471;
i__8470 = G__8472;
continue;
}
} else
{return out__8469;
}
break;
}
});
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__8473__8474 = cljs.core.aclone.call(null,arr);
(G__8473__8474[i] = a);
return G__8473__8474;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__8475__8476 = cljs.core.aclone.call(null,arr);
(G__8475__8476[i] = a);
(G__8475__8476[j] = b);
return G__8475__8476;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__8477 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__8477,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__8477,(2 * i),(new_arr__8477.length - (2 * i)));
return new_arr__8477;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__8478 = inode.ensure_editable(edit);
(editable__8478.arr[i] = a);
return editable__8478;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__8479 = inode.ensure_editable(edit);
(editable__8479.arr[i] = a);
(editable__8479.arr[j] = b);
return editable__8479;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__8480 = arr.length;
var i__8481 = 0;
var init__8482 = init;
while(true){
if((i__8481 < len__8480))
{var init__8485 = (function (){var k__8483 = (arr[i__8481]);
if((k__8483 != null))
{return f.call(null,init__8482,k__8483,(arr[(i__8481 + 1)]));
} else
{var node__8484 = (arr[(i__8481 + 1)]);
if((node__8484 != null))
{return node__8484.kv_reduce(f,init__8482);
} else
{return init__8482;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8485))
{return cljs.core.deref.call(null,init__8485);
} else
{{
var G__8486 = (i__8481 + 2);
var G__8487 = init__8485;
i__8481 = G__8486;
init__8482 = G__8487;
continue;
}
}
} else
{return init__8482;
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__8488 = this;
var inode__8489 = this;
if((this__8488.bitmap === bit))
{return null;
} else
{var editable__8490 = inode__8489.ensure_editable(e);
var earr__8491 = editable__8490.arr;
var len__8492 = earr__8491.length;
editable__8490.bitmap = (bit ^ editable__8490.bitmap);
cljs.core.array_copy.call(null,earr__8491,(2 * (i + 1)),earr__8491,(2 * i),(len__8492 - (2 * (i + 1))));
(earr__8491[(len__8492 - 2)] = null);
(earr__8491[(len__8492 - 1)] = null);
return editable__8490;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8493 = this;
var inode__8494 = this;
var bit__8495 = (1 << ((hash >>> shift) & 0x01f));
var idx__8496 = cljs.core.bitmap_indexed_node_index.call(null,this__8493.bitmap,bit__8495);
if(((this__8493.bitmap & bit__8495) === 0))
{var n__8497 = cljs.core.bit_count.call(null,this__8493.bitmap);
if(((2 * n__8497) < this__8493.arr.length))
{var editable__8498 = inode__8494.ensure_editable(edit);
var earr__8499 = editable__8498.arr;
(added_leaf_QMARK_[0] = true);
cljs.core.array_copy_downward.call(null,earr__8499,(2 * idx__8496),earr__8499,(2 * (idx__8496 + 1)),(2 * (n__8497 - idx__8496)));
(earr__8499[(2 * idx__8496)] = key);
(earr__8499[((2 * idx__8496) + 1)] = val);
editable__8498.bitmap = (editable__8498.bitmap | bit__8495);
return editable__8498;
} else
{if((n__8497 >= 16))
{var nodes__8500 = cljs.core.make_array.call(null,32);
var jdx__8501 = ((hash >>> shift) & 0x01f);
(nodes__8500[jdx__8501] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__8502 = 0;
var j__8503 = 0;
while(true){
if((i__8502 < 32))
{if((((this__8493.bitmap >>> i__8502) & 1) === 0))
{{
var G__8556 = (i__8502 + 1);
var G__8557 = j__8503;
i__8502 = G__8556;
j__8503 = G__8557;
continue;
}
} else
{(nodes__8500[i__8502] = (((null != (this__8493.arr[j__8503])))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__8493.arr[j__8503])),(this__8493.arr[j__8503]),(this__8493.arr[(j__8503 + 1)]),added_leaf_QMARK_):(this__8493.arr[(j__8503 + 1)])));
{
var G__8558 = (i__8502 + 1);
var G__8559 = (j__8503 + 2);
i__8502 = G__8558;
j__8503 = G__8559;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__8497 + 1),nodes__8500));
} else
{if("\uFDD0'else")
{var new_arr__8504 = cljs.core.make_array.call(null,(2 * (n__8497 + 4)));
cljs.core.array_copy.call(null,this__8493.arr,0,new_arr__8504,0,(2 * idx__8496));
(new_arr__8504[(2 * idx__8496)] = key);
(added_leaf_QMARK_[0] = true);
(new_arr__8504[((2 * idx__8496) + 1)] = val);
cljs.core.array_copy.call(null,this__8493.arr,(2 * idx__8496),new_arr__8504,(2 * (idx__8496 + 1)),(2 * (n__8497 - idx__8496)));
var editable__8505 = inode__8494.ensure_editable(edit);
editable__8505.arr = new_arr__8504;
editable__8505.bitmap = (editable__8505.bitmap | bit__8495);
return editable__8505;
} else
{return null;
}
}
}
} else
{var key_or_nil__8506 = (this__8493.arr[(2 * idx__8496)]);
var val_or_node__8507 = (this__8493.arr[((2 * idx__8496) + 1)]);
if((null == key_or_nil__8506))
{var n__8508 = val_or_node__8507.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8508 === val_or_node__8507))
{return inode__8494;
} else
{return cljs.core.edit_and_set.call(null,inode__8494,edit,((2 * idx__8496) + 1),n__8508);
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__8506))
{if((val === val_or_node__8507))
{return inode__8494;
} else
{return cljs.core.edit_and_set.call(null,inode__8494,edit,((2 * idx__8496) + 1),val);
}
} else
{if("\uFDD0'else")
{(added_leaf_QMARK_[0] = true);
return cljs.core.edit_and_set.call(null,inode__8494,edit,(2 * idx__8496),null,((2 * idx__8496) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__8506,val_or_node__8507,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__8509 = this;
var inode__8510 = this;
return cljs.core.create_inode_seq.call(null,this__8509.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8511 = this;
var inode__8512 = this;
var bit__8513 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8511.bitmap & bit__8513) === 0))
{return inode__8512;
} else
{var idx__8514 = cljs.core.bitmap_indexed_node_index.call(null,this__8511.bitmap,bit__8513);
var key_or_nil__8515 = (this__8511.arr[(2 * idx__8514)]);
var val_or_node__8516 = (this__8511.arr[((2 * idx__8514) + 1)]);
if((null == key_or_nil__8515))
{var n__8517 = val_or_node__8516.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__8517 === val_or_node__8516))
{return inode__8512;
} else
{if((null != n__8517))
{return cljs.core.edit_and_set.call(null,inode__8512,edit,((2 * idx__8514) + 1),n__8517);
} else
{if((this__8511.bitmap === bit__8513))
{return null;
} else
{if("\uFDD0'else")
{return inode__8512.edit_and_remove_pair(edit,bit__8513,idx__8514);
} else
{return null;
}
}
}
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__8515))
{(removed_leaf_QMARK_[0] = true);
return inode__8512.edit_and_remove_pair(edit,bit__8513,idx__8514);
} else
{if("\uFDD0'else")
{return inode__8512;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__8518 = this;
var inode__8519 = this;
if((e === this__8518.edit))
{return inode__8519;
} else
{var n__8520 = cljs.core.bit_count.call(null,this__8518.bitmap);
var new_arr__8521 = cljs.core.make_array.call(null,(((n__8520 < 0))?4:(2 * (n__8520 + 1))));
cljs.core.array_copy.call(null,this__8518.arr,0,new_arr__8521,0,(2 * n__8520));
return (new cljs.core.BitmapIndexedNode(e,this__8518.bitmap,new_arr__8521));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__8522 = this;
var inode__8523 = this;
return cljs.core.inode_kv_reduce.call(null,this__8522.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function() {
var G__8560 = null;
var G__8560__3 = (function (shift,hash,key){
var this__8524 = this;
var inode__8525 = this;
var bit__8526 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8524.bitmap & bit__8526) === 0))
{return null;
} else
{var idx__8527 = cljs.core.bitmap_indexed_node_index.call(null,this__8524.bitmap,bit__8526);
var key_or_nil__8528 = (this__8524.arr[(2 * idx__8527)]);
var val_or_node__8529 = (this__8524.arr[((2 * idx__8527) + 1)]);
if((null == key_or_nil__8528))
{return val_or_node__8529.inode_find((shift + 5),hash,key);
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__8528))
{return cljs.core.PersistentVector.fromArray([key_or_nil__8528,val_or_node__8529]);
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
});
var G__8560__4 = (function (shift,hash,key,not_found){
var this__8530 = this;
var inode__8531 = this;
var bit__8532 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8530.bitmap & bit__8532) === 0))
{return not_found;
} else
{var idx__8533 = cljs.core.bitmap_indexed_node_index.call(null,this__8530.bitmap,bit__8532);
var key_or_nil__8534 = (this__8530.arr[(2 * idx__8533)]);
var val_or_node__8535 = (this__8530.arr[((2 * idx__8533) + 1)]);
if((null == key_or_nil__8534))
{return val_or_node__8535.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__8534))
{return cljs.core.PersistentVector.fromArray([key_or_nil__8534,val_or_node__8535]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
G__8560 = function(shift,hash,key,not_found){
switch(arguments.length){
case 3:
return G__8560__3.call(this,shift,hash,key);
case 4:
return G__8560__4.call(this,shift,hash,key,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8560;
})()
;
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__8536 = this;
var inode__8537 = this;
var bit__8538 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8536.bitmap & bit__8538) === 0))
{return inode__8537;
} else
{var idx__8539 = cljs.core.bitmap_indexed_node_index.call(null,this__8536.bitmap,bit__8538);
var key_or_nil__8540 = (this__8536.arr[(2 * idx__8539)]);
var val_or_node__8541 = (this__8536.arr[((2 * idx__8539) + 1)]);
if((null == key_or_nil__8540))
{var n__8542 = val_or_node__8541.inode_without((shift + 5),hash,key);
if((n__8542 === val_or_node__8541))
{return inode__8537;
} else
{if((null != n__8542))
{return (new cljs.core.BitmapIndexedNode(null,this__8536.bitmap,cljs.core.clone_and_set.call(null,this__8536.arr,((2 * idx__8539) + 1),n__8542)));
} else
{if((this__8536.bitmap === bit__8538))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__8536.bitmap ^ bit__8538),cljs.core.remove_pair.call(null,this__8536.arr,idx__8539)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__8540))
{return (new cljs.core.BitmapIndexedNode(null,(this__8536.bitmap ^ bit__8538),cljs.core.remove_pair.call(null,this__8536.arr,idx__8539)));
} else
{if("\uFDD0'else")
{return inode__8537;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8543 = this;
var inode__8544 = this;
var bit__8545 = (1 << ((hash >>> shift) & 0x01f));
var idx__8546 = cljs.core.bitmap_indexed_node_index.call(null,this__8543.bitmap,bit__8545);
if(((this__8543.bitmap & bit__8545) === 0))
{var n__8547 = cljs.core.bit_count.call(null,this__8543.bitmap);
if((n__8547 >= 16))
{var nodes__8548 = cljs.core.make_array.call(null,32);
var jdx__8549 = ((hash >>> shift) & 0x01f);
(nodes__8548[jdx__8549] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__8550 = 0;
var j__8551 = 0;
while(true){
if((i__8550 < 32))
{if((((this__8543.bitmap >>> i__8550) & 1) === 0))
{{
var G__8561 = (i__8550 + 1);
var G__8562 = j__8551;
i__8550 = G__8561;
j__8551 = G__8562;
continue;
}
} else
{(nodes__8548[i__8550] = (((null != (this__8543.arr[j__8551])))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__8543.arr[j__8551])),(this__8543.arr[j__8551]),(this__8543.arr[(j__8551 + 1)]),added_leaf_QMARK_):(this__8543.arr[(j__8551 + 1)])));
{
var G__8563 = (i__8550 + 1);
var G__8564 = (j__8551 + 2);
i__8550 = G__8563;
j__8551 = G__8564;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__8547 + 1),nodes__8548));
} else
{var new_arr__8552 = cljs.core.make_array.call(null,(2 * (n__8547 + 1)));
cljs.core.array_copy.call(null,this__8543.arr,0,new_arr__8552,0,(2 * idx__8546));
(new_arr__8552[(2 * idx__8546)] = key);
(added_leaf_QMARK_[0] = true);
(new_arr__8552[((2 * idx__8546) + 1)] = val);
cljs.core.array_copy.call(null,this__8543.arr,(2 * idx__8546),new_arr__8552,(2 * (idx__8546 + 1)),(2 * (n__8547 - idx__8546)));
return (new cljs.core.BitmapIndexedNode(null,(this__8543.bitmap | bit__8545),new_arr__8552));
}
} else
{var key_or_nil__8553 = (this__8543.arr[(2 * idx__8546)]);
var val_or_node__8554 = (this__8543.arr[((2 * idx__8546) + 1)]);
if((null == key_or_nil__8553))
{var n__8555 = val_or_node__8554.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8555 === val_or_node__8554))
{return inode__8544;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__8543.bitmap,cljs.core.clone_and_set.call(null,this__8543.arr,((2 * idx__8546) + 1),n__8555)));
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__8553))
{if((val === val_or_node__8554))
{return inode__8544;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__8543.bitmap,cljs.core.clone_and_set.call(null,this__8543.arr,((2 * idx__8546) + 1),val)));
}
} else
{if("\uFDD0'else")
{(added_leaf_QMARK_[0] = true);
return (new cljs.core.BitmapIndexedNode(null,this__8543.bitmap,cljs.core.clone_and_set.call(null,this__8543.arr,(2 * idx__8546),null,((2 * idx__8546) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__8553,val_or_node__8554,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__8565 = array_node.arr;
var len__8566 = (2 * (array_node.cnt - 1));
var new_arr__8567 = cljs.core.make_array.call(null,len__8566);
var i__8568 = 0;
var j__8569 = 1;
var bitmap__8570 = 0;
while(true){
if((i__8568 < len__8566))
{if((function (){var and__3546__auto____8571 = (i__8568 != idx);
if(and__3546__auto____8571)
{return (null != (arr__8565[i__8568]));
} else
{return and__3546__auto____8571;
}
})())
{(new_arr__8567[j__8569] = (arr__8565[i__8568]));
{
var G__8572 = (i__8568 + 1);
var G__8573 = (j__8569 + 2);
var G__8574 = (bitmap__8570 | (1 << i__8568));
i__8568 = G__8572;
j__8569 = G__8573;
bitmap__8570 = G__8574;
continue;
}
} else
{{
var G__8575 = (i__8568 + 1);
var G__8576 = j__8569;
var G__8577 = bitmap__8570;
i__8568 = G__8575;
j__8569 = G__8576;
bitmap__8570 = G__8577;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__8570,new_arr__8567));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8578 = this;
var inode__8579 = this;
var idx__8580 = ((hash >>> shift) & 0x01f);
var node__8581 = (this__8578.arr[idx__8580]);
if((null == node__8581))
{return (new cljs.core.ArrayNode(null,(this__8578.cnt + 1),cljs.core.clone_and_set.call(null,this__8578.arr,idx__8580,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__8582 = node__8581.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8582 === node__8581))
{return inode__8579;
} else
{return (new cljs.core.ArrayNode(null,this__8578.cnt,cljs.core.clone_and_set.call(null,this__8578.arr,idx__8580,n__8582)));
}
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__8583 = this;
var inode__8584 = this;
var idx__8585 = ((hash >>> shift) & 0x01f);
var node__8586 = (this__8583.arr[idx__8585]);
if((null != node__8586))
{var n__8587 = node__8586.inode_without((shift + 5),hash,key);
if((n__8587 === node__8586))
{return inode__8584;
} else
{if((n__8587 == null))
{if((this__8583.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__8584,null,idx__8585);
} else
{return (new cljs.core.ArrayNode(null,(this__8583.cnt - 1),cljs.core.clone_and_set.call(null,this__8583.arr,idx__8585,n__8587)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__8583.cnt,cljs.core.clone_and_set.call(null,this__8583.arr,idx__8585,n__8587)));
} else
{return null;
}
}
}
} else
{return inode__8584;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function() {
var G__8619 = null;
var G__8619__3 = (function (shift,hash,key){
var this__8588 = this;
var inode__8589 = this;
var idx__8590 = ((hash >>> shift) & 0x01f);
var node__8591 = (this__8588.arr[idx__8590]);
if((null != node__8591))
{return node__8591.inode_find((shift + 5),hash,key);
} else
{return null;
}
});
var G__8619__4 = (function (shift,hash,key,not_found){
var this__8592 = this;
var inode__8593 = this;
var idx__8594 = ((hash >>> shift) & 0x01f);
var node__8595 = (this__8592.arr[idx__8594]);
if((null != node__8595))
{return node__8595.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
G__8619 = function(shift,hash,key,not_found){
switch(arguments.length){
case 3:
return G__8619__3.call(this,shift,hash,key);
case 4:
return G__8619__4.call(this,shift,hash,key,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8619;
})()
;
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__8596 = this;
var inode__8597 = this;
return cljs.core.create_array_node_seq.call(null,this__8596.arr);
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__8598 = this;
var inode__8599 = this;
if((e === this__8598.edit))
{return inode__8599;
} else
{return (new cljs.core.ArrayNode(e,this__8598.cnt,cljs.core.aclone.call(null,this__8598.arr)));
}
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8600 = this;
var inode__8601 = this;
var idx__8602 = ((hash >>> shift) & 0x01f);
var node__8603 = (this__8600.arr[idx__8602]);
if((null == node__8603))
{var editable__8604 = cljs.core.edit_and_set.call(null,inode__8601,edit,idx__8602,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__8604.cnt = (editable__8604.cnt + 1);
return editable__8604;
} else
{var n__8605 = node__8603.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8605 === node__8603))
{return inode__8601;
} else
{return cljs.core.edit_and_set.call(null,inode__8601,edit,idx__8602,n__8605);
}
}
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8606 = this;
var inode__8607 = this;
var idx__8608 = ((hash >>> shift) & 0x01f);
var node__8609 = (this__8606.arr[idx__8608]);
if((null == node__8609))
{return inode__8607;
} else
{var n__8610 = node__8609.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__8610 === node__8609))
{return inode__8607;
} else
{if((null == n__8610))
{if((this__8606.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__8607,edit,idx__8608);
} else
{var editable__8611 = cljs.core.edit_and_set.call(null,inode__8607,edit,idx__8608,n__8610);
editable__8611.cnt = (editable__8611.cnt - 1);
return editable__8611;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__8607,edit,idx__8608,n__8610);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__8612 = this;
var inode__8613 = this;
var len__8614 = this__8612.arr.length;
var i__8615 = 0;
var init__8616 = init;
while(true){
if((i__8615 < len__8614))
{var node__8617 = (this__8612.arr[i__8615]);
if((node__8617 != null))
{var init__8618 = node__8617.kv_reduce(f,init__8616);
if(cljs.core.reduced_QMARK_.call(null,init__8618))
{return cljs.core.deref.call(null,init__8618);
} else
{{
var G__8620 = (i__8615 + 1);
var G__8621 = init__8618;
i__8615 = G__8620;
init__8616 = G__8621;
continue;
}
}
} else
{return null;
}
} else
{return init__8616;
}
break;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__8622 = (2 * cnt);
var i__8623 = 0;
while(true){
if((i__8623 < lim__8622))
{if(cljs.core._EQ_.call(null,key,(arr[i__8623])))
{return i__8623;
} else
{{
var G__8624 = (i__8623 + 2);
i__8623 = G__8624;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8625 = this;
var inode__8626 = this;
if((hash === this__8625.collision_hash))
{var idx__8627 = cljs.core.hash_collision_node_find_index.call(null,this__8625.arr,this__8625.cnt,key);
if((idx__8627 === -1))
{var len__8628 = this__8625.arr.length;
var new_arr__8629 = cljs.core.make_array.call(null,(len__8628 + 2));
cljs.core.array_copy.call(null,this__8625.arr,0,new_arr__8629,0,len__8628);
(new_arr__8629[len__8628] = key);
(new_arr__8629[(len__8628 + 1)] = val);
(added_leaf_QMARK_[0] = true);
return (new cljs.core.HashCollisionNode(null,this__8625.collision_hash,(this__8625.cnt + 1),new_arr__8629));
} else
{if(cljs.core._EQ_.call(null,(this__8625.arr[idx__8627]),val))
{return inode__8626;
} else
{return (new cljs.core.HashCollisionNode(null,this__8625.collision_hash,this__8625.cnt,cljs.core.clone_and_set.call(null,this__8625.arr,(idx__8627 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__8625.collision_hash >>> shift) & 0x01f)),[null,inode__8626])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__8630 = this;
var inode__8631 = this;
var idx__8632 = cljs.core.hash_collision_node_find_index.call(null,this__8630.arr,this__8630.cnt,key);
if((idx__8632 === -1))
{return inode__8631;
} else
{if((this__8630.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__8630.collision_hash,(this__8630.cnt - 1),cljs.core.remove_pair.call(null,this__8630.arr,cljs.core.quot.call(null,idx__8632,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_find = (function() {
var G__8659 = null;
var G__8659__3 = (function (shift,hash,key){
var this__8633 = this;
var inode__8634 = this;
var idx__8635 = cljs.core.hash_collision_node_find_index.call(null,this__8633.arr,this__8633.cnt,key);
if((idx__8635 < 0))
{return null;
} else
{if(cljs.core._EQ_.call(null,key,(this__8633.arr[idx__8635])))
{return cljs.core.PersistentVector.fromArray([(this__8633.arr[idx__8635]),(this__8633.arr[(idx__8635 + 1)])]);
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
var G__8659__4 = (function (shift,hash,key,not_found){
var this__8636 = this;
var inode__8637 = this;
var idx__8638 = cljs.core.hash_collision_node_find_index.call(null,this__8636.arr,this__8636.cnt,key);
if((idx__8638 < 0))
{return not_found;
} else
{if(cljs.core._EQ_.call(null,key,(this__8636.arr[idx__8638])))
{return cljs.core.PersistentVector.fromArray([(this__8636.arr[idx__8638]),(this__8636.arr[(idx__8638 + 1)])]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
G__8659 = function(shift,hash,key,not_found){
switch(arguments.length){
case 3:
return G__8659__3.call(this,shift,hash,key);
case 4:
return G__8659__4.call(this,shift,hash,key,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8659;
})()
;
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__8639 = this;
var inode__8640 = this;
return cljs.core.create_inode_seq.call(null,this__8639.arr);
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function() {
var G__8660 = null;
var G__8660__1 = (function (e){
var this__8641 = this;
var inode__8642 = this;
if((e === this__8641.edit))
{return inode__8642;
} else
{var new_arr__8643 = cljs.core.make_array.call(null,(2 * (this__8641.cnt + 1)));
cljs.core.array_copy.call(null,this__8641.arr,0,new_arr__8643,0,(2 * this__8641.cnt));
return (new cljs.core.HashCollisionNode(e,this__8641.collision_hash,this__8641.cnt,new_arr__8643));
}
});
var G__8660__3 = (function (e,count,array){
var this__8644 = this;
var inode__8645 = this;
if((e === this__8644.edit))
{this__8644.arr = array;
this__8644.cnt = count;
return inode__8645;
} else
{return (new cljs.core.HashCollisionNode(this__8644.edit,this__8644.collision_hash,count,array));
}
});
G__8660 = function(e,count,array){
switch(arguments.length){
case 1:
return G__8660__1.call(this,e);
case 3:
return G__8660__3.call(this,e,count,array);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8660;
})()
;
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8646 = this;
var inode__8647 = this;
if((hash === this__8646.collision_hash))
{var idx__8648 = cljs.core.hash_collision_node_find_index.call(null,this__8646.arr,this__8646.cnt,key);
if((idx__8648 === -1))
{if((this__8646.arr.length > (2 * this__8646.cnt)))
{var editable__8649 = cljs.core.edit_and_set.call(null,inode__8647,edit,(2 * this__8646.cnt),key,((2 * this__8646.cnt) + 1),val);
(added_leaf_QMARK_[0] = true);
editable__8649.cnt = (editable__8649.cnt + 1);
return editable__8649;
} else
{var len__8650 = this__8646.arr.length;
var new_arr__8651 = cljs.core.make_array.call(null,(len__8650 + 2));
cljs.core.array_copy.call(null,this__8646.arr,0,new_arr__8651,0,len__8650);
(new_arr__8651[len__8650] = key);
(new_arr__8651[(len__8650 + 1)] = val);
(added_leaf_QMARK_[0] = true);
return inode__8647.ensure_editable(edit,(this__8646.cnt + 1),new_arr__8651);
}
} else
{if(((this__8646.arr[(idx__8648 + 1)]) === val))
{return inode__8647;
} else
{return cljs.core.edit_and_set.call(null,inode__8647,edit,(idx__8648 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__8646.collision_hash >>> shift) & 0x01f)),[null,inode__8647,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8652 = this;
var inode__8653 = this;
var idx__8654 = cljs.core.hash_collision_node_find_index.call(null,this__8652.arr,this__8652.cnt,key);
if((idx__8654 === -1))
{return inode__8653;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__8652.cnt === 1))
{return null;
} else
{var editable__8655 = inode__8653.ensure_editable(edit);
var earr__8656 = editable__8655.arr;
(earr__8656[idx__8654] = (earr__8656[((2 * this__8652.cnt) - 2)]));
(earr__8656[(idx__8654 + 1)] = (earr__8656[((2 * this__8652.cnt) - 1)]));
(earr__8656[((2 * this__8652.cnt) - 1)] = null);
(earr__8656[((2 * this__8652.cnt) - 2)] = null);
editable__8655.cnt = (editable__8655.cnt - 1);
return editable__8655;
}
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__8657 = this;
var inode__8658 = this;
return cljs.core.inode_kv_reduce.call(null,this__8657.arr,f,init);
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__8661 = cljs.core.hash.call(null,key1);
if((key1hash__8661 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__8661,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___8662 = [false];
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__8661,key1,val1,added_leaf_QMARK___8662).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___8662);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__8663 = cljs.core.hash.call(null,key1);
if((key1hash__8663 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__8663,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___8664 = [false];
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__8663,key1,val1,added_leaf_QMARK___8664).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___8664);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925324;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8665 = this;
var h__2226__auto____8666 = this__8665.__hash;
if((h__2226__auto____8666 != null))
{return h__2226__auto____8666;
} else
{var h__2226__auto____8667 = cljs.core.hash_coll.call(null,coll);
this__8665.__hash = h__2226__auto____8667;
return h__2226__auto____8667;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8668 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__8669 = this;
var this$__8670 = this;
return cljs.core.pr_str.call(null,this$__8670);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8671 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8672 = this;
if((this__8672.s == null))
{return cljs.core.PersistentVector.fromArray([(this__8672.nodes[this__8672.i]),(this__8672.nodes[(this__8672.i + 1)])]);
} else
{return cljs.core.first.call(null,this__8672.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8673 = this;
if((this__8673.s == null))
{return cljs.core.create_inode_seq.call(null,this__8673.nodes,(this__8673.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__8673.nodes,this__8673.i,cljs.core.next.call(null,this__8673.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8674 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8675 = this;
return (new cljs.core.NodeSeq(meta,this__8675.nodes,this__8675.i,this__8675.s,this__8675.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8676 = this;
return this__8676.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8677 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8677.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__8678 = nodes.length;
var j__8679 = i;
while(true){
if((j__8679 < len__8678))
{if((null != (nodes[j__8679])))
{return (new cljs.core.NodeSeq(null,nodes,j__8679,null,null));
} else
{var temp__3695__auto____8680 = (nodes[(j__8679 + 1)]);
if(cljs.core.truth_(temp__3695__auto____8680))
{var node__8681 = temp__3695__auto____8680;
var temp__3695__auto____8682 = node__8681.inode_seq();
if(cljs.core.truth_(temp__3695__auto____8682))
{var node_seq__8683 = temp__3695__auto____8682;
return (new cljs.core.NodeSeq(null,nodes,(j__8679 + 2),node_seq__8683,null));
} else
{{
var G__8684 = (j__8679 + 2);
j__8679 = G__8684;
continue;
}
}
} else
{{
var G__8685 = (j__8679 + 2);
j__8679 = G__8685;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925324;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8686 = this;
var h__2226__auto____8687 = this__8686.__hash;
if((h__2226__auto____8687 != null))
{return h__2226__auto____8687;
} else
{var h__2226__auto____8688 = cljs.core.hash_coll.call(null,coll);
this__8686.__hash = h__2226__auto____8688;
return h__2226__auto____8688;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8689 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__8690 = this;
var this$__8691 = this;
return cljs.core.pr_str.call(null,this$__8691);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8692 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8693 = this;
return cljs.core.first.call(null,this__8693.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8694 = this;
return cljs.core.create_array_node_seq.call(null,null,this__8694.nodes,this__8694.i,cljs.core.next.call(null,this__8694.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8695 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8696 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__8696.nodes,this__8696.i,this__8696.s,this__8696.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8697 = this;
return this__8697.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8698 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8698.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__8699 = nodes.length;
var j__8700 = i;
while(true){
if((j__8700 < len__8699))
{var temp__3695__auto____8701 = (nodes[j__8700]);
if(cljs.core.truth_(temp__3695__auto____8701))
{var nj__8702 = temp__3695__auto____8701;
var temp__3695__auto____8703 = nj__8702.inode_seq();
if(cljs.core.truth_(temp__3695__auto____8703))
{var ns__8704 = temp__3695__auto____8703;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__8700 + 1),ns__8704,null));
} else
{{
var G__8705 = (j__8700 + 1);
j__8700 = G__8705;
continue;
}
}
} else
{{
var G__8706 = (j__8700 + 1);
j__8700 = G__8706;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;
void 0;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155545487;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8711 = this;
return (new cljs.core.TransientHashMap({},this__8711.root,this__8711.cnt,this__8711.has_nil_QMARK_,this__8711.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8712 = this;
var h__2226__auto____8713 = this__8712.__hash;
if((h__2226__auto____8713 != null))
{return h__2226__auto____8713;
} else
{var h__2226__auto____8714 = cljs.core.hash_imap.call(null,coll);
this__8712.__hash = h__2226__auto____8714;
return h__2226__auto____8714;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8715 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8716 = this;
if((k == null))
{if(cljs.core.truth_(this__8716.has_nil_QMARK_))
{return this__8716.nil_val;
} else
{return not_found;
}
} else
{if((this__8716.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return cljs.core.nth.call(null,this__8716.root.inode_find(0,cljs.core.hash.call(null,k),k,[null,not_found]),1);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8717 = this;
if((k == null))
{if(cljs.core.truth_((function (){var and__3546__auto____8718 = this__8717.has_nil_QMARK_;
if(cljs.core.truth_(and__3546__auto____8718))
{return (v === this__8717.nil_val);
} else
{return and__3546__auto____8718;
}
})()))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8717.meta,(cljs.core.truth_(this__8717.has_nil_QMARK_)?this__8717.cnt:(this__8717.cnt + 1)),this__8717.root,true,v,null));
}
} else
{var added_leaf_QMARK___8719 = [false];
var new_root__8720 = (((this__8717.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__8717.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___8719);
if((new_root__8720 === this__8717.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8717.meta,(cljs.core.truth_((added_leaf_QMARK___8719[0]))?(this__8717.cnt + 1):this__8717.cnt),new_root__8720,this__8717.has_nil_QMARK_,this__8717.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8721 = this;
if((k == null))
{return this__8721.has_nil_QMARK_;
} else
{if((this__8721.root == null))
{return false;
} else
{if("\uFDD0'else")
{return cljs.core.not.call(null,(this__8721.root.inode_find(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__8742 = null;
var G__8742__2 = (function (tsym8709,k){
var this__8722 = this;
var tsym8709__8723 = this;
var coll__8724 = tsym8709__8723;
return cljs.core._lookup.call(null,coll__8724,k);
});
var G__8742__3 = (function (tsym8710,k,not_found){
var this__8725 = this;
var tsym8710__8726 = this;
var coll__8727 = tsym8710__8726;
return cljs.core._lookup.call(null,coll__8727,k,not_found);
});
G__8742 = function(tsym8710,k,not_found){
switch(arguments.length){
case 2:
return G__8742__2.call(this,tsym8710,k);
case 3:
return G__8742__3.call(this,tsym8710,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8742;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (tsym8707,args8708){
return tsym8707.call.apply(tsym8707,[tsym8707].concat(cljs.core.aclone.call(null,args8708)));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8728 = this;
var init__8729 = (cljs.core.truth_(this__8728.has_nil_QMARK_)?f.call(null,init,null,this__8728.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__8729))
{return cljs.core.deref.call(null,init__8729);
} else
{if((null != this__8728.root))
{return this__8728.root.kv_reduce(f,init__8729);
} else
{if("\uFDD0'else")
{return init__8729;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8730 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__8731 = this;
var this$__8732 = this;
return cljs.core.pr_str.call(null,this$__8732);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8733 = this;
if((this__8733.cnt > 0))
{var s__8734 = (((null != this__8733.root))?this__8733.root.inode_seq():null);
if(cljs.core.truth_(this__8733.has_nil_QMARK_))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__8733.nil_val]),s__8734);
} else
{return s__8734;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8735 = this;
return this__8735.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8736 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8737 = this;
return (new cljs.core.PersistentHashMap(meta,this__8737.cnt,this__8737.root,this__8737.has_nil_QMARK_,this__8737.nil_val,this__8737.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8738 = this;
return this__8738.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8739 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__8739.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8740 = this;
if((k == null))
{if(cljs.core.truth_(this__8740.has_nil_QMARK_))
{return (new cljs.core.PersistentHashMap(this__8740.meta,(this__8740.cnt - 1),this__8740.root,false,null,null));
} else
{return coll;
}
} else
{if((this__8740.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__8741 = this__8740.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__8741 === this__8740.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8740.meta,(this__8740.cnt - 1),new_root__8741,this__8740.has_nil_QMARK_,this__8740.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__8743 = ks.length;
var i__8744 = 0;
var out__8745 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__8744 < len__8743))
{{
var G__8746 = (i__8744 + 1);
var G__8747 = cljs.core.assoc_BANG_.call(null,out__8745,(ks[i__8744]),(vs[i__8744]));
i__8744 = G__8746;
out__8745 = G__8747;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8745);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 7;
this.cljs$lang$protocol_mask$partition0$ = 130;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__8748 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8749 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__8750 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8751 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__8752 = this;
if((k == null))
{if(cljs.core.truth_(this__8752.has_nil_QMARK_))
{return this__8752.nil_val;
} else
{return null;
}
} else
{if((this__8752.root == null))
{return null;
} else
{return cljs.core.nth.call(null,this__8752.root.inode_find(0,cljs.core.hash.call(null,k),k),1);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__8753 = this;
if((k == null))
{if(cljs.core.truth_(this__8753.has_nil_QMARK_))
{return this__8753.nil_val;
} else
{return not_found;
}
} else
{if((this__8753.root == null))
{return not_found;
} else
{return cljs.core.nth.call(null,this__8753.root.inode_find(0,cljs.core.hash.call(null,k),k,[null,not_found]),1);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8754 = this;
if(cljs.core.truth_(this__8754.edit))
{return this__8754.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__8755 = this;
var tcoll__8756 = this;
if(cljs.core.truth_(this__8755.edit))
{if((function (){var G__8757__8758 = o;
if((G__8757__8758 != null))
{if((function (){var or__3548__auto____8759 = (G__8757__8758.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3548__auto____8759)
{return or__3548__auto____8759;
} else
{return G__8757__8758.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__8757__8758.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8757__8758);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8757__8758);
}
})())
{return tcoll__8756.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__8760 = cljs.core.seq.call(null,o);
var tcoll__8761 = tcoll__8756;
while(true){
var temp__3695__auto____8762 = cljs.core.first.call(null,es__8760);
if(cljs.core.truth_(temp__3695__auto____8762))
{var e__8763 = temp__3695__auto____8762;
{
var G__8774 = cljs.core.next.call(null,es__8760);
var G__8775 = tcoll__8761.assoc_BANG_(cljs.core.key.call(null,e__8763),cljs.core.val.call(null,e__8763));
es__8760 = G__8774;
tcoll__8761 = G__8775;
continue;
}
} else
{return tcoll__8761;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__8764 = this;
var tcoll__8765 = this;
if(cljs.core.truth_(this__8764.edit))
{if((k == null))
{if((this__8764.nil_val === v))
{} else
{this__8764.nil_val = v;
}
if(cljs.core.truth_(this__8764.has_nil_QMARK_))
{} else
{this__8764.count = (this__8764.count + 1);
this__8764.has_nil_QMARK_ = true;
}
return tcoll__8765;
} else
{var added_leaf_QMARK___8766 = [false];
var node__8767 = (((this__8764.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__8764.root).inode_assoc_BANG_(this__8764.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___8766);
if((node__8767 === this__8764.root))
{} else
{this__8764.root = node__8767;
}
if(cljs.core.truth_((added_leaf_QMARK___8766[0])))
{this__8764.count = (this__8764.count + 1);
} else
{}
return tcoll__8765;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__8768 = this;
var tcoll__8769 = this;
if(cljs.core.truth_(this__8768.edit))
{if((k == null))
{if(cljs.core.truth_(this__8768.has_nil_QMARK_))
{this__8768.has_nil_QMARK_ = false;
this__8768.nil_val = null;
this__8768.count = (this__8768.count - 1);
return tcoll__8769;
} else
{return tcoll__8769;
}
} else
{if((this__8768.root == null))
{return tcoll__8769;
} else
{var removed_leaf_QMARK___8770 = [false];
var node__8771 = this__8768.root.inode_without_BANG_(this__8768.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___8770);
if((node__8771 === this__8768.root))
{} else
{this__8768.root = node__8771;
}
if(cljs.core.truth_((removed_leaf_QMARK___8770[0])))
{this__8768.count = (this__8768.count - 1);
} else
{}
return tcoll__8769;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__8772 = this;
var tcoll__8773 = this;
if(cljs.core.truth_(this__8772.edit))
{this__8772.edit = null;
return (new cljs.core.PersistentHashMap(null,this__8772.count,this__8772.root,this__8772.has_nil_QMARK_,this__8772.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__8776 = node;
var stack__8777 = stack;
while(true){
if((t__8776 != null))
{{
var G__8778 = (cljs.core.truth_(ascending_QMARK_)?t__8776.left:t__8776.right);
var G__8779 = cljs.core.conj.call(null,stack__8777,t__8776);
t__8776 = G__8778;
stack__8777 = G__8779;
continue;
}
} else
{return stack__8777;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925322;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8780 = this;
var h__2226__auto____8781 = this__8780.__hash;
if((h__2226__auto____8781 != null))
{return h__2226__auto____8781;
} else
{var h__2226__auto____8782 = cljs.core.hash_coll.call(null,coll);
this__8780.__hash = h__2226__auto____8782;
return h__2226__auto____8782;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8783 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__8784 = this;
var this$__8785 = this;
return cljs.core.pr_str.call(null,this$__8785);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8786 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8787 = this;
if((this__8787.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__8787.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__8788 = this;
return cljs.core.peek.call(null,this__8788.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__8789 = this;
var t__8790 = cljs.core.peek.call(null,this__8789.stack);
var next_stack__8791 = cljs.core.tree_map_seq_push.call(null,(cljs.core.truth_(this__8789.ascending_QMARK_)?t__8790.right:t__8790.left),cljs.core.pop.call(null,this__8789.stack),this__8789.ascending_QMARK_);
if((next_stack__8791 != null))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__8791,this__8789.ascending_QMARK_,(this__8789.cnt - 1),null));
} else
{return null;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8792 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8793 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__8793.stack,this__8793.ascending_QMARK_,this__8793.cnt,this__8793.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8794 = this;
return this__8794.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
void 0;
void 0;
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3546__auto____8795 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3546__auto____8795)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3546__auto____8795;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3546__auto____8796 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3546__auto____8796)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3546__auto____8796;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__8797 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__8797))
{return cljs.core.deref.call(null,init__8797);
} else
{var init__8798 = (((node.left != null))?tree_map_kv_reduce.call(null,node.left,f,init__8797):init__8797);
if(cljs.core.reduced_QMARK_.call(null,init__8798))
{return cljs.core.deref.call(null,init__8798);
} else
{var init__8799 = (((node.right != null))?tree_map_kv_reduce.call(null,node.right,f,init__8798):init__8798);
if(cljs.core.reduced_QMARK_.call(null,init__8799))
{return cljs.core.deref.call(null,init__8799);
} else
{return init__8799;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16201119;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$ = true;
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8804 = this;
var h__2226__auto____8805 = this__8804.__hash;
if((h__2226__auto____8805 != null))
{return h__2226__auto____8805;
} else
{var h__2226__auto____8806 = cljs.core.hash_coll.call(null,coll);
this__8804.__hash = h__2226__auto____8806;
return h__2226__auto____8806;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$ = true;
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__8807 = this;
return cljs.core._nth.call(null,node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__8808 = this;
return cljs.core._nth.call(null,node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$ = true;
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__8809 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__8809.key,this__8809.val]),k,v);
});
cljs.core.BlackNode.prototype.cljs$core$IFn$ = true;
cljs.core.BlackNode.prototype.call = (function() {
var G__8856 = null;
var G__8856__2 = (function (tsym8802,k){
var this__8810 = this;
var tsym8802__8811 = this;
var node__8812 = tsym8802__8811;
return cljs.core._lookup.call(null,node__8812,k);
});
var G__8856__3 = (function (tsym8803,k,not_found){
var this__8813 = this;
var tsym8803__8814 = this;
var node__8815 = tsym8803__8814;
return cljs.core._lookup.call(null,node__8815,k,not_found);
});
G__8856 = function(tsym8803,k,not_found){
switch(arguments.length){
case 2:
return G__8856__2.call(this,tsym8803,k);
case 3:
return G__8856__3.call(this,tsym8803,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8856;
})()
;
cljs.core.BlackNode.prototype.apply = (function (tsym8800,args8801){
return tsym8800.call.apply(tsym8800,[tsym8800].concat(cljs.core.aclone.call(null,args8801)));
});
cljs.core.BlackNode.prototype.cljs$core$ISequential$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICollection$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__8816 = this;
return cljs.core.PersistentVector.fromArray([this__8816.key,this__8816.val,o]);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$ = true;
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__8817 = this;
return this__8817.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__8818 = this;
return this__8818.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__8819 = this;
var node__8820 = this;
return ins.balance_right(node__8820);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__8821 = this;
var node__8822 = this;
return (new cljs.core.RedNode(this__8821.key,this__8821.val,this__8821.left,this__8821.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__8823 = this;
var node__8824 = this;
return cljs.core.balance_right_del.call(null,this__8823.key,this__8823.val,this__8823.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__8825 = this;
var node__8826 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__8827 = this;
var node__8828 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__8828,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__8829 = this;
var node__8830 = this;
return cljs.core.balance_left_del.call(null,this__8829.key,this__8829.val,del,this__8829.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__8831 = this;
var node__8832 = this;
return ins.balance_left(node__8832);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__8833 = this;
var node__8834 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__8834,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__8857 = null;
var G__8857__0 = (function (){
var this__8837 = this;
var this$__8838 = this;
return cljs.core.pr_str.call(null,this$__8838);
});
G__8857 = function(){
switch(arguments.length){
case 0:
return G__8857__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8857;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__8839 = this;
var node__8840 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__8840,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__8841 = this;
var node__8842 = this;
return node__8842;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$ = true;
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__8843 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__8844 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$ = true;
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__8845 = this;
return cljs.core.list.call(null,this__8845.key,this__8845.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__8847 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$ = true;
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__8848 = this;
return this__8848.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__8849 = this;
return cljs.core.PersistentVector.fromArray([this__8849.key]);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$ = true;
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__8850 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__8850.key,this__8850.val]),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$ = true;
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8851 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$ = true;
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__8852 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__8852.key,this__8852.val]),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$ = true;
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__8853 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$ = true;
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__8854 = this;
if((n === 0))
{return this__8854.key;
} else
{if((n === 1))
{return this__8854.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__8855 = this;
if((n === 0))
{return this__8855.key;
} else
{if((n === 1))
{return this__8855.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__8846 = this;
return cljs.core.PersistentVector.fromArray([]);
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16201119;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$ = true;
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8862 = this;
var h__2226__auto____8863 = this__8862.__hash;
if((h__2226__auto____8863 != null))
{return h__2226__auto____8863;
} else
{var h__2226__auto____8864 = cljs.core.hash_coll.call(null,coll);
this__8862.__hash = h__2226__auto____8864;
return h__2226__auto____8864;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$ = true;
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__8865 = this;
return cljs.core._nth.call(null,node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__8866 = this;
return cljs.core._nth.call(null,node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$ = true;
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__8867 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__8867.key,this__8867.val]),k,v);
});
cljs.core.RedNode.prototype.cljs$core$IFn$ = true;
cljs.core.RedNode.prototype.call = (function() {
var G__8914 = null;
var G__8914__2 = (function (tsym8860,k){
var this__8868 = this;
var tsym8860__8869 = this;
var node__8870 = tsym8860__8869;
return cljs.core._lookup.call(null,node__8870,k);
});
var G__8914__3 = (function (tsym8861,k,not_found){
var this__8871 = this;
var tsym8861__8872 = this;
var node__8873 = tsym8861__8872;
return cljs.core._lookup.call(null,node__8873,k,not_found);
});
G__8914 = function(tsym8861,k,not_found){
switch(arguments.length){
case 2:
return G__8914__2.call(this,tsym8861,k);
case 3:
return G__8914__3.call(this,tsym8861,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8914;
})()
;
cljs.core.RedNode.prototype.apply = (function (tsym8858,args8859){
return tsym8858.call.apply(tsym8858,[tsym8858].concat(cljs.core.aclone.call(null,args8859)));
});
cljs.core.RedNode.prototype.cljs$core$ISequential$ = true;
cljs.core.RedNode.prototype.cljs$core$ICollection$ = true;
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__8874 = this;
return cljs.core.PersistentVector.fromArray([this__8874.key,this__8874.val,o]);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$ = true;
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__8875 = this;
return this__8875.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__8876 = this;
return this__8876.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__8877 = this;
var node__8878 = this;
return (new cljs.core.RedNode(this__8877.key,this__8877.val,this__8877.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__8879 = this;
var node__8880 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__8881 = this;
var node__8882 = this;
return (new cljs.core.RedNode(this__8881.key,this__8881.val,this__8881.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__8883 = this;
var node__8884 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__8885 = this;
var node__8886 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__8886,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__8887 = this;
var node__8888 = this;
return (new cljs.core.RedNode(this__8887.key,this__8887.val,del,this__8887.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__8889 = this;
var node__8890 = this;
return (new cljs.core.RedNode(this__8889.key,this__8889.val,ins,this__8889.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__8891 = this;
var node__8892 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8891.left))
{return (new cljs.core.RedNode(this__8891.key,this__8891.val,this__8891.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__8891.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8891.right))
{return (new cljs.core.RedNode(this__8891.right.key,this__8891.right.val,(new cljs.core.BlackNode(this__8891.key,this__8891.val,this__8891.left,this__8891.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__8891.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__8892,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__8915 = null;
var G__8915__0 = (function (){
var this__8895 = this;
var this$__8896 = this;
return cljs.core.pr_str.call(null,this$__8896);
});
G__8915 = function(){
switch(arguments.length){
case 0:
return G__8915__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8915;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__8897 = this;
var node__8898 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8897.right))
{return (new cljs.core.RedNode(this__8897.key,this__8897.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__8897.left,null)),this__8897.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8897.left))
{return (new cljs.core.RedNode(this__8897.left.key,this__8897.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__8897.left.left,null)),(new cljs.core.BlackNode(this__8897.key,this__8897.val,this__8897.left.right,this__8897.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__8898,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__8899 = this;
var node__8900 = this;
return (new cljs.core.BlackNode(this__8899.key,this__8899.val,this__8899.left,this__8899.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$ = true;
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__8901 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__8902 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$ = true;
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__8903 = this;
return cljs.core.list.call(null,this__8903.key,this__8903.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$ = true;
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__8905 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$ = true;
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__8906 = this;
return this__8906.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__8907 = this;
return cljs.core.PersistentVector.fromArray([this__8907.key]);
});
cljs.core.RedNode.prototype.cljs$core$IVector$ = true;
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__8908 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__8908.key,this__8908.val]),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$ = true;
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8909 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$ = true;
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__8910 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__8910.key,this__8910.val]),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$ = true;
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__8911 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$ = true;
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__8912 = this;
if((n === 0))
{return this__8912.key;
} else
{if((n === 1))
{return this__8912.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__8913 = this;
if((n === 0))
{return this__8913.key;
} else
{if((n === 1))
{return this__8913.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__8904 = this;
return cljs.core.PersistentVector.fromArray([]);
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__8916 = comp.call(null,k,tree.key);
if((c__8916 === 0))
{(found[0] = tree);
return null;
} else
{if((c__8916 < 0))
{var ins__8917 = tree_map_add.call(null,comp,tree.left,k,v,found);
if((ins__8917 != null))
{return tree.add_left(ins__8917);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__8918 = tree_map_add.call(null,comp,tree.right,k,v,found);
if((ins__8918 != null))
{return tree.add_right(ins__8918);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__8919 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__8919))
{return (new cljs.core.RedNode(app__8919.key,app__8919.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__8919.left)),(new cljs.core.RedNode(right.key,right.val,app__8919.right,right.right)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__8919,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__8920 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__8920))
{return (new cljs.core.RedNode(app__8920.key,app__8920.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__8920.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__8920.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__8920,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if((tree != null))
{var c__8921 = comp.call(null,k,tree.key);
if((c__8921 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__8921 < 0))
{var del__8922 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3548__auto____8923 = (del__8922 != null);
if(or__3548__auto____8923)
{return or__3548__auto____8923;
} else
{return ((found[0]) != null);
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__8922,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__8922,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__8924 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3548__auto____8925 = (del__8924 != null);
if(or__3548__auto____8925)
{return or__3548__auto____8925;
} else
{return ((found[0]) != null);
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__8924);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__8924,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__8926 = tree.key;
var c__8927 = comp.call(null,k,tk__8926);
if((c__8927 === 0))
{return tree.replace(tk__8926,v,tree.left,tree.right);
} else
{if((c__8927 < 0))
{return tree.replace(tk__8926,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__8926,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 209388431;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8932 = this;
var h__2226__auto____8933 = this__8932.__hash;
if((h__2226__auto____8933 != null))
{return h__2226__auto____8933;
} else
{var h__2226__auto____8934 = cljs.core.hash_imap.call(null,coll);
this__8932.__hash = h__2226__auto____8934;
return h__2226__auto____8934;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8935 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8936 = this;
var n__8937 = coll.entry_at(k);
if((n__8937 != null))
{return n__8937.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8938 = this;
var found__8939 = [null];
var t__8940 = cljs.core.tree_map_add.call(null,this__8938.comp,this__8938.tree,k,v,found__8939);
if((t__8940 == null))
{var found_node__8941 = cljs.core.nth.call(null,found__8939,0);
if(cljs.core._EQ_.call(null,v,found_node__8941.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__8938.comp,cljs.core.tree_map_replace.call(null,this__8938.comp,this__8938.tree,k,v),this__8938.cnt,this__8938.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__8938.comp,t__8940.blacken(),(this__8938.cnt + 1),this__8938.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8942 = this;
return (coll.entry_at(k) != null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__8974 = null;
var G__8974__2 = (function (tsym8930,k){
var this__8943 = this;
var tsym8930__8944 = this;
var coll__8945 = tsym8930__8944;
return cljs.core._lookup.call(null,coll__8945,k);
});
var G__8974__3 = (function (tsym8931,k,not_found){
var this__8946 = this;
var tsym8931__8947 = this;
var coll__8948 = tsym8931__8947;
return cljs.core._lookup.call(null,coll__8948,k,not_found);
});
G__8974 = function(tsym8931,k,not_found){
switch(arguments.length){
case 2:
return G__8974__2.call(this,tsym8931,k);
case 3:
return G__8974__3.call(this,tsym8931,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8974;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (tsym8928,args8929){
return tsym8928.call.apply(tsym8928,[tsym8928].concat(cljs.core.aclone.call(null,args8929)));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8949 = this;
if((this__8949.tree != null))
{return cljs.core.tree_map_kv_reduce.call(null,this__8949.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8950 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8951 = this;
if((this__8951.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__8951.tree,false,this__8951.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__8952 = this;
var this$__8953 = this;
return cljs.core.pr_str.call(null,this$__8953);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__8954 = this;
var coll__8955 = this;
var t__8956 = this__8954.tree;
while(true){
if((t__8956 != null))
{var c__8957 = this__8954.comp.call(null,k,t__8956.key);
if((c__8957 === 0))
{return t__8956;
} else
{if((c__8957 < 0))
{{
var G__8975 = t__8956.left;
t__8956 = G__8975;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__8976 = t__8956.right;
t__8956 = G__8976;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__8958 = this;
if((this__8958.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__8958.tree,ascending_QMARK_,this__8958.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__8959 = this;
if((this__8959.cnt > 0))
{var stack__8960 = null;
var t__8961 = this__8959.tree;
while(true){
if((t__8961 != null))
{var c__8962 = this__8959.comp.call(null,k,t__8961.key);
if((c__8962 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__8960,t__8961),ascending_QMARK_,-1));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__8962 < 0))
{{
var G__8977 = cljs.core.conj.call(null,stack__8960,t__8961);
var G__8978 = t__8961.left;
stack__8960 = G__8977;
t__8961 = G__8978;
continue;
}
} else
{{
var G__8979 = stack__8960;
var G__8980 = t__8961.right;
stack__8960 = G__8979;
t__8961 = G__8980;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__8962 > 0))
{{
var G__8981 = cljs.core.conj.call(null,stack__8960,t__8961);
var G__8982 = t__8961.right;
stack__8960 = G__8981;
t__8961 = G__8982;
continue;
}
} else
{{
var G__8983 = stack__8960;
var G__8984 = t__8961.left;
stack__8960 = G__8983;
t__8961 = G__8984;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__8960 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__8960,ascending_QMARK_,-1));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__8963 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__8964 = this;
return this__8964.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8965 = this;
if((this__8965.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__8965.tree,true,this__8965.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8966 = this;
return this__8966.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8967 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8968 = this;
return (new cljs.core.PersistentTreeMap(this__8968.comp,this__8968.tree,this__8968.cnt,meta,this__8968.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8972 = this;
return this__8972.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8973 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__8973.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8969 = this;
var found__8970 = [null];
var t__8971 = cljs.core.tree_map_remove.call(null,this__8969.comp,this__8969.tree,k,found__8970);
if((t__8971 == null))
{if((cljs.core.nth.call(null,found__8970,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__8969.comp,null,0,this__8969.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__8969.comp,t__8971.blacken(),(this__8969.cnt - 1),this__8969.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__8985 = cljs.core.seq.call(null,keyvals);
var out__8986 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(cljs.core.truth_(in$__8985))
{{
var G__8987 = cljs.core.nnext.call(null,in$__8985);
var G__8988 = cljs.core.assoc_BANG_.call(null,out__8986,cljs.core.first.call(null,in$__8985),cljs.core.second.call(null,in$__8985));
in$__8985 = G__8987;
out__8986 = G__8988;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8986);
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
hash_map.cljs$lang$applyTo = (function (arglist__8989){
var keyvals = cljs.core.seq(arglist__8989);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__8990){
var keyvals = cljs.core.seq(arglist__8990);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in$__8991 = cljs.core.seq.call(null,keyvals);
var out__8992 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(cljs.core.truth_(in$__8991))
{{
var G__8993 = cljs.core.nnext.call(null,in$__8991);
var G__8994 = cljs.core.assoc.call(null,out__8992,cljs.core.first.call(null,in$__8991),cljs.core.second.call(null,in$__8991));
in$__8991 = G__8993;
out__8992 = G__8994;
continue;
}
} else
{return out__8992;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__8995){
var keyvals = cljs.core.seq(arglist__8995);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in$__8996 = cljs.core.seq.call(null,keyvals);
var out__8997 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(cljs.core.truth_(in$__8996))
{{
var G__8998 = cljs.core.nnext.call(null,in$__8996);
var G__8999 = cljs.core.assoc.call(null,out__8997,cljs.core.first.call(null,in$__8996),cljs.core.second.call(null,in$__8996));
in$__8996 = G__8998;
out__8997 = G__8999;
continue;
}
} else
{return out__8997;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__9000){
var comparator = cljs.core.first(arglist__9000);
var keyvals = cljs.core.rest(arglist__9000);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
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
{return cljs.core.reduce.call(null,(function (p1__9001_SHARP_,p2__9002_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____9003 = p1__9001_SHARP_;
if(cljs.core.truth_(or__3548__auto____9003))
{return or__3548__auto____9003;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__9002_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__9004){
var maps = cljs.core.seq(arglist__9004);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
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
{var merge_entry__9007 = (function (m,e){
var k__9005 = cljs.core.first.call(null,e);
var v__9006 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__9005))
{return cljs.core.assoc.call(null,m,k__9005,f.call(null,cljs.core.get.call(null,m,k__9005),v__9006));
} else
{return cljs.core.assoc.call(null,m,k__9005,v__9006);
}
});
var merge2__9009 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9007,(function (){var or__3548__auto____9008 = m1;
if(cljs.core.truth_(or__3548__auto____9008))
{return or__3548__auto____9008;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__9009,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__9010){
var f = cljs.core.first(arglist__9010);
var maps = cljs.core.rest(arglist__9010);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__9011 = cljs.core.ObjMap.fromObject([],{});
var keys__9012 = cljs.core.seq.call(null,keyseq);
while(true){
if(cljs.core.truth_(keys__9012))
{var key__9013 = cljs.core.first.call(null,keys__9012);
var entry__9014 = cljs.core.get.call(null,map,key__9013,"\uFDD0'torrent-client.server/not-found");
{
var G__9015 = ((cljs.core.not_EQ_.call(null,entry__9014,"\uFDD0'torrent-client.server/not-found"))?cljs.core.assoc.call(null,ret__9011,key__9013,entry__9014):ret__9011);
var G__9016 = cljs.core.next.call(null,keys__9012);
ret__9011 = G__9015;
keys__9012 = G__9016;
continue;
}
} else
{return ret__9011;
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155022479;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9022 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__9022.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9023 = this;
var h__2226__auto____9024 = this__9023.__hash;
if((h__2226__auto____9024 != null))
{return h__2226__auto____9024;
} else
{var h__2226__auto____9025 = cljs.core.hash_iset.call(null,coll);
this__9023.__hash = h__2226__auto____9025;
return h__2226__auto____9025;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9026 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9027 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9027.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__9046 = null;
var G__9046__2 = (function (tsym9020,k){
var this__9028 = this;
var tsym9020__9029 = this;
var coll__9030 = tsym9020__9029;
return cljs.core._lookup.call(null,coll__9030,k);
});
var G__9046__3 = (function (tsym9021,k,not_found){
var this__9031 = this;
var tsym9021__9032 = this;
var coll__9033 = tsym9021__9032;
return cljs.core._lookup.call(null,coll__9033,k,not_found);
});
G__9046 = function(tsym9021,k,not_found){
switch(arguments.length){
case 2:
return G__9046__2.call(this,tsym9021,k);
case 3:
return G__9046__3.call(this,tsym9021,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9046;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (tsym9018,args9019){
return tsym9018.call.apply(tsym9018,[tsym9018].concat(cljs.core.aclone.call(null,args9019)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9034 = this;
return (new cljs.core.PersistentHashSet(this__9034.meta,cljs.core.assoc.call(null,this__9034.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__9035 = this;
var this$__9036 = this;
return cljs.core.pr_str.call(null,this$__9036);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9037 = this;
return cljs.core.keys.call(null,this__9037.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9038 = this;
return (new cljs.core.PersistentHashSet(this__9038.meta,cljs.core.dissoc.call(null,this__9038.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9039 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9040 = this;
var and__3546__auto____9041 = cljs.core.set_QMARK_.call(null,other);
if(and__3546__auto____9041)
{var and__3546__auto____9042 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3546__auto____9042)
{return cljs.core.every_QMARK_.call(null,(function (p1__9017_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9017_SHARP_);
}),other);
} else
{return and__3546__auto____9042;
}
} else
{return and__3546__auto____9041;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9043 = this;
return (new cljs.core.PersistentHashSet(meta,this__9043.hash_map,this__9043.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9044 = this;
return this__9044.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9045 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__9045.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 131;
this.cljs$lang$protocol_mask$partition1$ = 17;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.TransientHashSet");
});
cljs.core.TransientHashSet.prototype.cljs$core$IFn$ = true;
cljs.core.TransientHashSet.prototype.call = (function() {
var G__9064 = null;
var G__9064__2 = (function (tsym9050,k){
var this__9052 = this;
var tsym9050__9053 = this;
var tcoll__9054 = tsym9050__9053;
if((cljs.core._lookup.call(null,this__9052.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__9064__3 = (function (tsym9051,k,not_found){
var this__9055 = this;
var tsym9051__9056 = this;
var tcoll__9057 = tsym9051__9056;
if((cljs.core._lookup.call(null,this__9055.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__9064 = function(tsym9051,k,not_found){
switch(arguments.length){
case 2:
return G__9064__2.call(this,tsym9051,k);
case 3:
return G__9064__3.call(this,tsym9051,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9064;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (tsym9048,args9049){
return tsym9048.call.apply(tsym9048,[tsym9048].concat(cljs.core.aclone.call(null,args9049)));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__9058 = this;
return cljs.core._lookup.call(null,tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__9059 = this;
if((cljs.core._lookup.call(null,this__9059.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9060 = this;
return cljs.core.count.call(null,this__9060.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__9061 = this;
this__9061.transient_map = cljs.core.dissoc_BANG_.call(null,this__9061.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9062 = this;
this__9062.transient_map = cljs.core.assoc_BANG_.call(null,this__9062.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9063 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__9063.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 208865423;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9069 = this;
var h__2226__auto____9070 = this__9069.__hash;
if((h__2226__auto____9070 != null))
{return h__2226__auto____9070;
} else
{var h__2226__auto____9071 = cljs.core.hash_iset.call(null,coll);
this__9069.__hash = h__2226__auto____9071;
return h__2226__auto____9071;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9072 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9073 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9073.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__9097 = null;
var G__9097__2 = (function (tsym9067,k){
var this__9074 = this;
var tsym9067__9075 = this;
var coll__9076 = tsym9067__9075;
return cljs.core._lookup.call(null,coll__9076,k);
});
var G__9097__3 = (function (tsym9068,k,not_found){
var this__9077 = this;
var tsym9068__9078 = this;
var coll__9079 = tsym9068__9078;
return cljs.core._lookup.call(null,coll__9079,k,not_found);
});
G__9097 = function(tsym9068,k,not_found){
switch(arguments.length){
case 2:
return G__9097__2.call(this,tsym9068,k);
case 3:
return G__9097__3.call(this,tsym9068,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9097;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (tsym9065,args9066){
return tsym9065.call.apply(tsym9065,[tsym9065].concat(cljs.core.aclone.call(null,args9066)));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9080 = this;
return (new cljs.core.PersistentTreeSet(this__9080.meta,cljs.core.assoc.call(null,this__9080.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9081 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__9081.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__9082 = this;
var this$__9083 = this;
return cljs.core.pr_str.call(null,this$__9083);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9084 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__9084.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9085 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__9085.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9086 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9087 = this;
return cljs.core._comparator.call(null,this__9087.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9088 = this;
return cljs.core.keys.call(null,this__9088.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9089 = this;
return (new cljs.core.PersistentTreeSet(this__9089.meta,cljs.core.dissoc.call(null,this__9089.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9090 = this;
return cljs.core.count.call(null,this__9090.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9091 = this;
var and__3546__auto____9092 = cljs.core.set_QMARK_.call(null,other);
if(and__3546__auto____9092)
{var and__3546__auto____9093 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3546__auto____9093)
{return cljs.core.every_QMARK_.call(null,(function (p1__9047_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9047_SHARP_);
}),other);
} else
{return and__3546__auto____9093;
}
} else
{return and__3546__auto____9092;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9094 = this;
return (new cljs.core.PersistentTreeSet(meta,this__9094.tree_map,this__9094.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9095 = this;
return this__9095.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9096 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__9096.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__9098 = cljs.core.seq.call(null,coll);
var out__9099 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,in$__9098)))
{{
var G__9100 = cljs.core.next.call(null,in$__9098);
var G__9101 = cljs.core.conj_BANG_.call(null,out__9099,cljs.core.first.call(null,in$__9098));
in$__9098 = G__9100;
out__9099 = G__9101;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9099);
}
break;
}
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__9102){
var keys = cljs.core.seq(arglist__9102);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__9104){
var comparator = cljs.core.first(arglist__9104);
var keys = cljs.core.rest(arglist__9104);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__9105 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____9106 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3695__auto____9106))
{var e__9107 = temp__3695__auto____9106;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9107));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9105,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9103_SHARP_){
var temp__3695__auto____9108 = cljs.core.find.call(null,smap,p1__9103_SHARP_);
if(cljs.core.truth_(temp__3695__auto____9108))
{var e__9109 = temp__3695__auto____9108;
return cljs.core.second.call(null,e__9109);
} else
{return p1__9103_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9117 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9110,seen){
while(true){
var vec__9111__9112 = p__9110;
var f__9113 = cljs.core.nth.call(null,vec__9111__9112,0,null);
var xs__9114 = vec__9111__9112;
var temp__3698__auto____9115 = cljs.core.seq.call(null,xs__9114);
if(cljs.core.truth_(temp__3698__auto____9115))
{var s__9116 = temp__3698__auto____9115;
if(cljs.core.contains_QMARK_.call(null,seen,f__9113))
{{
var G__9118 = cljs.core.rest.call(null,s__9116);
var G__9119 = seen;
p__9110 = G__9118;
seen = G__9119;
continue;
}
} else
{return cljs.core.cons.call(null,f__9113,step.call(null,cljs.core.rest.call(null,s__9116),cljs.core.conj.call(null,seen,f__9113)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});
return step__9117.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__9120 = cljs.core.PersistentVector.fromArray([]);
var s__9121 = s;
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__9121)))
{{
var G__9122 = cljs.core.conj.call(null,ret__9120,cljs.core.first.call(null,s__9121));
var G__9123 = cljs.core.next.call(null,s__9121);
ret__9120 = G__9122;
s__9121 = G__9123;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9120);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3548__auto____9124 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3548__auto____9124)
{return or__3548__auto____9124;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9125 = x.lastIndexOf("/");
if((i__9125 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9125 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
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
if((function (){var or__3548__auto____9126 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3548__auto____9126)
{return or__3548__auto____9126;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9127 = x.lastIndexOf("/");
if((i__9127 > -1))
{return cljs.core.subs.call(null,x,2,i__9127);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__9130 = cljs.core.ObjMap.fromObject([],{});
var ks__9131 = cljs.core.seq.call(null,keys);
var vs__9132 = cljs.core.seq.call(null,vals);
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9133 = ks__9131;
if(cljs.core.truth_(and__3546__auto____9133))
{return vs__9132;
} else
{return and__3546__auto____9133;
}
})()))
{{
var G__9134 = cljs.core.assoc.call(null,map__9130,cljs.core.first.call(null,ks__9131),cljs.core.first.call(null,vs__9132));
var G__9135 = cljs.core.next.call(null,ks__9131);
var G__9136 = cljs.core.next.call(null,vs__9132);
map__9130 = G__9134;
ks__9131 = G__9135;
vs__9132 = G__9136;
continue;
}
} else
{return map__9130;
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
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__9139__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9128_SHARP_,p2__9129_SHARP_){
return max_key.call(null,k,p1__9128_SHARP_,p2__9129_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9139 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9139__delegate.call(this, k, x, y, more);
};
G__9139.cljs$lang$maxFixedArity = 3;
G__9139.cljs$lang$applyTo = (function (arglist__9140){
var k = cljs.core.first(arglist__9140);
var x = cljs.core.first(cljs.core.next(arglist__9140));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9140)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9140)));
return G__9139__delegate(k, x, y, more);
});
G__9139.cljs$lang$arity$variadic = G__9139__delegate;
return G__9139;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__9141__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9137_SHARP_,p2__9138_SHARP_){
return min_key.call(null,k,p1__9137_SHARP_,p2__9138_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9141 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9141__delegate.call(this, k, x, y, more);
};
G__9141.cljs$lang$maxFixedArity = 3;
G__9141.cljs$lang$applyTo = (function (arglist__9142){
var k = cljs.core.first(arglist__9142);
var x = cljs.core.first(cljs.core.next(arglist__9142));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9142)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9142)));
return G__9141__delegate(k, x, y, more);
});
G__9141.cljs$lang$arity$variadic = G__9141__delegate;
return G__9141;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9143 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____9143))
{var s__9144 = temp__3698__auto____9143;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9144),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9144)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9145 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____9145))
{var s__9146 = temp__3698__auto____9145;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9146))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9146),take_while.call(null,pred,cljs.core.rest.call(null,s__9146)));
} else
{return null;
}
} else
{return null;
}
})));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__9147 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__9147.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__9148 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3698__auto____9149 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3698__auto____9149))
{var vec__9150__9151 = temp__3698__auto____9149;
var e__9152 = cljs.core.nth.call(null,vec__9150__9151,0,null);
var s__9153 = vec__9150__9151;
if(cljs.core.truth_(include__9148.call(null,e__9152)))
{return s__9153;
} else
{return cljs.core.next.call(null,s__9153);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9148,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3698__auto____9154 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3698__auto____9154))
{var vec__9155__9156 = temp__3698__auto____9154;
var e__9157 = cljs.core.nth.call(null,vec__9155__9156,0,null);
var s__9158 = vec__9155__9156;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__9157))?s__9158:cljs.core.next.call(null,s__9158)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__9159 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3698__auto____9160 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3698__auto____9160))
{var vec__9161__9162 = temp__3698__auto____9160;
var e__9163 = cljs.core.nth.call(null,vec__9161__9162,0,null);
var s__9164 = vec__9161__9162;
if(cljs.core.truth_(include__9159.call(null,e__9163)))
{return s__9164;
} else
{return cljs.core.next.call(null,s__9164);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9159,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3698__auto____9165 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3698__auto____9165))
{var vec__9166__9167 = temp__3698__auto____9165;
var e__9168 = cljs.core.nth.call(null,vec__9166__9167,0,null);
var s__9169 = vec__9166__9167;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__9168))?s__9169:cljs.core.next.call(null,s__9169)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16187486;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__9170 = this;
var h__2226__auto____9171 = this__9170.__hash;
if((h__2226__auto____9171 != null))
{return h__2226__auto____9171;
} else
{var h__2226__auto____9172 = cljs.core.hash_coll.call(null,rng);
this__9170.__hash = h__2226__auto____9172;
return h__2226__auto____9172;
}
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__9173 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__9174 = this;
var this$__9175 = this;
return cljs.core.pr_str.call(null,this$__9175);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__9176 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__9177 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__9178 = this;
var comp__9179 = (((this__9178.step > 0))?cljs.core._LT_:cljs.core._GT_);
if(cljs.core.truth_(comp__9179.call(null,this__9178.start,this__9178.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__9180 = this;
if(cljs.core.not.call(null,cljs.core._seq.call(null,rng)))
{return 0;
} else
{return Math['ceil'](((this__9180.end - this__9180.start) / this__9180.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__9181 = this;
return this__9181.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__9182 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__9182.meta,(this__9182.start + this__9182.step),this__9182.end,this__9182.step,null));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__9183 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__9184 = this;
return (new cljs.core.Range(meta,this__9184.start,this__9184.end,this__9184.step,this__9184.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__9185 = this;
return this__9185.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__9186 = this;
if((n < cljs.core._count.call(null,rng)))
{return (this__9186.start + (n * this__9186.step));
} else
{if((function (){var and__3546__auto____9187 = (this__9186.start > this__9186.end);
if(and__3546__auto____9187)
{return (this__9186.step === 0);
} else
{return and__3546__auto____9187;
}
})())
{return this__9186.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__9188 = this;
if((n < cljs.core._count.call(null,rng)))
{return (this__9188.start + (n * this__9188.step));
} else
{if((function (){var and__3546__auto____9189 = (this__9188.start > this__9188.end);
if(and__3546__auto____9189)
{return (this__9188.step === 0);
} else
{return and__3546__auto____9189;
}
})())
{return this__9188.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__9190 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9190.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9191 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____9191))
{var s__9192 = temp__3698__auto____9191;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9192),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9192)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9194 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____9194))
{var s__9195 = temp__3698__auto____9194;
var fst__9196 = cljs.core.first.call(null,s__9195);
var fv__9197 = f.call(null,fst__9196);
var run__9198 = cljs.core.cons.call(null,fst__9196,cljs.core.take_while.call(null,(function (p1__9193_SHARP_){
return cljs.core._EQ_.call(null,fv__9197,f.call(null,p1__9193_SHARP_));
}),cljs.core.next.call(null,s__9195)));
return cljs.core.cons.call(null,run__9198,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9198),s__9195))));
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
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.fromObject([],{})),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____9209 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3695__auto____9209))
{var s__9210 = temp__3695__auto____9209;
return reductions.call(null,f,cljs.core.first.call(null,s__9210),cljs.core.rest.call(null,s__9210));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9211 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____9211))
{var s__9212 = temp__3698__auto____9211;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9212)),cljs.core.rest.call(null,s__9212));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
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
var juxt__1 = (function (f){
return (function() {
var G__9214 = null;
var G__9214__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9214__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9214__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9214__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9214__4 = (function() { 
var G__9215__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9215 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9215__delegate.call(this, x, y, z, args);
};
G__9215.cljs$lang$maxFixedArity = 3;
G__9215.cljs$lang$applyTo = (function (arglist__9216){
var x = cljs.core.first(arglist__9216);
var y = cljs.core.first(cljs.core.next(arglist__9216));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9216)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9216)));
return G__9215__delegate(x, y, z, args);
});
G__9215.cljs$lang$arity$variadic = G__9215__delegate;
return G__9215;
})()
;
G__9214 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9214__0.call(this);
case 1:
return G__9214__1.call(this,x);
case 2:
return G__9214__2.call(this,x,y);
case 3:
return G__9214__3.call(this,x,y,z);
default:
return G__9214__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9214.cljs$lang$maxFixedArity = 3;
G__9214.cljs$lang$applyTo = G__9214__4.cljs$lang$applyTo;
return G__9214;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__9217 = null;
var G__9217__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9217__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9217__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9217__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9217__4 = (function() { 
var G__9218__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9218 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9218__delegate.call(this, x, y, z, args);
};
G__9218.cljs$lang$maxFixedArity = 3;
G__9218.cljs$lang$applyTo = (function (arglist__9219){
var x = cljs.core.first(arglist__9219);
var y = cljs.core.first(cljs.core.next(arglist__9219));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9219)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9219)));
return G__9218__delegate(x, y, z, args);
});
G__9218.cljs$lang$arity$variadic = G__9218__delegate;
return G__9218;
})()
;
G__9217 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9217__0.call(this);
case 1:
return G__9217__1.call(this,x);
case 2:
return G__9217__2.call(this,x,y);
case 3:
return G__9217__3.call(this,x,y,z);
default:
return G__9217__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9217.cljs$lang$maxFixedArity = 3;
G__9217.cljs$lang$applyTo = G__9217__4.cljs$lang$applyTo;
return G__9217;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__9220 = null;
var G__9220__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9220__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9220__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9220__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9220__4 = (function() { 
var G__9221__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9221 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9221__delegate.call(this, x, y, z, args);
};
G__9221.cljs$lang$maxFixedArity = 3;
G__9221.cljs$lang$applyTo = (function (arglist__9222){
var x = cljs.core.first(arglist__9222);
var y = cljs.core.first(cljs.core.next(arglist__9222));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9222)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9222)));
return G__9221__delegate(x, y, z, args);
});
G__9221.cljs$lang$arity$variadic = G__9221__delegate;
return G__9221;
})()
;
G__9220 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9220__0.call(this);
case 1:
return G__9220__1.call(this,x);
case 2:
return G__9220__2.call(this,x,y);
case 3:
return G__9220__3.call(this,x,y,z);
default:
return G__9220__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9220.cljs$lang$maxFixedArity = 3;
G__9220.cljs$lang$applyTo = G__9220__4.cljs$lang$applyTo;
return G__9220;
})()
});
var juxt__4 = (function() { 
var G__9223__delegate = function (f,g,h,fs){
var fs__9213 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__9224 = null;
var G__9224__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__9199_SHARP_,p2__9200_SHARP_){
return cljs.core.conj.call(null,p1__9199_SHARP_,p2__9200_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__9213);
});
var G__9224__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9201_SHARP_,p2__9202_SHARP_){
return cljs.core.conj.call(null,p1__9201_SHARP_,p2__9202_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__9213);
});
var G__9224__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9203_SHARP_,p2__9204_SHARP_){
return cljs.core.conj.call(null,p1__9203_SHARP_,p2__9204_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__9213);
});
var G__9224__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9205_SHARP_,p2__9206_SHARP_){
return cljs.core.conj.call(null,p1__9205_SHARP_,p2__9206_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__9213);
});
var G__9224__4 = (function() { 
var G__9225__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9207_SHARP_,p2__9208_SHARP_){
return cljs.core.conj.call(null,p1__9207_SHARP_,cljs.core.apply.call(null,p2__9208_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__9213);
};
var G__9225 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9225__delegate.call(this, x, y, z, args);
};
G__9225.cljs$lang$maxFixedArity = 3;
G__9225.cljs$lang$applyTo = (function (arglist__9226){
var x = cljs.core.first(arglist__9226);
var y = cljs.core.first(cljs.core.next(arglist__9226));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9226)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9226)));
return G__9225__delegate(x, y, z, args);
});
G__9225.cljs$lang$arity$variadic = G__9225__delegate;
return G__9225;
})()
;
G__9224 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9224__0.call(this);
case 1:
return G__9224__1.call(this,x);
case 2:
return G__9224__2.call(this,x,y);
case 3:
return G__9224__3.call(this,x,y,z);
default:
return G__9224__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9224.cljs$lang$maxFixedArity = 3;
G__9224.cljs$lang$applyTo = G__9224__4.cljs$lang$applyTo;
return G__9224;
})()
};
var G__9223 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9223__delegate.call(this, f, g, h, fs);
};
G__9223.cljs$lang$maxFixedArity = 3;
G__9223.cljs$lang$applyTo = (function (arglist__9227){
var f = cljs.core.first(arglist__9227);
var g = cljs.core.first(cljs.core.next(arglist__9227));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9227)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9227)));
return G__9223__delegate(f, g, h, fs);
});
G__9223.cljs$lang$arity$variadic = G__9223__delegate;
return G__9223;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
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
var dorun__1 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__9229 = cljs.core.next.call(null,coll);
coll = G__9229;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9228 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(and__3546__auto____9228))
{return (n > 0);
} else
{return and__3546__auto____9228;
}
})()))
{{
var G__9230 = (n - 1);
var G__9231 = cljs.core.next.call(null,coll);
n = G__9230;
coll = G__9231;
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
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
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
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__9232 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9232),s))
{if((cljs.core.count.call(null,matches__9232) === 1))
{return cljs.core.first.call(null,matches__9232);
} else
{return cljs.core.vec.call(null,matches__9232);
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
var matches__9233 = re.exec(s);
if((matches__9233 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__9233) === 1))
{return cljs.core.first.call(null,matches__9233);
} else
{return cljs.core.vec.call(null,matches__9233);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9234 = cljs.core.re_find.call(null,re,s);
var match_idx__9235 = s.search(re);
var match_str__9236 = ((cljs.core.coll_QMARK_.call(null,match_data__9234))?cljs.core.first.call(null,match_data__9234):match_data__9234);
var post_match__9237 = cljs.core.subs.call(null,s,(match_idx__9235 + cljs.core.count.call(null,match_str__9236)));
if(cljs.core.truth_(match_data__9234))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9234,re_seq.call(null,re,post_match__9237));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9239__9240 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9241 = cljs.core.nth.call(null,vec__9239__9240,0,null);
var flags__9242 = cljs.core.nth.call(null,vec__9239__9240,1,null);
var pattern__9243 = cljs.core.nth.call(null,vec__9239__9240,2,null);
return (new RegExp(pattern__9243,flags__9242));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__9238_SHARP_){
return print_one.call(null,p1__9238_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____9244 = cljs.core.get.call(null,opts,"\uFDD0'meta");
if(cljs.core.truth_(and__3546__auto____9244))
{var and__3546__auto____9248 = (function (){var G__9245__9246 = obj;
if((G__9245__9246 != null))
{if((function (){var or__3548__auto____9247 = (G__9245__9246.cljs$lang$protocol_mask$partition0$ & 65536);
if(or__3548__auto____9247)
{return or__3548__auto____9247;
} else
{return G__9245__9246.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9245__9246.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9245__9246);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9245__9246);
}
})();
if(cljs.core.truth_(and__3546__auto____9248))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____9248;
}
} else
{return and__3546__auto____9244;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var and__3546__auto____9249 = (obj != null);
if(and__3546__auto____9249)
{return obj.cljs$lang$type;
} else
{return and__3546__auto____9249;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__9250__9251 = obj;
if((G__9250__9251 != null))
{if((function (){var or__3548__auto____9252 = (G__9250__9251.cljs$lang$protocol_mask$partition0$ & 268435456);
if(or__3548__auto____9252)
{return or__3548__auto____9252;
} else
{return G__9250__9251.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__9250__9251.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9250__9251);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9250__9251);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__9253 = cljs.core.first.call(null,objs);
var sb__9254 = (new goog.string.StringBuffer());
var G__9255__9256 = cljs.core.seq.call(null,objs);
if(cljs.core.truth_(G__9255__9256))
{var obj__9257 = cljs.core.first.call(null,G__9255__9256);
var G__9255__9258 = G__9255__9256;
while(true){
if((obj__9257 === first_obj__9253))
{} else
{sb__9254.append(" ");
}
var G__9259__9260 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9257,opts));
if(cljs.core.truth_(G__9259__9260))
{var string__9261 = cljs.core.first.call(null,G__9259__9260);
var G__9259__9262 = G__9259__9260;
while(true){
sb__9254.append(string__9261);
var temp__3698__auto____9263 = cljs.core.next.call(null,G__9259__9262);
if(cljs.core.truth_(temp__3698__auto____9263))
{var G__9259__9264 = temp__3698__auto____9263;
{
var G__9267 = cljs.core.first.call(null,G__9259__9264);
var G__9268 = G__9259__9264;
string__9261 = G__9267;
G__9259__9262 = G__9268;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____9265 = cljs.core.next.call(null,G__9255__9258);
if(cljs.core.truth_(temp__3698__auto____9265))
{var G__9255__9266 = temp__3698__auto____9265;
{
var G__9269 = cljs.core.first.call(null,G__9255__9266);
var G__9270 = G__9255__9266;
obj__9257 = G__9269;
G__9255__9258 = G__9270;
continue;
}
} else
{}
break;
}
} else
{}
return sb__9254;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb.call(null,objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__9271 = cljs.core.pr_sb.call(null,objs,opts);
sb__9271.append("\n");
return [cljs.core.str(sb__9271)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__9272 = cljs.core.first.call(null,objs);
var G__9273__9274 = cljs.core.seq.call(null,objs);
if(cljs.core.truth_(G__9273__9274))
{var obj__9275 = cljs.core.first.call(null,G__9273__9274);
var G__9273__9276 = G__9273__9274;
while(true){
if((obj__9275 === first_obj__9272))
{} else
{cljs.core.string_print.call(null," ");
}
var G__9277__9278 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9275,opts));
if(cljs.core.truth_(G__9277__9278))
{var string__9279 = cljs.core.first.call(null,G__9277__9278);
var G__9277__9280 = G__9277__9278;
while(true){
cljs.core.string_print.call(null,string__9279);
var temp__3698__auto____9281 = cljs.core.next.call(null,G__9277__9280);
if(cljs.core.truth_(temp__3698__auto____9281))
{var G__9277__9282 = temp__3698__auto____9281;
{
var G__9285 = cljs.core.first.call(null,G__9277__9282);
var G__9286 = G__9277__9282;
string__9279 = G__9285;
G__9277__9280 = G__9286;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____9283 = cljs.core.next.call(null,G__9273__9276);
if(cljs.core.truth_(temp__3698__auto____9283))
{var G__9273__9284 = temp__3698__auto____9283;
{
var G__9287 = cljs.core.first.call(null,G__9273__9284);
var G__9288 = G__9273__9284;
obj__9275 = G__9287;
G__9273__9276 = G__9288;
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
pr_str.cljs$lang$applyTo = (function (arglist__9289){
var objs = cljs.core.seq(arglist__9289);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__9290){
var objs = cljs.core.seq(arglist__9290);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
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
pr.cljs$lang$applyTo = (function (arglist__9291){
var objs = cljs.core.seq(arglist__9291);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__9292){
var objs = cljs.core.seq(arglist__9292);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__9293){
var objs = cljs.core.seq(arglist__9293);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
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
println.cljs$lang$applyTo = (function (arglist__9294){
var objs = cljs.core.seq(arglist__9294);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__9295){
var objs = cljs.core.seq(arglist__9295);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
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
prn.cljs$lang$applyTo = (function (arglist__9296){
var objs = cljs.core.seq(arglist__9296);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9297 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9297,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9298 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9298,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9299 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9299,"{",", ","}",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3698__auto____9300 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3698__auto____9300))
{var nspc__9301 = temp__3698__auto____9300;
return [cljs.core.str(nspc__9301),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3698__auto____9302 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3698__auto____9302))
{var nspc__9303 = temp__3698__auto____9302;
return [cljs.core.str(nspc__9303),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_("\uFDD0'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9304 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9304,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9305 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9305,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1345404928;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9306 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__9307 = this;
var G__9308__9309 = cljs.core.seq.call(null,this__9307.watches);
if(cljs.core.truth_(G__9308__9309))
{var G__9311__9313 = cljs.core.first.call(null,G__9308__9309);
var vec__9312__9314 = G__9311__9313;
var key__9315 = cljs.core.nth.call(null,vec__9312__9314,0,null);
var f__9316 = cljs.core.nth.call(null,vec__9312__9314,1,null);
var G__9308__9317 = G__9308__9309;
var G__9311__9318 = G__9311__9313;
var G__9308__9319 = G__9308__9317;
while(true){
var vec__9320__9321 = G__9311__9318;
var key__9322 = cljs.core.nth.call(null,vec__9320__9321,0,null);
var f__9323 = cljs.core.nth.call(null,vec__9320__9321,1,null);
var G__9308__9324 = G__9308__9319;
f__9323.call(null,key__9322,this$,oldval,newval);
var temp__3698__auto____9325 = cljs.core.next.call(null,G__9308__9324);
if(cljs.core.truth_(temp__3698__auto____9325))
{var G__9308__9326 = temp__3698__auto____9325;
{
var G__9333 = cljs.core.first.call(null,G__9308__9326);
var G__9334 = G__9308__9326;
G__9311__9318 = G__9333;
G__9308__9319 = G__9334;
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
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__9327 = this;
return this$.watches = cljs.core.assoc.call(null,this__9327.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__9328 = this;
return this$.watches = cljs.core.dissoc.call(null,this__9328.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__9329 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__9329.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__9330 = this;
return this__9330.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__9331 = this;
return this__9331.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__9332 = this;
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
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__9341__delegate = function (x,p__9335){
var map__9336__9337 = p__9335;
var map__9336__9338 = ((cljs.core.seq_QMARK_.call(null,map__9336__9337))?cljs.core.apply.call(null,cljs.core.hash_map,map__9336__9337):map__9336__9337);
var validator__9339 = cljs.core.get.call(null,map__9336__9338,"\uFDD0'validator");
var meta__9340 = cljs.core.get.call(null,map__9336__9338,"\uFDD0'meta");
return (new cljs.core.Atom(x,meta__9340,validator__9339,null));
};
var G__9341 = function (x,var_args){
var p__9335 = null;
if (goog.isDef(var_args)) {
  p__9335 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9341__delegate.call(this, x, p__9335);
};
G__9341.cljs$lang$maxFixedArity = 1;
G__9341.cljs$lang$applyTo = (function (arglist__9342){
var x = cljs.core.first(arglist__9342);
var p__9335 = cljs.core.rest(arglist__9342);
return G__9341__delegate(x, p__9335);
});
G__9341.cljs$lang$arity$variadic = G__9341__delegate;
return G__9341;
})()
;
atom = function(x,var_args){
var p__9335 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____9343 = a.validator;
if(cljs.core.truth_(temp__3698__auto____9343))
{var validate__9344 = temp__3698__auto____9343;
if(cljs.core.truth_(validate__9344.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",5905))))].join('')));
}
} else
{}
var old_value__9345 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__9345,new_value);
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
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__9346__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__9346 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9346__delegate.call(this, a, f, x, y, z, more);
};
G__9346.cljs$lang$maxFixedArity = 5;
G__9346.cljs$lang$applyTo = (function (arglist__9347){
var a = cljs.core.first(arglist__9347);
var f = cljs.core.first(cljs.core.next(arglist__9347));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9347)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9347))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9347)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9347)))));
return G__9346__delegate(a, f, x, y, z, more);
});
G__9346.cljs$lang$arity$variadic = G__9346__delegate;
return G__9346;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__9348){
var iref = cljs.core.first(arglist__9348);
var f = cljs.core.first(cljs.core.next(arglist__9348));
var args = cljs.core.rest(cljs.core.next(arglist__9348));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
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
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 536887296;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__9349 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__9349.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__9350 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__9350.state,(function (p__9351){
var curr_state__9352 = p__9351;
var curr_state__9353 = ((cljs.core.seq_QMARK_.call(null,curr_state__9352))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__9352):curr_state__9352);
var done__9354 = cljs.core.get.call(null,curr_state__9353,"\uFDD0'done");
if(cljs.core.truth_(done__9354))
{return curr_state__9353;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__9350.f.call(null)});
}
})));
});
cljs.core.Delay;
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
if(cljs.core.delay_QMARK_.call(null,x))
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
var map__9355__9356 = options;
var map__9355__9357 = ((cljs.core.seq_QMARK_.call(null,map__9355__9356))?cljs.core.apply.call(null,cljs.core.hash_map,map__9355__9356):map__9355__9356);
var keywordize_keys__9358 = cljs.core.get.call(null,map__9355__9357,"\uFDD0'keywordize-keys");
var keyfn__9359 = (cljs.core.truth_(keywordize_keys__9358)?cljs.core.keyword:cljs.core.str);
var f__9365 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__2455__auto____9364 = (function iter__9360(s__9361){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9361__9362 = s__9361;
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__9361__9362)))
{var k__9363 = cljs.core.first.call(null,s__9361__9362);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__9359.call(null,k__9363),thisfn.call(null,(x[k__9363]))]),iter__9360.call(null,cljs.core.rest.call(null,s__9361__9362)));
} else
{return null;
}
break;
}
})));
});
return iter__2455__auto____9364.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
return f__9365.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__9366){
var x = cljs.core.first(arglist__9366);
var options = cljs.core.rest(arglist__9366);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
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
var mem__9367 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
return (function() { 
var G__9371__delegate = function (args){
var temp__3695__auto____9368 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__9367),args);
if(cljs.core.truth_(temp__3695__auto____9368))
{var v__9369 = temp__3695__auto____9368;
return v__9369;
} else
{var ret__9370 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__9367,cljs.core.assoc,args,ret__9370);
return ret__9370;
}
};
var G__9371 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9371__delegate.call(this, args);
};
G__9371.cljs$lang$maxFixedArity = 0;
G__9371.cljs$lang$applyTo = (function (arglist__9372){
var args = cljs.core.seq(arglist__9372);;
return G__9371__delegate(args);
});
G__9371.cljs$lang$arity$variadic = G__9371__delegate;
return G__9371;
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
var trampoline__1 = (function (f){
while(true){
var ret__9373 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__9373))
{{
var G__9374 = ret__9373;
f = G__9374;
continue;
}
} else
{return ret__9373;
}
break;
}
});
var trampoline__2 = (function() { 
var G__9375__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__9375 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9375__delegate.call(this, f, args);
};
G__9375.cljs$lang$maxFixedArity = 1;
G__9375.cljs$lang$applyTo = (function (arglist__9376){
var f = cljs.core.first(arglist__9376);
var args = cljs.core.rest(arglist__9376);
return G__9375__delegate(f, args);
});
G__9375.cljs$lang$arity$variadic = G__9375__delegate;
return G__9375;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
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
var k__9377 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__9377,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__9377,cljs.core.PersistentVector.fromArray([])),x));
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
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3548__auto____9378 = cljs.core._EQ_.call(null,child,parent);
if(or__3548__auto____9378)
{return or__3548__auto____9378;
} else
{var or__3548__auto____9379 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);
if(or__3548__auto____9379)
{return or__3548__auto____9379;
} else
{var and__3546__auto____9380 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3546__auto____9380)
{var and__3546__auto____9381 = cljs.core.vector_QMARK_.call(null,child);
if(and__3546__auto____9381)
{var and__3546__auto____9382 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3546__auto____9382)
{var ret__9383 = true;
var i__9384 = 0;
while(true){
if((function (){var or__3548__auto____9385 = cljs.core.not.call(null,ret__9383);
if(or__3548__auto____9385)
{return or__3548__auto____9385;
} else
{return (i__9384 === cljs.core.count.call(null,parent));
}
})())
{return ret__9383;
} else
{{
var G__9386 = isa_QMARK_.call(null,h,child.call(null,i__9384),parent.call(null,i__9384));
var G__9387 = (i__9384 + 1);
ret__9383 = G__9386;
i__9384 = G__9387;
continue;
}
}
break;
}
} else
{return and__3546__auto____9382;
}
} else
{return and__3546__auto____9381;
}
} else
{return and__3546__auto____9380;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
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
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6189))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6193))))].join('')));
}
var tp__9391 = "\uFDD0'parents".call(null,h);
var td__9392 = "\uFDD0'descendants".call(null,h);
var ta__9393 = "\uFDD0'ancestors".call(null,h);
var tf__9394 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3548__auto____9395 = ((cljs.core.contains_QMARK_.call(null,tp__9391.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__9393.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__9393.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__9391,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__9394.call(null,"\uFDD0'ancestors".call(null,h),tag,td__9392,parent,ta__9393),"\uFDD0'descendants":tf__9394.call(null,"\uFDD0'descendants".call(null,h),parent,ta__9393,tag,td__9392)});
})());
if(cljs.core.truth_(or__3548__auto____9395))
{return or__3548__auto____9395;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
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
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__9396 = "\uFDD0'parents".call(null,h);
var childsParents__9397 = (cljs.core.truth_(parentMap__9396.call(null,tag))?cljs.core.disj.call(null,parentMap__9396.call(null,tag),parent):cljs.core.set([]));
var newParents__9398 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__9397))?cljs.core.assoc.call(null,parentMap__9396,tag,childsParents__9397):cljs.core.dissoc.call(null,parentMap__9396,tag));
var deriv_seq__9399 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__9388_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__9388_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__9388_SHARP_),cljs.core.second.call(null,p1__9388_SHARP_)));
}),cljs.core.seq.call(null,newParents__9398)));
if(cljs.core.contains_QMARK_.call(null,parentMap__9396.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__9389_SHARP_,p2__9390_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__9389_SHARP_,p2__9390_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__9399));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
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
var xprefs__9400 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3548__auto____9402 = (cljs.core.truth_((function (){var and__3546__auto____9401 = xprefs__9400;
if(cljs.core.truth_(and__3546__auto____9401))
{return xprefs__9400.call(null,y);
} else
{return and__3546__auto____9401;
}
})())?true:null);
if(cljs.core.truth_(or__3548__auto____9402))
{return or__3548__auto____9402;
} else
{var or__3548__auto____9404 = (function (){var ps__9403 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__9403) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__9403),prefer_table)))
{} else
{}
{
var G__9407 = cljs.core.rest.call(null,ps__9403);
ps__9403 = G__9407;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3548__auto____9404))
{return or__3548__auto____9404;
} else
{var or__3548__auto____9406 = (function (){var ps__9405 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__9405) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__9405),y,prefer_table)))
{} else
{}
{
var G__9408 = cljs.core.rest.call(null,ps__9405);
ps__9405 = G__9408;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3548__auto____9406))
{return or__3548__auto____9406;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____9409 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3548__auto____9409))
{return or__3548__auto____9409;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__9418 = cljs.core.reduce.call(null,(function (be,p__9410){
var vec__9411__9412 = p__9410;
var k__9413 = cljs.core.nth.call(null,vec__9411__9412,0,null);
var ___9414 = cljs.core.nth.call(null,vec__9411__9412,1,null);
var e__9415 = vec__9411__9412;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__9413))
{var be2__9417 = (cljs.core.truth_((function (){var or__3548__auto____9416 = (be == null);
if(or__3548__auto____9416)
{return or__3548__auto____9416;
} else
{return cljs.core.dominates.call(null,k__9413,cljs.core.first.call(null,be),prefer_table);
}
})())?e__9415:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__9417),k__9413,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__9413),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__9417)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__9417;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__9418))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__9418));
return cljs.core.second.call(null,best_entry__9418);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
void 0;cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3546__auto____9419 = mf;
if(and__3546__auto____9419)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3546__auto____9419;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{return (function (){var or__3548__auto____9420 = (cljs.core._reset[goog.typeOf.call(null,mf)]);
if(or__3548__auto____9420)
{return or__3548__auto____9420;
} else
{var or__3548__auto____9421 = (cljs.core._reset["_"]);
if(or__3548__auto____9421)
{return or__3548__auto____9421;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3546__auto____9422 = mf;
if(and__3546__auto____9422)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3546__auto____9422;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____9423 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);
if(or__3548__auto____9423)
{return or__3548__auto____9423;
} else
{var or__3548__auto____9424 = (cljs.core._add_method["_"]);
if(or__3548__auto____9424)
{return or__3548__auto____9424;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3546__auto____9425 = mf;
if(and__3546__auto____9425)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3546__auto____9425;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____9426 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);
if(or__3548__auto____9426)
{return or__3548__auto____9426;
} else
{var or__3548__auto____9427 = (cljs.core._remove_method["_"]);
if(or__3548__auto____9427)
{return or__3548__auto____9427;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3546__auto____9428 = mf;
if(and__3546__auto____9428)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3546__auto____9428;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____9429 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);
if(or__3548__auto____9429)
{return or__3548__auto____9429;
} else
{var or__3548__auto____9430 = (cljs.core._prefer_method["_"]);
if(or__3548__auto____9430)
{return or__3548__auto____9430;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3546__auto____9431 = mf;
if(and__3546__auto____9431)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3546__auto____9431;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____9432 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);
if(or__3548__auto____9432)
{return or__3548__auto____9432;
} else
{var or__3548__auto____9433 = (cljs.core._get_method["_"]);
if(or__3548__auto____9433)
{return or__3548__auto____9433;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3546__auto____9434 = mf;
if(and__3546__auto____9434)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3546__auto____9434;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{return (function (){var or__3548__auto____9435 = (cljs.core._methods[goog.typeOf.call(null,mf)]);
if(or__3548__auto____9435)
{return or__3548__auto____9435;
} else
{var or__3548__auto____9436 = (cljs.core._methods["_"]);
if(or__3548__auto____9436)
{return or__3548__auto____9436;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3546__auto____9437 = mf;
if(and__3546__auto____9437)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3546__auto____9437;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{return (function (){var or__3548__auto____9438 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);
if(or__3548__auto____9438)
{return or__3548__auto____9438;
} else
{var or__3548__auto____9439 = (cljs.core._prefers["_"]);
if(or__3548__auto____9439)
{return or__3548__auto____9439;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3546__auto____9440 = mf;
if(and__3546__auto____9440)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3546__auto____9440;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{return (function (){var or__3548__auto____9441 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);
if(or__3548__auto____9441)
{return or__3548__auto____9441;
} else
{var or__3548__auto____9442 = (cljs.core._dispatch["_"]);
if(or__3548__auto____9442)
{return or__3548__auto____9442;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
void 0;cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__9443 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__9444 = cljs.core._get_method.call(null,mf,dispatch_val__9443);
if(cljs.core.truth_(target_fn__9444))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__9443)].join('')));
}
return cljs.core.apply.call(null,target_fn__9444,args);
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
this.cljs$lang$protocol_mask$partition0$ = 2097152;
this.cljs$lang$protocol_mask$partition1$ = 32;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9445 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__9446 = this;
cljs.core.swap_BANG_.call(null,this__9446.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__9446.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__9446.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__9446.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__9447 = this;
cljs.core.swap_BANG_.call(null,this__9447.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__9447.method_cache,this__9447.method_table,this__9447.cached_hierarchy,this__9447.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__9448 = this;
cljs.core.swap_BANG_.call(null,this__9448.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__9448.method_cache,this__9448.method_table,this__9448.cached_hierarchy,this__9448.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__9449 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__9449.cached_hierarchy),cljs.core.deref.call(null,this__9449.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__9449.method_cache,this__9449.method_table,this__9449.cached_hierarchy,this__9449.hierarchy);
}
var temp__3695__auto____9450 = cljs.core.deref.call(null,this__9449.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3695__auto____9450))
{var target_fn__9451 = temp__3695__auto____9450;
return target_fn__9451;
} else
{var temp__3695__auto____9452 = cljs.core.find_and_cache_best_method.call(null,this__9449.name,dispatch_val,this__9449.hierarchy,this__9449.method_table,this__9449.prefer_table,this__9449.method_cache,this__9449.cached_hierarchy);
if(cljs.core.truth_(temp__3695__auto____9452))
{var target_fn__9453 = temp__3695__auto____9452;
return target_fn__9453;
} else
{return cljs.core.deref.call(null,this__9449.method_table).call(null,this__9449.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__9454 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__9454.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__9454.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__9454.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__9454.method_cache,this__9454.method_table,this__9454.cached_hierarchy,this__9454.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__9455 = this;
return cljs.core.deref.call(null,this__9455.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__9456 = this;
return cljs.core.deref.call(null,this__9456.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__9457 = this;
return cljs.core.do_dispatch.call(null,mf,this__9457.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__9458__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__9458 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9458__delegate.call(this, _, args);
};
G__9458.cljs$lang$maxFixedArity = 1;
G__9458.cljs$lang$applyTo = (function (arglist__9459){
var _ = cljs.core.first(arglist__9459);
var args = cljs.core.rest(arglist__9459);
return G__9458__delegate(_, args);
});
G__9458.cljs$lang$arity$variadic = G__9458__delegate;
return G__9458;
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
