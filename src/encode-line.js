const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = Array.from(str);
  let result = '';
  let counter = 1;

  for (let i = 0; i < arr.length; i++) {
    const currentLetter = arr[i];
    let nextLetter = arr[i + 1];

    if (currentLetter === nextLetter) {
      counter++;
    } else {
      if (counter === 1) {
        result += currentLetter;
      } else {
        result += counter + currentLetter;
        counter = 1;
      }
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
