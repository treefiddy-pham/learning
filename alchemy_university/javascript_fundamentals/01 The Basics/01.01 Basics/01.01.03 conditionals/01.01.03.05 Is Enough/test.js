const isEnough = require('../isEnough');
const { assert } = require('chai');

describe('isEnough', () => {
    describe('if there is more than enough money', () => {
        it('should return true', () => {
            assert.equal(isEnough(1, 2), true);
            assert.equal(isEnough(100, 120), true);
        });
    });
    describe('if there is not enough money', () => {
        it('should return false', () => {
            assert.equal(isEnough(1, 0), false);
            assert.equal(isEnough(100, 99), false);
        });
    });
    describe('if there is just enough money', () => {
        it('should return true', () => {
            assert.equal(isEnough(1, 1), true);
            assert.equal(isEnough(100, 100), true);
        });
    });
});