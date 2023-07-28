function desc(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] < a[j]) {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  return a;
}

const d = desc([5, 34, 90, 122, 42, 51, 43, 33, 64, 192]);
console.log(d);