/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-syntax */
import { Student } from './helper/student.helper.js';

import {
  isEmpty,
  changeIcon,
  sortedOrder,
  makeRow,
  updateTable,
} from './helper/function.helper.js';

const sortingType = {
  default: {
    name: 'default',
    text: '-',
  },
  ascend: {
    name: 'asc',
    text: '&#8599;',
  },
  descend: {
    name: 'desc',
    text: '&#8600;',
  },
};

const tbody = document.querySelector('.table__body');
const tableInputs = document.querySelectorAll('.tfoot__input');
const orderIcon = document.querySelector('.order__icon');
const age = document.querySelector('.header__age');
const state = {
  students: [],
  order: sortingType.default.name,
};

state.students.push(new Student(['hong', 21, 8.9]));
state.students.push(new Student(['kong', 52, 6.4]));
state.students.push(new Student(['king', 8, 7.3]));
state.students.push(new Student(['queen', 18, 8.1]));
tbody.append(makeRow(['hong', 21, 8.9]));
tbody.append(makeRow(['kong', 52, 6.4]));
tbody.append(makeRow(['king', 8, 7.3]));
tbody.append(makeRow(['queen', 18, 8.1]));

const render = () => {
  tbody.innerHTML = '';
  if (state.order === sortingType.default.name) {
    changeIcon(state, sortingType.ascend, orderIcon);
  } else if (state.order === sortingType.ascend.name) {
    changeIcon(state, sortingType.descend, orderIcon);
  } else {
    changeIcon(state, sortingType.default, orderIcon);
  }
  const students = sortedOrder(state, sortingType);
  updateTable(students, tbody);
};

window.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    if (isEmpty(tableInputs)) {
      throw new Error('please fill in all the inputs');
    } else {
      const arr = Array.from(tableInputs).map((elem) => elem.value);
      state.students.push(new Student(arr));
      tbody.append(makeRow(arr));
      render();
      tableInputs.forEach((elem) => (elem.value = ''));
    }
  }
});

age.addEventListener('click', () => {
  render();
});
