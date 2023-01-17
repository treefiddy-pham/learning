// function takes in 3 boolean arguments and returns true if above water or has oxygen and is connected
function canBreathe(isConnected, hasOxygen, aboveWater) {
    return((isConnected && hasOxygen) || aboveWater);
}

module.exports = canBreathe;