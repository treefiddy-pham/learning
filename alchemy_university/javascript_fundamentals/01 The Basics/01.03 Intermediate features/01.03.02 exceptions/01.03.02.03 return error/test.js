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
        catch(_ex) {
            ex = _ex;
        }
        assert(!ex, "the error should have been caught");
    });
    
    it('should return the thrown error', () => {
        let expected = new Error();
        let actual = catchError(() => {
            throw expected;
        });
        assert.equal(actual, expected, "Should have returned the same error that was caught");
    });

    it('should return false when no error is thrown', () => {
        let ex = catchError(() => {});
        assert.equal(ex, false);
    });
});