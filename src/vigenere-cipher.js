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
  constructor(type = true) {
    this.type = type
    this.codeA = 'A'.charCodeAt(0);
    this.alfabetCount = 26;
  }
  encrypt(message, key) {
    if (!message || !key) { throw new Error("Incorrect arguments!") }
    const result = [];
    [message, key] = [message, key].map((str) => str.toUpperCase())
    let i = 0
    for (let char of message) {
      const code = char.charCodeAt(0)

      if (code >= this.codeA && code <= 90) {
        const keyCode = (key[i++ % key.length].charCodeAt(0) - this.codeA) % this.alfabetCount;
        const charCode = code - this.codeA + keyCode;

        char = String.fromCharCode(charCode % this.alfabetCount + this.codeA);
      }
      result.push(char)
    }
    return this.type ? result.join('') : result.reverse().join('')
  }
  decrypt(message, key) {
    if (!message || !key) { throw new Error("Incorrect arguments!") }
    const result = [];
    [message, key] = [message, key].map((str) => str.toUpperCase())
    let i = 0
    for (let char of message) {
      const code = char.charCodeAt(0)

      if (code >= this.codeA && code <= 90) {
        const keyCode = (key[i++ % key.length].charCodeAt(0) - this.codeA) % this.alfabetCount;
        const charCode = code + this.codeA - keyCode;

        char = String.fromCharCode(charCode % this.alfabetCount + this.codeA);
      }
      result.push(char)
    }
    return this.type ? result.join('') : result.reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
//npm run test -- test/vigenere-cipher.test.js