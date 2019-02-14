/*
 *  Copyright Tektronix Inc.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
'use strict'

import { CommonTokenStream, InputStream, ParserRuleContext, Token } from 'antlr4'
// tslint:disable:no-submodule-imports
import { ConsoleErrorListener } from 'antlr4/error/ErrorListener'
import { RecognitionException } from 'antlr4/error/Errors'
import { ParseTreeWalker, TerminalNode } from 'antlr4/tree/Tree'
// tslint:enable:no-submodule-imports
import {
    CompletionItemKind,
    CompletionList,
    Diagnostic,
    Position,
    SignatureHelp,
    TextDocument,
    TextDocumentContentChangeEvent,
    TextDocumentItem
} from 'vscode-languageserver'

import { TspFastLexer, TspFastListener, TspFastParser, TspLexer, TspListener, TspParser } from './antlr4-tsplang'
import { CompletionItem, DocumentSymbol, Range, ResolvedNamespace, SignatureInformation } from './decorators'
import { CommandSet } from './instrument'
import { TokenUtil } from './language-comprehension'
import { ExclusiveContext, FuzzyOffsetMap } from './language-comprehension/exclusive-completion'
import { AssignmentResults, getAssignmentCompletions } from './language-comprehension/parser-context-handler'
import { ParameterContext, SignatureContext } from './language-comprehension/signature'
import { Outline } from './outline'
import { SuggestionSortKind, TsplangSettings } from './settings'

// tslint:disable-next-line:no-empty
ConsoleErrorListener.prototype.syntaxError = (): void => {}

declare class CorrectRecogException extends RecognitionException {
    startToken?: Token
}

declare type HRTime = [number, number]

class DebugTimer {
    timeStack: Array<HRTime>

    constructor() {
        this.timeStack = new Array()
    }

    createChunkLog = (time: HRTime): string => {
        const pid = `${process.pid}:`
        // tslint:disable-next-line:no-magic-numbers
        const clk = `${time[0]}s ${time[1] / 1000000}ms`

        return [pid, '--> total time:', clk].join(' ')
    }

    createStatementLog(line: number, column: number, time: HRTime): string {
        const pid = `${process.pid}:`
        // tslint:disable:no-magic-numbers
        const loc = `(Ln ${this.pad(line, 4)}, Col ${this.pad(column, 3)})`
        const clk = `${this.pad(time[0], 3)}s ${this.pad(time[1] / 1000000, 10)}ms`
        // tslint:enable:no-magic-numbers

        return [pid, loc, clk].join(' ')
    }

    start(): void {
        this.timeStack.push(process.hrtime())
    }

    stop(): HRTime {
        return process.hrtime(this.timeStack.pop())
    }

    private pad = (n: number, width: number): string => {
        const padChar = ' '
        const s = n.toString()

        return (s.length >= width) ? s : new Array(width + s.length + 1).join(padChar) + s
    }
}

// tslint:disable
export class DocumentContext extends TspFastListener {
    readonly commandSet: CommandSet
    document: TextDocument
    errors: Array<Diagnostic>
    // readonly outline: Outline
    // ranges: Array<Range>
    // statements: WeakMap<Range, TspFastParser.StatementContext>
    exceptionTokenIndex?: number

    private _settings: TsplangSettings
    private _sortMap: Map<CompletionItemKind, SuggestionSortKind>
    // private enteredStatementException: boolean
    // /**
    //  * A Map keyed to the ending offset of an assignment operator (`=`) or
    //  * expression list separator (`,`). The associated key-value is an
    //  * ExclusiveContext.
    //  */
    // private exclusives: Map<number, ExclusiveContext>
    private exceptionRanges: Array<Range>
    // private fuzzyOffsets: FuzzyOffsetMap
    // private fuzzySignatureOffsets: FuzzyOffsetMap
    private inputStream: InputStream
    private lexer: TspFastLexer
    private parser: TspFastParser
    // private parseTree: ParserRuleContext
    // /**
    //  * A Map keyed to the ending offset of a function call's open parenthesis.
    //  * The associated key-value is a SignatureContext.
    //  */
    // private signatures: Map<number, SignatureContext>
    private symbols: Array<DocumentSymbol>
    // private readonly tableIndexRegexp: RegExp
    private timer: DebugTimer
    private tokenStream: CommonTokenStream

    constructor(item: TextDocumentItem, commandSet: CommandSet, settings: TsplangSettings) {
        super()

        this.document = TextDocument.create(item.uri, item.languageId, item.version, item.text)
        this.commandSet = commandSet
        // this.outline = new Outline(item)
        this.settings = settings

        // this.tableIndexRegexp = new RegExp(/\[[0-9]\]/g)

        // this.ranges = new Array()
        // this.statements = new WeakMap()

        // this.enteredStatementException = false
        this.errors = new Array()
        // this.exclusives = new Map()
        // this.fuzzyOffsets = new FuzzyOffsetMap()
        // this.fuzzySignatureOffsets = new FuzzyOffsetMap()
        // this.signatures = new Map()

        this.exceptionRanges = new Array()
        this.symbols = new Array()

        this.inputStream = new InputStream(this.document.getText())
        this.lexer = new TspFastLexer(this.inputStream)
        this.tokenStream = new CommonTokenStream(this.lexer)
        this.parser = new TspFastParser(this.tokenStream)
        this.parser.buildParseTrees = true

        this.parser.addParseListener(this)

        // this.parseTree = this.parser.chunk()
        this.parser.chunk()
    }

    get settings(): TsplangSettings {
        return this._settings
    }

    set settings(value: TsplangSettings) {
        this._settings = value
        this._sortMap = TsplangSettings.sortMap(this._settings)
    }

    // exitFunctionCall(context: TspParser.FunctionCallContext): void {
    //     // There's no exception handling in this function.
    //     if (context.exception !== null) {
    //         return
    //     }

    //     // Context decompositions.
    //     const objectCall = context.objectCall()
    //     const args = objectCall.args()

    //     // Uninteresting context states
    //     if (objectCall.NAME() !== null) {
    //         //  functionCall  --{1}-->  objectCall  --{1}-->  ':' NAME
    //         return
    //     }

    //     if (args.tableConstructor() !== null) {
    //         //  functionCall  --{1}-->  objectCall  --{1}-->  args  --{1}-->  tableConstructor
    //         return
    //     }

    //     if (args.string() !== null) {
    //         //  functionCall  --{1}-->  objectCall  --{1}-->  args  --{1}-->  string
    //         return
    //     }

    //     // Context TerminalNode filters.
    //     const openParenthesis = args.children.find((value: ParserRuleContext | TerminalNode) => {
    //         return value instanceof TerminalNode && value.symbol.text.localeCompare('(') === 0
    //     })
    //     const closeParenthesis = args.children.find((value: ParserRuleContext | TerminalNode) => {
    //         return value instanceof TerminalNode && value.symbol.text.localeCompare(')') === 0
    //     })

    //     // We need both TerminalNodes in order to proceed.
    //     if (!(openParenthesis instanceof TerminalNode)) {
    //         return
    //     }

    //     if (!(closeParenthesis instanceof TerminalNode)) {
    //         return
    //     }

    //     // Filter all matching signatures from the CommandSet
    //     const signatureLabel = SignatureInformation.resolveNamespace({
    //         label: context.getText().replace(this.tableIndexRegexp, '')
    //     })
    //     const matchingSignatures = this.commandSet.signatures.filter((signature: SignatureInformation) => {
    //         return SignatureInformation.resolveNamespace(signature).localeCompare(signatureLabel) === 0
    //     })

    //     // If we have matching signatures, then create an associated SignatureContext.
    //     if (matchingSignatures.length > 0) {
    //         const tokens = this.tokenStream.tokens.slice(
    //             openParenthesis.symbol.tokenIndex + 1,
    //             closeParenthesis.symbol.tokenIndex
    //         )

    //         const signatureContext = SignatureContext.create(
    //             openParenthesis.symbol,
    //             tokens,
    //             closeParenthesis.symbol,
    //             matchingSignatures,
    //             this.document.positionAt.bind(this.document)
    //         )

    //         // Register this SignatureContext
    //         this.registerSignatureContext(openParenthesis.symbol.stop + 1, signatureContext)
    //     }
    // }

    enterChunk(): void {
        this.timer.start()
    }

    exitChunk(): void {
        console.log(this.timer.createChunkLog(this.timer.stop()))

        if (this.exceptionTokenIndex) {
            this.symbols.push(new DocumentSymbol(
                this.tokenStream.tokens.slice(this.exceptionTokenIndex, this.tokenStream.tokens.length - 1)
            ))

            this.exceptionTokenIndex = undefined
        }
    }

    enterStatement(context: TspFastParser.StatementContext): void {
        if (process.env.TSPLANG_DEBUG.localeCompare('1') === 0) {
            if (!(context.parentCtx instanceof TspFastParser.ChunkContext)) {
                return
            }

            // Only time top-level statements
            this.timer.start()
        }
    }

    exitStatement(context: TspFastParser.StatementContext): void {
        // const range: Range = {
        //     end: {
        //         character: context.stop.column,
        //         line: context.stop.line - 1
        //     },
        //     start: {
        //         character: context.start.column,
        //         line: context.start.line - 1
        //     }
        // }
        // this.ranges.push(range)
        // this.statements.set(range, context)

        // let startIndex: number
        // if (context.exception) {
        //     if (this.enteredStatementException) {
        //         return
        //     }

        //     startIndex = ((context.exception as CorrectRecogException).startToken)
        //         ? (context.exception as CorrectRecogException).startToken.tokenIndex
        //         : undefined

        //     this.enteredStatementException = true
        // }
        // else {
        //     if (this.enteredStatementException) {
        //         this.enteredStatementException = false
        //     }

        //     startIndex = (context.start)
        //         ? context.start.tokenIndex
        //         : undefined
        // }

        // if (startIndex === undefined) {
        //     return
        // }

        // Only parse top-level statements
        if (!(context.parentCtx instanceof TspFastParser.ChunkContext)) {
            return
        }

        if (process.env.TSPLANG_DEBUG.localeCompare('1') === 0) {
            console.info(this.timer.createStatementLog(context.start.line, context.start.column, this.timer.stop()))
            const tree = TextTree.prettify(context.toStringTree(this.parser.ruleNames, context.parser), 2)
            console.info(tree)
        }

        if (context.exception) {
            const exceptionStartIndex = ((context.exception as CorrectRecogException).startToken)
                ? (context.exception as CorrectRecogException).startToken.tokenIndex
                : undefined

            if (exceptionStartIndex < (this.exceptionTokenIndex || Number.MAX_VALUE)) {
                this.exceptionTokenIndex = exceptionStartIndex
            }

            return
        }
        // If this is the first valid statement after an exception.
        else if (this.exceptionTokenIndex) {
            this.addSymbol(new DocumentSymbol(
                this.tokenStream.tokens.slice(this.exceptionTokenIndex, context.start.tokenIndex)
            ))

            this.exceptionTokenIndex = undefined
        }

        const startIndex = context.start.tokenIndex
        const stopIndex = context.stop.tokenIndex + 1

        this.addSymbol(new DocumentSymbol(
            this.tokenStream.tokens.slice(startIndex, stopIndex)
        ))
    }

    // getCompletionItems(cursor: Position): CompletionList | undefined {
    //     let offset = this.document.offsetAt(cursor)

    //     if (!this.exclusives.has(offset)) {
    //         offset = this.fuzzyOffsets.get(offset) || offset
    //     }

    //     // Get available exclusive completion items.
    //     const exclusiveContext = this.exclusives.get(offset)

    //     if (exclusiveContext !== undefined) {
    //         const exclusiveResult = new Array<CompletionItem>()

    //         if (exclusiveContext.text !== undefined) {
    //             // Only show those completions which partially match the text.
    //             for (const completion of exclusiveContext.completions) {
    //                 if (CompletionItem.namespaceMatch(ResolvedNamespace.create(exclusiveContext.text), completion)) {
    //                     exclusiveResult.push(completion)
    //                 }
    //             }
    //         }
    //         else {
    //             // Only add root completions from this exclusive context if no
    //             // text is available to filter on.
    //             exclusiveResult.push(...exclusiveContext.completions.filter((value: CompletionItem) => {
    //                 return value.data === undefined
    //             }))
    //         }

    //         if (exclusiveResult.length > 0) {
    //             return {
    //                 isIncomplete: false,
    //                 items: CompletionItem.addSortText(this._sortMap, ...exclusiveResult)
    //             }
    //         }
    //     }

    //     const rootCompletions = this.commandSet.completionDepthMap.get(0)

    //     if (rootCompletions === undefined || rootCompletions.length === 0) {
    //         return
    //     }

    //     return {
    //         isIncomplete: false,
    //         items: CompletionItem.addSortText(this._sortMap, ...rootCompletions)
    //     }
    // }

    // getSignatureHelp(cursor: Position): SignatureHelp | undefined {
    //     const offset = this.document.offsetAt(cursor)

    //     let signatureOffset = offset
    //     if (!this.signatures.has(offset)) {
    //         signatureOffset = this.fuzzySignatureOffsets.get(signatureOffset) || offset
    //     }

    //     const context = this.signatures.get(signatureOffset)

    //     if (context === undefined) {
    //         return
    //     }

    //     // Get the active parameter.
    //     let activeParameter = 0
    //     for (const parameter of context.parameters.values()) {
    //         const startOffset = this.document.offsetAt(parameter.range.start)
    //         const endOffset = this.document.offsetAt(parameter.range.end)

    //         // If the cursor position falls within the parameter range.
    //         if (offset >= startOffset && offset <= endOffset) {
    //             activeParameter = parameter.index
    //             break
    //         }
    //     }

    //     return {
    //         activeParameter,
    //         activeSignature: 0,
    //         signatures: context.signatures
    //     }
    // }

    // registerCompletionTokens(tokens: Array<Token>): void {
    //     if (tokens.length === 0) {
    //         return
    //     }

    //     const resolvedTokens = ResolvedNamespace.create(tokens)
    //     const depth = ResolvedNamespace.depth(resolvedTokens)

    //     // Filter on any available completions at our current namespace depth.
    //     const completions = (this.commandSet.completionDepthMap.get(depth) || []).filter(
    //         (value: CompletionItem) => CompletionItem.namespaceMatch(resolvedTokens, value)
    //     )

    //     // Register any matching completions.
    //     if (completions.length > 0) {
    //         const stopOffset = tokens[tokens.length - 1].stop + 1

    //         // If someone else hasn't already registered at this offset.
    //         if (!this.exclusives.has(stopOffset)) {
    //             this.registerExclusiveContext(stopOffset, {
    //                 completions,
    //                 text: TokenUtil.getString(...tokens)
    //             })
    //         }
    //     }
    // }

    // registerExclusiveContext(offset: number, context: ExclusiveContext): void {
    //     // Fuzz the exclusive offset range.
    //     this.fuzzyOffsets.fuzz(this.document.getText(), offset)

    //     // Add this new exclusive context.
    //     this.exclusives.set(offset, context)
    // }

    // registerExclusiveEntries(entries: Array<[number, ExclusiveContext]>): void {
    //     entries.forEach(([offset, context]: [number, ExclusiveContext]) => {
    //         this.registerExclusiveContext(offset, context)
    //     })
    // }

    // registerSignatureContext(offset: number, context: SignatureContext): void {
    //     // Fuzz the signature offset range.
    //     this.fuzzySignatureOffsets.fuzzRange(this.document, context.range)

    //     // Add this new signature context starting at the stop offset of the open
    //     // parenthesis.
    //     this.signatures.set(offset, context)

    //     // Fuzz parameters if they have completions and add them to the ExclusiveMap.
    //     const allContent = this.document.getText()
    //     context.parameters.forEach((value: ParameterContext, key: number) => {
    //         // Continue if we don't have any completions
    //         if (value.completions.length === 0) {
    //             return
    //         }

    //         let text: string | undefined = this.document.getText(value.range).trim()
    //         if (text.length === 0) {
    //             text = undefined
    //         }

    //         this.fuzzyOffsets.fuzz(allContent, key)
    //         this.exclusives.set(key, {
    //             text,
    //             completions: value.completions
    //         })
    //     })
    // }

    resolveCompletion(item: CompletionItem): CompletionItem {
        // We cannot provide completion documentation if none exist
        if (this.commandSet.completionDocs.size === 0) {
            return item
        }

        // Only service a given item if its "documentation" property is undefined.
        if (item.documentation === undefined) {
            const docCallback = this.commandSet.completionDocs.get(CompletionItem.resolveNamespace(item))

            // Nothing to do if no command documentation exists for this label.
            if (docCallback === undefined) {
                return item
            }

            item.documentation = docCallback(this.commandSet.specification)
        }

        return item
    }

    // update(changes: Array<TextDocumentContentChangeEvent>): void {
    //     for (const change of changes) {
    //         const text = TextDocument.applyEdits(
    //             this.document,
    //             [{
    //                 newText: change.text,
    //                 range: change.range
    //             }]
    //         )

    //         this.document = TextDocument.create(
    //             this.document.uri,
    //             this.document.languageId,
    //             this.document.version,
    //             text
    //         )
    //     }

    //     this.enteredStatementException = false
    //     this.exceptionTokenIndex = undefined
    //     this.errors = new Array()
    //     this.exclusives = new Map()
    //     this.fuzzyOffsets = new FuzzyOffsetMap()
    //     this.fuzzySignatureOffsets = new FuzzyOffsetMap()
    //     this.signatures = new Map()

    //     this.inputStream = new InputStream(this.document.getText())

    //     this.lexer.inputStream = this.inputStream
    //     this.lexer.reset()

    //     this.tokenStream.setTokenSource(this.lexer)
    //     this.tokenStream.reset()

    //     this.parser.setTokenStream(this.tokenStream)
    //     this.parser.reset()
    //     if (!this.parser.buildParseTrees) {
    //         this.parser.buildParseTrees = true
    //     }

    //     this._enterStack = new Array()
    //     this._stop = [-1, -1]
    //     this.parseTree = this.parser.chunk()
    // }

    private addSymbol(newSymbol: DocumentSymbol): void {
        const index = this.symbols.findIndex((value: DocumentSymbol) => value.within(newSymbol))

        if (index === -1) {
            this.symbols.push(newSymbol)
            this.symbols.sort((a: DocumentSymbol, b: DocumentSymbol) => {
                return Range.compare(a.range, b.range)
            })
        }
        else {
            this.symbols[index].grow(newSymbol)
        }
    }
}

