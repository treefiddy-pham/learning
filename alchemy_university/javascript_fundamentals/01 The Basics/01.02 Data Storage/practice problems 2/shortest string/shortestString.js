// take 2 string arguments and return the shorter of the two strings
function shortestString(str1, str2) {
    if(str1.length < str2.length) {
        return str1;
    }
    else if (str2.length < str1.length) {
        return str2;
    }
}

module.exports = shortestString;