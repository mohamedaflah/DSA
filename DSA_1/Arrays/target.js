function srch(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === t) {
        return [ar[i],ar[j]];
      }
    }
  }
}
var ar = [1, 2, 3, 4, 5, 3, 53, 42, 3, 6, 9];
const [v1,v2]=srch(ar, 10);
console.log(`${v1} ${v2}`);
