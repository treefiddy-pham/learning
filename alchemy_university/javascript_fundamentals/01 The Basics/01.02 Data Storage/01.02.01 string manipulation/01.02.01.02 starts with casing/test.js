const startsWithX = require('../startsWithX');
const { assert } = require('chai');

describe('startsWithX', () => {
    it('should return true for a string starting with a lower case x', () => {
        assert.equal(startsWithX("xpizza"), true);
        assert.equal(startsWithX("x"), true);
    });

    it('should return true for a string starting with an upper case x', () => {
        assert.equal(startsWithX("Xpizza"), true);
        assert.equal(startsWithX("X"), true);
        assert.equal(startsWithX("Xylophones"), true);
    });

    it('should return false for a string not starting with x', () => {
        assert.equal(startsWithX("pizza"), false);
        assert.equal(startsWithX("spaceX"), false);
    });
});