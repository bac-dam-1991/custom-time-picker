import {
	ChangeEventHandler,
	Children,
	cloneElement,
	CSSProperties,
	ReactElement,
} from 'react';
import { FieldLabel } from './FieldLabel';
import { useFormContext } from './FormProvider';
import { FieldValue } from './types/FieldValue';

export type FieldOrientation =
	| 'row'
	| 'column'
	| 'column-reverse'
	| 'row-reverse';
export interface FieldProps {
	children: ReactElement[] | ReactElement;
	name: string;
	style?: CSSProperties;
	orientation?: FieldOrientation;
}

export const Field = ({
	children,
	name,
	style,
	orientation = 'column',
}: FieldProps) => {
	const { values, onChange } = useFormContext();

	const childrenElements = Array.isArray(children) ? children : [children];

	return (
		<div
			style={{
				display: 'flex',
				gap: 8,
				flexDirection: orientation,
				alignItems: orientation === 'column' ? 'normal' : 'center',
				...style,
			}}
		>
			{Children.map(childrenElements, (child) => {
				if (child.type === FieldLabel) {
					return cloneElement<{ name?: string }>(child, {
						...child.props,
						name,
					});
				}

				return cloneElement<{
					defaultValue: string;
					onChange?: ChangeEventHandler<HTMLInputElement>;
					id?: string;
					defaultChecked?: boolean;
				}>(child, {
					...child.props,
					defaultValue: values[name],
					defaultChecked: values[name],
					id: name,
					onChange: ({ target }) => {
						let value: FieldValue = target.value;

						if (child.props.type === 'checkbox') {
							value = target.checked;
						}

						onChange({ value, name });
					},
				});
			})}
		</div>
	);
};
