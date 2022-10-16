const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */

function  isMAC48Address(n) {
  const arr = n.split('-');

  if (arr.length !== 6) return false;

  const letters = 'GHIGKLMNOPQRSTUVWXYZ'.split('');
  let counter = 0
  for (let el of arr) {

    if (el.length === 2)  {
      Array.from(el).forEach(subEl => {
        if (letters.includes(subEl.toUpperCase())) {
          counter++;
        }
      })
    }
  }

  return counter <= 0;
}

module.exports = {
  isMAC48Address
};
