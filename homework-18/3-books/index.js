/* eslint-disable camelcase */
import { Book } from './helper/class.helper.js';
import { makeURLComponent } from './helper/function.helper.js';
import { getData } from './helper/fetch.helper.js';

const search = document.querySelector('#search');
const body = document.querySelector('.display__body');
const submit = document.querySelector('#submit');
const errMessage = document.querySelector('.error__message');

const state = {
  inputValue: '',
  books: [],
  getBooks(book) {
    this.books.push(book);
  },
};

const render = () => {
  const urlComponent = makeURLComponent(state.inputValue);
  getData(urlComponent).then((r) => {
    state.numFound = r.numFound;
    console.log(r);
    console.log(state.numFound);
  });
};

function getInputDate(value) {
  state.inputValue = value;
  return state.inputValue;
}

submit.addEventListener('click', (e) => {
  e.preventDefault();
  errMessage.textContent = '';
  try {
    if (search.value.trim() === '') {
      throw new Error('Please fill in the input');
    } else {
      getInputDate(search.value);
      render();
    }
  } catch (err) {
    errMessage.textContent = `💀 ${err.message}`;
  }
  search.value = '';
});
