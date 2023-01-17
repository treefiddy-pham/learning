// find the sum of all even values inside of array and return it
function sumEven(array) {
    let result = 0;
    for( let i = 0; i < array.length; i++) {
        if ( array[i] % 2 === 0) {
            result += array[i];
        }
    }
    return result;
}

module.exports = sumEven;