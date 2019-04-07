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
// tslint:disable:no-implicit-dependencies no-unused-expression
import { expect } from 'chai'
// tslint:disable-next-line:no-import-side-effect
import 'mocha'
// tslint:enable:no-implicit-dependencies
import { CompletionItemKind } from 'vscode-languageserver'

import { SuggestionSortKind, TsplangSettings } from '../../settings'

describe('Settings', () => {
    describe('TsplangSettings', () => {
        const defaultSettings: TsplangSettings = {
            debug: {
                open: {
                    // tslint:disable-next-line: no-null-keyword
                    documentInitializationDelay: null
                },
                outline: false,
                print: {
                    documentChangeEvents: false,
                    rootStatementParseTime: false,
                    rootStatementParseTree: false
                }
            },
            outline: {
                showInstrumentSettings: false
            },
            suggestions: {
                enumerationOrder: SuggestionSortKind.INLINE
            }
        }
        const defaultSortMap = new Map<CompletionItemKind, SuggestionSortKind>([
            [CompletionItemKind.EnumMember, defaultSettings.suggestions.enumerationOrder]
        ])

        describe('.defaults()', () => {
            it('returns default settings', () => {
                expect(TsplangSettings.defaults()).to.deep.equal(defaultSettings)
            })
        })

        describe('.sortMap()', () => {
            const testCases: Array<[TsplangSettings, Map<CompletionItemKind, SuggestionSortKind>]> = [
                [
                    {
                        debug: {
                            open: {
                                // tslint:disable-next-line: no-null-keyword
                                documentInitializationDelay: null
                            },
                            outline: false,
                            print: {
                                documentChangeEvents: false,
                                rootStatementParseTime: false,
                                rootStatementParseTree: false
                            }
                        },
                        outline: {
                            showInstrumentSettings: false
                        },
                        suggestions: {
                            enumerationOrder: SuggestionSortKind.INLINE
                        }
                    },
                    new Map<CompletionItemKind, SuggestionSortKind>([
                        [CompletionItemKind.EnumMember, SuggestionSortKind.BOTTOM]
                    ])
                ]
            ]

            it('returns a default sort map given default settings', () => {
                expect(TsplangSettings.sortMap(defaultSettings)).to.deep.equal(defaultSortMap)
            })

            testCases.forEach((
                [given, expected]: [TsplangSettings, Map<CompletionItemKind, SuggestionSortKind>],
                index: number
            ) => {
                it('returns the expected sort map for the given settings', () => {
                    expect(
                        TsplangSettings.sortMap(given),
                        `failed testcase #${index}`
                    ).to.deep.equal(expected)
                })
            })
        })
    })
})
