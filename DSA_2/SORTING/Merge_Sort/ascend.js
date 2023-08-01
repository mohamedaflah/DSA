function mergSort(ar) {
  if (ar.length <= 1) {
    return ar; // if length of array is equal or lessthan 1 , return same array because one value only
  }
  //   Divide the Array into two halves

  const mid = Math.floor(ar.length / 2);
  const left = ar.slice(0, mid);
  const right = ar.slice(mid);

  //   Recursively sort the left and right halves

  const sortLeft = mergSort(left);
  const sortRight = mergSort(right);

  return merge(sortLeft, sortRight);
}
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  //   Compare elements from both arrays and merge them in sorted order

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
    } else {
      result.push(right[leftIndex]);
      rightIndex++;
    }
  }
  return result
}
let Array = [43, 23, 523, 534, 54, 21, 32, 56, 35, 26, 78, 54];
let sorted = mergSort(Array);
console.log(sorted);
