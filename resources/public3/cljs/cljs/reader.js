goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____8289 = reader;

if(cljs.core.truth_(and__3546__auto____8289))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____8289;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____8290 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____8290))
{return or__3548__auto____8290;
} else
{var or__3548__auto____8291 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____8291))
{return or__3548__auto____8291;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____8292 = reader;

if(cljs.core.truth_(and__3546__auto____8292))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____8292;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____8293 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____8293))
{return or__3548__auto____8293;
} else
{var or__3548__auto____8294 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____8294))
{return or__3548__auto____8294;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.cljs$core$IPrintable$_pr_seq = (function (this__2227__auto__){
return cljs.core.list.call(null,"cljs.reader.StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char = (function (reader){
var this__8295 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__8295.buffer_atom))))
{var idx__8296 = cljs.core.deref.call(null,this__8295.index_atom);

cljs.core.swap_BANG_.call(null,this__8295.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__8295.s,idx__8296);
} else
{var buf__8297 = cljs.core.deref.call(null,this__8295.buffer_atom);

cljs.core.swap_BANG_.call(null,this__8295.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__8297);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__8298 = this;
return cljs.core.swap_BANG_.call(null,this__8298.buffer_atom,(function (p1__8288_SHARP_){
return cljs.core.cons.call(null,ch,p1__8288_SHARP_);
}));
});
cljs.reader.StringPushbackReader;
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3548__auto____8299 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____8299))
{return or__3548__auto____8299;
} else
{return cljs.core._EQ_.call(null,",",ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric.call(null,ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return cljs.core._EQ_.call(null,";",ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3548__auto____8300 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____8300))
{return or__3548__auto____8300;
} else
{var and__3546__auto____8302 = (function (){var or__3548__auto____8301 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____8301))
{return or__3548__auto____8301;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____8302))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__8303 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__8303);
return next_ch__8303;
})());
} else
{return and__3546__auto____8302;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw cljs.core.apply.call(null,cljs.core.str,msg);
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__8304){
var rdr = cljs.core.first(arglist__8304);
var msg = cljs.core.rest(arglist__8304);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____8305 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____8305))
{var and__3546__auto____8306 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____8306))
{var and__3546__auto____8307 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____8307))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____8307;
}
} else
{return and__3546__auto____8306;
}
} else
{return and__3546__auto____8305;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__8308 = (new goog.string.StringBuffer(initch));
var ch__8309 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____8310 = (ch__8309 === null);

if(cljs.core.truth_(or__3548__auto____8310))
{return or__3548__auto____8310;
} else
{var or__3548__auto____8311 = cljs.reader.whitespace_QMARK_.call(null,ch__8309);

if(cljs.core.truth_(or__3548__auto____8311))
{return or__3548__auto____8311;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__8309);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__8309);
return sb__8308.toString();
} else
{{
var G__8312 = (function (){sb__8308.append(ch__8309);
return sb__8308;
})();
var G__8313 = cljs.reader.read_char.call(null,rdr);
sb__8308 = G__8312;
ch__8309 = G__8313;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){

while(true){
var ch__8314 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____8315 = cljs.core._EQ_.call(null,ch__8314,"n");

if(cljs.core.truth_(or__3548__auto____8315))
{return or__3548__auto____8315;
} else
{var or__3548__auto____8316 = cljs.core._EQ_.call(null,ch__8314,"r");

if(cljs.core.truth_(or__3548__auto____8316))
{return or__3548__auto____8316;
} else
{return (ch__8314 === null);
}
}
})()))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)\/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"[:]?([^0-9\/].*\/)?([^0-9\/][^\/]*)");
cljs.reader.match_int = (function match_int(s){
var groups__8317 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__8318 = cljs.core.nth.call(null,groups__8317,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____8319 = (void 0 === group3__8318);

if(cljs.core.truth_(or__3548__auto____8319))
{return or__3548__auto____8319;
} else
{return (group3__8318.length < 1);
}
})())))
{return 0;
} else
{var negate__8321 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__8317,1)))?-1:1);
var vec__8320__8322 = (cljs.core.truth_(cljs.core.nth.call(null,groups__8317,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__8317,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__8317,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__8317,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__8317,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__8317,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__8317,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__8317,7),parseInt.call(null,cljs.core.nth.call(null,groups__8317,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__8323 = cljs.core.nth.call(null,vec__8320__8322,0,null);
var radix__8324 = cljs.core.nth.call(null,vec__8320__8322,1,null);

if(cljs.core.truth_((n__8323 === null)))
{return null;
} else
{return (negate__8321 * parseInt.call(null,n__8323,radix__8324));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__8325 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__8326 = cljs.core.nth.call(null,groups__8325,1);
var denominator__8327 = cljs.core.nth.call(null,groups__8325,2);

return (parseInt.call(null,numinator__8326) / parseInt.call(null,denominator__8327));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat.call(null,s);
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = cljs.core.HashMap.fromArrays(["t","r","n","\\","\"","b","f"],["\t","\r","\n","\\","\"","\b","\f"]);
cljs.reader.read_unicode_char = (function read_unicode_char(reader,initch){
return cljs.reader.reader_error.call(null,reader,"Unicode characters not supported by reader (yet)");
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__8328 = cljs.reader.read_char.call(null,reader);
var mapresult__8329 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__8328);

if(cljs.core.truth_(mapresult__8329))
{return mapresult__8329;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____8330 = cljs.core._EQ_.call(null,"u",ch__8328);

if(cljs.core.truth_(or__3548__auto____8330))
{return or__3548__auto____8330;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__8328);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__8328);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__8328);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__8331 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__8331)))
{{
var G__8332 = cljs.reader.read_char.call(null,rdr);
ch__8331 = G__8332;
continue;
}
} else
{return ch__8331;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__8333 = cljs.core.Vector.fromArray([]);

while(true){
var ch__8334 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__8334))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__8334)))
{return a__8333;
} else
{var temp__3695__auto____8335 = cljs.core.get.call(null,cljs.reader.macros,ch__8334);

if(cljs.core.truth_(temp__3695__auto____8335))
{var macrofn__8336 = temp__3695__auto____8335;

var mret__8337 = macrofn__8336.call(null,rdr,ch__8334);

{
var G__8339 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__8337,rdr))?a__8333:cljs.core.conj.call(null,a__8333,mret__8337));
a__8333 = G__8339;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__8334);
var o__8338 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__8340 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__8338,rdr))?a__8333:cljs.core.conj.call(null,a__8333,o__8338));
a__8333 = G__8340;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__8341 = cljs.reader.read_char.call(null,rdr);
var dm__8342 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__8341);

