const carCrossing = require('../carCrossing');
const { assert } = require('chai');

describe('carCrossing', () => {
    describe('when a is crossing and not b', () => {
        it('should allow a to cross', () => {
            assert.equal(carCrossing(true, false), true);
        });
    });
    describe('when both are crossing', () => {
        it('should be stalemate', () => {
            assert.equal(carCrossing(true, true), false);
        });
    });
    describe('when both are crossing', () => {
        it('should allow b to cross', () => {
            assert.equal(carCrossing(false, true), true);
        });
    });
    describe('when neither are crossing', () => {
        it('should not be true', () => {
            assert.equal(carCrossing(false, false), false);
        });
    });
});