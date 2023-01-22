const sum = require('../sum');
const { assert } = require('chai');

describe('sum', function () {
    it('should sum one elements', () => {
        assert.equal(sum([1]), 1);
    });

    it('should sum five elements', () => {
        assert.equal(sum([1,2,3,4,5]), 15);
    });

    it('should sum 10 elements', () => {
        assert.equal(sum([1,2,3,4,5,6,7,8,9,10]), 55);
    });
});