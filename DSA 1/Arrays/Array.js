function findSumTarget(ar,t) {
  for (let i = 0; i < ar.length-1; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      if (ar[i] + ar[j] == t) {
        return [ar[i],ar[j]];
      }
    }
  }
}
var myar=[6, 5, 4, 3, 9, 8, 0]
const [val1,val2]=findSumTarget(myar,10);
console.log(`Number 1 is :${val1}\nNumber 2 is :${val2}`)

// TIme complexity of Array is O(n*n)T 
// Space complexity of Array is O(1)S
