const breed = document.querySelector('#breed__selector');
const imageContainer = document.querySelector('.image__container');

/**
 *  @description creates a new html img element
 * @param {URL} source - takes an image url
 * @returns {void}
 */
function createHTMLImage(source) {
  const img = document.createElement('img');
  img.src = source;
  imageContainer.append(img);
}

/**
 * @description fetches an API and implements createHTMLImage function
 * @param {string} breed
 * @returns {Promise}
 */
function getImage(breed) {
  return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((r) => r.json())
    .then((json) => {
      createHTMLImage(json.message);
    });
}

/**
 * @event change
 * @listens breed
 * @fires  HTMLElement
 */
breed.addEventListener('change', (e) => {
  getImage(e.target.value);
});
