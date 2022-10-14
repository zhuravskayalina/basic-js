const {NotImplementedError} = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

//N0 = 15
//N = sampleActivity
//k = ln2 / half-life-period\
//t=ln(N0/N)/k

function dateSample(sampleActivity) {
    let time;
    if (typeof sampleActivity !== 'string'
        || isNaN(Number(sampleActivity))
        || sampleActivity <= 0
        || sampleActivity > MODERN_ACTIVITY) {
        return false;
    }  else {
        const speed = Math.LN2 / HALF_LIFE_PERIOD;
        time = Math.ceil(Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / speed);
    }
    return time;
}

module.exports = {
    dateSample
};
