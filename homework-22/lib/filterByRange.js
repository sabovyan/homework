function filterByRange(arr, a, b) {
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
      if (arr[i] <= a) {
        // find the precise value that meets the requirements
        newArr.push(arr[i]);
      }
    }
  }

  return newArr;
}

module.exports = filterByRange;
