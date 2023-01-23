const Pact = require('../Pact');
const { assert } = require('chai');

describe('Pact', function () {
    it('should handle then chaining', (done) => {
        let val1;
        let val2;
        let pact = new Pact((resolve, reject) => {
            setTimeout(() => {
                resolve(42);
            }, 100);
        }).then((val) => {
            assert.equal(val, 42);
            return new Pact((resolve, reject) => {
                resolve(val * 2);
            });
        }).then((val) => {
            assert.equal(val, 84);
            return val * 2;
        });

        pact.then((val) => {
            assert.equal(val, 168);
            done();
        });
    });
});