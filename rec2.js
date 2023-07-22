function nothing(n) {
  if (n <= 1) {
    return 1;
  }
  nothing(n - 1);
  console.log(n);
  nothing(n - 1);
}
nothing(5);
