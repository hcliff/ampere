goog.provide('torrent_client.client.filesystem');
goog.require('cljs.core');
goog.require('jayq.core');
torrent_client.client.filesystem.request_file_system = (function() {
var request_file_system = null;
var request_file_system__5850 = (function (){
return request_file_system.call(null,"\uFDD0'PERSISTENT");
});
var request_file_system__5851 = (function (type,size,success_callback,error_callback){
return window.webkitRequestFileSystem((window[cljs.core.name.call(null,type)]),size,success_callback,error_callback);
});
request_file_system = function(type,size,success_callback,error_callback){
switch(arguments.length){
case  0 :
return request_file_system__5850.call(this);
case  4 :
return request_file_system__5851.call(this,type,size,success_callback,error_callback);
}
throw('Invalid arity: ' + arguments.length);
};
return request_file_system;
})()
;
torrent_client.client.filesystem.request_quota = (function() {
var request_quota = null;
var request_quota__5853 = (function (){
return torrent_client.client.filesystem.request_file_system.call(null,"\uFDD0'PERSISTENT");
});
var request_quota__5854 = (function (type,size,success_callback,error_callback){
return window.webkitStorageInfo.requestQuota((window[cljs.core.name.call(null,type)]),size,success_callback,error_callback);
});
request_quota = function(type,size,success_callback,error_callback){
switch(arguments.length){
case  0 :
return request_quota__5853.call(this);
case  4 :
return request_quota__5854.call(this,type,size,success_callback,error_callback);
}
throw('Invalid arity: ' + arguments.length);
};
return request_quota;
})()
;
/**
* @param {...*} var_args
*/
torrent_client.client.filesystem.request_quota_then_filesystem = (function() { 
var request_quota_then_filesystem__delegate = function (params){
var vec__5856__5857 = params;
var type__5858 = cljs.core.nth.call(null,vec__5856__5857,0,null);
var size__5859 = cljs.core.nth.call(null,vec__5856__5857,1,null);
var success_callback__5860 = cljs.core.nth.call(null,vec__5856__5857,2,null);
var error_callback__5861 = cljs.core.nth.call(null,vec__5856__5857,3,null);

return torrent_client.client.filesystem.request_quota.call(null,type__5858,size__5859,(function (){
return cljs.core.apply.call(null,torrent_client.client.filesystem.request_file_system,params);
}),error_callback__5861);
};
var request_quota_then_filesystem = function (var_args){
var params = null;
if (goog.isDef(var_args)) {
  params = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return request_quota_then_filesystem__delegate.call(this, params);
};
request_quota_then_filesystem.cljs$lang$maxFixedArity = 0;
request_quota_then_filesystem.cljs$lang$applyTo = (function (arglist__5862){
var params = cljs.core.seq( arglist__5862 );;
return request_quota_then_filesystem__delegate.call(this, params);
});
return request_quota_then_filesystem;
})()
;
torrent_client.client.filesystem.get_file = (function get_file(filesystem,path,options,success_callback){
return filesystem.root.getFile(path,jayq.core.clj__GT_js.call(null,options),success_callback);
});
