// Generated from C:\Source\vscode-tsplang\server\grammar\Tsp.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var TspListener = require('./TspListener').TspListener;
var grammarFileName = "Tsp.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003B\u018a\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0007\u0003K\n\u0003\f\u0003\u000e",
    "\u0003N\u000b\u0003\u0003\u0003\u0005\u0003Q\n\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007",
    "\u0004r\n\u0004\f\u0004\u000e\u0004u\u000b\u0004\u0003\u0004\u0003\u0004",
    "\u0005\u0004y\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0005\u0004\u0085\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u009f\n\u0004\u0005\u0004",
    "\u00a1\n\u0004\u0003\u0005\u0003\u0005\u0005\u0005\u00a5\n\u0005\u0003",
    "\u0005\u0005\u0005\u00a8\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0007\u0006\u00ad\n\u0006\f\u0006\u000e\u0006\u00b0\u000b\u0006\u0003",
    "\u0006\u0003\u0006\u0005\u0006\u00b4\n\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0007\u0007\u00b9\n\u0007\f\u0007\u000e\u0007\u00bc\u000b",
    "\u0007\u0003\b\u0003\b\u0003\b\u0007\b\u00c1\n\b\f\b\u000e\b\u00c4\u000b",
    "\b\u0003\t\u0003\t\u0003\t\u0007\t\u00c9\n\t\f\t\u000e\t\u00cc\u000b",
    "\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u00db\n\n\u0003\n\u0003\n",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0007\n\u00fd\n\n\f\n\u000e\n\u0100\u000b",
    "\n\u0003\u000b\u0003\u000b\u0007\u000b\u0104\n\u000b\f\u000b\u000e\u000b",
    "\u0107\u000b\u000b\u0003\f\u0003\f\u0006\f\u010b\n\f\r\f\u000e\f\u010c",
    "\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u0114\n\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e",
    "\u011c\n\u000e\u0003\u000e\u0007\u000e\u011f\n\u000e\f\u000e\u000e\u000e",
    "\u0122\u000b\u000e\u0003\u000f\u0007\u000f\u0125\n\u000f\f\u000f\u000e",
    "\u000f\u0128\u000b\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0005\u000f\u0130\n\u000f\u0003\u0010\u0003",
    "\u0010\u0005\u0010\u0134\n\u0010\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0003\u0011\u0005\u0011\u013a\n\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0005\u0011\u013f\n\u0011\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0013\u0003\u0013\u0005\u0013\u0146\n\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0005",
    "\u0014\u014f\n\u0014\u0003\u0014\u0005\u0014\u0152\n\u0014\u0003\u0015",
    "\u0003\u0015\u0005\u0015\u0156\n\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0007\u0016\u015e\n\u0016",
    "\f\u0016\u000e\u0016\u0161\u000b\u0016\u0003\u0016\u0005\u0016\u0164",
    "\n\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017",
    "\u0170\n\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003",
    "\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003",
    "\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003",
    " \u0003 \u0003!\u0003!\u0003\"\u0003\"\u0003#\u0003#\u0003#\u0002\u0003",
    "\u0012$\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$&(*,.02468:<>@BD\u0002\n\u0004\u0002\u0003\u0003",
    "\u0010\u0010\u0003\u0002#)\u0003\u0002+,\u0003\u0002-.\u0003\u0002/",
    "4\u0004\u0002,,56\u0003\u0002<>\u0003\u00029;\u0002\u01a4\u0002F\u0003",
    "\u0002\u0002\u0002\u0004L\u0003\u0002\u0002\u0002\u0006\u00a0\u0003",
    "\u0002\u0002\u0002\b\u00a2\u0003\u0002\u0002\u0002\n\u00a9\u0003\u0002",
    "\u0002\u0002\f\u00b5\u0003\u0002\u0002\u0002\u000e\u00bd\u0003\u0002",
    "\u0002\u0002\u0010\u00c5\u0003\u0002\u0002\u0002\u0012\u00da\u0003\u0002",
    "\u0002\u0002\u0014\u0101\u0003\u0002\u0002\u0002\u0016\u0108\u0003\u0002",
    "\u0002\u0002\u0018\u0113\u0003\u0002\u0002\u0002\u001a\u011b\u0003\u0002",
    "\u0002\u0002\u001c\u0126\u0003\u0002\u0002\u0002\u001e\u0133\u0003\u0002",
    "\u0002\u0002 \u013e\u0003\u0002\u0002\u0002\"\u0140\u0003\u0002\u0002",
    "\u0002$\u0143\u0003\u0002\u0002\u0002&\u0151\u0003\u0002\u0002\u0002",
    "(\u0153\u0003\u0002\u0002\u0002*\u0159\u0003\u0002\u0002\u0002,\u016f",
    "\u0003\u0002\u0002\u0002.\u0171\u0003\u0002\u0002\u00020\u0173\u0003",
    "\u0002\u0002\u00022\u0175\u0003\u0002\u0002\u00024\u0177\u0003\u0002",
    "\u0002\u00026\u0179\u0003\u0002\u0002\u00028\u017b\u0003\u0002\u0002",
    "\u0002:\u017d\u0003\u0002\u0002\u0002<\u017f\u0003\u0002\u0002\u0002",
    ">\u0181\u0003\u0002\u0002\u0002@\u0183\u0003\u0002\u0002\u0002B\u0185",
    "\u0003\u0002\u0002\u0002D\u0187\u0003\u0002\u0002\u0002FG\u0005\u0004",
    "\u0003\u0002GH\u0007\u0002\u0002\u0003H\u0003\u0003\u0002\u0002\u0002",
    "IK\u0005\u0006\u0004\u0002JI\u0003\u0002\u0002\u0002KN\u0003\u0002\u0002",
    "\u0002LJ\u0003\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002MP\u0003\u0002",
    "\u0002\u0002NL\u0003\u0002\u0002\u0002OQ\u0005\b\u0005\u0002PO\u0003",
    "\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002Q\u0005\u0003\u0002\u0002",
    "\u0002R\u00a1\u0007\u0003\u0002\u0002ST\u0005\f\u0007\u0002TU\u0007",
    "\u0004\u0002\u0002UV\u0005\u0010\t\u0002V\u00a1\u0003\u0002\u0002\u0002",
    "W\u00a1\u0005\u0016\f\u0002X\u00a1\u0007\u0005\u0002\u0002YZ\u0007\u0006",
    "\u0002\u0002Z[\u0005\u0004\u0003\u0002[\\\u0007\u0007\u0002\u0002\\",
    "\u00a1\u0003\u0002\u0002\u0002]^\u0007\b\u0002\u0002^_\u0005\u0012\n",
    "\u0002_`\u0007\u0006\u0002\u0002`a\u0005\u0004\u0003\u0002ab\u0007\u0007",
    "\u0002\u0002b\u00a1\u0003\u0002\u0002\u0002cd\u0007\t\u0002\u0002de",
    "\u0005\u0004\u0003\u0002ef\u0007\n\u0002\u0002fg\u0005\u0012\n\u0002",
    "g\u00a1\u0003\u0002\u0002\u0002hi\u0007\u000b\u0002\u0002ij\u0005\u0012",
    "\n\u0002jk\u0007\f\u0002\u0002ks\u0005\u0004\u0003\u0002lm\u0007\r\u0002",
    "\u0002mn\u0005\u0012\n\u0002no\u0007\f\u0002\u0002op\u0005\u0004\u0003",
    "\u0002pr\u0003\u0002\u0002\u0002ql\u0003\u0002\u0002\u0002ru\u0003\u0002",
    "\u0002\u0002sq\u0003\u0002\u0002\u0002st\u0003\u0002\u0002\u0002tx\u0003",
    "\u0002\u0002\u0002us\u0003\u0002\u0002\u0002vw\u0007\u000e\u0002\u0002",
    "wy\u0005\u0004\u0003\u0002xv\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002",
    "\u0002yz\u0003\u0002\u0002\u0002z{\u0007\u0007\u0002\u0002{\u00a1\u0003",
    "\u0002\u0002\u0002|}\u0007\u000f\u0002\u0002}~\u00078\u0002\u0002~\u007f",
    "\u0007\u0004\u0002\u0002\u007f\u0080\u0005\u0012\n\u0002\u0080\u0081",
    "\u0007\u0010\u0002\u0002\u0081\u0084\u0005\u0012\n\u0002\u0082\u0083",
    "\u0007\u0010\u0002\u0002\u0083\u0085\u0005\u0012\n\u0002\u0084\u0082",
    "\u0003\u0002\u0002\u0002\u0084\u0085\u0003\u0002\u0002\u0002\u0085\u0086",
    "\u0003\u0002\u0002\u0002\u0086\u0087\u0007\u0006\u0002\u0002\u0087\u0088",
    "\u0005\u0004\u0003\u0002\u0088\u0089\u0007\u0007\u0002\u0002\u0089\u00a1",
    "\u0003\u0002\u0002\u0002\u008a\u008b\u0007\u000f\u0002\u0002\u008b\u008c",
    "\u0005\u000e\b\u0002\u008c\u008d\u0007\u0011\u0002\u0002\u008d\u008e",
    "\u0005\u0010\t\u0002\u008e\u008f\u0007\u0006\u0002\u0002\u008f\u0090",
    "\u0005\u0004\u0003\u0002\u0090\u0091\u0007\u0007\u0002\u0002\u0091\u00a1",
    "\u0003\u0002\u0002\u0002\u0092\u0093\u0007\u0012\u0002\u0002\u0093\u0094",
    "\u0005\n\u0006\u0002\u0094\u0095\u0005$\u0013\u0002\u0095\u00a1\u0003",
    "\u0002\u0002\u0002\u0096\u0097\u0007\u0013\u0002\u0002\u0097\u0098\u0007",
    "\u0012\u0002\u0002\u0098\u0099\u00078\u0002\u0002\u0099\u00a1\u0005",
    "$\u0013\u0002\u009a\u009b\u0007\u0013\u0002\u0002\u009b\u009e\u0005",
    "\f\u0007\u0002\u009c\u009d\u0007\u0004\u0002\u0002\u009d\u009f\u0005",
    "\u0010\t\u0002\u009e\u009c\u0003\u0002\u0002\u0002\u009e\u009f\u0003",
    "\u0002\u0002\u0002\u009f\u00a1\u0003\u0002\u0002\u0002\u00a0R\u0003",
    "\u0002\u0002\u0002\u00a0S\u0003\u0002\u0002\u0002\u00a0W\u0003\u0002",
    "\u0002\u0002\u00a0X\u0003\u0002\u0002\u0002\u00a0Y\u0003\u0002\u0002",
    "\u0002\u00a0]\u0003\u0002\u0002\u0002\u00a0c\u0003\u0002\u0002\u0002",
    "\u00a0h\u0003\u0002\u0002\u0002\u00a0|\u0003\u0002\u0002\u0002\u00a0",
    "\u008a\u0003\u0002\u0002\u0002\u00a0\u0092\u0003\u0002\u0002\u0002\u00a0",
    "\u0096\u0003\u0002\u0002\u0002\u00a0\u009a\u0003\u0002\u0002\u0002\u00a1",
    "\u0007\u0003\u0002\u0002\u0002\u00a2\u00a4\u0007\u0014\u0002\u0002\u00a3",
    "\u00a5\u0005\u0010\t\u0002\u00a4\u00a3\u0003\u0002\u0002\u0002\u00a4",
    "\u00a5\u0003\u0002\u0002\u0002\u00a5\u00a7\u0003\u0002\u0002\u0002\u00a6",
    "\u00a8\u0007\u0003\u0002\u0002\u00a7\u00a6\u0003\u0002\u0002\u0002\u00a7",
    "\u00a8\u0003\u0002\u0002\u0002\u00a8\t\u0003\u0002\u0002\u0002\u00a9",
    "\u00ae\u00078\u0002\u0002\u00aa\u00ab\u0007\u0015\u0002\u0002\u00ab",
    "\u00ad\u00078\u0002\u0002\u00ac\u00aa\u0003\u0002\u0002\u0002\u00ad",
    "\u00b0\u0003\u0002\u0002\u0002\u00ae\u00ac\u0003\u0002\u0002\u0002\u00ae",
    "\u00af\u0003\u0002\u0002\u0002\u00af\u00b3\u0003\u0002\u0002\u0002\u00b0",
    "\u00ae\u0003\u0002\u0002\u0002\u00b1\u00b2\u0007\u0016\u0002\u0002\u00b2",
    "\u00b4\u00078\u0002\u0002\u00b3\u00b1\u0003\u0002\u0002\u0002\u00b3",
    "\u00b4\u0003\u0002\u0002\u0002\u00b4\u000b\u0003\u0002\u0002\u0002\u00b5",
    "\u00ba\u0005\u001a\u000e\u0002\u00b6\u00b7\u0007\u0010\u0002\u0002\u00b7",
    "\u00b9\u0005\u001a\u000e\u0002\u00b8\u00b6\u0003\u0002\u0002\u0002\u00b9",
    "\u00bc\u0003\u0002\u0002\u0002\u00ba\u00b8\u0003\u0002\u0002\u0002\u00ba",
    "\u00bb\u0003\u0002\u0002\u0002\u00bb\r\u0003\u0002\u0002\u0002\u00bc",
    "\u00ba\u0003\u0002\u0002\u0002\u00bd\u00c2\u00078\u0002\u0002\u00be",
    "\u00bf\u0007\u0010\u0002\u0002\u00bf\u00c1\u00078\u0002\u0002\u00c0",
    "\u00be\u0003\u0002\u0002\u0002\u00c1\u00c4\u0003\u0002\u0002\u0002\u00c2",
    "\u00c0\u0003\u0002\u0002\u0002\u00c2\u00c3\u0003\u0002\u0002\u0002\u00c3",
    "\u000f\u0003\u0002\u0002\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002\u00c5",
    "\u00ca\u0005\u0012\n\u0002\u00c6\u00c7\u0007\u0010\u0002\u0002\u00c7",
    "\u00c9\u0005\u0012\n\u0002\u00c8\u00c6\u0003\u0002\u0002\u0002\u00c9",
    "\u00cc\u0003\u0002\u0002\u0002\u00ca\u00c8\u0003\u0002\u0002\u0002\u00ca",
    "\u00cb\u0003\u0002\u0002\u0002\u00cb\u0011\u0003\u0002\u0002\u0002\u00cc",
    "\u00ca\u0003\u0002\u0002\u0002\u00cd\u00ce\b\n\u0001\u0002\u00ce\u00db",
    "\u0007\u0017\u0002\u0002\u00cf\u00db\u0007\u0018\u0002\u0002\u00d0\u00db",
    "\u0007\u0019\u0002\u0002\u00d1\u00db\u0005B\"\u0002\u00d2\u00db\u0005",
    "D#\u0002\u00d3\u00db\u0007\u001a\u0002\u0002\u00d4\u00db\u0005\"\u0012",
    "\u0002\u00d5\u00db\u0005\u0014\u000b\u0002\u00d6\u00db\u0005(\u0015",
    "\u0002\u00d7\u00d8\u0005> \u0002\u00d8\u00d9\u0005\u0012\n\n\u00d9\u00db",
    "\u0003\u0002\u0002\u0002\u00da\u00cd\u0003\u0002\u0002\u0002\u00da\u00cf",
    "\u0003\u0002\u0002\u0002\u00da\u00d0\u0003\u0002\u0002\u0002\u00da\u00d1",
    "\u0003\u0002\u0002\u0002\u00da\u00d2\u0003\u0002\u0002\u0002\u00da\u00d3",
    "\u0003\u0002\u0002\u0002\u00da\u00d4\u0003\u0002\u0002\u0002\u00da\u00d5",
    "\u0003\u0002\u0002\u0002\u00da\u00d6\u0003\u0002\u0002\u0002\u00da\u00d7",
    "\u0003\u0002\u0002\u0002\u00db\u00fe\u0003\u0002\u0002\u0002\u00dc\u00dd",
    "\f\u000b\u0002\u0002\u00dd\u00de\u0005@!\u0002\u00de\u00df\u0005\u0012",
    "\n\u000b\u00df\u00fd\u0003\u0002\u0002\u0002\u00e0\u00e1\f\t\u0002\u0002",
    "\u00e1\u00e2\u0005:\u001e\u0002\u00e2\u00e3\u0005\u0012\n\n\u00e3\u00fd",
    "\u0003\u0002\u0002\u0002\u00e4\u00e5\f\b\u0002\u0002\u00e5\u00e6\u0005",
    "8\u001d\u0002\u00e6\u00e7\u0005\u0012\n\t\u00e7\u00fd\u0003\u0002\u0002",
    "\u0002\u00e8\u00e9\f\u0007\u0002\u0002\u00e9\u00ea\u00056\u001c\u0002",
    "\u00ea\u00eb\u0005\u0012\n\u0007\u00eb\u00fd\u0003\u0002\u0002\u0002",
    "\u00ec\u00ed\f\u0006\u0002\u0002\u00ed\u00ee\u00054\u001b\u0002\u00ee",
    "\u00ef\u0005\u0012\n\u0007\u00ef\u00fd\u0003\u0002\u0002\u0002\u00f0",
    "\u00f1\f\u0005\u0002\u0002\u00f1\u00f2\u00052\u001a\u0002\u00f2\u00f3",
    "\u0005\u0012\n\u0006\u00f3\u00fd\u0003\u0002\u0002\u0002\u00f4\u00f5",
    "\f\u0004\u0002\u0002\u00f5\u00f6\u00050\u0019\u0002\u00f6\u00f7\u0005",
    "\u0012\n\u0005\u00f7\u00fd\u0003\u0002\u0002\u0002\u00f8\u00f9\f\u0003",
    "\u0002\u0002\u00f9\u00fa\u0005<\u001f\u0002\u00fa\u00fb\u0005\u0012",
    "\n\u0004\u00fb\u00fd\u0003\u0002\u0002\u0002\u00fc\u00dc\u0003\u0002",
    "\u0002\u0002\u00fc\u00e0\u0003\u0002\u0002\u0002\u00fc\u00e4\u0003\u0002",
    "\u0002\u0002\u00fc\u00e8\u0003\u0002\u0002\u0002\u00fc\u00ec\u0003\u0002",
    "\u0002\u0002\u00fc\u00f0\u0003\u0002\u0002\u0002\u00fc\u00f4\u0003\u0002",
    "\u0002\u0002\u00fc\u00f8\u0003\u0002\u0002\u0002\u00fd\u0100\u0003\u0002",
    "\u0002\u0002\u00fe\u00fc\u0003\u0002\u0002\u0002\u00fe\u00ff\u0003\u0002",
    "\u0002\u0002\u00ff\u0013\u0003\u0002\u0002\u0002\u0100\u00fe\u0003\u0002",
    "\u0002\u0002\u0101\u0105\u0005\u0018\r\u0002\u0102\u0104\u0005\u001e",
    "\u0010\u0002\u0103\u0102\u0003\u0002\u0002\u0002\u0104\u0107\u0003\u0002",
    "\u0002\u0002\u0105\u0103\u0003\u0002\u0002\u0002\u0105\u0106\u0003\u0002",
    "\u0002\u0002\u0106\u0015\u0003\u0002\u0002\u0002\u0107\u0105\u0003\u0002",
    "\u0002\u0002\u0108\u010a\u0005\u0018\r\u0002\u0109\u010b\u0005\u001e",
    "\u0010\u0002\u010a\u0109\u0003\u0002\u0002\u0002\u010b\u010c\u0003\u0002",
    "\u0002\u0002\u010c\u010a\u0003\u0002\u0002\u0002\u010c\u010d\u0003\u0002",
    "\u0002\u0002\u010d\u0017\u0003\u0002\u0002\u0002\u010e\u0114\u0005\u001a",
    "\u000e\u0002\u010f\u0110\u0007\u001b\u0002\u0002\u0110\u0111\u0005\u0012",
    "\n\u0002\u0111\u0112\u0007\u001c\u0002\u0002\u0112\u0114\u0003\u0002",
    "\u0002\u0002\u0113\u010e\u0003\u0002\u0002\u0002\u0113\u010f\u0003\u0002",
    "\u0002\u0002\u0114\u0019\u0003\u0002\u0002\u0002\u0115\u011c\u00078",
    "\u0002\u0002\u0116\u0117\u0007\u001b\u0002\u0002\u0117\u0118\u0005\u0012",
    "\n\u0002\u0118\u0119\u0007\u001c\u0002\u0002\u0119\u011a\u0005\u001c",
    "\u000f\u0002\u011a\u011c\u0003\u0002\u0002\u0002\u011b\u0115\u0003\u0002",
    "\u0002\u0002\u011b\u0116\u0003\u0002\u0002\u0002\u011c\u0120\u0003\u0002",
    "\u0002\u0002\u011d\u011f\u0005\u001c\u000f\u0002\u011e\u011d\u0003\u0002",
    "\u0002\u0002\u011f\u0122\u0003\u0002\u0002\u0002\u0120\u011e\u0003\u0002",
    "\u0002\u0002\u0120\u0121\u0003\u0002\u0002\u0002\u0121\u001b\u0003\u0002",
    "\u0002\u0002\u0122\u0120\u0003\u0002\u0002\u0002\u0123\u0125\u0005\u001e",
    "\u0010\u0002\u0124\u0123\u0003\u0002\u0002\u0002\u0125\u0128\u0003\u0002",
    "\u0002\u0002\u0126\u0124\u0003\u0002\u0002\u0002\u0126\u0127\u0003\u0002",
    "\u0002\u0002\u0127\u012f\u0003\u0002\u0002\u0002\u0128\u0126\u0003\u0002",
    "\u0002\u0002\u0129\u012a\u0007\u001d\u0002\u0002\u012a\u012b\u0005\u0012",
    "\n\u0002\u012b\u012c\u0007\u001e\u0002\u0002\u012c\u0130\u0003\u0002",
    "\u0002\u0002\u012d\u012e\u0007\u0015\u0002\u0002\u012e\u0130\u00078",
    "\u0002\u0002\u012f\u0129\u0003\u0002\u0002\u0002\u012f\u012d\u0003\u0002",
    "\u0002\u0002\u0130\u001d\u0003\u0002\u0002\u0002\u0131\u0132\u0007\u0016",
    "\u0002\u0002\u0132\u0134\u00078\u0002\u0002\u0133\u0131\u0003\u0002",
    "\u0002\u0002\u0133\u0134\u0003\u0002\u0002\u0002\u0134\u0135\u0003\u0002",
    "\u0002\u0002\u0135\u0136\u0005 \u0011\u0002\u0136\u001f\u0003\u0002",
    "\u0002\u0002\u0137\u0139\u0007\u001b\u0002\u0002\u0138\u013a\u0005\u0010",
    "\t\u0002\u0139\u0138\u0003\u0002\u0002\u0002\u0139\u013a\u0003\u0002",
    "\u0002\u0002\u013a\u013b\u0003\u0002\u0002\u0002\u013b\u013f\u0007\u001c",
    "\u0002\u0002\u013c\u013f\u0005(\u0015\u0002\u013d\u013f\u0005D#\u0002",
    "\u013e\u0137\u0003\u0002\u0002\u0002\u013e\u013c\u0003\u0002\u0002\u0002",
    "\u013e\u013d\u0003\u0002\u0002\u0002\u013f!\u0003\u0002\u0002\u0002",
    "\u0140\u0141\u0007\u0012\u0002\u0002\u0141\u0142\u0005$\u0013\u0002",
    "\u0142#\u0003\u0002\u0002\u0002\u0143\u0145\u0007\u001b\u0002\u0002",
    "\u0144\u0146\u0005&\u0014\u0002\u0145\u0144\u0003\u0002\u0002\u0002",
    "\u0145\u0146\u0003\u0002\u0002\u0002\u0146\u0147\u0003\u0002\u0002\u0002",
    "\u0147\u0148\u0007\u001c\u0002\u0002\u0148\u0149\u0005\u0004\u0003\u0002",
    "\u0149\u014a\u0007\u0007\u0002\u0002\u014a%\u0003\u0002\u0002\u0002",
    "\u014b\u014e\u0005\u000e\b\u0002\u014c\u014d\u0007\u0010\u0002\u0002",
    "\u014d\u014f\u0007\u001a\u0002\u0002\u014e\u014c\u0003\u0002\u0002\u0002",
    "\u014e\u014f\u0003\u0002\u0002\u0002\u014f\u0152\u0003\u0002\u0002\u0002",
    "\u0150\u0152\u0007\u001a\u0002\u0002\u0151\u014b\u0003\u0002\u0002\u0002",
    "\u0151\u0150\u0003\u0002\u0002\u0002\u0152\'\u0003\u0002\u0002\u0002",
    "\u0153\u0155\u0007\u001f\u0002\u0002\u0154\u0156\u0005*\u0016\u0002",
    "\u0155\u0154\u0003\u0002\u0002\u0002\u0155\u0156\u0003\u0002\u0002\u0002",
    "\u0156\u0157\u0003\u0002\u0002\u0002\u0157\u0158\u0007 \u0002\u0002",
    "\u0158)\u0003\u0002\u0002\u0002\u0159\u015f\u0005,\u0017\u0002\u015a",
    "\u015b\u0005.\u0018\u0002\u015b\u015c\u0005,\u0017\u0002\u015c\u015e",
    "\u0003\u0002\u0002\u0002\u015d\u015a\u0003\u0002\u0002\u0002\u015e\u0161",
    "\u0003\u0002\u0002\u0002\u015f\u015d\u0003\u0002\u0002\u0002\u015f\u0160",
    "\u0003\u0002\u0002\u0002\u0160\u0163\u0003\u0002\u0002\u0002\u0161\u015f",
    "\u0003\u0002\u0002\u0002\u0162\u0164\u0005.\u0018\u0002\u0163\u0162",
    "\u0003\u0002\u0002\u0002\u0163\u0164\u0003\u0002\u0002\u0002\u0164+",
    "\u0003\u0002\u0002\u0002\u0165\u0166\u0007\u001d\u0002\u0002\u0166\u0167",
    "\u0005\u0012\n\u0002\u0167\u0168\u0007\u001e\u0002\u0002\u0168\u0169",
    "\u0007\u0004\u0002\u0002\u0169\u016a\u0005\u0012\n\u0002\u016a\u0170",
    "\u0003\u0002\u0002\u0002\u016b\u016c\u00078\u0002\u0002\u016c\u016d",
    "\u0007\u0004\u0002\u0002\u016d\u0170\u0005\u0012\n\u0002\u016e\u0170",
    "\u0005\u0012\n\u0002\u016f\u0165\u0003\u0002\u0002\u0002\u016f\u016b",
    "\u0003\u0002\u0002\u0002\u016f\u016e\u0003\u0002\u0002\u0002\u0170-",
    "\u0003\u0002\u0002\u0002\u0171\u0172\t\u0002\u0002\u0002\u0172/\u0003",
    "\u0002\u0002\u0002\u0173\u0174\u0007!\u0002\u0002\u01741\u0003\u0002",
    "\u0002\u0002\u0175\u0176\u0007\"\u0002\u0002\u01763\u0003\u0002\u0002",
    "\u0002\u0177\u0178\t\u0003\u0002\u0002\u01785\u0003\u0002\u0002\u0002",
    "\u0179\u017a\u0007*\u0002\u0002\u017a7\u0003\u0002\u0002\u0002\u017b",
    "\u017c\t\u0004\u0002\u0002\u017c9\u0003\u0002\u0002\u0002\u017d\u017e",
    "\t\u0005\u0002\u0002\u017e;\u0003\u0002\u0002\u0002\u017f\u0180\t\u0006",
    "\u0002\u0002\u0180=\u0003\u0002\u0002\u0002\u0181\u0182\t\u0007\u0002",
    "\u0002\u0182?\u0003\u0002\u0002\u0002\u0183\u0184\u00077\u0002\u0002",
    "\u0184A\u0003\u0002\u0002\u0002\u0185\u0186\t\b\u0002\u0002\u0186C\u0003",
    "\u0002\u0002\u0002\u0187\u0188\t\t\u0002\u0002\u0188E\u0003\u0002\u0002",
    "\u0002$LPsx\u0084\u009e\u00a0\u00a4\u00a7\u00ae\u00b3\u00ba\u00c2\u00ca",
    "\u00da\u00fc\u00fe\u0105\u010c\u0113\u011b\u0120\u0126\u012f\u0133\u0139",
    "\u013e\u0145\u014e\u0151\u0155\u015f\u0163\u016f"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "';'", "'='", "'break'", "'do'", "'end'", "'while'", 
                     "'repeat'", "'until'", "'if'", "'then'", "'elseif'", 
                     "'else'", "'for'", "','", "'in'", "'function'", "'local'", 
                     "'return'", "'.'", "':'", "'nil'", "'false'", "'true'", 
                     "'...'", "'('", "')'", "'['", "']'", "'{'", "'}'", 
                     "'or'", "'and'", "'<'", "'>'", "'<='", "'>='", "'~='", 
                     "'!='", "'=='", "'..'", "'+'", "'-'", "'*'", "'/'", 
                     "'&'", "'|'", "'~'", "'<<'", "'>>'", "'^^'", "'not'", 
                     "'!'", "'^'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      "NAME", "NORMALSTRING", "CHARSTRING", "LONGSTRING", 
                      "INT", "HEX", "FLOAT", "LONGCOMMENT", "LINE_COMMENT", 
                      "WS", "SHEBANG" ];

