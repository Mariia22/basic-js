const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const array1 = s1.split('').sort()
  const array2 = s2.split('').sort()
  const result = []
  let i = 0
  let j = 0
  while (i < array1.length) {
    if (array1[i] === array2[j]) {
      result.push(array1[i])
      i += 1
      j += 1
    }
    else if (array1[i] < array2[j]) {
      i += 1
    }
    else {
      j += 1
    }
  }
  return result.length
}

module.exports = {
  getCommonCharacterCount
};
//npm run test -- test/common-character-count.test.js
