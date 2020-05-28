function subSets(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 3) {
    newArr.push(arr.slice(i, i + 3));
  }
  return newArr;
}

console.log(subSets([1, 2, 3, 4, 5, 6, 7])); // [1,2,3], [4,5,6], [7]
