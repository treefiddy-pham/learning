const Pact = require('../Pact');
const { assert } = require('chai');

describe('Pact', function () {
    it('should run both .then callbacks', (done) => {
        let val1;
        let val2;
        let pact = new Pact((resolve, reject) => {
            setTimeout(() => {
                resolve(42);
            }, 100);
        });
        pact.then((val) => {
            val1 = val;
        });
        pact.then((val) => {
            val2 = val;
        });
        setTimeout(() => {
            assert.equal(val1, 42, "First then callback did not succeed");
            assert.equal(val2, 42, "Second then callback did not suceeed");
            done();
        }, 150)
    });

    it('should run both .catch callbacks', (done) => {
        let val1;
        let val2;
        let pact = new Pact((resolve, reject) => {
            setTimeout(() => {
                reject(42);
            }, 100);
        });
        pact.catch((val) => {
            val1 = val;
        });
        pact.catch((val) => {
            val2 = val;
        });
        setTimeout(() => {
            assert.equal(val1, 42, "First catch callback did not succeed");
            assert.equal(val2, 42, "Second catch callback did not suceeed");
            done();
        }, 150)
    });
});