import {
	Children,
	cloneElement,
	CSSProperties,
	ReactElement,
	useState,
} from 'react';
import { FieldLabel } from './FieldLabel';
import { useFormContext } from './FormProvider';
import { FormValues } from './interfaces/FormValues';

export interface FieldGroupProps {
	children: ReactElement[];
	name: string;
	style?: CSSProperties;
}

export const FieldGroup = ({ children, name }: FieldGroupProps) => {
	const { form } = useFormContext();
	const [fieldValue, setFieldValue] = useState<string[]>(
		((form.values as FormValues)[name] as string[]) || []
	);

	return (
		<>
			{Children.map(children, (child) => {
				if (child.type === FieldLabel) {
					return child;
				}

				return cloneElement(child, {
					...child.props,
					name,
					id: name,
					checked: fieldValue.includes(child.props.value),
					onChange: (value: string) => {
						const values = fieldValue.includes(value)
							? fieldValue.filter((v) => v !== value)
							: [...fieldValue, value];
						setFieldValue(values);
						form.values = { ...form.values, [name]: values };
					},
				});
			})}
		</>
	);
};
