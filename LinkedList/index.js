class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

/**
 * Linked List:
 * 
 * Insertion
 * Deletion
 * Updation
 * Reverse
 * 
 * indexing of a node starts from 0
 */
class LinkedList {
    head = null;
    size = 0;

    isEmpty() {
        return this.head === null;
    }

    getNodeRefAt(index) {
        if (this.isEmpty()) {
            return null;
        }
        var tempNode = this.head,
            counter = 0;
        if (index === 0) {
            return tempNode;
        }
        while (counter !== index) {
            tempNode = tempNode.next;
            counter++;
        }
        return tempNode;
    }

    insertAtStart(data) {
        var node = new Node(data);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    insertAtEnd(data) {
        var node = new Node(data);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            var lastNode = this.getNodeRefAt(this.size - 1);
            lastNode.next = node;
        }
        this.size++;
    }

    insertAfter(data, index) {
        if (this.isEmpty()) {
            console.log('Linked list is Empty!');
        } else {
            if (index < 0) {
                console.log('Invalid index');
            } else if (index === 0) {
                this.insertAtStart(data);
            } else if (this.size === index) {
                this.insertAtEnd(data);
            } else if (index > this.size) {
                console.log(`Linked list size is ${this.size} and the index provided is exceeding this size!`);
            } else if (index) {
                var node = new Node(data);
                var tempNode = this.getNodeRefAt(index);
                node.next = tempNode.next;
                tempNode.next = node;
                this.size++;
            } else {
                console.log('Please specify index after which new node will be inserted!');
            }
        }
    }

    deleteAtStart() {
        if (this.isEmpty()) {
            console.log('Linked list is Empty!');
            return null;
        } else {
            var deletedData = this.head.data;
            this.head = this.head.next;
            this.size--;
            return deletedData;
        }
    }

    deleteAtEnd() {
        if (this.isEmpty()) {
            console.log('Linked list is Empty!');
            return null;
        } else {
            this.size--;
            return this.deleteNode(this.size);
        }
    }

    deleteAt(index) {
        if (this.isEmpty()) {
            console.log('Linked list is Empty!');
        } else {
            if (index < 0) {
                console.log('Invalid index');
            } else if (index === 0) {
                this.deleteAtStart(data);
            } else if (this.size === index) {
                this.deleteAtEnd(data);
            } else if (index > this.size) {
                console.log(`Linked list size is ${this.size} and the index provided is exceeding this size!`);
            } else if (index) {
                this.size--;
                return this.deleteNode(index);
            } else {
                console.log('Please specify index at which the node will be deleted!');
            }
        }
    }

    deleteNode(index) {
        var refNode = this.getNodeRefAt(index);
        if (index - 1 < 0) {
            this.head = null;
        } else {
            var prevRefNode = this.getNodeRefAt(index - 1);
            prevRefNode.next = refNode.next;
        }
        var deletedData = refNode.data;
        return deletedData;
    }

    updateAt(data, index) {
        if (this.isEmpty()) {
            console.log('Linked list is Empty!');
        } else if (index === 0) {
            if (this.head.data === data) {
                console.log(`${data} is already present at index ${index}`)
            } else {
                this.head.data = data;
            }
        } else if (index > this.size) {
            console.log(`Linked list size is ${this.size} and the index provided is exceeding this size!`);
        } else {
            var refNode = this.getNodeRefAt(index);
            refNode.data = data;
        }
    }

    reverse() {
        if (this.isEmpty()) {
            console.log('Linked list is Empty!');
        } else if (this.size === 1) {
            return this.head;
        } else {
            var p = this.head, q = this.head.next;
            p.next = null;
            while (q) {
                this.head = q;
                q = this.head.next;
                this.head.next = p;
                p = this.head;
            }
            return this.head;
        }
    }
}

var ll = new LinkedList();
ll.insertAtEnd(22);
ll.insertAtEnd(20);
ll.insertAtStart(10);
ll.insertAtStart(33);
ll.insertAfter(100, 2);
console.log('ll', ll);

ll.reverse();
console.log('ll', ll);

ll.deleteAtStart();
ll.deleteAtEnd();
ll.deleteAt(2);
console.log('ll', ll);

ll.updateAt(55, 1)
console.log('ll', ll);