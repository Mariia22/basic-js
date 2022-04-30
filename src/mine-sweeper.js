const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let newMatrix = []
  for (let i = 0; i < matrix.length; i++) {
    let newString = []
    for (let j = 0; j < matrix[0].length; j++) {
      let count = 0
      if (typeof matrix[i - 1] !== 'undefined' && matrix[i - 1][j] === true) {
        count++
      }
      if (typeof matrix[i + 1] !== 'undefined' && matrix[i + 1][j] === true) {
        count++
      }
      if (typeof matrix[j + 1] !== 'undefined' && matrix[i][j + 1] === true) {
        count++
      }
      if (typeof matrix[j - 1] !== 'undefined' && matrix[i][j - 1] === true) {
        count++
      }
      if (typeof matrix[i - 1] !== 'undefined' && typeof matrix[j - 1] !== 'undefined' && matrix[i - 1][j - 1] === true) {
        count++
      }
      if (typeof matrix[i + 1] !== 'undefined' && typeof matrix[j - 1] !== 'undefined' && matrix[i + 1][j - 1] === true) {
        count++
      }
      if (typeof matrix[i - 1] !== 'undefined' && typeof matrix[j + 1] !== 'undefined' && matrix[i - 1][j + 1] === true) {
        count++
      }
      if (typeof matrix[i + 1] !== 'undefined' && typeof matrix[j + 1] !== 'undefined' && matrix[i + 1][j + 1] === true) {
        count++
      }
      newString.push(count)
    }
    newMatrix.push(newString)
  }

  return newMatrix;
}

module.exports = {
  minesweeper
};

//npm run test -- test/mine-sweeper.test.js