const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  return domains.reduce((acc, item) => {
    item
      .split('.')
      .reverse()
      .map(elem => '.' + elem)
      .forEach((item, index, array) => {
        let DNS = array.slice(0, index + 1).join('')
        acc[DNS] ? acc[DNS] += 1 : acc[DNS] = 1
      })
    return acc
  }, {})
}

module.exports = {
  getDNSStats
};
//npm run test -- test/dns-stats.test.js