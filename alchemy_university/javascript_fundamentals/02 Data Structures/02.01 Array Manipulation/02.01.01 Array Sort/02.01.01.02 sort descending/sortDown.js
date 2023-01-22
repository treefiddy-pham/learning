// function that will correctly sort an array of numbers in descending order

function sortDown(array) {
    // comparison function provided to ensure numeric sort. 
    array.sort(function comparison(a,b) {
        return b - a;
    });
}

module.exports = sortDown;