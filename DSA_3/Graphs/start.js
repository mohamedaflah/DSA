class Graph {
  constructor() {
    this.vertices = new Map(); // Map of vertices to their neighbours
  }

  addVertex(vertex) {
    if (!this.vertices.has(vertex)) {
      this.vertices.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
      this.vertices.get(vertex1).push(vertex2);
      this.vertices.get(vertex2).push(vertex1);
    }
  }

  BFS(startVertext) {
    // BFS means Breadth First Search

    const visited = new Set();
    const queue = [startVertext];
    const result = [];

    visited.add(startVertext);

    while (queue.length > 0) {
      const current = queue.shift();
      result.push(current);

      for (const neighbour of this.vertices.get(current)) {
        if (!visited.has(neighbour)) {
          visited.add(neighbour);
          queue.push(neighbour);
        }
      }
    }

    return result;
  }

  DFS(startVertext) {
    // DFS means Deapth First Search
    const visited = new Set();
    const result = [];

    const dfsHelper = (vertex) => {
      visited.add(vertex);
      result.push(vertex);

      for (const neighbour of this.vertices.get(vertex)) {
        if (!visited.has(neighbour)) {
          dfsHelper(neighbour);
        }
      }
    };
    dfsHelper(startVertext);
    return result;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "A");

console.log(`Display Graph in BFS ( Breadth First Search )`);
console.log(graph.BFS("A"));

console.log(`Display Graph in DFS ( Deapth First Search )`);
console.log(graph.DFS("A"));
