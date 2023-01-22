// returns a subset with only the unique strings

function unique(array) {
    // makes copy of full array
    full_array = array;
    // anonymous function to compare first occurrence to current position of x
    return array.filter((function(x,i){
        return (full_array.indexOf(x) == i);
    }));
}

module.exports = unique;