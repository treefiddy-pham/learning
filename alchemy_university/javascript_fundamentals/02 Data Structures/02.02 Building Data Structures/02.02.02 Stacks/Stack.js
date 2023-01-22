// example of a stack class with helper functions.
// push and pop methods will throw errors in case of stack overflows

const { MAX_STACK_SIZE } = require('./config');

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        if(this.items.length >= MAX_STACK_SIZE) {
            throw new Error(`push failed. Max stack size exceeded`);
        }
        else {
            this.items.push(item);
        }
    }
    pop() {
        if(this.isEmpty()) {
            throw new Error(`pop failed. stack is empty`);
        }
        else {
            return this.items.pop();
        }
    }
    isEmpty() {
        return (this.items.length < 1);
    }
    peek() {
        return this.items[this.items.length - 1 ];
    }
}

module.exports = Stack;
