const map = require('../map');
const { assert } = require('chai');

describe('map', () => {
    it('should double each element in the returned array', () => {
        const doubled = map([1, 2, 3, 4], (n) => {
            return n * 2;
        });
        assert.sameOrderedMembers([2, 4, 6, 8], doubled);
    });

    it('should triple each element in the returned array', () => {
        const tripled = map([1, 2, 3, 4], (n) => {
            return n * 3;
        });
        assert.sameOrderedMembers([3, 6, 9, 12], tripled);
    });
});