/**
 * Binary Search Tree
 * TODO: Display inorder, preorder and postorder
 * TODO: Delete a node
 * 
 * insert
 * sumOfNonLeaf
 * sumOfLeaf
 */

class TreeNode {
    constructor({ left = null, right = null, value = null }) {
        this.left = left;
        this.right = right;
        this.value = value;
    }
}

class BST {
    root = null;

    compareNodeValue(ref, insertValue) {
        var insertValForNode = insertValue <= ref.value ? ref.left : ref.right;
        if (insertValForNode) {
            this.compareNodeValue(insertValForNode, insertValue);
        } else {
            insertValForNode = new TreeNode({ value: insertValue });
        }
    }

    insert(value) {
        if (this.root === null) {
            this.root = new TreeNode({ value });
        } else {
            this.compareNodeValue(this.root, value);
        }
    }

    // displayNodeVals(ref) {
    //     console.log("Node", ref.value);
    //     if (ref.left) {
    //         this.displayNodeVals(ref.left);
    //     }
    //     if (ref.right) {
    //         this.displayNodeVals(ref.right);
    //     }
    // }

    // TODO display inorder, preorder and postorder
    display() {
        if (this.root) {
            // this.displayNodeVals(this.root);
            console.log('Root', this.root)
        } else {
            console.log('Roots Empty');
        }
    }

    sumOfNonLeaf() {
        var sum = 0;
        if (this.root) {
            sum = this.getSumOfNonLeaf(this.root);
        }
        return sum;
    }

    sumOfLeaf() {
        var sum = 0;
        if (this.root) {
            sum = this.getSumOfLeaf(this.root);
        }
        return sum;
    }

    getSumOfNonLeaf(ref, sum = 0) {
        if (ref.left || ref.right) {
            sum += ref.value;
            if (ref.left) {
                sum = this.getSumOfNonLeaf(ref.left, sum);
            }
            if (ref.right) {
                sum = this.getSumOfNonLeaf(ref.right, sum);
            }
        }
        return sum;
    }

    getSumOfLeaf(ref, sum = 0) {
        if (!ref.left && !ref.right) {
            sum += ref.value;
        } else {
            if (ref.left) {
                sum = this.getSumOfLeaf(ref.left, sum);
            }
            if (ref.right) {
                sum = this.getSumOfLeaf(ref.right, sum);
            }
        }
        return sum;
    }
}

var bst = new BST();
bst.insert(100)
bst.insert(80)
bst.insert(110)
bst.insert(90)
bst.insert(120)
bst.insert(105)
// bst.display();
console.log("sum of non leaf", bst.sumOfNonLeaf());
console.log("sum of leaf", bst.sumOfLeaf());