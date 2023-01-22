// take an array of numbers and add one to each element.
// demonstration of array's 'map' method to perform operations on each array element.

function plusOne(arr) {
    return arr.map(function(x) {
        return x + 1;
    });
}

module.exports = plusOne;