function capitalize(val) {
	let str = val;
	str = str[0].toUpperCase() + str.slice(1).toLowerCase();
	return str.trim();
}

class Person {
	static year = new Date().getFullYear();
	constructor(firstName, lastName, gender, age) {
		this._firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.age = age;
	}

	get firstName() {
		return capitalize(this._firstName);
	}

	set firstName(value) {
		const finalValue = value.trim();
		if (finalValue === '') {
			throw new Error('persons used to have names');
		}
		this._firstName = value;
	}

	get lastName() {
		return capitalize(this._lastName);
	}

	set lastName(value) {
		const finalValue = value.trim();
		if (finalValue === '') {
			throw new Error(
				"If you don't remember your last name you can look it up in your password"
			);
		}
		this._lastName = value;
	}

	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	getBornYear() {
		return Person.year - this.age;
	}

	toString() {
		if (this.age > 18) {
			if (this.gender === 'male') {
				return `Mr. ${this.lastName} is born in ${this.getBornYear()}`;
			} else if (this.gender === 'female') {
				return `Ms. ${this.lastName} is born in ${this.getBornYear()}`;
			}
		} else {
			return `${this.fullName} is born in ${this.getBornYear()}`;
		}
	}
}

class Student extends Person {
	constructor(firstName, lastName, gender, age, programs, year, fee) {
		super(firstName, lastName, gender, age);
		this._programs = programs;
		this.year = year;
		this.fee = fee;
	}

	get programs() {
		return this._programs;
	}

	set programs(value) {
		let checkingValue = value;
		if (!(checkingValue instanceof Array)) {
			throw 'We need detailed information about your syllabus';
		}
		for (let val of checkingValue) {
			if (typeof val !== 'object') {
				throw 'We need more detailed information about your syllabus';
			}
		}
		this._programs = value;
	}

	passExam(programName, grade) {
		for (let subject of this._programs) {
			if (subject.programName === programName) {
				subject.grade = grade;
			}
		}
		if (this.hasPassedExams()) {
			return (this.year += 1);
		}
		return this.year;
	}

	hasPassedExams() {
		return this._programs.every((subject) => subject.grade >= 50);
	}
	toString() {
		if (this.hasPassedExams()) {
			return `${this.fullName} has already passed all the exams`;
		} else {
			return `${this.fullName} must finish his programs`;
		}
	}
}