var ruleNames =  [ "chunk", "block", "stat", "retstat", "funcname", "varlist", 
                   "namelist", "explist", "exp", "prefixexp", "functioncall", 
                   "varOrExp", "variable", "varSuffix", "nameAndArgs", "args", 
                   "functiondef", "funcbody", "parlist", "tableconstructor", 
                   "fieldlist", "field", "fieldsep", "operatorOr", "operatorAnd", 
                   "operatorComparison", "operatorStrcat", "operatorAddSub", 
                   "operatorMulDiv", "operatorBitwise", "operatorUnary", 
                   "operatorPower", "number", "string" ];

function TspParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

TspParser.prototype = Object.create(antlr4.Parser.prototype);
TspParser.prototype.constructor = TspParser;

Object.defineProperty(TspParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

TspParser.EOF = antlr4.Token.EOF;
TspParser.T__0 = 1;
TspParser.T__1 = 2;
TspParser.T__2 = 3;
TspParser.T__3 = 4;
TspParser.T__4 = 5;
TspParser.T__5 = 6;
TspParser.T__6 = 7;
TspParser.T__7 = 8;
TspParser.T__8 = 9;
TspParser.T__9 = 10;
TspParser.T__10 = 11;
TspParser.T__11 = 12;
TspParser.T__12 = 13;
TspParser.T__13 = 14;
TspParser.T__14 = 15;
TspParser.T__15 = 16;
TspParser.T__16 = 17;
TspParser.T__17 = 18;
TspParser.T__18 = 19;
TspParser.T__19 = 20;
TspParser.T__20 = 21;
TspParser.T__21 = 22;
TspParser.T__22 = 23;
TspParser.T__23 = 24;
TspParser.T__24 = 25;
TspParser.T__25 = 26;
TspParser.T__26 = 27;
TspParser.T__27 = 28;
TspParser.T__28 = 29;
TspParser.T__29 = 30;
TspParser.T__30 = 31;
TspParser.T__31 = 32;
TspParser.T__32 = 33;
TspParser.T__33 = 34;
TspParser.T__34 = 35;
TspParser.T__35 = 36;
TspParser.T__36 = 37;
TspParser.T__37 = 38;
TspParser.T__38 = 39;
TspParser.T__39 = 40;
TspParser.T__40 = 41;
TspParser.T__41 = 42;
TspParser.T__42 = 43;
TspParser.T__43 = 44;
TspParser.T__44 = 45;
TspParser.T__45 = 46;
TspParser.T__46 = 47;
TspParser.T__47 = 48;
TspParser.T__48 = 49;
TspParser.T__49 = 50;
TspParser.T__50 = 51;
TspParser.T__51 = 52;
TspParser.T__52 = 53;
TspParser.NAME = 54;
TspParser.NORMALSTRING = 55;
TspParser.CHARSTRING = 56;
TspParser.LONGSTRING = 57;
TspParser.INT = 58;
TspParser.HEX = 59;
TspParser.FLOAT = 60;
TspParser.LONGCOMMENT = 61;
TspParser.LINE_COMMENT = 62;
TspParser.WS = 63;
TspParser.SHEBANG = 64;

TspParser.RULE_chunk = 0;
TspParser.RULE_block = 1;
TspParser.RULE_stat = 2;
TspParser.RULE_retstat = 3;
TspParser.RULE_funcname = 4;
TspParser.RULE_varlist = 5;
TspParser.RULE_namelist = 6;
TspParser.RULE_explist = 7;
TspParser.RULE_exp = 8;
TspParser.RULE_prefixexp = 9;
TspParser.RULE_functioncall = 10;
TspParser.RULE_varOrExp = 11;
TspParser.RULE_variable = 12;
TspParser.RULE_varSuffix = 13;
TspParser.RULE_nameAndArgs = 14;
TspParser.RULE_args = 15;
TspParser.RULE_functiondef = 16;
TspParser.RULE_funcbody = 17;
TspParser.RULE_parlist = 18;
TspParser.RULE_tableconstructor = 19;
TspParser.RULE_fieldlist = 20;
TspParser.RULE_field = 21;
TspParser.RULE_fieldsep = 22;
TspParser.RULE_operatorOr = 23;
TspParser.RULE_operatorAnd = 24;
TspParser.RULE_operatorComparison = 25;
TspParser.RULE_operatorStrcat = 26;
TspParser.RULE_operatorAddSub = 27;
TspParser.RULE_operatorMulDiv = 28;
TspParser.RULE_operatorBitwise = 29;
TspParser.RULE_operatorUnary = 30;
TspParser.RULE_operatorPower = 31;
TspParser.RULE_number = 32;
TspParser.RULE_string = 33;

function ChunkContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_chunk;
    return this;
}

ChunkContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ChunkContext.prototype.constructor = ChunkContext;

ChunkContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ChunkContext.prototype.EOF = function() {
    return this.getToken(TspParser.EOF, 0);
};

ChunkContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterChunk(this);
	}
};

ChunkContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitChunk(this);
	}
};




TspParser.ChunkContext = ChunkContext;

TspParser.prototype.chunk = function() {

    var localctx = new ChunkContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, TspParser.RULE_chunk);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        this.block();
        this.state = 69;
        this.match(TspParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.stat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatContext);
    } else {
        return this.getTypedRuleContext(StatContext,i);
    }
};

BlockContext.prototype.retstat = function() {
    return this.getTypedRuleContext(RetstatContext,0);
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitBlock(this);
	}
};




TspParser.BlockContext = BlockContext;

TspParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, TspParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TspParser.T__0) | (1 << TspParser.T__2) | (1 << TspParser.T__3) | (1 << TspParser.T__5) | (1 << TspParser.T__6) | (1 << TspParser.T__8) | (1 << TspParser.T__12) | (1 << TspParser.T__15) | (1 << TspParser.T__16) | (1 << TspParser.T__24))) !== 0) || _la===TspParser.NAME) {
            this.state = 71;
            this.stat();
            this.state = 76;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 78;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===TspParser.T__17) {
            this.state = 77;
            this.retstat();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_stat;
    return this;
}

StatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatContext.prototype.constructor = StatContext;

StatContext.prototype.varlist = function() {
    return this.getTypedRuleContext(VarlistContext,0);
};

StatContext.prototype.explist = function() {
    return this.getTypedRuleContext(ExplistContext,0);
};

StatContext.prototype.functioncall = function() {
    return this.getTypedRuleContext(FunctioncallContext,0);
};

StatContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};

StatContext.prototype.exp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpContext);
    } else {
        return this.getTypedRuleContext(ExpContext,i);
    }
};

StatContext.prototype.NAME = function() {
    return this.getToken(TspParser.NAME, 0);
};

StatContext.prototype.namelist = function() {
    return this.getTypedRuleContext(NamelistContext,0);
};

StatContext.prototype.funcname = function() {
    return this.getTypedRuleContext(FuncnameContext,0);
};

StatContext.prototype.funcbody = function() {
    return this.getTypedRuleContext(FuncbodyContext,0);
};

StatContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterStat(this);
	}
};

StatContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitStat(this);
	}
};




TspParser.StatContext = StatContext;

TspParser.prototype.stat = function() {

    var localctx = new StatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, TspParser.RULE_stat);
    var _la = 0; // Token type
    try {
        this.state = 158;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 80;
            this.match(TspParser.T__0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 81;
            this.varlist();
            this.state = 82;
            this.match(TspParser.T__1);
            this.state = 83;
            this.explist();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 85;
            this.functioncall();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 86;
            this.match(TspParser.T__2);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 87;
            this.match(TspParser.T__3);
            this.state = 88;
            this.block();
            this.state = 89;
            this.match(TspParser.T__4);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 91;
            this.match(TspParser.T__5);
            this.state = 92;
            this.exp(0);
            this.state = 93;
            this.match(TspParser.T__3);
            this.state = 94;
            this.block();
            this.state = 95;
            this.match(TspParser.T__4);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 97;
            this.match(TspParser.T__6);
            this.state = 98;
            this.block();
            this.state = 99;
            this.match(TspParser.T__7);
            this.state = 100;
            this.exp(0);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 102;
            this.match(TspParser.T__8);
            this.state = 103;
            this.exp(0);
            this.state = 104;
            this.match(TspParser.T__9);
            this.state = 105;
            this.block();
            this.state = 113;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TspParser.T__10) {
                this.state = 106;
                this.match(TspParser.T__10);
                this.state = 107;
                this.exp(0);
                this.state = 108;
                this.match(TspParser.T__9);
                this.state = 109;
                this.block();
                this.state = 115;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 118;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===TspParser.T__11) {
                this.state = 116;
                this.match(TspParser.T__11);
                this.state = 117;
                this.block();
            }

            this.state = 120;
            this.match(TspParser.T__4);
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 122;
            this.match(TspParser.T__12);
            this.state = 123;
            this.match(TspParser.NAME);
            this.state = 124;
            this.match(TspParser.T__1);
            this.state = 125;
            this.exp(0);
            this.state = 126;
            this.match(TspParser.T__13);
            this.state = 127;
            this.exp(0);
            this.state = 130;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===TspParser.T__13) {
                this.state = 128;
                this.match(TspParser.T__13);
                this.state = 129;
                this.exp(0);
            }

            this.state = 132;
            this.match(TspParser.T__3);
            this.state = 133;
            this.block();
            this.state = 134;
            this.match(TspParser.T__4);
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 136;
            this.match(TspParser.T__12);
            this.state = 137;
            this.namelist();
            this.state = 138;
            this.match(TspParser.T__14);
            this.state = 139;
            this.explist();
            this.state = 140;
            this.match(TspParser.T__3);
            this.state = 141;
            this.block();
            this.state = 142;
            this.match(TspParser.T__4);
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 144;
            this.match(TspParser.T__15);
            this.state = 145;
            this.funcname();
            this.state = 146;
            this.funcbody();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 148;
            this.match(TspParser.T__16);
            this.state = 149;
            this.match(TspParser.T__15);
            this.state = 150;
            this.match(TspParser.NAME);
            this.state = 151;
            this.funcbody();
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 152;
            this.match(TspParser.T__16);
            this.state = 153;
            this.varlist();
            this.state = 156;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===TspParser.T__1) {
                this.state = 154;
                this.match(TspParser.T__1);
                this.state = 155;
                this.explist();
            }

            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RetstatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_retstat;
    return this;
}

RetstatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RetstatContext.prototype.constructor = RetstatContext;

RetstatContext.prototype.explist = function() {
    return this.getTypedRuleContext(ExplistContext,0);
};

RetstatContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterRetstat(this);
	}
};

RetstatContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitRetstat(this);
	}
};




TspParser.RetstatContext = RetstatContext;

TspParser.prototype.retstat = function() {

    var localctx = new RetstatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, TspParser.RULE_retstat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 160;
        this.match(TspParser.T__17);
        this.state = 162;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TspParser.T__15) | (1 << TspParser.T__20) | (1 << TspParser.T__21) | (1 << TspParser.T__22) | (1 << TspParser.T__23) | (1 << TspParser.T__24) | (1 << TspParser.T__28))) !== 0) || ((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & ((1 << (TspParser.T__41 - 42)) | (1 << (TspParser.T__50 - 42)) | (1 << (TspParser.T__51 - 42)) | (1 << (TspParser.NAME - 42)) | (1 << (TspParser.NORMALSTRING - 42)) | (1 << (TspParser.CHARSTRING - 42)) | (1 << (TspParser.LONGSTRING - 42)) | (1 << (TspParser.INT - 42)) | (1 << (TspParser.HEX - 42)) | (1 << (TspParser.FLOAT - 42)))) !== 0)) {
            this.state = 161;
            this.explist();
        }

        this.state = 165;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===TspParser.T__0) {
            this.state = 164;
            this.match(TspParser.T__0);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FuncnameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_funcname;
    return this;
}

FuncnameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncnameContext.prototype.constructor = FuncnameContext;

FuncnameContext.prototype.NAME = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TspParser.NAME);
    } else {
        return this.getToken(TspParser.NAME, i);
    }
};


FuncnameContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterFuncname(this);
	}
};

FuncnameContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitFuncname(this);
	}
};




TspParser.FuncnameContext = FuncnameContext;

TspParser.prototype.funcname = function() {

    var localctx = new FuncnameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, TspParser.RULE_funcname);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 167;
        this.match(TspParser.NAME);
        this.state = 172;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===TspParser.T__18) {
            this.state = 168;
            this.match(TspParser.T__18);
            this.state = 169;
            this.match(TspParser.NAME);
            this.state = 174;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 177;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===TspParser.T__19) {
            this.state = 175;
            this.match(TspParser.T__19);
            this.state = 176;
            this.match(TspParser.NAME);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VarlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_varlist;
    return this;
}

VarlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarlistContext.prototype.constructor = VarlistContext;

VarlistContext.prototype.variable = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableContext);
    } else {
        return this.getTypedRuleContext(VariableContext,i);
    }
};

VarlistContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterVarlist(this);
	}
};

VarlistContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitVarlist(this);
	}
};




TspParser.VarlistContext = VarlistContext;

TspParser.prototype.varlist = function() {

    var localctx = new VarlistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, TspParser.RULE_varlist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        this.variable();
        this.state = 184;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===TspParser.T__13) {
            this.state = 180;
            this.match(TspParser.T__13);
            this.state = 181;
            this.variable();
            this.state = 186;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NamelistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_namelist;
    return this;
}

NamelistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamelistContext.prototype.constructor = NamelistContext;

NamelistContext.prototype.NAME = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TspParser.NAME);
    } else {
        return this.getToken(TspParser.NAME, i);
    }
};


NamelistContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterNamelist(this);
	}
};

NamelistContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitNamelist(this);
	}
};




TspParser.NamelistContext = NamelistContext;

TspParser.prototype.namelist = function() {

    var localctx = new NamelistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, TspParser.RULE_namelist);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 187;
        this.match(TspParser.NAME);
        this.state = 192;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 188;
                this.match(TspParser.T__13);
                this.state = 189;
                this.match(TspParser.NAME); 
            }
            this.state = 194;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExplistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_explist;
    return this;
}

ExplistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExplistContext.prototype.constructor = ExplistContext;

ExplistContext.prototype.exp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpContext);
    } else {
        return this.getTypedRuleContext(ExpContext,i);
    }
};

ExplistContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterExplist(this);
	}
};

ExplistContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitExplist(this);
	}
};




TspParser.ExplistContext = ExplistContext;

TspParser.prototype.explist = function() {

    var localctx = new ExplistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, TspParser.RULE_explist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.exp(0);
        this.state = 200;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===TspParser.T__13) {
            this.state = 196;
            this.match(TspParser.T__13);
            this.state = 197;
            this.exp(0);
            this.state = 202;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_exp;
    return this;
}

ExpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpContext.prototype.constructor = ExpContext;

ExpContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

ExpContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

ExpContext.prototype.functiondef = function() {
    return this.getTypedRuleContext(FunctiondefContext,0);
};

ExpContext.prototype.prefixexp = function() {
    return this.getTypedRuleContext(PrefixexpContext,0);
};

