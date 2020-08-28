import React, { Component } from 'react';
import Button from './components/Button/Button';
import Screen from './components/Screen/Screen';
import Input from './components/Input/Input';
import Range from './components/Range/Range';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			screenText: 0,
			step: 1,
			minValue: 0,
			maxValue: 10,
		};
	}
	handleIncrease = () => {
		this.setState((prevState) => ({
			screenText: prevState.screenText + prevState.step,
		}));
	};

	handleDecrease = () => {
		this.setState((prevState) => ({
			screenText: prevState.screenText - prevState.step,
		}));
	};

	handleReset = () => {
		this.setState((prevState) => ({
			screenText: prevState.minValue || 0,
		}));
	};

	handleMinValue = ({ target: { value } }) => {
		// const normalizedValue = Number(e.target.value);
		if (value < 0) {
			value = 0;
		}
		this.setState({
			minValue: Number(value),
			screenText: Number(value),
		});
	};

	handleMaxValue = ({ target: { value } }) => {
		this.setState({
			maxValue: Number(value),
		});
	};

	handleStep = ({ target: { value } }) => {
		this.setState({
			step: Number(value),
		});
	};

	render() {
		const { screenText, minValue, maxValue } = this.state;

		return (
			<div className="App">
				<Screen screenText={screenText} />
				<Button
					disabled={screenText >= maxValue ? true : false}
					text="⬆"
					onClick={this.handleIncrease}
				/>
				<Button
					disabled={screenText <= minValue ? true : false}
					text="⬇"
					onClick={this.handleDecrease}
				/>
				<Button text="&#10226;" onClick={this.handleReset} />
				<div className="inputs">
					<Input
						labelName="min"
						value={minValue}
						onChange={this.handleMinValue}
					/>
					<Input
						labelName="max"
						value={maxValue}
						onChange={this.handleMaxValue}
					/>
					<Range
						min={1}
						max={this.state.maxValue}
						step={this.state.step}
						onChange={this.handleStep}
					/>
				</div>
			</div>
		);
	}
}

export default App;
