/**
 * Stack using Link List
 * 
 * push
 * pop
 * show
 * destroy
 * reverse
 */

class LinkListNode {
    constructor(value) {
        this.value = value;
        this.ref = null;
    }
}

class StackLinkList {
    top = null;
    size = 0;

    push(val) {
        var newNode = new LinkListNode(val);
        if (this.top) {
            newNode.ref = this.top;
        }
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (this.size) {
            const popedVal = this.top.value;
            this.top = this.top.ref;
            this.size--;
            return popedVal;
        } else {
            console.log("Empty Stack!");
            return null;
        }
    }

    show() {
        let tempRef = this.top;
        while (tempRef) {
            console.log(tempRef.value);
            tempRef = tempRef.ref;
        }
    }

    destroy() {
        while (this.top) {
            this.pop();
        }
    }

    reverse() {
        if (this.size) {
            var p = null, q = this.top;
            while (q) {
                this.top = q;
                q = q.ref;
                this.top.ref = p;
                p = this.top;
            }
        } else {
            console.log("Empty Stack!");
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
console.log("size", stack.size);
stack.reverse();
stack.show();
stack.destroy();
console.log("size after destroy", stack.size);