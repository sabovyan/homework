/**
 * @description to create basic book object
 * @class Book
 */
export class Book {
  /**
   *
   * @param {string} title
   * @param {string} author
   * @param {number} firstPublishYear
   * @param {array} subjects
   */
  constructor(title, author, firstPublishYear, subjects) {
    this.title = title;
    this.author = author;
    this.publishedYear = firstPublishYear;
    this.subjects = subjects;
  }
}
