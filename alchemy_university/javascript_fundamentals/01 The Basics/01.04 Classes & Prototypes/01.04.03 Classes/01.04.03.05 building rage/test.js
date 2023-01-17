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

    describe('after taking 5 damage', () => {
        before(() => {
            warrior.takeDamage(5);
        });

        it('should have 45 health', () => {
            assert.equal(warrior.health, 45);
        });

        it('should have 1 rage', () => {
            assert.equal(warrior.rage, 1);
        });

        describe('after taking 15 more damage', () => {
            before(() => {
                warrior.takeDamage(15);
            });

            it('should have 30 health', () => {
                assert.equal(warrior.health, 30);
            });

            it('should have 2 rage', () => {
                assert.equal(warrior.rage, 2);
            });
        });
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