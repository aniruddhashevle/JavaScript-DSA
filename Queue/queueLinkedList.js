class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * Queue using Linked List
 * 
 * enqueue
 * dequeue
 * getFront
 * getRear
 * destroy
 * show
 * reverse
 */
class QLinkedList {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(value) {
        var node = new LinkedList(value);
        if (this.front) {
            this.rear.next = node;
            this.rear = node;
        } else {
            this.front = node;
            this.rear = node;
        }
        this.size++;
    }

    dequeue() {
        if (this.front) {
            var deletedVal = this.front.value;
            this.front = this.front.next;
            this.size--;
            return deletedVal;
        } else {
            console.log('Queue is empty!')
            return null;
        }
    }

    getRear() {
        return this.rear?.value;
    }

    getFront() {
        return this.front?.value;
    }

    destroy() {
        this.front = this.rear = null;
        this.size = 0;
    }

    show() {
        var temp = this.front;
        while (temp) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    reverse() {
        var ref = this.front,
            q = this.front,
            p = null;
        while (q) {
            this.front = q;
            q = q.next;
            this.front.next = p;
            p = this.front;
        }
        this.rear = ref;
    }
}