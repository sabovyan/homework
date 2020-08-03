/* eslint-disable import/extensions */
/* eslint-disable camelcase */
import { Book } from './helper/class.helper.js';
import { makeURLComponent, getPagesNumber } from './helper/function.helper.js';
import { getData } from './helper/fetch.helper.js';
import { createHTML, createPageNumbers } from './helper/dom.helper.js';

const search = document.querySelector('#search');
const body = document.querySelector('.display__body');
const submit = document.querySelector('#submit');
const errMessage = document.querySelector('.error__message');
const tableContainer = document.querySelector('.result__container');
const pages = document.querySelector('.pagination');

const state = {
  inputValue: '',
  books: [],
  completed: false,
  getBooks(book) {
    this.books.push(book);
  },
};

async function setData(pageNumber) {
  const urlComponent = makeURLComponent(state.inputValue);
  const finalData = await getData(urlComponent, pageNumber);
  state.numFound = finalData.numFound;
  return finalData;
}

setData();

async function render(pageNumber = 1) {
  state.books = [];
  pages.innerHTML = '';
  body.innerHTML = '';
  state.pageQuantity = getPagesNumber(state.numFound);
  let p = await createPageNumbers(state.pageQuantity, pages, pageNumber);
  let response = await setData(pageNumber);
  let docs = await response.docs;
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

  state.books.forEach((book) => {
    createHTML(book, body);
  });
}

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
      // pagination();
    }
  } catch (err) {
    console.error(err);
    errMessage.textContent = `✋ ${err.message}`;
  }
  search.value = '';
});

pages.addEventListener('click', (e) => {
  state.pageNumber = e.target.textContent;
  render(state.pageNumber);
  const pagesCollection = pages.childNodes;
  pagesCollection.forEach((page) => {
    page.classList.remove('active');
  });
  if (e.target.classList.contains('page')) {
    e.target.classList.add('active');
  }
});
