function quickSort(array) {
  if (array.length <= 1) {
    return array; // if array length is 1 or lessthan one , return same array because one value only that array already sorted
  }
  const pivot = array[array.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]); // if array value is lessthan pivot push left array
    } else {
      right.push(array[i]); // if array value is greaterthan pivot push right array
    }
  }
  //   return [...quickSort(left),pivot,...quickSort(right)];
  return quickSort(left).concat(pivot).concat(quickSort(right));
}
let a = [43, 23, 523, 534, 54, 21, 32, 56, 35, 26, 78, 54];
let sorted = quickSort(a);
console.log(sorted);
