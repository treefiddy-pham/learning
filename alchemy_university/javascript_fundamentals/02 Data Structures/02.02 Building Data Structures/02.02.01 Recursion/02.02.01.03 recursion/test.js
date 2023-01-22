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

        it('should handle 3', () => {
            assert.equal(factorial(3), 6);
        });

        it('should handle 4', () => {
            assert.equal(factorial(4), 24);
        });

        it('should handle 5', () => {
            assert.equal(factorial(5), 120);
        });
    });
});