ExpContext.prototype.tableconstructor = function() {
    return this.getTypedRuleContext(TableconstructorContext,0);
};

ExpContext.prototype.operatorUnary = function() {
    return this.getTypedRuleContext(OperatorUnaryContext,0);
};

ExpContext.prototype.exp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpContext);
    } else {
        return this.getTypedRuleContext(ExpContext,i);
    }
};

ExpContext.prototype.operatorPower = function() {
    return this.getTypedRuleContext(OperatorPowerContext,0);
};

ExpContext.prototype.operatorMulDiv = function() {
    return this.getTypedRuleContext(OperatorMulDivContext,0);
};

ExpContext.prototype.operatorAddSub = function() {
    return this.getTypedRuleContext(OperatorAddSubContext,0);
};

ExpContext.prototype.operatorStrcat = function() {
    return this.getTypedRuleContext(OperatorStrcatContext,0);
};

ExpContext.prototype.operatorComparison = function() {
    return this.getTypedRuleContext(OperatorComparisonContext,0);
};

ExpContext.prototype.operatorAnd = function() {
    return this.getTypedRuleContext(OperatorAndContext,0);
};

ExpContext.prototype.operatorOr = function() {
    return this.getTypedRuleContext(OperatorOrContext,0);
};

ExpContext.prototype.operatorBitwise = function() {
    return this.getTypedRuleContext(OperatorBitwiseContext,0);
};

ExpContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterExp(this);
	}
};

ExpContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitExp(this);
	}
};



TspParser.prototype.exp = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 16;
    this.enterRecursionRule(localctx, 16, TspParser.RULE_exp, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 216;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case TspParser.T__20:
            this.state = 204;
            this.match(TspParser.T__20);
            break;
        case TspParser.T__21:
            this.state = 205;
            this.match(TspParser.T__21);
            break;
        case TspParser.T__22:
            this.state = 206;
            this.match(TspParser.T__22);
            break;
        case TspParser.INT:
        case TspParser.HEX:
        case TspParser.FLOAT:
            this.state = 207;
            this.number();
            break;
        case TspParser.NORMALSTRING:
        case TspParser.CHARSTRING:
        case TspParser.LONGSTRING:
            this.state = 208;
            this.string();
            break;
        case TspParser.T__23:
            this.state = 209;
            this.match(TspParser.T__23);
            break;
        case TspParser.T__15:
            this.state = 210;
            this.functiondef();
            break;
        case TspParser.T__24:
        case TspParser.NAME:
            this.state = 211;
            this.prefixexp();
            break;
        case TspParser.T__28:
            this.state = 212;
            this.tableconstructor();
            break;
        case TspParser.T__41:
        case TspParser.T__50:
        case TspParser.T__51:
            this.state = 213;
            this.operatorUnary();
            this.state = 214;
            this.exp(8);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 252;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 250;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TspParser.RULE_exp);
                    this.state = 218;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 219;
                    this.operatorPower();
                    this.state = 220;
                    this.exp(9);
                    break;

                case 2:
                    localctx = new ExpContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TspParser.RULE_exp);
                    this.state = 222;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 223;
                    this.operatorMulDiv();
                    this.state = 224;
                    this.exp(8);
                    break;

                case 3:
                    localctx = new ExpContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TspParser.RULE_exp);
                    this.state = 226;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 227;
                    this.operatorAddSub();
                    this.state = 228;
                    this.exp(7);
                    break;

                case 4:
                    localctx = new ExpContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TspParser.RULE_exp);
                    this.state = 230;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 231;
                    this.operatorStrcat();
                    this.state = 232;
                    this.exp(5);
                    break;

                case 5:
                    localctx = new ExpContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TspParser.RULE_exp);
                    this.state = 234;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 235;
                    this.operatorComparison();
                    this.state = 236;
                    this.exp(5);
                    break;

                case 6:
                    localctx = new ExpContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TspParser.RULE_exp);
                    this.state = 238;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 239;
                    this.operatorAnd();
                    this.state = 240;
                    this.exp(4);
                    break;

                case 7:
                    localctx = new ExpContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TspParser.RULE_exp);
                    this.state = 242;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 243;
                    this.operatorOr();
                    this.state = 244;
                    this.exp(3);
                    break;

                case 8:
                    localctx = new ExpContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TspParser.RULE_exp);
                    this.state = 246;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 247;
                    this.operatorBitwise();
                    this.state = 248;
                    this.exp(2);
                    break;

                } 
            }
            this.state = 254;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function PrefixexpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_prefixexp;
    return this;
}

PrefixexpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrefixexpContext.prototype.constructor = PrefixexpContext;

PrefixexpContext.prototype.varOrExp = function() {
    return this.getTypedRuleContext(VarOrExpContext,0);
};

PrefixexpContext.prototype.nameAndArgs = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NameAndArgsContext);
    } else {
        return this.getTypedRuleContext(NameAndArgsContext,i);
    }
};

PrefixexpContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterPrefixexp(this);
	}
};

PrefixexpContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitPrefixexp(this);
	}
};




TspParser.PrefixexpContext = PrefixexpContext;

TspParser.prototype.prefixexp = function() {

    var localctx = new PrefixexpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, TspParser.RULE_prefixexp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 255;
        this.varOrExp();
        this.state = 259;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 256;
                this.nameAndArgs(); 
            }
            this.state = 261;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctioncallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_functioncall;
    return this;
}

FunctioncallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctioncallContext.prototype.constructor = FunctioncallContext;

FunctioncallContext.prototype.varOrExp = function() {
    return this.getTypedRuleContext(VarOrExpContext,0);
};

FunctioncallContext.prototype.nameAndArgs = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NameAndArgsContext);
    } else {
        return this.getTypedRuleContext(NameAndArgsContext,i);
    }
};

FunctioncallContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterFunctioncall(this);
	}
};

FunctioncallContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitFunctioncall(this);
	}
};




TspParser.FunctioncallContext = FunctioncallContext;

TspParser.prototype.functioncall = function() {

    var localctx = new FunctioncallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, TspParser.RULE_functioncall);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 262;
        this.varOrExp();
        this.state = 264; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 263;
        		this.nameAndArgs();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 266; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,18, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VarOrExpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_varOrExp;
    return this;
}

VarOrExpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarOrExpContext.prototype.constructor = VarOrExpContext;

VarOrExpContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

VarOrExpContext.prototype.exp = function() {
    return this.getTypedRuleContext(ExpContext,0);
};

VarOrExpContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterVarOrExp(this);
	}
};

VarOrExpContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitVarOrExp(this);
	}
};




TspParser.VarOrExpContext = VarOrExpContext;

TspParser.prototype.varOrExp = function() {

    var localctx = new VarOrExpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, TspParser.RULE_varOrExp);
    try {
        this.state = 273;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 268;
            this.variable();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 269;
            this.match(TspParser.T__24);
            this.state = 270;
            this.exp(0);
            this.state = 271;
            this.match(TspParser.T__25);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.NAME = function() {
    return this.getToken(TspParser.NAME, 0);
};

VariableContext.prototype.exp = function() {
    return this.getTypedRuleContext(ExpContext,0);
};

VariableContext.prototype.varSuffix = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarSuffixContext);
    } else {
        return this.getTypedRuleContext(VarSuffixContext,i);
    }
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitVariable(this);
	}
};




TspParser.VariableContext = VariableContext;

TspParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, TspParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 281;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case TspParser.NAME:
            this.state = 275;
            this.match(TspParser.NAME);
            break;
        case TspParser.T__24:
            this.state = 276;
            this.match(TspParser.T__24);
            this.state = 277;
            this.exp(0);
            this.state = 278;
            this.match(TspParser.T__25);
            this.state = 279;
            this.varSuffix();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 286;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 283;
                this.varSuffix(); 
            }
            this.state = 288;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VarSuffixContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_varSuffix;
    return this;
}

VarSuffixContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarSuffixContext.prototype.constructor = VarSuffixContext;

VarSuffixContext.prototype.exp = function() {
    return this.getTypedRuleContext(ExpContext,0);
};

VarSuffixContext.prototype.NAME = function() {
    return this.getToken(TspParser.NAME, 0);
};

VarSuffixContext.prototype.nameAndArgs = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NameAndArgsContext);
    } else {
        return this.getTypedRuleContext(NameAndArgsContext,i);
    }
};

VarSuffixContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterVarSuffix(this);
	}
};

VarSuffixContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitVarSuffix(this);
	}
};




TspParser.VarSuffixContext = VarSuffixContext;

