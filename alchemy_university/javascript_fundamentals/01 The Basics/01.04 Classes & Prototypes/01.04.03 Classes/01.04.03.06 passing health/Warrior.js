// updated to make health configurable
const Hero = require('./Hero');

// extends syntax to inherit methods of Hero to Warrior.
class Warrior extends Hero {
    // added health_config argument constructor to accept health configuration
    constructor(health_config) {
        // super function to call the constructors in Hero to create base properties
        super(health_config);
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