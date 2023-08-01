function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr; // Base case: If the array has 0 or 1 element, it's already sorted
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare elements from both arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // If there are any remaining elements in the left or right array, add them to the result
    while (leftIndex < left.length) {
      result.push(left[leftIndex]);
      leftIndex++;
    }
  
    while (rightIndex < right.length) {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  
    return result;
  }
  
  // Example usage:
  const array = [43, 23, 523, 534, 54, 21, 32, 56, 35, 26, 78, 54];
  const sortedArray = mergeSort(array);
  console.log(sortedArray);
  