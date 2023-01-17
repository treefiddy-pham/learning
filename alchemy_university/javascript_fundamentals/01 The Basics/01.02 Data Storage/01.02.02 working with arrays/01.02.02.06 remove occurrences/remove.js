// remove all occurrences of value from array of integers
function removeOccurrences(array, num) {
    for(let i = array.length -1; i >= 0; i--) {
        if( array[i] === num) {
            //uses splice function to remove exactly 1 character
            array.splice(i,1);
        }
    }
}

module.exports = removeOccurrences;