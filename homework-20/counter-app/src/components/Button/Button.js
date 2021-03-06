import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button(props) {
	return (
		<button
			disabled={props.disabled}
			className={styles.button}
			onClick={props.onClick}
		>
			{props.text}
		</button>
	);
}

Button.propTypes = {
	disabled: PropTypes.bool,
};
