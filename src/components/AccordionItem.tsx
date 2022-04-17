import { Children, cloneElement, ReactElement } from 'react';
import styles from './AccordionItem.module.css';
import clsx from 'clsx';
import { AccordionSummary, AccordionSummaryProps } from './AccordionSummary';
import { AccordionContent, AccordionContentProps } from './AccordionContent';

export interface AccordionItemProps {
	children: ReactElement[];
	open?: boolean;
	onAccordionItemClick?: (item: number) => void;
}

export const AccordionItem = ({
	children,
	open,
	onAccordionItemClick,
}: AccordionItemProps) => {
	const rootClasses = clsx(styles['root']);

	return (
		<div className={rootClasses}>
			{Children.map(children, (child) => {
				if (child.type === AccordionSummary) {
					return cloneElement<AccordionSummaryProps>(child, {
						...child.props,
						onClick: onAccordionItemClick,
					});
				}

				if (child.type === AccordionContent) {
					return cloneElement<AccordionContentProps>(child, {
						...child.props,
						open,
					});
				}
			})}
		</div>
	);
};
