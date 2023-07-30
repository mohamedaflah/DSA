function QuickSort(ar) {
    if (ar.length < 2) {
      return ar;
    }
    let pivot = ar[ar.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < ar.length - 1; i++) {
      if (ar[i] > pivot) {
        left.push(ar[i]);
      } else {
        right.push(ar[i]);
      }
    }
    return [...QuickSort(left), pivot, ...QuickSort(right)];
  }
  const arr = [6, 45, 6, 3, -9, 65, 23, 12];
  
  console.log(QuickSort(arr));
  