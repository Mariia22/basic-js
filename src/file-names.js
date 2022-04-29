const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let result = []
  names.reduce((acc,item)=>{
    if(acc[item]){
      let newItem = `${item}(${acc[item]})`
      result.push(newItem)
      acc[item]+=1
      acc[newItem]?acc[newItem]+=1 : acc[newItem]=1
    }
    else{
      acc[item]=1
      result.push(item)
    }
    return acc
  },{})
  return result
}


module.exports = {
  renameFiles
};
//npm run test -- test/file-names.test.js