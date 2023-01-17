const removeSecret = require('../removeSecret');
const { assert } = require('chai');

describe('removeSecret', () => {
    it('should remove the secret', () => {
        const person = {
            name: "Alice",
            secret: "afraid of the dark"
        }

        removeSecret(person);

        assert.equal(person.name, "Alice");
        assert.equal(person.secret, undefined);
    });
});