if(cljs.core.truth_(dm__8342))
{return dm__8342.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__8341);
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__8343 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__8343))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__8343);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__8344 = (new goog.string.StringBuffer(initch));
var ch__8345 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____8346 = (ch__8345 === null);

if(cljs.core.truth_(or__3548__auto____8346))
{return or__3548__auto____8346;
} else
{var or__3548__auto____8347 = cljs.reader.whitespace_QMARK_.call(null,ch__8345);

if(cljs.core.truth_(or__3548__auto____8347))
{return or__3548__auto____8347;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__8345);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__8345);
var s__8348 = buffer__8344.toString();

var or__3548__auto____8349 = cljs.reader.match_number.call(null,s__8348);

if(cljs.core.truth_(or__3548__auto____8349))
{return or__3548__auto____8349;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__8348,"]");
}
} else
{{
var G__8350 = (function (){buffer__8344.append(ch__8345);
return buffer__8344;
})();
var G__8351 = cljs.reader.read_char.call(null,reader);
buffer__8344 = G__8350;
ch__8345 = G__8351;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__8352 = (new goog.string.StringBuffer());
var ch__8353 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__8353 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__8353)))
{{
var G__8354 = (function (){buffer__8352.append(cljs.reader.escape_char.call(null,buffer__8352,reader));
return buffer__8352;
})();
var G__8355 = cljs.reader.read_char.call(null,reader);
buffer__8352 = G__8354;
ch__8353 = G__8355;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__8353)))
{return buffer__8352.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__8356 = (function (){buffer__8352.append(ch__8353);
return buffer__8352;
})();
var G__8357 = cljs.reader.read_char.call(null,reader);
buffer__8352 = G__8356;
ch__8353 = G__8357;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = cljs.core.ObjMap.fromObject(["nil","true","false"],{"nil":null,"true":true,"false":false});
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__8358 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__8358,"\/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__8358,0,token__8358.indexOf("\/")),cljs.core.subs.call(null,token__8358,(token__8358.indexOf("\/") + 1),token__8358.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__8358,cljs.core.symbol.call(null,token__8358));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__8360 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__8359__8361 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__8360);
var token__8362 = cljs.core.nth.call(null,vec__8359__8361,0,null);
var ns__8363 = cljs.core.nth.call(null,vec__8359__8361,1,null);
var name__8364 = cljs.core.nth.call(null,vec__8359__8361,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____8366 = (function (){var and__3546__auto____8365 = cljs.core.not.call(null,(void 0 === ns__8363));

if(cljs.core.truth_(and__3546__auto____8365))
{return (ns__8363.substring((ns__8363.length - 2),ns__8363.length) === ":\/");
} else
{return and__3546__auto____8365;
}
})();

if(cljs.core.truth_(or__3548__auto____8366))
{return or__3548__auto____8366;
} else
{var or__3548__auto____8367 = ((name__8364[(name__8364.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____8367))
{return or__3548__auto____8367;
} else
{return cljs.core.not.call(null,(token__8362.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__8362);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__8363.substring(0,ns__8363.indexOf("\/")),name__8364);
} else
{return cljs.core.keyword.call(null,token__8362);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,f)))
{return cljs.core.HashMap.fromArrays([f],[true]);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.call(null,sym,cljs.reader.read.call(null,rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__8368 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__8368)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__8369 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__2312__auto____8370 = o__8369;

if(cljs.core.truth_((function (){var and__3546__auto____8371 = x__2312__auto____8370;

if(cljs.core.truth_(and__3546__auto____8371))
{var and__3546__auto____8372 = x__2312__auto____8370.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____8372))
{return cljs.core.not.call(null,x__2312__auto____8370.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____8372;
}
} else
{return and__3546__auto____8371;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__2312__auto____8370);
}
})()))
{return cljs.core.with_meta.call(null,o__8369,cljs.core.merge.call(null,cljs.core.meta.call(null,o__8369),m__8368));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = cljs.core.HashMap.fromArrays(["@","`","\"","#","%","'","(",")",":",";","[","{","\\","]","}","^","~"],[cljs.reader.wrapping_reader.call(null,"\uFDD1'deref"),cljs.reader.not_implemented,cljs.reader.read_string,cljs.reader.read_dispatch,cljs.reader.not_implemented,cljs.reader.wrapping_reader.call(null,"\uFDD1'quote"),cljs.reader.read_list,cljs.reader.read_unmatched_delimiter,cljs.reader.read_keyword,cljs.reader.not_implemented,cljs.reader.read_vector,cljs.reader.read_map,cljs.reader.read_char,cljs.reader.read_unmatched_delimiter,cljs.reader.read_unmatched_delimiter,cljs.reader.read_meta,cljs.reader.not_implemented]);
cljs.reader.dispatch_macros = cljs.core.ObjMap.fromObject(["{","<","\"","!","_"],{"{":cljs.reader.read_set,"<":cljs.reader.throwing_reader.call(null,"Unreadable form"),"\"":cljs.reader.read_regex,"!":cljs.reader.read_comment,"_":cljs.reader.read_discard});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__8373 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__8373 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__8373)))
{{
var G__8375 = reader;
var G__8376 = eof_is_error;
var G__8377 = sentinel;
var G__8378 = is_recursive;
reader = G__8375;
eof_is_error = G__8376;
sentinel = G__8377;
is_recursive = G__8378;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__8373)))
{{
var G__8379 = cljs.reader.read_comment.call(null,reader,ch__8373);
var G__8380 = eof_is_error;
var G__8381 = sentinel;
var G__8382 = is_recursive;
reader = G__8379;
eof_is_error = G__8380;
sentinel = G__8381;
is_recursive = G__8382;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__8374 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__8373))?cljs.reader.macros.call(null,ch__8373).call(null,reader,ch__8373):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__8373))?cljs.reader.read_number.call(null,reader,ch__8373):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__8373):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__8374,reader)))
{{
var G__8383 = reader;
var G__8384 = eof_is_error;
var G__8385 = sentinel;
var G__8386 = is_recursive;
reader = G__8383;
eof_is_error = G__8384;
sentinel = G__8385;
is_recursive = G__8386;
continue;
}
} else
{return res__8374;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__8387 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__8387,true,null,false);
});
