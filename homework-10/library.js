/* eslint-disable no-underscore-dangle */

class Book {
	constructor(title, author) {
		this._title = title;
		this._author = author;
	}

	// Book title

	get title() {
		return this._title;
	}

	set title(value) {
		const comparingValue = value;
		if (typeof comparingValue !== 'string') {
			throw new Error('Invalid input');
		}
		this._title = value;
	}

	//  book Author

	get author() {
		return this._author;
	}

	set author(value) {
		const comparingValue = value;
		if (typeof comparingValue !== 'string') {
			throw new Error('Invalid input');
		}
		this._author = value;
	}

	toString() {
		return `${this.title} was written by ${this.author}`;
	}

	// istheSameBook
	isTheSameBook(book) {
		if (typeof book !== 'object') {
			return 'the information about this book is not detailed';
		}
		if (book.author === this.author && book.title === this.title) {
			return true;
		}
		return false;
	}
}

class LibrarayBookBase extends Book {
	constructor(title, author, bookId) {
		super(title, author);
		this._bookId = bookId;
	}

	// bookId

	get bookId() {
		return this._bookId;
	}

	set bookId(value) {
		const comparingValue = value;
		if (typeof comparingValue !== 'number') {
			throw new Error('Invalid input');
		}
		this._bookId = value;
	}

	toString() {
		return `this book's id is ${this.bookId}`;
	}
}

class LibraryBook extends LibrarayBookBase {
	constructor(title, author, bookId, quantity) {
		super(title, author, bookId);
		this._quantity = quantity;
	}

	// quantity
	get quantity() {
		return this._quantity;
	}

	set quantity(value) {
		const comparingValue = value;
		if (typeof comparingValue !== 'number') {
			throw new Error('Invalid input');
		}
		this._quantity = value;
	}

	toString() {
		return `${this.title} written by ${this.author} is part of our Library.\nWe have ${this.quantity} examples of the same book\nBook ID: ${this.bookId}.`;
	}

	// increasing method

	increaseQuantityBy(number) {
		this.quantity += number;
	}

	// decreasing method

	decreaseQuantityBy(number) {
		if (number > this.quantity) {
			throw new Error("Sorry we don't have enough books");
		}
		this.quantity -= number;
	}
}

class ReaderBook extends LibrarayBookBase {
	constructor(title, author, bookId, expirationDate, isReturned) {
		super(title, author, bookId);
		this._expirationDate = expirationDate;
		this._isReturned = isReturned;
	}

	// expiration Date

	get expirationDate() {
		return this._expirationDate;
	}

	set expirationDate(value) {
		const comparingValue = value;
		if (typeof comparingValue !== 'string') {
			throw new Error('Invalid input');
		}
		this._expirationDate = value;
	}

	// isretured

	get isReturned() {
		return this._isReturned;
	}

	set isReturned(value) {
		const comparingValue = value;
		if (typeof comparingValue !== 'boolean') {
			throw new Error('Invalid input');
		}
		this._isReturned = value;
	}

	toString() {
		if (this.isReturned === false) {
			return `${this.bookId}. ${this.title} of ${this.author} is not in the library now`;
		}
		return `${this.bookId}. ${this.title} of ${this.author}`;
	}
}

class Reader {
	constructor(fName, lName, readerId, books) {
		this._fName = fName;
		this._lName = lName;
		this._readerId = readerId;
		this._books = books;
	}

	// first name

	get firstName() {
		return this._fName;
	}

	set firstName(value) {
		const comparingValue = value.trim();
		if (comparingValue === '') {
			throw new Error('This field is required');
		}
		this._fName = value;
	}

	// last name

	get lastName() {
		return this._lName;
	}

	set lastName(value) {
		const comparingValue = value.trim();
		if (comparingValue === '') {
			throw new Error('This field is required');
		}
		this._lName = value;
	}

	// reader ID

	get readerId() {
		return this._readerId;
	}

	set readerId(value) {
		const comparingValue = value.trim();
		if (typeof comparingValue !== 'number') {
			throw new Error('you better go with numbers');
		}
		this._readerId = value;
	}

	// Reader's books array

	get books() {
		return this._books;
	}

	set books(value) {
		const comparingValue = value;
		if (typeof comparingValue !== 'object') {
			throw new Error('invalid input');
		}
		this._books = value;
	}

