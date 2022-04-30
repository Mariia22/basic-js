const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(array) {
  const newArr = array.filter(item=>item !== -1).sort((a,b)=>a-b)
  console.log(newArr)
  let i = 0
  return array.map(item=>{
    if(item === -1){return item}
    else{
      let el = newArr[i]
      i+=1
      return el
    }
  })
}

module.exports = {
  sortByHeight
};
//npm run test -- test/sort-by-height.test.js