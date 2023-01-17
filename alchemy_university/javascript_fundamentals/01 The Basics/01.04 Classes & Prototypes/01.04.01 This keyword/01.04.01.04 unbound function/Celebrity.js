// Update the function to correct the context of this.age to be the same as as this.name

const fetchAge = require('./fetchAge');

function Celebrity(name) {
    this.name = name;
    // capture the value of this in order to refer to the Celebrity function context unchanged
    const that = this;
    fetchAge(this.name, function (age) {
        // changed this.age to that.age because this no longer points to same object during callback execution
        that.age = age;
    });
}
/* 
also acceptable to bind the callback function fetchAge to the same context as Celebrity

function Celebrity(name) {
    this.name = name;
    fetchAge(this.name, function (age) {
        this.age = age;
    }.bind(this),1);
}
*/
/*
also acceptable to use arrow syntax that will automatically capture context of surrounding function.
works only on modern browsers.

function Celebrity(name) {
    this.name = name;
    fetchAge(this.name, (age) => {
        this.age = age;
    });
}
*/
module.exports = Celebrity;