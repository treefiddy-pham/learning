// take in 3 boolean arguments and return true if any of the arguments are true
function willEat(hasPizza, hasDonuts, hasCookies) {
    return (hasPizza || hasDonuts || hasCookies);
}

module.exports = willEat;
