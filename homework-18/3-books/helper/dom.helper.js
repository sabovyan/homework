export function createHTML(book, element) {
  const tr = document.createElement('tr');
  // eslint-disable-next-line no-restricted-syntax
  for (const val of Object.values(book)) {
    if (!Array.isArray(val)) {
      const td = document.createElement('td');
      td.textContent = val;
      tr.append(td);
    } else {
      const td = document.createElement('td');
      td.classList.add('last');
      val.forEach((el) => {
        const span = document.createElement('span');
        span.textContent = el;
        td.append(span);
        tr.append(td);
      });
    }

    element.append(tr);
  }

  return tr;
}

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
    if (i === pageNumber) {
      console.log(pageNumber);
      span.classList.add('active');
    }
    span.classList.add('page');
    span.textContent = i;
    pages.append(span);
  }

  pages.append(spanLeft);
  return pages;
};
