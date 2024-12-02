class Heap {
  constructor() {
    this.heap = [];
  }
  getLeftChildIndex(index) {
    return index * 2 + 1;
  }
  getRightChildIndex(index) {
    return index * 2 + 2;
  }
  getParentChildIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  buidHeap() {
    for (let i = this.getParentChildIndex(this.heap.length - 1); i >= 0; i--) {
      this.shiftDown(i);
    }
  }
  shiftDown(currentIdx) {
    let endIdx = this.heap.length - 1;
    let leftIdx = this.getLeftChildIndex(currentIdx);
    while (leftIdx <= endIdx) {
      let rightIdx = this.getRightChildIndex(currentIdx);
      let ShiftIdx;
      if (rightIdx <= endIdx && this.heap[rightIdx] < this.heap[leftIdx]) {
        ShiftIdx = rightIdx;
      } else {
        ShiftIdx = leftIdx;
      }
      if (this.heap[currentIdx] > this.heap[ShiftIdx]) {
        // Swap Operation
        [this.heap[currentIdx], this.heap[ShiftIdx]] = [
          this.heap[ShiftIdx],
          this.heap[currentIdx],
        ];
        currentIdx = ShiftIdx;
      } else {
        return;
      }
      leftIdx=this.getRightChildIndex(currentIdx)
    }
  }
  shifUp(currentIdx) {
    let parentIdx = this.getParentChildIndex(currentIdx);
    while (this.heap[parentIdx] > this.heap[currentIdx] && currentIdx > 0) {
      [this.heap[parentIdx], this.heap[currentIdx]] = [
        this.heap[currentIdx],
        this.heap[parentIdx],
      ];
      currentIdx = parentIdx;
      parentIdx = this.getParentChildIndex(currentIdx);
    }
  }
  remove() {
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    this.heap.pop();
    this.shiftDown(0);
  }
  insert(value) {
    this.heap.push(value);
    this.shifUp(this.heap.length - 1);
  }
  display() {
    console.log(this.heap.toString());
  }
  peek() {
    return this.heap[0];
  }
}

const myheap = new Heap();
myheap.insert(6);
myheap.insert(2);
myheap.insert(8);
myheap.insert(1);
myheap.insert(5);
myheap.insert(15);
myheap.buidHeap();
myheap.display();
myheap.remove();
myheap.display();
console.log(`Peek value ${myheap.peek()}`);
