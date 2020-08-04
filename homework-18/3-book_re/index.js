/* eslint-disable import/extensions */
/* eslint-disable camelcase */
import { Book } from './helper/class.helper.js';
import {
  makeURLComponent,
  getPagesNumber,
  styleForm,
} from './helper/function.helper.js';
import { getData } from './helper/fetch.helper.js';
import { createHTML, createPageNumbers } from './helper/dom.helper.js';

const submitBtn = document.querySelector('#submitBtn');
const formWrapper = document.querySelector('.form__wrapper');
const formTitle = document.querySelector('.form__title');
const searchInput = document.querySelector('#searchInput');
const loading = document.querySelector('.loading');

//@TODO remove it after app is completed
formWrapper.style.cssText = `height: 100px;
flex-direction: row;`;
formTitle.textContent = 'oo';

const state = {
  inputValue: '',
  urlComponent: '',
  books: [],
};

function getAnimation(elem) {
  if (elem.classList.contains('start-loading')) {
    elem.classList.remove('start-loading');
  } else {
    elem.classList.add('start-loading');
  }
}

async function render() {
  // to style formWrapper (layout)
  styleForm(formWrapper);

  // to store text from input
  state.inputValue = searchInput.value;

  // to trim input date and create url component from input value
  state.urlComponent = makeURLComponent(state.inputValue);
  /**
   * @NOTE starts the loading animation
   */
  getAnimation(loading);

  const data = await getData(state.urlComponent);
  // to store the number of the found matches
  state.numFound = await data.numFound;
  // to create the number of the pages
  state.pageQuantity = Math.ceil(state.numFound / 100);

  /**
   * @NOTE stops the loading animation
   */
  getAnimation(loading);

  console.log(state.pageQuantity);
  console.log(state.numFound);
  console.log(data);
}

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  render();
  console.log(state);
  searchInput.value = '';
});
