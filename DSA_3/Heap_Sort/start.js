// function buildMaxHeap(array) {
//   for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
//     heapify(array, i);
//   }
// }

// function heapify(ar, i) {
//   let largest = i;
//   const left = 2 * i + 1;
//   const right = 2 * i + 2;

//   if (left < ar.length && ar[left] > ar[largest]) {
//     largest = left;
//   }

//   if (right < ar.length && ar[right] > ar[largest]) {
//     largest = right;
//   }
//   if (largest !== i) {
//     [ar[i], ar[largest]] = [ar[largest], ar[i]];
//     heapify(ar, largest);
//   }
// }

// function heapSort(arr) {
//   buildMaxHeap(arr);

//   for (let i = arr.length - 1; i > 0; i--) {
//     [arr[0], arr[i]] = [arr[i], arr[0]];
//     heapify(arr, 0);
//   }
// }

// const myarray = [4, 10, 3, 5, 1];
// heapSort(myarray);
// console.log(myarray);

function buildMaxHeap(arr) {
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
}

function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

function heapSort(arr) {
  const n = arr.length;

  buildMaxHeap(arr);

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
}

const unsortedArray = [4, 10, 3, 5, 1];
heapSort(unsortedArray);
console.log(unsortedArray); 
