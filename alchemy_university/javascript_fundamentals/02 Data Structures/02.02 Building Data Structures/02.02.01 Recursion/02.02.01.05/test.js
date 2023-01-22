const walk = require('../walk');
const { assert } = require('chai');

describe('Walk', () => {
    describe('base case', () => {
        it('return the node', () => {
            assert.deepEqual(walk({ id: 5 }), { id: 5 });
        });
    });

    describe('recursive', () => {
        it('return the last node in a list of 2', () => {
            const node = { 
                id: 1, 
                next: { id: 2 }
            }
            assert.deepEqual(walk(node), { id: 2 });
        });

        it('return the last node in a list of 3', () => {
            const node = {
                id: 1,
                next: {
                    id: 2,
                    next: { id: 3 }
                }
            }
            assert.deepEqual(walk(node), { id: 3 });
        });

        it('return the last node in a list of 4', () => {
            const node = {
                id: 1,
                next: {
                    id: 2,
                    next: { 
                        id: 3,
                        next: { id: 4 }
                    }
                }
            }
            assert.deepEqual(walk(node), { id: 4 });
        });
    });
});