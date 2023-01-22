const addScore = require('../addScore');
const { assert } = require('chai');

describe('addScore', () => {
    it('should add 10 to the score for a single participant', () => {
        const actual = addScore([{ id: 1, score: 5 }]);
        const expected = [{ id: 1, score: 15 }];
        console.log({ actual, expected });
        assert.sameDeepOrderedMembers(actual, expected);
    });

    it('should add 10 to the score for several participants', () => {
        const actual = addScore([{ id: 1, score: 5 }, { id: 3, score: 10 }, { id: 2, score: 15 }]);
        const expected = [{ id: 1, score: 15 }, { id: 3, score: 20 }, { id: 2, score: 25 }];
        console.log({ actual, expected });
        assert.sameDeepOrderedMembers(actual, expected);
    });
});