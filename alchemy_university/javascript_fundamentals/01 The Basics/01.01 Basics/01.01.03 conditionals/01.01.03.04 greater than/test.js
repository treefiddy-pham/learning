const greater = require('../greater');
const { assert } = require('chai');

describe('greater', () => {
    describe('if the first argument is greater', () => {
        it('should return it', () => {
            assert.equal(greater(5, 1), 5);
            assert.equal(greater(0, -1), 0);
        });
    });
    describe('if the second argument is greater', () => {
        it('should return it', () => {
            assert.equal(greater(1, 5), 5);
            assert.equal(greater(-1, 0), 0);
        });
    });
    describe('if the arguments are equal', () => {
        it('should return undefined', () => {
            assert.equal(greater(1, 1), undefined);
            assert.equal(greater(-1, -1), undefined);
        });
    });
});