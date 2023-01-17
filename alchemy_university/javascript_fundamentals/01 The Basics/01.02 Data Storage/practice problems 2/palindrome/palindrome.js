// return true if input string is a palindrome

function isPalindrome(string) {
    let reverse = ""
    for (let i = string.length-1;i >= 0; i--) {
        reverse += string[i];
    }
    return (string == reverse);
}

module.exports = isPalindrome;