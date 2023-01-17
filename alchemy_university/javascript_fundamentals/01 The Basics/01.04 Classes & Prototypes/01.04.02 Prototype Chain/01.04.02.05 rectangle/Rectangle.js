// Repeat of Circle prototype but now a Rectangle instead
const Shape = require('./Shape');

function Rectangle(x, y, height, width) {
    Shape.call(this,x, y);
    this.height = height;
    this.width = width;    
}
Rectangle.prototype = Object.create(Shape.prototype);

module.exports = Rectangle;