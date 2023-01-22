/**
 * Runs a callback function immediately
 * @param {function} callbackFunction
 */
function runCallback(callbackFunction) {
    // setTimeout takes a function as parameter and runs it after specified time in milliseconds
    setTimeout(function () {
        callbackFunction();
    }, 1000);

}

module.exports = runCallback;