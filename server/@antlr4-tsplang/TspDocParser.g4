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
parser grammar TspDocParser;

options { tokenVocab=TspDocLexer; }

docstring
    : OPEN docblock CLOSE;

docblock
    : ( docDeprecated
        | docDescription
        | docParameter
        | docReturns
        | docReadonly
        | docWriteonly
        | docType
        | docTypedef
        | docField
        | docIndex
        | docSee
        | docTsplink
        | docFirmware
        | docVersion
        | docContent)*
    ;

docDeprecated
    : DEPRECATED_TAG docContent?;

docDescription
    : DESCRIPTION_TAG docContent;

docContent
    : ( link
        | ~( DEPRECATED_TAG
            | DESCRIPTION_TAG
            | FIELD_TAG
            | FIRMWARE_TAG
            | INDEX_TAG
            | PARAM_TAG
            | RETURNS_TAG
            | READONLY_TAG
            | SEE_TAG
            | TSPLINK_TAG
            | TSPV1_TAG
            | TSPV2_TAG
            | TYPE_TAG
            | TYPEDEF_TAG
            | V1_TAG
            | V2_TAG
            | WRITEONLY_TAG
            | CLOSE )
        )+
    ;

link
    : LINK_TAG_START LINK_TAG_TARGET LINK_TAG_DISPLAY? LINK_TAG_END;

docParameter
    : PARAM_TAG typeDeclaration? nameDeclaration docContent?;

typeDeclaration
    : CURLY_OPEN typeEntry CURLY_CLOSE;

typeEntry
    : type
    | typeUnion
    ;

typeUnion
    : type (PIPE type)+ PIPE?;

type
    : NIL       # NilType
    | BOOLEAN   # BooleanType
    | NUMBER    # NumberType
    | STRING    # StringType
    | FUNCTION (PAREN_OPEN typeList? PAREN_CLOSE RETURN_ARROW typeReturnEntry)? # FunctionType
    | USERDATA  # UserdataType
    | THREAD    # ThreadType
    | TABLE     # TableType
    | NAMESPACE # NamespaceType
    | ANY       # AnyType
    | NAME      # NameType
    ;

typeList
    : type (COMMA type)* COMMA?;

typeReturnEntry
    : (type COMMA)* typeUnion COMMA .*? {this.notifyErrorListeners("Type lists cannot contain type unions");}
    | typeUnion
    | typeList
    ;

// end typeDeclaration

nameDeclaration
    : NAME                                              # NameRequired
    | SQUARE_OPEN NAME EQUALS nameValue SQUARE_CLOSE    # NameOptional
    ;

nameValue
    : NIL
    | TRUE | FALSE
    | SIGN? num
    | str
    | NAME
    ;

num
    : INT | HEX | FLOAT;

str
    : NORMALSTRING | CHARSTRING;

// end nameDeclaration

// end docParameter

docReturns
    : RETURNS_TAG (CURLY_OPEN typeReturnEntry CURLY_CLOSE)? docContent?;

docReadonly
    : READONLY_TAG docContent?;

docWriteonly
    : WRITEONLY_TAG docContent?;

docType
    : TYPE_TAG typeDeclaration docContent?;

docTypedef
    : TYPEDEF_TAG CURLY_OPEN (
        typedefTypeUnion
        | FUNCTION
        | TABLE
    ) CURLY_CLOSE NAME docContent?
    | TYPEDEF_TAG CURLY_OPEN FUNCTION PAREN_OPEN typeList? PAREN_CLOSE (RETURN_ARROW typeReturnEntry)? CURLY_CLOSE NAME docContent?
        {this.notifyErrorListeners("Typedefs cannot contain function signatures");}
    ;

typedefTypeUnion
    : (type | typedefTypeUnionValue) (PIPE (type | typedefTypeUnionValue))+ PIPE?;

typedefTypeUnionValue
    : TRUE | FALSE
    | SIGN? num
    | str
    ;

// end docTypedef

docField
    : FIELD_TAG typeDeclaration? nameDeclaration docContent?;

docIndex
    : INDEX_TAG typeDeclaration docContent?;

docSee
    : SEE_TAG seeTarget docContent?;

seeTarget
@init {const startingIndex = this.currentToken.tokenIndex;}
    // Indentation is tabs to match generated code style.
    : NAME {
		// Indirectly check for whitespace between NAME and the next token.
		if (this.currentToken.tokenIndex - startingIndex === 1) {
			// Throw an error if there was no whitespace.
			this.notifyErrorListeners("invalid see target");
		}}
    | NAMESPACE
    | link
    ;

// end docSee

docTsplink
    : TSPLINK_TAG docContent?;

docFirmware
    : FIRMWARE_TAG firmwareEntry (COMMA firmwareEntry)* COMMA?;

firmwareEntry
    : (GT | LTE | EQUALS EQUALS) FIRMWARE;

docVersion
    : TSPV1_TAG (V2_TAG (NAME | NAMESPACE))?    # Version1
    | TSPV2_TAG (V1_TAG (NAME | NAMESPACE))?    # Version2
    ;
