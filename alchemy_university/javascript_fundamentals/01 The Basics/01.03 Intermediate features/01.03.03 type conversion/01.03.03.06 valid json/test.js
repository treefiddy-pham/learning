const personJSON = require('../personJSON');
const { assert } = require('chai');

let person;
describe('personJSON', () => {
    before(() => {
        person = JSON.parse(personJSON);
    });

    it('should have a property name that is a string', () => {
        assert(person.hasOwnProperty('name'), "The resulting object did not have a property `name`");
        assert.equal(typeof person.name, "string");
    });

    it('should have a property age that is a number', () => {
        assert(person.hasOwnProperty('age'), "The resulting object did not have a property `age`");
        assert.equal(typeof person.age, "number");
    });

    it('should have a property isReal that is a boolean', () => {
        assert(person.hasOwnProperty('isReal'), "The resulting object did not have a property `isReal`");
        assert.equal(typeof person.isReal, "boolean");
    });
});