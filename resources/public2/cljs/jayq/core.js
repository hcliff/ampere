goog.provide('jayq.core');
goog.require('cljs.core');
jayq.core.ajax = (function() {
var ajax = null;
var ajax__6237 = (function (settings){
return jQuery.ajax(jayq.core.clj__GT_js.call(null,settings));
});
var ajax__6236 = (function (url,settings){
return jQuery.ajax(url,jayq.core.clj__GT_js.call(null,settings));
});
ajax = function(url,settings){
switch(arguments.length){
case  1 :
return ajax__6237.call(this,url);
case  2 :
return ajax__6236.call(this,url,settings);
}
throw('Invalid arity: ' + arguments.length);
};
return ajax;
})()
;
