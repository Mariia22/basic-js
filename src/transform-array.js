const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) { throw new Error('\'arr\' parameter must be an instance of the Array!') }
  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';
  if (arr === [] || !(arr.includes(discardNext) || arr.includes(discardPrev) || arr.includes(doubleNext) || arr.includes(doublePrev))) { return arr }
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == discardNext) {
      if (i != arr.length - 1) {
        i++;
      }
    }

    else if (arr[i] == discardPrev) {
      if (i != 0 && arr[i - 2] != '--discard-next') {
        result.pop();
      }
    }

    else if (arr[i] == doubleNext) {
      if (i != arr.length - 1) {
        result.push(arr[i + 1])
      }
    }

    else if (arr[i] == doublePrev) {
      if (i != 0 && arr[i - 2] != '--discard-next') {
        result.push(arr[i - 1])
      }
    }

    else {
      result.push(arr[i])
    }
  }
  return result;
}

module.exports = {
  transform
};
//npm run test -- test/transform-array.test.js