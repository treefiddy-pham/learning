// halve every value in an array
function halfValue(numbers) {
    let newArray = [];
    for(let i = 0; i < numbers.length; i++) {
        newArray[i] = Math.round(numbers[i] / 2);
    }
    return newArray;
}

module.exports = halfValue;