const { assert } = require('chai');
const maxSum = require('../maxSum');

describe('maxSum', () => {
    it('should return zero', () => {
        assert.equal(maxSum(0), 0);
    });

    it('should return the max sum of 1', () => {
        assert.equal(maxSum(1), 1);
    });

    it('should return the max sum of positive integer', () => {
        assert.equal(maxSum(5), 15);
    });

    it('should return zero for a negative integer', () => {
        assert.equal(maxSum(-5), 0)
    })
})