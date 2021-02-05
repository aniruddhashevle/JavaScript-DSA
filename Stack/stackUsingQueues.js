/**
 * Implementation of Queue using 2 stacks
 * 
 * Runtime: 64 ms
 * Memory Usage: 38.5 MB
 * 
 */

/**
 * Initialize your data structure here.
 */
var MyStack = function () {
    this.q1 = [];
    this.q2 = [];
    this.front1 = -1;
    this.front2 = -1;
    this.rear1 = -1;
    this.rear2 = -1;
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    while (this.q1.length) {
        var q1Val = this.q1.shift();
        this.rear1--;
        this.q2.push(q1Val);
        this.rear2++;
    }
    this.front1 = -1;
    this.q1.push(x);
    this.rear1++;
    this.front1++;
    while (this.q2.length) {
        var q2Val = this.q2.shift();
        this.rear2--;
        this.q1.push(q2Val);
        this.rear1++;
    }
    this.front2 = -1;
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
    if (this.q1.length) {
        var deletedVal = this.q1.shift();
        return deletedVal;
    }
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.q1[this.front1];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.q1.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */