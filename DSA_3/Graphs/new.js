class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertext(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertext2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertext(vertex1);
    }

    if (!this.adjacencyList[vertext2]) {
      this.addVertext(vertext2);
    }
    this.adjacencyList[vertex1].add(vertext2);
    this.adjacencyList[vertext2].add(vertex1);
  }
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
    }
  }
  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has[vertex2] &&
      this.adjacencyList[vertex2].has[vertex1]
    );
  }
}
const graph = new Graph();
graph.addVertext("A");
graph.addVertext("B");
graph.addVertext("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

graph.display();
