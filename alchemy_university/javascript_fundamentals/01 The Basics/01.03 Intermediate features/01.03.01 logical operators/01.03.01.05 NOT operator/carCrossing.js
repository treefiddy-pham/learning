// function takes in two arguments indicating if car A or car B is crossing to return true if and only if 1 car is crossing
function carCrossing(aCrossing, bCrossing) {
    return !(aCrossing==bCrossing);
}

module.exports = carCrossing;