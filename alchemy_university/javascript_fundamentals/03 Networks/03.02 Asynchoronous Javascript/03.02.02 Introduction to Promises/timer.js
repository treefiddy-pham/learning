// expanded promise executor function example.
// here the timer function returns a promise of an executor function that calls resolve after 1 second

function timer() {
    // executor function is called and ran immediately
    const promise = new Promise(function executor(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, 1000);
    });
    // return the executor's promise so callbacks can be used on it elsewhere.
    return promise;
}

module.exports = timer;