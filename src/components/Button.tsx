import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, ...rest }: ButtonProps) => {
	return (
		<button {...rest} className={styles['button']}>
			{children}
		</button>
	);
};
