//Add a method contains(value) to your SLL class, which is given a value as a parameter.  Return a boolean (true/false); true, if the list possesses a node that contains the provided value.

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
    addFront(value) {
        let new_node = new Node(value);
        new_node.next = this.head
        this.head = new_node
        return this.head; //OR return "this"
    }


// Remove Front
    removeFront() {
        if (this.head == null) {
            return this.head;
        }
        var removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        return this.head;
    }
    // Front - returns value at head of list
    front() {
        return this.head ? this.head.value : null;
    }
    contains(value) {
        var runner = this.head.data;
        console.log(this.head.data);
        while(runner) {
            if(runner === value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
    length() {
        var runner = this.head;
        var count = 0;
        while (runner) {
            if (runner !== null) {
                count++;
                runner = runner.next;
            }
        }
        return count;
    }
    display() {
        var list = "";
        var runner = this.head.data;
        if (runner === null) {
            return null;
        }
        list+=this.head.data;
        runner = this.head.next;
        while (runner !== null) {
            list += ", " + runner.data;
            runner = runner.next;
            }
        return list;
    }
}

var newLL = new LinkedList();
newLL.addFront(10);
newLL.addFront(5);
newLL.addFront(3);
// newLL.removeFront();
// console.log(newLL);
// console.log(newLL.head.next);
// console.log(newLL.contains(3));
// console.log(newLL.length());
console.log(newLL.display());