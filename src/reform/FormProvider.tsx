import { createContext, ReactNode, useContext } from 'react';
import { FormValues } from './interfaces/FormValues';
import { FieldValue } from './types/FieldValue';

export interface FormChangeHandler {
	value: FieldValue;
	name: string;
}

export interface FormContextProps {
	values: FormValues;
	onChange: (value: FormChangeHandler) => void;
}

export const FormContext = createContext<FormContextProps>({
	values: {},
	onChange: (value: FormChangeHandler) => {},
});

export interface FormProviderProps {
	children: ReactNode;
}

export const useFormContext = () => useContext(FormContext);
