// /**
//  * Graph using 2D array
//  */
// class Graph {
//     graphArray = [
//         // [0, 0, 0, 1, 1, 0, 0],
//         // [0, 1, 0, 0, 1, 1, 0],
//         // [1, 1, 0, 1, 0, 0, 1],
//         // [0, 0, 0, 0, 0, 1, 0],
//         // [1, 1, 0, 0, 0, 0, 0],
//         // [0, 0, 0, 1, 0, 0, 0]
//     ];
//     vertices = [];

//     insertVertices(list) {
//         this.vertices = list;
//         for (let i = 0; i < this.vertices.length; i++) {
//             this.graphArray[i] = [];
//             for (let j = 0; j < this.vertices.length; j++) {
//                 this.graphArray[i][j] = 0;
//             }
//         }
//     }

//     addEdge(from, to) {
//         let fromVertex = this.vertices.indexOf(from);
//         let toVertex = this.vertices.indexOf(to);
//         this.graphArray[fromVertex][toVertex] = 1;
//         this.graphArray[toVertex][fromVertex] = 1;
//     }

//     display() {
//         console.log('this', this.graphArray)
//     }

//     /**
//      * 
//      * visited = [[0,0], ]
//      */
//     findAdj(current) {
//         let row = current[0], col = current[1];
//         let allCords = [
//             [row + 1, col],
//             [row - 1, col],
//             [row, col + 1],
//             [row, col - 1],
//             [row - 1, col - 1],
//             [row + 1, col + 1],
//             [row - 1, col + 1],
//             [row + 1, col - 1],
//         ];
//         return allCords.filter(([rowVal, colVal]) => this.graphArray[rowVal] && this.graphArray[rowVal][colVal]);
//     }

//     isVisitedCell(current, visited) {
//         return visited.length ? visited.findIndex(visitedCord => JSON.stringify(visitedCord) === JSON.stringify(current)) !== -1 : false;
//     }

//     getConnectedSize(rowLength, colLength, current, visited, size) {
//         if (this.isVisitedCell(current, visited)) {
//             return size;
//         }
//         visited.push(current);
//         let allCords = this.findAdj(current);
//         if (allCords.length) {
//             for (let cord = 0; cord < allCords.length; cord++) {
//                 if (!this.isVisitedCell(allCords[cord], visited)) {
//                     size = this.getConnectedSize(rowLength, colLength, allCords[cord], visited, size + 1);
//                 }
//             }
//         }
//         return size;
//     }

//     maxSize() {
//         let rowLength = this.graphArray.length;
//         let colLength = this.graphArray[0].length;
//         let visited = [];
//         let sizes = [];
//         for (let row = 0; row < rowLength; row++) {
//             for (let col = 0; col < colLength; col++) {
//                 if (this.graphArray[row][col] && !this.isVisitedCell([row, col], visited)) {
//                     let size = this.getConnectedSize(rowLength, colLength, [row, col], visited, 1);
//                     sizes.push(size);
//                 }
//             }
//         }
//         console.log('sizes', sizes)
//         return sizes.length ? Math.max(...sizes) : 0;
//     }
// }

// var g = new Graph();
// g.insertVertices(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']);
// g.addEdge('A', 'B');
// g.addEdge('A', 'C');
// g.addEdge('A', 'D');
// g.addEdge('C', 'D');
// g.addEdge('C', 'G');
// g.addEdge('D', 'G');
// g.addEdge('D', 'H');
// g.addEdge('B', 'E');
// g.addEdge('B', 'F');
// g.addEdge('E', 'I');
// g.display();
// console.log(g.maxSize());


/**
 * Graph using 2D array
 */
class Graph {
    graphArray = [
        // [0, 0, 0, 1, 1, 0, 0],
        // [0, 1, 0, 0, 1, 1, 0],
        // [1, 1, 0, 1, 0, 0, 1],
        // [0, 0, 0, 0, 0, 1, 0],
        // [1, 1, 0, 0, 0, 0, 0],
        // [0, 0, 0, 1, 0, 0, 0]
    ];
    vertices = [];

