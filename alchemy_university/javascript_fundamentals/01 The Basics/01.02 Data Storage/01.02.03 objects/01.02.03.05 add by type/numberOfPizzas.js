// return total number of pizzas from an array of pizza orders
function numberOfPizzas(orders) {
    const ORDER_TYPES = require('./orderTypes');

    let result = 0;
    //loops through array of pizzas adding the number of pizzas from each order to the total only if order type is pizza
    for(let i = 0; i < orders.length; i++) {
        if(orders[i].type == ORDER_TYPES.PIZZA) {
            result += orders[i].pizzas;
        }
    }
    return result;
}

module.exports = numberOfPizzas;