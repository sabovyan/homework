/* eslint-disable max-classes-per-file */
/* eslint-disable no-underscore-dangle */

// to display names adn titles with capitalized
function capitalize(val) {
	let str = val;
	str = str[0].toUpperCase() + str.slice(1).toLowerCase();
	return str.trim();
}
// to display numbers with space for better readability
function displaywithSpaces(val) {
	let str = String(val);
	let final = '';
	const res = [];

	while (str.length > 3) {
		res.push(str.substr(str.length - 3));
		str = str.substr(0, str.length - 3);
	}
	final = str;

	for (const item of res) {
		final += ` ${item}`;
	}
	return final;
}
class Author {
	constructor(name, email, gender) {
		this._name = name;
		this.email = email;
		this.gender = gender;
	}

	get name() {
		return capitalize(this._name);
	}

	set name(value) {
		const finalValue = value.trim();
		if (finalValue.length < 2) {
			throw new Error('Authors must have longer names');
		}
		this._name = value;
	}

	toString() {
		return `${this.name} is a ${this.gender} autor \nContacts: ${this.email}`;
	}
}

class Book {
	constructor(title, author, price, quantity) {
		this._title = title;
		this._author = author;
		this.price = price;
		this.quantity = quantity;
	}

	get title() {
		return capitalize(this._title);
	}

	set title(value) {
		const finalValue = value.trim();
		if (finalValue === '') {
			throw new Error('Authors must have longer names');
		}
		this._title = value;
	}

	get author() {
		return this._author.name;
	}

	set author(value) {
		const comparingValue = value;
		if (typeof comparingValue === 'string') {
			throw new Error("We don't know this author");
		}
		this._author = value;
	}

	getProfit() {
		const profit = String(this.price * this.quantity);
		const finalanswer = displaywithSpaces(profit);

		return finalanswer;
	}

	toStirng() {
		return `${this.title} was written by ${
			this.author
		}\nwho is going to have $${this.getProfit()}`;
	}
}
const Tsitsernak = new Author('Tsitsernak', 'armen@mail.com', 'male');
const shikahav = new Author('shikahav', 'arpen@mail.com', 'female');

const swallow = new Book('swallow', Tsitsernak, 200, 1000);
const robin = new Book('robin', shikahav, 10, 3000);
console.log(swallow.toStirng());
console.log(robin.toStirng());
