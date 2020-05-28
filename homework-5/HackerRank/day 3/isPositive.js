/* eslint-disable no-console */
function isPositive(a) {
  function Exception(message) {
    this.message = message;
    this.name = 'Exception';
  }
  if (a < 0) {
    throw new Error('Negative Error');
  } else if (a === 0) {
    throw new Error('Zero Error');
  } else {
    throw new Exception('YES');
  }
}

try {
  console.log(isPositive(10));
} catch (e) {
  console.log(e.message);
}
