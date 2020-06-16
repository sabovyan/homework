class Account {
	constructor(id, name, balance) {
		this._id = id;
		this._name = name;
		this._balance = balance;
	}

	get id() {
		return this._id;
	}

	get name() {
		return this._name;
	}

	get balance() {
		return this._balance;
	}

	set name(value) {
		const comparingValue = value;
		if (typeof comparingValue !== 'string') {
			throw 'Neo: you better go with letters';
		} else if (comparingValue.trim() === '' || comparingValue.length < 2) {
			throw "Neo: ha ha ha that's so funny!";
		}
		this._name = value.trim();
	}

	set balance(value) {
		const comparingValue = value;
		if (typeof comparingValue !== 'number') {
			throw 'Are you serious? Neo neeeds numbers';
		}
		if (comparingValue < 10) {
			throw 'Stop fooling me! \nNeo knows that you have more';
		}
		this._balance = value;
	}

	credit(amount) {
		this._balance += amount;
	}

	debit(amount) {
		if (amount < this._balance) {
			this._balance -= amount;
		}
		return 'Our client is very Poor! \nWhat about at the beginning of the next month?';
	}

	static identifyAccounts(accoutFirst, accountSecond) {
		for (let key of Object.keys(accoutFirst)) {
			if (Object.keys(accountSecond).includes(key)) {
				if (accoutFirst[key] === accountSecond[key]) {
					return true;
				}
			}
		}
		return false;
	}

	toString() {
		if (this._balance <= 100) {
			return `${this._name}'s balnace is ${this._balance}.\nPlease help to find some extra funds`;
		}
		return `${this._name}'s balnace is ${this._balance}.\nP.S You can borrow some money`;
	}
}

const andrei = new Account(1, 'Andrei', 1000);
const andrew = new Account(1, 'Andrei', 1000);
const olya = new Account(3, 'Olya', 1000);
const another = {
	name: 'Sue',
	id: 2,
};
andrei.balance = 10;
// console.log(andrei.debit(15));
console.log(andrei.credit(15));
console.log(andrei.debit(10));
console.log(String(olya));
console.log(Account.identifyAccounts(andrei, andrew));
