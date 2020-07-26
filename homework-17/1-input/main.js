/**
 * @type {HTMLElement} input wich type is text
 */
const input = document.querySelector('#text');

/**
 * @type {HTMLElement} a paragraph which will 'mirror' the text from the input
 */
const output = document.querySelector('#output');

/**
 *
 * @listens input
 * @fires textContent
 */
input.addEventListener('input', () => {
  output.textContent = input.value;
});
