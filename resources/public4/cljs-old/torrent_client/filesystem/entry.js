goog.provide('torrent_client.filesystem.entry');
goog.require('cljs.core');
goog.require('jayq.core');
torrent_client.filesystem.entry.create_writer = (function create_writer(file_entry){
return async_kit.async_STAR_.call(null,(function (success_callback,error_callback){
return file_entry.createWriter(success_callback,error_callback);
}));
});
torrent_client.filesystem.entry.get_file = (function get_file(filesystem,path,options){
return async_kit.async_STAR_.call(null,(function (success_callback,error_callback){
return filesystem.root.getFile(path,jayq.core.clj__GT_js.call(null,options),success_callback);
}));
});
