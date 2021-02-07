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

    findSmallestRightNode(node, parentNode, isLeftNode = false) {
        if (!parentNode) parentNode = node;
        if (node.left) {
            var { parentOfNodeToDelete, nodeToDelete, isLeftNode } = this.findSmallestRightNode(node.left, node, true);
        } else if (node.right) {
            var { parentOfNodeToDelete, nodeToDelete, isLeftNode } = this.findLargestLeftNode(node.right, node, false);
        }
        return {
            parentOfNodeToDelete: parentOfNodeToDelete || parentNode,
            nodeToDelete: nodeToDelete || node,
            isLeftNode
        };
    }

    findLargestLeftNode(node, parentNode, isLeftNode = true) {
        if (!parentNode) parentNode = node;
        if (node.right) {
            var { parentOfNodeToDelete, nodeToDelete, isLeftNode } = this.findLargestLeftNode(node.right, node, false);
        } else if (node.left) {
            var { parentOfNodeToDelete, nodeToDelete, isLeftNode } = this.findSmallestRightNode(node.left, node, true);
        }
        return {
            parentOfNodeToDelete: parentOfNodeToDelete || parentNode,
            nodeToDelete: nodeToDelete || node,
            isLeftNode
        };
    }

    delete(value) {
        var { parentRefNode, node, isLeftNode } = this.findNode(this.root, this.root, value);
        var nodeValToBeDeleted = null;
        if (node) {
            if (this.isLeafNode(node)) {
                nodeValToBeDeleted = node.value;
                this.makeParentsChildEmpty(parentRefNode, isLeftNode);
            } else {
                if (node.right) {
                    var { parentOfNodeToDelete, nodeToDelete, isLeftNode } = this.findSmallestRightNode(node);
                } else {
                    var { parentOfNodeToDelete, nodeToDelete, isLeftNode } = this.findLargestLeftNode(node);
                }
                console.log(parentOfNodeToDelete.value, nodeToDelete.value, isLeftNode);
                // nodeToDelete will always be a leaf nodeF
                nodeValToBeDeleted = node.value;
                node.value = nodeToDelete.value;
                this.makeParentsChildEmpty(parentOfNodeToDelete, isLeftNode);
            }
            return nodeValToBeDeleted;
        } else {
            console.log('Node not found!');
        }
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
bst.root;
bst.delete(20);
bst.root;
