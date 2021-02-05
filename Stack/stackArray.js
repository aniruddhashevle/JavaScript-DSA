/**
 * Stack using Link List
 * 
 * push
 * pop
 * show
 * destroy
 * reverse
 */

class StackArray {
    constructor() {
        this.top = -1;
        this.stackArray = [];
    }

    push(value) {
        this.stackArray[++this.top] = value;
    }

    pop() {
        if (this.top > -1) {
            let popedVal = this.stackArray.pop();
            this.top--;
            return popedVal;
        } else {
            console.log('Stack is Empty!');
            return null;
        }
    }

    show() {
        if (this.top > -1) {
            for (let i = this.top; i >= 0; i--) {
                console.log(this.stackArray[i]);
            }
        } else {
            console.log('Stack is Empty!');
        }
    }

    destroy() {
        this.stackArray = [];
        this.top = -1;
    }

    reverse() {
        if (this.top > -1) {
            this.stackArray.reverse();
        } else {
            console.log('Stack is Empty!');
        }
    }
}

var stack = new StackArray();
stack.push(33);
stack.push(38);
stack.push(30);
stack.push(48);
stack.show();
var poped1 = stack.pop();
console.log("popped value", poped1);
stack.show();
var poped2 = stack.pop();
console.log("popped value", poped2);
stack.show();
stack.reverse();
stack.show();
stack.destroy();
stack.show();