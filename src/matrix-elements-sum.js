const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = [];
  let result = 0;
  const sumOfFirsEl = matrix[0].reduce((a, b) => a + b);
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const currentEl = matrix[i][j];
      const elementBelow = matrix[i - 1][j];

      if (elementBelow !== 0) {
        sum.push(currentEl);
      }
    }
  }

  if (sum.length) {
    result =  [...sum].reduce((a, b) => a + b) + sumOfFirsEl;
  } else {
    result = sumOfFirsEl;
  }

  return result;
}

module.exports = {
  getMatrixElementsSum
};
