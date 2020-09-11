// eslint-disable-next-line no-unused-vars
function reduceMethod(arr, func, initialValue) {
  let initial = initialValue;
  if (initialValue === null || initialValue === undefined) {
    initial = arr[0];
  }
  let sum = initial;
  for (let i = 0; i < arr.length; i += 1) {
    sum = func.call(arr, sum, arr[i], i, arr);
  }
  return sum;
}
