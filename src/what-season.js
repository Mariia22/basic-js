const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(data) {
  if (!data) return 'Unable to determine the time of year!';
  try {
    data.getTime()
    switch (data.getMonth()) {
      case 0: return 'winter';
      case 1: return 'winter';
      case 2: return 'spring';
      case 3: return 'spring';
      case 4: return 'spring';
      case 5: return 'summer';
      case 6: return 'summer';
      case 7: return 'summer';
      case 8: return 'fall';
      case 9: return 'fall';
      case 10: return 'fall';
      case 11: return 'winter';
      default: return 'Unable to determine the time of year!';
    }
  }
  catch (error) {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
//npm run test -- test/what-season.test.js