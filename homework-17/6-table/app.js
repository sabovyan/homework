/* eslint-disable no-restricted-syntax */
class Student {
  constructor(name, age, averGrade) {
    this.name = name;
    this.age = age;
    this.averGrade = averGrade;
  }
}

let students = [];

function makerow(name, age, averGradegrade) {
  const student = new Student(name, age, averGradegrade);
  students.push(student);
  const tr = document.createElement('tr');
  for (const key of Object.keys(student)) {
    const td = document.createElement('td');
    td.textContent = student[key];
    tr.append(td);
  }
  return tr;
}

const tbody = document.querySelector('.table__body');
tbody.append(makerow('hong', 21, 8.9));
tbody.append(makerow('kong', 52, 6.4));

const tfoot = document.querySelector('.table__footer');

tfoot.addEventListener('input', (event) => {
  if (event.key === 'Enter') {
    console.log('yeah');
  }
});
