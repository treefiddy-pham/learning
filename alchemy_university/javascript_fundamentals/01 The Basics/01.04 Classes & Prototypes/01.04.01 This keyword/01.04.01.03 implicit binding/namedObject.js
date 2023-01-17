// given an object obj, add a function getName to the object that will retrieve name when it is called
// obj.getName() should return 'Bob'
const obj = {
    name: 'Bob',
    getName: function() {
        return this.name;
    }
}

module.exports = obj;