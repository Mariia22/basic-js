const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 0
    if (!Array.isArray(arr)) {
      return count
    }
    for (let item of arr) {
      count = Math.max(count, this.calculateDepth(item))
    }
    return ++count
  }

}

module.exports = {
  DepthCalculator
};
//npm run test -- test/recursive-depth.test.js
