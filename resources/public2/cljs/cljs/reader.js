goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____7120 = reader;

if(cljs.core.truth_(and__3546__auto____7120))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____7120;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____7121 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____7121))
{return or__3548__auto____7121;
} else
{var or__3548__auto____7122 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____7122))
{return or__3548__auto____7122;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____7123 = reader;

if(cljs.core.truth_(and__3546__auto____7123))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____7123;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____7124 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____7124))
{return or__3548__auto____7124;
} else
{var or__3548__auto____7125 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____7125))
{return or__3548__auto____7125;
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
var this__7126 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__7126.buffer_atom))))
{var idx__7127 = cljs.core.deref.call(null,this__7126.index_atom);

cljs.core.swap_BANG_.call(null,this__7126.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__7126.s,idx__7127);
} else
{var buf__7128 = cljs.core.deref.call(null,this__7126.buffer_atom);

cljs.core.swap_BANG_.call(null,this__7126.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__7128);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__7129 = this;
return cljs.core.swap_BANG_.call(null,this__7129.buffer_atom,(function (p1__7119_SHARP_){
return cljs.core.cons.call(null,ch,p1__7119_SHARP_);
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
var or__3548__auto____7130 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____7130))
{return or__3548__auto____7130;
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
var or__3548__auto____7131 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____7131))
{return or__3548__auto____7131;
} else
{var and__3546__auto____7133 = (function (){var or__3548__auto____7132 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____7132))
{return or__3548__auto____7132;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____7133))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__7134 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__7134);
return next_ch__7134;
})());
} else
{return and__3546__auto____7133;
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
reader_error.cljs$lang$applyTo = (function (arglist__7135){
var rdr = cljs.core.first(arglist__7135);
var msg = cljs.core.rest(arglist__7135);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____7136 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____7136))
{var and__3546__auto____7137 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____7137))
{var and__3546__auto____7138 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____7138))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____7138;
}
} else
{return and__3546__auto____7137;
}
} else
{return and__3546__auto____7136;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__7139 = (new goog.string.StringBuffer(initch));
var ch__7140 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____7141 = (ch__7140 === null);

if(cljs.core.truth_(or__3548__auto____7141))
{return or__3548__auto____7141;
} else
{var or__3548__auto____7142 = cljs.reader.whitespace_QMARK_.call(null,ch__7140);

if(cljs.core.truth_(or__3548__auto____7142))
{return or__3548__auto____7142;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__7140);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__7140);
return sb__7139.toString();
} else
{{
var G__7143 = (function (){sb__7139.append(ch__7140);
return sb__7139;
})();
var G__7144 = cljs.reader.read_char.call(null,rdr);
sb__7139 = G__7143;
ch__7140 = G__7144;
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
var ch__7145 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____7146 = cljs.core._EQ_.call(null,ch__7145,"n");

if(cljs.core.truth_(or__3548__auto____7146))
{return or__3548__auto____7146;
} else
{var or__3548__auto____7147 = cljs.core._EQ_.call(null,ch__7145,"r");

if(cljs.core.truth_(or__3548__auto____7147))
{return or__3548__auto____7147;
} else
{return (ch__7145 === null);
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
var groups__7148 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__7149 = cljs.core.nth.call(null,groups__7148,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____7150 = (void 0 === group3__7149);

if(cljs.core.truth_(or__3548__auto____7150))
{return or__3548__auto____7150;
} else
{return (group3__7149.length < 1);
}
})())))
{return 0;
} else
{var negate__7152 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__7148,1)))?-1:1);
var vec__7151__7153 = (cljs.core.truth_(cljs.core.nth.call(null,groups__7148,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__7148,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__7148,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__7148,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__7148,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__7148,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__7148,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__7148,7),parseInt.call(null,cljs.core.nth.call(null,groups__7148,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__7154 = cljs.core.nth.call(null,vec__7151__7153,0,null);
var radix__7155 = cljs.core.nth.call(null,vec__7151__7153,1,null);

if(cljs.core.truth_((n__7154 === null)))
{return null;
} else
{return (negate__7152 * parseInt.call(null,n__7154,radix__7155));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__7156 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__7157 = cljs.core.nth.call(null,groups__7156,1);
var denominator__7158 = cljs.core.nth.call(null,groups__7156,2);

return (parseInt.call(null,numinator__7157) / parseInt.call(null,denominator__7158));
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
var ch__7159 = cljs.reader.read_char.call(null,reader);
var mapresult__7160 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__7159);

if(cljs.core.truth_(mapresult__7160))
{return mapresult__7160;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____7161 = cljs.core._EQ_.call(null,"u",ch__7159);

if(cljs.core.truth_(or__3548__auto____7161))
{return or__3548__auto____7161;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__7159);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__7159);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__7159);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__7162 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__7162)))
{{
var G__7163 = cljs.reader.read_char.call(null,rdr);
ch__7162 = G__7163;
continue;
}
} else
{return ch__7162;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__7164 = cljs.core.Vector.fromArray([]);

while(true){
var ch__7165 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__7165))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__7165)))
{return a__7164;
} else
{var temp__3695__auto____7166 = cljs.core.get.call(null,cljs.reader.macros,ch__7165);

if(cljs.core.truth_(temp__3695__auto____7166))
{var macrofn__7167 = temp__3695__auto____7166;

var mret__7168 = macrofn__7167.call(null,rdr,ch__7165);

{
var G__7170 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__7168,rdr))?a__7164:cljs.core.conj.call(null,a__7164,mret__7168));
a__7164 = G__7170;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__7165);
var o__7169 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__7171 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__7169,rdr))?a__7164:cljs.core.conj.call(null,a__7164,o__7169));
a__7164 = G__7171;
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
var ch__7172 = cljs.reader.read_char.call(null,rdr);
var dm__7173 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__7172);

