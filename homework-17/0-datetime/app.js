class dateTimeData {
	constructor(divClassName, spanClassName, innerText, symbol) {
		this.divClassName = divClassName;
		this.spanClassName = spanClassName;
	}
}
const timeData = new dateTimeData('time', ['hh', 'mm', 'ss']);
const dateData = new dateTimeData('date', ['month', 'day', 'year']);

let dateFunc = {
	makeChild(arr) {
		let collection = [];
		for (let i = 0; i < arr.length; i += 1) {
			let element = document.createElement('span');
			element.classList.add(arr[i]);
			collection.push(element);
		}
		return collection;
	},
	makeParent(obj) {
		let element = document.createElement('div');
		element.classList.add(obj.divClassName);
		let spans = this.makeChild(obj.spanClassName);
		for (let i = 0; i < spans.length; i += 1) {
			element.append(spans[i]);
		}
		return element;
	},
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
displayBtn.addEventListener('click', () => {
	if (dateTime.classList.contains('visible')) {
		console.log('soo');
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
