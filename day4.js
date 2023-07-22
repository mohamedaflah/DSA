var a = [1, 2, 3, 4];
for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    if (a[i] % 2 == 1 && a[j] % 2 == 1) {
      let temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
    if (a[i] % 2 == 0 && a[j] % 2 == 0) {
      let temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
  }
}
a.forEach((value) => {
  console.log(value);
});
