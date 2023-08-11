class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
  
    getLeftChildIndex(index) {
      return 2 * index + 1;
    }
  
    getRightChildIndex(index) {
      return 2 * index + 2;
    }
  
    hasParent(index) {
      return this.getParentIndex(index) >= 0;
    }
  
    hasLeftChild(index) {
      return this.getLeftChildIndex(index) < this.heap.length;
    }
  
    hasRightChild(index) {
      return this.getRightChildIndex(index) < this.heap.length;
    }
  
    parent(index) {
      return this.heap[this.getParentIndex(index)];
    }
  
    leftChild(index) {
      return this.heap[this.getLeftChildIndex(index)];
    }
  
    rightChild(index) {
      return this.heap[this.getRightChildIndex(index)];
    }
  
    swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  
    peek() {
      if (this.heap.length === 0) {
        return null;
      }
      return this.heap[0];
    }
  
    poll() {
      if (this.heap.length === 0) {
        return null;
      }
  
      const item = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      return item;
    }
  
    add(item) {
      this.heap.push(item);
      this.heapifyUp();
    }
  
    heapifyUp() {
      let index = this.heap.length - 1;
      while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
        const parentIndex = this.getParentIndex(index);
        this.swap(parentIndex, index);
        index = parentIndex;
      }
    }
  
    heapifyDown() {
      let index = 0;
      while (this.hasLeftChild(index)) {
        let smallerChildIndex = this.getLeftChildIndex(index);
        if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
          smallerChildIndex = this.getRightChildIndex(index);
        }
  
        if (this.heap[index] < this.heap[smallerChildIndex]) {
          break;
        } else {
          this.swap(index, smallerChildIndex);
        }
        index = smallerChildIndex;
      }
    }
  }
  
  class PriorityQueue {
    constructor() {
      this.minHeap = new MinHeap();
    }
  
    isEmpty() {
      return this.minHeap.heap.length === 0;
    }
  
    peek() {
      return this.minHeap.peek();
    }
  
    enqueue(item) {
      this.minHeap.add(item);
    }
  
    dequeue() {
      return this.minHeap.poll();
    }
  }
  
  // Example usage:
  const pq = new PriorityQueue();
  pq.enqueue(5);
  pq.enqueue(10);
  pq.enqueue(3);
  pq.enqueue(7);
  console.log(pq.dequeue()); // Output: 3
  console.log(pq.dequeue()); // Output: 5
  