const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');

    const copy = [...arr];
    const result = [];

    for (let i = 0; i < copy.length; i++) {
        const currentEl = copy[i];
        const prevElIndex = i - 1;
        const nextElIndex = i + 1;

        switch (currentEl) {
            case '--discard-next':
                if (copy[nextElIndex]) {
                    copy.splice(i, 2);
                }
                break;

            case '--discard-prev':
                if (copy[prevElIndex]) {
                    result.pop();
                }
                break;

            case '--double-next':
                if (copy[nextElIndex]) {
                    result.push(copy[nextElIndex]);
                }
                break;

            case '--double-prev':
                if (copy[prevElIndex]) {
                    result.push(copy[prevElIndex]);
                }
                break;
            default:
                result.push(currentEl)
        }
    }
    return result;
}


module.exports = {
    transform
};
