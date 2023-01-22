// filter the array to only elements that are less than 5
// filter function will filter based on boolean expression returned
function lessThanFive(array) {
    return array.filter((function(x) {
        return (x < 5);
    }));
}

module.exports = lessThanFive;