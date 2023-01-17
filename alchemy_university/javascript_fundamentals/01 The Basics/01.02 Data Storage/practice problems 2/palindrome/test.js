const { assert } = require('chai');
const isPalindrome = require('../palindrome');

describe('isPalindrome', () => {
    describe('is a palindrome', () => {
        it('should return true', () => {
            assert.equal(isPalindrome('pop'), true);
        });

        it('should return true', () => {
            assert.equal(isPalindrome('kayak'), true);
        });

        it('should return true', () => {
            assert.equal(isPalindrome('racecar'), true);
        });
    })
    
    describe('is not a palindrome', () => {
        it('should return false', () => {
            assert.equal(isPalindrome('bear'), false);
        });

        it('should return false', () => {
            assert.equal(isPalindrome('pizza'), false);
        });

        it('should return false', () => {
            assert.equal(isPalindrome('representative'), false);
        });
    })
})