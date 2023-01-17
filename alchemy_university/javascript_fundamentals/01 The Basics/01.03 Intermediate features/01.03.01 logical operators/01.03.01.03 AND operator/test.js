const canBreathe = require('../canBreathe');
const { assert } = require('chai');

describe('canBreathe', () => {
    describe('when above water', () => {
        it('should be able to breathe', () => {
            assert.equal(canBreathe(false, false, true), true);
            assert.equal(canBreathe(true, false, true), true);
            assert.equal(canBreathe(false, true, true), true);
            assert.equal(canBreathe(true, true, true), true);
        });
    });
    describe('when not above water', () => {
        describe('and not connected', () => {
            it('should not be able to breathe', () => {
                assert.equal(canBreathe(true, false, false), false);
                assert.equal(canBreathe(false, false, false), false);
            });
        });
        describe('and there is no oxygen', () => {
            it('should not be able to breathe', () => {
                assert.equal(canBreathe(false, true, false), false);
                assert.equal(canBreathe(false, false, false), false);
            });
        });
        describe('and is connected with oxygen', () => {
            it('should be able to breathe', () => {
                assert.equal(canBreathe(true, true, false), true);
            });
        });
    });
});