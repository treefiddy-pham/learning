const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

// takes in a message as a string and returns a keccak256 hash of the message
function hashMessage(message) {
    // the message has to be converted from utf-8 characters to a byte array before hashing.
    return keccak256(utf8ToBytes(message));
}

module.exports = hashMessage;