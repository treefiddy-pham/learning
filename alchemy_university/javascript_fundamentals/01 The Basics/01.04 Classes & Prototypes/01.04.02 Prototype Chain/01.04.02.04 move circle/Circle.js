// link Circle.prototype to Shape.prototype to make methods on Shape available to Circle
const Shape = require('./Shape');

// Uses Object.create() to initialize Circle.prototype as Shape to inherit methods
Circle.prototype = Object.create(Shape.prototype);

function Circle(x, y, radius) {
    Shape.call(this, x, y /* pass arguments to shape */);
    // store radius on this
    this.radius = radius;
}

module.exports = Circle;