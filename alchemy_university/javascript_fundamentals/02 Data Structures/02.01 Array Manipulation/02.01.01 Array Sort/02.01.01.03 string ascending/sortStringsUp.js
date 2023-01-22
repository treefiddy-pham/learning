// sorts an array of string in ascending order 
function sortStringsUp(array) {
    // uses localCompare method to provide numeric value to string comparison
    array.sort(function comparison(a,b) {
        return a.localeCompare(b);
    });
}

module.exports = sortStringsUp;