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
    contains(value) {
        if (this.head == null) {
            return null;
        }
        else {
            let runner = this.head;
            let sum = 0;
            let valueExists = false;
            while (runner !== null) {
                sum += runner.data
                if (runner == value) {
                    valueExists = true;
                }
                runner = runner.next
            }
            return sum
        }
    }
}

var mySLL = new LinkedList;
mySLL.contains()
