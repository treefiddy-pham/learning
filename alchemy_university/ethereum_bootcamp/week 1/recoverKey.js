const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

// retrieves the public key when the message, signature, and recovery bit are known.
async function recoverKey(message, signature, recoveryBit) {
    return secp.recoverPublicKey(hashMessage(message), signature, recoveryBit);
}

module.exports = recoverKey;