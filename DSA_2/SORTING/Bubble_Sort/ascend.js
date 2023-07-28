function BubleSort(a) {
  let swapped;
  do {
    swapped=false;
    for (let i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        let temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return a;
}
let ar=BubleSort([8, 20, -2, 4, -6]);;
console.log(ar);
