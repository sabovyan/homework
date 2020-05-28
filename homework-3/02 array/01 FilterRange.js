function filterRange(arr, a, b) {
  const newArr = [];

  // to check the ratio of a and b
  if (a > b) {
    // find the percise value that meets the requirements
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < a && arr[i] > b) {
        newArr.push(arr[i]);
      }
    }
  }
  // to check the ratio of a and b
  else if (b > a) {
    // find the percise value that meets the requirements
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > a && arr[i] < b) {
        newArr.push(arr[i]);
      }
    }
  }
  // the last condition is when a===b
  else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === a) {
        // find the percise value that meets the requirements
        newArr.push(arr[i]);
      }
    }
  }

  return newArr;
}
//  [10, 20]
console.log(filterRange([1, 10, 20, 30], 9, 23));
//  []
console.log(filterRange([100, 200, 300], 9, 23));
//  [-10, -8, 0, 10]
console.log(filterRange([-10, -8, 0, 10, 20], -100, 15));
//  [-10, -8, 0, 10]
console.log(filterRange([-10, -8, 0, 15, 20], 15, 15));
