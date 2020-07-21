class dateTimeData {
	constructor(divClassName, spanClassName, innerText, symbol) {
		this.divClassName = divClassName;
		this.spanClassName = spanClassName;
		this.innerText = innerText;
		this.symbol = symbol;
	}
}
const timeData = new dateTimeData(
	'time',
	['hh', 'mm', 'ss'],
	[new Date().getHours(), new Date().getMinutes(), new Date().getSeconds()],
	':'
);
const dateData = new dateTimeData(
	'date',
	['month', 'day', 'year'],
	[new Date().getMonth(), new Date().getDate(), new Date().getFullYear()],
	'/'
);

let dateFunc = {
	makeChild(arr, innerText, symbol) {
		let collection = [];
		for (let i = 0; i < arr.length; i += 1) {
			let element = document.createElement('span');
			element.classList.add(arr[i]);
			if (innerText[i] < 10) {
				element.textContent = '0' + innerText[i];
			} else {
				element.textContent = innerText[i];
			}
			if (i !== arr.length - 1) {
				element.textContent += symbol;
			}
			collection.push(element);
		}
		return collection;
	},
	makeParent(obj) {
		let element = document.createElement('div');
		element.classList.add(obj.divClassName);
		let spans = this.makeChild(obj.spanClassName, obj.innerText, obj.symbol);
		for (let i = 0; i < spans.length; i += 1) {
			element.append(spans[i]);
		}
		return element;
	},
};

let dateTime = document.querySelector('.date-time');
let date = dateFunc.makeParent(dateData);
let time = dateFunc.makeParent(timeData);
dateTime.append(date);
dateTime.append(time);

let displayBtn = document.querySelector('.date-btn');
displayBtn.addEventListener('click', () => {
	dateTime.classList.toggle('visible');
});
