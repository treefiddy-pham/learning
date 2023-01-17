// Add a flip function to the Rectangle prototype to switch height and width with each other
const Shape = require('./Shape');

function Rectangle(x, y, height, width) {
    Shape.call(this,x, y);
    this.height = height;
    this.width = width;    
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.flip = function() {
    // store height in temp variable before it gets reassigned.
    let temp = this.height;
    this.height = this.width;
    this.width = temp;
}

module.exports = Rectangle;