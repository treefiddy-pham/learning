// return a new array with only the unique values found in input array
function unique(array) {
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        // indexOf returns -1 if element is not found in array
        // push element to new array when character is not found
        if (newArray.indexOf(array[i]) < 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

module.exports = unique;