// function takes a number as a string and returns it as a number type or 0 if not a number
function toNumber(string) {
    return Number(string) || 0;
}

module.exports = toNumber;