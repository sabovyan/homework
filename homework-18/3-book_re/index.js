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
const pagination = document.querySelector('.pagination');
const booContainer = document.querySelector('.book__container');
//@TODO remove it after app is completed
formWrapper.style.cssText = `height: 100px;
flex-direction: row;`;
formTitle.textContent = 'oo';

const state = {
  inputValue: '',
  urlComponent: '',
  books: [],
  pageNumber: 1,
};

function setAnimation(elem) {
  if (elem.classList.contains('start-loading')) {
    elem.classList.remove('start-loading');
  } else {
    elem.classList.add('start-loading');
  }
}

/**
 * ANCHOR render
 * @type {async Function}
 */
async function render() {
  pagination.innerHTML = '';
  // to style formWrapper (layout)
  styleForm(formWrapper);

  // to trim input date and create url component from input value
  state.urlComponent = makeURLComponent(state.inputValue);
  /**
   * @NOTE starts the loading animation
   */
  setAnimation(loading);

  const data = await getData(state.urlComponent, state.pageNumber);
  // to store the number of the found matches
  state.numFound = await data.numFound;
  // to create the number of the pages
  state.pageQuantity = Math.ceil(state.numFound / 100);

  // to create pagination
  createPageNumbers(state.pageQuantity, pagination, state.pageNumber);

  // to filter the data  and create book object from each

  /**
   * @NOTE stops the loading animation
   */
  setAnimation(loading);

  console.log(data);
}

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  // to store text from input
  state.inputValue = searchInput.value;
  render();

  searchInput.value = '';
});

pagination.addEventListener('click', (e) => {
  if (e.target.classList.contains('page')) {
    state.pageNumber = e.target.textContent;
    render();
  }
});
