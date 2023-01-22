const squareRoot = require('../squareRoot');
const {assert} = require('chai');

describe('squareRoot', () => {
    it('should take the sqrt for a single element', () => {
        assert.sameOrderedMembers([1], squareRoot([1]));
    });

    it('should take the sqrt for several elements', () => {
        assert.sameOrderedMembers([1, 2, 3, 4], squareRoot([1, 4, 9, 16]));
    });
});