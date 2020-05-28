function size(obj) {
  let counter = 0;
  for (let {} of Object.keys(obj)) {
    ++counter;
  }
  return counter > 0 ? counter : 'empty';
}

console.log(size({ a: 1, b: 2, c: 'hello' })); // 3
console.log(size({})); // empty
console.log(size({ name: 'Steve', lastname: 'Jobs' })); //  2
