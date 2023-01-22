const lab = require('../lab');
const messaging = require('../messaging');
const logs = require('../logs');
const handleResults = require('../handleResults');
const { assert } = require('chai');
const patientId = 1;

describe('Lab Results', () => {
    before(async () => {
        await handleResults(patientId);
    });

    describe('calling the lab', () => {
        it('should make one call', () => {
            assert.equal(lab.__calls.length, 1);
        });
        it('should send one argument', () => {
            assert.equal(lab.__calls[0].length, 1);
        });
        it('should send the patient id', () => {
            assert.equal(lab.__calls[0][0], patientId);
        });
    });

    describe('sending the results', () => {
        it('should make one call', () => {
            assert.equal(messaging.__calls.length, 1);
        });
        it('should send two arguments', () => {
            assert.equal(messaging.__calls[0].length, 2);
        });
        it('should send the patient id and lab results', () => {
            assert.equal(messaging.__calls[0][0], patientId);
            assert.equal(messaging.__calls[0][1], lab.__results);
        });
    });

    describe('logging the response', () => {
        it('should make one call', () => {
            assert.equal(logs.__calls.length, 1);
        });
        it('should send one argument', () => {
            assert.equal(logs.__calls[0].length, 1);
        });
        it('should send the response', () => {
            assert.equal(logs.__calls[0][0], messaging.__response);
        });
    });
});