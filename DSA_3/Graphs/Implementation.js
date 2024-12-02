class Graph {
  constructor() {
    this.vertices = new Map();
  }
  addVertext(vertex) {
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
  getVertices() {
    return Array.from(this.vertices.keys());
  }
  getEdges(vertex) {
    if (this.vertices.has(vertex)) {
      return this.vertices.get(vertex);
    }
    return [];
  }
  display(){
    for(const [vertex,edges] of this.vertices){
        console.log(`${vertex} -> ${edges.join(', ')}`);
    }
  }
}

const graph = new Graph();

graph.addVertext("A");
graph.addVertext("B");
graph.addVertext("C");
graph.addVertext("D");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "A");

console.log("vertices :", graph.getVertices());
console.log("Edges for A:", graph.addEdge("A"));
console.log("Edges for C", graph.getEdges("C"));
graph.display()