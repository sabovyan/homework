import React, { Component } from 'react';
import Button from './components/Button/Button';
import Screen from './components/Screen/Screen';

// const buttons = ['Increase', 'Decrease', 'Reset'];

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			screenText: 0,
			step: 1,
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
			screenText: 0,
		}));
	};

	render() {
		const { screenText, btnDisabled } = this.state;
		return (
			<div className="App">
				<Screen screenText={screenText} />
				<Button text="⬆" onClick={this.handleIncrease} />
				<Button
					disabled={screenText <= 0 ? true : false}
					text="⬇"
					onClick={this.handleDecrease}
				/>
				<Button text="🔄" onClick={this.handleReset} />
			</div>
		);
	}
}

export default App;
