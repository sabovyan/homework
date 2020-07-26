/* eslint-disable no-param-reassign */
import { textInside } from './helpers/text.helper.js';
import { randomNumber, restitInput } from './helpers/function.helper.js';

const form = document.querySelector('.color__form');
const bgInput = document.querySelector('#input__bg');
const colorInput = document.querySelector('#input__cl');
const submitBtn = document.querySelector('#submitBtn');
const container = document.querySelector('.container');

/**
 *
 * @param {number} quantity - the quantity of the elements
 * @param {string} elems - the inner text for p tags
 * @param {HTMLElement} div - container
 * @returns {HTMLElement} - a container for all the p elements
 */
function createPara(quantity, elems, div) {
  for (let i = 0; i < quantity; i += 1) {
    const p = document.createElement('p');
    const randomnum = randomNumber(elems.length);
    const text = textInside[randomnum];
    p.classList.add('elem', `elem-${i}`);
    p.textContent = text;
    div.append(p);
  }
  return div;
}

createPara(4, textInside, container);

/**
 * @event keydown
 * @listens form
 * @param {event} event.key
 * @description it will restrict the keys for input
 * @description not sure about this solution
 */
form.onkeydown = (event) => restitInput(event.key);

/**
 * @event input
 * @listens form
 * @description changes the border color according to the value of the input
 */
form.addEventListener('input', (event) => {
  if (event.target.value.trim() === '') {
    event.target.style.border = ' 3px solid black';
  } else {
    event.target.style.border = ` 3px solid #${event.target.value}`;
  }
});

const elems = document.querySelectorAll('.elem');

/**
 * @event click
 * @listens container
 * @description sets one of the elements as chosen
 */
container.addEventListener('click', (event) => {
  if (event.target !== container) {
    elems.forEach((elem) => {
      if (elem.classList.contains('chosen')) {
        elem.classList.remove('chosen');
      }
    });
    event.target.classList.add('chosen');
  }
});

/**
 * @event click
 * @listens submitBtn
 * @description takes the inputed values and sets them as background and text color
 */
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const background = bgInput.value;
  const color = colorInput.value;

  elems.forEach((elem) => {
    if (elem.classList.contains('chosen')) {
      elem.style.backgroundColor = `#${background}`;
      elem.style.color = `#${color}`;
      elem.classList.remove('chosen');
    } else {
      elem.style.backgroundColor = `white`;
      elem.style.color = `black`;
    }
  });
});
