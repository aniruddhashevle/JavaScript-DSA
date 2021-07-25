eal/**
 * BST using LinkedList
 * 
 * insert
 * delete
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
console.log(bst.delete(10)); // delete root
bst.display();
// DFS : Queue










let A = [1, 3, 6, 4, 1, 2, -2];
A = [];

function solution(A) {
    let updatedArray = A.sort((a, b) => a - b);
    updatedArray = [...new Set(updatedArray)];
    updatedArray = updatedArray.filter(elem => elem > 0);
    if (updatedArray.length === 0) {
        return 1;
    } else {
        let iterator = 0, arrayLen = updatedArray.length;
        for (iterator = 0; iterator < arrayLen; iterator++) {
            if (iterator + 1 !== updatedArray[iterator]) {
                return iterator + 1;
                break;
            }
        }
        return updatedArray[arrayLen - 1] + 1;
    }
}
console.log(solution(A));







/**
 * Follow is O(n*n)
 */
function nonRepeatingChar(str) {
    let checked = {};
    if (str) {
        for (let count = 0; count < str.length; count++) {
            if (checked.hasOwnProperty(str[count])) {
                checked[str[count]] = checked[str[count]] + 1;
            } else {
                if (count === str.lastIndexOf(str[count])) {
                    return str[count];
                } else {
                    checked[str[count]] = 1;
                }
            }
            console.log('hittt', count);
        }
        return "";
    } else return "";
}

/**
 * Follow is O(n)
 */
function nonRepeatingChar(str) {
    let checked = {};
    if (str) {
        for (let count = 0; count < str.length; count++) {
            if (checked.hasOwnProperty(str[count])) {
                checked[str[count]] = checked[str[count]] + 1;
            } else {
                checked[str[count]] = 1;
            }
        }
        let result = '';
        Object.keys(checked).find(item => {
            if(checked[item] === 1) {
                result = item;
            }
        });
        return result;
    } else return "";
}
console.log('nonRepeatingChar', nonRepeatingChar('abadbaa'));