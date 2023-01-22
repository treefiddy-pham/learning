const allUnique = require('../allUnique');
const { assert } = require('chai');

describe('allUnique', function () {
    it('should handle a single number array', () => {
        assert(allUnique([1], true));
    });

    it('should handle a larger array where it is not all unique', () => {
        const arr = [1,7,3,6,5,1,4,2];
        assert(!allUnique(arr));
    });

    it('should handle a larger array where it is all unique', () => {
        const arr = [2,3,7,5,4,6,1];
        assert(allUnique(arr));
    });
});