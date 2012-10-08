goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____7974 = reader;

if(cljs.core.truth_(and__3546__auto____7974))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____7974;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____7975 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____7975))
{return or__3548__auto____7975;
} else
{var or__3548__auto____7976 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____7976))
{return or__3548__auto____7976;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____7977 = reader;

if(cljs.core.truth_(and__3546__auto____7977))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____7977;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____7978 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____7978))
{return or__3548__auto____7978;
} else
{var or__3548__auto____7979 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____7979))
{return or__3548__auto____7979;
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
var this__7980 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__7980.buffer_atom))))
{var idx__7981 = cljs.core.deref.call(null,this__7980.index_atom);

cljs.core.swap_BANG_.call(null,this__7980.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__7980.s,idx__7981);
} else
{var buf__7982 = cljs.core.deref.call(null,this__7980.buffer_atom);

cljs.core.swap_BANG_.call(null,this__7980.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__7982);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__7983 = this;
return cljs.core.swap_BANG_.call(null,this__7983.buffer_atom,(function (p1__7973_SHARP_){
return cljs.core.cons.call(null,ch,p1__7973_SHARP_);
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
var or__3548__auto____7984 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____7984))
{return or__3548__auto____7984;
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
var or__3548__auto____7985 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____7985))
{return or__3548__auto____7985;
} else
{var and__3546__auto____7987 = (function (){var or__3548__auto____7986 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____7986))
{return or__3548__auto____7986;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____7987))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__7988 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__7988);
return next_ch__7988;
})());
} else
{return and__3546__auto____7987;
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
reader_error.cljs$lang$applyTo = (function (arglist__7989){
var rdr = cljs.core.first(arglist__7989);
var msg = cljs.core.rest(arglist__7989);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____7990 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____7990))
{var and__3546__auto____7991 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____7991))
{var and__3546__auto____7992 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____7992))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____7992;
}
} else
{return and__3546__auto____7991;
}
} else
{return and__3546__auto____7990;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__7993 = (new goog.string.StringBuffer(initch));
var ch__7994 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____7995 = (ch__7994 === null);

if(cljs.core.truth_(or__3548__auto____7995))
{return or__3548__auto____7995;
} else
{var or__3548__auto____7996 = cljs.reader.whitespace_QMARK_.call(null,ch__7994);

if(cljs.core.truth_(or__3548__auto____7996))
{return or__3548__auto____7996;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__7994);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__7994);
return sb__7993.toString();
} else
{{
var G__7997 = (function (){sb__7993.append(ch__7994);
return sb__7993;
})();
var G__7998 = cljs.reader.read_char.call(null,rdr);
sb__7993 = G__7997;
ch__7994 = G__7998;
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
var ch__7999 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____8000 = cljs.core._EQ_.call(null,ch__7999,"n");

if(cljs.core.truth_(or__3548__auto____8000))
{return or__3548__auto____8000;
} else
{var or__3548__auto____8001 = cljs.core._EQ_.call(null,ch__7999,"r");

if(cljs.core.truth_(or__3548__auto____8001))
{return or__3548__auto____8001;
} else
{return (ch__7999 === null);
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
var groups__8002 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__8003 = cljs.core.nth.call(null,groups__8002,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____8004 = (void 0 === group3__8003);

if(cljs.core.truth_(or__3548__auto____8004))
{return or__3548__auto____8004;
} else
{return (group3__8003.length < 1);
}
})())))
{return 0;
} else
{var negate__8006 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__8002,1)))?-1:1);
var vec__8005__8007 = (cljs.core.truth_(cljs.core.nth.call(null,groups__8002,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__8002,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__8002,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__8002,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__8002,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__8002,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__8002,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__8002,7),parseInt.call(null,cljs.core.nth.call(null,groups__8002,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__8008 = cljs.core.nth.call(null,vec__8005__8007,0,null);
var radix__8009 = cljs.core.nth.call(null,vec__8005__8007,1,null);

if(cljs.core.truth_((n__8008 === null)))
{return null;
} else
{return (negate__8006 * parseInt.call(null,n__8008,radix__8009));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__8010 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__8011 = cljs.core.nth.call(null,groups__8010,1);
var denominator__8012 = cljs.core.nth.call(null,groups__8010,2);

return (parseInt.call(null,numinator__8011) / parseInt.call(null,denominator__8012));
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
var ch__8013 = cljs.reader.read_char.call(null,reader);
var mapresult__8014 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__8013);

if(cljs.core.truth_(mapresult__8014))
{return mapresult__8014;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____8015 = cljs.core._EQ_.call(null,"u",ch__8013);

if(cljs.core.truth_(or__3548__auto____8015))
{return or__3548__auto____8015;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__8013);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__8013);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__8013);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__8016 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__8016)))
{{
var G__8017 = cljs.reader.read_char.call(null,rdr);
ch__8016 = G__8017;
continue;
}
} else
{return ch__8016;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__8018 = cljs.core.Vector.fromArray([]);

while(true){
var ch__8019 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__8019))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__8019)))
{return a__8018;
} else
{var temp__3695__auto____8020 = cljs.core.get.call(null,cljs.reader.macros,ch__8019);

if(cljs.core.truth_(temp__3695__auto____8020))
{var macrofn__8021 = temp__3695__auto____8020;

var mret__8022 = macrofn__8021.call(null,rdr,ch__8019);

{
var G__8024 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__8022,rdr))?a__8018:cljs.core.conj.call(null,a__8018,mret__8022));
a__8018 = G__8024;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__8019);
var o__8023 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__8025 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__8023,rdr))?a__8018:cljs.core.conj.call(null,a__8018,o__8023));
a__8018 = G__8025;
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
var ch__8026 = cljs.reader.read_char.call(null,rdr);
var dm__8027 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__8026);

