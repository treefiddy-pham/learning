// completed walk function with recursive calls
function walk(node) {
    if (typeof node.next == 'undefined') {
        return node;
    }
    else {
        return walk(node.next);
    }
}

module.exports = walk;