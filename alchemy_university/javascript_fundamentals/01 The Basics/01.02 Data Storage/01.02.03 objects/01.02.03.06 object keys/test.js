const numberOfKeys = require('../numberOfKeys');
const { assert } = require('chai');

describe('numberOfKeys', () => {
    it('should handle an object with 1 property', () => {
        assert.equal(numberOfKeys({ prop: 1 }), 1);
    });

    it('should handle an object with 3 properties', () => {
        assert.equal(numberOfKeys({ a: 1, b: 2, c: 3 }), 3);
    });
});