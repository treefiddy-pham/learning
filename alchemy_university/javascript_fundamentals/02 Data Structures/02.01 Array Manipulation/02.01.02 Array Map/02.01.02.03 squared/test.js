const squared = require('../squared');
const {assert} = require('chai');

describe('squared', () => {
    it('should square 1', () => {
        assert.equal(squared(1), 1);
    });

    it('should square 2', () => {
        assert.equal(squared(2), 4);
    });

    it('should square 4', () => {
        assert.equal(squared(4), 16);
    });
});