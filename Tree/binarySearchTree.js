/**
 * Circular Queue using Array
 * 
 * insert
 * delete
 * getSumOfLeafNodes
 * getSumOfNonLeafNodes
 * display
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

    findNode(parentRef, ref, value, isLeftNode = false) {
        var node = parentRefNode = null;
        if (ref) {
            if (value < ref.value) {
                var { parentRefNode, node, isLeftNode } = this.findNode(ref, ref.left, value, true);
            } else if (value === ref.value) {
                return { parentRefNode: parentRef, node: ref, isLeftNode };
            } else {
                var { parentRefNode, node, isLeftNode } = this.findNode(ref, ref.right, value, false);
            }
        } else {
            return { parentRefNode, node, isLeftNode };
        }
        if (node) {
            return { parentRefNode, node, isLeftNode };
        } else return { parentRefNode, node, isLeftNode };
    }

    isLeafNode(ref) {
        return ref.left === null && ref.right === null;
    }

    delete(value) {
        var { parentRefNode, node, isLeftNode } = this.findNode(this.root, this.root, value);
        if (node) {
            if (this.isLeafNode(node)) {
                if (isLeftNode) {
                    parentRefNode.left = null;
                } else {
                    parentRefNode.right = null;
                }
            } else {
                // TODO: delete non-leaf node
            }
        } else {
            console.log('Node not found!');
        }
    }

}