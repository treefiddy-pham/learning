const { assert } = require('chai');
const catchError = require('../catchError');

describe('catchError', () => {
    it('should catch a thrown error', () => {
        let ex;
        try {
            catchError(() => {
                throw new Error();
            });
        }
        catch (_ex) {
            ex = _ex;
        }
        assert(!ex, "the error should have been caught");
    });
});