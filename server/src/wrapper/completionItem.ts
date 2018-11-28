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

// tslint:disable-next-line:no-require-imports
import escapeStringRegexp = require('escape-string-regexp')

import { CompletionItem, CompletionItemKind, MarkupKind } from 'vscode-languageserver'

import { InstrumentSpec } from '../instrument'

export interface CommandDocumentation {
    kind: MarkupKind
    toString(spec: InstrumentSpec): string
}

export interface CompletionItemData {
    domains: Array<string>
    types?: Array<InstrumentCompletionItem>
}

export interface InstrumentCompletionItem extends CompletionItem {
    allowBitwise?: boolean
    data?: CompletionItemData
    exclusive?: boolean
}
export namespace InstrumentCompletionItem {
    /**
     * Creates InstrumentCompletionItems of kind Module based on the given string.
     * @param label The label whose namespaces will become root completions items.
     * @param excludeLast Whether the last item of the namespace should be included in the results.
     * @returns An array of generated root namespaces or undefined if nothing could be generated.
     */
    export function createRootItems(
        label: string,
        excludeLast: boolean
    ): Array<InstrumentCompletionItem> | undefined {
        const namespaces = label.split('.')

        if (excludeLast) {
            // Remove the last element of the namespace.
            namespaces.pop()

            if (namespaces.length === 0) {
                return
            }
        }

        const result = new Array<InstrumentCompletionItem>()

        for (const name of namespaces) {
            const last = result.pop()
            const current: InstrumentCompletionItem = {
                kind: CompletionItemKind.Module,
                label: name
            }

            if (last !== undefined) {
                const domains: Array<string> = [last.label]

                if (last.data !== undefined) {
                    domains.push(...last.data.domains)
                }

                current.data = { domains }

                result.push(last)
            }

            result.push(current)
        }

        return result
    }

    /**
     * Compare the labels and data.domains properties of two items to determine their equality.
     * @param a The first item.
     * @param b The second item.
     * @returns True if the two items match and false otherwise.
     */
    export function namespacesEqual(a: InstrumentCompletionItem, b: InstrumentCompletionItem): boolean {
        // Compare labels.
        if (a.label.localeCompare(b.label) !== 0) {
            return false
        }

        if (a.data === undefined) {
            // If neither have a data property, then this these two root completions are equal.
            if (b.data === undefined) {
                return true
            }

            // Both data properties should be defined.
            return false
        }

        // TypeScript demands the following
        if (b.data === undefined) {
            return false
        }

        // Both domains should be of equal length.
        if (a.data.domains.length !== b.data.domains.length) {
            return false
        }

        // Both domains should have the same domain items.
        for (let i = 0; i < a.data.domains.length; i++) {
            const aDomain = a.data.domains[i]
            if (aDomain === undefined || aDomain.localeCompare(b.data.domains[i]) !== 0) {
                return false
            }
        }

        return true
    }

    /**
     * Compare the given string to the label and data.domains properties of the completion item.
     * **Note:** empty strings match everything.
     * @param target The search string.
     * @param completion The InstrumentCompletionItem to attempt a match against.
     * @returns True if the search string matches and false otherwise.
     */
    export function namespaceMatch(target: string, completion: InstrumentCompletionItem): boolean {
        // If content is an empty string, then everything is a partial match
        if (target.localeCompare('') === 0) {
            return true
        }

        const completionData: Array<string> = (completion.data === undefined) ? [] : completion.data.domains

        let names: Array<string> = target.split('.')

        // Get the (possibly partial or empty) name requesting suggestions.
        // Array.pop returns undefined if the array is empty but String.split always returns an
        // array with at least 1 item, so disregard the undefined type.
        const lastName = names.pop() as string

        // Reverse the remaining names so we can more easily match against InstrumentCompletionItem.data.domains.
        names = names.reverse()

        // If the given completion's namespace length does not match our content's namespace length
        if (completionData.length !== names.length) {
            return false
        }

        // If the given completion has an identical namespace
        if (completionData.join('.').localeCompare(names.join('.')) === 0) {
            // If the last name is an empty string, then everything is a partial match
            if (lastName.localeCompare('') === 0) {
                return true
            }

            const labelRegexp = new RegExp('^' + escapeStringRegexp(lastName) + '.*$')

            const matches = completion.label.match(labelRegexp)

            if (matches === null) {
                return false
            }
            else {
                return true
            }
        }

        return false
    }
}