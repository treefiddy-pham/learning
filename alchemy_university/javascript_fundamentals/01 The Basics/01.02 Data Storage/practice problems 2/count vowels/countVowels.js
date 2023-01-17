// return the total number of vowels found in a string
function countVowels(str) {
    let result = 0;
    for(let i = 0; i < str.length ; i++) {
        if ("aeiou".indexOf(str[i].toLowerCase()) >= 0) {
            result++;
        }
    }
    return result
}

module.exports = countVowels;