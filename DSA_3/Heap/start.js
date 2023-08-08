class MinHeap {
  constructor() {
    this.heap = [];
  }
  getParentIndex(index) {
    //" i-(1/2)  " this is the formula finding parent index
    return Math.floor((index - 1) / 2);
  }
  getLeftChildIndex(index) {
    //" 2i+1 " this is the formula of finding left child index
    return 2 * index + 1;
  }
  getRightChildIndex(index) {
    //" 2i+2 " this is the formul of finding right child index
    return 2 * index + 2;
  }

  // Check if a node has a left child or right child
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  // Swap two elements in the heap
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  // Add an element to the heap

  insert(value) {
    this.heap.push(value);
    this.heapUp();
  }

  // Restore the heap property by moving an element up ⬆
  heapUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);
      if (this.heap[currentIndex] < this.heap[parentIndex]) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  // Get the minimum element ( root of the heap )
  peek() {
    return this.heap[0];
  }

  // Remove and return the minimum element

  remove() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapDown();
  }

  // Restore the heap property by moving an element down
  heapDown() {
    let currentIndex = 0;

    while (this.hasLeftChild(currentIndex)) {
      const smallerChildIndex = this.getLeftChildIndex(currentIndex);
      if (
        this.hasRightChild(currentIndex) &&
        this.heap[this.getRightChildIndex(currentIndex)] <
          this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = this.getRightChildIndex(currentIndex);
      }
      if (this.heap[currentIndex] < this.heap[smallerChildIndex]) break;

      this.swap(currentIndex, smallerChildIndex);
      currentIndex = smallerChildIndex;
    }
  }

  // Getting Size of Heap
  getSize() {
    return this.heap.length;
  }

  // Check if the heap is empty or not
  isEmpty() {
    return this.heap.length === 0;
  }
}

const minHeap = new MinHeap();
minHeap.insert(5);
minHeap.insert(10);
minHeap.insert(3);
minHeap.insert(7);

console.log("Min Heap :",minHeap.heap);
