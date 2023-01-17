const { assert } = require('chai');
const Circle = require('../Circle');
const Shape = require('../Shape');

describe('Circle', () => {
    let circle;
    let x = 10;
    let y = 15;
    let radius = 15;
    describe('instance', () => {
        beforeEach(() => {
            circle = new Circle(x, y, radius);
        });

        it('should set the properties', () => {
            assert.equal(circle.position.x, x);
            assert.equal(circle.position.y, y);
            assert.equal(circle.radius, radius);
        });

        it('should have a move function', () => {
            assert.equal(typeof circle.move, "function");
        });

        it('should have move the shape', () => {
            circle.move(2, 1);
            assert.equal(circle.position.x, x + 2);
            assert.equal(circle.position.y, y + 1);
        });

        it('should refer to the Shape prototype in the prototype chain', () => {
            assert(Shape.prototype.isPrototypeOf(circle));
        });
    });
}); 