// take two arrays of numbers and return a single array with the sum of each corresponding index value.
// assumes both arrays are same length.
function sumTogether(arr1, arr2) {
    const result = [];
    for(let i = 0; i < arr1.length; i++) {
        result[i] = arr1[i] + arr2[i];
    }
    return result
}

module.exports = sumTogether;
