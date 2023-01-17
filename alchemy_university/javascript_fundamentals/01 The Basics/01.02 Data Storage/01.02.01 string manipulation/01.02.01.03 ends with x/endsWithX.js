// returns true if string ends with 'x' or 'X'
function endsWithX(string) {
    //Lesson wants to highlight usage of the length function
    return (string[(string.length - 1)].toLowerCase() === 'x');
}

module.exports = endsWithX;