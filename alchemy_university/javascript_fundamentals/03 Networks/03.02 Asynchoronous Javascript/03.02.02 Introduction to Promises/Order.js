// example of using a promise for asynchronous callback.
// the function call to makeFood is stored as a a promise variable.
// the promise uses .then to execute a callback function once makeFood is completed.
// once stored as a variable, the promise can be used elsewhere when it is ready.
// this can help avoid excessive nesting making code more manageable.

const { makeFood } = require('./Kitchen');

class Order {
    constructor() {
        this.isReady = false;
    }
    request(food) {
        const promise = makeFood(food);
        // arrow syntax used in the callback function to preserve the context of this
        promise.then(() => {
            this.isReady = true;
        });
        // catches and stores any error encountered in the order
        promise.catch((err) => {
            this.error = err;
        });
    }
}

module.exports = Order;