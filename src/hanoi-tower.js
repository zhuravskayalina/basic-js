const {NotImplementedError} = require('../extensions/index.js');
const {min} = require("mocha/lib/reporters");

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
    //минимальное число ходов = 2n − 1, где n — число дисков
    const turns = 2 ** disksNumber - 1;
    const seconds = Math.floor(turns * 3600 / turnsSpeed);
    const obj = {turns, seconds};
    return obj;

}

module.exports = {
    calculateHanoi
};
