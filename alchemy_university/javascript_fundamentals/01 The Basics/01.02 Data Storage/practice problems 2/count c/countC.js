// count the number of character 'c' found inside a word
function countC(str) {
    let result = 0;
    for(let i = 0; i < str.length ; i++) {
        if (str[i].toLowerCase() === 'c') {
            result++;
        }
    }
    return result
}

module.exports = countC;