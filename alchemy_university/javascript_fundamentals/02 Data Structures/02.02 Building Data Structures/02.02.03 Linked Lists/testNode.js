const Node = require('../Node');
const { assert } = require('chai');

describe('node', () => {
    const data = 3;
    const node = new Node(data);

    it('should store data', () => {
        assert.equal(node.data, 3);
    });

    it('should have a null next', () => {
        assert.strictEqual(node.next, null);
    });
});