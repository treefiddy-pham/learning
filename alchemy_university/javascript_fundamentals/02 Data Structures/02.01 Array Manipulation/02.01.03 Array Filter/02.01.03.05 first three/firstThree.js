// returns just the first 3 in the array of objects.
// seems unnecessary to do it this way instead of simple array operations but opens door to more complexity

function firstThree(array) {
    return array.filter((function(x,i) {
        return (i < 3);
    }))
}

module.exports = firstThree;