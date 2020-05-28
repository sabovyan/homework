function mySlice(arr, a = 0, b = arr.length) {
  //  it is for controling the arguments if they have negative value
  let anotherA;
  let anotherB;
  anotherA = a < 0 ? (anotherA = arr.length + a) : (anotherA = a);
  anotherB = b < 0 ? (anotherB = arr.length + b) : (anotherB = b);
  const newArr = [];

  for (let i = 0; i < anotherB; i++) {
    //  if there is no arguments
    if (a === 0 && b === arr.length) {
      newArr.push(arr[i]);
    }
    // if only one argument exists
    else if (anotherA > 0 && anotherB === arr.length) {
      if (anotherA === i) {
        anotherA += 1;
        newArr.push(arr[i]);
      }
    }
    //  and the last case
    else if (anotherA >= 0 && anotherB < arr.length) {
      if (anotherA === i && anotherA < anotherB) {
        anotherA += 1;
        newArr.push(arr[i]);
      }
    }
  }

  return newArr;
}

const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];

//  Banana,Orange,Lemon,Apple,Mango
console.log(mySlice(fruits));

// Banana,Orange,Lemon
console.log(mySlice(fruits, 0, 3));

// Orange,Lemon
console.log(mySlice(fruits, 1, 3));

// Lemon,Apple,Mango
console.log(mySlice(fruits, 2));

// Apple,Mango
console.log(mySlice(fruits, -2));

// Apple
console.log(mySlice(fruits, -2, -1));

// []
console.log(mySlice(fruits, 6, 3));