TspParser.prototype.varSuffix = function() {

    var localctx = new VarSuffixContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, TspParser.RULE_varSuffix);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 292;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TspParser.T__19) | (1 << TspParser.T__24) | (1 << TspParser.T__28))) !== 0) || ((((_la - 55)) & ~0x1f) == 0 && ((1 << (_la - 55)) & ((1 << (TspParser.NORMALSTRING - 55)) | (1 << (TspParser.CHARSTRING - 55)) | (1 << (TspParser.LONGSTRING - 55)))) !== 0)) {
            this.state = 289;
            this.nameAndArgs();
            this.state = 294;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 301;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case TspParser.T__26:
            this.state = 295;
            this.match(TspParser.T__26);
            this.state = 296;
            this.exp(0);
            this.state = 297;
            this.match(TspParser.T__27);
            break;
        case TspParser.T__18:
            this.state = 299;
            this.match(TspParser.T__18);
            this.state = 300;
            this.match(TspParser.NAME);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NameAndArgsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_nameAndArgs;
    return this;
}

NameAndArgsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameAndArgsContext.prototype.constructor = NameAndArgsContext;

NameAndArgsContext.prototype.args = function() {
    return this.getTypedRuleContext(ArgsContext,0);
};

NameAndArgsContext.prototype.NAME = function() {
    return this.getToken(TspParser.NAME, 0);
};

NameAndArgsContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterNameAndArgs(this);
	}
};

NameAndArgsContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitNameAndArgs(this);
	}
};




TspParser.NameAndArgsContext = NameAndArgsContext;

TspParser.prototype.nameAndArgs = function() {

    var localctx = new NameAndArgsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, TspParser.RULE_nameAndArgs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 305;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===TspParser.T__19) {
            this.state = 303;
            this.match(TspParser.T__19);
            this.state = 304;
            this.match(TspParser.NAME);
        }

        this.state = 307;
        this.args();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_args;
    return this;
}

ArgsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgsContext.prototype.constructor = ArgsContext;

ArgsContext.prototype.explist = function() {
    return this.getTypedRuleContext(ExplistContext,0);
};

ArgsContext.prototype.tableconstructor = function() {
    return this.getTypedRuleContext(TableconstructorContext,0);
};

ArgsContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

ArgsContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterArgs(this);
	}
};

ArgsContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitArgs(this);
	}
};




TspParser.ArgsContext = ArgsContext;

TspParser.prototype.args = function() {

    var localctx = new ArgsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, TspParser.RULE_args);
    var _la = 0; // Token type
    try {
        this.state = 316;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case TspParser.T__24:
            this.enterOuterAlt(localctx, 1);
            this.state = 309;
            this.match(TspParser.T__24);
            this.state = 311;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TspParser.T__15) | (1 << TspParser.T__20) | (1 << TspParser.T__21) | (1 << TspParser.T__22) | (1 << TspParser.T__23) | (1 << TspParser.T__24) | (1 << TspParser.T__28))) !== 0) || ((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & ((1 << (TspParser.T__41 - 42)) | (1 << (TspParser.T__50 - 42)) | (1 << (TspParser.T__51 - 42)) | (1 << (TspParser.NAME - 42)) | (1 << (TspParser.NORMALSTRING - 42)) | (1 << (TspParser.CHARSTRING - 42)) | (1 << (TspParser.LONGSTRING - 42)) | (1 << (TspParser.INT - 42)) | (1 << (TspParser.HEX - 42)) | (1 << (TspParser.FLOAT - 42)))) !== 0)) {
                this.state = 310;
                this.explist();
            }

            this.state = 313;
            this.match(TspParser.T__25);
            break;
        case TspParser.T__28:
            this.enterOuterAlt(localctx, 2);
            this.state = 314;
            this.tableconstructor();
            break;
        case TspParser.NORMALSTRING:
        case TspParser.CHARSTRING:
        case TspParser.LONGSTRING:
            this.enterOuterAlt(localctx, 3);
            this.state = 315;
            this.string();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctiondefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_functiondef;
    return this;
}

FunctiondefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctiondefContext.prototype.constructor = FunctiondefContext;

FunctiondefContext.prototype.funcbody = function() {
    return this.getTypedRuleContext(FuncbodyContext,0);
};

FunctiondefContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterFunctiondef(this);
	}
};

FunctiondefContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitFunctiondef(this);
	}
};




TspParser.FunctiondefContext = FunctiondefContext;

TspParser.prototype.functiondef = function() {

    var localctx = new FunctiondefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, TspParser.RULE_functiondef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 318;
        this.match(TspParser.T__15);
        this.state = 319;
        this.funcbody();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FuncbodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_funcbody;
    return this;
}

FuncbodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncbodyContext.prototype.constructor = FuncbodyContext;

FuncbodyContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

FuncbodyContext.prototype.parlist = function() {
    return this.getTypedRuleContext(ParlistContext,0);
};

FuncbodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterFuncbody(this);
	}
};

FuncbodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitFuncbody(this);
	}
};




TspParser.FuncbodyContext = FuncbodyContext;

TspParser.prototype.funcbody = function() {

    var localctx = new FuncbodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, TspParser.RULE_funcbody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 321;
        this.match(TspParser.T__24);
        this.state = 323;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===TspParser.T__23 || _la===TspParser.NAME) {
            this.state = 322;
            this.parlist();
        }

        this.state = 325;
        this.match(TspParser.T__25);
        this.state = 326;
        this.block();
        this.state = 327;
        this.match(TspParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_parlist;
    return this;
}

ParlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParlistContext.prototype.constructor = ParlistContext;

ParlistContext.prototype.namelist = function() {
    return this.getTypedRuleContext(NamelistContext,0);
};

ParlistContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterParlist(this);
	}
};

ParlistContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitParlist(this);
	}
};




TspParser.ParlistContext = ParlistContext;

TspParser.prototype.parlist = function() {

    var localctx = new ParlistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, TspParser.RULE_parlist);
    var _la = 0; // Token type
    try {
        this.state = 335;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case TspParser.NAME:
            this.enterOuterAlt(localctx, 1);
            this.state = 329;
            this.namelist();
            this.state = 332;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===TspParser.T__13) {
                this.state = 330;
                this.match(TspParser.T__13);
                this.state = 331;
                this.match(TspParser.T__23);
            }

            break;
        case TspParser.T__23:
            this.enterOuterAlt(localctx, 2);
            this.state = 334;
            this.match(TspParser.T__23);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TableconstructorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_tableconstructor;
    return this;
}

TableconstructorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TableconstructorContext.prototype.constructor = TableconstructorContext;

TableconstructorContext.prototype.fieldlist = function() {
    return this.getTypedRuleContext(FieldlistContext,0);
};

TableconstructorContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterTableconstructor(this);
	}
};

TableconstructorContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitTableconstructor(this);
	}
};




TspParser.TableconstructorContext = TableconstructorContext;

TspParser.prototype.tableconstructor = function() {

    var localctx = new TableconstructorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, TspParser.RULE_tableconstructor);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 337;
        this.match(TspParser.T__28);
        this.state = 339;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TspParser.T__15) | (1 << TspParser.T__20) | (1 << TspParser.T__21) | (1 << TspParser.T__22) | (1 << TspParser.T__23) | (1 << TspParser.T__24) | (1 << TspParser.T__26) | (1 << TspParser.T__28))) !== 0) || ((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & ((1 << (TspParser.T__41 - 42)) | (1 << (TspParser.T__50 - 42)) | (1 << (TspParser.T__51 - 42)) | (1 << (TspParser.NAME - 42)) | (1 << (TspParser.NORMALSTRING - 42)) | (1 << (TspParser.CHARSTRING - 42)) | (1 << (TspParser.LONGSTRING - 42)) | (1 << (TspParser.INT - 42)) | (1 << (TspParser.HEX - 42)) | (1 << (TspParser.FLOAT - 42)))) !== 0)) {
            this.state = 338;
            this.fieldlist();
        }

        this.state = 341;
        this.match(TspParser.T__29);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FieldlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_fieldlist;
    return this;
}

FieldlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldlistContext.prototype.constructor = FieldlistContext;

FieldlistContext.prototype.field = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldContext);
    } else {
        return this.getTypedRuleContext(FieldContext,i);
    }
};

FieldlistContext.prototype.fieldsep = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldsepContext);
    } else {
        return this.getTypedRuleContext(FieldsepContext,i);
    }
};

FieldlistContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterFieldlist(this);
	}
};

FieldlistContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitFieldlist(this);
	}
};




TspParser.FieldlistContext = FieldlistContext;

TspParser.prototype.fieldlist = function() {

    var localctx = new FieldlistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, TspParser.RULE_fieldlist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 343;
        this.field();
        this.state = 349;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 344;
                this.fieldsep();
                this.state = 345;
                this.field(); 
            }
            this.state = 351;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,31,this._ctx);
        }

        this.state = 353;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===TspParser.T__0 || _la===TspParser.T__13) {
            this.state = 352;
            this.fieldsep();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_field;
    return this;
}

FieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldContext.prototype.constructor = FieldContext;

FieldContext.prototype.exp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpContext);
    } else {
        return this.getTypedRuleContext(ExpContext,i);
    }
};

FieldContext.prototype.NAME = function() {
    return this.getToken(TspParser.NAME, 0);
};

FieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterField(this);
	}
};

FieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitField(this);
	}
};




TspParser.FieldContext = FieldContext;

