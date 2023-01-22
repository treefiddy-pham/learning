function forEach(arr, callback) {
    // for each element in the arr, run the callback, passing in the element
    for(let i = 0; i < arr.length; i++) {
        // the callback function expected to receive takes in 2 parameters, 
        // the array element, and its index value in the array.
        callback(arr[i],i);
    }
}

module.exports = forEach;