// Operation manager that utilizes the stack class to hold two separate stacks of operations performed and undone

const Stack = require('./Stack');

class OperationManager {
    constructor() {
        this.operations = new Stack();
        this.undos = new Stack();
    }

    addOperation(operation) {
        this.operations.push(operation);
    }

    undo() {
        this.undos.push(this.operations.pop());
    }

    redo() {
        this.operations.push(this.undos.pop());
    }

    redoAll() {
        while (!this.undos.isEmpty()) {
            this.redo();
        }
    }
}

module.exports = OperationManager;