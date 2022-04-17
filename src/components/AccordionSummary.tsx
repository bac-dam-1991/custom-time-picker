import { ReactNode } from 'react';
import styles from './AccordionSummary.module.css';

export interface AccordionSummaryProps {
	children: ReactNode;
	onClick?: () => void;
}

export const AccordionSummary = ({
	children,
	onClick,
}: AccordionSummaryProps) => {
	return (
		<div className={styles['root']} onClick={onClick}>
			{children}
		</div>
	);
};
