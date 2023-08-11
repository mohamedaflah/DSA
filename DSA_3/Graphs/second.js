class Graph {
  constructor() {
    this.map = new Map();
  }

  Insert(vertex, edge, isBidirectional) {
    if (!this.map.has(vertex)) {
      this.#addVertex(vertex);
    }

    if (!this.map.has(edge)) {
      this.#addVertex(edge);
    }

    this.map.get(vertex).push(edge);
    if (isBidirectional) {
      this.map.get(edge).push(vertex);
    }
  }

  #addVertex(value) {
    this.map.set(value, []);
  }

  Display() {
    for (const [vertex, edges] of this.map.entries()) {
      console.log(`${vertex} -> ${edges.join(", ")}`);
    }
  }
}

// Usage
const myGraph = new Graph();
myGraph.Insert(3, 5, true);
myGraph.Insert(5, 6, true);
myGraph.Insert(3,10,false)

myGraph.Display();
