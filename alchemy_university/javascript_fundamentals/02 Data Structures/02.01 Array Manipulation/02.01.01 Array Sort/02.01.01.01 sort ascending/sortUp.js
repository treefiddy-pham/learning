// function that will correctly sort an array of numbers in ascending order

function sortUp(array) {
    // comparison function provided to ensure numeric sort. 
    array.sort(function comparison(a,b) {
        // long form
        /*
        if (a < b) {
            return -1;
        }
        if (b < a) {
            return 1;
        }
        return 0;
        */

        // shortcut form.
        // this works because any negative results in 'a' taken first and positive results in 'b' taken first.
        return a - b;
    });
}

module.exports = sortUp;