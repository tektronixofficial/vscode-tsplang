// Generated from C:\Source\vscode-tsplang\server\grammar\TspFast.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002@\u01ef\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0004",
    "8\t8\u00049\t9\u0004:\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004",
    "?\t?\u0004@\t@\u0004A\tA\u0004B\tB\u0004C\tC\u0004D\tD\u0004E\tE\u0004",
    "F\tF\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003 \u0003 \u0003 \u0003!\u0003!\u0003!\u0003\"\u0003\"\u0003",
    "\"\u0003#\u0003#\u0003#\u0003$\u0003$\u0003$\u0003%\u0003%\u0003&\u0003",
    "&\u0003\'\u0003\'\u0003(\u0003(\u0003)\u0003)\u0003*\u0003*\u0003+\u0003",
    "+\u0003+\u0003,\u0003,\u0003,\u0003-\u0003-\u0003-\u0003.\u0003.\u0003",
    ".\u0003.\u0003/\u0003/\u00030\u00030\u00031\u00031\u00031\u00031\u0003",
    "2\u00032\u00032\u00032\u00032\u00032\u00032\u00032\u00032\u00052\u0136",
    "\n2\u00033\u00033\u00033\u00033\u00033\u00033\u00034\u00034\u00034\u0003",
    "4\u00035\u00035\u00075\u0144\n5\f5\u000e5\u0147\u000b5\u00036\u0003",
    "6\u00036\u00076\u014c\n6\f6\u000e6\u014f\u000b6\u00036\u00036\u0003",
    "7\u00037\u00037\u00077\u0156\n7\f7\u000e7\u0159\u000b7\u00037\u0003",
    "7\u00038\u00038\u00038\u00038\u00039\u00039\u00039\u00079\u0164\n9\f",
    "9\u000e9\u0167\u000b9\u00039\u00039\u0003:\u0006:\u016c\n:\r:\u000e",
    ":\u016d\u0003;\u0003;\u0003;\u0006;\u0173\n;\r;\u000e;\u0174\u0003<",
    "\u0006<\u0178\n<\r<\u000e<\u0179\u0003<\u0003<\u0007<\u017e\n<\f<\u000e",
    "<\u0181\u000b<\u0003<\u0005<\u0184\n<\u0003<\u0003<\u0006<\u0188\n<",
    "\r<\u000e<\u0189\u0003<\u0005<\u018d\n<\u0003<\u0006<\u0190\n<\r<\u000e",
    "<\u0191\u0003<\u0003<\u0005<\u0196\n<\u0003=\u0003=\u0005=\u019a\n=",
    "\u0003=\u0006=\u019d\n=\r=\u000e=\u019e\u0003>\u0003>\u0003>\u0003>",
    "\u0003>\u0003>\u0003>\u0003>\u0005>\u01a9\n>\u0003>\u0003>\u0003>\u0005",
    ">\u01ae\n>\u0003?\u0003?\u0003?\u0003?\u0003?\u0003?\u0003?\u0003?\u0003",
    "?\u0003?\u0003?\u0005?\u01bb\n?\u0003@\u0003@\u0003@\u0003@\u0003@\u0003",
    "A\u0003A\u0003B\u0003B\u0003C\u0003C\u0003C\u0003C\u0003C\u0003C\u0003",
    "C\u0003C\u0003C\u0003D\u0003D\u0003D\u0003D\u0007D\u01d3\nD\fD\u000e",
    "D\u01d6\u000bD\u0003D\u0003D\u0003D\u0005D\u01db\nD\u0003D\u0003D\u0003",
    "E\u0006E\u01e0\nE\rE\u000eE\u01e1\u0003E\u0003E\u0003F\u0003F\u0003",
    "F\u0007F\u01e9\nF\fF\u000eF\u01ec\u000bF\u0003F\u0003F\u0004\u0165\u01d4",
    "\u0002G\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b",
    "\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f",
    "\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017",
    "-\u0018/\u00191\u001a3\u001b5\u001c7\u001d9\u001e;\u001f= ?!A\"C#E$",
    "G%I&K\'M(O)Q*S+U,W-Y.[/]0_1a2c3e4g5i6k7m8o9q\u0002s:u;w<y\u0002{\u0002",
    "}\u0002\u007f\u0002\u0081\u0002\u0083\u0002\u0085=\u0087>\u0089?\u008b",
    "@\u0003\u0002\u0010\u0005\u0002C\\aac|\u0006\u00022;C\\aac|\u0004\u0002",
    "$$^^\u0004\u0002))^^\u0004\u0002ZZzz\u0004\u0002GGgg\u0004\u0002--/",
    "/\u000b\u0002$$))^^cdhhppttvvxx\u0003\u000224\u0003\u00022;\u0005\u0002",
    "2;CHch\u0004\u0003\f\f\u000f\u000f\u0005\u0002\u000b\f\u000e\u000f\"",
    "\"\u0004\u0002\f\f\u000f\u000f\u0002\u0207\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002",
    "\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002",
    "\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002",
    "\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002",
    "\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002",
    "\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002",
    "\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002",
    ")\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003",
    "\u0002\u0002\u0002\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002",
    "\u0002\u0002\u00023\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002",
    "\u0002\u00027\u0003\u0002\u0002\u0002\u00029\u0003\u0002\u0002\u0002",
    "\u0002;\u0003\u0002\u0002\u0002\u0002=\u0003\u0002\u0002\u0002\u0002",
    "?\u0003\u0002\u0002\u0002\u0002A\u0003\u0002\u0002\u0002\u0002C\u0003",
    "\u0002\u0002\u0002\u0002E\u0003\u0002\u0002\u0002\u0002G\u0003\u0002",
    "\u0002\u0002\u0002I\u0003\u0002\u0002\u0002\u0002K\u0003\u0002\u0002",
    "\u0002\u0002M\u0003\u0002\u0002\u0002\u0002O\u0003\u0002\u0002\u0002",
    "\u0002Q\u0003\u0002\u0002\u0002\u0002S\u0003\u0002\u0002\u0002\u0002",
    "U\u0003\u0002\u0002\u0002\u0002W\u0003\u0002\u0002\u0002\u0002Y\u0003",
    "\u0002\u0002\u0002\u0002[\u0003\u0002\u0002\u0002\u0002]\u0003\u0002",
    "\u0002\u0002\u0002_\u0003\u0002\u0002\u0002\u0002a\u0003\u0002\u0002",
    "\u0002\u0002c\u0003\u0002\u0002\u0002\u0002e\u0003\u0002\u0002\u0002",
    "\u0002g\u0003\u0002\u0002\u0002\u0002i\u0003\u0002\u0002\u0002\u0002",
    "k\u0003\u0002\u0002\u0002\u0002m\u0003\u0002\u0002\u0002\u0002o\u0003",
    "\u0002\u0002\u0002\u0002s\u0003\u0002\u0002\u0002\u0002u\u0003\u0002",
    "\u0002\u0002\u0002w\u0003\u0002\u0002\u0002\u0002\u0085\u0003\u0002",
    "\u0002\u0002\u0002\u0087\u0003\u0002\u0002\u0002\u0002\u0089\u0003\u0002",
    "\u0002\u0002\u0002\u008b\u0003\u0002\u0002\u0002\u0003\u008d\u0003\u0002",
    "\u0002\u0002\u0005\u008f\u0003\u0002\u0002\u0002\u0007\u0091\u0003\u0002",
    "\u0002\u0002\t\u0093\u0003\u0002\u0002\u0002\u000b\u0096\u0003\u0002",
    "\u0002\u0002\r\u009a\u0003\u0002\u0002\u0002\u000f\u00a0\u0003\u0002",
    "\u0002\u0002\u0011\u00a7\u0003\u0002\u0002\u0002\u0013\u00ad\u0003\u0002",
    "\u0002\u0002\u0015\u00b0\u0003\u0002\u0002\u0002\u0017\u00b5\u0003\u0002",
    "\u0002\u0002\u0019\u00bc\u0003\u0002\u0002\u0002\u001b\u00c1\u0003\u0002",
    "\u0002\u0002\u001d\u00c8\u0003\u0002\u0002\u0002\u001f\u00ce\u0003\u0002",
    "\u0002\u0002!\u00d2\u0003\u0002\u0002\u0002#\u00d5\u0003\u0002\u0002",
    "\u0002%\u00de\u0003\u0002\u0002\u0002\'\u00e0\u0003\u0002\u0002\u0002",
    ")\u00e2\u0003\u0002\u0002\u0002+\u00e4\u0003\u0002\u0002\u0002-\u00e6",
    "\u0003\u0002\u0002\u0002/\u00e8\u0003\u0002\u0002\u00021\u00ea\u0003",
    "\u0002\u0002\u00023\u00ec\u0003\u0002\u0002\u00025\u00ee\u0003\u0002",
    "\u0002\u00027\u00f1\u0003\u0002\u0002\u00029\u00f5\u0003\u0002\u0002",
    "\u0002;\u00f7\u0003\u0002\u0002\u0002=\u00f9\u0003\u0002\u0002\u0002",
    "?\u00fc\u0003\u0002\u0002\u0002A\u00ff\u0003\u0002\u0002\u0002C\u0102",
    "\u0003\u0002\u0002\u0002E\u0105\u0003\u0002\u0002\u0002G\u0108\u0003",
    "\u0002\u0002\u0002I\u010b\u0003\u0002\u0002\u0002K\u010d\u0003\u0002",
    "\u0002\u0002M\u010f\u0003\u0002\u0002\u0002O\u0111\u0003\u0002\u0002",
    "\u0002Q\u0113\u0003\u0002\u0002\u0002S\u0115\u0003\u0002\u0002\u0002",
    "U\u0117\u0003\u0002\u0002\u0002W\u011a\u0003\u0002\u0002\u0002Y\u011d",
    "\u0003\u0002\u0002\u0002[\u0120\u0003\u0002\u0002\u0002]\u0124\u0003",
    "\u0002\u0002\u0002_\u0126\u0003\u0002\u0002\u0002a\u0128\u0003\u0002",
    "\u0002\u0002c\u0135\u0003\u0002\u0002\u0002e\u0137\u0003\u0002\u0002",
    "\u0002g\u013d\u0003\u0002\u0002\u0002i\u0141\u0003\u0002\u0002\u0002",
    "k\u0148\u0003\u0002\u0002\u0002m\u0152\u0003\u0002\u0002\u0002o\u015c",
    "\u0003\u0002\u0002\u0002q\u0160\u0003\u0002\u0002\u0002s\u016b\u0003",
    "\u0002\u0002\u0002u\u016f\u0003\u0002\u0002\u0002w\u0195\u0003\u0002",
    "\u0002\u0002y\u0197\u0003\u0002\u0002\u0002{\u01ad\u0003\u0002\u0002",
    "\u0002}\u01ba\u0003\u0002\u0002\u0002\u007f\u01bc\u0003\u0002\u0002",
    "\u0002\u0081\u01c1\u0003\u0002\u0002\u0002\u0083\u01c3\u0003\u0002\u0002",
    "\u0002\u0085\u01c5\u0003\u0002\u0002\u0002\u0087\u01ce\u0003\u0002\u0002",
    "\u0002\u0089\u01df\u0003\u0002\u0002\u0002\u008b\u01e5\u0003\u0002\u0002",
    "\u0002\u008d\u008e\u0007=\u0002\u0002\u008e\u0004\u0003\u0002\u0002",
    "\u0002\u008f\u0090\u0007.\u0002\u0002\u0090\u0006\u0003\u0002\u0002",
    "\u0002\u0091\u0092\u0007?\u0002\u0002\u0092\b\u0003\u0002\u0002\u0002",
    "\u0093\u0094\u0007f\u0002\u0002\u0094\u0095\u0007q\u0002\u0002\u0095",
    "\n\u0003\u0002\u0002\u0002\u0096\u0097\u0007g\u0002\u0002\u0097\u0098",
    "\u0007p\u0002\u0002\u0098\u0099\u0007f\u0002\u0002\u0099\f\u0003\u0002",
    "\u0002\u0002\u009a\u009b\u0007y\u0002\u0002\u009b\u009c\u0007j\u0002",
    "\u0002\u009c\u009d\u0007k\u0002\u0002\u009d\u009e\u0007n\u0002\u0002",
    "\u009e\u009f\u0007g\u0002\u0002\u009f\u000e\u0003\u0002\u0002\u0002",
    "\u00a0\u00a1\u0007t\u0002\u0002\u00a1\u00a2\u0007g\u0002\u0002\u00a2",
    "\u00a3\u0007r\u0002\u0002\u00a3\u00a4\u0007g\u0002\u0002\u00a4\u00a5",
    "\u0007c\u0002\u0002\u00a5\u00a6\u0007v\u0002\u0002\u00a6\u0010\u0003",
    "\u0002\u0002\u0002\u00a7\u00a8\u0007w\u0002\u0002\u00a8\u00a9\u0007",
    "p\u0002\u0002\u00a9\u00aa\u0007v\u0002\u0002\u00aa\u00ab\u0007k\u0002",
    "\u0002\u00ab\u00ac\u0007n\u0002\u0002\u00ac\u0012\u0003\u0002\u0002",
    "\u0002\u00ad\u00ae\u0007k\u0002\u0002\u00ae\u00af\u0007h\u0002\u0002",
    "\u00af\u0014\u0003\u0002\u0002\u0002\u00b0\u00b1\u0007v\u0002\u0002",
    "\u00b1\u00b2\u0007j\u0002\u0002\u00b2\u00b3\u0007g\u0002\u0002\u00b3",
    "\u00b4\u0007p\u0002\u0002\u00b4\u0016\u0003\u0002\u0002\u0002\u00b5",
    "\u00b6\u0007g\u0002\u0002\u00b6\u00b7\u0007n\u0002\u0002\u00b7\u00b8",
    "\u0007u\u0002\u0002\u00b8\u00b9\u0007g\u0002\u0002\u00b9\u00ba\u0007",
    "k\u0002\u0002\u00ba\u00bb\u0007h\u0002\u0002\u00bb\u0018\u0003\u0002",
    "\u0002\u0002\u00bc\u00bd\u0007g\u0002\u0002\u00bd\u00be\u0007n\u0002",
    "\u0002\u00be\u00bf\u0007u\u0002\u0002\u00bf\u00c0\u0007g\u0002\u0002",
    "\u00c0\u001a\u0003\u0002\u0002\u0002\u00c1\u00c2\u0007t\u0002\u0002",
    "\u00c2\u00c3\u0007g\u0002\u0002\u00c3\u00c4\u0007v\u0002\u0002\u00c4",
    "\u00c5\u0007w\u0002\u0002\u00c5\u00c6\u0007t\u0002\u0002\u00c6\u00c7",
    "\u0007p\u0002\u0002\u00c7\u001c\u0003\u0002\u0002\u0002\u00c8\u00c9",
    "\u0007d\u0002\u0002\u00c9\u00ca\u0007t\u0002\u0002\u00ca\u00cb\u0007",
    "g\u0002\u0002\u00cb\u00cc\u0007c\u0002\u0002\u00cc\u00cd\u0007m\u0002",
    "\u0002\u00cd\u001e\u0003\u0002\u0002\u0002\u00ce\u00cf\u0007h\u0002",
    "\u0002\u00cf\u00d0\u0007q\u0002\u0002\u00d0\u00d1\u0007t\u0002\u0002",
    "\u00d1 \u0003\u0002\u0002\u0002\u00d2\u00d3\u0007k\u0002\u0002\u00d3",
    "\u00d4\u0007p\u0002\u0002\u00d4\"\u0003\u0002\u0002\u0002\u00d5\u00d6",
    "\u0007h\u0002\u0002\u00d6\u00d7\u0007w\u0002\u0002\u00d7\u00d8\u0007",
    "p\u0002\u0002\u00d8\u00d9\u0007e\u0002\u0002\u00d9\u00da\u0007v\u0002",
    "\u0002\u00da\u00db\u0007k\u0002\u0002\u00db\u00dc\u0007q\u0002\u0002",
    "\u00dc\u00dd\u0007p\u0002\u0002\u00dd$\u0003\u0002\u0002\u0002\u00de",
    "\u00df\u00070\u0002\u0002\u00df&\u0003\u0002\u0002\u0002\u00e0\u00e1",
    "\u0007<\u0002\u0002\u00e1(\u0003\u0002\u0002\u0002\u00e2\u00e3\u0007",
    "*\u0002\u0002\u00e3*\u0003\u0002\u0002\u0002\u00e4\u00e5\u0007+\u0002",
    "\u0002\u00e5,\u0003\u0002\u0002\u0002\u00e6\u00e7\u0007]\u0002\u0002",
    "\u00e7.\u0003\u0002\u0002\u0002\u00e8\u00e9\u0007_\u0002\u0002\u00e9",
    "0\u0003\u0002\u0002\u0002\u00ea\u00eb\u0007}\u0002\u0002\u00eb2\u0003",
    "\u0002\u0002\u0002\u00ec\u00ed\u0007\u007f\u0002\u0002\u00ed4\u0003",
    "\u0002\u0002\u0002\u00ee\u00ef\u0007q\u0002\u0002\u00ef\u00f0\u0007",
    "t\u0002\u0002\u00f06\u0003\u0002\u0002\u0002\u00f1\u00f2\u0007c\u0002",
    "\u0002\u00f2\u00f3\u0007p\u0002\u0002\u00f3\u00f4\u0007f\u0002\u0002",
    "\u00f48\u0003\u0002\u0002\u0002\u00f5\u00f6\u0007>\u0002\u0002\u00f6",
    ":\u0003\u0002\u0002\u0002\u00f7\u00f8\u0007@\u0002\u0002\u00f8<\u0003",
    "\u0002\u0002\u0002\u00f9\u00fa\u0007>\u0002\u0002\u00fa\u00fb\u0007",
    "?\u0002\u0002\u00fb>\u0003\u0002\u0002\u0002\u00fc\u00fd\u0007@\u0002",
    "\u0002\u00fd\u00fe\u0007?\u0002\u0002\u00fe@\u0003\u0002\u0002\u0002",
    "\u00ff\u0100\u0007\u0080\u0002\u0002\u0100\u0101\u0007?\u0002\u0002",
    "\u0101B\u0003\u0002\u0002\u0002\u0102\u0103\u0007#\u0002\u0002\u0103",
    "\u0104\u0007?\u0002\u0002\u0104D\u0003\u0002\u0002\u0002\u0105\u0106",
    "\u0007?\u0002\u0002\u0106\u0107\u0007?\u0002\u0002\u0107F\u0003\u0002",
    "\u0002\u0002\u0108\u0109\u00070\u0002\u0002\u0109\u010a\u00070\u0002",
    "\u0002\u010aH\u0003\u0002\u0002\u0002\u010b\u010c\u0007-\u0002\u0002",
    "\u010cJ\u0003\u0002\u0002\u0002\u010d\u010e\u0007/\u0002\u0002\u010e",
    "L\u0003\u0002\u0002\u0002\u010f\u0110\u0007,\u0002\u0002\u0110N\u0003",
    "\u0002\u0002\u0002\u0111\u0112\u00071\u0002\u0002\u0112P\u0003\u0002",
    "\u0002\u0002\u0113\u0114\u0007(\u0002\u0002\u0114R\u0003\u0002\u0002",
    "\u0002\u0115\u0116\u0007~\u0002\u0002\u0116T\u0003\u0002\u0002\u0002",
    "\u0117\u0118\u0007`\u0002\u0002\u0118\u0119\u0007`\u0002\u0002\u0119",
    "V\u0003\u0002\u0002\u0002\u011a\u011b\u0007>\u0002\u0002\u011b\u011c",
    "\u0007>\u0002\u0002\u011cX\u0003\u0002\u0002\u0002\u011d\u011e\u0007",
    "@\u0002\u0002\u011e\u011f\u0007@\u0002\u0002\u011fZ\u0003\u0002\u0002",
    "\u0002\u0120\u0121\u0007p\u0002\u0002\u0121\u0122\u0007q\u0002\u0002",
    "\u0122\u0123\u0007v\u0002\u0002\u0123\\\u0003\u0002\u0002\u0002\u0124",
    "\u0125\u0007#\u0002\u0002\u0125^\u0003\u0002\u0002\u0002\u0126\u0127",
    "\u0007`\u0002\u0002\u0127`\u0003\u0002\u0002\u0002\u0128\u0129\u0007",
    "p\u0002\u0002\u0129\u012a\u0007k\u0002\u0002\u012a\u012b\u0007n\u0002",
    "\u0002\u012bb\u0003\u0002\u0002\u0002\u012c\u012d\u0007v\u0002\u0002",
    "\u012d\u012e\u0007t\u0002\u0002\u012e\u012f\u0007w\u0002\u0002\u012f",
    "\u0136\u0007g\u0002\u0002\u0130\u0131\u0007h\u0002\u0002\u0131\u0132",
    "\u0007c\u0002\u0002\u0132\u0133\u0007n\u0002\u0002\u0133\u0134\u0007",
    "u\u0002\u0002\u0134\u0136\u0007g\u0002\u0002\u0135\u012c\u0003\u0002",
    "\u0002\u0002\u0135\u0130\u0003\u0002\u0002\u0002\u0136d\u0003\u0002",
    "\u0002\u0002\u0137\u0138\u0007n\u0002\u0002\u0138\u0139\u0007q\u0002",
    "\u0002\u0139\u013a\u0007e\u0002\u0002\u013a\u013b\u0007c\u0002\u0002",
    "\u013b\u013c\u0007n\u0002\u0002\u013cf\u0003\u0002\u0002\u0002\u013d",
    "\u013e\u00070\u0002\u0002\u013e\u013f\u00070\u0002\u0002\u013f\u0140",
    "\u00070\u0002\u0002\u0140h\u0003\u0002\u0002\u0002\u0141\u0145\t\u0002",
    "\u0002\u0002\u0142\u0144\t\u0003\u0002\u0002\u0143\u0142\u0003\u0002",
    "\u0002\u0002\u0144\u0147\u0003\u0002\u0002\u0002\u0145\u0143\u0003\u0002",
    "\u0002\u0002\u0145\u0146\u0003\u0002\u0002\u0002\u0146j\u0003\u0002",
    "\u0002\u0002\u0147\u0145\u0003\u0002\u0002\u0002\u0148\u014d\u0007$",
    "\u0002\u0002\u0149\u014c\u0005{>\u0002\u014a\u014c\n\u0004\u0002\u0002",
    "\u014b\u0149\u0003\u0002\u0002\u0002\u014b\u014a\u0003\u0002\u0002\u0002",
    "\u014c\u014f\u0003\u0002\u0002\u0002\u014d\u014b\u0003\u0002\u0002\u0002",
    "\u014d\u014e\u0003\u0002\u0002\u0002\u014e\u0150\u0003\u0002\u0002\u0002",
    "\u014f\u014d\u0003\u0002\u0002\u0002\u0150\u0151\u0007$\u0002\u0002",
    "\u0151l\u0003\u0002\u0002\u0002\u0152\u0157\u0007)\u0002\u0002\u0153",
    "\u0156\u0005{>\u0002\u0154\u0156\n\u0005\u0002\u0002\u0155\u0153\u0003",
    "\u0002\u0002\u0002\u0155\u0154\u0003\u0002\u0002\u0002\u0156\u0159\u0003",
    "\u0002\u0002\u0002\u0157\u0155\u0003\u0002\u0002\u0002\u0157\u0158\u0003",
    "\u0002\u0002\u0002\u0158\u015a\u0003\u0002\u0002\u0002\u0159\u0157\u0003",
    "\u0002\u0002\u0002\u015a\u015b\u0007)\u0002\u0002\u015bn\u0003\u0002",
    "\u0002\u0002\u015c\u015d\u0007]\u0002\u0002\u015d\u015e\u0005q9\u0002",
    "\u015e\u015f\u0007_\u0002\u0002\u015fp\u0003\u0002\u0002\u0002\u0160",
    "\u0165\u0007]\u0002\u0002\u0161\u0164\u0005o8\u0002\u0162\u0164\u000b",
    "\u0002\u0002\u0002\u0163\u0161\u0003\u0002\u0002\u0002\u0163\u0162\u0003",
    "\u0002\u0002\u0002\u0164\u0167\u0003\u0002\u0002\u0002\u0165\u0166\u0003",
    "\u0002\u0002\u0002\u0165\u0163\u0003\u0002\u0002\u0002\u0166\u0168\u0003",
    "\u0002\u0002\u0002\u0167\u0165\u0003\u0002\u0002\u0002\u0168\u0169\u0007",
    "_\u0002\u0002\u0169r\u0003\u0002\u0002\u0002\u016a\u016c\u0005\u0081",
    "A\u0002\u016b\u016a\u0003\u0002\u0002\u0002\u016c\u016d\u0003\u0002",
    "\u0002\u0002\u016d\u016b\u0003\u0002\u0002\u0002\u016d\u016e\u0003\u0002",
    "\u0002\u0002\u016et\u0003\u0002\u0002\u0002\u016f\u0170\u00072\u0002",
    "\u0002\u0170\u0172\t\u0006\u0002\u0002\u0171\u0173\u0005\u0083B\u0002",
    "\u0172\u0171\u0003\u0002\u0002\u0002\u0173\u0174\u0003\u0002\u0002\u0002",
    "\u0174\u0172\u0003\u0002\u0002\u0002\u0174\u0175\u0003\u0002\u0002\u0002",
    "\u0175v\u0003\u0002\u0002\u0002\u0176\u0178\u0005\u0081A\u0002\u0177",
    "\u0176\u0003\u0002\u0002\u0002\u0178\u0179\u0003\u0002\u0002\u0002\u0179",
    "\u0177\u0003\u0002\u0002\u0002\u0179\u017a\u0003\u0002\u0002\u0002\u017a",
    "\u017b\u0003\u0002\u0002\u0002\u017b\u017f\u00070\u0002\u0002\u017c",
    "\u017e\u0005\u0081A\u0002\u017d\u017c\u0003\u0002\u0002\u0002\u017e",
    "\u0181\u0003\u0002\u0002\u0002\u017f\u017d\u0003\u0002\u0002\u0002\u017f",
    "\u0180\u0003\u0002\u0002\u0002\u0180\u0183\u0003\u0002\u0002\u0002\u0181",
    "\u017f\u0003\u0002\u0002\u0002\u0182\u0184\u0005y=\u0002\u0183\u0182",
    "\u0003\u0002\u0002\u0002\u0183\u0184\u0003\u0002\u0002\u0002\u0184\u0196",
    "\u0003\u0002\u0002\u0002\u0185\u0187\u00070\u0002\u0002\u0186\u0188",
    "\u0005\u0081A\u0002\u0187\u0186\u0003\u0002\u0002\u0002\u0188\u0189",
    "\u0003\u0002\u0002\u0002\u0189\u0187\u0003\u0002\u0002\u0002\u0189\u018a",
    "\u0003\u0002\u0002\u0002\u018a\u018c\u0003\u0002\u0002\u0002\u018b\u018d",
    "\u0005y=\u0002\u018c\u018b\u0003\u0002\u0002\u0002\u018c\u018d\u0003",
    "\u0002\u0002\u0002\u018d\u0196\u0003\u0002\u0002\u0002\u018e\u0190\u0005",
    "\u0081A\u0002\u018f\u018e\u0003\u0002\u0002\u0002\u0190\u0191\u0003",
    "\u0002\u0002\u0002\u0191\u018f\u0003\u0002\u0002\u0002\u0191\u0192\u0003",
    "\u0002\u0002\u0002\u0192\u0193\u0003\u0002\u0002\u0002\u0193\u0194\u0005",
    "y=\u0002\u0194\u0196\u0003\u0002\u0002\u0002\u0195\u0177\u0003\u0002",
    "\u0002\u0002\u0195\u0185\u0003\u0002\u0002\u0002\u0195\u018f\u0003\u0002",
    "\u0002\u0002\u0196x\u0003\u0002\u0002\u0002\u0197\u0199\t\u0007\u0002",
    "\u0002\u0198\u019a\t\b\u0002\u0002\u0199\u0198\u0003\u0002\u0002\u0002",
    "\u0199\u019a\u0003\u0002\u0002\u0002\u019a\u019c\u0003\u0002\u0002\u0002",
    "\u019b\u019d\u0005\u0081A\u0002\u019c\u019b\u0003\u0002\u0002\u0002",
    "\u019d\u019e\u0003\u0002\u0002\u0002\u019e\u019c\u0003\u0002\u0002\u0002",
    "\u019e\u019f\u0003\u0002\u0002\u0002\u019fz\u0003\u0002\u0002\u0002",
    "\u01a0\u01a1\u0007^\u0002\u0002\u01a1\u01ae\t\t\u0002\u0002\u01a2\u01a3",
    "\u0007^\u0002\u0002\u01a3\u01ae\u0007]\u0002\u0002\u01a4\u01a5\u0007",
    "^\u0002\u0002\u01a5\u01ae\u0007_\u0002\u0002\u01a6\u01a8\u0007^\u0002",
    "\u0002\u01a7\u01a9\u0007\u000f\u0002\u0002\u01a8\u01a7\u0003\u0002\u0002",
    "\u0002\u01a8\u01a9\u0003\u0002\u0002\u0002\u01a9\u01aa\u0003\u0002\u0002",
    "\u0002\u01aa\u01ae\u0007\f\u0002\u0002\u01ab\u01ae\u0005}?\u0002\u01ac",
    "\u01ae\u0005\u007f@\u0002\u01ad\u01a0\u0003\u0002\u0002\u0002\u01ad",
    "\u01a2\u0003\u0002\u0002\u0002\u01ad\u01a4\u0003\u0002\u0002\u0002\u01ad",
    "\u01a6\u0003\u0002\u0002\u0002\u01ad\u01ab\u0003\u0002\u0002\u0002\u01ad",
    "\u01ac\u0003\u0002\u0002\u0002\u01ae|\u0003\u0002\u0002\u0002\u01af",
    "\u01b0\u0007^\u0002\u0002\u01b0\u01bb\u0005\u0081A\u0002\u01b1\u01b2",
    "\u0007^\u0002\u0002\u01b2\u01b3\u0005\u0081A\u0002\u01b3\u01b4\u0005",
    "\u0081A\u0002\u01b4\u01bb\u0003\u0002\u0002\u0002\u01b5\u01b6\u0007",
    "^\u0002\u0002\u01b6\u01b7\t\n\u0002\u0002\u01b7\u01b8\u0005\u0081A\u0002",
    "\u01b8\u01b9\u0005\u0081A\u0002\u01b9\u01bb\u0003\u0002\u0002\u0002",
    "\u01ba\u01af\u0003\u0002\u0002\u0002\u01ba\u01b1\u0003\u0002\u0002\u0002",
    "\u01ba\u01b5\u0003\u0002\u0002\u0002\u01bb~\u0003\u0002\u0002\u0002",
    "\u01bc\u01bd\u0007^\u0002\u0002\u01bd\u01be\u0007z\u0002\u0002\u01be",
    "\u01bf\u0005\u0083B\u0002\u01bf\u01c0\u0005\u0083B\u0002\u01c0\u0080",
    "\u0003\u0002\u0002\u0002\u01c1\u01c2\t\u000b\u0002\u0002\u01c2\u0082",
    "\u0003\u0002\u0002\u0002\u01c3\u01c4\t\f\u0002\u0002\u01c4\u0084\u0003",
    "\u0002\u0002\u0002\u01c5\u01c6\u0007/\u0002\u0002\u01c6\u01c7\u0007",
    "/\u0002\u0002\u01c7\u01c8\u0007]\u0002\u0002\u01c8\u01c9\u0003\u0002",
    "\u0002\u0002\u01c9\u01ca\u0005q9\u0002\u01ca\u01cb\u0007_\u0002\u0002",
    "\u01cb\u01cc\u0003\u0002\u0002\u0002\u01cc\u01cd\bC\u0002\u0002\u01cd",
    "\u0086\u0003\u0002\u0002\u0002\u01ce\u01cf\u0007/\u0002\u0002\u01cf",
    "\u01d0\u0007/\u0002\u0002\u01d0\u01d4\u0003\u0002\u0002\u0002\u01d1",
    "\u01d3\u000b\u0002\u0002\u0002\u01d2\u01d1\u0003\u0002\u0002\u0002\u01d3",
    "\u01d6\u0003\u0002\u0002\u0002\u01d4\u01d5\u0003\u0002\u0002\u0002\u01d4",
    "\u01d2\u0003\u0002\u0002\u0002\u01d5\u01da\u0003\u0002\u0002\u0002\u01d6",
    "\u01d4\u0003\u0002\u0002\u0002\u01d7\u01d8\u0007\u000f\u0002\u0002\u01d8",
    "\u01db\u0007\f\u0002\u0002\u01d9\u01db\t\r\u0002\u0002\u01da\u01d7\u0003",
    "\u0002\u0002\u0002\u01da\u01d9\u0003\u0002\u0002\u0002\u01db\u01dc\u0003",
    "\u0002\u0002\u0002\u01dc\u01dd\bD\u0002\u0002\u01dd\u0088\u0003\u0002",
    "\u0002\u0002\u01de\u01e0\t\u000e\u0002\u0002\u01df\u01de\u0003\u0002",
    "\u0002\u0002\u01e0\u01e1\u0003\u0002\u0002\u0002\u01e1\u01df\u0003\u0002",
    "\u0002\u0002\u01e1\u01e2\u0003\u0002\u0002\u0002\u01e2\u01e3\u0003\u0002",
    "\u0002\u0002\u01e3\u01e4\bE\u0003\u0002\u01e4\u008a\u0003\u0002\u0002",
    "\u0002\u01e5\u01e6\u0007%\u0002\u0002\u01e6\u01ea\u0007#\u0002\u0002",
    "\u01e7\u01e9\n\u000f\u0002\u0002\u01e8\u01e7\u0003\u0002\u0002\u0002",
    "\u01e9\u01ec\u0003\u0002\u0002\u0002\u01ea\u01e8\u0003\u0002\u0002\u0002",
    "\u01ea\u01eb\u0003\u0002\u0002\u0002\u01eb\u01ed\u0003\u0002\u0002\u0002",
    "\u01ec\u01ea\u0003\u0002\u0002\u0002\u01ed\u01ee\bF\u0002\u0002\u01ee",
    "\u008c\u0003\u0002\u0002\u0002\u001d\u0002\u0135\u0145\u014b\u014d\u0155",
    "\u0157\u0163\u0165\u016d\u0174\u0179\u017f\u0183\u0189\u018c\u0191\u0195",
    "\u0199\u019e\u01a8\u01ad\u01ba\u01d4\u01da\u01e1\u01ea\u0004\u0002\u0003",
    "\u0002\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function TspFastLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

