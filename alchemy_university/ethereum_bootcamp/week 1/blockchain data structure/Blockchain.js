const Block = require('./Block');

class Blockchain {
    constructor() {
        //starts the chain with a genesis block
        this.chain = [ new Block("genesis block",0)];
    }

    // adds a new block to the chain
    addBlock (_newBlock) {
        // sets the previousHash to the hash of the last block before adding to chain
        _newBlock.previousHash = this.chain[this.chain.length -1].toHash();
        this.chain.push(_newBlock);
    }

    // returns true if the entire chain is valid
    isValid () {
        // defaults result to false
        let result = false;
        // set position to last block in chain
        let i = this.chain.length - 1;
        // decrements the position if previous hash matches previous block hash.
        // otherwise stop the loop
        while (i > 0) {
            if (this.chain[i].previousHash.toString() === this.chain[i-1].toHash().toString()) {
                i--;
            }
            else {
                i = -1;
            }
        }
        // if loop is successful entire way through, it should end at the genesis block
        //  and flip result to true
        if (i === 0 && this.chain[i].previousHash === 0 ) {
                result = true;
        }
        return result;         
    }
}

module.exports = Blockchain;