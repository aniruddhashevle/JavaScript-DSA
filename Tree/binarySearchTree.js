/**
 * BST using LinkedList
 * 
 * insert
 * delete
 * getSumOfLeafNodes
 * getSumOfNonLeafNodes
 * display
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

    /**
     * 
     * @param {Node} parentRef 
     * @param {Node|null} ref
     * @param {number} value
     * @param {boolean} isLeftNode
     * 
     * @returns {{parentRefNode: Node, node: Node, isLeftNode: boolean}}
     */
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

    makeParentsChildEmpty(parent, isLeftNode) {
        if (isLeftNode) {
            parent.left = null;
        } else {
            parent.right = null;
        }
    }

    findMaxNode(ref) {
        if (ref.right) {
            return this.findMaxNode(ref.right)
        }
        return ref;
    }

    delete(value) {
        var { parentRefNode, node, isLeftNode } = this.findNode(this.root, this.root, value);
        var nodeValToBeDeleted = null;
        if (node) {
            if (this.isLeafNode(node)) {
                // leaf node
                nodeValToBeDeleted = node.value;
                this.makeParentsChildEmpty(parentRefNode, isLeftNode);
            } else {
                nodeValToBeDeleted = node.value;
                // non-leaf node
                if (!node.left) {
                    // non-leaf node with only right child
                    parentRefNode[isLeftNode ? "left" : "right"] = node.right;
                } else if (!node.right) {
                    // non-leaf node with only left child
                    parentRefNode[isLeftNode ? "left" : "right"] = node.left;
                } else {
                    if (this.root.value === value) {
                        // delete root node
                        var maxNode = this.findMaxNode(this.root.left);
                        var { parentRefNode, node, isLeftNode } = this.findNode(this.root, this.root, maxNode.value);
                        this.root.value = nodeValToBeDeleted = node.value; // update node value to be deleted
                        this.makeParentsChildEmpty(parentRefNode, isLeftNode);
                    } else {
                        // non-leaf node with both left and right children
                        var maxNode = this.findMaxNode(node.right);
                        parentRefNode[isLeftNode ? "left" : "right"] = maxNode;
                    }
                }
            }
            return nodeValToBeDeleted;
        } else {
            console.log('Node not found!');
        }
    }

    getLeafNodes(ref, sum) {
        if (ref) {
            if (ref.left === null && ref.right === null) {
                sum += ref.value;
                return sum;
            }
            if (ref.left) {
                sum = this.getLeafNodes(ref.left, sum);
            }
            if (ref.right) {
                sum = this.getLeafNodes(ref.right, sum);
            }
        }
        return sum;
    }

    getNonLeafNodes(ref, sum) {
        if (ref) {
            if (ref.left !== null || ref.right !== null) {
                sum += ref.value;
            }
            if (ref.left) {
                sum = this.getNonLeafNodes(ref.left, sum);
            }
            if (ref.right) {
                sum = this.getNonLeafNodes(ref.right, sum);
            }
        }
        return sum;
    }

    getSumOfLeafNodes() {
        return this.getLeafNodes(this.root, 0);
    }

    getSumOfNonLeafNodes() {
        return this.getNonLeafNodes(this.root, 0);
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
bst.delete(20);
bst.display();
console.log(bst.delete(10)); // delete root
bst.display();
console.log("Sum of Leaf Nodes", bst.getSumOfLeafNodes());
console.log("Sum of Non-Leaf Nodes", bst.getSumOfNonLeafNodes());
