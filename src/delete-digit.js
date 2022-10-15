const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    const arr = n.toString().split('');
    const numbersArray = [];
    for (let i = 0; i < arr.length; i++) {
        const originalArray = n.toString().split('');
        originalArray.splice(i, 1);
        numbersArray.push(+(originalArray.join('')));
    }
    return Math.max(...numbersArray);
}

module.exports = {
    deleteDigit
};
