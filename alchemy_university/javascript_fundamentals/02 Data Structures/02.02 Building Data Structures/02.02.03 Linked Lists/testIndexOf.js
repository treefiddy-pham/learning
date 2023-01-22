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

        it('should find the index at 0', () => {
            assert.equal(list.indexOf(node1), 0)
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

            it('should find the index at 0', () => {
                assert.equal(list.indexOf(node2), 0)
            });

            it('should find the first node at index 1', () => {
                assert.equal(list.indexOf(node1), 1)
            });

            describe('after adding another node last', () => {
                const node3 = new Node(3);
                before(() => {
                    list.addLast(node3);
                });

                it('should keep the head as the previous node', () => {
                    assert.equal(list.head, node2);
                });

                it('should set this node to the end', () => {
                    assert.equal(list.head.next.next, node3);
                });

                it('should find the index at 2', () => {
                    assert.equal(list.indexOf(node3), 2)
                });
            });
        });
    });
}); 