import { HTMLAttributes } from 'react';
import styles from './FormRow.module.css';

export interface FormRowProps extends HTMLAttributes<HTMLDivElement> {}

export const FormRow = ({ children, ...rest }: FormRowProps) => {
	return (
		<div {...rest} className={styles['form-row']}>
			{children}
		</div>
	);
};