	// toString

	toString() {
		if (this.books.length === 1) {
			return `${this.firstName} ${this.lastName} has ${this.books.length} book from the library`;
		}
		return `${this.firstName} ${this.lastName} has ${this.books.length} books from the library`;
	}

	// borrowBook
	borrowBook(book, library) {
		if (library instanceof Library) {
			const newBook = library.lendBook(book, this.readerId);
			this.books.push(newBook);
			return newBook;
		}
	}
}

class Library {
	constructor(books, readers) {
		this._books = books;
		this._readers = readers;
	}

	// Library books

	get books() {
		return this._books;
	}

	set books(value) {
		const comparingValue = value;
		if (typeof comparingValue !== 'object') {
			throw new Error('invalid input');
		}
		this._books = value;
	}

	// readers

	get readers() {
		return this._readers;
	}

	set readers(value) {
		const comparingValue = value;
		if (typeof comparingValue !== 'object') {
			throw new Error('invalid input');
		}
		this._readers = value;
	}

	// doHaveBook(requestedBook - Book)

	doHaveBook(requestedBook) {
		if (!(requestedBook instanceof Book)) {
			return false;
		}
		for (let i = 0; i < this.books.length; i++) {
			if (requestedBook.isTheSameBook(this.books[i])) {
				if (this.books[i].quantity > 1) {
					return true;
				}
			}
		}
		return false;
	}

	// sort books

	sortByBookId() {
		this.books.sort((a, b) => (a.bookId > b.bookId ? 1 : -1));
	}

	// checkInstanceofItem

	static checkInstanceofBook(...args) {
		const newItems = [...args].flat();
		return newItems.every((item) => item instanceof Book);
	}

	// add book|

	addBook(newBook) {
		let book = newBook;
		this.sortByBookId();
		if (Library.checkInstanceofBook(book)) {
			for (let i = 0; i < this.books.length; i++) {
				if (book.isTheSameBook(this.books[i])) {
					this.books[i].increaseQuantityBy(1);
					return 'we had this book';
				}
			}
			book = new LibraryBook(book.title, book.author);
			const last = this.books[this.books.length - 1];
			book.bookId = last.bookId + 1;
			book.quantity = 1;
			this.books.push(book);
			return 'we added a new book';
		}
		throw new Error('invalid Book');
	}

	// add Book<S>

	addBooks(...newBooks) {}

	// check Reader's ID
	checkReaderId(readerId) {
		if (typeof readerId !== 'number') {
			throw new Error('Invalid ID');
		}
		for (const reader of this.readers) {
			if (reader.readerId === readerId) {
				return true;
			}
		}
		return false;
	}

	static setExpirationDate() {
		const d = new Date();
		let mm = d.getMonth() + 2;
		if (mm < 10) {
			mm = `0${mm}`;
		}
		const yy = d.getFullYear();
		let dd = d.getDate();
		if (dd < 10) {
			dd = `0${dd}`;
		}
		return `${dd}.${mm}.${yy}`;
	}

	lendBook(book, readerId) {
		if (book instanceof Book && this.checkReaderId(readerId)) {
			for (const item of this.books) {
				if (item.isTheSameBook(book) && this.doHaveBook(item)) {
					const newBook = new ReaderBook(item.title, item.author, item.bookId);
					newBook.isReturned = false;
					newBook.expirationDate = Library.setExpirationDate();
					item.quantity -= 1;
					return newBook;
				}
			}
		}
		throw new Error('Invalid Data');
	}
}
const book2 = new LibraryBook('ELoquent JavaScript', 'Marijn Haverbeke', 2, 5);
const book1 = new LibraryBook('YDKJY', 'Kyle Simpson', 1, 2);
const book3 = new Book(
	'One Hundred Years of Solitude',
	'Gabriel Garcia Marquez'
);
const book4 = new Book('Lolita', 'Vladimir Nabokov');
let books = [book1, book4];
let reader1 = new Reader('Dav', 'Beck', 1);
let reader2 = new Reader('Ani', 'Same', 2, [book2]);
const natLib = new Library([book2, book1], [reader1, reader2]);
reader1.books = books;
natLib.addBook(book3);
natLib.addBook(book3);

const book5 = new Book('Angels and Demons', 'Same  Author');

natLib.addBooks(book1, book3, book4);
console.log(natLib.books);
