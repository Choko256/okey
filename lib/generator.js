const UpperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const LowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'
const Digits = '0123456789'

const Dictionary = {
    UpperAlphabet: [ '^' ],
    LowerAlphabet: [ '@' ],
    Digits: [ '#' ]
}

const Promise = require('bluebird')
const Util = require('./util')

module.exports = {
    generateWithPattern(pattern) {
        return new Promise((resolve, reject) => {
            let generated = ''
            let ln = pattern.length
            for (let i = 0; i < ln; i++) {
                let selection = ''
                if (Dictionary.UpperAlphabet.indexOf(pattern[i]) !== -1) {
                    selection = 'UpperAlphabet'
                } else if (Dictionary.LowerAlphabet.indexOf(pattern[i]) !== -1) {
                    selection = 'LowerAlphabet'
                } else if (Dictionary.Digits.indexOf(pattern[i]) !== -1) {
                    selection = 'Digits'
                }
                
                if (selection !== '') {
                    generated += Util.arrandom(Dictionary[selection])
                } else {
                    generated += pattern[i]
                }
            }
            resolve(generated)
        })
    },
    generateWithScript(script) {
    }
}