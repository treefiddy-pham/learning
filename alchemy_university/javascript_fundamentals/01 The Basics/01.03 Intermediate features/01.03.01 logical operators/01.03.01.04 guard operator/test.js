const friendName = require('../friendName');
const { assert } = require('chai');

describe('friendName', () => {
    describe('when friend is defined', () => {
        it('should get the name', () => {
            assert.equal(friendName({ name: 'Bob' }), 'Bob');
            assert.equal(friendName({ name: 'Jim' }), 'Jim');
        });
    });
    describe('when friend is undefined', () => {
        it('should return undefined', () => {
            assert.equal(friendName(), undefined);
        });
    });
});