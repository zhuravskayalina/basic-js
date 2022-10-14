const {NotImplementedError} = require('../extensions/index.js');
const {assert} = require("chai");

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
    chain: [],

    getLength() {
        return this.chain.length;
    },

    addLink(value = '') {
        const chainEl = `( ${value} )~~`;
        this.chain.push(chainEl);
        return this;
    },
    removeLink(position) {
        if (typeof position !== 'number' || position < 1 || position > this.chain.length || !Number.isInteger(position)) {
            this.chain.length = 0;
            throw new Error(`You can\'t remove incorrect link!`)
        }
        this.chain.splice(position - 1, 1);
        return this;
    },

    reverseChain() {
        if (this.chain.length !== 1) {
            this.chain.reverse();
        }
        return this;
    },

    finishChain() {
        const lastEl = this.chain[this.chain.length - 1].split('~~').join('');
        this.chain.pop();
        this.chain.push(lastEl);
        let result = this.chain.join('');
        this.chain.length = 0;
        return result;
    }
};

console.log(chainMaker.addLink(function () { })
    .addLink('2nd').addLink('3rd')
    .removeLink(2).reverseChain()
    .finishChain()) // '( 3rd )~~( function () { } )');


module.exports = {
    chainMaker
};
