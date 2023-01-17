// add function takeDamage that takes in a number argument and subtract it from health
class Hero {
    constructor() {
        this.health = 50;
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