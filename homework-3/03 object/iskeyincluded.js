function isKeyIncluded(obj, item) {
  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(obj)) {
    if (key === item) {
      return true;
    }
  }
  return false;
}

console.log(isKeyIncluded({ user: 'Steve', name: 'Jobs' }, 'name')); // true
console.log(isKeyIncluded({ user: 'Steve', name: 'Jobs' }, 'Jobs')); // false
console.log(isKeyIncluded({ a: 1, b: 2, c: 'hello' }, 'c')); // true
