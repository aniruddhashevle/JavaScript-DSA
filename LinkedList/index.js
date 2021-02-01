class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

/**
 * Linked List:
 * 
 * Insertion: O(n)
 */
class LinkedList {
    head = null;
    size = 0;

    isEmpty() {
        return this.head === null;
    }

    getLastNodeRef() {
        if (this.isEmpty()) {
            return null;
        } else {
            var temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            return temp;
        }
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
            var lastNode = this.getLastNodeRef();
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
            } else {
                var node = new Node(data),
                    tempNode = this.head,
                    counter = 0;
                while (counter !== index) {
                    tempNode = tempNode.next;
                    counter++;
                }
                node.next = tempNode.next;
                tempNode.next = node;
                this.size++;
            }
        }
    }
}