TspFastLexer.prototype = Object.create(antlr4.Lexer.prototype);
TspFastLexer.prototype.constructor = TspFastLexer;

Object.defineProperty(TspFastLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

TspFastLexer.EOF = antlr4.Token.EOF;
TspFastLexer.T__0 = 1;
TspFastLexer.T__1 = 2;
TspFastLexer.T__2 = 3;
TspFastLexer.T__3 = 4;
TspFastLexer.T__4 = 5;
TspFastLexer.T__5 = 6;
TspFastLexer.T__6 = 7;
TspFastLexer.T__7 = 8;
TspFastLexer.T__8 = 9;
TspFastLexer.T__9 = 10;
TspFastLexer.T__10 = 11;
TspFastLexer.T__11 = 12;
TspFastLexer.T__12 = 13;
TspFastLexer.T__13 = 14;
TspFastLexer.T__14 = 15;
TspFastLexer.T__15 = 16;
TspFastLexer.T__16 = 17;
TspFastLexer.T__17 = 18;
TspFastLexer.T__18 = 19;
TspFastLexer.T__19 = 20;
TspFastLexer.T__20 = 21;
TspFastLexer.T__21 = 22;
TspFastLexer.T__22 = 23;
TspFastLexer.T__23 = 24;
TspFastLexer.T__24 = 25;
TspFastLexer.T__25 = 26;
TspFastLexer.T__26 = 27;
TspFastLexer.T__27 = 28;
TspFastLexer.T__28 = 29;
TspFastLexer.T__29 = 30;
TspFastLexer.T__30 = 31;
TspFastLexer.T__31 = 32;
TspFastLexer.T__32 = 33;
TspFastLexer.T__33 = 34;
TspFastLexer.T__34 = 35;
TspFastLexer.T__35 = 36;
TspFastLexer.T__36 = 37;
TspFastLexer.T__37 = 38;
TspFastLexer.T__38 = 39;
TspFastLexer.T__39 = 40;
TspFastLexer.T__40 = 41;
TspFastLexer.T__41 = 42;
TspFastLexer.T__42 = 43;
TspFastLexer.T__43 = 44;
TspFastLexer.T__44 = 45;
TspFastLexer.T__45 = 46;
TspFastLexer.T__46 = 47;
TspFastLexer.NIL = 48;
TspFastLexer.BOOLEAN = 49;
TspFastLexer.LOCAL = 50;
TspFastLexer.VARARG = 51;
TspFastLexer.NAME = 52;
TspFastLexer.NORMALSTRING = 53;
TspFastLexer.CHARSTRING = 54;
TspFastLexer.LONGSTRING = 55;
TspFastLexer.INT = 56;
TspFastLexer.HEX = 57;
TspFastLexer.FLOAT = 58;
TspFastLexer.LONGCOMMENT = 59;
TspFastLexer.LINE_COMMENT = 60;
TspFastLexer.WS = 61;
TspFastLexer.SHEBANG = 62;

TspFastLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

TspFastLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

TspFastLexer.prototype.literalNames = [ null, "';'", "','", "'='", "'do'", 
                                        "'end'", "'while'", "'repeat'", 
                                        "'until'", "'if'", "'then'", "'elseif'", 
                                        "'else'", "'return'", "'break'", 
                                        "'for'", "'in'", "'function'", "'.'", 
                                        "':'", "'('", "')'", "'['", "']'", 
                                        "'{'", "'}'", "'or'", "'and'", "'<'", 
                                        "'>'", "'<='", "'>='", "'~='", "'!='", 
                                        "'=='", "'..'", "'+'", "'-'", "'*'", 
                                        "'/'", "'&'", "'|'", "'^^'", "'<<'", 
                                        "'>>'", "'not'", "'!'", "'^'", "'nil'", 
                                        null, "'local'", "'...'" ];

TspFastLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                         null, null, null, null, null, null, 
                                         null, null, null, null, null, null, 
                                         null, null, null, null, null, null, 
                                         null, null, null, null, null, null, 
                                         null, null, null, null, null, null, 
                                         null, null, null, null, null, null, 
                                         null, null, null, null, null, null, 
                                         "NIL", "BOOLEAN", "LOCAL", "VARARG", 
                                         "NAME", "NORMALSTRING", "CHARSTRING", 
                                         "LONGSTRING", "INT", "HEX", "FLOAT", 
                                         "LONGCOMMENT", "LINE_COMMENT", 
                                         "WS", "SHEBANG" ];

TspFastLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                     "T__5", "T__6", "T__7", "T__8", "T__9", 
                                     "T__10", "T__11", "T__12", "T__13", 
                                     "T__14", "T__15", "T__16", "T__17", 
                                     "T__18", "T__19", "T__20", "T__21", 
                                     "T__22", "T__23", "T__24", "T__25", 
                                     "T__26", "T__27", "T__28", "T__29", 
                                     "T__30", "T__31", "T__32", "T__33", 
                                     "T__34", "T__35", "T__36", "T__37", 
                                     "T__38", "T__39", "T__40", "T__41", 
                                     "T__42", "T__43", "T__44", "T__45", 
                                     "T__46", "NIL", "BOOLEAN", "LOCAL", 
                                     "VARARG", "NAME", "NORMALSTRING", "CHARSTRING", 
                                     "LONGSTRING", "NestedString", "INT", 
                                     "HEX", "FLOAT", "ExponentPart", "EscapeSequence", 
                                     "DecimalEscape", "HexEscape", "Digit", 
                                     "HexDigit", "LONGCOMMENT", "LINE_COMMENT", 
                                     "WS", "SHEBANG" ];

TspFastLexer.prototype.grammarFileName = "TspFast.g4";



exports.TspFastLexer = TspFastLexer;
