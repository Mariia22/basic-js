const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('')
  let count = 0
  let result = []
  for(let i=0; i<arr.length; i++){
    if(arr[i+1] === arr[i]){
      count++
    }
    else{
      if(count>0){
      count++
      result.push(count)
      result.push(arr[i])
      }
      else{ result.push(arr[i])}
      count = 0
     
    }
  }
   return result.join('')

}

module.exports = {
  encodeLine
};
//npm run test -- test/encode-line.test.js