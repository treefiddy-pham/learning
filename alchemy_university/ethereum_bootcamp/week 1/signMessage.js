const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require('./hashMessage');

const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

async function signMessage(msg) {
    result = [];
    // uses the secp sign function to create a signature and private key
    // third option contains parameter of recovered=true to return the recovery bit
    // in addition to the signature
    return await secp.sign(hashMessage(msg), PRIVATE_KEY,{"recovered":true});
}

module.exports = signMessage;