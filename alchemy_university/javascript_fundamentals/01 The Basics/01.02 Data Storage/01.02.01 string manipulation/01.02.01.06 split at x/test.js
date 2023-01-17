const splitAtX = require('../splitAtX');
const { assert } = require('chai');

describe('splitAtX', () => {
    it('should handle the first half being longer', () => {
        assert.equal(splitAtX("Happyxdays"), "Happy");
        assert.equal(splitAtX("before the x is long"), "before the ");
    });

    it('should handle the second half being longer', () => {
        assert.equal(splitAtX("10xDeveloper"), "Developer");
        assert.equal(splitAtX("before the x is shorter than after"), " is shorter than after");
    });
});