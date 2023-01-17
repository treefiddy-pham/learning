/*
create function move to be added to Shape.prototype.
This function should take two arguments x and y.
It should move the shape's position by adding the corresponding object values
*/

//// Our Shape "Constructor"
function Shape(x, y) {
    // store x and y in this.position
    this.position = {x : x, y: y};
}

// adds arguments x and y to existing positions
Shape.prototype.move = function(x,y) {
    this.position.x += x;
    this.position.y += y;
}

module.exports = Shape;