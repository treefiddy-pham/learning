// Returns true if a loosely equals b. 1 == "1" should return true
function looseEquals(a, b) {
    return (a == b);
}

module.exports = looseEquals;