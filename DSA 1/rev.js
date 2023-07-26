let a = [1, 2, 3, 4, 5, 6],
  temp;
for (let i = 0; i < a.length / 2; i++) {
  temp = a[a.length - 1 - i];
  a[a.length - 1 - i] = a[i];
  a[i] = temp;
}
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}
