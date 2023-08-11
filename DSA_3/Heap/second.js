class MinHeap {
  constructor() {
    this.heap = [];
  }
  getParentChildIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }
  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  shiftDown(index) {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightIndex = this.getRightChildIndex(index);

    let smallest = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] < this.heap[smallest]
    ) {
      smallest = leftChildIndex;
    }
    if (
      rightIndex < this.heap.length &&
      this.heap[rightIndex] < this.heap[smallest]
    ) {
      if (smallest !== index) {
        this.swap(index, smallest);
      }
    }
  }
  shiftUp(index) {
    const parentIndex = this.getParentChildIndex(index);

    if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }

  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }

  exactMin() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);

    return minValue;
  }
}

const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(15);
minHeap.insert(20);
minHeap.insert(8);

console.log(minHeap.exactMin());
console.log(minHeap.exactMin());
console.log(minHeap.exactMin());
