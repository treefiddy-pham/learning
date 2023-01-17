const looseEquals = require('../looseEquals');
const { assert } = require('chai');

describe('looseEquals', () => {
    describe('comparing things of the same type', () => {
        describe('same value', () => {
            it('should be equal', () => {
                assert(looseEquals(1, 1));
                assert(looseEquals("a", "a"));
                assert(looseEquals(false, false));
            });
        });
        describe('different value', () => {
            it('should not be equal', () => {
                assert.isNotTrue(looseEquals(0, 1));
                assert.isNotTrue(looseEquals("a", "c"));
                assert.isNotTrue(looseEquals(false, true));
            });
        });
    });
    describe('comparing things of a different type', () => {
        describe('same loose value', () => {
            it('should be equal', () => {
                assert(looseEquals(1, true));
                assert(looseEquals("2", 2));
            });
        });
        describe('different value', () => {
            it('should not be equal', () => {
                assert.isNotTrue(looseEquals(0, true));
                assert.isNotTrue(looseEquals("5", 10));
            });
        });
    });
});