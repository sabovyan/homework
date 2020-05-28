function capitalizeALetter(str, num) {
  let newStr = '';
  if (num < str.length) {
    for (let i = 0; i < str.length; i += 1) {
      const capLetter = str[i].toUpperCase();
      if (i === num) {
        newStr += capLetter;
      } else {
        newStr += str[i];
      }
    }
  } else {
    return 'Your number is TOO big';
  }
  return newStr;
}
