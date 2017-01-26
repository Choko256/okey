/**
 * OKScript Lexer
 */

class OKScriptLexer {
    construct() {
        this.expressions = []
    }
    lex(word) {
        let p = 0
        let tokens = []
        while (p < word.length) {
            let match = null
            for (let token in this.expressions) {
                let { pattern, tag } = token
                let re = new RegExp(pattern)
                match = word.match(re)
                if (match) {
                    let text = match[0]
                    if (tag) {
                        tokens.push([ text, tag ])
                    }
                    break
                }
            }
            if (!match) {
                throw new Error(`Illegal character: ${word[p]}`)
            }
            p = match.end(0)
        }
        return tokens
    }
}
