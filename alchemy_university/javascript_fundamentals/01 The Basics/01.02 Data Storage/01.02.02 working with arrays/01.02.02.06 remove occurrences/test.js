const { assert } = require('chai');
const removeOccurrences = require('../remove');

describe('removeOccurrences', () => {
    it('should handle a single removal in an array', () => {
        let array = [1, 2, 3];
        const returned = removeOccurrences(array, 1);
        assert.equal(returned, undefined, "the function should not return anything");
        assert.sameMembers(array, [2, 3]);
    });

    it('should handle removing multiple elements from an array', () => {
        let array = [1, 2, 2, 3, 4, 3];
        const returned = removeOccurrences(array, 2);
        assert.equal(returned, undefined, "the function should not return anything");
        assert.sameMembers(array, [1, 3, 4, 3]);
    });

    it('should handle removing all elements in an array', () => {
        let array = [1, 1, 1, 1, 1, 1, 1];
        const returned = removeOccurrences(array, 1);
        assert.equal(returned, undefined, "the function should not return anything");
        assert.sameMembers(array, []);
    });
});
