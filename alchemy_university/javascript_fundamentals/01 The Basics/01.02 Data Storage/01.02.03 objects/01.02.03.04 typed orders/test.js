const { assert } = require('chai');
const ORDER_TYPES = require('../orderTypes');

describe('ORDER_TYPES', () => {
    it('should have at least three keys', () => {
        const keys = Object.keys(ORDER_TYPES);
        assert.isAbove(keys.length, 2);
    });

    it('should have all keys in upper snake case', () => {
        const keys = Object.keys(ORDER_TYPES);
        keys.forEach((key) => {
            assert((new RegExp(/^([A-Z]*_?)*$/)).test(key), 'the key should be in UPPER_SNAKE_CASE');
        });
    });

    it('should have a PIZZA key with a value of 0', () => {
        assert.equal(ORDER_TYPES.PIZZA, 0);
    });

    it('all keys should have numerical values', () => {
        const values = Object.values(ORDER_TYPES);
        values.forEach((value) => {
            assert.equal(typeof value, "number", "make sure each value is a number!");
        });
    });

    it('no key should have the same value', () => {
        const values = Object.values(ORDER_TYPES);
        values.forEach((value, index) => {
            assert(values.indexOf(value) === index, `Each value must be unique, found two ${value} values!`)
        });
    });
});