// function to sort an array of strings in descending order
function sortStringsDown(array) {
    // uses localCompare method to provide numeric value to string comparison
    array.sort(function comparison(a,b) {
        return b.localeCompare(a);
    });
}

module.exports = sortStringsDown;