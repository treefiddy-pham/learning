// add a method takeDamage to the Warrior class that will increment rage by 1 each time damage is taken.
// example of extending methods to the subclass using the super function.

const Hero = require('./Hero');

// extends syntax to inherit methods of Hero to Warrior.
class Warrior extends Hero {
    constructor() {
        // super function to call the constructors in Hero to create base properties
        super();
        this.rage = 0;
    }

    takeDamage(damage) {
        // super function to call takeDamage on Hero
        super.takeDamage(damage);
        // increment rage every time takeDamage is called on Warrior
        this.rage++;
    }
}

module.exports = Warrior;