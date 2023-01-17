const double = require('../double');
const { assert } = require('chai');

describe('configMessage', () => {
    describe('when there is a number passed', () => {
        it('should double it', () => {
            assert.equal(double(2), 4, "Did not return the double of 2!");
            assert.equal(double(4), 8, "Did not return the double of 4!");
            assert.equal(double(5), 10, "Did not return the double of 5!");
        });
    });
    describe('when there is no number passed', () => {
        it('should default to zero', () => {
            assert.equal(double(), 0, "Passing undefined for x should return 0");
        });
    });
});