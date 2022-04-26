const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(Array) {
  if (Array.length === 0) return 0;
  let result = 0;
  const flatArray = Array.reduce((acc, item) => acc.concat(item), [])
  flatArray.forEach(item => item === '^^' ? result += 1 : result)
  return result;
}

module.exports = {
  countCats
};
