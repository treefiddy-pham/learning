// Use slice method to determine which half of the string is longer and return it
function splitAtX(string) {
    //stores the two slices in separate variables for comparison
    let firsthalf = string.slice(0,string.indexOf('x'));
    let secondhalf = string.slice(string.indexOf('x')+1);
    //return longer half
    if(firsthalf.length > secondhalf.length) {
        return firsthalf;
    }
    else if (firsthalf.length < secondhalf.length) {
        return secondhalf;
    }
}

module.exports = splitAtX;