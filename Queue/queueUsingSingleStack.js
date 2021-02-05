/*****************************************************************************
 * Solution 1: Implementation of Queue using a Single stack
 * 
 * Runtime: 76 ms
 * Memory Usage: 38.2 MB
*****************************************************************************/

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
    this.stack1 = [];
    this.top1 = -1;
    this.front = -1;
    this.rear = -1;
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    if (this.stack1.length === 0) this.front++;
    this.stack1.push(x);
    this.rear++;
    this.top1++;
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.stack1.length) {
        this.stack1.reverse();
        let deletedVal = this.stack1.pop();
        if (this.stack1.length === 0) this.front--;
        this.top1--;
        this.rear--;
        this.stack1.reverse();
        return deletedVal;
    }
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return this.stack1[this.front];
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



/*****************************************************************************
* Solution 2: Implementation of Queue using a Single stack
* 
* Runtime: 72 ms
* Memory Usage: 38.3 MB
******************************************************************************/

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
    this.stack = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (!this.stack.length) return null;
    return this.stack.shift();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (!this.stack.length) return null;
    return this.stack[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.stack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

