// generalized function to recursively perform multiplication on decreasing n
function factorial(n) {
    if(n === 1 || n === 2) {
        return n;
    }
    else {
        return n * factorial(n-1);
    }
}

module.exports = factorial;