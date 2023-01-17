const { assert } = require('chai');
const thisName = require('../thisName');

describe('thisName', () => {
    it('should throw an error when called directly', () => {
        let error;
        try { 
            this.name();
        }
        catch(ex) {
            error = ex;
        }
        assert(error, "When called directly, this should not be defined");
    });
    
    it('should return a name when it is called bound to an object', () => {
        assert.equal(thisName.call({ name: 'Bob' }), 'Bob');
    });
});