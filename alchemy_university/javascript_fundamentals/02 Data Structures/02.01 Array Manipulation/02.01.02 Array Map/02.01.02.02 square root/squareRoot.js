// takes an array of numbers and returns the square root of each element.
// Here, the map command is passed a built-in function rather than supplying code for an anonymous function.

function squareRoot(arr) {
    return arr.map(Math.sqrt);
}

module.exports = squareRoot;