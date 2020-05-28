function adjacentElementsProduct(inputArray) {
  let result = inputArray[0] * inputArray[1];
  for (let i = 0; i < inputArray.length - 1; i++) {
    const newItem = inputArray[i] * inputArray[i + 1];
    if (newItem > result) {
      result = newItem;
    }
  }
  return result;
}
adjacentElementsProduct([3, 6, -2, -5, 7, 3]);
