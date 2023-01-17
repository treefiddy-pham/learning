function topDouble(value, top) {
    let result = value;
    while (result * 2 < top) {
        result *= 2;
    }
    return result;
}

module.exports = topDouble;