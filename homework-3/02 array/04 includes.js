// to assign this method to all the arrays
const myIncludes = function (arr, item) {
  for (let i = 0; i < arr.length; i++) {
    // to find the value that meets the requirements
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
};

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
const nums = [1, 2, 3];
console.log(myIncludes(nums, 7));
console.log(myIncludes(nums, 1));
console.log(myIncludes(fruits, 'Apple'));
console.log(myIncludes(fruits, 'apple'));
console.log(myIncludes(fruits, 'juice'));
