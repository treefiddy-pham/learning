const Node = require('./Node.js');
class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(node) {
        // if head exists change next node to old head before replacing
        if(this.head) {
            node.next = this.head;
            this.head = node;
        }
        else {
            this.head = node;
        }
    }

    addLast(node) {
        // if head exists find last node and set its next to new node
        if(this.head) {
            let last = this.head;
            while(last.next) {
                last = last.next;
            }
            last.next = node;
        }
        else {
            this.head = node;
        }
    }

    indexOf(node) {
        let result = 0;
        let position = this.head;
        while(position) {
            // if match is found return numeric position and clear out position to stop loop
            if(position === node) {
                return result;
                position = null;
            }
            // if last node is reached return -1
            else if(!position.next) {
                return -1;
            }
            // increment result and move to next position
            else {
                result++;
                position = position.next;
            }
        }
    }

    removeAt(index) {
        let i = 0;
        let position = this.head;
        // find the node at provided numeric index
        if(index < 0) {
            throw new Error("out of range");
        }
        else if(index == 0) {
            this.head = position.next;
        }
        else {
            // loop to move to node before node to be deleted
            while(position && i < index - 1) {
                if(!position.next) {
                    throw new Error("out of range");
                }
                else {
                    // move to next position and increment counter
                    i++;
                    position = position.next;
                }
            }
            // replaces next to skip over the node to be removed
            position.next = position.next.next;
        }

    }
}

module.exports = LinkedList;