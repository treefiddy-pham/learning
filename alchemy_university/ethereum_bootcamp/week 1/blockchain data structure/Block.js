// Block class

const SHA256 = require('crypto-js/sha256');

class Block {
    
    constructor(_data) {
        this.data = _data;
    }

    // returns the hash of the block contents
    toHash() {
        return SHA256(this.data).toString(); // a hash!
    }
}

module.exports = Block;
