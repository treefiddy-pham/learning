const Stack = require('../Stack');
const { assert, expect } = require('chai');
const { MAX_STACK_SIZE } = require('../config');

const item = "ITEM";
let stack;
describe('Stack', function () {
    describe('Stage 2: Underflow & Overflow', () => {
        beforeEach(() => {
            stack = new Stack();
        });

        it('should not allow us to exceed the MAX_STACK_SIZE', () => {
            for (let i = 0; i < MAX_STACK_SIZE; i++) {
                stack.push(item);
            }
            expect(() => stack.push(item)).to.throw();
        });

        it('should not allow us to underflow', () => {
            expect(() => stack.pop()).to.throw();
        });
    });

    describe('Backwards Compatibility', () => {
        describe('Stage 1: Push & Pop', () => {
            beforeEach(() => {
                stack = new Stack();
            });

            it('should have an empty items array', () => {
                assert(Array.isArray(stack.items), "There should be items array on stack");
                assert.equal(stack.items.length, 0, "The items array should have a length of zero");
            });

            it('should allow us to push an item', () => {
                stack.push(item);
                assert.equal(stack.items.length, 1, "The items array should have a length of 1 after a push");
                stack.push(item);
                assert.equal(stack.items.length, 2, "The items array should have a length of 2 after two pushes");
            });

            it('should allow us to pop an item', () => {
                stack.push(item);
                assert.equal(stack.items.length, 1, "The items array should have a length of 1 after a push");
                stack.pop();
                assert.equal(stack.items.length, 0, "The items array should have a length of 0 after a push/pop");
            });
        });
    });
});