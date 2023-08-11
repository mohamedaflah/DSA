class MaxHeap {
  constructor() {
    this.heap = [];
  }

  parentIndex(index) {
    return Math.floor(index - 1 / 2);
  }
  getLeftChildIndex(index) {
    return index * 2 + 1;
  }
  getRightChildIndex(index) {
    return index * 2 + 2;
  }
  insert(value) {
    this.heap.push(value);
    var index = this.heap.length - 1;
    var parent = this.parentIndex(index);

    while (this.heap[index] && this.heap[parent] < this.heap[index]) {
      let temp = this.heap[parent];
      this.heap[parent] = this.heap[index];
      this.heap[parent] = temp;

      index = this.parentIndex(index);
      parent = this.parentIndex(index);
    }
  }
}
function heapSort(ar) {
  var sorted = [];
  var heap1 = new MaxHeap();

  for (let i = 0; i < ar.length; i++) {
    heap1.insert(ar[i]);
  }

  for (let i = 0; i < ar.length; i++) {
    sorted.push(heap1.heap.pop());
  }
  return sorted;
}

let ar=[1,6,2,6,2,6,34,6,23,-9,4];
console.log(heapSort(ar));