const LinkedList = require('../LinkedList');
const Node = require('../Node');
const { assert } = require('chai');

describe('LinkedList instance', () => {
    const list = new LinkedList();

    it('should start with a null head', () => {
        assert.strictEqual(list.head, null);
    });

    describe('after adding a new node last', () => {
        const node1 = new Node(1);
        before(() => {
            list.addLast(node1);
        });

        it('should set the head to the new node', () => {
            assert.equal(list.head, node1);
        });

        describe('after adding another node first', () => {
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

            describe('after adding another node last', () => {
                const node3 = new Node(3);
                before(() => {
                    list.addLast(node3);
                });

                it('should keep the head as the previous node', () => {
                    assert.equal(list.head, node2);
                });

                it('should set this node after the middle node', () => {
                    assert.equal(node1.next, node3);
                });

                it('should set this node to the end', () => {
                    assert.equal(node3.next, null);
                });
            });
        });
    });
});