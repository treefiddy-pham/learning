const { assert } = require('chai');
const thisName = require('../thisName');

describe('thisName', () => {
    it('should be bound to an object with the name Bob', () => {
        assert.equal(thisName(), 'Bob');
    });

    it('should have renamed the function bound thisName', () => {
        assert.equal(thisName.name, "bound thisName");
    });
});