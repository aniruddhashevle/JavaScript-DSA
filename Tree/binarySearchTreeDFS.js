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



function removeIslands(matrix) {
    let checkForM = [], n = matrix.length - 1, m = matrix[0].length - 1;
    // checkForM = targeted cords
    for (var i = 1; i < n; i++) {
        for (var j = 1; j < m; j++) {
            if (matrix[i][j]) checkForM.push([i, j]);
        }
    }
    var visited = [], isIsland = false;
    for (var i = 0; i < checkForM.length; i++) {
        if (visited.length > 0 && isNotVisited(visited, matrix, checkForM[i])) {
            visited.push({ cords: checkForM[i], isIsland: false });
            isIsland = checkAdj(checkForM[i], visited, matrix, false);
            if (isIsland) {
                matrix[cords[0]][cords[1]] = 0;
            }
        }
    }
    return matrix;
}

function isNotVisited(visited, matrix, cords) {
    return visited.find(x => JSON.stringify(x.cords) === JSON.stringify(matrix[cords[0]][cords[1]]));
}

function checkAdj(cords, visited, matrix, isIsland) {
    var adjCords = getAdjCords(cords, matrix);
    if (adjCords.length) {
        //if(!isIsland) {
        // check for an edge => not an island
        isIsland = !adjCords.find(x =>
            x.find(y => y === 0)
        );
        //}
        for (var i = 0; i < adjCords.length; i++) {
            var details = isNotVisited(visited, matrix, adjCords[i]);
            if (!details) {
                visited.push({ cords: adjCords[i], isIsland });
                isIsland = checkAdj(checkForM[i], visited, matrix, isIsland);
                if (isIsland) {
                    matrix[cords[0]][cords[1]] = 0;
                }
            }
        }
    } else {
        return false;
    }
    return isIsland;
}

// Do not edit the line below.
exports.removeIslands = removeIslands;




function boggleBoard(board, words) {
    let result = [], n = board.length, m = board[0].length;
    let flatBoard = board.flat();
    for (var i = 0; i < words.length; i++) {
        let word = words[i], j = 0;
        let letter = word[j];
        let letterIndex = flatBoard.findIndex(x => x === letter);
        if (letterIndex === -1) continue;
        else {
            j++;
            letterIndex = [Math.floor(letterIndex / m), letterIndex % m];
            let found = checkAdj(letterIndex, j, word, board);
            if (found) result.push(word);
        }
    }
    return result;
}

function checkAdj(letterIndex, wordIndexToFind, word, board) {
    let allAdjLetters = getAdjLetters(letterIndex, board);
    var foundLetterDetails = allAdjLetters.find(x => x.letter === word[wordIndexToFind]);
    if (foundLetterDetails) {
        if (wordIndexToFind < word.length) {
            wordIndexToFind++;
        } else {
            return true;
        }
        let found = checkAdj(foundLetterDetails.cords, wordIndexToFind, word, board);
        if (found) return true;
    } else return false;
}

function getAdjLetters(letterIndex, board) {
    let i = letterIndex[0], j = letterIndex[1], allLetters = [];
    if (board[i + 1]) {
        allLetters.push({ letter: board[i + 1][j], cords: [i + 1, j] });
        if (board[j + 1]) allLetters.push({ letter: board[i + 1][j + 1], cords: [i + 1, j + 1] });
    }
    if (board[i - 1]) {
        allLetters.push({ letter: board[i - 1][j], cords: [i - 1, j] });
        if (board[j - 1]) allLetters.push({ letter: board[i - 1][j - 1], cords: [i - 1, j - 1] });
    }
    if (board[j + 1]) {
        allLetters.push({ letter: board[i][j + 1], cords: [i, j + 1] });
        if (board[i - 1]) allLetters.push({ letter: board[i - 1][j + 1], cords: [i - 1, j + 1] });
    }
    if (board[j - 1]) {
        allLetters.push({ letter: board[i][j - 1], cords: [i, j - 1] });
        if (board[i + 1]) allLetters.push({ letter: board[j - 1][i + 1], cords: [j - 1, i + 1] });
    }
    return allLetters;
}

// Do not edit the line below.
exports.boggleBoard = boggleBoard;
