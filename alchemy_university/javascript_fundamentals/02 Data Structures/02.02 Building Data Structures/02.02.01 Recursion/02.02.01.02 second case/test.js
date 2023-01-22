const factorial = require('../factorial');
const { assert } = require('chai');

describe('factorial', () => {
    describe('base case', () => {
        it('should return 1', () => {
            assert.equal(factorial(1), 1);
        });
    });

    describe('more cases', () => {
        it('should handle 2', () => {
            assert.equal(factorial(2), 2);
        });
    });
});