const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let {repeatTimes = 0, separator = '+', addition, additionRepeatTimes = 0, additionSeparator = '|'} = options;
    str = typeof str === 'string' ? str : String(str);
    separator = typeof separator === 'string' ? separator : separator.toString();

    let resultArr = [];
    let result = '';

    if (options) {

        if (addition !== undefined) {
            addition = typeof addition === 'string' ? addition : String(addition);
            additionSeparator = typeof additionSeparator === 'string' ? additionSeparator : String(additionSeparator);

            let oneString = '';
            let additionStr = '';
            const additionArr = [addition];

            for (let i = 1; i < additionRepeatTimes; i++) {
                additionArr.push(addition);
            }

            additionStr = additionArr.join(additionSeparator);
            oneString = str + additionStr;
            if (repeatTimes) {
                for (let i = 0; i < repeatTimes; i++) {
                    resultArr.push(oneString);
                }
            } else {
                resultArr.push(oneString);
            }


            result = resultArr.join(separator);
        } else {
            {
                for (let i = 0; i < repeatTimes; i++) {
                    resultArr.push(str);
                }
                result = resultArr.join(separator);
            }
        }
    }
    return result;
}


console.log(repeater('STRING', {
    repeatTimes: 3,
    separator: '**',
    addition: 'PLUS',
    additionRepeatTimes: 3,
    additionSeparator: '00'
}));
// => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS')

module.exports = {
    repeater
};
