const {assert} = require('chai');
const playerHandScore = require('../playerHandScore');

describe('playerHandScore', () => {
    it('should return a score of 0', () => {
        const hand = "";
        const result = playerHandScore(hand);
        assert.equal(result, 0);
    });

    it('should return the total hand score', () => {
        const hand = "J";
        const result = playerHandScore(hand);
        assert.equal(result, 2);
    });

    it('should return the total hand score', () => {
        const hand = "QQ";
        const result = playerHandScore(hand);
        assert.equal(result, 6);
    });

    it('should return the total hand score', () => {
        const hand = "JKQQ";
        const result = playerHandScore(hand);
        assert.equal(result, 12);
    });
});