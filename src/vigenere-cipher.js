const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(modification = true) {
    this.modification = modification;
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();
    const code = [];
    let count = 0;
    let messageElIndex;
    let keyElIndex;

    for (let i = 0; i < message.length; i++) { // a
      messageElIndex = this.alphabet.indexOf(message[i]); //0
      if (messageElIndex === -1) {
        code.push(message[i]);
        continue;
      }
      keyElIndex = this.alphabet.indexOf(key[count % key.length]);
      code.push(this.alphabet[(messageElIndex + keyElIndex) % 26]);
      count++;
    }

    return this.modification ? code.join('') : code.reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    [message, key] = [message.toUpperCase(), key.toUpperCase()];

    const code = [];
    let count = 0;
    let messageElIndex;
    let keyElIndex;

    for (let i = 0; i < message.length; i++) {
      messageElIndex = this.alphabet.indexOf(message[i]); //0
      if (messageElIndex === -1) {
        code.push(message[i]);
        continue;
      }
      keyElIndex = this.alphabet.indexOf(key[count % key.length]);
      code.push(this.alphabet[(messageElIndex - keyElIndex + 26) % 26]);
      count++;
    }
    return this.modification ? code.join('') : code.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
