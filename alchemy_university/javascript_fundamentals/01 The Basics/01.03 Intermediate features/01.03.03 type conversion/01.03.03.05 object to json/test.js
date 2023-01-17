const toJSON = require('../toJSON');
const { assert } = require('chai');

describe('toJSON', () => {
    it('should handle a blank object', () => {
        assert.equal(toJSON({}), "{}");
    });
    it('should handle a more complex object', () => {
        assert.equal(toJSON({ a: 2 }), '{"a":2}');
    });
});