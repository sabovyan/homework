const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-image');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

/**
 *@type {number} - takes the width of each element
 */
const SIZE = images[0].clientWidth;
let counter = 1;

// it will set the first slide as default
slide.style.transform = `translateX(-${SIZE * counter}px)`;

/**
 *
 * @param {number} step
 * @description it will move the slide forward or backward
 */
function slideImages(step) {
  if (counter === images.length - 1 || counter === 0) return;
  slide.style.transition = 'transform .5s ease-in-out';
  counter += step;
  slide.style.transform = `translateX(-${SIZE * counter}px)`;
}

/**
 *
 * @type {setInterval}
 * @description it will change the slides automaticlly every 7 seconds,
 * @description I think it is not the best solution
 */
setInterval(() => {
  slideImages(1);
}, 7000);

/**
 * @event click
 * @listens next - button
 * @description this will bring the next slide
 */
next.addEventListener('click', () => {
  slideImages(1);
});

/**
 * @event click
 * @listens prev - button
 * @description this will bring the previous slide back
 */
prev.addEventListener('click', () => {
  slideImages(-1);
});

/**
 * @event transitionend
 * @listens slide
 * @description it will stop the transition and bring the first slide next to the last or vice versa
 */
slide.addEventListener('transitionend', () => {
  if (images[counter].classList.contains('image-1__clone')) {
    slide.style.transition = 'none';
    counter = 1;
    slide.style.transform = `translateX(-${SIZE * counter}px)`;
  }
  if (images[counter].classList.contains('image-5__clone')) {
    slide.style.transition = 'none';
    counter = images.length - 2;
    slide.style.transform = `translateX(-${SIZE * counter}px)`;
  }
});
