class GRAPH {
  constructor() {
    this.adjacencyList = {};
  }

  VertexAdding(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  EdgeAdding(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.VertexAdding(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.VertexAdding(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }
  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " - >" + [...this.adjacencyList[vertex]]);//*
    }
  }
  // Deapth-First Search (DFS)

  DFS(startVertex) {
    const visited = new Set();
    this.#DFSHelper(startVertex, visited);
  }
  #DFSHelper(vertex, visited) {
    visited.add(vertex);
    console.log(vertex);

    for (const neighbor of this.adjacencyList[vertex]) {
      if (!visited.has(neighbor)) {
        this.#DFSHelper(neighbor, visited);
      }
    }
  }
  BFS(startVertex) {
    const visited = new Set();
    const queue = [startVertex];
    visited.add(startVertex);

    while (queue.length > 0) {
      const currentVertex = queue.shift();
      console.log(currentVertex);

      for (const neighbor of this.adjacencyList[currentVertex]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
        }
      }
    }
  }
}

const grph = new GRAPH();
grph.VertexAdding("A");
grph.VertexAdding("B");
grph.VertexAdding("C");
grph.VertexAdding("D");
grph.EdgeAdding("A", "B");
grph.EdgeAdding("B", "C");
grph.EdgeAdding("D", "C");
grph.display();

console.log(grph.hasEdge("A", "c"));

console.log("DFS");
grph.DFS("A");

console.log("BFS");
grph.BFS("B");
