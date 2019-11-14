// Generated from ./Tsp.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class TspLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly OR = 38;
	public static readonly AND = 39;
	public static readonly NE = 40;
	public static readonly BIT_OR = 41;
	public static readonly BIT_XOR = 42;
	public static readonly BIT_AND = 43;
	public static readonly BIT_LS = 44;
	public static readonly BIT_RS = 45;
	public static readonly LOGICAL_NOT = 46;
	public static readonly BOOLEAN = 47;
	public static readonly LOCAL = 48;
	public static readonly VARARG = 49;
	public static readonly LONGCOMMENT = 50;
	public static readonly LINE_COMMENT = 51;
	public static readonly SHEBANG = 52;
	public static readonly NIL = 53;
	public static readonly NAME = 54;
	public static readonly NORMALSTRING = 55;
	public static readonly CHARSTRING = 56;
	public static readonly LONGSTRING = 57;
	public static readonly INT = 58;
	public static readonly HEX = 59;
	public static readonly FLOAT = 60;
	public static readonly HORIZONTAL_WS = 61;
	public static readonly VERTICAL_WS = 62;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", "T__32", 
		"T__33", "T__34", "T__35", "T__36", "OR", "AND", "NE", "BIT_OR", "BIT_XOR", 
		"BIT_AND", "BIT_LS", "BIT_RS", "LOGICAL_NOT", "BOOLEAN", "LOCAL", "VARARG", 
		"LONGCOMMENT", "LINE_COMMENT", "SHEBANG", "NIL", "NAME", "NORMALSTRING", 
		"CHARSTRING", "LONGSTRING", "NestedString", "INT", "HEX", "FLOAT", "ExponentPart", 
		"EscapeSequence", "DecimalEscape", "HexEscape", "Digit", "HexDigit", "HORIZONTAL_WS", 
		"VERTICAL_WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'do'", "'end'", "'while'", "'repeat'", "'until'", "'if'", 
		"'then'", "'elseif'", "'else'", "'return'", "','", "'break'", "'for'", 
		"'='", "'in'", "'function'", "'.'", "':'", "'('", "')'", "'['", "']'", 
		"'{'", "'}'", "'<'", "'>'", "'<='", "'>='", "'=='", "'..'", "'+'", "'-'", 
		"'*'", "'/'", "'^'", "'not'", "'or'", "'and'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'local'", "'...'", 
		undefined, undefined, undefined, "'nil'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "OR", "AND", "NE", "BIT_OR", "BIT_XOR", 
		"BIT_AND", "BIT_LS", "BIT_RS", "LOGICAL_NOT", "BOOLEAN", "LOCAL", "VARARG", 
		"LONGCOMMENT", "LINE_COMMENT", "SHEBANG", "NIL", "NAME", "NORMALSTRING", 
		"CHARSTRING", "LONGSTRING", "INT", "HEX", "FLOAT", "HORIZONTAL_WS", "VERTICAL_WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TspLexer._LITERAL_NAMES, TspLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TspLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	public tsp1 = true;

	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(TspLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Tsp.g4"; }

	// @Override
	public get ruleNames(): string[] { return TspLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return TspLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return TspLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return TspLexer.modeNames; }

	// @Override
	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 39:
			return this.NE_sempred(_localctx, predIndex);

		case 40:
			return this.BIT_OR_sempred(_localctx, predIndex);

		case 41:
			return this.BIT_XOR_sempred(_localctx, predIndex);

		case 42:
			return this.BIT_AND_sempred(_localctx, predIndex);

		case 43:
			return this.BIT_LS_sempred(_localctx, predIndex);

		case 44:
			return this.BIT_RS_sempred(_localctx, predIndex);

		case 45:
			return this.LOGICAL_NOT_sempred(_localctx, predIndex);
		}
		return true;
	}
	private NE_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return !this.tsp1;
		}
		return true;
	}
	private BIT_OR_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return !this.tsp1;
		}
		return true;
	}
	private BIT_XOR_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return !this.tsp1;
		}
		return true;
	}
	private BIT_AND_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return !this.tsp1;
		}
		return true;
	}
	private BIT_LS_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return !this.tsp1;
		}
		return true;
	}
	private BIT_RS_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return !this.tsp1;
		}
		return true;
	}
	private LOGICAL_NOT_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return !this.tsp1;
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02@\u01FC\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03" +
		"\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03" +
		"\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03!\x03!\x03\"\x03" +
		"\"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'" +
		"\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x05)\u0119\n)\x03*\x03*" +
		"\x03*\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03.\x03" +
		".\x03.\x03.\x03/\x03/\x03/\x030\x030\x030\x030\x030\x030\x030\x030\x03" +
		"0\x050\u0139\n0\x031\x031\x031\x031\x031\x031\x032\x032\x032\x032\x03" +
		"3\x033\x033\x033\x033\x033\x033\x033\x033\x034\x034\x034\x034\x074\u0152" +
		"\n4\f4\x0E4\u0155\v4\x034\x034\x054\u0159\n4\x034\x034\x035\x035\x035" +
		"\x075\u0160\n5\f5\x0E5\u0163\v5\x035\x035\x036\x036\x036\x036\x037\x03" +
		"7\x077\u016D\n7\f7\x0E7\u0170\v7\x038\x038\x038\x078\u0175\n8\f8\x0E8" +
		"\u0178\v8\x038\x038\x039\x039\x039\x079\u017F\n9\f9\x0E9\u0182\v9\x03" +
		"9\x039\x03:\x03:\x03:\x03:\x03;\x03;\x03;\x07;\u018D\n;\f;\x0E;\u0190" +
		"\v;\x03;\x03;\x03<\x06<\u0195\n<\r<\x0E<\u0196\x03=\x03=\x03=\x06=\u019C" +
		"\n=\r=\x0E=\u019D\x03>\x06>\u01A1\n>\r>\x0E>\u01A2\x03>\x03>\x07>\u01A7" +
		"\n>\f>\x0E>\u01AA\v>\x03>\x05>\u01AD\n>\x03>\x03>\x06>\u01B1\n>\r>\x0E" +
		">\u01B2\x03>\x05>\u01B6\n>\x03>\x06>\u01B9\n>\r>\x0E>\u01BA\x03>\x03>" +
		"\x05>\u01BF\n>\x03?\x03?\x05?\u01C3\n?\x03?\x06?\u01C6\n?\r?\x0E?\u01C7" +
		"\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x05@\u01D2\n@\x03@\x03@\x03@" +
		"\x05@\u01D7\n@\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A" +
		"\x05A\u01E4\nA\x03B\x03B\x03B\x03B\x03B\x03C\x03C\x03D\x03D\x03E\x06E" +
		"\u01F0\nE\rE\x0EE\u01F1\x03E\x03E\x03F\x03F\x03F\x05F\u01F9\nF\x03F\x03" +
		"F\x04\u0153\u018E\x02\x02G\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06" +
		"\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19" +
		"\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14" +
		"\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02" +
		"\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02%I" +
		"\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02.[\x02/]\x020_\x02" +
		"1a\x022c\x023e\x024g\x025i\x026k\x027m\x028o\x029q\x02:s\x02;u\x02\x02" +
		"w\x02<y\x02={\x02>}\x02\x02\x7F\x02\x02\x81\x02\x02\x83\x02\x02\x85\x02" +
		"\x02\x87\x02\x02\x89\x02?\x8B\x02@\x03\x02\x0F\x04\x02\f\f\x0F\x0F\x05" +
		"\x02C\\aac|\x06\x022;C\\aac|\x04\x02$$^^\x04\x02))^^\x04\x02ZZzz\x04\x02" +
		"GGgg\x04\x02--//\v\x02$$))^^cdhhppttvvxx\x03\x0224\x03\x022;\x05\x022" +
		";CHch\x05\x02\v\v\x0E\x0E\"\"\x02\u0216\x02\x03\x03\x02\x02\x02\x02\x05" +
		"\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03" +
		"\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03" +
		"\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03" +
		"\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03" +
		"\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02" +
		"\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02" +
		"\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03" +
		"\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02" +
		"\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02" +
		"?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02" +
		"\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02" +
		"\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03" +
		"\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02" +
		"\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02" +
		"a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02" +
		"\x02\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02" +
		"\x02o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02\x02\x02w\x03" +
		"\x02\x02\x02\x02y\x03\x02\x02\x02\x02{\x03\x02\x02\x02\x02\x89\x03\x02" +
		"\x02\x02\x02\x8B\x03\x02\x02\x02\x03\x8D\x03\x02\x02\x02\x05\x8F\x03\x02" +
		"\x02\x02\x07\x92\x03\x02\x02\x02\t\x96\x03\x02\x02\x02\v\x9C\x03\x02\x02" +
		"\x02\r\xA3\x03\x02\x02\x02\x0F\xA9\x03\x02\x02\x02\x11\xAC\x03\x02\x02" +
		"\x02\x13\xB1\x03\x02\x02\x02\x15\xB8\x03\x02\x02\x02\x17\xBD\x03\x02\x02" +
		"\x02\x19\xC4\x03\x02\x02\x02\x1B\xC6\x03\x02\x02\x02\x1D\xCC\x03\x02\x02" +
		"\x02\x1F\xD0\x03\x02\x02\x02!\xD2\x03\x02\x02\x02#\xD5\x03\x02\x02\x02" +
		"%\xDE\x03\x02\x02\x02\'\xE0\x03\x02\x02\x02)\xE2\x03\x02\x02\x02+\xE4" +
		"\x03\x02\x02\x02-\xE6\x03\x02\x02\x02/\xE8\x03\x02\x02\x021\xEA\x03\x02" +
		"\x02\x023\xEC\x03\x02\x02\x025\xEE\x03\x02\x02\x027\xF0\x03\x02\x02\x02" +
		"9\xF2\x03\x02\x02\x02;\xF5\x03\x02\x02\x02=\xF8\x03\x02\x02\x02?\xFB\x03" +
		"\x02\x02\x02A\xFE\x03\x02\x02\x02C\u0100\x03\x02\x02\x02E\u0102\x03\x02" +
		"\x02\x02G\u0104\x03\x02\x02\x02I\u0106\x03\x02\x02\x02K\u0108\x03\x02" +
		"\x02\x02M\u010C\x03\x02\x02\x02O\u010F\x03\x02\x02\x02Q\u0118\x03\x02" +
		"\x02\x02S\u011A\x03\x02\x02\x02U\u011D\x03\x02\x02\x02W\u0121\x03\x02" +
		"\x02\x02Y\u0124\x03\x02\x02\x02[\u0128\x03\x02\x02\x02]\u012C\x03\x02" +
		"\x02\x02_\u0138\x03\x02\x02\x02a\u013A\x03\x02\x02\x02c\u0140\x03\x02" +
		"\x02\x02e\u0144\x03\x02\x02\x02g\u014D\x03\x02\x02\x02i\u015C\x03\x02" +
		"\x02\x02k\u0166\x03\x02\x02\x02m\u016A\x03\x02\x02\x02o\u0171\x03\x02" +
		"\x02\x02q\u017B\x03\x02\x02\x02s\u0185\x03\x02\x02\x02u\u0189\x03\x02" +
		"\x02\x02w\u0194\x03\x02\x02\x02y\u0198\x03\x02\x02\x02{\u01BE\x03\x02" +
		"\x02\x02}\u01C0\x03\x02\x02\x02\x7F\u01D6\x03\x02\x02\x02\x81\u01E3\x03" +
		"\x02\x02\x02\x83\u01E5\x03\x02\x02\x02\x85\u01EA\x03\x02\x02\x02\x87\u01EC" +
		"\x03\x02\x02\x02\x89\u01EF\x03\x02\x02\x02\x8B\u01F8\x03\x02\x02\x02\x8D" +
		"\x8E\x07=\x02\x02\x8E\x04\x03\x02\x02\x02\x8F\x90\x07f\x02\x02\x90\x91" +
		"\x07q\x02\x02\x91\x06\x03\x02\x02\x02\x92\x93\x07g\x02\x02\x93\x94\x07" +
		"p\x02\x02\x94\x95\x07f\x02\x02\x95\b\x03\x02\x02\x02\x96\x97\x07y\x02" +
		"\x02\x97\x98\x07j\x02\x02\x98\x99\x07k\x02\x02\x99\x9A\x07n\x02\x02\x9A" +
		"\x9B\x07g\x02\x02\x9B\n\x03\x02\x02\x02\x9C\x9D\x07t\x02\x02\x9D\x9E\x07" +
		"g\x02\x02\x9E\x9F\x07r\x02\x02\x9F\xA0\x07g\x02\x02\xA0\xA1\x07c\x02\x02" +
		"\xA1\xA2\x07v\x02\x02\xA2\f\x03\x02\x02\x02\xA3\xA4\x07w\x02\x02\xA4\xA5" +
		"\x07p\x02\x02\xA5\xA6\x07v\x02\x02\xA6\xA7\x07k\x02\x02\xA7\xA8\x07n\x02" +
		"\x02\xA8\x0E\x03\x02\x02\x02\xA9\xAA\x07k\x02\x02\xAA\xAB\x07h\x02\x02" +
		"\xAB\x10\x03\x02\x02\x02\xAC\xAD\x07v\x02\x02\xAD\xAE\x07j\x02\x02\xAE" +
		"\xAF\x07g\x02\x02\xAF\xB0\x07p\x02\x02\xB0\x12\x03\x02\x02\x02\xB1\xB2" +
		"\x07g\x02\x02\xB2\xB3\x07n\x02\x02\xB3\xB4\x07u\x02\x02\xB4\xB5\x07g\x02" +
		"\x02\xB5\xB6\x07k\x02\x02\xB6\xB7\x07h\x02\x02\xB7\x14\x03\x02\x02\x02" +
		"\xB8\xB9\x07g\x02\x02\xB9\xBA\x07n\x02\x02\xBA\xBB\x07u\x02\x02\xBB\xBC" +
		"\x07g\x02\x02\xBC\x16\x03\x02\x02\x02\xBD\xBE\x07t\x02\x02\xBE\xBF\x07" +
		"g\x02\x02\xBF\xC0\x07v\x02\x02\xC0\xC1\x07w\x02\x02\xC1\xC2\x07t\x02\x02" +
		"\xC2\xC3\x07p\x02\x02\xC3\x18\x03\x02\x02\x02\xC4\xC5\x07.\x02\x02\xC5" +
		"\x1A\x03\x02\x02\x02\xC6\xC7\x07d\x02\x02\xC7\xC8\x07t\x02\x02\xC8\xC9" +
		"\x07g\x02\x02\xC9\xCA\x07c\x02\x02\xCA\xCB\x07m\x02\x02\xCB\x1C\x03\x02" +
		"\x02\x02\xCC\xCD\x07h\x02\x02\xCD\xCE\x07q\x02\x02\xCE\xCF\x07t\x02\x02" +
		"\xCF\x1E\x03\x02\x02\x02\xD0\xD1\x07?\x02\x02\xD1 \x03\x02\x02\x02\xD2" +
		"\xD3\x07k\x02\x02\xD3\xD4\x07p\x02\x02\xD4\"\x03\x02\x02\x02\xD5\xD6\x07" +
		"h\x02\x02\xD6\xD7\x07w\x02\x02\xD7\xD8\x07p\x02\x02\xD8\xD9\x07e\x02\x02" +
		"\xD9\xDA\x07v\x02\x02\xDA\xDB\x07k\x02\x02\xDB\xDC\x07q\x02\x02\xDC\xDD" +
		"\x07p\x02\x02\xDD$\x03\x02\x02\x02\xDE\xDF\x070\x02\x02\xDF&\x03\x02\x02" +
		"\x02\xE0\xE1\x07<\x02\x02\xE1(\x03\x02\x02\x02\xE2\xE3\x07*\x02\x02\xE3" +
		"*\x03\x02\x02\x02\xE4\xE5\x07+\x02\x02\xE5,\x03\x02\x02\x02\xE6\xE7\x07" +
		"]\x02\x02\xE7.\x03\x02\x02\x02\xE8\xE9\x07_\x02\x02\xE90\x03\x02\x02\x02" +
		"\xEA\xEB\x07}\x02\x02\xEB2\x03\x02\x02\x02\xEC\xED\x07\x7F\x02\x02\xED" +
		"4\x03\x02\x02\x02\xEE\xEF\x07>\x02\x02\xEF6\x03\x02\x02\x02\xF0\xF1\x07" +
		"@\x02\x02\xF18\x03\x02\x02\x02\xF2\xF3\x07>\x02\x02\xF3\xF4\x07?\x02\x02" +
		"\xF4:\x03\x02\x02\x02\xF5\xF6\x07@\x02\x02\xF6\xF7\x07?\x02\x02\xF7<\x03" +
		"\x02\x02\x02\xF8\xF9\x07?\x02\x02\xF9\xFA\x07?\x02\x02\xFA>\x03\x02\x02" +
		"\x02\xFB\xFC\x070\x02\x02\xFC\xFD\x070\x02\x02\xFD@\x03\x02\x02\x02\xFE" +
		"\xFF\x07-\x02\x02\xFFB\x03\x02\x02\x02\u0100\u0101\x07/\x02\x02\u0101" +
		"D\x03\x02\x02\x02\u0102\u0103\x07,\x02\x02\u0103F\x03\x02\x02\x02\u0104" +
		"\u0105\x071\x02\x02\u0105H\x03\x02\x02\x02\u0106\u0107\x07`\x02\x02\u0107" +
		"J\x03\x02\x02\x02\u0108\u0109\x07p\x02\x02\u0109\u010A\x07q\x02\x02\u010A" +
		"\u010B\x07v\x02\x02\u010BL\x03\x02\x02\x02\u010C\u010D\x07q\x02\x02\u010D" +
		"\u010E\x07t\x02\x02\u010EN\x03\x02\x02\x02\u010F\u0110\x07c\x02\x02\u0110" +
		"\u0111\x07p\x02\x02\u0111\u0112\x07f\x02\x02\u0112P\x03\x02\x02\x02\u0113" +
		"\u0114\x07\x80\x02\x02\u0114\u0119\x07?\x02\x02\u0115\u0116\x06)\x02\x02" +
		"\u0116\u0117\x07#\x02\x02\u0117\u0119\x07?\x02\x02\u0118\u0113\x03\x02" +
		"\x02\x02\u0118\u0115\x03\x02\x02\x02\u0119R\x03\x02\x02\x02\u011A\u011B" +
		"\x06*\x03\x02\u011B\u011C\x07~\x02\x02\u011CT\x03\x02\x02\x02\u011D\u011E" +
		"\x06+\x04\x02\u011E\u011F\x07`\x02\x02\u011F\u0120\x07`\x02\x02\u0120" +
		"V\x03\x02\x02\x02\u0121\u0122\x06,\x05\x02\u0122\u0123\x07(\x02\x02\u0123" +
		"X\x03\x02\x02\x02\u0124\u0125\x06-\x06\x02\u0125\u0126\x07>\x02\x02\u0126" +
		"\u0127\x07>\x02\x02\u0127Z\x03\x02\x02\x02\u0128\u0129\x06.\x07\x02\u0129" +
		"\u012A\x07@\x02\x02\u012A\u012B\x07@\x02\x02\u012B\\\x03\x02\x02\x02\u012C" +
		"\u012D\x06/\b\x02\u012D\u012E\x07#\x02\x02\u012E^\x03\x02\x02\x02\u012F" +
		"\u0130\x07v\x02\x02\u0130\u0131\x07t\x02\x02\u0131\u0132\x07w\x02\x02" +
		"\u0132\u0139\x07g\x02\x02\u0133\u0134\x07h\x02\x02\u0134\u0135\x07c\x02" +
		"\x02\u0135\u0136\x07n\x02\x02\u0136\u0137\x07u\x02\x02\u0137\u0139\x07" +
		"g\x02\x02\u0138\u012F\x03\x02\x02\x02\u0138\u0133\x03\x02\x02\x02\u0139" +
		"`\x03\x02\x02\x02\u013A\u013B\x07n\x02\x02\u013B\u013C\x07q\x02\x02\u013C" +
		"\u013D\x07e\x02\x02\u013D\u013E\x07c\x02\x02\u013E\u013F\x07n\x02\x02" +
		"\u013Fb\x03\x02\x02\x02\u0140\u0141\x070\x02\x02\u0141\u0142\x070\x02" +
		"\x02\u0142\u0143\x070\x02\x02\u0143d\x03\x02\x02\x02\u0144\u0145\x07/" +
		"\x02\x02\u0145\u0146\x07/\x02\x02\u0146\u0147\x07]\x02\x02\u0147\u0148" +
		"\x03\x02\x02\x02\u0148\u0149\x05u;\x02\u0149\u014A\x07_\x02\x02\u014A" +
		"\u014B\x03\x02\x02\x02\u014B\u014C\b3\x02\x02\u014Cf\x03\x02\x02\x02\u014D" +
		"\u014E\x07/\x02\x02\u014E\u014F\x07/\x02\x02\u014F\u0153\x03\x02\x02\x02" +
		"\u0150\u0152\v\x02\x02\x02\u0151\u0150\x03\x02\x02\x02\u0152\u0155\x03" +
		"\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0153\u0151\x03\x02\x02\x02\u0154" +
		"\u0158\x03\x02\x02\x02\u0155\u0153\x03\x02\x02\x02\u0156\u0159\x05\x8B" +
		"F\x02\u0157\u0159\x07\x02\x02\x03\u0158\u0156\x03\x02\x02\x02\u0158\u0157" +
		"\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015B\b4\x02\x02\u015B" +
		"h\x03\x02\x02\x02\u015C\u015D\x07%\x02\x02\u015D\u0161\x07#\x02\x02\u015E" +
		"\u0160\n\x02\x02\x02\u015F\u015E\x03\x02\x02\x02\u0160\u0163\x03\x02\x02" +
		"\x02\u0161\u015F\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162\u0164" +
		"\x03\x02\x02\x02\u0163\u0161\x03\x02\x02\x02\u0164\u0165\b5\x02\x02\u0165" +
		"j\x03\x02\x02\x02\u0166\u0167\x07p\x02\x02\u0167\u0168\x07k\x02\x02\u0168" +
		"\u0169\x07n\x02\x02\u0169l\x03\x02\x02\x02\u016A\u016E\t\x03\x02\x02\u016B" +
		"\u016D\t\x04\x02\x02\u016C\u016B\x03\x02\x02\x02\u016D\u0170\x03\x02\x02" +
		"\x02\u016E\u016C\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016Fn\x03" +
		"\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0171\u0176\x07$\x02\x02\u0172" +
		"\u0175\x05\x7F@\x02\u0173\u0175\n\x05\x02\x02\u0174\u0172\x03\x02\x02" +
		"\x02\u0174\u0173\x03\x02\x02\x02\u0175\u0178\x03\x02\x02\x02\u0176\u0174" +
		"\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0179\x03\x02\x02\x02" +
		"\u0178\u0176\x03\x02\x02\x02\u0179\u017A\x07$\x02\x02\u017Ap\x03\x02\x02" +
		"\x02\u017B\u0180\x07)\x02\x02\u017C\u017F\x05\x7F@\x02\u017D\u017F\n\x06" +
		"\x02\x02\u017E\u017C\x03\x02\x02\x02\u017E\u017D\x03\x02\x02\x02\u017F" +
		"\u0182\x03\x02\x02\x02\u0180\u017E\x03\x02\x02\x02\u0180\u0181\x03\x02" +
		"\x02\x02\u0181\u0183\x03\x02\x02\x02\u0182\u0180\x03\x02\x02\x02\u0183" +
		"\u0184\x07)\x02\x02\u0184r\x03\x02\x02\x02\u0185\u0186\x07]\x02\x02\u0186" +
		"\u0187\x05u;\x02\u0187\u0188\x07_\x02\x02\u0188t\x03\x02\x02\x02\u0189" +
		"\u018E\x07]\x02\x02\u018A\u018D\x05s:\x02\u018B\u018D\v\x02\x02\x02\u018C" +
		"\u018A\x03\x02\x02\x02\u018C\u018B\x03\x02\x02\x02\u018D\u0190\x03\x02" +
		"\x02\x02\u018E\u018F\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02\u018F" +
		"\u0191\x03\x02\x02\x02\u0190\u018E\x03\x02\x02\x02\u0191\u0192\x07_\x02" +
		"\x02\u0192v\x03\x02\x02\x02\u0193\u0195\x05\x85C\x02\u0194\u0193\x03\x02" +
		"\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196\u0194\x03\x02\x02\x02\u0196" +
		"\u0197\x03\x02\x02\x02\u0197x\x03\x02\x02\x02\u0198\u0199\x072\x02\x02" +
		"\u0199\u019B\t\x07\x02\x02\u019A\u019C\x05\x87D\x02\u019B\u019A\x03\x02" +
		"\x02\x02\u019C\u019D\x03\x02\x02\x02\u019D\u019B\x03\x02\x02\x02\u019D" +
		"\u019E\x03\x02\x02\x02\u019Ez\x03\x02\x02\x02\u019F\u01A1\x05\x85C\x02" +
		"\u01A0\u019F\x03\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A0\x03" +
		"\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4" +
		"\u01A8\x070\x02\x02\u01A5\u01A7\x05\x85C\x02\u01A6\u01A5\x03\x02\x02\x02" +
		"\u01A7\u01AA\x03\x02\x02\x02\u01A8\u01A6\x03\x02\x02\x02\u01A8\u01A9\x03" +
		"\x02\x02\x02\u01A9\u01AC\x03\x02\x02\x02\u01AA\u01A8\x03\x02\x02\x02\u01AB" +
		"\u01AD\x05}?\x02\u01AC\u01AB\x03\x02\x02\x02\u01AC\u01AD\x03\x02\x02\x02" +
		"\u01AD\u01BF\x03\x02\x02\x02\u01AE\u01B0\x070\x02\x02\u01AF\u01B1\x05" +
		"\x85C\x02\u01B0\u01AF\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2" +
		"\u01B0\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3\u01B5\x03\x02" +
		"\x02\x02\u01B4\u01B6\x05}?\x02\u01B5\u01B4\x03\x02\x02\x02\u01B5\u01B6" +
		"\x03\x02\x02\x02\u01B6\u01BF\x03\x02\x02\x02\u01B7\u01B9\x05\x85C\x02" +
		"\u01B8\u01B7\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA\u01B8\x03" +
		"\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BC" +
		"\u01BD\x05}?\x02\u01BD\u01BF\x03\x02\x02\x02\u01BE\u01A0\x03\x02\x02\x02" +
		"\u01BE\u01AE\x03\x02\x02\x02\u01BE\u01B8\x03\x02\x02\x02\u01BF|\x03\x02" +
		"\x02\x02\u01C0\u01C2\t\b\x02\x02\u01C1\u01C3\t\t\x02\x02\u01C2\u01C1\x03" +
		"\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C5\x03\x02\x02\x02\u01C4" +
		"\u01C6\x05\x85C\x02\u01C5\u01C4\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02" +
		"\x02\u01C7\u01C5\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8~\x03" +
		"\x02\x02\x02\u01C9\u01CA\x07^\x02\x02\u01CA\u01D7\t\n\x02\x02\u01CB\u01CC" +
		"\x07^\x02\x02\u01CC\u01D7\x07]\x02\x02\u01CD\u01CE\x07^\x02\x02\u01CE" +
		"\u01D7\x07_\x02\x02\u01CF\u01D1\x07^\x02\x02\u01D0\u01D2\x07\x0F\x02\x02" +
		"\u01D1\u01D0\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2\u01D3\x03" +
		"\x02\x02\x02\u01D3\u01D7\x07\f\x02\x02\u01D4\u01D7\x05\x81A\x02\u01D5" +
		"\u01D7\x05\x83B\x02\u01D6\u01C9\x03\x02\x02\x02\u01D6\u01CB\x03\x02\x02" +
		"\x02\u01D6\u01CD\x03\x02\x02\x02\u01D6\u01CF\x03\x02\x02\x02\u01D6\u01D4" +
		"\x03\x02\x02\x02\u01D6\u01D5\x03\x02\x02\x02\u01D7\x80\x03\x02\x02\x02" +
		"\u01D8\u01D9\x07^\x02\x02\u01D9\u01E4\x05\x85C\x02\u01DA\u01DB\x07^\x02" +
		"\x02\u01DB\u01DC\x05\x85C\x02\u01DC\u01DD\x05\x85C\x02\u01DD\u01E4\x03" +
		"\x02\x02\x02\u01DE\u01DF\x07^\x02\x02\u01DF\u01E0\t\v\x02\x02\u01E0\u01E1" +
		"\x05\x85C\x02\u01E1\u01E2\x05\x85C\x02\u01E2\u01E4\x03\x02\x02\x02\u01E3" +
		"\u01D8\x03\x02\x02\x02\u01E3\u01DA\x03\x02\x02\x02\u01E3\u01DE\x03\x02" +
		"\x02\x02\u01E4\x82\x03\x02\x02\x02\u01E5\u01E6\x07^\x02\x02\u01E6\u01E7" +
		"\x07z\x02\x02\u01E7\u01E8\x05\x87D\x02\u01E8\u01E9\x05\x87D\x02\u01E9" +
		"\x84\x03\x02\x02\x02\u01EA\u01EB\t\f\x02\x02\u01EB\x86\x03\x02\x02\x02" +
		"\u01EC\u01ED\t\r\x02\x02\u01ED\x88\x03\x02\x02\x02\u01EE\u01F0\t\x0E\x02" +
		"\x02\u01EF\u01EE\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01EF" +
		"\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02" +
		"\u01F3\u01F4\bE\x02\x02\u01F4\x8A\x03\x02\x02\x02\u01F5\u01F6\x07\x0F" +
		"\x02\x02\u01F6\u01F9\x07\f\x02\x02\u01F7\u01F9\t\x02\x02\x02\u01F8\u01F5" +
		"\x03\x02\x02\x02\u01F8\u01F7\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02" +
		"\u01FA\u01FB\bF\x02\x02\u01FB\x8C\x03\x02\x02\x02\x1F\x02\u0118\u0138" +
		"\u0153\u0158\u0161\u016E\u0174\u0176\u017E\u0180\u018C\u018E\u0196\u019D" +
		"\u01A2\u01A8\u01AC\u01B2\u01B5\u01BA\u01BE\u01C2\u01C7\u01D1\u01D6\u01E3" +
		"\u01F1\u01F8\x03\x02\x03\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TspLexer.__ATN) {
			TspLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TspLexer._serializedATN));
		}

		return TspLexer.__ATN;
	}

}
