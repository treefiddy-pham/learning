const { assert } = require('chai');
const summation = require('../summation');

describe('summation', () => {
    it('should sum up to 2', () => {
        assert.equal(summation(2), 3);
    });
    it('should sum up to 3', () => {
        assert.equal(summation(3), 6);
    });
    it('should sum up to 4', () => {
        assert.equal(summation(4), 10);
    });
});