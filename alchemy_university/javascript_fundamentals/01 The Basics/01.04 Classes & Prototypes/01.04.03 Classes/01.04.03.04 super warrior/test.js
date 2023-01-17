const { assert } = require('chai');
const Warrior = require('../Warrior');
const Hero = require('../Hero');

describe('new Warrior', () => {
    const warrior = new Warrior();

    it('should have 50 health', () => {
        assert.equal(warrior.health, 50);
    });

    it('should be a hero', () => {
        assert(warrior instanceof Hero);
    });

    it('should have 0 rage', () => {
        assert.equal(warrior.rage, 0);
    });
});

describe('new Hero', () => {
    const hero = new Hero();

    it('should have 50 health', () => {
        assert.equal(hero.health, 50);
    });

    it('should not have rage', () => {
        assert.equal(hero.rage, undefined);
    });
});