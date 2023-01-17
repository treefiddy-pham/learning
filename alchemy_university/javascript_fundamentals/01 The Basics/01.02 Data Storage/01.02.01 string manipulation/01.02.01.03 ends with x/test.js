const endsWithX = require('../endsWithX');
const { assert } = require('chai');

describe('endsWithX', () => {
    it('should return true for a string ending with a lower case x', () => {
        assert.equal(endsWithX("pizzaX"), true);
    });

    it('should return true for a string ending with an upper case x', () => {
        assert.equal(endsWithX("pizzaX"), true);
    });

    it('should return false for a string not ending with x', () => {
        assert.equal(endsWithX("pizza"), false);
    });
});