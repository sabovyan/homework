function printDecimal() {
  let result = '';
  for (let i = 1; i < 100; i++) {
    if (i < 10) {
      result += `0${i},`;
    } else {
      result += `${i},`;
    }
  }
  return result;
}
printDecimal();
