/**
 * Queue using Array
 * 
 * enqueue
 * dequeue
 * getFront
 * getRear
 * destroy
 * show
 * reverse
 */
class QArray {
    constructor() {
        this.queue = [];
        this.front = null;
        this.rear = null;
    }

    enqueue(value) {
        if (this.queue.length) {
            this.rear++;
        } else {
            this.front = this.rear = 0;
        }
        this.queue.push(value);
    }

    dequeue() {
        if (this.queue.length) {
            var popedVal = this.queue.shift();
            this.rear--;
            return popedVal;
        } else {
            console.log('Queue is empty!')
        }
    }

    getFront() {
        return this.queue[this.front];
    }

    getRear() {
        return this.queue[this.rear];
    }

    destroy() {
        this.queue = [];
        this.front = null;
        this.rear = null;
    }

    show() {
        for (let i = 0; i < this.queue.length; i++) {
            console.log(this.queue[i]);
        }
    }

    reverse() {
        this.queue.reverse();
    }

}