if(cljs.core.truth_(dm__7173))
{return dm__7173.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__7172);
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
var l__7174 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__7174))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__7174);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__7175 = (new goog.string.StringBuffer(initch));
var ch__7176 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____7177 = (ch__7176 === null);

if(cljs.core.truth_(or__3548__auto____7177))
{return or__3548__auto____7177;
} else
{var or__3548__auto____7178 = cljs.reader.whitespace_QMARK_.call(null,ch__7176);

if(cljs.core.truth_(or__3548__auto____7178))
{return or__3548__auto____7178;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__7176);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__7176);
var s__7179 = buffer__7175.toString();

var or__3548__auto____7180 = cljs.reader.match_number.call(null,s__7179);

if(cljs.core.truth_(or__3548__auto____7180))
{return or__3548__auto____7180;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__7179,"]");
}
} else
{{
var G__7181 = (function (){buffer__7175.append(ch__7176);
return buffer__7175;
})();
var G__7182 = cljs.reader.read_char.call(null,reader);
buffer__7175 = G__7181;
ch__7176 = G__7182;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__7183 = (new goog.string.StringBuffer());
var ch__7184 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__7184 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__7184)))
{{
var G__7185 = (function (){buffer__7183.append(cljs.reader.escape_char.call(null,buffer__7183,reader));
return buffer__7183;
})();
var G__7186 = cljs.reader.read_char.call(null,reader);
buffer__7183 = G__7185;
ch__7184 = G__7186;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__7184)))
{return buffer__7183.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__7187 = (function (){buffer__7183.append(ch__7184);
return buffer__7183;
})();
var G__7188 = cljs.reader.read_char.call(null,reader);
buffer__7183 = G__7187;
ch__7184 = G__7188;
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
var token__7189 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__7189,"\/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__7189,0,token__7189.indexOf("\/")),cljs.core.subs.call(null,token__7189,(token__7189.indexOf("\/") + 1),token__7189.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__7189,cljs.core.symbol.call(null,token__7189));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__7191 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__7190__7192 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__7191);
var token__7193 = cljs.core.nth.call(null,vec__7190__7192,0,null);
var ns__7194 = cljs.core.nth.call(null,vec__7190__7192,1,null);
var name__7195 = cljs.core.nth.call(null,vec__7190__7192,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____7197 = (function (){var and__3546__auto____7196 = cljs.core.not.call(null,(void 0 === ns__7194));

if(cljs.core.truth_(and__3546__auto____7196))
{return (ns__7194.substring((ns__7194.length - 2),ns__7194.length) === ":\/");
} else
{return and__3546__auto____7196;
}
})();

if(cljs.core.truth_(or__3548__auto____7197))
{return or__3548__auto____7197;
} else
{var or__3548__auto____7198 = ((name__7195[(name__7195.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____7198))
{return or__3548__auto____7198;
} else
{return cljs.core.not.call(null,(token__7193.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__7193);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__7194.substring(0,ns__7194.indexOf("\/")),name__7195);
} else
{return cljs.core.keyword.call(null,token__7193);
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
var m__7199 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__7199)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__7200 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__2312__auto____7201 = o__7200;

if(cljs.core.truth_((function (){var and__3546__auto____7202 = x__2312__auto____7201;

if(cljs.core.truth_(and__3546__auto____7202))
{var and__3546__auto____7203 = x__2312__auto____7201.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____7203))
{return cljs.core.not.call(null,x__2312__auto____7201.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____7203;
}
} else
{return and__3546__auto____7202;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__2312__auto____7201);
}
})()))
{return cljs.core.with_meta.call(null,o__7200,cljs.core.merge.call(null,cljs.core.meta.call(null,o__7200),m__7199));
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
var ch__7204 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__7204 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__7204)))
{{
var G__7206 = reader;
var G__7207 = eof_is_error;
var G__7208 = sentinel;
var G__7209 = is_recursive;
reader = G__7206;
eof_is_error = G__7207;
sentinel = G__7208;
is_recursive = G__7209;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__7204)))
{{
var G__7210 = cljs.reader.read_comment.call(null,reader,ch__7204);
var G__7211 = eof_is_error;
var G__7212 = sentinel;
var G__7213 = is_recursive;
reader = G__7210;
eof_is_error = G__7211;
sentinel = G__7212;
is_recursive = G__7213;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__7205 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__7204))?cljs.reader.macros.call(null,ch__7204).call(null,reader,ch__7204):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__7204))?cljs.reader.read_number.call(null,reader,ch__7204):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__7204):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__7205,reader)))
{{
var G__7214 = reader;
var G__7215 = eof_is_error;
var G__7216 = sentinel;
var G__7217 = is_recursive;
reader = G__7214;
eof_is_error = G__7215;
sentinel = G__7216;
is_recursive = G__7217;
continue;
}
} else
{return res__7205;
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
var r__7218 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__7218,true,null,false);
});
