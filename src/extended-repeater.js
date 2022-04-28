const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let strArray = []
  let end = options.repeatTimes || 1
  let additionalEnd = options.additionRepeatTimes || 1
  for (let i = 1; i <= end; i++) {
    if (str===null){strArray.push('null')}
    else{strArray.push(str)}
    if (options.hasOwnProperty('addition')) {
      for (let i = 1; i <= additionalEnd; i++) {
        if(options.addition===null){strArray.push('null')}
        else {strArray.push(options.addition)}
        if (i !== additionalEnd) {
        options.additionSeparator ? strArray.push(options.additionSeparator) : strArray.push('|')}
      }
      
    }
    if (i !== end) {
      options.separator ? strArray.push(options.separator) : strArray.push('+')
    }
  }
  return strArray.join('')
}

module.exports = {
  repeater
};
//npm run test -- test/extended-repeater.test.js