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
// tslint:disable:no-implicit-dependencies no-unused-expression
import { expect } from 'chai'
// tslint:disable-next-line:no-import-side-effect
import 'mocha'
// tslint:enable:no-implicit-dependencies

import { CommandSetInterface } from '../../../src/instrument'
import { SignatureInformation } from '../../../src/decorators'

import { expectSignatureFormat } from './helpers'

describe('Instrument Provider', () => {
    describe('scriptVar', () => {
        let providerModule: CommandSetInterface

        before(() => {
            // tslint:disable-next-line:no-require-imports
            providerModule = require('../../../src/instrument/provider/scriptVar')
        })

        it('does not export "completionDocs"', () => {
            expect(providerModule).to.not.haveOwnProperty('completionDocs')
        })

        it('exports "completions"', () => {
            expect(providerModule).to.haveOwnProperty('completions')
        })

        it('exports "signatures"', () => {
            expect(providerModule).to.haveOwnProperty('signatures')
        })

        it('formats signatures', () => {
            if (providerModule.signatures === undefined) {
                return
            }

            providerModule.signatures.forEach((signature: SignatureInformation) => {
                expectSignatureFormat(signature)
            })
        })
    })
})