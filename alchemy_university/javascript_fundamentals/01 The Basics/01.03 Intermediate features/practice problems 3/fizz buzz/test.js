const {assert} = require('chai');
const fizzBuzz = require('../fizzBuzz');

describe('fizzBuzz', () => {
    it('should return an empty string', () => {
        const numbers = [1, 2, 4, 7, 11];
        const result = fizzBuzz(numbers);
        assert.equal(result, "");
    })

    it('should return fizz', () => {
        const numbers = [3, 6, 9, 12];
        const result = fizzBuzz(numbers);
        assert.equal(result, "fizzfizzfizzfizz");
    })

    it('should return buzz', () => {
        const numbers = [5, 10, 20, 25];
        const result = fizzBuzz(numbers);
        assert.equal(result, "buzzbuzzbuzzbuzz");
    })

    it('should return fizzbuzz', () => {
        const numbers = [15, 30, 45];
        const result = fizzBuzz(numbers);
        assert.equal(result, "fizzbuzzfizzbuzzfizzbuzz");
    })

    it('should return all conditions', () => {
        const numbers = [1, 3, 5, 9, 11, 15, 17, 20];
        const result = fizzBuzz(numbers);
        assert.equal(result, "fizzbuzzfizzfizzbuzzbuzz");
    })
})