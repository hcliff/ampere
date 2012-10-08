goog.provide('filesystem.filesystem');
goog.require('cljs.core');
filesystem.filesystem.request_file_system = (function() {
var request_file_system = null;
var request_file_system__5773 = (function (){
return request_file_system.call(null,"\uFDD0'PERSISTENT");
});
var request_file_system__5774 = (function (type,size){
return async_kit.async_STAR_.call(null,(function (success_callback,error_callback){
return window.webkitRequestFileSystem((window[cljs.core.name.call(null,type)]),size,success_callback,error_callback);
}));
});
request_file_system = function(type,size){
switch(arguments.length){
case  0 :
return request_file_system__5773.call(this);
case  2 :
return request_file_system__5774.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
return request_file_system;
})()
;
filesystem.filesystem.request_quota = (function() {
var request_quota = null;
var request_quota__5776 = (function (){
return filesystem.filesystem.request_file_system.call(null,"\uFDD0'PERSISTENT");
});
var request_quota__5777 = (function (type,size){
return async_kit.async_STAR_.call(null,(function (success_callback,error_callback){
return window.webkitStorageInfo.requestQuota((window[cljs.core.name.call(null,type)]),size,success_callback,error_callback);
}));
});
request_quota = function(type,size){
switch(arguments.length){
case  0 :
return request_quota__5776.call(this);
case  2 :
return request_quota__5777.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
return request_quota;
})()
;
filesystem.filesystem.request_quota_then_filesystem = (function request_quota_then_filesystem(type,size){
return filesystem.filesystem.let_async.call(null,cljs.core.Vector.fromArray([filesystem.filesystem.granted_bytes,filesystem.filesystem.request_quota.call(null,type,size)]),filesystem.filesystem.request_file_system.call(null,type,filesystem.filesystem.granted_bytes));
});
