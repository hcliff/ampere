goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__7991){
var vec__7992__7993 = p__7991;
var k__7994 = cljs.core.nth.call(null,vec__7992__7993,0,null);
var v__7995 = cljs.core.nth.call(null,vec__7992__7993,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__7994.toLowerCase()),v__7995]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__8026 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7996 = this$;

if(cljs.core.truth_(and__3546__auto____7996))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____7996;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____7997 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7997))
{return or__3548__auto____7997;
} else
{var or__3548__auto____7998 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____7998))
{return or__3548__auto____7998;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__8027 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____7999 = this$;

if(cljs.core.truth_(and__3546__auto____7999))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____7999;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____8000 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8000))
{return or__3548__auto____8000;
} else
{var or__3548__auto____8001 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____8001))
{return or__3548__auto____8001;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__8028 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____8002 = this$;

if(cljs.core.truth_(and__3546__auto____8002))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____8002;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____8003 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8003))
{return or__3548__auto____8003;
} else
{var or__3548__auto____8004 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____8004))
{return or__3548__auto____8004;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__8029 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____8005 = this$;

if(cljs.core.truth_(and__3546__auto____8005))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____8005;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____8006 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8006))
{return or__3548__auto____8006;
} else
{var or__3548__auto____8007 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____8007))
{return or__3548__auto____8007;
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
return connect__8026.call(this,this$);
case  2 :
return connect__8027.call(this,this$,opt1);
case  3 :
return connect__8028.call(this,this$,opt1,opt2);
case  4 :
return connect__8029.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__8031 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____8008 = this$;

if(cljs.core.truth_(and__3546__auto____8008))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____8008;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____8009 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8009))
{return or__3548__auto____8009;
} else
{var or__3548__auto____8010 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____8010))
{return or__3548__auto____8010;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__8032 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____8011 = this$;

if(cljs.core.truth_(and__3546__auto____8011))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____8011;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____8012 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8012))
{return or__3548__auto____8012;
} else
{var or__3548__auto____8013 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____8013))
{return or__3548__auto____8013;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__8033 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____8014 = this$;

if(cljs.core.truth_(and__3546__auto____8014))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____8014;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____8015 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8015))
{return or__3548__auto____8015;
} else
{var or__3548__auto____8016 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____8016))
{return or__3548__auto____8016;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__8034 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____8017 = this$;

if(cljs.core.truth_(and__3546__auto____8017))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____8017;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____8018 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8018))
{return or__3548__auto____8018;
} else
{var or__3548__auto____8019 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____8019))
{return or__3548__auto____8019;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__8035 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____8020 = this$;

if(cljs.core.truth_(and__3546__auto____8020))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____8020;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____8021 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8021))
{return or__3548__auto____8021;
} else
{var or__3548__auto____8022 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____8022))
{return or__3548__auto____8022;
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
return transmit__8031.call(this,this$,opt);
case  3 :
return transmit__8032.call(this,this$,opt,opt2);
case  4 :
return transmit__8033.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__8034.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__8035.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____8023 = this$;

if(cljs.core.truth_(and__3546__auto____8023))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____8023;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____8024 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8024))
{return or__3548__auto____8024;
} else
{var or__3548__auto____8025 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____8025))
{return or__3548__auto____8025;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__8037){
var vec__8038__8039 = p__8037;
var k__8040 = cljs.core.nth.call(null,vec__8038__8039,0,null);
var v__8041 = cljs.core.nth.call(null,vec__8038__8039,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__8040.toLowerCase()),v__8041]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__8042 = null;
var G__8042__8043 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__8042__8044 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__8042__8045 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__8042__8046 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__8042__8047 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__8042 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__8042__8043.call(this,this$,uri);
case  3 :
return G__8042__8044.call(this,this$,uri,method);
case  4 :
return G__8042__8045.call(this,this$,uri,method,content);
case  5 :
return G__8042__8046.call(this,this$,uri,method,content,headers);
case  6 :
return G__8042__8047.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8042;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__8049){
var vec__8050__8051 = p__8049;
var k__8052 = cljs.core.nth.call(null,vec__8050__8051,0,null);
var v__8053 = cljs.core.nth.call(null,vec__8050__8051,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__8052.toLowerCase()),v__8053]);
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
var register_service__8060 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____8054 = this$;

if(cljs.core.truth_(and__3546__auto____8054))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____8054;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____8055 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8055))
{return or__3548__auto____8055;
} else
{var or__3548__auto____8056 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____8056))
{return or__3548__auto____8056;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__8061 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____8057 = this$;

if(cljs.core.truth_(and__3546__auto____8057))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____8057;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____8058 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8058))
{return or__3548__auto____8058;
} else
{var or__3548__auto____8059 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____8059))
{return or__3548__auto____8059;
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
return register_service__8060.call(this,this$,service_name,fn);
case  4 :
return register_service__8061.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__8063 = null;
var G__8063__8064 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__8063__8065 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__8063__8066 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__8063__8067 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__8063 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__8063__8064.call(this,this$);
case  2 :
return G__8063__8065.call(this,this$,on_connect_fn);
case  3 :
return G__8063__8066.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__8063__8067.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8063;
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
var G__8069 = null;
var G__8069__8070 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__8069__8071 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__8069 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__8069__8070.call(this,this$,service_name,fn);
case  4 :
return G__8069__8071.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8069;
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
var xpc_connection__8082 = (function (){
var temp__3698__auto____8073 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____8073))
{var config__8074 = temp__3698__auto____8073;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__8074)));
} else
{return null;
}
});
var xpc_connection__8083 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__8075){
var vec__8076__8077 = p__8075;
var k__8078 = cljs.core.nth.call(null,vec__8076__8077,0,null);
var v__8079 = cljs.core.nth.call(null,vec__8076__8077,1,null);

var temp__3695__auto____8080 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__8078);

if(cljs.core.truth_(temp__3695__auto____8080))
{var field__8081 = temp__3695__auto____8080;

return cljs.core.assoc.call(null,sum,field__8081,v__8079);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__8082.call(this);
case  1 :
return xpc_connection__8083.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
