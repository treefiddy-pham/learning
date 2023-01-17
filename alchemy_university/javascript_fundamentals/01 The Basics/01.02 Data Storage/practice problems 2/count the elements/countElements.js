// takes an array and returns an object count of each element in the array
function countElements(elements) {
    //initialize empty object
    result = {};
    //if element has not been encountered yet create key and set intial value of 1 for first occurrence,
    //otherwise increment the value for that key.
    for(let i = 0; i < elements.length; i++) {
        if(result[elements[i]]) {
            result[elements[i]]++;
        }
        else {
            result[elements[i]] = 1;
        }
    }
    return result;
}

module.exports = countElements;