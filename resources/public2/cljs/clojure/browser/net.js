goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__6851){
var vec__6852__6853 = p__6851;
var k__6854 = cljs.core.nth.call(null,vec__6852__6853,0,null);
var v__6855 = cljs.core.nth.call(null,vec__6852__6853,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__6854.toLowerCase()),v__6855]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__6886 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____6856 = this$;

if(cljs.core.truth_(and__3546__auto____6856))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____6856;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____6857 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6857))
{return or__3548__auto____6857;
} else
{var or__3548__auto____6858 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____6858))
{return or__3548__auto____6858;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__6887 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____6859 = this$;

if(cljs.core.truth_(and__3546__auto____6859))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____6859;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____6860 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6860))
{return or__3548__auto____6860;
} else
{var or__3548__auto____6861 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____6861))
{return or__3548__auto____6861;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__6888 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____6862 = this$;

if(cljs.core.truth_(and__3546__auto____6862))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____6862;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____6863 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6863))
{return or__3548__auto____6863;
} else
{var or__3548__auto____6864 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____6864))
{return or__3548__auto____6864;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__6889 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____6865 = this$;

if(cljs.core.truth_(and__3546__auto____6865))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____6865;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____6866 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6866))
{return or__3548__auto____6866;
} else
{var or__3548__auto____6867 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____6867))
{return or__3548__auto____6867;
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
return connect__6886.call(this,this$);
case  2 :
return connect__6887.call(this,this$,opt1);
case  3 :
return connect__6888.call(this,this$,opt1,opt2);
case  4 :
return connect__6889.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__6891 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____6868 = this$;

if(cljs.core.truth_(and__3546__auto____6868))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____6868;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____6869 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6869))
{return or__3548__auto____6869;
} else
{var or__3548__auto____6870 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____6870))
{return or__3548__auto____6870;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__6892 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____6871 = this$;

if(cljs.core.truth_(and__3546__auto____6871))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____6871;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____6872 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6872))
{return or__3548__auto____6872;
} else
{var or__3548__auto____6873 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____6873))
{return or__3548__auto____6873;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__6893 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____6874 = this$;

if(cljs.core.truth_(and__3546__auto____6874))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____6874;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____6875 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6875))
{return or__3548__auto____6875;
} else
{var or__3548__auto____6876 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____6876))
{return or__3548__auto____6876;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__6894 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____6877 = this$;

if(cljs.core.truth_(and__3546__auto____6877))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____6877;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____6878 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6878))
{return or__3548__auto____6878;
} else
{var or__3548__auto____6879 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____6879))
{return or__3548__auto____6879;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__6895 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____6880 = this$;

if(cljs.core.truth_(and__3546__auto____6880))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____6880;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____6881 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6881))
{return or__3548__auto____6881;
} else
{var or__3548__auto____6882 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____6882))
{return or__3548__auto____6882;
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
return transmit__6891.call(this,this$,opt);
case  3 :
return transmit__6892.call(this,this$,opt,opt2);
case  4 :
return transmit__6893.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__6894.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__6895.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____6883 = this$;

if(cljs.core.truth_(and__3546__auto____6883))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____6883;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____6884 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6884))
{return or__3548__auto____6884;
} else
{var or__3548__auto____6885 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____6885))
{return or__3548__auto____6885;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__6897){
var vec__6898__6899 = p__6897;
var k__6900 = cljs.core.nth.call(null,vec__6898__6899,0,null);
var v__6901 = cljs.core.nth.call(null,vec__6898__6899,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__6900.toLowerCase()),v__6901]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__6902 = null;
var G__6902__6903 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__6902__6904 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__6902__6905 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__6902__6906 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__6902__6907 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__6902 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__6902__6903.call(this,this$,uri);
case  3 :
return G__6902__6904.call(this,this$,uri,method);
case  4 :
return G__6902__6905.call(this,this$,uri,method,content);
case  5 :
return G__6902__6906.call(this,this$,uri,method,content,headers);
case  6 :
return G__6902__6907.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6902;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__6909){
var vec__6910__6911 = p__6909;
var k__6912 = cljs.core.nth.call(null,vec__6910__6911,0,null);
var v__6913 = cljs.core.nth.call(null,vec__6910__6911,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__6912.toLowerCase()),v__6913]);
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
var register_service__6920 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____6914 = this$;

if(cljs.core.truth_(and__3546__auto____6914))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____6914;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____6915 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6915))
{return or__3548__auto____6915;
} else
{var or__3548__auto____6916 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____6916))
{return or__3548__auto____6916;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__6921 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____6917 = this$;

if(cljs.core.truth_(and__3546__auto____6917))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____6917;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____6918 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6918))
{return or__3548__auto____6918;
} else
{var or__3548__auto____6919 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____6919))
{return or__3548__auto____6919;
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
return register_service__6920.call(this,this$,service_name,fn);
case  4 :
return register_service__6921.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__6923 = null;
var G__6923__6924 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__6923__6925 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__6923__6926 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__6923__6927 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__6923 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__6923__6924.call(this,this$);
case  2 :
return G__6923__6925.call(this,this$,on_connect_fn);
case  3 :
return G__6923__6926.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__6923__6927.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6923;
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
var G__6929 = null;
var G__6929__6930 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__6929__6931 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__6929 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__6929__6930.call(this,this$,service_name,fn);
case  4 :
return G__6929__6931.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6929;
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
var xpc_connection__6942 = (function (){
var temp__3698__auto____6933 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____6933))
{var config__6934 = temp__3698__auto____6933;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__6934)));
} else
{return null;
}
});
var xpc_connection__6943 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__6935){
var vec__6936__6937 = p__6935;
var k__6938 = cljs.core.nth.call(null,vec__6936__6937,0,null);
var v__6939 = cljs.core.nth.call(null,vec__6936__6937,1,null);

var temp__3695__auto____6940 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__6938);

if(cljs.core.truth_(temp__3695__auto____6940))
{var field__6941 = temp__3695__auto____6940;

return cljs.core.assoc.call(null,sum,field__6941,v__6939);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__6942.call(this);
case  1 :
return xpc_connection__6943.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
