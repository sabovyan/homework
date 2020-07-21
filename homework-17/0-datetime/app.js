/**
 * @class dateTimeDate -  to gather info about date and time separately
 */

class dateTimeData {
	constructor(divClassName, spanClassName) {
		this.divClassName = divClassName;
		this.spanClassName = spanClassName;
	}
}
const timeData = new dateTimeData('time', ['hh', 'mm', 'ss']);
const dateData = new dateTimeData('date', ['month', 'day', 'year']);

/**
 * @type	{Object}
 * @description - it contains all the functions
 */
let dateFunc = {
	/**
	 * makeChild(arr) is responsible for creating spans
	 * @argument {Array} arr - an array of class names for spans
	 * @returns {Array} - array of spans with classes
	 * @example
	 * let spans = this.makeChild(obj.spanClassName);
	 */
	makeChild(arr) {
		const collection = [];
		for (let i = 0; i < arr.length; i += 1) {
			const element = document.createElement('span');
			element.classList.add(arr[i]);
			collection.push(element);
		}
		return collection;
	},

	/**
	 * makeParent(obj) is responsible for creating parent element
	 * @argument {object} arr - an array of class names for spans
	 * @returns {HTMLElement} - an HTML element width inner span elements
	 * @example
	 * let time = dateFunc.makeParent(timeData);
	 */
	makeParent(obj) {
		const element = document.createElement('div');
		element.classList.add(obj.divClassName);
		const spans = this.makeChild(obj.spanClassName);
		for (let i = 0; i < spans.length; i += 1) {
			element.append(spans[i]);
		}
		return element;
	},
	/**
	 * updateData(elem, innerText, symbol) is responsible for updating the data in the span elements
	 * @argument {HTMLElement} elem - an HTML element width inner span elements
	 * @argument {object} innerText - an array of date information
	 * @argument {string} symbol - it is a sybol that will be added at the end of the element
	 * @returns {HTMLElement} - with updated inner Text
	 * @example
	 * dateFunc.updateData(
			time,
			[new Date().getHours(), new Date().getMinutes(), new Date().getSeconds()],
			' : '
		);
	 */
	updateData(elem, innerText, symbol) {
		let arr = Array.from(elem.children);
		for (let i = 0; i < arr.length; i++) {
			let element = arr[i];
			if (innerText[i] < 10) {
				element.textContent = `0${innerText[i]}`;
			} else {
				element.textContent = ` ${innerText[i]} `;
			}
			if (i !== arr.length - 1) {
				element.textContent += symbol;
			}
		}
	},
};

let date = dateFunc.makeParent(dateData);
let time = dateFunc.makeParent(timeData);

let dateTime = document.querySelector('.date-time');
let displayBtn = document.querySelector('.date-btn');

/**
 *  an EventListener for the button width a class of 'date-btn'
 *
 */
displayBtn.addEventListener('click', () => {
	if (dateTime.classList.contains('visible')) {
		dateTime.classList.remove('visible');
		displayBtn.classList.remove('left-anime');
		displayBtn.classList.add('right-anime');
	} else {
		dateFunc.updateData(
			time,
			[new Date().getHours(), new Date().getMinutes(), new Date().getSeconds()],
			' : '
		);
		dateFunc.updateData(
			date,
			[new Date().getMonth(), new Date().getDate(), new Date().getFullYear()],
			' / '
		);
		dateTime.classList.add('visible');
		displayBtn.classList.remove('right-anime');
		displayBtn.classList.add('left-anime');
		dateTime.append(date);
		dateTime.append(time);
	}
});