namespace TextTree {
    const ruleStartRegExp = new RegExp(/\([a-zA-Z]+/)
    const ruleEndRegExp = new RegExp(/.*\)$/)

    export function prettify(tree: string, indent: number, from?: string): string {
        return _(tree.split(' '), indent, from || '')
    }

    function _(items: Array<string>, indent: number, from: string, level: number = 1): string {
        const workingSet = new Array<string>(...items)
        let result = from
        let workingLevel = level
        let totalCloseParenIgnores = 0

        while (workingSet.length > 0) {
            let item = workingSet.shift()

            // If this item is the start of a rule.
            if (ruleStartRegExp.test(item)) {
                result = result + ' '.repeat(indent * workingLevel) + item + '\n'

                workingLevel ++
            }
            else {
                if (item.localeCompare('(') === 0) {
                    totalCloseParenIgnores++
                }

                result = result + ' '.repeat(indent * workingLevel) + item + '\n'
            }

            // Reduce the current level if this item ends a rule.
            if (ruleEndRegExp.test(item)) {
                // Trim irrelevant close parentheses from the item if it starts with a close parenthesis.
                if (item[0].localeCompare(')') === 0) {
                    item = item.slice(totalCloseParenIgnores)

                    totalCloseParenIgnores = 0
                }

                // Decrement level by total trailing close parentheses.
                const reversedCharacters = item.split('').reverse()
                for (const char of reversedCharacters) {
                    if (char.localeCompare(')') === 0) {
                        workingLevel--
                    }
                    else {
                        break
                    }
                }
            }
        }

        return result
    }
}
