function getLetter(s) {
  let letter;
  // Write your code here
  // eslint-disable-next-line prefer-destructuring
  letter = s[0];
  switch (letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      letter = 'A';
      break;
    case 'b':
    case 'c':
    case 'd':
    case 'f':
    case 'g':
      letter = 'B';
      break;
    case 'h':
    case 'j':
    case 'k':
    case 'l':
    case 'm':
      letter = 'C';
      break;
    default:
      letter = 'D';
      break;
  }
  return letter;
}
console.log(getLetter('hfgt'));
