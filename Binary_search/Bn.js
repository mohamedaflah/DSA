
function Bn(ar, target) {
    let start = 0;
    let end = ar.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (ar[mid] === target) {
        console.log(`Value Found At Position ${mid+1}`);
        return;
      } else if (ar[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  
    console.log("Value not found in the array.");
  }
  
  var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  Bn(a, 6);
  