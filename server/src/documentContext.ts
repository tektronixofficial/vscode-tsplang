/*
 *  Copyright 2018 Tektronix Inc.
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

import { CommonTokenStream, InputStream, ParserRuleContext } from 'antlr4'
// tslint:disable-next-line:no-submodule-imports
import { ParseTreeWalker, TerminalNode } from 'antlr4/tree/Tree'
import { CompletionItem, CompletionItemKind } from 'vscode-languageserver'

import { TspLexer, TspListener, TspParser } from './tsp'

export class DocumentContext extends TspListener {
    readonly uri: string
    private content: string
    private globals: Map<string, CompletionItem>
    private lexer: TspLexer
    private parser: TspParser
    private parseTree: ParserRuleContext
    private scopeDepth: number

    constructor(uri: string, content: string) {
        super()

        this.uri = uri
        this.globals = new Map()
        this.scopeDepth = 0

        this.update(content)
    }

    enterBlock(context: TspParser.BlockContext): void {
        this.scopeDepth++
    }

    exitBlock(context: TspParser.BlockContext): void {
        this.scopeDepth--
    }

    exitStatement(context: TspParser.StatementContext): void {
        // Add global variable completions.
        const varlist = context.variableList()

        if (varlist === null) {
            return
        }

        const newGlobals = new Map<string, CompletionItem>()
        const variables = varlist.variable()
        variables.forEach((variable: TspParser.VariableContext): void => {
            const name = variable.NAME()

            if (name === null) {
                return
            }

            // If we have a prefix or suffix or index, then skip this variable
            if (variable.prefix() !== null || variable.suffix().length !== 0 || variable.index() !== null) {
                return
            }

            newGlobals.set(name.getText(), {
                kind: CompletionItemKind.Variable,
                label: name.getText()
            })
        })

        this.globals = new Map([...this.globals, ...newGlobals])
    }

    getCompletionItems(): Array<CompletionItem> {
        const result = new Array<CompletionItem>()
        result.push(...this.getGlobalCompletionItems())

        return result
    }

    update(content: string): void {
        this.content = content
        this.globals = new Map()

        this.lexer = new TspLexer(new InputStream(this.content))
        this.parser = new TspParser(new CommonTokenStream(this.lexer))
        this.parser.buildParseTrees = true

        this.parseTree = this.parser.chunk()
    }

    walk(): void {
        ParseTreeWalker.DEFAULT.walk(this, this.parseTree)
    }

    private getCompletionsFromContext = (context: ParserRuleContext): Array<CompletionItem> => {
        const result = new Array<CompletionItem>()

        const getCompletionsRecursive = (node: ParserRuleContext | TerminalNode): void => {
            if (node instanceof TerminalNode && node.symbol.type === TspLexer.NAME) {
                result.push({
                    kind: CompletionItemKind.Variable,
                    label: node.symbol.text
                })
            }

            for (let i = 0; i < node.getChildCount(); i++) {
                const child = node.getChild(i)

                if (child === null) {
                    continue
                }

                if (child instanceof TspParser.SuffixContext) {

                    continue
                }

                getCompletionsRecursive(child)
            }
        }
        getCompletionsRecursive(context)

        return result
    }

    private getGlobalCompletionItems(): Array<CompletionItem> {
        return Array.from(this.globals.values())
    }

    private getPrefixSuffixCompletions = (context: TspParser.VariableContext): Array<CompletionItem> => {
        const result = new Array<CompletionItem>()

        const prefix = context.prefix()
        if (prefix === null) {
            return []
        }

        const prefixName = prefix.NAME()
        if (prefixName === null) {
            return []
        }

        result.push({
            kind: CompletionItemKind.Module,
            label: prefixName.symbol.text
        })

        let i = -1
        const suffix = context.suffix()
        for (const suffixItem of suffix) {
            // Located at the start of the loop so it do not have to appear before every loop
            // control keyword.
            i++

            // result is guaranteed to have an item
            const lastItem = result.pop()

            if (lastItem === undefined) {
                break
            }

            // Create this suffix's namespace
            const data = new Array<string>(lastItem.label)
            if (lastItem.data !== undefined) {
                data.push(...lastItem.data)
            }

            const objectCall = suffixItem.objectCall()
            if (objectCall !== null) {
                const callName = objectCall.NAME()
                if (callName !== null) {
                    result.push(lastItem)
                    result.push({
                        data,
                        kind: CompletionItemKind.Function,
                        label: callName.symbol.text
                    })
                }
                else {
                    lastItem.kind = CompletionItemKind.Function
                    result.push(lastItem)
                }

                // Do not process any more suffixes/indices.
                break
            }

            result.push(lastItem)

            const index = suffixItem.index()
            if (index === null) {
                continue
            }

            const indexName = index.NAME()
            if (indexName === null) {
                continue
            }

            result.push({
                data,
                // If this is not the last suffix then it is a table.
                kind: (i !== (suffix.length - 1)) ?
                    CompletionItemKind.Module :
                    CompletionItemKind.Variable,
                label: indexName.symbol.text
            })
        }

        return result
    }
}
