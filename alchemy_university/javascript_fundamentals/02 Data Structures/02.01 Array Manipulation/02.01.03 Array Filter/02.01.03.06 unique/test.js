const { assert } = require('chai');
const unique = require('../unique');

describe('unique', () => {
    it('should filter a few strings', () => {
        const expected = ['a', 'b', 'c'];
        const actual = unique(['a', 'b', 'c', 'b', 'c']);
        console.log({expected, actual});
        assert.sameDeepMembers(expected, actual);
    });
    it('should filter a several numbers', () => {
        const expected = [10,20,30,40,50];
        const actual = unique([40,50,10,20,30,40,50,10,10,10,10]);
        console.log({ expected, actual });
        assert.sameDeepMembers(expected, actual);
    });
});