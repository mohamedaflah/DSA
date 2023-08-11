class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertext(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertext(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertext(vertex2);
    }

    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }
  display() {
    for (const vertex in this.adjacencyList) {
      console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
    }
  }
  DFS(startVertex) {
    const visited = new Set();
    this.#dfsHelp(startVertex, visited);
  }

  #dfsHelp(vertex, visited) {
    visited.add(vertex);
    console.log(vertex);
    for (let neighbor in this.adjacencyList[vertex]) {
      this.#dfsHelp(neighbor, visited);
    }
  }

  BFS(startVertex) {
    let visited = new Set();
    let queue = [startVertex];
    while (queue.length > 0) {
      let currentVertex = queue.shift();
      console.log(currentVertex);
    }
  }
}
const graph = new Graph();
graph.addVertext("A");
graph.addVertext("B");
graph.addVertext("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.display();

graph.DFS("C");
