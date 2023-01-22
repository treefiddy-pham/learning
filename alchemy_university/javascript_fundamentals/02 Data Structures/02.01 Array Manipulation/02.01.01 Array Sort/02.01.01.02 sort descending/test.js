const { assert } = require('chai');
const sortDown = require('../sortDown');

describe('sortDown', () => {
    it('should mantain sort order for sorted elements', () => {
        let actual = [15, 10, 5];
        sortDown(actual);
        const expected = [15, 10, 5];
        assert.sameOrderedMembers(actual, expected);
    });

    it('should fix sort order for unsorted elements', () => {
        let actual = [7, 4, 2, 3, 0, 5];
        sortDown(actual);
        const expected = [7, 5, 4, 3, 2, 0];
        assert.sameOrderedMembers(actual, expected);
    });
});