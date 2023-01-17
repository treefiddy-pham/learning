const { assert } = require('chai');
const countVowels = require('../countVowels');

describe('countVowels', () => {
    it('should return zero', () => {
        assert.equal(countVowels('bczx'), 0);
    });

    it('should count all vowels', () => {
        assert.equal(countVowels("Igloo"), 3)
    })

    describe('uppercase vowels', () => {
        it('should count all uppercase vowels', () => {
            assert.equal(countVowels('AEIOU'), 5);
        });

        it('should only count vowels', () => {
            assert.equal(countVowels('APPLE'), 2);
        });
    })
    

    describe('lowercase vowels', () => {
        it('should count all lowercase vowels', () => {
            assert.equal(countVowels('aeiou'), 5);
        });

        it('should only count vowels', () => {
            assert.equal(countVowels('apple'), 2);
        });
    })
})