import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

function Input(props) {
	return (
		<section className={styles.section}>
			<label>{props.labelName}</label>
			<input type="number" value={props.value} onChange={props.onChange} />
		</section>
	);
}

Input.propTypes = {
	labelName: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Input;
