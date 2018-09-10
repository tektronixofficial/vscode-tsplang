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

import { CompletionItem, CompletionItemKind, MarkupKind } from 'vscode-languageserver'

import { ApiSpec, CommandSetInterface, InstrumentSpec } from '..'

import { resolveCompletionNamespace } from '.'

const smuCompletions: Array<CompletionItem> = [
    {
        kind: CompletionItemKind.Module,
        label: 'smu'
    },
    {
        data: ['smu'],
        documentation: {
            kind: MarkupKind.Markdown,
            value: '```lua\nfunction reset()\n```\n\
\n\
Turn off instrument output and reset smu. commands to their default values.'
        },
        kind: CompletionItemKind.Function,
        label: 'reset',
    },
]

export function getCommandSet(cmd: ApiSpec, spec: InstrumentSpec): CommandSetInterface {
    const resultCompletions: Array<CompletionItem> = new Array()

    const cmds: Array<ApiSpec> = new Array({ label: cmd.label })
    if (cmd.children !== undefined) {
        cmd.children.forEach((child: ApiSpec) => { cmds.push(child) })
    }

    cmds.forEach((cmdItem: ApiSpec) => {
        smuCompletions.forEach((completion: CompletionItem) => {
            if (cmdItem.label.localeCompare(resolveCompletionNamespace(completion)) === 0) {
                resultCompletions.push(completion)
            }
        })
    })

    return { completions: resultCompletions }
}
