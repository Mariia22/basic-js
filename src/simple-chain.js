const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (arguments.length === 0) { this.chain.push(' ') }
    else if (value === null) { this.chain.push(null) }
    else { this.chain.push(value) }
    return this
  },
  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || position > (this.chain.length - 1)) {
      this.chain = []
      throw new Error("You can't remove incorrect link!")
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let result = ''
    this.chain.forEach((item, index) => {
      if (index === this.chain.length - 1) { result += `( ${item} )` }
      else { result += `( ${item} )~~` }
    })
    this.chain = []
    return result
  }
};

module.exports = {
  chainMaker
};
//npm run test -- test/simple-chain.test.js