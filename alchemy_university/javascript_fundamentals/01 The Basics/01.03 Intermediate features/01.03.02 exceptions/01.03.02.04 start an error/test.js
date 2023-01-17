const { assert } = require('chai');
const startError = require('../startError');

describe('startError', () => {
    it('should throw a subclass of error', () => {
        let ex;
        try {
            startError();
        }
        catch (_ex) {
            ex = _ex;
        }
        assert(ex, "did not throw an error");
        console.log(ex);
        assert.equal(ex.__proto__.__proto__.constructor, Error);
    });
});