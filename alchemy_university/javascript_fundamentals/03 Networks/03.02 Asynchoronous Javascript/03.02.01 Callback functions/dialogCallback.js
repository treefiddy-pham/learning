/* example of invoking a callback function manually.
*  the callback function will not be executed until the close function is called.
*/

class Dialog {
    constructor() {
        // initializes array of callback functions when a new Dialog instance is created.
        this.callback = [];
    }

    onClose(callbackFunction) {
        // store the callback in array
        this.callback[this.callback.length] = callbackFunction();
    }

    close() {
        // invoke the callback
        this.onClose(function () {
    
        })
    }
}

module.exports = Dialog;