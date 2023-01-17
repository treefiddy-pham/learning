// return total number of pizzas from an array of pizza orders
function numberOfPizzas(orders) {
    let result = 0;
    //loops through array of pizzas adding the number of pizzas from each order to the total
    for(let i = 0; i < orders.length; i++) {
        result += orders[i].pizzas;
    }
    return result;
}

module.exports = numberOfPizzas;