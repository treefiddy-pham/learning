// Chain a new prototype of Circle from existing prototype Shape.
// the position properties are inherited from Shape, but a new property called radius will be unique to Circle.
const Shape = require('./Shape');

function Circle(x, y, radius) {
    Shape.call(this, x, y /* pass arguments to shape */);
    // store radius on this
    this.radius = radius;
}

module.exports = Circle;