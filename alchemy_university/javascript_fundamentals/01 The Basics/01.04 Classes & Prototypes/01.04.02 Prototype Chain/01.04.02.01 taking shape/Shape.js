// complete the shape function to store x and y in the position object for instace this
// Our Shape "Constructor"
function Shape(x, y) {
    // store x and y in this.position
    this.position = {x : x, y: y};
}

module.exports = Shape;