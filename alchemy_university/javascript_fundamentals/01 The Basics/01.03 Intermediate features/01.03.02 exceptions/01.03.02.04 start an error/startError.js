function startError() {
    const x = 2;

    // TypeError - invalid operation on type
    x();
    
/* other types of errors

    // ReferenceError - variable not defined
    a;

    // SyntaxError - invalid javascript syntax
    x.72;

    // RangeError - outside of range
    array = new Array(Infinity);
*/
}

module.exports = startError;