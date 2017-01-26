const UpperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const LowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'
const Digits = '0123456789'

const Dictionary = {
    UpperAlphabet: [ '^' ],
    LowerAlphabet: [ '@' ],
    Digits: [ '#' ]
}

const Promise = require('bluebird')
const Chalk = require('chalk')
const Util = require('./util')

module.exports = {
    generateWithPattern(pattern, count, verbose = false) {
        return new Promise((resolve, reject) => {
            let generated = []
            let ln = pattern.length
            for (let j = 0; j < count; j++) {
                let _key = ''
                for (let i = 0; i < ln; i++) {
                    let selection = null
                    if (Dictionary.UpperAlphabet.indexOf(pattern[i]) !== -1) {
                        selection = UpperAlphabet
                    } else if (Dictionary.LowerAlphabet.indexOf(pattern[i]) !== -1) {
                        selection = LowerAlphabet
                    } else if (Dictionary.Digits.indexOf(pattern[i]) !== -1) {
                        selection = Digits
                    }
                    
                    if (selection !== null) {
                        _key += Util.arrandom(selection)
                    } else {
                        _key += pattern[i]
                    }
                }
                if (verbose) {
                    console.log(`${Chalk.cyan.bold('generator')}: generated key: ${Chalk.magenta.bold(_key)}`)
                }
                generated.push(_key)
            }
            resolve(generated)
        })
    },
    generateWithScript(script, count, verbose = false) {
    }
}