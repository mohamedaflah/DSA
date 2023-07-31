var array = [43, 23, 523, 534, 54, 21, 32, 56, 35, 26, 78, 54];
for (let i = 1; i < array.length; i++) {
  let key = array[i];
  let j = i - 1;
  while (j >= 0 && array[j] > key) {
    array[j + 1] = array[j];
    j = j - 1;
  }
  array[j + 1] = key;
}
console.log(array);
