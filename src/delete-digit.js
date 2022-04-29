const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = n.toString()
  let result = []
  for (let i = 0; i < array.length; i++) {
    result.push(Number(array.slice(0, i) + array.slice(i + 1)))
  }
  return Math.max(...result)

}

module.exports = {
  deleteDigit
};
//npm run test -- test/delete-digit.test.js