    insertVertices(list) {
        this.vertices = list;
        for (let i = 0; i < this.vertices.length; i++) {
            this.graphArray[i] = [];
            for (let j = 0; j < this.vertices.length; j++) {
                this.graphArray[i][j] = 0;
            }
        }
    }

    addEdge(from, to) {
        let fromVertex = this.vertices.indexOf(from);
        let toVertex = this.vertices.indexOf(to);
        this.graphArray[fromVertex][toVertex] = 1;
        this.graphArray[toVertex][fromVertex] = 1;
    }

    display() {
        console.log('this', this.graphArray)
    }

    /**
     * 
     * visited = [[0,0], ]
     */
    findAdj(current) {
        let row = current[0], col = current[1];
        let allCords = [
            [row + 1, col],
            [row - 1, col],
            [row, col + 1],
            [row, col - 1],
            [row - 1, col - 1],
            [row + 1, col + 1],
            [row - 1, col + 1],
            [row + 1, col - 1],
        ];
        return allCords.filter(([rowVal, colVal]) => this.graphArray[rowVal] && this.graphArray[rowVal][colVal]);
    }

    getConnectedSize(current, size) {
        this.graphArray[current[0]][current[1]] = 0;
        let allCords = this.findAdj(current);
        if (allCords.length) {
            for (let cord = 0; cord < allCords.length; cord++) {
                size = this.getConnectedSize(allCords[cord], size + 1);
            }
        }
        return size;
    }

    maxSize() {
        let rowLength = this.graphArray.length;
        let colLength = this.graphArray[0].length;
        let sizes = [];
        for (let row = 0; row < rowLength; row++) {
            for (let col = 0; col < colLength; col++) {
                if (this.graphArray[row][col]) {
                    let size = this.getConnectedSize([row, col], 1);
                    sizes.push(size);
                }
            }
        }
        console.log('sizes', sizes)
        return sizes.length ? Math.max(...sizes) : 0;
    }
}

var g = new Graph();
g.insertVertices(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']);
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('A', 'D');
g.addEdge('C', 'D');
g.addEdge('C', 'G');
g.addEdge('D', 'G');
g.addEdge('D', 'H');
g.addEdge('B', 'E');
g.addEdge('B', 'F');
g.addEdge('E', 'I');
g.display();
console.log(g.maxSize());



function isToeplitz(arr) {
    /**
    @param arr: integer[][]
    @return: boolean
  [[1,2,3,4],
 [5,1,2,3],
 [6,5,1,2]]
    */
    let rowLen = arr.length;
    let colLen = arr[0].length;
    if (rowLen && colLen) {
        let checkCell = 0;
        while (checkCell < colLen - 1) {

        }
    } else {
        return false;
    }
}



function isToeplitz(arr) {
    arr = [[1, 2, 3, 4],
    [5, 1, 2, 3],
    [6, 5, 1, 2]];

    let rowLen = arr.length; // 3
    let colLen = arr[0].length; // 4
    if (rowLen && colLen) {
        let cellToCheck = rowLen - 2;
        while (cellToCheck >= 0) { // check rows
            let diagonal = [], row = cellToCheck, col = 0;
            while (arr[row] && arr[row][col] != undefined) {
                diagonal.push(arr[row][col]);
                row++;
                col++;
            }
            let set = [...new Set(diagonal)];
            if (set.length !== 1) return false;
            cellToCheck--;
        }
        cellToCheck = 1;
        while (cellToCheck < colLen - 1) {
            let diagonal = [], row = 0, col = cellToCheck;
            while (arr[row] && arr[row][col] != undefined) {
                diagonal.push(arr[row][col]);
                row++;
                col++;
            }
            let set = [...new Set(diagonal)];
            if (set.length !== 1) return false;
            cellToCheck++;
        }

    } else return false;
    return true;
}
