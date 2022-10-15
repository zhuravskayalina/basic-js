const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const [str1, str2] = [s1.split(''), s2.split('')];
  let count = 0;
  for (let el of str1) {
    if (str2.includes(el)) {
      count++;
      str2.splice(str2.indexOf(el), 1);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};

getCommonCharacterCount('aabcc', 'adcaa');