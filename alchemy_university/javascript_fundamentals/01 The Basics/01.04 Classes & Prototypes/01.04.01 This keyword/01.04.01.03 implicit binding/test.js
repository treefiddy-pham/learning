const { assert } = require('chai');
const namedObject = require('../namedObject');

describe('getName', () => {
    it('should return the name of the object', () => {
        assert.equal(namedObject.getName(), 'Bob');
    });

    describe('if the name changes', () => {
        before(() => {
            namedObject.name = "Alice";
        });

        it('should also change the name returned by getName', () => {
            assert.equal(namedObject.getName(), 'Alice');
        });
    });
});