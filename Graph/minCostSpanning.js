class Graph {
    vertices = [];
    graphArray = [];

    insertVertices(vertices) {
        this.vertices = vertices;
        this.graphArray = [...new Array(vertices.length)].map(_ => Array(vertices.length).fill(0));
    }

    addEdge(fromVertex, toVertex, weight) {
        let fromVertexIndex = this.vertices.findIndex(vertex => vertex === fromVertex);
        let toVertexIndex = this.vertices.findIndex(vertex => vertex === toVertex);
        this.graphArray[fromVertexIndex][toVertexIndex] = weight;
        this.graphArray[toVertexIndex][fromVertexIndex] = weight;
    }

    display() {
        console.log('data', this.graphArray);
    }

    minCostSpan() {
        var distance = [...new Array(this.vertices.length)].fill(Infinity);
        var visited = [...new Array(this.vertices.length)].fill(0);
        var path = [...new Array(this.vertices.length)].fill(0);
        var { distance, visited, path } = this.transverseNode(distance, visited, path);
        this.buildMCST(distance, path);
        return distance.reduce((sum, minCost) => minCost + sum)
    }

    transverseNode(distance, visited, path) {
        for (var row = 0; row < this.graphArray.length; row++) {
            this.updateCosts(row, distance, visited, path);
        }
        return { distance, visited, path };
    }

    updateCosts(row, distance, visited, path) {
        visited[row] = 1;
        if (row === 0) distance[row] = 0;
        let rowData = this.graphArray[row];
        for (var col = 0; col < rowData.length; col++) {
            if (rowData[col] > 0 && rowData[col] < distance[row]) {
                distance[row] = rowData[col];
                path[row] = this.vertices[col];
            }
        }
    }

    buildMCST(distance, path) {
        var mcst = new Graph();
        mcst.insertVertices(this.vertices);
        for (var edge = 0; edge < path.length; edge++) {
            mcst.addEdge(this.vertices[edge], path[edge] || this.vertices[edge], distance[edge]);
        }
        mcst.display();
    }
}

const graph = new Graph();
graph.insertVertices([1, 2, 3, 4, 5, 6]);
graph.addEdge(1, 2, 1);
graph.addEdge(1, 6, 2);
graph.addEdge(1, 3, 10);
graph.addEdge(2, 6, 2);
graph.addEdge(2, 4, 15);
graph.addEdge(4, 6, 8);
graph.addEdge(4, 5, 6);
graph.addEdge(5, 6, 4);
graph.addEdge(5, 3, 6);
var minCost = graph.minCostSpan();
console.log("Minimum cost", minCost);