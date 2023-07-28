function sel(a) {
  for (let i = 0; i < a.length-1; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] > a[j]) {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  return a;
}
const sort = sel([43, 12, 53, 9, 32, 44, 51, 63, 84]);
console.log(sort);
