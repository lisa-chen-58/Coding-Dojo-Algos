// Classes from B_buildLinkedList.js //
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

    // accepts a value
    addFront(value) {
        // create a new node
        let new_node = new Node(value);

        // assign it to the list head / assign the head to be the next node to the new node
        new_node.next = this.head

        // returns a pointer to the new head node / assign the new_node to be the new head of the list
        this.head = new_node

        return this.head; //OR return "this"
    }


// Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.

    removeFront() {
        // If the list is empty, place the new node as the head 
        if (this.head == null) { //if list is empty do nothing
            return this.head;
        }
        // creates variable to hold node we're removing
        var removedNode = this.head;

        // assigns the new head of the list to be the next node
        this.head = removedNode.next;

        // clear the removedNode from head to null (removed from the list)
        removedNode.next = null;
        return this.head;
    }
// Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

    front() {
        // if (this.head == null) {
        //     return null;
        // } else {
        //     return this.head.value;
        // }

        //Ternary:
        return this.head ? this.head.value : null;
    }
}


var newLL = new LinkedList();
newLL.addFront(10);
newLL.addFront(5);
newLL.addFront(3);
newLL.removeFront();
console.log(newLL);
console.log(newLL.head.next);