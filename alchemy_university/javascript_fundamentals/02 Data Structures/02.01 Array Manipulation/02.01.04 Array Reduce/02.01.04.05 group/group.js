// food is an array full of food objects
// let's group them by "type" and return them
function group(foods) {
    return foods.reduce((accumulator, currentValue) => {
        // TODO: reduce logic
        if (accumulator[`${currentValue.type}`]) {
            accumulator[`${currentValue.type}`].push(currentValue.food);
        }
        else {
            accumulator[`${currentValue.type}`] = [`${(currentValue.food)}`];
        }
        return accumulator;
    }, {});
}

module.exports = group;