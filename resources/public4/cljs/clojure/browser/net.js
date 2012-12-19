goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__7680){
var vec__7681__7682 = p__7680;
var k__7683 = cljs.core.nth.call(null,vec__7681__7682,0,null);
var v__7684 = cljs.core.nth.call(null,vec__7681__7682,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__7683.toLowerCase()),v__7684]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__7715 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7685 = this$;

if(cljs.core.truth_(and__3546__auto____7685))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____7685;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____7686 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7686))
{return or__3548__auto____7686;
} else
{var or__3548__auto____7687 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____7687))
{return or__3548__auto____7687;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__7716 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____7688 = this$;

if(cljs.core.truth_(and__3546__auto____7688))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____7688;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____7689 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7689))
{return or__3548__auto____7689;
} else
{var or__3548__auto____7690 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____7690))
{return or__3548__auto____7690;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__7717 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____7691 = this$;

if(cljs.core.truth_(and__3546__auto____7691))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____7691;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____7692 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7692))
{return or__3548__auto____7692;
} else
{var or__3548__auto____7693 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____7693))
{return or__3548__auto____7693;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__7718 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____7694 = this$;

if(cljs.core.truth_(and__3546__auto____7694))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____7694;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____7695 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7695))
{return or__3548__auto____7695;
} else
{var or__3548__auto____7696 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____7696))
{return or__3548__auto____7696;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2,opt3);
}
});
connect = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case  1 :
return connect__7715.call(this,this$);
case  2 :
return connect__7716.call(this,this$,opt1);
case  3 :
return connect__7717.call(this,this$,opt1,opt2);
case  4 :
return connect__7718.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__7720 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____7697 = this$;

if(cljs.core.truth_(and__3546__auto____7697))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____7697;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____7698 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7698))
{return or__3548__auto____7698;
} else
{var or__3548__auto____7699 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____7699))
{return or__3548__auto____7699;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__7721 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____7700 = this$;

if(cljs.core.truth_(and__3546__auto____7700))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____7700;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____7701 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7701))
{return or__3548__auto____7701;
} else
{var or__3548__auto____7702 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____7702))
{return or__3548__auto____7702;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__7722 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____7703 = this$;

if(cljs.core.truth_(and__3546__auto____7703))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____7703;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____7704 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7704))
{return or__3548__auto____7704;
} else
{var or__3548__auto____7705 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____7705))
{return or__3548__auto____7705;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__7723 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____7706 = this$;

if(cljs.core.truth_(and__3546__auto____7706))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____7706;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____7707 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7707))
{return or__3548__auto____7707;
} else
{var or__3548__auto____7708 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____7708))
{return or__3548__auto____7708;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__7724 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____7709 = this$;

if(cljs.core.truth_(and__3546__auto____7709))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____7709;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____7710 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7710))
{return or__3548__auto____7710;
} else
{var or__3548__auto____7711 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____7711))
{return or__3548__auto____7711;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4,opt5);
}
});
transmit = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case  2 :
return transmit__7720.call(this,this$,opt);
case  3 :
return transmit__7721.call(this,this$,opt,opt2);
case  4 :
return transmit__7722.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__7723.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__7724.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____7712 = this$;

if(cljs.core.truth_(and__3546__auto____7712))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____7712;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____7713 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7713))
{return or__3548__auto____7713;
} else
{var or__3548__auto____7714 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____7714))
{return or__3548__auto____7714;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__7726){
var vec__7727__7728 = p__7726;
var k__7729 = cljs.core.nth.call(null,vec__7727__7728,0,null);
var v__7730 = cljs.core.nth.call(null,vec__7727__7728,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__7729.toLowerCase()),v__7730]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__7731 = null;
var G__7731__7732 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__7731__7733 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__7731__7734 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__7731__7735 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__7731__7736 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__7731 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__7731__7732.call(this,this$,uri);
case  3 :
return G__7731__7733.call(this,this$,uri,method);
case  4 :
return G__7731__7734.call(this,this$,uri,method,content);
case  5 :
return G__7731__7735.call(this,this$,uri,method,content,headers);
case  6 :
return G__7731__7736.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7731;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__7738){
var vec__7739__7740 = p__7738;
var k__7741 = cljs.core.nth.call(null,vec__7739__7740,0,null);
var v__7742 = cljs.core.nth.call(null,vec__7739__7740,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__7741.toLowerCase()),v__7742]);
}),cljs.core.js__GT_clj.call(null,goog.net.xpc.CfgFields)));
/**
* Returns an XhrIo connection
*/
clojure.browser.net.xhr_connection = (function xhr_connection(){
return (new goog.net.XhrIo());
});
clojure.browser.net.ICrossPageChannel = {};
clojure.browser.net.register_service = (function() {
var register_service = null;
var register_service__7749 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____7743 = this$;

if(cljs.core.truth_(and__3546__auto____7743))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____7743;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____7744 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7744))
{return or__3548__auto____7744;
} else
{var or__3548__auto____7745 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____7745))
{return or__3548__auto____7745;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__7750 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____7746 = this$;

if(cljs.core.truth_(and__3546__auto____7746))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____7746;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____7747 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7747))
{return or__3548__auto____7747;
} else
{var or__3548__auto____7748 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____7748))
{return or__3548__auto____7748;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn,encode_json_QMARK_);
}
});
register_service = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return register_service__7749.call(this,this$,service_name,fn);
case  4 :
return register_service__7750.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__7752 = null;
var G__7752__7753 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__7752__7754 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__7752__7755 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__7752__7756 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__7752 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__7752__7753.call(this,this$);
case  2 :
return G__7752__7754.call(this,this$,on_connect_fn);
case  3 :
return G__7752__7755.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__7752__7756.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7752;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit = (function (this$,service_name,payload){
return this$.send(cljs.core.name.call(null,service_name),payload);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close = (function (this$){
return this$.close(cljs.core.List.EMPTY);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service = (function() {
var G__7758 = null;
var G__7758__7759 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__7758__7760 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__7758 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__7758__7759.call(this,this$,service_name,fn);
case  4 :
return G__7758__7760.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7758;
})()
;
/**
* When passed with a config hash-map, returns a parent
* CrossPageChannel object. Keys in the config hash map are downcased
* versions of the goog.net.xpc.CfgFields enum keys,
* e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
* hash.
* 
* When passed with no args, creates a child CrossPageChannel object,
* and the config is automatically taken from the URL param 'xpc', as
* per the CrossPageChannel API.
*/
clojure.browser.net.xpc_connection = (function() {
var xpc_connection = null;
var xpc_connection__7771 = (function (){
var temp__3698__auto____7762 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____7762))
{var config__7763 = temp__3698__auto____7762;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__7763)));
} else
{return null;
}
});
var xpc_connection__7772 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__7764){
var vec__7765__7766 = p__7764;
var k__7767 = cljs.core.nth.call(null,vec__7765__7766,0,null);
var v__7768 = cljs.core.nth.call(null,vec__7765__7766,1,null);

var temp__3695__auto____7769 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__7767);

if(cljs.core.truth_(temp__3695__auto____7769))
{var field__7770 = temp__3695__auto____7769;

return cljs.core.assoc.call(null,sum,field__7770,v__7768);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__7771.call(this);
case  1 :
return xpc_connection__7772.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
