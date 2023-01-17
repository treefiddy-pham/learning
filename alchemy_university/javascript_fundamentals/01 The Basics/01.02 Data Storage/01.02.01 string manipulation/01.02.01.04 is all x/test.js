const isAllX = require('../isAllX');
const { assert } = require('chai');

describe('isAllX', () => {
    it('should return true for all lower case x', () => {
        assert.equal(isAllX("xxxx"), true);
    });

    it('should return true for all upper case x', () => {
        assert.equal(isAllX("X"), true);
    });

    it('should return true for a mix of x casing', () => {
        assert.equal(isAllX("XxXxXXXxx"), true);
    });

    it('should return false for non-x strings', () => {
        assert.equal(isAllX("Xxxpizza"), false);
        assert.equal(isAllX("xPizzaX"), false);
        assert.equal(isAllX("XxxxQxxxX"), false);
    });
});