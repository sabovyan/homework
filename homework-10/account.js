/* eslint-disable no-underscore-dangle */
class Account {
	constructor(id, name, balance) {
		this.id = id;
		this._name = name;
		this._balance = balance;
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
			throw new Error('Neo: you better go with letters');
		} else if (comparingValue.trim() === '' || comparingValue.length < 2) {
			throw new Error("Neo: ha ha ha that's so funny!");
		}
		this._name = value.trim();
	}

	set balance(value) {
		const comparingValue = value;
		if (typeof comparingValue !== 'number') {
			throw new Error('Are you serious? Neo neeeds numbers');
		}
		if (comparingValue < 10) {
			throw new Error('Stop fooling me!\nNeo knows that you have more');
		}
		this._balance = value;
	}

	credit(amount) {
		if (amount < 0) {
			throw new Error('Not enough money');
		}
		this.balance += amount;
	}

	debit(amount) {
		if (amount < this._balance) {
			this._balance -= amount;
		}
		throw new Error(
			'Our client is very Poor! \nWhat about at the beginning of the next month?'
		);
	}

	static identifyAccounts(accoutFirst, accountSecond) {
		// ANCHOR my version
		/* for (const key of Object.keys(accoutFirst)) {
			if (Object.keys(accountSecond).includes(key)) {
				if (accoutFirst[key] === accountSecond[key]) {
					return true;
				}
			}
		}
		return false; */

		return JSON.stringify(accoutFirst) === JSON.stringify(accountSecond);
	}

	toString() {
		if (this._balance <= 100) {
			return `${this._name}'s balnace is ${this._balance}.\nPlease help to find some extra funds`;
		}
		return `${this._name}'s balnace is ${this._balance}.\nP.S You can borrow some money`;
	}

	transferTo(acc2, amount) {
		this.debit(amount);
		acc2.credit(amount);
		return this.balance;
	}
}
