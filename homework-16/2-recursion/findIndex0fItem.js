/**
 * findBrokenItem() will check whether an array has an increasing order and if it doesn't, it will return the index of that number that violates the sequence.
 * @param {Array} arr - takes an array of numbers
 * @returns {number} the index of the number that out of the order
 * @example <caption>usage of findBrokenItem function</caption>
 * findBrokenItem([-9, -4, -4, 3, 12, 4, 5]) // returns 5
 * findBrokenItem([2, 12, 15, 48, 64]) // returns -1
 */

function findBrokenItem(arr) {
  function finditem(nArr, item = arr[0]) {
    if (nArr.length === 1) {
      return -1;
    }
    if (item > nArr[1]) {
      item = nArr[1];
      return item;
    }
    let newItem = nArr[1];
    return finditem(nArr.slice(1), newItem);
  }

  return arr.indexOf(finditem(arr));
}
findBrokenItem([-9, -4, -4, 3, 12, 4, 5]);
findBrokenItem([2, 12, 15, 48, 64]);
