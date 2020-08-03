/* eslint-disable import/extensions */
/* eslint-disable camelcase */
import { Book } from './helper/class.helper.js';
import { makeURLComponent } from './helper/function.helper.js';
import { getData } from './helper/fetch.helper.js';
import { createHTML } from './helper/dom.helper.js';

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
  getData(urlComponent)
    .then((r) => {
      state.numFound = r.numFound;
      return r.docs;
    })
    .then((docs) => {
      docs.forEach(
        ({ title_suggest, author_name, first_publish_year, subject }) => {
          const book = new Book();
          book.title = title_suggest || 'unknown';
          if (Array.isArray(author_name)) {
            [book.author] = author_name || 'unknown';
          } else {
            book.author = author_name || 'unknown';
          }
          book.publishedYear = first_publish_year || 'unknown';
          book.subjects = subject ? subject.slice(0, 5) : 'No Information';
          state.getBooks(book);
        }
      );
    })
    .then(() => {
      state.books.forEach((book) => {
        createHTML(book, body);
      });
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
