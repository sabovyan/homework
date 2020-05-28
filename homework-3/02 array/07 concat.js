function myCat(...args) {
  // to make an array out of arguments
  const c = [...args].join(',').split(',');
  const newArr = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const val of c) {
    // to skip "empty" values
    if (val === '' || val === ' ' || val === undefined || val === null) {
      // eslint-disable-next-line no-continue
      continue;
    }
    newArr.push(val);
  }
  return newArr;
}
const cap = ['cap', 'cup', 'cat'];
const bar = ['bar', 'bud', 'ban'];
const num = new Array(2);
num.push(1);

//  cap,cup,cat,bar,bud,ban,street,0,1,2
console.log(myCat(cap, bar, 'street', [0, 1, 2]));

//  cap,cup,cat,bar,bud,ban,0,1,2
console.log(myCat(cap, bar, [0, 1, 2]));

// cap,cup,cat,bar,bud,ban,street,0,1,2
console.log(myCat(cap, bar, 'street', 0, 1, 2));

//  cap,cup,cat,[object Object]
console.log(myCat(cap, 'street', { a: 1, b: 2 }));

//  cap,cup,cat,bar,bud,ban,street
console.log(myCat(cap, bar, 'street'));

// cap,cup,cat
console.log(myCat(cap));

// cap,cup,cat,,,1
console.log(myCat(cap, num));

// cap,cup,cat
console.log(myCat(cap, ' '));

// cap,cup,cat
console.log(myCat(cap, ''));

// cap,cup,cat, false
console.log(myCat(cap, false));
