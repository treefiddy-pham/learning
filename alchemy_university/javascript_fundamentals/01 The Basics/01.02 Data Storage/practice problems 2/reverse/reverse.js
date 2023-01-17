// takes a string and return the reverse
function reverse(string) {
    let newstring = ""
    for (let i = string.length-1;i >= 0; i--) {
        newstring += string[i];
    }
    return newstring;
}

module.exports = reverse;