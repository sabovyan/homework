function isValueIncluded(obj, item) {
  // eslint-disable-next-line no-restricted-syntax
  for (const val of Object.values(obj)) {
    if (val === item) {
      return true;
    }
  }
  return false;
}

console.log(isValueIncluded({ user: 'Steve', name: 'Jobs' }, 'name')); // false
console.log(isValueIncluded({ user: 'Steve', name: 'Jobs' }, 'Jobs')); // true
console.log(isValueIncluded({ a: 1, b: 2, c: 'hello' }, 'hello')); // true
