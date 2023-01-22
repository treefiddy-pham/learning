// runs a specified callback function on every array element replacing its value with the result of the callback

function map(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i]);
    }
    return arr;
}

module.exports = map;