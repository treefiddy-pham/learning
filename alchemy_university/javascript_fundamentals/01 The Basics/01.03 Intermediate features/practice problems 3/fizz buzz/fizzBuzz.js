/*
Write a function fizzBuzz that takes an array of numbers and replaces any number divisible by three with the word "fizz" and any number divisible by five with the word "buzz". If a number is divisible by both three and five, replace it with "fizzbuzz"
Once the appropriate numbers are replaced, return a concatenated string with only the words "fizz" or "buzz" included.
*/
function fizzBuzz(numbers) {
    let string=""
    for(i = 0;i < numbers.length; i++) {
        if(numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
            numbers[i] = "fizzbuzz";
        }
        else if(numbers[i] % 3 === 0) {
            numbers[i] = "fizz";
        }
        else if(numbers[i] % 5 === 0) {
            numbers[i] = "buzz"
        }
        if(typeof numbers[i] == 'string') {
            string+=numbers[i];
        }
    }
    return string;
}

module.exports = fizzBuzz;