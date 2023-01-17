const { assert } = require('chai');
const scream = require('../scream');

describe('scream', () => {
    it('should do a scream of length 1', () => {
        assert.equal(scream(1), "a");
    });
    it('should do a scream of length 5', () => {
        assert.equal(scream(5), "aAaAa");
    });
    it('should do a scream of length 10', () => {
        assert.equal(scream(10), "aAaAaAaAaA");
    });
});