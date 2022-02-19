import { SelectHTMLAttributes } from 'react';
import styles from './Select.module.css';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export const Select = ({ children, ...rest }: SelectProps) => {
	return (
		<select className={styles['root']} {...rest}>
			{children}
		</select>
	);
};