TspParser.prototype.field = function() {

    var localctx = new FieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, TspParser.RULE_field);
    try {
        this.state = 365;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 355;
            this.match(TspParser.T__26);
            this.state = 356;
            this.exp(0);
            this.state = 357;
            this.match(TspParser.T__27);
            this.state = 358;
            this.match(TspParser.T__1);
            this.state = 359;
            this.exp(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 361;
            this.match(TspParser.NAME);
            this.state = 362;
            this.match(TspParser.T__1);
            this.state = 363;
            this.exp(0);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 364;
            this.exp(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FieldsepContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_fieldsep;
    return this;
}

FieldsepContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldsepContext.prototype.constructor = FieldsepContext;


FieldsepContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterFieldsep(this);
	}
};

FieldsepContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitFieldsep(this);
	}
};




TspParser.FieldsepContext = FieldsepContext;

TspParser.prototype.fieldsep = function() {

    var localctx = new FieldsepContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, TspParser.RULE_fieldsep);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 367;
        _la = this._input.LA(1);
        if(!(_la===TspParser.T__0 || _la===TspParser.T__13)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperatorOrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_operatorOr;
    return this;
}

OperatorOrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorOrContext.prototype.constructor = OperatorOrContext;


OperatorOrContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterOperatorOr(this);
	}
};

OperatorOrContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitOperatorOr(this);
	}
};




TspParser.OperatorOrContext = OperatorOrContext;

TspParser.prototype.operatorOr = function() {

    var localctx = new OperatorOrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, TspParser.RULE_operatorOr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 369;
        this.match(TspParser.T__30);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperatorAndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_operatorAnd;
    return this;
}

OperatorAndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorAndContext.prototype.constructor = OperatorAndContext;


OperatorAndContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterOperatorAnd(this);
	}
};

OperatorAndContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitOperatorAnd(this);
	}
};




TspParser.OperatorAndContext = OperatorAndContext;

TspParser.prototype.operatorAnd = function() {

    var localctx = new OperatorAndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, TspParser.RULE_operatorAnd);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 371;
        this.match(TspParser.T__31);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperatorComparisonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_operatorComparison;
    return this;
}

OperatorComparisonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorComparisonContext.prototype.constructor = OperatorComparisonContext;


OperatorComparisonContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterOperatorComparison(this);
	}
};

OperatorComparisonContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitOperatorComparison(this);
	}
};




TspParser.OperatorComparisonContext = OperatorComparisonContext;

TspParser.prototype.operatorComparison = function() {

    var localctx = new OperatorComparisonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, TspParser.RULE_operatorComparison);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 373;
        _la = this._input.LA(1);
        if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (TspParser.T__32 - 33)) | (1 << (TspParser.T__33 - 33)) | (1 << (TspParser.T__34 - 33)) | (1 << (TspParser.T__35 - 33)) | (1 << (TspParser.T__36 - 33)) | (1 << (TspParser.T__37 - 33)) | (1 << (TspParser.T__38 - 33)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperatorStrcatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_operatorStrcat;
    return this;
}

OperatorStrcatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorStrcatContext.prototype.constructor = OperatorStrcatContext;


OperatorStrcatContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterOperatorStrcat(this);
	}
};

OperatorStrcatContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitOperatorStrcat(this);
	}
};




TspParser.OperatorStrcatContext = OperatorStrcatContext;

TspParser.prototype.operatorStrcat = function() {

    var localctx = new OperatorStrcatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, TspParser.RULE_operatorStrcat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 375;
        this.match(TspParser.T__39);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperatorAddSubContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_operatorAddSub;
    return this;
}

OperatorAddSubContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorAddSubContext.prototype.constructor = OperatorAddSubContext;


OperatorAddSubContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterOperatorAddSub(this);
	}
};

OperatorAddSubContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitOperatorAddSub(this);
	}
};




TspParser.OperatorAddSubContext = OperatorAddSubContext;

TspParser.prototype.operatorAddSub = function() {

    var localctx = new OperatorAddSubContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, TspParser.RULE_operatorAddSub);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 377;
        _la = this._input.LA(1);
        if(!(_la===TspParser.T__40 || _la===TspParser.T__41)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperatorMulDivContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_operatorMulDiv;
    return this;
}

OperatorMulDivContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorMulDivContext.prototype.constructor = OperatorMulDivContext;


OperatorMulDivContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterOperatorMulDiv(this);
	}
};

OperatorMulDivContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitOperatorMulDiv(this);
	}
};




TspParser.OperatorMulDivContext = OperatorMulDivContext;

TspParser.prototype.operatorMulDiv = function() {

    var localctx = new OperatorMulDivContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, TspParser.RULE_operatorMulDiv);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 379;
        _la = this._input.LA(1);
        if(!(_la===TspParser.T__42 || _la===TspParser.T__43)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperatorBitwiseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_operatorBitwise;
    return this;
}

OperatorBitwiseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorBitwiseContext.prototype.constructor = OperatorBitwiseContext;


OperatorBitwiseContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterOperatorBitwise(this);
	}
};

OperatorBitwiseContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitOperatorBitwise(this);
	}
};




TspParser.OperatorBitwiseContext = OperatorBitwiseContext;

TspParser.prototype.operatorBitwise = function() {

    var localctx = new OperatorBitwiseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, TspParser.RULE_operatorBitwise);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 381;
        _la = this._input.LA(1);
        if(!(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (TspParser.T__44 - 45)) | (1 << (TspParser.T__45 - 45)) | (1 << (TspParser.T__46 - 45)) | (1 << (TspParser.T__47 - 45)) | (1 << (TspParser.T__48 - 45)) | (1 << (TspParser.T__49 - 45)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperatorUnaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_operatorUnary;
    return this;
}

OperatorUnaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorUnaryContext.prototype.constructor = OperatorUnaryContext;


OperatorUnaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterOperatorUnary(this);
	}
};

OperatorUnaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitOperatorUnary(this);
	}
};




TspParser.OperatorUnaryContext = OperatorUnaryContext;

TspParser.prototype.operatorUnary = function() {

    var localctx = new OperatorUnaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, TspParser.RULE_operatorUnary);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 383;
        _la = this._input.LA(1);
        if(!(((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & ((1 << (TspParser.T__41 - 42)) | (1 << (TspParser.T__50 - 42)) | (1 << (TspParser.T__51 - 42)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperatorPowerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_operatorPower;
    return this;
}

OperatorPowerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorPowerContext.prototype.constructor = OperatorPowerContext;


OperatorPowerContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterOperatorPower(this);
	}
};

OperatorPowerContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitOperatorPower(this);
	}
};




TspParser.OperatorPowerContext = OperatorPowerContext;

TspParser.prototype.operatorPower = function() {

    var localctx = new OperatorPowerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, TspParser.RULE_operatorPower);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 385;
        this.match(TspParser.T__52);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.INT = function() {
    return this.getToken(TspParser.INT, 0);
};

NumberContext.prototype.HEX = function() {
    return this.getToken(TspParser.HEX, 0);
};

NumberContext.prototype.FLOAT = function() {
    return this.getToken(TspParser.FLOAT, 0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitNumber(this);
	}
};




TspParser.NumberContext = NumberContext;

TspParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, TspParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 387;
        _la = this._input.LA(1);
        if(!(((((_la - 58)) & ~0x1f) == 0 && ((1 << (_la - 58)) & ((1 << (TspParser.INT - 58)) | (1 << (TspParser.HEX - 58)) | (1 << (TspParser.FLOAT - 58)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TspParser.RULE_string;
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;

StringContext.prototype.NORMALSTRING = function() {
    return this.getToken(TspParser.NORMALSTRING, 0);
};

StringContext.prototype.CHARSTRING = function() {
    return this.getToken(TspParser.CHARSTRING, 0);
};

StringContext.prototype.LONGSTRING = function() {
    return this.getToken(TspParser.LONGSTRING, 0);
};

StringContext.prototype.enterRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.enterString(this);
	}
};

StringContext.prototype.exitRule = function(listener) {
    if(listener instanceof TspListener ) {
        listener.exitString(this);
	}
};




TspParser.StringContext = StringContext;

TspParser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, TspParser.RULE_string);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 389;
        _la = this._input.LA(1);
        if(!(((((_la - 55)) & ~0x1f) == 0 && ((1 << (_la - 55)) & ((1 << (TspParser.NORMALSTRING - 55)) | (1 << (TspParser.CHARSTRING - 55)) | (1 << (TspParser.LONGSTRING - 55)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


TspParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 8:
			return this.exp_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

TspParser.prototype.exp_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 9);
		case 1:
			return this.precpred(this._ctx, 7);
		case 2:
			return this.precpred(this._ctx, 6);
		case 3:
			return this.precpred(this._ctx, 5);
		case 4:
			return this.precpred(this._ctx, 4);
		case 5:
			return this.precpred(this._ctx, 3);
		case 6:
			return this.precpred(this._ctx, 2);
		case 7:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.TspParser = TspParser;