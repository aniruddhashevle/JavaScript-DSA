/**
 * BST using LinkedList
 * 
 * insert
 * inorder
 * preorder
 * postorder
 */

class Node {
    constructor({ value, left = null, right = null }) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insertVal(ref, value) {
        var node = new Node({ value });
        if (value < ref.value) {
            if (ref.left) {
                this.insertVal(ref.left, value);
            } else {
                ref.left = node;
            }
        } else if (value > ref.value) {
            if (ref.right) {
                this.insertVal(ref.right, value);
            } else {
                ref.right = node;
            }
        }
    }

    insert(value) {
        if (this.root) {
            this.insertVal(this.root, value);
        } else {
            this.root = new Node({ value });
        }
    }

    display() {
        console.log(this.root);
    }

    findInorder(ref, arr = []) {
        if (ref) {
            this.findInorder(ref.left, arr);
            arr.push(ref.value);
            this.findInorder(ref.right, arr);
        }
        return arr;
    }

    inorder() {
        return this.findInorder(this.root);
    }


    preorder() {
        return this.findPreorder(this.root);
    }

    findPreorder(ref, arr = []) {
        if (ref) {
            arr.push(ref.value);
            this.findPreorder(ref.left, arr);
            this.findPreorder(ref.right, arr);
        }
        return arr;
    }

    postorder() {
        return this.findPosorder(this.root);
    }

    findPosorder(ref, arr = []) {
        if (ref) {
            this.findPosorder(ref.left, arr);
            this.findPosorder(ref.right, arr);
            arr.push(ref.value);
        }
        return arr;
    }
}

var bst = new BST();
bst.insert(10);
bst.insert(15);
bst.insert(5);
bst.insert(8);
bst.insert(20);
bst.insert(18);
bst.insert(13);
bst.insert(7);
bst.insert(9);
bst.display();
bst.display();
// DFS : Called Recursive and hence uses Stack memory
console.log("Inorder: ", bst.inorder());
console.log("Preorder: ", bst.preorder());
console.log("Postorder: ", bst.postorder());
