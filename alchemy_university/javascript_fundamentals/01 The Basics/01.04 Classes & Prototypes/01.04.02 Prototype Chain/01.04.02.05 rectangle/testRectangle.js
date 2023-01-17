const { assert } = require('chai');
const Rectangle = require('../Rectangle');
const Shape = require('../Shape');

describe('Rectangle', () => {
    let rectangle;
    let x = 10;
    let y = 15;
    let height = 15;
    let width = 20;
    describe('instance', () => {
        beforeEach(() => {
            rectangle = new Rectangle(x, y, height, width);
        });

        it('should set the properties', () => {
            assert.equal(rectangle.position.x, x);
            assert.equal(rectangle.position.y, y);
            assert.equal(rectangle.height, height);
            assert.equal(rectangle.width, width);
        });

        it('should have a move function', () => {
            assert.equal(typeof rectangle.move, "function", "Could not find the function move on the rectangle instance");
        });

        it('should refer to the Shape prototype in the prototype chain', () => {
            assert(Shape.prototype.isPrototypeOf(rectangle));
        });
    });
}); 