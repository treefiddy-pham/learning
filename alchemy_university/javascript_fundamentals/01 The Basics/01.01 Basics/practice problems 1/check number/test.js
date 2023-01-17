const { assert } = require('chai');
const checkNumber = require('../checkNumber');

describe('checkNumber', () => {
    it('should return positive', () => {
        assert.equal(checkNumber(15), 'positive');
    });

    it('should return negative', () => {
        assert.equal(checkNumber(-5), 'negative');
    });

    it('should return zero', () => {
        assert.equal(checkNumber(0), 'zero');
    });
})