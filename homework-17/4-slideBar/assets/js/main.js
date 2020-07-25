const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-image');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const size = images[0].clientWidth;
let counter = 1;
slide.style.transform = `translateX(-${size * counter}px)`;

function slideImages(quantity) {
  if (counter === images.length - 1 || counter === 0) return;
  slide.style.transition = 'transform .5s ease-in-out';
  counter += quantity;
  slide.style.transform = `translateX(-${size * counter}px)`;
}

setInterval(() => {
  slideImages(1);
}, 7000);

next.addEventListener('click', () => {
  slideImages(1);
});

prev.addEventListener('click', () => {
  slideImages(-1);
});

slide.addEventListener('transitionend', () => {
  if (images[counter].classList.contains('image-1__clone')) {
    slide.style.transition = 'none';
    counter = 1;
    slide.style.transform = `translateX(-${size * counter}px)`;
  }
  if (images[counter].classList.contains('image-5__clone')) {
    slide.style.transition = 'none';
    counter = images.length - 2;
    slide.style.transform = `translateX(-${size * counter}px)`;
  }
});
