// const graph = new Graph();
// const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; //	{12}
// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('A', 'D');
// graph.addEdge('C', 'D');
// graph.addEdge('C', 'G');
// graph.addEdge('D', 'G');
// graph.addEdge('D', 'H');
// graph.addEdge('B', 'E');
// graph.addEdge('B', 'F');
// graph.addEdge('E', 'I');
/**
 * Graph using 2D array
 */
class Graph {
    graphArray = [];
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

    getBFS() {
        let queue = [], visited = [], graphArray = this.graphArray;
        if (graphArray?.length) {
            let l = 0;
            let root = this.vertices[l];
            queue.push(root);
            while (queue.length !== 0) {
                if (!visited.includes(queue[0])) {
                    visited.push(queue.shift());
                    for (var i = 0; i < this.vertices.length; i++) {
                        let hasEdge = graphArray[l][i], edge = this.vertices[i];
                        if (hasEdge && !queue.includes(edge) && !visited.includes(edge)) {
                            queue.push(edge);
                        }
                    }
                }
                l++;
            }
        }
        return visited;
    }

    bfs() {
        return this.getBFS();
    }

    display() {
        for (let i = 0; i < this.vertices.length; i++) {
            for (let j = 0; j < this.vertices.length; j++) {
                console.log(`${i} and ${j}`, this.graphArray[i][j]);
            }
        }
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
g.bfs();


function riverSizes(matrix) {
    let visited = [], n = matrix.length, result = [];
    for (let i = 0; i < n; i++) {
        count = 0;
        for (let j = 0; j < n; j++) {
            if (!visited.includes([i, j])) {
                if (matrix[i][j]) {
                    count++;
                    visited.push([i, j]);
                    var {
                        count,
                        visited,
                    } = checkAdj(matrix, n, visited, count, i, j);
                }
            }
        }
        result.push(count);
    }
}

function checkAdj(matrix, n, visited, count, i, j)) {
    let times = 4, k = j, l = i;
    if (j - 1 > -1) k = j - 1;
    else {
        times--;
        k = j + 1;
    }
    while (times > 0) {
        if (matrix[l][k] && !visited.includes([l, k])) {
            count++;
            visited.push([l, k]);
            var {
                count,
                visited,
            } = checkAdj(matrix, n, visited, count, l, k);
        }
        if (k = j - 1) { k = j + 1 }
        else if (k = j + 1) {
            k = j;
            if (i - 1 > -1) l = i - 1;
            else {
                times--;
                l = i + 1;
            }

        }
        if (l = i - 1) { l = i + 1 }
        else if (l = i + 1) { l = i }
        times--;
    }
    return {
        count,
        visited,
    };
}



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
        if (isNotVisited(visited, matrix, checkForM[i])) {
            visited.push({ cords: checkForM[i, isIsland: false}]);
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
