// create constructor function for subclass of Hero with an added rage property
// the Warrior class does not have any properties even though it inherited methods via extends.

const Hero = require('./Hero');

// extends syntax to inherit methods of Hero to Warrior.
class Warrior extends Hero {
    constructor() {
        // super function to call the constructors in Hero to create base properties
        super();
        this.rage = 0;
    }
}

module.exports = Warrior;