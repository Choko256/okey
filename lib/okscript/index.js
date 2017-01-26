/**
 * OKScript parser
 * 
 * BNF grammar
 * 
 * ok-script ::= configuration-section
 *              CRLF
 *              declarative-section
 *              CRLF
 *              constraints-section
 * 
 * configuration-section ::=
 *              KEY ':' ( VALUE | RANGE ) CRLF
 * declarative-section ::=
 *              DECLARATION ':' ( 'lower' | 'separator' | 'upper' | 'digit' | 'random' ) CRLF
 * constraints-section ::=
 *              CONDITION ':' ( VALUE | ALGORITHM ) CRLF
 * 
 * KEY ::=
 *              'separator' | 'length' | 'excludes'
 * 
 * VALUE ::=
 *              INTEGER | STRING
 * 
 * RANGE ::=
 *              INTEGER '..' INTEGER
 * 
 * DECLARATION ::=
 *              '[' ['+'] INTEGER [ '-' INTEGER | RANGE ] ']'
 * 
 * CONDITION ::=
 *              '(' INTEGER | RANGE ')'
 * 
 * ALGORITHM ::=
 *              '{' ( 'sum' | 'mul' | 'sub' | 'asub' | 'div' | 'mod' ) ':' COMPUTATION '}'
 * 
 * COMPUTATION ::=
 *              'mod(' INTEGER ')=' INTEGER |
 *              INTEGER
 *              'lt' ['e'] '(' COMPUTATION | INTEGER ')' |
 *              'gt' ['e'] '(' COMPUTATION | INTEGER ')' |
 *              'sum(' INTEGER ')=' INTEGER |
 *              'sub(' INTEGER ')=' INTEGER |
 *              'mul(' INTEGER ')=' INTEGER
 * 
 * CRLF ::=     '\r\n'
 */


