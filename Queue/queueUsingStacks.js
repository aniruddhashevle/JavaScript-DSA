/**
 * Implementation of Queue using 2 stacks
 * 
 * Runtime: 80 ms
 * Memory Usage: 38.3 MB
 * 
 */


/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
    this.stack1 = [];
    this.stack2 = [];
    this.top1 = -1;
    this.top2 = -1;
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    while (this.stack1.length) {
        let popedS1 = this.stack1.pop();
        this.top1--;
        this.stack2.push(popedS1);
        this.top2++;
    }
    this.stack1.push(x);
    this.top1++;
    while (this.stack2.length) {
        let popedS2 = this.stack2.pop();
        this.top2--;
        this.stack1.push(popedS2);
        this.top1++;
    }
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.stack1.length) {
        let deletedVal = this.stack1.pop();
        this.top1--;
        return deletedVal;
    }
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return this.stack1[this.top1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.stack1.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */