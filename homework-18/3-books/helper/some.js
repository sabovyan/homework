function createHTML(items) {
  const tr = document.createElement('tr');
  for (let i = 0; i < items.length; i += 1) {
    const td = document.createElement('td');

    td.textContent = items[i];
    tr.append(td);
    body.append(tr);
  }
  return tr;
}

docs = await docs.forEach((element) => {
  const { title_suggest, author_name, first_publish_year, subject } = element;
  const subjects = subject ? subject.slice(0, 5) : 'No Information';
  state.books.push(
    new Book(title_suggest, author_name, first_publish_year, subjects)
  );
});
state.books.forEach((book) => {
  for (let [key, val] of Object.entries(book)) {
    if (key === 'subjects') {
    }
  }
});
