function myJoin(arr, sym) {
  // to make a variable to store the final value
  let result = '';
  // to specify whether the argument exists or not
  if (!sym) {
    // eslint-disable-next-line no-restricted-syntax
    for (const val of arr) {
      result += val;
    }
  } else {
    // eslint-disable-next-line no-restricted-syntax
    for (const val of arr) {
      // to disable sym for the last element
      if (val === arr[arr.length - 1]) {
        result += val;
      } else {
        result += val + sym;
      }
    }
  }
  return result;
}
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(myJoin(fruits));
console.log(myJoin(fruits, ' + '));
console.log(myJoin(fruits, '+'));
console.log(myJoin(fruits, ','));
console.log(myJoin(fruits, ', '));
console.log(myJoin(fruits, ' '));
