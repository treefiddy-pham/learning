const numberOfPizzas = require('../numberOfPizzas');
const { assert } = require('chai');

describe('numberOfPizzas', () => {
    describe('a single order', () => {
        const orders = [
            { pizzas: 3 },
        ]

        it('should return the number of pizzas', () => {
            assert.equal(numberOfPizzas(orders), 3);
        });
    });

    describe('many orders', () => {
        const orders = [
            { pizzas: 3 },
            { pizzas: 5 },
            { pizzas: 10 },
        ]

        it('should return the number of pizzas', () => {
            assert.equal(numberOfPizzas(orders), 18);
        });
    });
});