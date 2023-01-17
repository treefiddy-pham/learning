// return true if string is comprised of all 'x' or 'X'
function isAllX(string) {
    // defaults result to true
    let result = true;

    //loops through each character of the string and if any character is not an X change result to false.
    //this works because combined boolean of true && false is false
    for(let i = 0; i < string.length; i++) {
        result = ( result && string[i].toLowerCase() === 'x' );
    }
    return result;
}

module.exports = isAllX;
