const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const arrFromEmail = Array.from(email).reverse();
  const result = [];

  for (let el of arrFromEmail) {
    if (el === '@') break;

    result.push(el)
  }

  return result.reverse().join('');
}

module.exports = {
  getEmailDomain
};
