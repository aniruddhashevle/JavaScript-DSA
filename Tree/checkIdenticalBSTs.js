

// Simpler solution
// Time: Space: O(1)
function checkIdenticalBSTs(tree1, tree2) {
    return JSON.stringify(tree1) === JSON.stringify(tree2);
}

// Transversal approach: May use any 2 of 3 transversal techniques, inorder, preorder and postorder
// Time: O(n) Space: O(n)
function checkIdenticalBSTsUsingTransversal(tree1, tree2) {
    let inorderT1 = tree1.inorder();
    let inorderT2 = tree2.inorder();
    let preorderT1 = tree1.preorder();
    let preorderT2 = tree2.preorder();
    return JSON.stringify(inorderT1) === JSON.stringify(inorderT2) && JSON.stringify(preorderT1) === JSON.stringify(preorderT2);
}

// Pointers solution interative approach
// Time: O(n) Space: O(n)
function checkIdenticalBSTsIteratively(tree1, tree2) {
    var ref1 = tree1, ref2 = tree2;
    return checkIdential(ref1, ref2);
}

/** 
IMP: w/o using BST, just by specifying 2 arrays which will form a proper BST
As BST is not built, we can not make it's transversal, but can use following technique

T: "arrayOne": [10, 15, 8, 12, 94, 81, 5, 2, 11] "arrayTwo": [10, 8, 5, 15, 2, 12, 11, 94, 81]
    1 => 
        leftArrA1 = [8, 5, 2]         rightArrA1 = [15, 12, 94, 81,11]
        leftArrA2 = [8, 5, 2]         rightArrA2 = [15, 12, 11, 94, 81]
    2 =>
        leftArrA1 = [12,11]         rightArrA1 = [94, 81]
        leftArrA2 = [12,11]         rightArrA2 = [94, 81]

    3 =>
        Idential => True


Time: O(n^2) Space: O(n^2)

 */
function sameBsts(arrayOne, arrayTwo) {
    if (JSON.stringify(arrayOne) === JSON.stringify(arrayTwo)) {
        return true;
    } else if (arrayOne[0] !== arrayTwo[0] || arrayOne.length !== arrayTwo.length) {
        return false;
    } else {
        var root = arrayOne[0];
        var leftArrA1 = [], rightArrA1 = [], leftArrA2 = [], rightArrA2 = [];;
        for (var i = 1; i < arrayOne.length; i++) {
            if (arrayOne[i] < root)
                leftArrA1.push(arrayOne[i]);
            else
                rightArrA1.push(arrayOne[i]);
        }
        for (var i = 1; i < arrayTwo.length; i++) {
            if (arrayTwo[i] < root)
                leftArrA2.push(arrayTwo[i]);
            else
                rightArrA2.push(arrayTwo[i]);
        }
        let result = true;
        result = sameBsts(leftArrA1, leftArrA2);
        if (!result) return result;
        else return sameBsts(rightArrA1, rightArrA2);
    }
}

function checkIdential(node1, node2) {
    var isIdentical = true;
    if (node1 !== null && node2 !== null) {
        if (node1.value !== node2.value) {
            return false;
        } else {
            if (node1.left && node2.left) {
                isIdentical = checkIdential(node1.left, node2.left);
                if (!isIdentical) return false;
            } else if ((node1.left && !node2.left) || (!node1.left && node2.left)) {
                return false;
            }
            if (node1.right && node2.right) {
                isIdentical = checkIdential(node1.right, node2.right);
                if (!isIdentical) return false;
            } else if (((node1.right && !node2.right) || (!node1.right && node2.right))) {
                return false;
            }
        }
    } else if ((node1 !== null && node2 === null) || (node1 === null && node2 !== null)) {
        return false;
    }
    return isIdentical;
}

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
        } else if (value >= ref.value) {
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

var bst1 = new BST();
bst1.insert(10);
bst1.insert(15);
bst1.insert(8);
bst1.insert(12);
bst1.insert(94);
bst1.insert(81);
bst1.insert(5);
bst1.insert(2);
bst1.insert(11);

var bst2 = new BST();
bst2.insert(10);
bst2.insert(8);
bst2.insert(5);
bst2.insert(15);
bst2.insert(2);
bst2.insert(12);
bst2.insert(11);
bst2.insert(94);
bst2.insert(81);

console.log("Trees identical simpler way: ", checkIdenticalBSTs(bst1.root, bst2.root));
console.log("Trees identical iterative way: ", checkIdenticalBSTsIteratively(bst1.root, bst2.root));
console.log("Trees identical transversal way: ", checkIdenticalBSTsUsingTransversal(bst1, bst2));

