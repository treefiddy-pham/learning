const { assert } = require('chai');
const countC = require('../countC');

describe('countC', () => {
    it('should return zero', () => {
        assert.equal(countC('pizza'), 0);
    });

    it('should handle lowercase c', () => {
        assert.equal(countC('character'), 2);
    });

    it('should handle uppercase c', () => {
        assert.equal(countC('Circus'), 2);
    });
})