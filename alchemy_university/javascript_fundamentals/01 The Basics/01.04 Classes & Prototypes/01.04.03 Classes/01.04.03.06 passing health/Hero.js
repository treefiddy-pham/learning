// Add configurable health property to Hero

class Hero {
    // health_config argument added to constructor function so it can accept a health value upon creation of new Hero
    constructor(health_config) {
        this.health = health_config;
    }
    takeDamage(damage) {
        // prevents health from being negative
        if(this.health - damage < 0) {
            this.health = 0;
        }
        else {
            this.health -= damage;
        }
    }
}

module.exports = Hero;