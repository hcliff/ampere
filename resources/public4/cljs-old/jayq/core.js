goog.provide('jayq.core');
goog.require('cljs.core');
jayq.core.files = (function files($elem){
return cljs.core.js__GT_clj.call(null,cljs.core.first.call(null,$elem).files);
});
