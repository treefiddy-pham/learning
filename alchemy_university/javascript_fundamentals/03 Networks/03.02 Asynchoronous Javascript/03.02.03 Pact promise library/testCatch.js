const Pact = require('../Pact');
const { assert } = require('chai');

describe('Pact', function () {
    it('should call a .catch function with the reject value after a timeout', (done) => {
        let value;
        new Pact((resolve, reject) => {
            setTimeout(() => {
                reject(42);
            }, 100);
        }).catch((err) => {
            assert.equal(err, 42);
            done();
        });
    });
});