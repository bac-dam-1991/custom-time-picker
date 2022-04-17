import { Children, cloneElement, ReactElement, useReducer } from 'react';
import styles from './Accordion.module.css';
import clsx from 'clsx';
import { AccordionItem, AccordionItemProps } from './AccordionItem';
import {
	AccordionReducer,
	combineReducer,
	MultipleAccordionsReducer,
	PreventCloseAccordionReducer,
	SingleAccordionReducer,
} from './AccordionReducers';

export interface AccordionProps {
	children: ReactElement[];
	preventClose?: boolean;
	multiple?: boolean;
}

export const Accordion = ({
	children,
	preventClose,
	multiple,
}: AccordionProps) => {
	const rootClasses = clsx(styles['root']);

	const reducers: AccordionReducer[] = [];

	if (preventClose) {
		reducers.push(PreventCloseAccordionReducer);
	}

	if (multiple) {
		reducers.push(MultipleAccordionsReducer);
	} else {
		reducers.push(SingleAccordionReducer);
	}

	const reducer = combineReducer(...reducers);

	const [openIndexes, dispatch] = useReducer(reducer, [0]);

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
