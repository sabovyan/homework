import React from 'react';
import PropTypes from 'prop-types';
import './Screen.css';

function Screen(props) {
	return <div className="screen">{props.screenText}</div>;
}

Screen.propTypes = {
	screenText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Screen;
