import { FormEventHandler, ReactNode } from 'react';
import { FormChangeHandler, FormContext } from './FormProvider';
import { FormInstance } from './interfaces/FormInstance';
import { FormValues } from './interfaces/FormValues';

export interface FormProps {
	children: ReactNode;
	form: FormInstance;
	onSubmit: (formValues: FormValues) => void;
}

export const Form = ({ children, form, onSubmit }: FormProps) => {
	const onChange = ({ value, name }: FormChangeHandler) => {
		const values = { ...form.values, [name]: value };
		form.values = values;
	};

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		onSubmit(form.values);
	};

	return (
		<FormContext.Provider value={{ values: form.values, onChange }}>
			<form onSubmit={handleSubmit}>{children}</form>
		</FormContext.Provider>
	);
};
