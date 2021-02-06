/**
 * Circular Queue using Array
 * 
 * isFull
 * enqueue
 * dequeue
 * getFront
 * getRear
 * destroy
 * show
 */
class CircularQueue {
    constructor(size) {
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
        this.size = 0;
    }

    isFull() {
        return (this.rear + 1) % this.queue.length === this.front;
    }

    enqueue(value) {
        if (!this.isFull()) {
            if (this.rear === this.queue.length - 1) {
                this.rear = 0;
            } else {
                if (this.size === 0) {
                    this.front++;
                }
                this.rear++;
            }
            this.queue[this.rear] = value;
            this.size++;
        } else {
            console.log('Circular queue is full!');
        }
    }

    dequeue() {
        if (this.size > 0) {
            var deletedVal = this.queue[this.front];
            delete this.queue[this.front];
            if (this.front === this.queue.length - 1) {
                this.front = 0;
            } else {
                this.front++;
            }
            this.size--;
            if (this.size === 0) {
                this.destroy();
            }
            return deletedVal;
        } else {
            console.log('Circular queue is empty!');
        }
    }

    getFront() {
        return this.queue[this.front];
    }

    getRear() {
        return this.queue[this.rear];
    }

    destroy() {
        this.queue = new Array(this.queue.length);
        this.front = -1;
        this.rear = -1;
        this.size = 0;
    }

    show() {
        for (let i = 0; i < this.queue.length; i++) {
            console.log(this.queue[i]);
        }
    }
}