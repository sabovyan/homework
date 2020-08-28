import React from 'react';
import styles from './Range.module.css';

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
export default Range;
