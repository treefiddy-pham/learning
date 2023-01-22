// filters an array of strings to elements that are no more than 3 characters
function shortStrings(array) {
    return array.filter((function(x) {
        return (x.length <= 3);
    }));
}

module.exports = shortStrings;