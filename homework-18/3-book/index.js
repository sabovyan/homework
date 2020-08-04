import { Book } from './helper/class.helper.js';
import { makeURLComponent, setAnimation } from './helper/function.helper.js';
import { getData } from './helper/fetch.helper.js';
import { createHTML, createPageNumbers } from './helper/dom.helper.js';

const submitBtn = document.querySelector('#submitBtn');
const formWrapper = document.querySelector('.form__wrapper');
const formTitle = document.querySelector('.form__title');
const searchInput = document.querySelector('#searchInput');
const loading = document.querySelector('.loading');
const pagination = document.querySelector('.pagination');
const bookContainer = document.querySelector('.book__container');

const state = {
  inputValue: '',
  urlComponent: '',
  books: [],
  pageNumber: 1,
  getBooks(book) {
    this.books.push(book);
  },
};

/**
 * @description changes the hight and and direction of passed in argument
 * @param {HTMLElement} layout
 * @returns {void}
 */
function styleForm(layout) {
  if (window.innerWidth <= 500) {
    layout.style.cssText = `height: 60px;
    flex-direction: column;
        `;
  } else {
    layout.style.cssText = `height: 60px;
      flex-direction: row;`;
    formTitle.style.fontSize = '2rem';
  }
}

/**
 * @description all the basic functionality happens here
 * @type {async Function}
 * @returns {void}
 */
async function render() {
  bookContainer.innerHTML = '';
  pagination.innerHTML = '';
  state.books = [];
  // to style formWrapper (layout)
  styleForm(formWrapper, formTitle);

  // to trim input date and create url component from input value
  state.urlComponent = makeURLComponent(state.inputValue);

  // starts the loading animation
  setAnimation(loading);

  const data = await getData(state.urlComponent, state.pageNumber);
  // to store the number of the found matches
  state.numFound = await data.numFound;
  // to create the number of the pages
  state.pageQuantity = Math.ceil(state.numFound / 100);

  // to create pagination
  createPageNumbers(state.pageQuantity, pagination, state.pageNumber);

  // to filter the data
  const docs = await data.docs;
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
  // to create book object from each
  state.books.forEach((book) => {
    createHTML(book, bookContainer);
  });

  // stops the loading animation
  setAnimation(loading);
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
