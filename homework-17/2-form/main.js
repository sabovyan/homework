/**
 * @type {object} - it will collect all the data from the form
 */
const output = {};
let inputValue = '';

const form = document.getElementById('deposit');
/**
 *
 * @listens form
 * takes all the data from form and place it in the
 */
form.addEventListener('input', (event) => {
  inputValue = event.target.value;
  output[event.target.name] = inputValue;
  inputValue = '';
});

const submitBtn = document.getElementById('submit');
const visualtitle = document.querySelector('.output-title');
const visualoutput = document.querySelector('.output-number');
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  output[visualtitle.textContent] = visualoutput.textContent;
  alert(JSON.stringify(output));
});

// calculator
const initial = document.getElementById('initial-value');
const months = document.getElementById('months');
const interest = document.getElementById('interest');
const ComputedResult = document.querySelector('.output-number');
const visualRange = document.querySelector('.visual__after');

function getResult() {
  const money = initial.value;
  const years = months.value / 12;
  let percent = 0;
  if (interest.value <= interest.max && interest.value > 0) {
    percent = interest.value / 100;
  }
  const result = Math.round(money * (1 + percent * years));
  ComputedResult.textContent = result;
  document.querySelector('.input-number').textContent = initial.value;
  let width = 100;
  width += width * percent;
  visualRange.style.width = `${width}px`;
}

initial.addEventListener('input', getResult);
months.addEventListener('change', getResult);
interest.addEventListener('input', getResult);
