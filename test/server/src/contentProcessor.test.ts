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
// tslint:disable:no-implicit-dependencies no-magic-numbers prefer-function-over-method
import { assert } from 'chai'
import { suite, test } from 'mocha-typescript'

import { doubleQuotes, doubleSquareBrackets, getOffsetOfUnmatched, parentheses, singleQuotes } from '../../../server/src/contentProcessor'

@suite class ContentProcessorTest {
    @test('doubleQuotes.close')
    doubleQuotesClose(): void {
        assert(
            doubleQuotes.close(false).localeCompare('"') === 0,
            'doubleQuotes.close(reverse: false) does not return "'
        )

        assert(
            doubleQuotes.close(true).localeCompare('"') === 0,
            'doubleQuotes.close(reverse: true) does not return "'
        )
    }

    @test('doubleQuotes.open')
    doubleQuotesOpen(): void {
        assert(
            doubleQuotes.open(false).localeCompare('"') === 0,
            'doubleQuotes.open(reverse: false) does not return "'
        )

        assert(
            doubleQuotes.open(true).localeCompare('"') === 0,
            'doubleQuotes.open(reverse: true) does not return "'
        )
    }

    @test('doubleSquareBrackets.close')
    doubleSquareBracketsClose(): void {
        assert(
            doubleSquareBrackets.close(false).localeCompare(']]') === 0,
            'doubleSquareBrackets.close(reverse: false) does not return ]]'
        )

        assert(
            doubleSquareBrackets.close(true).localeCompare('[[') === 0,
            'doubleSquareBrackets.close(reverse: true) does not return [['
        )
    }

    @test('doubleSquareBrackets.open')
    doubleSquareBracketsOpen(): void {
        assert(
            doubleSquareBrackets.open(false).localeCompare('[[') === 0,
            'doubleSquareBrackets.open(reverse: false) does not return [['
        )

        assert(
            doubleSquareBrackets.open(true).localeCompare(']]') === 0,
            'doubleSquareBrackets.open(reverse: true) does not return ]]'
        )
    }

    @test('getOffsetOfUnmatched Parenthesis')
    getOffsetOfUnmatchedParenthesis(): void {
        let testString = ''
        let expectedOffset: number | undefined
        let actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            false
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        testString = ')'
        expectedOffset = 0
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            false
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        testString = '1)'
        expectedOffset = 1
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            false
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        testString = '3.14159)'
        expectedOffset = 7
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            false
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        testString = "')')"
        expectedOffset = 3
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            false
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        // '\')')
        testString = "'\\')')"
        expectedOffset = 5
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            false
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        testString = '")")'
        expectedOffset = 3
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            false
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        // "\")")
        testString = '"\\")")'
        expectedOffset = 5
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            false
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        testString = '[[)]])'
        expectedOffset = 5
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            false
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        testString = '[[] ])]])'
        expectedOffset = 8
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            false
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        // '\')', "\")", [[] ])]])
        testString = '\'\\\')\', "\\")", [[] ])]])'
        expectedOffset = 22
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            false
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        testString = '5, math.abs(-3.14159))'
        expectedOffset = 21
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            false
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        testString = '((((((((((())))))))))))'
        expectedOffset = 22
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            false
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        testString = '((((((((((()))))))))))),)'
        expectedOffset = 22
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            false
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        // a('\')', b("\")", c([[] ])]]))))
        testString = 'a(\'\\\')\', b("\\")", c([[] ])]]))))'
        expectedOffset = 31
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            false
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        // a('(\'', b("(\"", c([[(] ] ]]))))
        testString = 'a(\'(\\\'\', b("(\\"", c([[(] ] ]]))))'
        expectedOffset = 32
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            false
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        // a('(\')', b("(\")", c([[(] ])]]))))
        testString = 'a(\'(\\\')\', b("(\\")", c([[(] ])]]))))'
        expectedOffset = 34
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            false
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )
    }

    @test('getOffsetOfUnmatched Parenthesis Reverse')
    getOffsetOfUnmatchedParenthesisReverse(): void {
        let testString = ''
        let expectedOffset: number | undefined
        let actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            true
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        testString = 'a.b('
        expectedOffset = 3
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            true
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        testString = 'a.b(1'
        expectedOffset = 3
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            true
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        testString = 'a.b(3.14159'
        expectedOffset = 3
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            true
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        testString = "a.b('('"
        expectedOffset = 3
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            true
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        // a.b('(\''
        testString = "a.b('(\\''"
        expectedOffset = 3
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            true
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        testString = 'a.b("("'
        expectedOffset = 3
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            true
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        // a.b("(\""
        testString = 'a.b("(\\""'
        expectedOffset = 3
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            true
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        testString = 'a.b([[(]]'
        expectedOffset = 3
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            true
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        testString = 'a.b([[(] ] ]]'
        expectedOffset = 3
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            true
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        // a.b('(\'', "(\"", [[(] ] ]]
        testString = 'a.b(\'(\\\'\', "(\\"", [[(] ] ]]'
        expectedOffset = 3
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            true
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        testString = 'a.b(5, math.abs(-3.14159)'
        expectedOffset = 3
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            true
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        testString = '(((((((((((()))))))))))'
        expectedOffset = 0
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            true
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        testString = '(,(((((((((((()))))))))))'
        expectedOffset = 2
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            true
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        // a.b(c('(\'', d("(\"", e([[(] ] ]])))
        testString = 'a.b(c(\'(\\\'\', d("(\\"", e([[(] ] ]])))'
        expectedOffset = 3
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            true
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        // a.b(c('\')', d("\")", e([[(] ] ]])))
        testString = 'a.b(c(\'\\\')\', d("\\")", e([[] ])]])))'
        expectedOffset = 3
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            true
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )

        // a.b(c('(\')', d("(\")", e([[(] ])]])))
        testString = 'a.b(c(\'(\\\')\', d("(\\")", e([[(] ])]])))'
        expectedOffset = 3
        actualOffset = getOffsetOfUnmatched(
            testString,
            parentheses,
            true
        )
        assert(
            actualOffset === expectedOffset,
            'Faled to return offset "' + expectedOffset + '" for input string "' + testString + '"'
        )
    }

    @test('parentheses.close')
    parenthesesClose(): void {
        assert(
            parentheses.close(false).localeCompare(')') === 0,
            'parentheses.close(reverse: false) does not return )'
        )

        assert(
            parentheses.close(true).localeCompare('(') === 0,
            'parentheses.close(reverse: true) does not return ('
        )
    }

    @test('parentheses.open')
    parenthesesOpen(): void {
        assert(
            parentheses.open(false).localeCompare('(') === 0,
            'parentheses.open(reverse: false) does not return ('
        )

        assert(
            parentheses.open(true).localeCompare(')') === 0,
            'parentheses.open(reverse: true) does not return )'
        )
    }

    @test('singleQuotes.close')
    singleQuotesClose(): void {
        assert(
            singleQuotes.close(false).localeCompare("'") === 0,
            "singleQuotes.close(reverse: false) does not return '"
        )

        assert(
            singleQuotes.close(true).localeCompare("'") === 0,
            "singleQuotes.close(reverse: true) does not return '"
        )
    }

    @test('singleQuotes.open')
    singleQuotesOpen(): void {
        assert(
            singleQuotes.open(false).localeCompare("'") === 0,
            "singleQuotes.open(reverse: false) does not return '"
        )

        assert(
            singleQuotes.open(true).localeCompare("'") === 0,
            "singleQuotes.open(reverse: true) does not return '"
        )
    }
}
