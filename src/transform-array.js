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
  if (!Array.isArray(arr)) { throw new Error("'arr' parameter must be an instance of the Array!") }
  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';
  if (!(arr.includes(discardNext) || arr.includes(discardPrev) || arr.includes(doubleNext) || arr.includes(doublePrev))) { console.log(arr); return arr }
  else {
    const newArr = [...arr]
    for (let i = 0; i <= newArr.length - 1; i++) {
      if (Array.isArray(newArr[i])) {
        transform(newArr[i])
      }
      else {
        if (newArr[i] === discardNext) {
          if ((newArr[i + 2] === doublePrev) || (newArr[i + 2] === discardPrev)) { newArr.splice(i, 3) }
          else if (i !== newArr.length - 1) { newArr.splice(i, 2) }
          else { newArr.splice(i, 1) }
        }
        else if (newArr[i] === discardPrev) {
          if (i !== 0) { newArr.splice(i - 1, 2) }
          else { newArr.splice(i, 1) }
        }
        else if (newArr[i] === doubleNext) {
          if (newArr[i + 2] === doublePrev) { newArr.splice(i, 3, newArr[i + 1], newArr[i + 1], newArr[i + 1]) }
          else if (newArr[i + 2] === discardPrev) { newArr.splice(i, 3, newArr[i + 1]) }
          else if (i !== newArr.length - 1) { newArr.splice(i, 2, newArr[i - 1]) }
          else { newArr.splice(i, 1) }

        }
        else if (newArr[i] === doublePrev) {
          if (i !== 0) { newArr.splice(i - 1, 2, newArr[i - 1]) }
          else { newArr.splice(i, 1) }
        }

      }
    }
    return newArr
    /*return newArr.map((item, index, array) => {
      if (Array.isArray(item)) {
        const arrItem = transform(item)
      }
      else {
        if (item === discardNext) {
          if (index !== array.length - 1) { newArr.splice(index, 2) }
          else { newArr.splice(index, 1) }
        }
        else if (item === discardPrev) {
          if (index !== 0) { newArr.splice(index - 1, 2) }
          else { newArr.splice(index, 1) }


        }
        else if (item === doubleNext) {
          if (index !== array.length - 1) { newArr.splice(index, 2, array[index - 1]) }
          else { newArr.splice(index, 1) }

        }
        else if (item === doublePrev) {
          if (index !== 0) { newArr.splice(index - 1, 2, array[index - 1]) }
          else { newArr.splice(index, 1) }

        }
      }
    })*/
  }
}

module.exports = {
  transform
};
//npm run test -- test/transform-array.test.js