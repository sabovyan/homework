import React, { Component } from 'react';

export default class Screen extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <div>{this.props.screenText}</div>;
	}
}
