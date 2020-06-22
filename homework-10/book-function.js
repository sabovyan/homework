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

function Author(name, email, gender) {
	this._name = name;
	this.email = email;
	this.gender = gender;
	Object.defineProperty(this, 'name', {
		get() {
			return capitalize(this._name);
		},
		set(value) {
			const finalValue = value.trim();
			if (finalValue.length < 2) {
				throw new Error('Authors must have longer names');
			}
			this._name = value.trim();
		},
	});
}
Author.prototype.toString = function toString() {
	return `${this.name} is a ${this.gender} autor \nContacts: ${this.email}`;
};

function Book(title, author, price, quantity) {
	this._title = title;
	this._author = author;
	this.price = price;
	this.quantity = quantity;
	Object.defineProperty(this, 'title', {
		get() {
			return capitalize(this._title);
		},
		set(value) {
			const finalValue = value.trim();
			if (finalValue === '') {
				throw new Error('Authors must have longer names');
			}
			this._title = value;
		},
	});
	Object.defineProperty(this, 'author', {
		get() {
			return this._author.name;
		},
		set(value) {
			const comparingValue = value;
			if (typeof comparingValue === 'string') {
				throw new Error("We don't know this author");
			}
			this._author = value;
		},
	});
}

Book.prototype.getProfit = function getProfit() {
	const profit = String(this.price * this.quantity);
	const finalanswer = displaywithSpaces(profit);

	return finalanswer;
};
Book.prototype.toStirng = function toStirng() {
	return `${this.title} was written by ${
		this.author
	}\nwho is going to have $${this.getProfit()}`;
};
