const largest = require('../largest');
const { assert } = require('chai');

describe('largest', function () {
    it('should take the largest of 1 element', () => {
        assert.equal(largest([1]), 1);
    });

    it('should take the largest of 5 elements', () => {
        assert.equal(largest([3,4,1,2,5]), 5);
    });

    it('should take the largest of 10 elements', () => {
        assert.equal(largest([2,8,4,10,1,9,3,5,6,7]), 10);
    });
});