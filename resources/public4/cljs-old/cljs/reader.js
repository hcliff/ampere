goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____7742 = reader;

if(cljs.core.truth_(and__3546__auto____7742))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____7742;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____7743 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____7743))
{return or__3548__auto____7743;
} else
{var or__3548__auto____7744 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____7744))
{return or__3548__auto____7744;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____7745 = reader;

if(cljs.core.truth_(and__3546__auto____7745))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____7745;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____7746 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____7746))
{return or__3548__auto____7746;
} else
{var or__3548__auto____7747 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____7747))
{return or__3548__auto____7747;
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
var this__7748 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__7748.buffer_atom))))
{var idx__7749 = cljs.core.deref.call(null,this__7748.index_atom);

cljs.core.swap_BANG_.call(null,this__7748.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__7748.s,idx__7749);
} else
{var buf__7750 = cljs.core.deref.call(null,this__7748.buffer_atom);

cljs.core.swap_BANG_.call(null,this__7748.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__7750);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__7751 = this;
return cljs.core.swap_BANG_.call(null,this__7751.buffer_atom,(function (p1__7741_SHARP_){
return cljs.core.cons.call(null,ch,p1__7741_SHARP_);
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
var or__3548__auto____7752 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____7752))
{return or__3548__auto____7752;
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
var or__3548__auto____7753 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____7753))
{return or__3548__auto____7753;
} else
{var and__3546__auto____7755 = (function (){var or__3548__auto____7754 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____7754))
{return or__3548__auto____7754;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____7755))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__7756 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__7756);
return next_ch__7756;
})());
} else
{return and__3546__auto____7755;
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
reader_error.cljs$lang$applyTo = (function (arglist__7757){
var rdr = cljs.core.first(arglist__7757);
var msg = cljs.core.rest(arglist__7757);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____7758 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____7758))
{var and__3546__auto____7759 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____7759))
{var and__3546__auto____7760 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____7760))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____7760;
}
} else
{return and__3546__auto____7759;
}
} else
{return and__3546__auto____7758;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__7761 = (new goog.string.StringBuffer(initch));
var ch__7762 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____7763 = (ch__7762 === null);

if(cljs.core.truth_(or__3548__auto____7763))
{return or__3548__auto____7763;
} else
{var or__3548__auto____7764 = cljs.reader.whitespace_QMARK_.call(null,ch__7762);

if(cljs.core.truth_(or__3548__auto____7764))
{return or__3548__auto____7764;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__7762);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__7762);
return sb__7761.toString();
} else
{{
var G__7765 = (function (){sb__7761.append(ch__7762);
return sb__7761;
})();
var G__7766 = cljs.reader.read_char.call(null,rdr);
sb__7761 = G__7765;
ch__7762 = G__7766;
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
var ch__7767 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____7768 = cljs.core._EQ_.call(null,ch__7767,"n");

if(cljs.core.truth_(or__3548__auto____7768))
{return or__3548__auto____7768;
} else
{var or__3548__auto____7769 = cljs.core._EQ_.call(null,ch__7767,"r");

if(cljs.core.truth_(or__3548__auto____7769))
{return or__3548__auto____7769;
} else
{return (ch__7767 === null);
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
var groups__7770 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__7771 = cljs.core.nth.call(null,groups__7770,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____7772 = (void 0 === group3__7771);

if(cljs.core.truth_(or__3548__auto____7772))
{return or__3548__auto____7772;
} else
{return (group3__7771.length < 1);
}
})())))
{return 0;
} else
{var negate__7774 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__7770,1)))?-1:1);
var vec__7773__7775 = (cljs.core.truth_(cljs.core.nth.call(null,groups__7770,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__7770,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__7770,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__7770,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__7770,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__7770,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__7770,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__7770,7),parseInt.call(null,cljs.core.nth.call(null,groups__7770,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__7776 = cljs.core.nth.call(null,vec__7773__7775,0,null);
var radix__7777 = cljs.core.nth.call(null,vec__7773__7775,1,null);

if(cljs.core.truth_((n__7776 === null)))
{return null;
} else
{return (negate__7774 * parseInt.call(null,n__7776,radix__7777));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__7778 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__7779 = cljs.core.nth.call(null,groups__7778,1);
var denominator__7780 = cljs.core.nth.call(null,groups__7778,2);

return (parseInt.call(null,numinator__7779) / parseInt.call(null,denominator__7780));
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
var ch__7781 = cljs.reader.read_char.call(null,reader);
var mapresult__7782 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__7781);

if(cljs.core.truth_(mapresult__7782))
{return mapresult__7782;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____7783 = cljs.core._EQ_.call(null,"u",ch__7781);

if(cljs.core.truth_(or__3548__auto____7783))
{return or__3548__auto____7783;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__7781);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__7781);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__7781);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__7784 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__7784)))
{{
var G__7785 = cljs.reader.read_char.call(null,rdr);
ch__7784 = G__7785;
continue;
}
} else
{return ch__7784;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__7786 = cljs.core.Vector.fromArray([]);

while(true){
var ch__7787 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__7787))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__7787)))
{return a__7786;
} else
{var temp__3695__auto____7788 = cljs.core.get.call(null,cljs.reader.macros,ch__7787);

if(cljs.core.truth_(temp__3695__auto____7788))
{var macrofn__7789 = temp__3695__auto____7788;

var mret__7790 = macrofn__7789.call(null,rdr,ch__7787);

{
var G__7792 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__7790,rdr))?a__7786:cljs.core.conj.call(null,a__7786,mret__7790));
a__7786 = G__7792;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__7787);
var o__7791 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__7793 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__7791,rdr))?a__7786:cljs.core.conj.call(null,a__7786,o__7791));
a__7786 = G__7793;
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
var ch__7794 = cljs.reader.read_char.call(null,rdr);
var dm__7795 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__7794);

