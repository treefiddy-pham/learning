// numbers is an array full of integers
// let's figure if all the numbers are unique
// i.e. [1,2,3,1] => false
// [1,2,3] => true
function allUnique(numbers) {
    return numbers.reduce((accumulator, currentValue, index) => {
        //console.log(numbers, accumulator);
        return accumulator && (numbers.indexOf(currentValue) == index);
    }, true);
}

module.exports = allUnique;