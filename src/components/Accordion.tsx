import { Children, cloneElement, ReactElement, useReducer } from 'react';
import styles from './Accordion.module.css';
import clsx from 'clsx';
import { AccordionItem, AccordionItemProps } from './AccordionItem';
import { AccordionReducer } from './AccordionReducer';

export interface AccordionProps {
	children: ReactElement[];
}

export const Accordion = ({ children }: AccordionProps) => {
	const rootClasses = clsx(styles['root']);

	const [openIndexes, dispatch] = useReducer(AccordionReducer, []);

	return (
		<div className={rootClasses}>
			{Children.map(children, (child, index) => {
				if (child.type !== AccordionItem) {
					throw new Error('Child must be a <AccordionItem /> component.');
				}

				return cloneElement<AccordionItemProps>(child, {
					...child.props,
					open: openIndexes.includes(index),
					onAccordionItemClick: () =>
						dispatch({ action: 'selected_index', index }),
				});
			})}
		</div>
	);
};
