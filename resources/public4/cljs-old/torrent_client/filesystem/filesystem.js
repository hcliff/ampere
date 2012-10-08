goog.provide('torrent_client.filesystem.filesystem');
goog.require('cljs.core');
torrent_client.filesystem.filesystem.request_file_system = (function() {
var request_file_system = null;
var request_file_system__5761 = (function (){
return request_file_system.call(null,"\uFDD0'PERSISTENT");
});
var request_file_system__5762 = (function (type,size){
return async_kit.async_STAR_.call(null,(function (success_callback,error_callback){
return window.webkitRequestFileSystem((window[cljs.core.name.call(null,type)]),size,success_callback,error_callback);
}));
});
request_file_system = function(type,size){
switch(arguments.length){
case  0 :
return request_file_system__5761.call(this);
case  2 :
return request_file_system__5762.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
return request_file_system;
})()
;
torrent_client.filesystem.filesystem.request_quota = (function() {
var request_quota = null;
var request_quota__5764 = (function (){
return torrent_client.filesystem.filesystem.request_file_system.call(null,"\uFDD0'PERSISTENT");
});
var request_quota__5765 = (function (type,size){
return async_kit.async_STAR_.call(null,(function (success_callback,error_callback){
return window.webkitStorageInfo.requestQuota((window[cljs.core.name.call(null,type)]),size,success_callback,error_callback);
}));
});
request_quota = function(type,size){
switch(arguments.length){
case  0 :
return request_quota__5764.call(this);
case  2 :
return request_quota__5765.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
return request_quota;
})()
;
torrent_client.filesystem.filesystem.request_quota_then_filesystem = (function request_quota_then_filesystem(type,size){
return torrent_client.filesystem.filesystem.let_async.call(null,cljs.core.Vector.fromArray([torrent_client.filesystem.filesystem.granted_bytes,torrent_client.filesystem.filesystem.request_quota.call(null,type,size)]),torrent_client.filesystem.filesystem.request_file_system.call(null,type,torrent_client.filesystem.filesystem.granted_bytes));
});
