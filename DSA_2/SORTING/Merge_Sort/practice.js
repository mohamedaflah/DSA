function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
  const sortAr = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortAr.push(left.shift());
    } else {
      sortAr.push(right.shift());
    }
  }
  return [...sortAr, ...left, ...right]; 
}

const ar = [8, 20, -3, 4, 34, 534, 34, 5, -90, 34];
console.log(mergeSort(ar));