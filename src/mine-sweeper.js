const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  const sweeper = new Array(matrix.length).fill(0).map((el) => new Array(matrix[0].length).fill(0));

  for (let i = 0; i < matrix.length; i++) {

    for (let j = 0; j < matrix[i].length; j++) {
      const currentEl = matrix[i][j];

      if (currentEl) { // если currentEl === true
        if (sweeper[i - 1]) {
          if (sweeper[i - 1][j - 1] >= 0) sweeper[i - 1][j - 1]++; //если существует элемент вверху слева по диагонали
          if (sweeper[i - 1][j] >= 0) sweeper[i - 1][j]++; //если существует элемент сверху
          if (sweeper[i - 1][j + 1] >= 0) sweeper[i - 1][j + 1]++; //если существует элемент сверху справа по диагонали
        }

        if (sweeper[i]) {
          if (sweeper[i][j + 1] >= 0) sweeper[i][j + 1]++;//если существует элемент справа
          if (sweeper[i][j - 1] >= 0) sweeper[i][j - 1]++;// если существует элемент слева
        }

        if (sweeper[i + 1]) {
          if (sweeper[i + 1][j + 1] >= 0) sweeper[i + 1][j + 1]++; //если существует элемент справа внизу по диагонали
          if (sweeper[i + 1][j] >= 0) sweeper[i + 1][j]++; //если существует элемент снизу
          if (sweeper[i + 1][j - 1] >= 0) sweeper[i + 1][j - 1]++; //если существует элемент внизу слева по диагонали
        }
      }
    }
  }
  return sweeper;
}

module.exports = {
  minesweeper
};
