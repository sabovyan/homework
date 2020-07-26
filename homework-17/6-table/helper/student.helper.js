/**
 * @description creates a new student
 * @type {class}
 */
export class Student {
  constructor(arr) {
    [this.name, this.age, this.grade] = arr;
  }
}