if(cljs.core.truth_(dm__7795))
{return dm__7795.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__7794);
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
var l__7796 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__7796))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__7796);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__7797 = (new goog.string.StringBuffer(initch));
var ch__7798 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____7799 = (ch__7798 === null);

if(cljs.core.truth_(or__3548__auto____7799))
{return or__3548__auto____7799;
} else
{var or__3548__auto____7800 = cljs.reader.whitespace_QMARK_.call(null,ch__7798);

if(cljs.core.truth_(or__3548__auto____7800))
{return or__3548__auto____7800;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__7798);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__7798);
var s__7801 = buffer__7797.toString();

var or__3548__auto____7802 = cljs.reader.match_number.call(null,s__7801);

if(cljs.core.truth_(or__3548__auto____7802))
{return or__3548__auto____7802;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__7801,"]");
}
} else
{{
var G__7803 = (function (){buffer__7797.append(ch__7798);
return buffer__7797;
})();
var G__7804 = cljs.reader.read_char.call(null,reader);
buffer__7797 = G__7803;
ch__7798 = G__7804;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__7805 = (new goog.string.StringBuffer());
var ch__7806 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__7806 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__7806)))
{{
var G__7807 = (function (){buffer__7805.append(cljs.reader.escape_char.call(null,buffer__7805,reader));
return buffer__7805;
})();
var G__7808 = cljs.reader.read_char.call(null,reader);
buffer__7805 = G__7807;
ch__7806 = G__7808;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__7806)))
{return buffer__7805.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__7809 = (function (){buffer__7805.append(ch__7806);
return buffer__7805;
})();
var G__7810 = cljs.reader.read_char.call(null,reader);
buffer__7805 = G__7809;
ch__7806 = G__7810;
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
var token__7811 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__7811,"\/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__7811,0,token__7811.indexOf("\/")),cljs.core.subs.call(null,token__7811,(token__7811.indexOf("\/") + 1),token__7811.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__7811,cljs.core.symbol.call(null,token__7811));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__7813 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__7812__7814 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__7813);
var token__7815 = cljs.core.nth.call(null,vec__7812__7814,0,null);
var ns__7816 = cljs.core.nth.call(null,vec__7812__7814,1,null);
var name__7817 = cljs.core.nth.call(null,vec__7812__7814,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____7819 = (function (){var and__3546__auto____7818 = cljs.core.not.call(null,(void 0 === ns__7816));

if(cljs.core.truth_(and__3546__auto____7818))
{return (ns__7816.substring((ns__7816.length - 2),ns__7816.length) === ":\/");
} else
{return and__3546__auto____7818;
}
})();

if(cljs.core.truth_(or__3548__auto____7819))
{return or__3548__auto____7819;
} else
{var or__3548__auto____7820 = ((name__7817[(name__7817.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____7820))
{return or__3548__auto____7820;
} else
{return cljs.core.not.call(null,(token__7815.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__7815);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__7816.substring(0,ns__7816.indexOf("\/")),name__7817);
} else
{return cljs.core.keyword.call(null,token__7815);
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
var m__7821 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__7821)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__7822 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__2312__auto____7823 = o__7822;

if(cljs.core.truth_((function (){var and__3546__auto____7824 = x__2312__auto____7823;

if(cljs.core.truth_(and__3546__auto____7824))
{var and__3546__auto____7825 = x__2312__auto____7823.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____7825))
{return cljs.core.not.call(null,x__2312__auto____7823.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____7825;
}
} else
{return and__3546__auto____7824;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__2312__auto____7823);
}
})()))
{return cljs.core.with_meta.call(null,o__7822,cljs.core.merge.call(null,cljs.core.meta.call(null,o__7822),m__7821));
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
var ch__7826 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__7826 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__7826)))
{{
var G__7828 = reader;
var G__7829 = eof_is_error;
var G__7830 = sentinel;
var G__7831 = is_recursive;
reader = G__7828;
eof_is_error = G__7829;
sentinel = G__7830;
is_recursive = G__7831;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__7826)))
{{
var G__7832 = cljs.reader.read_comment.call(null,reader,ch__7826);
var G__7833 = eof_is_error;
var G__7834 = sentinel;
var G__7835 = is_recursive;
reader = G__7832;
eof_is_error = G__7833;
sentinel = G__7834;
is_recursive = G__7835;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__7827 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__7826))?cljs.reader.macros.call(null,ch__7826).call(null,reader,ch__7826):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__7826))?cljs.reader.read_number.call(null,reader,ch__7826):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__7826):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__7827,reader)))
{{
var G__7836 = reader;
var G__7837 = eof_is_error;
var G__7838 = sentinel;
var G__7839 = is_recursive;
reader = G__7836;
eof_is_error = G__7837;
sentinel = G__7838;
is_recursive = G__7839;
continue;
}
} else
{return res__7827;
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
var r__7840 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__7840,true,null,false);
});
