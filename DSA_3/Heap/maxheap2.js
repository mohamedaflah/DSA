function insertMaxHeap(heap, value) {
  heap.push(value);
  hepifyUp(heap, heap.length - 1);
}

function hepifyUp(heap, index) {
  const parentIndex = Math.floor((index - 1) / 2);
  if (parentIndex >= 0 && heap[index] > heap[parentIndex]) {
    let temp = heap[index];
    heap[index] = heap[parentIndex];
    heap[parentIndex] = temp;
    hepifyUp(heap, parentIndex);
  }
}

function buildMaxHeap(array) {
  const heap = [];
  for (let value of array) {
    insertMaxHeap(heap, value);
  }
  return heap;
}

const values = [4, 10, 3, 5, 1];
const maxHeap=buildMaxHeap(values)
console.log(maxHeap);
