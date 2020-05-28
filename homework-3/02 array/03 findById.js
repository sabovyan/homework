function findById(arr, id) {
  // result is for storing the result of the loop and returning it at the end of the function
  let result;

  // eslint-disable-next-line no-restricted-syntax
  for (const val of arr) {
    // to find the presice id that meets the demands
    if (val.id === id) {
      // to assign the result to the result
      result = JSON.parse(JSON.stringify(val));
    } else {
      // to print an error message
      result = 'No valid data';
    }
  }
  return result;
}

const frameworks = [
  { id: 1, title: 'react' },
  { id: 2, title: 'angular' },
  { id: 3, title: 'vue' },
];
console.log(findById(frameworks, 3)); // { id: 3, title: "vue" }
console.log(findById(frameworks, 13)); // No Data
