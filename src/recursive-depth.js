const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr) {
        let depth = 1;

        arr.forEach(el => {
            if (Array.isArray(el)) {
                depth = Math.max(depth, this.calculateDepth(el) + 1) // + 1 bc if we are there its +1 array
            }
        })
        return depth;
    }
}


module.exports = {
    DepthCalculator
};