if(cljs.core.truth_(dm__8027))
{return dm__8027.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__8026);
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
var l__8028 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__8028))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__8028);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__8029 = (new goog.string.StringBuffer(initch));
var ch__8030 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____8031 = (ch__8030 === null);

if(cljs.core.truth_(or__3548__auto____8031))
{return or__3548__auto____8031;
} else
{var or__3548__auto____8032 = cljs.reader.whitespace_QMARK_.call(null,ch__8030);

if(cljs.core.truth_(or__3548__auto____8032))
{return or__3548__auto____8032;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__8030);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__8030);
var s__8033 = buffer__8029.toString();

var or__3548__auto____8034 = cljs.reader.match_number.call(null,s__8033);

if(cljs.core.truth_(or__3548__auto____8034))
{return or__3548__auto____8034;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__8033,"]");
}
} else
{{
var G__8035 = (function (){buffer__8029.append(ch__8030);
return buffer__8029;
})();
var G__8036 = cljs.reader.read_char.call(null,reader);
buffer__8029 = G__8035;
ch__8030 = G__8036;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__8037 = (new goog.string.StringBuffer());
var ch__8038 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__8038 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__8038)))
{{
var G__8039 = (function (){buffer__8037.append(cljs.reader.escape_char.call(null,buffer__8037,reader));
return buffer__8037;
})();
var G__8040 = cljs.reader.read_char.call(null,reader);
buffer__8037 = G__8039;
ch__8038 = G__8040;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__8038)))
{return buffer__8037.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__8041 = (function (){buffer__8037.append(ch__8038);
return buffer__8037;
})();
var G__8042 = cljs.reader.read_char.call(null,reader);
buffer__8037 = G__8041;
ch__8038 = G__8042;
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
var token__8043 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__8043,"\/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__8043,0,token__8043.indexOf("\/")),cljs.core.subs.call(null,token__8043,(token__8043.indexOf("\/") + 1),token__8043.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__8043,cljs.core.symbol.call(null,token__8043));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__8045 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__8044__8046 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__8045);
var token__8047 = cljs.core.nth.call(null,vec__8044__8046,0,null);
var ns__8048 = cljs.core.nth.call(null,vec__8044__8046,1,null);
var name__8049 = cljs.core.nth.call(null,vec__8044__8046,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____8051 = (function (){var and__3546__auto____8050 = cljs.core.not.call(null,(void 0 === ns__8048));

if(cljs.core.truth_(and__3546__auto____8050))
{return (ns__8048.substring((ns__8048.length - 2),ns__8048.length) === ":\/");
} else
{return and__3546__auto____8050;
}
})();

if(cljs.core.truth_(or__3548__auto____8051))
{return or__3548__auto____8051;
} else
{var or__3548__auto____8052 = ((name__8049[(name__8049.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____8052))
{return or__3548__auto____8052;
} else
{return cljs.core.not.call(null,(token__8047.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__8047);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__8048.substring(0,ns__8048.indexOf("\/")),name__8049);
} else
{return cljs.core.keyword.call(null,token__8047);
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
var m__8053 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__8053)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__8054 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__2312__auto____8055 = o__8054;

if(cljs.core.truth_((function (){var and__3546__auto____8056 = x__2312__auto____8055;

if(cljs.core.truth_(and__3546__auto____8056))
{var and__3546__auto____8057 = x__2312__auto____8055.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____8057))
{return cljs.core.not.call(null,x__2312__auto____8055.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____8057;
}
} else
{return and__3546__auto____8056;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__2312__auto____8055);
}
})()))
{return cljs.core.with_meta.call(null,o__8054,cljs.core.merge.call(null,cljs.core.meta.call(null,o__8054),m__8053));
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
var ch__8058 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__8058 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__8058)))
{{
var G__8060 = reader;
var G__8061 = eof_is_error;
var G__8062 = sentinel;
var G__8063 = is_recursive;
reader = G__8060;
eof_is_error = G__8061;
sentinel = G__8062;
is_recursive = G__8063;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__8058)))
{{
var G__8064 = cljs.reader.read_comment.call(null,reader,ch__8058);
var G__8065 = eof_is_error;
var G__8066 = sentinel;
var G__8067 = is_recursive;
reader = G__8064;
eof_is_error = G__8065;
sentinel = G__8066;
is_recursive = G__8067;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__8059 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__8058))?cljs.reader.macros.call(null,ch__8058).call(null,reader,ch__8058):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__8058))?cljs.reader.read_number.call(null,reader,ch__8058):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__8058):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__8059,reader)))
{{
var G__8068 = reader;
var G__8069 = eof_is_error;
var G__8070 = sentinel;
var G__8071 = is_recursive;
reader = G__8068;
eof_is_error = G__8069;
sentinel = G__8070;
is_recursive = G__8071;
continue;
}
} else
{return res__8059;
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
var r__8072 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__8072,true,null,false);
});
