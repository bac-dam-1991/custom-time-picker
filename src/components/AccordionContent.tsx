import { ReactNode, useLayoutEffect, useRef, useState } from 'react';
import styles from './AccordionContent.module.css';
import clsx from 'clsx';

export interface AccordionContentProps {
	children: ReactNode;
	open?: boolean;
}

export const AccordionContent = ({ children, open }: AccordionContentProps) => {
	const rootClasses = clsx(styles['root']);
	const [height, setHeight] = useState(0);

	const contentRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		if (!contentRef.current) {
			return;
		}

		const { scrollHeight } = contentRef.current;

		if (open) {
			setHeight(scrollHeight);
		} else {
			setHeight(0);
		}
	}, [open]);

	return (
		<div
			className={rootClasses}
			ref={contentRef}
			style={{ height, padding: open ? 16 : '0 16px' }}
		>
			{children}
		</div>
	);
};
