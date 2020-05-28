/* eslint-disable no-param-reassign */
function factorial(n) {
  let sum = 1;
  if (n === 0) {
    return sum;
  }
  while (n >= 1) {
    sum *= n;
    n -= 1;
  }
  return sum;
}
function factorial2(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
