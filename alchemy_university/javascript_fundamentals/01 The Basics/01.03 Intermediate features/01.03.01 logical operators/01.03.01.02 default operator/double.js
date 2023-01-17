// update double function to handle when x is undefined
function double(x) {
    // defaults x to 0 if it is undefined. then multiply by 2.
    return (x || 0) * 2;
}

module.exports = double;