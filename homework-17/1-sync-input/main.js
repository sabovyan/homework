const input = document.querySelector('#text');
const output = document.querySelector('#output');

input.addEventListener('input', () => {
  output.textContent = input.value;
});
