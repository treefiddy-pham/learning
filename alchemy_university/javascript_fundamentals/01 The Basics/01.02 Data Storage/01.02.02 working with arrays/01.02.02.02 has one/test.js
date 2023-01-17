const { assert } = require('chai');
const hasOne = require('../hasOne');

describe('hasOne', () => {
    it('should handle arrays with 1 in it', () => {
        assert(hasOne([1]));
        assert(hasOne([1, 2, 3]));
        assert(hasOne([3, 1, 2]));
        assert(hasOne([3, 2, 1]));
        assert(hasOne([1, 1]));
        assert(hasOne([1, 1, 1]));
    });

    it('should handle arrays without 1 in it', () => {
        assert(!hasOne([]));
        assert(!hasOne([2,3,4]));
        assert(!hasOne([6,7,8,9,10,11]));
    });
});
