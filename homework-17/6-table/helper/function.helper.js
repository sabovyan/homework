export function isEmpty(inputs) {
  const arr = Array.from(inputs);
  return arr.every((elem) => elem.value.trim() === '');
}
export function changeIcon(arr, type, icon) {
  arr.order = type.name;
  icon.innerHTML = type.text;
}

export function makeRow(arr) {
  const tr = document.createElement('tr');
  for (let i = 0; i < arr.length; i += 1) {
    const td = document.createElement('td');
    td.textContent = arr[i];
    tr.append(td);
  }
  return tr;
}

export const sortedOrder = (arr, type) => {
  if (arr.order === type.default.name) return arr.students;

  if (arr.order === type.ascend.name) {
    return arr.students.slice().sort((a, b) => (a.age < b.age ? 1 : -1));
  }
  if (arr.order === type.descend.name) {
    return arr.students.slice().sort((a, b) => (a.age > b.age ? 1 : -1));
  }
};

export function updateTable(students, body) {
  students.forEach((elem) => {
    body.append(makeRow([elem.name, elem.age, elem.grade]));
  });
}
