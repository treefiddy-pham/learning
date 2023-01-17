function greater(first, last) {
    if (first > last) {
        return first;
    }
    else if (last > first) {
        return last;
    }
}

module.exports = greater;