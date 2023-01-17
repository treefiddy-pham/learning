function checkNumber(num) {
    if (num == 0) {
        return "zero";
    }
    else if (num < 0) {
        return "negative";
    }
    else if (num > 0) {
        return "positive";
    }
}

module.exports = checkNumber;