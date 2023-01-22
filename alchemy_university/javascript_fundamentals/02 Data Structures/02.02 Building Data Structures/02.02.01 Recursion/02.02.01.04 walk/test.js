const walk = require('../walk');
const { assert } = require('chai');

describe('Walk', () => {
    describe('base case', () => {
        it('return the node', () => {
            assert.deepEqual(walk({ id: 5 }), { id: 5 });
        });
    });
});