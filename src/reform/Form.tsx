import { FormEventHandler, ReactNode, useState } from 'react';
import { FormChangeHandler, FormContext, FormValues } from './FormProvider';

export interface FormProps {
	children: ReactNode;
	onSubmit: (formValues: FormValues) => void;
	initialValues?: FormValues;
}

export const Form = ({ children, onSubmit, initialValues = {} }: FormProps) => {
	const [values, setValues] = useState<FormValues>(initialValues);

	const onChange = ({ value, name }: FormChangeHandler) => {
		setValues((prevState) => {
			return { ...prevState, [name]: value };
		});
	};

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		onSubmit(values);
	};

	return (
		<FormContext.Provider value={{ values, onChange }}>
			<form onSubmit={handleSubmit}>{children}</form>
		</FormContext.Provider>
	);
};
