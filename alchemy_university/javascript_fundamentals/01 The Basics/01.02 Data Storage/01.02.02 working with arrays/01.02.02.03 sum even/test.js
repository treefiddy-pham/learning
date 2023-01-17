const { assert } = require('chai');
const sumEven = require('../sumEven');

describe('sumEven', () => {
    it('should handle a single element array', () => {
        assert.equal(sumEven([2]), 2);
    });

    it('should handle an array with a few sequential elements', () => {
        assert.equal(sumEven([1, 2, 3, 4, 5]), 6);
    });

    it('should handle a larger array', () => {
        assert.equal(sumEven([9, 12, 14, 16, 19]), 42);
    });
});
