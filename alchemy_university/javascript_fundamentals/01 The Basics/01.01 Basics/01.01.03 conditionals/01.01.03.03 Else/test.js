const isNotEqual = require('../isNotEqual');
const { assert } = require('chai');

describe('isNotEqual', () => {
    describe('if the values are equal', () => {
        it('should return false', () => {
            assert.equal(isNotEqual(1, 1), false);
        });
    });
    describe('if the values are not equal', () => {
        it('should return true', () => {
            assert.equal(isNotEqual(1, 2), true);
        });
    });
});