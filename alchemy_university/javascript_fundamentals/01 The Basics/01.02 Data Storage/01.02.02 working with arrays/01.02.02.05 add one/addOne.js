// add 1 to each element in the array
// note that changing element of array does so directly and is not being returned.

function addOne(array) {
    for(let i = 0; i < array.length; i++) {
        array[i] += 1;
    }
}

module.exports = addOne;