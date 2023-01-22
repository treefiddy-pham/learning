// base case for walking nodes. if there is no next node propery, then return the node

function walk(node) {
    if (typeof node.next == 'undefined') {
        return node;
    }
}

module.exports = walk;