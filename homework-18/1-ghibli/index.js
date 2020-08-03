const body = document.querySelector('.movie__body');

/**
 *
 * @param  {...any} items
 * @returns {HTMLCollection} collections of td
 * @example
 *  createHTML(title, release_date, director, description);
 */
function createHTML(...items) {
  const tr = document.createElement('tr');
  for (let i = 0; i < items.length; i += 1) {
    const td = document.createElement('td');
    td.classList.add('movie__item');
    td.textContent = items[i];
    tr.append(td);
    body.append(tr);
  }
  return tr;
}

/**
 * @type {object} options for animations
 */
const appearOptions = {
  threshold: 0,
  rootMargin: '0px 0px -100px 0px',
};

// eslint-disable-next-line no-shadow
const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

fetch('https://ghibliapi.herokuapp.com/films')
  .then((r) => r.json())
  .then((json) => {
    json.sort((a, b) => (a.release_date > b.release_date ? -1 : 1));

    json.forEach(({ title, release_date, director, description }) => {
      createHTML(title, release_date, director, description);
    });
  })
  .then(() => {
    const trs = document.querySelectorAll('tr');
    trs.forEach((tr) => {
      appearOnScroll.observe(tr);
    });
  })
  .catch((err) => {
    console.log(err);
    body.innerHTML = err.message;
  });
