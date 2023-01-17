const isTruthy = require('../isTruthy');
const { assert } = require('chai');

describe('isTruthy', () => {
    describe('truthy values', () => {
        it('should be true', () => {
            assert(isTruthy(1));
            assert(isTruthy("message"));
            assert(isTruthy(true));
            assert(isTruthy({}));
        });
    });
    describe('falsey values', () => {
        it('should be false', () => {
            assert.isNotTrue(isTruthy(false));
            assert.isNotTrue(isTruthy(""));
            assert.isNotTrue(isTruthy(0));
            assert.isNotTrue(isTruthy(undefined));
        });
    });
});