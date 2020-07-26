/**
 *
 * @param {HTMLCollection} inputs
 * @returns {Boolean}
 * @description checks if every element is empty or not
 */
export function isEmpty(inputs) {
  const arr = Array.from(inputs);
  return arr.every((elem) => elem.value.trim() === '');
}

/**
 * @description changes the order status and the text of the span
 * @param {array} arr
 * @param {object} type
 * @param {HTMLElement} icon
 * @returns {void}
 */
export function changeIcon(arr, type, icon) {
  arr.order = type.name;
  icon.innerHTML = type.text;
}

/**
 * @description creates a new table row
 * @param {array} arr
 * @returns {HTMLCollection}  table row
 */
export function makeRow(arr) {
  const tr = document.createElement('tr');
  for (let i = 0; i < arr.length; i += 1) {
    const td = document.createElement('td');
    td.textContent = arr[i];
    tr.append(td);
  }
  return tr;
}

/**
 * @param {array} arr array of studends
 * @param {object} type object of objects
 * @returns {array} sorted array
 */
export const sortedOrder = (arr, type) => {
  if (arr.order === type.default.name) return arr.students;

  if (arr.order === type.ascend.name) {
    return arr.students.slice().sort((a, b) => (a.age < b.age ? 1 : -1));
  }
  if (arr.order === type.descend.name) {
    return arr.students.slice().sort((a, b) => (a.age > b.age ? 1 : -1));
  }
};

/**
 * @description updates the actual table with sorted table
 * @param {array} students - array of objects
 * @param {HTMLElement} body
 * @returns {void}
 */
export function updateTable(students, body) {
  students.forEach((elem) => {
    body.append(makeRow([elem.name, elem.age, elem.grade]));
  });
}
