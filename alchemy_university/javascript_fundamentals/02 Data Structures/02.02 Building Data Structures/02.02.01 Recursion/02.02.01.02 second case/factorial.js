// Expanded on previous factorial function to add a condition for when n is 2

function factorial(n) {
    if(n === 1) {
        return 1;
    }
    else if (n === 2) {
        return 2;
    }
}

module.exports = factorial;