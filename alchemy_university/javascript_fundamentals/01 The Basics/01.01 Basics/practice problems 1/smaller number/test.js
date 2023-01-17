const { assert } = require('chai');
const smallerNumber = require('../smallerNumber');

describe('smallerNumber', () => {
    it('should return the smaller number', () => {
        assert.equal(smallerNumber(3, 5), 3);
    });

    it('should return the smaller number', () => {
        assert.equal(smallerNumber(10, 4), 4);
    });
})