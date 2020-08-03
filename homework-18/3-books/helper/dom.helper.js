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
