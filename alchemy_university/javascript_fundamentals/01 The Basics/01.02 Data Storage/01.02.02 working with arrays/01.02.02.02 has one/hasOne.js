// function to return true if the array contains the number 1
function hasOne(array) {
    //default result to false
    let result = false;

    //loop through array and flip result to true if 1 is found
    for (let i = 0; i < array.length; i++) {
        result = (result || (array[i] === 1));
    }
    return result;
}

module.exports = hasOne;
