const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let key = arr[i];
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
};
let sorted = insertionSort([
  10, 38, 46, 12, 92, 76, 43, 67, 21, 12, 23, 43, 53, 203, 103,
]);
console.log(sorted);