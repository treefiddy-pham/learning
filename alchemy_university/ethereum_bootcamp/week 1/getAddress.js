const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

// gets the ethereum address of a given public key.
// the address is the last 20 bytes of the hash of the public key
function getAddress(publicKey) {
    // leading format byte is taken off public key before hashing.
    // then remove all but the last 20 bytes.
    return keccak256(publicKey.slice(1)).slice(-20);
}

module.exports = getAddress;