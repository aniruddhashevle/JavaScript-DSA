/**
 * 
 */
function findPossibleWays(n) {
    // 2D arrays with 0 values
    let pathMatrix = [...new Array(n)].map(_ => [...new Array(n)].fill(0));
    // add obstacles by initiating a cell value to -1
    pathMatrix = pathMatrix.map((row, rowIndex) =>
        row.map((col, colIndex) => {
            return colIndex < n - 1 - rowIndex ? -1 : col;
        })
    );
    const START = [n - 1, 0];
    const DEST = [0, n - 1];
    return findAllWays(START, DEST, 0, pathMatrix, n);
}

function findAllWays(START, DEST, sum, pathMatrix, n) {
    for (let col = DEST[1]; col >= 0; col--) {
        for (let row = DEST[0]; row < n; row++) {
            while (row !== START[0] && col !== START[1]) {
                if (col === n - 1) { // last colum elements
                    pathMatrix[col][row] = 1;
                } else if (row === col) { // diagonal elements
                    pathMatrix[col][row] = pathMatrix[col+1][row];
                } else {
                    pathMatrix[col][row] = pathMatrix[col+1][row] + pathMatrix[col][row-1];
                }
            }
        }
    }
    return sum;
}

findPossibleWays(6);