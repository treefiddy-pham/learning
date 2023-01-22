const Stack = require('../Stack');
const { assert } = require('chai');

let stack;
const item = "ITEM";
describe('Stack', function () {
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
        const popped = stack.pop();
        assert.equal(stack.items.length, 0, "The items array should have a length of 0 after a push/pop");
        assert.equal(popped, item, "Pop should return the popped item");
    });
});