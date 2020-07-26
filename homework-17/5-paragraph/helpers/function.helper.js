export function randomNumber(num) {
  const res = Math.floor(Math.random() * num);
  return res;
}
export function checkPhoneKey(key) {
  return (
    (key >= '0' && key <= '9') ||
    (key >= 'a' && key <= 'f') ||
    key === 'ArrowLeft' ||
    key === 'ArrowRight' ||
    key === 'Delete' ||
    key === 'Backspace' ||
    key === 'Tab' ||
    (key === 'Tab' && (event.shiftKey || event.shiftKey)) ||
    (key === 'v' && (event.ctrlKey || event.metaKey)) ||
    (key === 'x' && (event.ctrlKey || event.metaKey)) ||
    (key === 'z' && (event.ctrlKey || event.metaKey))
  );
}
