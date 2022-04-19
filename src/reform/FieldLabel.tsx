import { CSSProperties, ReactNode } from 'react';

export interface FieldLabelProps {
	children: ReactNode;
	name?: string;
	style?: CSSProperties;
}

export const FieldLabel = ({ children, name, style }: FieldLabelProps) => {
	return (
		<label htmlFor={name} style={{ fontSize: '0.875rem', ...style }}>
			{children}
		</label>
	);
};
