const { assert } = require('chai');
const eitherNotBoth = require('../eitherNotBoth');

describe('eitherNotBoth', () => {
    describe('divisible by 3 but not 5', () => {
        it('should return true', () => {
            assert.equal(eitherNotBoth(3), true);
        });

        it('should return true', () => {
            assert.equal(eitherNotBoth(9), true);
        });

        it('should return true', () => {
            assert.equal(eitherNotBoth(18), true);
        });
    });

    describe('divisible by 5 but not 3', () => {
        it('should return true', () => {
            assert.equal(eitherNotBoth(5), true);
        });

        it('should return true', () => {
            assert.equal(eitherNotBoth(10), true);
        });

        it('should return true', () => {
            assert.equal(eitherNotBoth(20), true);
        });
    });

    describe('divisible by 5 and 3', () => {
        it('should return false', () => {
            assert.equal(eitherNotBoth(15), false);
        });

        it('should return false', () => {
            assert.equal(eitherNotBoth(30), false);
        });

        it('should return false', () => {
            assert.equal(eitherNotBoth(60), false);
        });
    });
})



