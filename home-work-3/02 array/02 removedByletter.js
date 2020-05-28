function removeByLetter(arr, letter) {
  // a new arr for return
  const newArr = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const val of arr) {
    //  to create lowercase environment for precise comparsion
    if (val[0].toLowerCase() !== letter.toLowerCase()) {
      newArr.push(val);
    }
  }
  return newArr;
}

//  [‘Social Network’]
const arr = ['Godfather', 'Game of Thrones', 'Social Network'];
console.log(removeByLetter(arr, 'g'));

//  []
const arr2 = ['Manchester City', 'Milan', 'Marseille'];
console.log(removeByLetter(arr2, 'm'));

//  [‘Godfather’, ‘Whiplash’, ‘Social Network’]
const arr3 = ['Godfather', 'Whiplash', 'Social Network'];
console.log(removeByLetter(arr, 'v'));
