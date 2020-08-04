/**
 * @description creates html elements and append them to element that passed in as an argument
 * @param {object} book
 * @param {HTMLElement} element
 * @returns {HTMLElement}
 */

export function createHTML(book, element) {
  const item = document.createElement('div');
  item.classList.add('book');
  // eslint-disable-next-line no-restricted-syntax
  for (const val of Object.values(book)) {
    if (!Array.isArray(val)) {
      const div = document.createElement('div');
      div.textContent = val;
      item.append(div);
    } else {
      const div = document.createElement('div');
      div.classList.add('last');
      val.forEach((el) => {
        const span = document.createElement('span');
        span.textContent = el;
        div.append(span);
        item.append(div);
      });
    }

    element.append(item);
  }

  return item;
}

/**
 * @description creates html elements and append them to element that passed in as an argument
 * @param {object} book
 * @param {HTMLElement} element
 * @returns {void}
 */

/**
 * @description create HTML elements that are indicating the quantity of pages
 * @param {number} quantity
 * @param {HTMLElement} pages
 * @param {(string\number)} pageNumber
 * @returns {HTMLElement}
 */

export const createPageNumbers = (quantity, pages, pageNumber) => {
  if (quantity <= 1) {
    return false;
  }
  const spanLeft = document.createElement('span');
  const spanRight = document.createElement('span');

  spanLeft.classList.add('left');
  spanRight.classList.add('right');
  spanLeft.textContent = '>';
  spanRight.textContent = '<';

  pages.append(spanRight);

  for (let i = 1; i <= quantity; i += 1) {
    const span = document.createElement('span');
    if (i === Number(pageNumber)) {
      span.classList.add('active');
    }
    span.classList.add('page');
    span.textContent = i;
    pages.append(span);
  }

  pages.append(spanLeft);
  return pages;
};
