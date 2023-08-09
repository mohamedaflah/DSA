//    Formulas :-{
//        Getting Left child index = 2i+1
//        Getting right child index = 2i+2
//        Getting parent childe index = i-(1/2)
//     }

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  getParentChildIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  // check node has left child
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) > this.heap.length;
  }

  // check node has right child
  hasRightChild(index) {
    return this.getRightChildIndex(index) > this.heap.length;
  }
  heapUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      let parentIndex = this.getParentChildIndex(currentIndex);
      if (this.heap[currentIndex] > this.heap[parentIndex]) {
        // Swapping two values
        let temp = currentIndex;
        currentIndex = parentIndex;
        parentIndex = temp;
      } else {
        break;
      }
    }
  }
  insert(value) {
    this.heap.push(value);
    this.heapUp();
  }
  peek() {
    return this.heap[0];
  }
}
const heap=new MaxHeap();
heap.insert(10)
heap.insert(4)
heap.insert(43)
heap.insert(12)
heap.insert(8)
heap.insert(44)

console.log(heap.heap)