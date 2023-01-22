const Stack = require('../Stack');
const OperationsManager = require('../OperationsManager');
const { assert } = require('chai');

const operation = "OPERATION";
let operationsManager;
describe('Operations Manager', () => {
    beforeEach(() => {
        operationsManager = new OperationsManager();
    });

    it('should have an undos stack', () => {
        assert(operationsManager.undos, "Could not find an undos property on OperationsManager");
        assert(operationsManager.undos instanceof Stack, "Expected undos to be an instance of Stack");
    });

    it('should have an operations stack', () => {
        assert(operationsManager.operations, "Could not find an operations property on OperationsManager");
        assert(operationsManager.operations instanceof Stack, "Expected operations to be an instance of Stack");
    });

    it('should allow us to add an operation', () => {
        operationsManager.addOperation(operation);
        assert.equal(operationsManager.operations.peek(), operation, "should have added an operation to operations stack");
    });
});