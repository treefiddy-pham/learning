const { assert } = require('chai');
const Hero = require('../Hero');

describe('new Hero', () => {
    const hero = new Hero();

    it('should have 50 health', () => {
        assert(hero.health, "Did you a health property to the hero instance? (Hint: use `this`)")
        assert.equal(hero.health, 50);
    });
});