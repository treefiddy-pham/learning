const findFirstX = require('../findFirstX');
const { assert } = require('chai');

describe('findFirstX', () => {
    it('should find the first x in a short string', () => {
        assert.equal(findFirstX("abcx"), 3);
    });

    it('should find the first x in a long string', () => {
        assert.equal(findFirstX("should find the first x in a long string"), 22);
    });
});