function myFill(arr, item, a = 0, b = arr.length) {
  //  it is for controlling the arguments if they have negative value
  let anotherA;
  let anotherB;
  anotherA = a < 0 ? (anotherA = arr.length + a) : (anotherA = a);
  anotherB = b < 0 ? (anotherB = arr.length + b) : (anotherB = b);
  // to return a new array
  const newArr = [];
  // to find the elements that matches the demands
  for (let i = 0; i < arr.length; i++) {
    //  if there is no arguments
    if (a === 0 && b === arr.length) {
      newArr.push(item);
    }
    // if only one argument exists
    else if (a > 0 && b === arr.length) {
      if (anotherA === i) {
        anotherA += 1;
        newArr.push(item);
      } else {
        newArr.push(arr[i]);
      }
    }
    //  and the last case
    else if (anotherA >= 0 && anotherB < arr.length) {
      if (anotherA === i && anotherA < anotherB) {
        anotherA += 1;
        newArr.push(item);
      } else {
        newArr.push(arr[i]);
      }
    }
  }
  return newArr;
}

module.exports = myFill;
