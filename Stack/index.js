/**
 * Stack using Link List
 * 
 * push
 * pop
 * show
 * length
 * destroy
 */

class LinkListNode {
    constructor(value) {
        this.value = value;
        this.ref = null;
    }
}

class StackLinkList {
    push(val) {
        var newNode = new LinkListNode(val);
        if (this.top) {
            newNode.ref = this.top;
        }
        this.top = newNode;
        this.size = this.size ? this.size + 1 : 1;
    }
    pop() {
        if (this.size) {
            const popedVal = this.top.value;
            this.top = this.top.ref;
            this.size -= 1;
            return popedVal;
        } else {
            console.log("Empty Stack!")
            return null;
        }
    }
    show() {
        let tempRef = this.top;
        while (tempRef !== null) {
            console.log(tempRef.value);
            tempRef = tempRef.ref;
        }
    }
    length() {
        return this.size;
    }
    destroy() {
        while (this.top !== null) {
            this.pop();
        }
    }
}

var stack = new StackLinkList();
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
console.log("size", stack.length());
stack.destroy();
console.log("size after destroy", stack.length());