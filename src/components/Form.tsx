import { FormHTMLAttributes } from 'react';
import styles from './Form.module.css';
import clsx from 'clsx';

export type FormDirection = 'vertical' | 'horizontal';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
	direction?: FormDirection;
}

export const Form = ({
	children,
	direction = 'vertical',
	...rest
}: FormProps) => {
	return (
		<form
			{...rest}
			className={clsx(
				styles['form-root'],
				styles[`form-root_${direction}`],
				styles['form-standard']
			)}
		>
			{children}
		</form>
	);
};
