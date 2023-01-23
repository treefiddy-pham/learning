// status to determine if promise is already resolved or rejected
const STATUS = {
    PENDING: 0,
    RESOLVED: 1,
    REJECTED: -1
}

class Pact {

    constructor(executor) {
        // arrays to hold multiple then and catch functions
        this.onResolve = [];
        this.onReject = [];
        // initializes status to pending
        this.status = STATUS.PENDING;

        // function that executes on upon promise resolution
        this.resolve = (value) => {
            //sets status to resolved
            this.status  = STATUS.RESOLVED;
            // stores the value returned by promise
            this.storedValue = value;
            // calls the then functions that were passed to .then
            try {
                this.onResolve.forEach(nextFunction => {
                    // runs the next function in the array of pending .then functions and saves the result
                    const result = nextFunction(this.storedValue);
                    // if the .then function returns a promise, chain the result to the next .then function.
                    // otherwise, overwrite the promise's value to the latest returned value.
                    // without this block, then functions cannot be chained.
                    if(result instanceof Pact) {
                        result.then(this.resolve);
                    }
                    else {
                        this.storedValue = result;
                    }
                });
            }
            catch (error) {
                // clears out the pending then functions to prevent continued execution on bad values.
                this.onResolve = [];
                // runs the reject functions.
                this.reject(error);
            }
        }
        this.reject = (value) => {
            // updates status to rejected            
            this.status = STATUS.REJECTED;
            // runs multiple catch functions
            // catch function assumes value does not need to be chained.
            this.onReject.forEach((nextFunction) => {
                nextFunction(value);
            });
        }
        
        // immediate call executor function with resolve and rejct
        executor(this.resolve, this.reject);
    }

    // PUBLICLY AVAILABLE METHODS
    // if status is already rejected then immediately run catch functions,
    // otherwise add catch function to onReject array.
    catch(catchfn) {
        if ( this.status == STATUS.REJECTED) {
            catchfn(this.storedValue);
        }
        else {
            this.onReject.push(catchfn);
        }
    }

    // if status is already resolved then immediately run then function,
    // otherwise add then function to onResolve array.
    then(thenfn) {
        // stores the then functions to the object
        if (this.status == STATUS.RESOLVED) {
            thenfn(this.storedValue);
        }
        else if (this.status == STATUS.PENDING) {
            this.onResolve.push(thenfn);
        }
        // return the promise when called to allow chaining
        return this;
    }
}

module.exports = Pact;