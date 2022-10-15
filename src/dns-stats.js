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
  const result = {};

  domains.forEach(domain => { //'code.yandex.ru'
    const arr = domain.split('.').map(el => `.${el}`);
    arr.reverse();

    for (let i = arr.length - 1; i >= 0; i--) {
      let dns = arr.slice(0, i + 1).join('');
      if (result[dns]) {
        result[dns]++
      } else {
        result[dns] = 1;
      }
    }
  })
  return result;
}

module.exports = {
  getDNSStats
};
