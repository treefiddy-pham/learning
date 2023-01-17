const { assert } = require('chai');
const Warrior = require('../Warrior');
const Hero = require('../Hero');

describe('new Warrior', () => {
    const health = 25;
    const warrior = new Warrior(health);

    it(`should have ${health} health`, () => {
        assert.equal(warrior.health, health);
    });

    it('should be a hero', () => {
        assert(warrior instanceof Hero);
    });
});

describe('new Hero', () => {
    const health = 10;
    const hero = new Hero(health);

    it(`should have ${health} health`, () => {
        assert.equal(hero.health, health);
    });
});