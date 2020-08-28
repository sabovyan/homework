import React from 'react';
import styles from './Input.module.css';

function Input(props) {
	return (
		<section className={styles.section}>
			<label></label>
			{props.labelName}
			<input type="number" value={props.value} onChange={props.onChange} />
		</section>
	);
}

export default Input;
