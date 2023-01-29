const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
    let result = "-1";
    // creates a table of hashes from the predefined colors.
    // largely unnecessary as hash calculation and comparison can be done inside loop
    const table = COLORS.map( x => sha256(utf8ToBytes(x)));
    // loops through array and compares hashes
    for( let i=0; i < table.length; i++) {
        if(toHex(table[i]) === toHex(hash)) {
            // corresponding color where hash matched
            result = COLORS[i];
        }
    }
    return result;
}

module.exports = findColor;