//modify previous catchError function to return the error if one is thrown, otherwise return false.
function catchError(fn) {
    try {
        fn();
    }
    catch(ex) {
        return ex;
    }
    return false;
}

module.exports = catchError;