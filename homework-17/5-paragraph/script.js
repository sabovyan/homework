/* eslint-disable no-param-reassign */
import { textInside } from './helpers/text.helper.js';
import { randomNumber, checkPhoneKey } from './helpers/function.helper.js';

const form = document.querySelector('.color__form');
const bgInput = document.querySelector('#input__bg');
const colorInput = document.querySelector('#input__cl');
const submitBtn = document.querySelector('#submitBtn');
const container = document.querySelector('.container');

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

form.onkeydown = (event) => checkPhoneKey(event.key);

form.addEventListener('input', (event) => {
  if (event.target.value.trim() === '') {
    event.target.style.border = ' 3px solid black';
  } else {
    event.target.style.border = ` 3px solid #${event.target.value}`;
  }
});

const elems = document.querySelectorAll('.elem');

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
