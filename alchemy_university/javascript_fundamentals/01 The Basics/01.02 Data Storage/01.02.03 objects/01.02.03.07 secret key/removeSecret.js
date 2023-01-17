// find secret key inside object and set its value to undefined

function removeSecret(object) {
    object.secret = undefined;    
    /* can also be accomplished by delete command
        delete object.secret
    */
}

module.exports = removeSecret;