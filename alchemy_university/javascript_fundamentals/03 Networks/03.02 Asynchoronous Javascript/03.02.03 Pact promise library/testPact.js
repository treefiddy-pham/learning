const Pact = require('../Pact');
const { assert } = require('chai');

describe('Pact', function () {
    it('should return an object with a then function', async () => {
        assert.equal(typeof (new Pact(() => { })).then, 'function');
    });

    it('should return an object with a catch function', async () => {
        assert.equal(typeof (new Pact(() => { })).catch, 'function');
    });
});