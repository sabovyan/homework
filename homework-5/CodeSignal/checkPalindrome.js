function checkPalindrome(inputString) {
  const reversed = inputString.split('').reverse().join('');
  if (String(reversed) === inputString) {
    return true;
  }
  return false;
}
checkPalindrome('aabaa');
