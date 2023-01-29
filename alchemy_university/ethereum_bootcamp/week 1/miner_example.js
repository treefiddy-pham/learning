const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    // TODO: add transaction to mempool
    mempool.push(transaction);    
}

function mine() {
    
    // creates a new block with property id that is the height of the blocks stack prior to mining
    let new_block = {
        'id': blocks.length,
        'transactions':[],
        nonce: 0
    };
    // calculates the hash of the new block;
    let hash = SHA256(JSON.stringify(new_block));
    // increment nonce and recalculate hash until target difficulty is met
    while ( BigInt(`0x${hash}`) > TARGET_DIFFICULTY) {
        new_block.nonce++;
        hash = SHA256(JSON.stringify(new_block));
    } 
    // adds the valid hash to the block
    new_block.hash = hash;

    // determine number of transactions to take from mempool.
    // assumes will always want to get as many as possible.
    txCount = mempool.length <= MAX_TRANSACTIONS ? mempool.length : MAX_TRANSACTIONS;
    for(let i = 0; i < txCount; i++) {
        new_block.transactions.push(mempool.pop());
    }

    // adds the new block to the top of the blocks
    blocks.push(new_block);
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
};