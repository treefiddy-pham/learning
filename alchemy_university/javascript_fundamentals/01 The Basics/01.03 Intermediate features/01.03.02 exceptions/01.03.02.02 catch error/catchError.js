// takes in function fn as an argument, runs it, and catches if error is encountered to prevent exception
function catchError(fn) {
    try {
        fn();
    }
    catch(ex) {
        console.log(ex);
    }

}

module.exports = catchError;