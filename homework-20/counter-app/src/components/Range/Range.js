import React from 'react';
import styles from './Range.module.css';
import PropTypes from 'prop-types';

function Range(props) {
	return (
		<div className={styles.range__container}>
			<input
				className={styles.range}
				type="range"
				onChange={props.onChange}
				min={props.min}
				max={props.max}
			/>
			<output>{props.step}</output>
		</div>
	);
}

Range.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number,
};

export default Range;
