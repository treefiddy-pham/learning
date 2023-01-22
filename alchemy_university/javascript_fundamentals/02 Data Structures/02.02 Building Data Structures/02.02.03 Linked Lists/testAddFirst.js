const LinkedList = require('../LinkedList');
const Node = require('../Node');
const { assert } = require('chai');

describe('LinkedList instance', () => {
    const list = new LinkedList();

    it('should have a null head', () => {
        assert.strictEqual(list.head, null);
    });

    describe('after adding a new node', () => {
        const node1 = new Node(1);
        before(() => {
            list.addFirst(node1);
        });

        it('should set the head to the new node', () => {
            assert.equal(list.head, node1);
        });

        describe('after adding another node', () => {
            const node2 = new Node(2);
            before(() => {
                list.addFirst(node2);
            });

            it('should set the head to the new node', () => {
                assert.equal(list.head, node2);
            });

            it('should set the next on the new head', () => {
                assert.equal(node2.next, node1);
            });
        });
    });
}); 