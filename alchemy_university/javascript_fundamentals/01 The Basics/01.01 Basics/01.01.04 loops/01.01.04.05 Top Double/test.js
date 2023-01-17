const { assert } = require('chai');
const topDouble = require('../topDouble');

describe('topDouble', () => {
    it('should determine the top double of 1 less than 5', () => {
        assert.equal(topDouble(1, 5), 4);
    });

    it('should determine the top double of 2 less than 100', () => {
        assert.equal(topDouble(2, 100), 64);
    });

    it('should determine the top double of 5 less than 100', () => {
        assert.equal(topDouble(5, 100), 80);
    });
});