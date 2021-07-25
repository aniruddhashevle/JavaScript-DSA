/**
 * Approach is to start from the destination and check all the possible way to go to the destination and then adding
 * all the possible approach from the resp cell one by one
 * 
 * REF: https://www.youtube.com/watch?t=254&v=P8Xa2BitN3I&feature=youtu.be
 * 
 
    n = 6, cel with value -1 are obstacles, through which we can not move

    [
        [-1, -1, -1, -1, -1, 0]
        [-1, -1, -1, -1, 1, 1]
        [-1, -1, -1, 2, 2, 1]
        [-1, -1, 5, 5, 3, 1]
        [-1, 14, 14, 9, 4, 1]
        [42, 42, 28, 14, 5, 1]
    ]


    O/p => adding all the possible ways one by one start from destination to the start position give me 42 value at matrix[5, 0],
    for 6x6 matrix

    [
        [-1, -1, -1, -1, -1, 0]
        [-1, -1, -1, -1, 1, 1]
        [-1, -1, -1, 2, 2, 1]
        [-1, -1, 5, 5, 3, 1]
        [-1, 14, 14, 9, 4, 1]
        [42, 42, 28, 14, 5, 1]
    ]
 */
function findPossibleWays(n) {
    // 2D arrays with 0 values
    let pathMatrix = [...new Array(n)].map(_ => [...new Array(n)].fill(0));
    // add obstacles by initiating a cell value to -1
    pathMatrix = pathMatrix.map((row, rowIndex) =>
        row.map((col, colIndex) => colIndex < n - 1 - rowIndex ? -1 : col)
    );
    const START = [n - 1, 0];
    const DEST = [0, n - 1];
    let rowStart = DEST[0];
    for (let col = DEST[1]; col >= 0; col--) {
        for (let row = rowStart; row < n; row++) {
            if (col === DEST[1]) { // last colum elements
                if (row !== DEST[0]) pathMatrix[row][col] = 1;
            } else if (n - 1 - col === row) { // diagonal elements
                pathMatrix[row][col] = pathMatrix[row][col + 1];
            } else {
                pathMatrix[row][col] = pathMatrix[row][col + 1] + pathMatrix[row - 1][col];
            }
        }
        rowStart++;
    }
    return pathMatrix[START[0]][START[1]];
}

findPossibleWays(6);

function decrypt(word) {
    let result = [];
    const fROM_RANGE = "a".charCodeAt(0);
    const TO_RANGE = "z".charCodeAt(0);
    for (var index = 0; index < word.length; index++) {
        let code = word.charCodeAt(index);
        result[index] = index ? code + result[index - 1] : code + 1;
        let data = result[index];
        if (!(data >= fROM_RANGE && data <= TO_RANGE)) {
            let diff = data - TO_RANGE;
            diff = diff % 26;
            result[index] = TO_RANGE - diff;
        }
        result[index] = String.fromCharCode(result[index]);
    }
    return result.join("");
}


function findCommon(s1, s2) {
    let result = [];
    let common;
    for (let i = 0; i < s1.length; i++) {
        let index = s2.indexOf(s1[i]);
        if (index !== -1) {
            common += s1[i];
            j = index;
            k = i + 1;
            while (k < s1.length && j < s2.length) {
                index = s2.indexOf(s1[k], j);
                if (index !== -1) {
                    common += s1[k];
                    j = index;
                }
                k++;
            }
            result.push(common);
        }
    }
    console.log('result', result)
}
