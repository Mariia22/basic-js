const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(array) {
  if (Array.isArray(array)) {
    const sortedArray = array.reduce((acc, item) => {
      if (typeof item === 'string') {
        return acc.concat(item.trim().toUpperCase())
      }
      return acc;
    }, [])
    return sortedArray.sort().reduce((acc, item) => acc + item[0], '')
  }
  else {
    return false;
  }

}

module.exports = {
  createDreamTeam
};
//npm run test -- test/dream-team.test.js
