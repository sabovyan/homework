function myFill(arr, item, a = 0, b = arr.length) {
  //  it is for controling the arguments if they have negative value
  let anotherA;
  let anotherB;
  anotherA = a < 0 ? (anotherA = arr.length + a) : (anotherA = a);
  anotherB = b < 0 ? (anotherB = arr.length + b) : (anotherB = b);
  // to return a new array
  const newArr = [];
  // to find the elements that match the demands
  for (let i = 0; i < arr.length; i++) {
    //  if there is no arguments
    if (a === 0 && b === arr.length) {
      newArr.push(item);
    }
    // if only one argument exist
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
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
//  Kiwi,Kiwi,Kiwi,Kiwi
console.log(myFill(fruits, 'kiwi'));

//  Banana,Orange,Kiwi,Kiwi
console.log(myFill(fruits, 'kiwi', 2));

//  Banana,Kiwi,Kiwi,Kiwi
console.log(myFill(fruits, 'kiwi', 1, 4));

//  Kiwi,Kiwi,Apple,Mango
console.log(myFill(fruits, 'kiwi', 0, 2));

// Kiwi,Kiwi,Kiwi,Mango
console.log(myFill(fruits, 'kiwi', 0, -1));

//  Banana,Kiwi,Apple,Mango
console.log(myFill(fruits, 'kiwi', -3, -2));
